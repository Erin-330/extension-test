# RORR — Project Context

## Spec Files (읽기 규칙)
- **프로젝트 최초 구성 / 빌드 환경 세팅 시** → `.claude/infrastructure.md` 먼저 읽을 것 (package.json, vite.config.js, manifest.json, background.js, build.yml, .gitignore, tokens.css 전체 내용 포함)
- **로딩 영역 / 로딩 스피너 / 초기 로딩 / 무한 스크롤 로딩이 포함된 모든 페이지·컴포넌트 작업 시** → `.claude/loading-rive.md` 반드시 읽을 것; **Rive 사용 필수** — CSS 스피너·정적 이미지로 대체 불가, 반드시 `@rive-app/canvas` 와 `loading-page.riv` 로 구현할 것
- `login.html` 관련 작업 시 → `.claude/login.md` 먼저 읽을 것
- `profile.html` 관련 작업 시 → `.claude/profile.md` 먼저 읽을 것
- `follow.html` / 팔로우 관련 작업 시 → `.claude/follow-ui-layout.md` 먼저 읽을 것
- `rank.html` / 랭킹 관련 작업 시 → `.claude/rank-ui-layout.md` 와 `.claude/rank-rive-graph.md` 모두 먼저 읽을 것
- `streak-history.html` / 스트릭 히스토리 / 스트릭 기록 / streak history 관련 작업 시 (페이지 생성 요청 포함) → `.claude/streak-history.md` 와 `.claude/streak-status-fire-rive.md` 모두 먼저 읽을 것 (Rive 파일 URL, 아트보드명, 이벤트명 등 모두 이 파일 기준으로 구현할 것); **Rive 사용 필수** — 반드시 `@rive-app/canvas` 로 애니메이션 구현, 정적 대체 불가
- `splash.html` / 스플래시 관련 작업 시 → `.claude/splash-screen.md` 먼저 읽을 것 (Rive 파일 URL, 아트보드명, 이벤트명 등 모두 이 파일 기준으로 구현할 것)
- 부스트 내역 / 부스트 목록 / boost list / boost history 관련 작업 시 → `.claude/boost-list.md` 와 `.claude/loading-rive.md` 모두 먼저 읽을 것; **Rive 사용 필수** — 로딩·빈 상태·좋아요 버튼 모두 Rive로 구현, 정적 대체 불가
- 구매 내역 / 구매 목록 / purchase list / purchase history 관련 작업 시 → `.claude/purchase-list.md` 와 `.claude/loading-rive.md` 모두 먼저 읽을 것; **Rive 사용 필수** — 로딩 영역은 반드시 `loading-page.riv` 로 구현
- 스트릭 퀴즈 / 퀴즈 창 / streak quiz / QuizWindow / StreakWindowQuiz 관련 작업 시 → `.claude/streak-quiz.md` 먼저 읽을 것 (Rive 파일 URL, 아트보드명, 뷰모델 바인딩, 이벤트명 등 모두 이 파일 기준으로 구현할 것); **Rive 사용 필수**
- 스트릭 이벤트 / 이벤트 창 / streak event / EventWindow / StreakWindowEvent 관련 작업 시 → `.claude/streak-event.md` 먼저 읽을 것 (Rive 파일 URL, 아트보드명, 뷰모델 바인딩, 이벤트명 등 모두 이 파일 기준으로 구현할 것); **Rive 사용 필수**
- 스케줄 / 경기 일정 / schedule / SchedulePage / ScheduleDetailPage / LeagueFilterPage 관련 작업 시 → `.claude/schedule.md` 먼저 읽을 것
- 디자인/스타일 작업 시 → `.claude/Design System.md` 참고할 것

## Service
- **Service name:** RORR
- **Design system:** `Design System.md` (single source of truth for all tokens, typography, components)

## Assets
- **Logo / emblem:** hosted on S3 at `https://erin-bucket-team.s3.amazonaws.com/RORR%20EMBLEM.png`
  - Always reference this URL for the RORR emblem in web pages
  - Local file `RORR EMBLEM.png` exists in the project root for offline reference only

## 스타일 규칙
- 모든 색상·타이포그래피·이펙트는 반드시 `Design System.md`의 토큰을 사용할 것
- 토큰의 용도(Use 컬럼)를 확인하고 의미에 맞게 사용할 것 — 임의로 비슷한 토큰으로 대체하지 말 것
- 리스트(`ul`, `li` 등)가 있는 경우 항목 간 `gap: 4px` 적용할 것

## Login Page Rules
- Authentication: Google OAuth only — no email/password fields
- Below the Google Sign-In button, include two links: **Terms of Use** and **Privacy Policy**
- Footer must always include: ⓒPitch Interactive Co.,LTD. All rights reserved

---

## Chrome Extension 아키텍처

이 프로젝트는 **Chrome Extension Manifest V3 — Side Panel** 앱이다. 코드를 생성할 때 반드시 이 구조를 따른다.

### 핵심 규칙
- 번들러: **Vite** — 각 HTML 파일이 독립적인 entry point
- Rive 사용 시: `@rive-app/canvas` 패키지, CSP에 `wasm-unsafe-eval` 필수
- 툴바 아이콘 클릭 → `background.js`가 `chrome.sidePanel.open()` 호출

### 파일 구조
```
public/
  manifest.json     — Manifest V3, sidePanel 권한, background service worker
  background.js     — chrome.sidePanel.open() 처리
src/
  tokens.css        — Design System.md 기반 CSS 변수 (모든 페이지가 import)
  [page].js         — 각 페이지 로직
[page].html         — 각 페이지 entry (src/tokens.css + src/[page].js import)
vite.config.js      — 각 HTML을 rollupOptions.input에 등록
package.json        — @rive-app/canvas, vite
```

### 빌드 & 배포
- `npm run build` → `dist/` 생성
- `develop` 브랜치 push → GitHub Actions가 자동 빌드 후 `dist/` 전체를 `rorr-extension.zip`으로 압축해 Artifact 업로드
- Actions 탭 → 워크플로우 실행 → **Artifacts**에서 zip 다운로드 → Chrome 확장 프로그램 페이지에서 압축 해제 후 로드

