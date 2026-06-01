# 로그인

**File:** `login.html`
**Last updated:** 2026-06-01

---

## 개요

사용자가 Google OAuth를 통해 RORR 서비스에 로그인한다. Chrome Extension과 Web 양쪽에서 동일 계정 기반으로 포인트·팔로우·Boost·Like·Quiz 데이터가 공유된다. 최초 로그인 시 RORR 사용자 계정이 자동 생성된다.

---

## 레이아웃

```
┌─────────────────────────────────────┐
│  [RORR 엠블럼 이미지]               │  ← 브랜드 영역, 세로 중앙 정렬
│  [서비스 설명 문구]                  │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  G  Google로 계속하기       │    │  ← Google OAuth 버튼
│  └─────────────────────────────┘    │
│                                     │
│  [하단 안내 문구]                   │
└─────────────────────────────────────┘
```

전체 높이 세로 중앙 정렬. `padding: 40px 24px`.

### 로고

```html
<img
  class="emblem"
  src="https://erin-bucket-team.s3.amazonaws.com/RORR%20EMBLEM.png"
  alt="RORR"
/>
```

SVG 인라인 또는 gradient div 사용 금지. 반드시 위 `<img>` 태그 사용.

---

## 상태별 표시

| 상태 | 표시 |
|------|------|
| 기본 | Google 로그인 버튼 활성 |
| 로딩 | 버튼 비활성화 + 스피너 + "로그인 중..." |
| OAuth 취소 | "Google 로그인이 취소되었습니다." |
| 오류 | `authResult.data.error` 값을 그대로 표시 |
| 세션 만료 진입 (`?expired=1`) | "세션이 만료되었습니다. 다시 로그인해 주세요." |

---

## CSP 구조

> **⚠️ MV3 CSP(`script-src 'self' 'wasm-unsafe-eval'`)가 인라인 스크립트를 전부 차단한다.**

- HTML 파일에 `<script>` 인라인 코드 작성 금지
- `onclick="..."` 등 인라인 이벤트 핸들러 금지
- 반드시 외부 파일로 분리:

```
login.html          ← <script type="module" src="./src/login/main.js">
src/login/main.js   ← 모든 로직 (addEventListener, handleGoogleLogin 등)
```

`vite.config.js` input에 `login: resolve(__dirname, 'login.html')` 등록 필수.

---

## Chrome Extension OAuth 플로우

> **⚠️ `chrome.identity.getAuthToken()`은 side panel 페이지에서 직접 호출하지 않는다.**
> **반드시 `chrome.runtime.sendMessage`를 통해 background service worker가 호출하도록 한다.**

### Step 1 — background로 Google OAuth 토큰 요청

```js
const authResult = await chrome.runtime.sendMessage({ type: 'auth/chromeLogin' })
```

background(`public/background.js`)가 처리:
1. `chrome.identity.clearAllCachedAuthTokens()` — 캐시 초기화 필수
2. `chrome.identity.getAuthToken({ interactive: true })` — scopes 파라미터 생략, manifest 기본값 사용
3. 응답 형식: `{ code, message: 'success'|'fail', data: { token } }`

Google OAuth 토큰은 `authResult.data.token`.

### Step 2 — 백엔드 로그인 API 호출

성공 응답(`authResult.message === 'success'`) 시 `POST /users/login` 호출.

### Step 3 — JWT 저장 및 이동

`result.data.jwt`를 `localStorage.setItem('pie-u-wt', jwt)`로 저장 후 다음 페이지로 이동.

---

## API

### POST /users/login — Google OAuth 로그인 및 JWT 발급

**인증**: 없음

#### Request Body

| 필드 | 타입 | 필수 | 설명 |
|------|------|:----:|------|
| `platformType` | `string` | O | `'google'` 고정 (❌ `'EXTENSION'`) |
| `token` | `string` | O | `authResult.data.token` — Step 1에서 받은 Google OAuth 토큰 |

#### Response Body

| 필드 | 타입 | 설명 |
|------|------|------|
| `resultCode` | `string` | `'0000'` = 성공, 그 외 = 실패 |
| `resultMsg` | `string` | 오류 메시지 |
| `data.jwt` | `string` | JWT — `localStorage.setItem('pie-u-wt', jwt)`로 저장 (❌ `data.token`) |
| `data.id` | `string` | 사용자 ID |
| `data.email` | `string` | 이메일 |
| `data.name` | `string` | 이름 |
| `data.picture` | `string` | 프로필 이미지 URL |
| `data.boost` | `number` | Boost 수치 |
| `data.given_name` | `string` | 이름(given) |
| `data.payments` | `object` | `{ xsollaUseYN, tossUseYN }` |

#### 에러

| resultCode | 설명 |
|------------|------|
| `GOOGLE_API_ERROR` | OAuth 토큰 무효 또는 Google API 오류 |

#### 성공 판별

```js
if (result.resultCode !== '0000') { /* 오류 처리 */ }
const jwt = result.data.jwt
localStorage.setItem('pie-u-wt', jwt)
```

---

## 로그인 후 라우팅

JWT payload의 `follow_onboarding_yn` 필드로 이동 페이지 결정:

| 조건 | 이동 |
|------|------|
| `follow_onboarding_yn === true` | `home.html` (메인) |
| `follow_onboarding_yn` 없거나 `false` | `follow-league.html` (팔로우 온보딩) |

---

## 중요 규칙 요약 (실수 방지)

| 항목 | 올바른 값 | 흔한 실수 |
|------|-----------|-----------|
| `platformType` | `'google'` | `'EXTENSION'` |
| JWT 필드 | `result.data.jwt` | `result.data.token` |
| 성공 판별 | `resultCode === '0000'` | `message === 'success'` |
| OAuth 토큰 출처 | `authResult.data.token` (sendMessage 응답) | `chrome.identity` 직접 호출 |
| `getAuthToken` scopes | 파라미터 생략 (manifest 기본값) | `['email', 'profile']` 단축형 |
