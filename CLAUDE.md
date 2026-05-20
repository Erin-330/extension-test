## ⚠️ 필수 전역 규칙 — 모든 페이지에 반드시 적용

> **모든 페이지 최상위 컨테이너는 반드시 `h-dvh w-full`을 사용한다.**
>
> `index.html`의 `body`가 `display: flex; align-items: center` flex 컨테이너이므로,
> 최상위에 `w-full`이 없으면 페이지 너비가 텍스트 길이에 따라 제각각 달라진다.
>
> ```tsx
> // ✅ 올바름
> <div className="h-dvh w-full ...">
>
> // ❌ 금지 — w-full 누락 시 width가 content 길이로 수축
> <div className="h-dvh ...">
> ```
>
> `index.html`에 `#root { width: 100%; }` 스타일이 이미 적용되어 있다.
> 새 페이지를 구현할 때 이 규칙을 빠뜨리면 안 된다.

---

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

---

## 페이지 구현 워크플로우

특정 페이지 구현 요청 시 (예: "로그인 페이지 만들어줘", "/schedule 구현해줘", "팔로우 리그 페이지"):

### 1단계 — 스펙 파일 읽기
`.claude/docs/pages/README.md` 목록에서 해당 파일을 찾아 **반드시 Read 도구로 먼저 읽는다**.
- 연관 페이지가 여러 개면 모두 읽는다 (예: 팔로우 리그 → 팔로우 팀/선수도 함께).

### 2단계 — Figma 디자인 파악 ⚠️ URL이 있으면 코드 작성 전 반드시 실행

> **스펙 파일의 레이아웃·className 설명은 구조 참고용일 뿐이다.**
> **시각적 스타일(색상·크기·간격·폰트·효과)의 유일한 기준은 Figma다.**
> **Figma MCP를 호출하지 않고 코드를 작성하면 안 된다.**

스펙 파일의 `**Figma:**` 필드에 URL이 있으면, 코드를 한 줄도 작성하기 전에:

1. `mcp__claude_ai_Figma__get_design_context` 호출 → 컴포넌트 코드·디자인 토큰 추출
2. `mcp__claude_ai_Figma__get_screenshot` 호출 → 시각적 레퍼런스 확보

두 호출 모두 완료한 뒤에만 구현을 시작한다. Figma와 스펙이 충돌하면 **Figma를 따른다.**

Figma 출력에서 반드시 추출할 항목:
- **정확한 색상값** (`#46383a`, `#f0f2f5`, `#969cda` 등 — Tailwind 색상 이름으로 대체 금지)
- **정확한 크기·간격** (`h-[68px]`, `gap-[16px]`, `px-[11px]`, `rounded-[16px]` 등)
- **폰트 스타일** (size, weight, lineHeight 수치 그대로)
- **그림자·블러 효과** (`boxShadow`, `backdropFilter` 인라인 style로 적용)
- **그라디언트** (Tailwind `bg-gradient-to-*`로 표현 불가한 경우 inline `style` 사용)
- **에셋 이미지 URL** (Figma MCP가 반환한 `https://www.figma.com/api/mcp/asset/...` 경로)

### 3단계 — 목 데이터 필수 포함

**API 연결 여부와 관계없이 목 데이터를 항상 포함한다.**

```ts
// 페이지 컴포넌트 상단에 MOCK_* 상수로 선언
const MOCK_ITEMS = [
  {
    id: '...',
    name: '...',
    image_url: 'https://www.figma.com/api/mcp/asset/...',  // Figma 에셋 URL 사용
    // Figma 스크린샷에 표시된 항목 그대로 재현
  },
  // ...
]
```

- 목 데이터 항목 수와 내용은 **Figma 스크린샷에 보이는 것과 동일**하게 구성한다.
- Figma 에셋 이미지 URL이 있으면 그대로 사용한다 (7일 유효).
- API가 연결되면 목 데이터는 `placeholderData` 또는 초기값으로 유지한다.

