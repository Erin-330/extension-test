# 스플래시 화면 구현

## 개요

앱 최초 진입 시 Rive 애니메이션 스플래시 화면을 보여주는 구조.
세션 기준으로 한 번만 표시되고, 애니메이션 완료 후 앱 본 화면으로 전환된다.

## Rive 파일

| 환경 | 경로/URL |
|------|----------|
| 로컬 `public/` | `/rives/splash.riv` |
| 라이브(CDN) | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/splash.riv` |

- **아트보드**: `SplashAni`
- **State Machine**: `State Machine 1`
- **트리거 인풋**: `start`
- **완료 이벤트**: `EVENT DONE` (Rive Event)

## 색상 상수

```ts
const BG_COLOR_START = '#8000FF'  // 스플래시 배경 (보라)
const BG_COLOR_END   = '#000000'  // 페이드아웃 후 배경 (검정)
const BG_TRANSITION_DURATION_MS = 1000
```

## 파일 구조

```
src/
├── app/providers/
│   ├── splash-context.ts      ← Context 정의
│   ├── splash.tsx             ← SplashProvider (sessionStorage 기반 노출 제어)
│   └── useSplashActive.ts     ← isSplashActive 훅
└── shared/ui/SplashScreen/
    ├── SplashRive.tsx         ← Rive 렌더링 컴포넌트
    └── SplashScreen.tsx       ← 배경 색상 전환 + 레이아웃
```

## 구현 코드

### `shared/ui/SplashScreen/SplashRive.tsx`

```tsx
import { type FC, useEffect, useMemo, useRef } from 'react'
import { useRive, useStateMachineInput, EventType } from '@rive-app/react-canvas'
import type { EventCallback } from '@rive-app/canvas'

const SPLASH_RIV_SRC = '/rives/splash.riv'  // 로컬: public/rives/splash.riv
// CDN 사용 시: 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/splash.riv'
const ART_BOARD_NAME = 'SplashAni'
const STATE_MACHINE_NAME = 'State Machine 1'
const START_TRIGGER_NAME = 'start'
const EVENT_DONE_NAME = 'EVENT DONE'

export interface SplashRiveProps {
  artBoard?: string
  width?: number
  height?: number
  onEventDone?: () => void
}

const SplashRive: FC<SplashRiveProps> = ({ artBoard = ART_BOARD_NAME, width = 300, height = 300, onEventDone }) => {
  const riveOptions = useMemo(
    () => ({
      src: SPLASH_RIV_SRC,
      artboard: artBoard,
      stateMachines: STATE_MACHINE_NAME,
      autoplay: true,
    }),
    [artBoard],
  )

  const { rive, RiveComponent } = useRive(riveOptions)
  const startTrigger = useStateMachineInput(rive, STATE_MACHINE_NAME, START_TRIGGER_NAME)

  useEffect(() => {
    if (!rive) return
    const handleRiveEvent: EventCallback = (event) => {
      if (event.type === EventType.RiveEvent) {
        const payload = event.data as { name?: string } | undefined
        if (payload?.name === EVENT_DONE_NAME) onEventDone?.()
      }
    }
    rive.on(EventType.RiveEvent, handleRiveEvent)
    return () => { rive.off(EventType.RiveEvent, handleRiveEvent) }
  }, [rive, onEventDone])

  const riveRef = useRef(rive)
  riveRef.current = rive
  useEffect(() => () => riveRef.current?.cleanup(), [])

  useEffect(() => {
    if (startTrigger) startTrigger.fire()
  }, [startTrigger])

  return <RiveComponent style={{ width, height }} />
}

export default SplashRive
```

### `shared/ui/SplashScreen/SplashScreen.tsx`

```tsx
import { useEffect, useRef, useState } from 'react'
import SplashRive from './SplashRive'

export interface SplashScreenProps {
  imageSrc?: string
  artBoard?: string
  onComplete?: () => void
}

const BG_COLOR_START = '#8000FF'
const BG_COLOR_END = '#000000'
const BG_TRANSITION_DURATION_MS = 1000

