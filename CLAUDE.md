## 핵심 규칙

### 1. Figma 스크린샷이 유일한 기준

페이지를 구현할 때 **Figma 스크린샷이 1순위**다. 스펙 파일의 설명은 참고용이며 스크린샷과 충돌하면 스크린샷을 따른다.

코드를 한 줄도 작성하기 전에 반드시:
1. 스펙 파일(`/.claude/docs/pages/`)에서 node-id 확인
2. **요청된 UI/컴포넌트에 해당하는 node-id만** `get_screenshot`을 호출
3. 스크린샷을 보고 레이아웃·색상·간격을 그대로 재현한다

> 요청하지 않은 다른 페이지나 컴포넌트의 `get_screenshot`은 호출하지 않는다.
> 여러 UI를 동시에 구현할 때만 해당 node-id들을 **한 번에 병렬 호출**한다.

---

### 2. API 없이도 즉시 표시

```ts
// ✅ API 전에도 목 데이터 즉시 표시
const displayList = list.length > 0 ? list : MOCK_ITEMS

// ❌ 금지
const displayList = isLoading ? [] : (list.length > 0 ? list : MOCK_ITEMS)
```

---

### 3. 공통 레이아웃

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

### 4. 파일 구조

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

### 5. 완료 조건

```bash
npm run type-check  # 오류 없을 때만 완료
```

---

### 6. 폰트

프로젝트 전체 폰트는 **Pretendard**다.

- `index.html`에 jsDelivr CDN으로 로드되어 있음:
  ```html
  <link rel="stylesheet" as="style" crossorigin
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
  ```
- `body`의 `font-family`도 `'Pretendard', -apple-system, ...`으로 설정되어 있음
- Tailwind에서 `font-['Pretendard',sans-serif]` 클래스로 사용

---

### 7. "rorr 만들어줘" 트리거 — 풀 부트스트랩

요청 메시지에 **"rorr"** 이 포함되어 있고 앱/프로젝트를 새로 만들어달라는 의도이면, 아무것도 묻지 않고 아래 **3개 페이지를 모두** 구현한다.

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

#### 1단계 — 페이지별 순차 구현 (스크린샷 → 코드 → 다음 페이지)

**각 페이지를 한 번에 하나씩** 아래 순서로 구현한다.

| 순서 | 페이지 | 스펙 파일 | Figma node-id |
|------|--------|-----------|---------------|
| 1 | 팔로우 (리그 1단계) | `page-follow.md` | node-id는 스펙 파일 참조 |
| 2 | 프로필 | `page-profile.md` | `7582:48955` |
| 3 | 구매 리스트 | `page-purchase-list.md` | `7582:48961` |

fileKey: `FR0ELVIB6XF3dHidbEqBdz`

각 페이지 구현 시 **규칙 1** 프로세스를 반드시 따른다:
`get_screenshot` 호출 → 스크린샷 보고 코드 작성

#### 생성 파일 트리

```
index.html                          ← Pretendard CDN + body font-family (규칙 6)
tailwind.config.ts                  ← content: ["./index.html","./src/**/*.{ts,tsx}"], plugins: []
postcss.config.js                   ← tailwindcss + autoprefixer
src/
  main.tsx / index.css / App.tsx
  shared/constants/pages.ts         ← PAGES = { MAIN, FOLLOW_LEAGUE, PROFILE, PURCHASE_LIST }
  pages/
    main/index.tsx                  ← 버튼 3개 허브
    follow/league-list/index.tsx    ← Figma 기반 리그 선택 UI
    profile/index.tsx               ← Figma 기반 프로필 UI
    purchase/list/index.tsx         ← Figma 기반 구매 리스트 UI
```

**메인 허브**: 버튼 3개(팔로우 / 프로필 / 구매 리스트), 각 버튼 클릭 시 해당 페이지로 이동. Figma URL 없으므로 `bg-[#46383a]` 기본 컨테이너에 버튼 나열.

**App.tsx**: `useState<Page>(PAGES.MAIN)` 기반 라우터. 각 페이지는 `onNavigate: (page: string) => void` prop 하나만 받는 named export. 뒤로가기는 `onNavigate(PAGES.MAIN)`.

**각 페이지**: `get_screenshot` 스크린샷을 보고 구현. 스펙 파일의 레이아웃·컴포넌트 구조 참조. 목 데이터 포함.

```bash
npm run type-check  # 오류 0개 확인 후 완료 선언
```

---

### 8. "페이지 다시 구현해줘" 트리거

요청에 **"다시 구현"**, **"다시 만들어"**, **"수정된 피그마 반영"** 의도가 있으면:

1. 스펙 파일에서 해당 페이지의 node-id와 fileKey 확인
2. `get_screenshot`을 **새로 호출** (이전 대화의 결과 재사용 금지)
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
