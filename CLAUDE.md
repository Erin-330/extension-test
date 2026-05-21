## 핵심 규칙

### 1. Figma가 유일한 기준

페이지를 구현할 때 **Figma 디자인이 1순위**다. 스펙 파일의 설명은 참고용이며 Figma와 충돌하면 Figma를 따른다.

코드를 한 줄도 작성하기 전에 반드시:
1. 스펙 파일(`/.claude/docs/pages/`)에서 Figma URL 확인
2. **요청된 UI/컴포넌트에 해당하는 node-id만** `get_design_context` + `get_screenshot`을 **동시에(병렬로)** 호출
3. 코드 작성 전, 응답에서 아래 항목을 **명시적으로 열거**한다:
   - 모든 배경색·텍스트색 hex 값
   - 모든 텍스트 font-size / font-weight
   - 모든 간격(padding, gap, margin) px 값
   - 모든 이미지 에셋 URL (`https://www.figma.com/api/mcp/asset/...`)
4. 열거한 값을 **그대로** 사용 (근사값·추정값 금지)

> 요청하지 않은 다른 페이지나 컴포넌트의 `get_design_context`는 호출하지 않는다.
> 여러 UI를 동시에 구현할 때만 해당 node-id들을 **한 번에 병렬 호출**한다.

---

### 2. 에셋은 Figma URL만 사용

모든 아이콘·이미지는 `get_design_context`가 반환한 `https://www.figma.com/api/mcp/asset/...` URL을 `<img src={...} />` 로 사용한다.

- SVG path 수작업 금지
- `placehold.co` 등 외부 placeholder 금지
- Figma 내부 스프라이트시트 crop 코드 재현 금지 — 에셋 URL만 쓰면 된다

이미 구현된 페이지에 동일한 에셋이 있으면 **Figma 재호출 없이 해당 파일에서 URL을 복사**한다.

#### ⛔ 유니코드·텍스트 아이콘 절대 금지

`▲`, `Λ`, `⚑`, `◁`, `›`, `✕`, `←`, `→` 같은 유니코드 문자나 HTML entity를 아이콘 대신 쓰는 것은 **절대 금지**다.
에셋 URL을 못 찾으면 자식 node-id로 추가 `get_design_context` 호출 — 텍스트 대체는 허용하지 않는다.

특히 **화살표·방향 아이콘**은 유니코드로 대체되기 쉬운 대표적 사례다.
에셋 URL이 없으면 해당 아이콘이 포함된 **자식 node-id**를 특정해 추가 `get_design_context` 호출 — 절대 문자로 대체하지 않는다.

#### ⛔ 에셋 URL 날조 금지

`get_design_context` 응답에서 에셋 URL이 보이지 않는다고 URL을 **절대 만들지 않는다.**
UUID가 `0000-0000-0000-000000000000` 형태거나 Figma 응답에 없는 값이면 **날조된 URL**이다.

에셋 URL을 못 찾은 경우:
1. 해당 에셋이 포함된 **자식 node-id**를 특정해서 `get_design_context`를 추가 호출한다
2. 그래도 없으면 `get_screenshot` 결과를 보고 레이어 이름으로 다시 탐색한다
3. 에셋을 찾기 전까지 코드를 작성하지 않는다

---

### 3. API 없이도 즉시 표시

```ts
// ✅ API 전에도 목 데이터 즉시 표시
const displayList = list.length > 0 ? list : MOCK_ITEMS

// ❌ 금지
const displayList = isLoading ? [] : (list.length > 0 ? list : MOCK_ITEMS)
```

목 데이터 이미지 URL = Figma MCP 에셋 URL (Figma 스크린샷에 보이는 항목 그대로).

---

### 4. 공통 레이아웃

**구현된 모든 UI는 반드시 화면 전체(100%)를 채워야 한다.**

#### index.css 필수 설정

페이지가 화면을 100% 채우려면 `src/index.css`에 반드시 아래가 포함되어야 한다:

```css
html, body, #root {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
```

#### 페이지 최상위 컨테이너

모든 페이지 최상위 컨테이너는 반드시 `h-dvh w-full`:

```tsx
<div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
```

---

### 7. 폰트

프로젝트 전체 폰트는 **Pretendard**다.

- `index.html`에 jsDelivr CDN으로 로드되어 있음:
  ```html
  <link rel="stylesheet" as="style" crossorigin
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
  ```
- `body`의 `font-family`도 `'Pretendard', -apple-system, ...`으로 설정되어 있음
- Tailwind에서 `font-pretendard` 또는 `font-['Pretendard',sans-serif]` 클래스로 사용
- Figma가 반환하는 `font-['Pretendard:Bold',sans-serif]` 같은 클래스는 **CSS에서 동작하지 않음** — 반드시 아래처럼 분리해서 작성:

  | Figma 표기 | 실제 사용 클래스 |
  |-----------|----------------|
  | `Pretendard:Light` | `font-['Pretendard',sans-serif] font-light` (300) |
  | `Pretendard:Regular` | `font-['Pretendard',sans-serif] font-normal` (400) |
  | `Pretendard:Bold` | `font-['Pretendard',sans-serif] font-bold` (700) |
  | `Pretendard:ExtraBold` | `font-['Pretendard',sans-serif] font-extrabold` (800) |

---

### 5. 파일 구조

```
src/
  pages/<route>/index.tsx          ← 라우트 컴포넌트 + MOCK_* 데이터
  features/<feature>/
    api/<feature>Api.ts
    model/store/<feature>Store.ts
    model/hooks/use<Feature>Page.ts
    ui/<Component>.tsx
  shared/
    ui/<Component>.tsx
    constants/pages.ts
```

---

### 6. 완료 조건

```bash
npm run type-check  # 오류 없을 때만 완료
```