### 4단계 — 픽셀 단위 구현 (Figma 값 그대로)

Figma 코드에서 추출한 값을 **그대로** 사용한다. 근사값으로 대체하지 않는다.
"비슷해 보여서" 다른 값을 쓰는 것은 금지다.

| 피그마 값 | 올바른 구현 | 잘못된 구현 |
|-----------|------------|------------|
| `h-[68px]` | `h-[68px]` | `h-16` (64px) |
| `gap-[16px]` | `gap-4` 또는 `gap-[16px]` | `gap-3` (12px) |
| `rounded-[16px]` | `rounded-[16px]` | `rounded-2xl` (16px — OK) |
| `rgba(0,0,0,0.08)` shadow | `style={{ boxShadow: '0px 2px 2px rgba(0,0,0,0.08)' }}` | `shadow-sm` |
| `linear-gradient(#c0b1ff, #6f4cff)` | `style={{ background: 'linear-gradient(...)' }}` | Tailwind `from-purple-300` |
| `backdrop-blur(3px)` | `style={{ backdropFilter: 'blur(3px)' }}` | `backdrop-blur-sm` |
| `opacity: 0.66` | `style={{ opacity: 0.66 }}` | `opacity-70` (0.7) |

### 5단계 — 전역 레이아웃 규칙 준수

**모든 페이지 최상위 컨테이너는 `h-dvh w-full`을 사용한다.**

`index.html`의 `body`가 `display: flex; align-items: center` flex 컨테이너이기 때문에,
`#root`에 `width: 100%`가 없으면 자식 컴포넌트의 `w-full`이 content 너비로 수축한다.
이 문제는 `index.html`에 `#root { width: 100%; }` 스타일로 이미 해결되어 있다.

```tsx
// 모든 페이지 최상위 div — 이 패턴을 반드시 지킨다
<div className="h-dvh w-full ...">
```

새 페이지를 추가할 때 최상위 컨테이너에 `w-full`이 빠지면 페이지 너비가 content 길이에 따라 달라지므로 주의한다.

### 6단계 — FSD 파일 배치


```
src/
  pages/<route>/index.tsx          ← 라우트 컴포넌트 + MOCK_* 데이터
  features/<feature>/
    api/<feature>Api.ts            ← fetch 함수 + 타입
    model/
      store/<feature>Store.ts      ← Zustand 스토어
      hooks/use<Feature>Page.ts    ← TanStack Query + 비즈니스 로직
    ui/<Component>.tsx             ← 해당 feature 전용 컴포넌트
  shared/
    ui/<Component>.tsx             ← 여러 feature에서 재사용되는 컴포넌트
    constants/pages.ts             ← PAGES 상수
```

- `shared/ui` 기존 컴포넌트 최대 재사용. 새 컴포넌트는 `shared/ui/` 또는 해당 feature의 `ui/`에 생성.
- 스펙 파일의 API 엔드포인트·타입을 그대로 사용 (임의 변경 금지).

### 7단계 — 타입 체크 필수

구현 완료 후 반드시 실행:
```bash
npm run type-check
```
오류가 없을 때만 완료로 간주한다.

---

## 피그마 URL 없을 때

`**Figma:** *(미입력)*` 상태일 때만 스펙의 레이아웃 구조·className으로 구현한다.
목 데이터는 여전히 포함하되, 이미지는 `https://placehold.co/` URL을 사용한다.
**URL이 조금이라도 적혀 있으면 위의 2단계를 반드시 실행한다.**

---

## 컴포넌트 구현 기준 (Figma에서 추출)

Figma `get_design_context` 응답의 **"These styles are contained in the design"** 섹션을 우선 참조한다:
- 폰트 family, size, weight, lineHeight
- 색상 토큰 (Primary, Surface, Background, Text 등)
- 이펙트 (Shadow, Blur, Gradient)

이 값들을 `tailwind.config.ts`의 `theme.extend`에 추가하거나, 컴포넌트 inline style로 적용한다.
