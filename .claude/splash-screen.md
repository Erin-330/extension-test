# 스플래시 화면 구현 스펙

> 이 파일의 코드를 그대로 복사해 구현할 것. 임의로 변경하지 말 것.

## 프로젝트 환경

- **바닐라 JS + Vite** (React 없음)
- Rive 패키지: `@rive-app/canvas` (이미 설치됨)
- 기존 페이지 패턴: `*.html` + `src/*.js` 쌍

---

## 생성할 파일

| 파일 | 역할 |
|------|------|
| `splash.html` | 스플래시 페이지 |
| `src/splash.js` | Rive 로직 |

## 수정할 파일

| 파일 | 변경 내용 |
|------|-----------|
| `vite.config.js` | `splash` 엔트리 추가 |
| `public/manifest.json` | `default_path`를 `"splash.html"`로 변경 |

---

## Rive 정보

| 항목 | 값 |
|------|----|
| CDN URL | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/splash.riv` |
| 아트보드 | `SplashAni` |
| State Machine | `State Machine 1` |
| 트리거 인풋 | `start` |
| 완료 이벤트 | `EVENT DONE` |

---

## 색상

| 변수 | 값 | 설명 |
|------|----|------|
| `BG_COLOR_START` | `#8000FF` | 스플래시 배경 (보라) |
| `BG_COLOR_END` | `#000000` | 페이드아웃 후 배경 (검정) |
| `BG_TRANSITION_MS` | `1000` | 전환 시간(ms) |

---

## splash.html

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>RORR</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #8000FF;
      transition: background-color 1000ms ease-out;
    }
    body.fading { background-color: #000000; }
    .wrap {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas { display: block; }
  </style>
</head>
<body>
  <div class="wrap">
    <canvas id="splash-canvas" width="300" height="300"></canvas>
  </div>
  <script type="module" src="./src/splash.js"></script>
</body>
</html>
```

---

## src/splash.js

```js
import { Rive, EventType } from '@rive-app/canvas'

const SPLASH_RIV_SRC = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/splash.riv'
const SPLASH_SHOWN_KEY = 'splash-shown'
const BG_TRANSITION_MS = 1000

// DEV 모드에서는 항상 표시, 프로덕션에서는 세션당 1회
if (!import.meta.env.DEV && sessionStorage.getItem(SPLASH_SHOWN_KEY)) {
  window.location.replace('login.html')
}

const canvas = document.getElementById('splash-canvas')

function onComplete() {
  document.body.classList.add('fading')
  setTimeout(() => {
    sessionStorage.setItem(SPLASH_SHOWN_KEY, '1')
    window.location.replace('login.html')
  }, BG_TRANSITION_MS)
}

const r = new Rive({
  src: SPLASH_RIV_SRC,
  canvas,
  artboard: 'SplashAni',
  stateMachines: 'State Machine 1',
  autoplay: true,
  onLoad: () => {
    const inputs = r.stateMachineInputs('State Machine 1')
    const trigger = inputs?.find(i => i.name === 'start')
    trigger?.fire()
  },
  onLoadError: () => onComplete(),
})

r.on(EventType.RiveEvent, (event) => {
  if (event.data?.name === 'EVENT DONE') onComplete()
})
```

---

## vite.config.js 변경

`rollupOptions.input`에 아래 한 줄 추가:

```js
splash: resolve(__dirname, 'splash.html'),
```

---

## public/manifest.json 변경

```json
"side_panel": {
  "default_path": "splash.html"
}
```

---

## 동작 흐름

```
splash.html 열림
  └─ sessionStorage 확인
       ├─ DEV 모드 또는 키 없음 → Rive 로드
       │     └─ onLoad → start 트리거 fire
       │           └─ 애니메이션 실행
       │                 └─ EVENT DONE 수신
       │                       └─ body.fading 클래스 추가 (보라 → 검정 1초)
       │                             └─ sessionStorage 키 저장 → login.html 이동
       └─ 키 있음(프로덕션) → 즉시 login.html 이동
```