---

### 8. "rorr 만들어줘" 트리거 — 풀 부트스트랩

요청 메시지에 **"rorr"** 이 포함되어 있고 앱/프로젝트를 새로 만들어달라는 의도이면, 아무것도 묻지 않고 아래 **5개 페이지를 모두** 구현한다.

#### 0단계 — 공통 파일 먼저 작성

`tailwind.config.ts`, `postcss.config.js`, `index.html`, `src/main.tsx`, `src/index.css`, `src/App.tsx`, `src/shared/constants/pages.ts`를 먼저 완성한다.

**tailwind.config.ts** 내용:
```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
} satisfies Config
```

**postcss.config.js** 내용:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### 1단계 — 페이지별 순차 구현 (Figma → 코드 → 다음 페이지)

**각 페이지를 한 번에 하나씩** 아래 순서로 구현한다. 다음 페이지로 넘어가기 전, 현재 페이지의 에셋 URL이 모두 실제 Figma URL인지 확인한다.

| 순서 | 페이지 | 스펙 파일 | Figma node-id |
|------|--------|-----------|---------------|
| 1 | 팔로우 (리그→팀→선수 3단계 전부) | `page-follow.md` | node-id·병렬 호출 방법은 스펙 파일 참조 |
| 2 | 프로필 | `page-profile.md` | `197:35086` |
| 3 | 랭킹 | `page-rank.md` | `212:31020` |
| 4 | 구매 리스트 | `page-purchase-list.md` | `1767:73369` |

fileKey: `FR0ELVIB6XF3dHidbEqBdz`

각 페이지 구현 시 **규칙 1**의 4단계 프로세스를 반드시 따른다:
`get_design_context` + `get_screenshot` 동시 호출 → 추출값 열거 → 코드 작성

#### 생성 파일 트리

```
index.html                          ← Pretendard CDN + body font-family (규칙 7)
tailwind.config.ts                  ← content: ["./index.html","./src/**/*.{ts,tsx}"], plugins: []
postcss.config.js                   ← tailwindcss + autoprefixer
src/
  main.tsx / index.css / App.tsx
  shared/constants/pages.ts         ← PAGES = { MAIN, FOLLOW_LEAGUE, FOLLOW_TEAM, FOLLOW_PLAYER, PROFILE, RANK, PURCHASE_LIST }
  pages/
    main/index.tsx                  ← 버튼 4개 허브
    follow/league-list/index.tsx    ← Figma 기반 리그 선택 UI (1/3단계)
    follow/team-list/index.tsx      ← Figma 기반 팀 선택 UI (2/3단계)
    follow/player-list/index.tsx    ← Figma 기반 선수 선택 UI (3/3단계)
    profile/index.tsx               ← Figma 기반 프로필 UI
    rank/index.tsx                  ← Figma 기반 랭킹 UI
    purchase/list/index.tsx         ← Figma 기반 구매 리스트 UI
```

**메인 허브**: 버튼 4개(팔로우 / 프로필 / 랭킹 / 구매 리스트), 각 버튼 클릭 시 해당 페이지로 이동. Figma URL 없으므로 `bg-[#46383a]` 기본 컨테이너에 버튼 나열.

**App.tsx**: `useState<Page>(PAGES.MAIN)` 기반 라우터. 각 페이지는 `onNavigate: (page: string) => void` prop 하나만 받는 named export. 뒤로가기는 `onNavigate(PAGES.MAIN)`.

**각 페이지**: Figma `get_design_context` 추출값 그대로 구현. 스펙 파일의 레이아웃·컴포넌트 구조 참조. 목 데이터 포함(이미지 URL = Figma MCP 에셋 URL).

```bash
npm run type-check  # 오류 0개 확인 후 완료 선언
```

---

### 9. "페이지 다시 구현해줘" 트리거

요청에 **"다시 구현"**, **"다시 만들어"**, **"수정된 피그마 반영"** 의도가 있으면:

1. 스펙 파일에서 해당 페이지의 node-id와 fileKey 확인
2. `get_design_context` + `get_screenshot`을 **새로 호출** (이전 대화의 결과나 현재 파일의 URL 재사용 금지)
3. 기존 파일 내용을 **전체 교체**
4. `npm run type-check` 통과 후 완료

---

## 스펙 파일 목록

| 작업 영역 | 파일 |
|-----------|------|
| FSD 구조, import 규칙 | `.claude/docs/01-architecture.md` |
| TanStack Query, Zustand | `.claude/docs/02-state-management.md` |
| API, Axios | `.claude/docs/03-api-http.md` |
| 라우터, 인증 | `.claude/docs/04-routing-auth.md` |
| WebSocket | `.claude/docs/05-websocket-realtime.md` |
| 공통 UI, 스타일 | `.claude/docs/06-ui-components.md` |
| 공통 훅, 유틸 | `.claude/docs/10-shared-hooks-utils.md` |
| 전체 API 엔드포인트 | `.claude/docs/11-api-reference.md` |

| 페이지 | 스펙 파일 |
|--------|-----------|
| 메인 | `.claude/docs/pages/page-main.md` |
| 팔로우 리그/팀/선수 | `.claude/docs/pages/page-follow.md` |
| 프로필 | `.claude/docs/pages/page-profile.md` |
| 랭킹 | `.claude/docs/pages/page-rank.md` |
| 구매 내역 | `.claude/docs/pages/page-purchase-list.md` |
| 스케줄 | `.claude/docs/pages/page-schedule-list.md`, `page-schedule-detail.md` |
| 부스트 | `.claude/docs/pages/page-boost-select.md`, `page-boost-confirm.md` |
| 로그인 | `.claude/docs/pages/page-login.md` |
| 충전 | `.claude/docs/pages/page-charge.md` |
