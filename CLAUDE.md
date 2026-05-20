> **페이지 구현 스펙** (피그마 URL, 레이아웃, 상태, API, 인터랙션 완전 명세):
> `.claude/docs/pages/` 디렉토리 → 각 페이지별 파일 참조 (README.md에 목록)

| 작업 영역                               | 읽을 파일                                  |
| --------------------------------------- | ------------------------------------------ |
| FSD 레이어 구조, import 규칙, 폴더 구성 | `.claude/docs/01-architecture.md`          |
| TanStack Query, Zustand 스토어          | `.claude/docs/02-state-management.md`      |
| API 호출, Axios 클라이언트, 인터셉터    | `.claude/docs/03-api-http.md`              |
| 라우터, 인증 가드, 소셜 로그인          | `.claude/docs/04-routing-auth.md`          |
| WebSocket, 실시간 채팅                  | `.claude/docs/05-websocket-realtime.md`    |
| 공통 UI 컴포넌트, 스타일 규칙           | `.claude/docs/06-ui-components.md`         |
| Live2D, Rive 애니메이션, PIXI           | `.claude/docs/07-live2d-rive-animation.md` |
| Jest 테스트 작성, 모킹, 커버리지        | `.claude/docs/08-testing.md`               |
| 개발 명령어, 환경변수, 빌드             | `.claude/docs/09-dev-workflow.md`          |
| 공통 훅, 유틸 함수                      | `.claude/docs/10-shared-hooks-utils.md`    |
| 전체 API 엔드포인트 (URL, TS 타입)      | `.claude/docs/11-api-reference.md`         |
| 메인 페이지 (채팅, WebSocket, 퀴즈)     | `.claude/docs/12-page-main.md`             |
| 스케줄 페이지 (목록, 상세, 필터)        | `.claude/docs/13-page-schedule.md`         |
| 부스트 생성 3단계 플로우                | `.claude/docs/14-page-boost.md`            |
| 팔로우 온보딩 3단계 플로우              | `.claude/docs/15-page-follow.md`           |
| 프로필, 충전, 메시지함, 구매내역        | `.claude/docs/16-page-profile-charge-mail.md` |
| 랭킹 페이지                             | `.claude/docs/17-page-rank.md`             |
| 퀴즈, 내 픽, 스트릭 캘린더             | `.claude/docs/18-page-quiz-streak.md`      |
| 부스트 목록, 부스트 월                  | `.claude/docs/19-page-boost-list-wall.md`  |
| 디자인 시스템 (Typography, 컴포넌트)    | `.claude/docs/20-design-system.md`         |
| 로그인, OAuth, JWT 인증 흐름            | `.claude/docs/21-page-login-auth.md`       |

**규칙**: 코드 작성 전 반드시 해당 파일을 Read 도구로 열어서 확인한다. 작업 영역이 겹치면 해당하는 파일을 모두 읽는다.

## 페이지 구현 워크플로우

특정 페이지 구현 요청 시 (예: "로그인 페이지 만들어줘", "/schedule 구현해줘", "부스트 선택 페이지"):

1. `.claude/docs/pages/` 에서 해당 페이지 스펙 파일을 Read 도구로 열어 읽는다
   - 파일 목록은 `.claude/docs/pages/README.md` 참조
2. 스펙 파일의 `**Figma:**` 필드 확인:
   - **URL이 있으면** → Figma MCP `get_design_context` (또는 `get_screenshot`) 호출하여 실제 디자인 파악 → 디자인 기반으로 UI 구현
   - **미입력이면** → 스펙의 레이아웃 구조·className만으로 구현
3. Figma 디자인 + 스펙 파일(레이아웃, 상태, API, 인터랙션)을 모두 반영하여 구현
4. FSD 구조에 맞게 파일 배치:
   - 라우트 컴포넌트 → `src/pages/<route>/index.tsx`
   - 비즈니스 로직 → `src/features/<feature>/`
   - 공통 UI → `src/shared/ui/`
5. `shared/ui` 기존 컴포넌트 최대 재사용. 새 컴포넌트 필요 시 `shared/ui/` 또는 해당 feature의 `ui/` 에 생성
6. 스펙 파일의 API 섹션에 정의된 엔드포인트·타입을 그대로 사용 (임의 변경 금지)
