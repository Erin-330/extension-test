# RORR

스포츠 라이브 채팅·퀴즈·부스트 기반 팬 인터랙션 웹 앱.

## 기술 스택

- **React 18** + **TypeScript 5** + **Vite 5**
- **TanStack Query 5** — 서버 상태
- **Zustand 5** — 클라이언트 상태
- **Tailwind CSS 3** — 스타일링
- **Feature-Sliced Design (FSD)** — 폴더 아키텍처

## 개발 명령어

```bash
npm install        # 의존성 설치
npm run dev        # 개발 서버 (Vite)
npm run build      # 타입 체크 + 프로덕션 빌드
npm run preview    # 빌드 결과 미리보기
npm run type-check # 타입 체크만 실행
```

## 폴더 구조

```
src/
  pages/              라우트 단위 페이지 + MOCK 데이터
    main/
    schedule/
  features/           도메인 단위 기능 (api / model / ui)
    follow/
    league-filter/
  shared/             전역 재사용 자원
    ui/               AppHeader, LoadingSpinner, PageScrollLayout
    constants/        PAGES 등 공용 상수
  components/         디자인 시스템 컴포넌트 (Button 등)
  App.tsx             라우팅 진입점
  main.tsx            React 마운트
```

자세한 레이어 규칙은 `.claude/docs/01-architecture.md` 참조.

## 페이지 구현 스펙

각 페이지의 Figma URL, 레이아웃, 상태, API 명세는 `.claude/docs/pages/`에 정리되어 있습니다.
목록은 `.claude/docs/pages/README.md`를 참고하세요.

## 필수 규칙

자세한 내용은 `CLAUDE.md` 참조.

1. **최상위 컨테이너에 `h-dvh w-full`** — `body`가 flex 컨테이너이므로 `w-full` 누락 시 너비가 content에 맞춰 수축한다.
2. **아이콘·SVG는 Figma MCP 에셋 URL 그대로 사용** — 수작업 SVG path, `placehold.co` 같은 외부 placeholder 금지.
3. **API 없이도 목 데이터로 즉시 렌더** — 로딩 중에도 빈 화면이 되지 않도록 `MOCK_*` 상수를 표시한다.
4. **Figma 값을 픽셀 단위로 그대로 사용** — `h-[68px]`, `gap-[16px]` 등 근사값으로 대체하지 않는다.

## 디자인 토큰

`tailwind.config.ts`에 정의된 주요 색상:

| 토큰 | 값 |
|------|-----|
| `background` | `#f0f2f5` |
| `surface` | `#ffffff` |
| `primary` | `#2d39b4` |
| `scoreColor` | `#4f80ff` |
| `btn-default` / `btn-hover` / `btn-disabled` | `#969cda` / `#afb5ea` / `#b2bac3` |
| `border-default` | `#ced6e6` |

폰트: `Pretendard`.