export function SplashScreen({ imageSrc, artBoard, onComplete }: SplashScreenProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prevRootStyleRef = useRef<{
    htmlBg: string; bodyBg: string; htmlTransition: string; bodyTransition: string
  } | null>(null)
  const bgColor = isTransitioning ? BG_COLOR_END : BG_COLOR_START
  const bgTransition = isTransitioning ? `background-color ${BG_TRANSITION_DURATION_MS}ms ease-out` : 'none'

  const handleEventDone = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
  }

  useEffect(() => {
    if (!isTransitioning) return
    const timer = setTimeout(() => onComplete?.(), BG_TRANSITION_DURATION_MS)
    return () => clearTimeout(timer)
  }, [isTransitioning, onComplete])

  useEffect(() => {
    const htmlEl = document.documentElement
    const bodyEl = document.body
    prevRootStyleRef.current = {
      htmlBg: htmlEl.style.backgroundColor, bodyBg: bodyEl.style.backgroundColor,
      htmlTransition: htmlEl.style.transition, bodyTransition: bodyEl.style.transition,
    }
    return () => {
      if (!prevRootStyleRef.current) return
      htmlEl.style.backgroundColor = prevRootStyleRef.current.htmlBg
      bodyEl.style.backgroundColor = prevRootStyleRef.current.bodyBg
      htmlEl.style.transition = prevRootStyleRef.current.htmlTransition
      bodyEl.style.transition = prevRootStyleRef.current.bodyTransition
    }
  }, [])

  useEffect(() => {
    const htmlEl = document.documentElement
    const bodyEl = document.body
    htmlEl.style.transition = bgTransition
    bodyEl.style.transition = bgTransition
    htmlEl.style.backgroundColor = bgColor
    bodyEl.style.backgroundColor = bgColor
  }, [bgColor, bgTransition])

  return (
    <div
      className="box-border flex h-full min-h-dvh w-full flex-col items-center justify-center pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)] pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)]"
      style={{ backgroundColor: bgColor, transition: bgTransition }}
      aria-hidden
      role="presentation"
    >
      <div style={{ transition: isTransitioning ? `opacity ${BG_TRANSITION_DURATION_MS}ms ease-out` : 'none' }}>
        {imageSrc ? (
          <img src={imageSrc} alt="" className="h-full w-full object-contain" />
        ) : (
          <SplashRive {...(artBoard && { artBoard })} width={300} height={300} onEventDone={handleEventDone} />
        )}
      </div>
    </div>
  )
}
```

### `app/providers/splash-context.ts`

```ts
import { createContext } from 'react'

export interface SplashContextValue {
  isSplashActive: boolean
}

export const SplashContext = createContext<SplashContextValue | null>(null)
```

### `app/providers/useSplashActive.ts`

```ts
import { useContext } from 'react'
import { SplashContext } from './splash-context'

export function useSplashActive(): boolean {
  const ctx = useContext(SplashContext)
  return ctx?.isSplashActive ?? false
}
```

### `app/providers/splash.tsx`

```tsx
import { useMemo, useState, type ReactNode } from 'react'
import { SplashScreen } from '@/shared/ui/SplashScreen'
import { SplashContext } from './splash-context'

const SPLASH_SHOWN_KEY = 'splash-shown'

function getShouldShowSplash(): boolean {
  if (typeof window === 'undefined') return true
  // 개발 중 항상 보이게 하려면 아래 주석 해제:
  // if (import.meta.env.DEV) return true
  return !sessionStorage.getItem(SPLASH_SHOWN_KEY)
}

export function SplashProvider({ children }: { children: ReactNode }) {
  const [showSplash, setShowSplash] = useState(getShouldShowSplash)

  const handleSplashComplete = () => {
    sessionStorage.setItem(SPLASH_SHOWN_KEY, '1')
    setShowSplash(false)
  }

  const value = useMemo(() => ({ isSplashActive: showSplash }), [showSplash])

  return (
    <SplashContext.Provider value={value}>
      <div className="relative h-dvh w-full overflow-hidden">
        {children}
        {showSplash && (
          <div className="absolute inset-0 z-[11000] flex h-full w-full items-center justify-center" aria-hidden>
            <div className="flex h-full w-full max-w-[500px] items-center justify-center">
              <SplashScreen artBoard="SplashAni" onComplete={handleSplashComplete} />
            </div>
          </div>
        )}
      </div>
    </SplashContext.Provider>
  )
}
```

## App 등록 (app/App.tsx 또는 app/providers/index.tsx)

`SplashProvider`를 라우터 바깥에서 감싼다.

```tsx
export function App() {
  return (
    <SplashProvider>
      <RouterProvider router={router} />
    </SplashProvider>
  )
}
```

## 동작 흐름

```
앱 마운트
  └─ SplashProvider: sessionStorage 확인
       ├─ 키 없음 → SplashScreen 렌더
       │     └─ SplashRive 마운트 → autoplay 시작
       │           └─ start 트리거 fire
       │                 └─ Rive 애니메이션 실행
       │                       └─ EVENT DONE 이벤트 발생
       │                             └─ isTransitioning = true
       │                                   └─ 1000ms 후 onComplete()
       │                                         └─ sessionStorage 키 저장
       │                                               └─ showSplash = false
       └─ 키 있음 → 스플래시 생략, 바로 앱 표시
```

## 패키지

```bash
yarn add @rive-app/react-canvas
```

## Rive 파일 배포

- `public/rives/splash.riv` 로 두거나
- `SPLASH_RIV_SRC`를 S3 URL(`https://erin-bucket-team.s3.us-east-1.amazonaws.com/splash.riv`)로 변경

S3 URL 사용 시 해당 버킷에 CORS 설정이 필요하다.

## `isSplashActive` 활용

스플래시 활성 중 다른 UI(예: 채팅, 알림)를 숨길 때 사용:

```tsx
import { useSplashActive } from '@/app/providers/useSplashActive'

function SomeComponent() {
  const isSplashActive = useSplashActive()
  if (isSplashActive) return null
  return <ActualContent />
}
```
