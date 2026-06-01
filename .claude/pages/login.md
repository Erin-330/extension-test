# 로그인

**File:** `login.html`
**Last updated:** 2026-06-01

---

## 개요

사용자가 이메일과 비밀번호를 입력하여 RORR 서비스에 로그인한다. 폼 유효성 검사를 통해 잘못된 입력은 사전에 차단하고, 인증 성공 시 JWT를 `localStorage`에 저장한 뒤 다음 페이지로 이동한다.

---

## 레이아웃

```
┌─────────────────────────────────────┐
│                                     │
│  [RORR 엠블럼 이미지]                │  ← 브랜드 영역, 세로 중앙 정렬
│  [RORR]                              │  ← 서비스 타이틀
│  [스포츠를 더 즐겁게, 함께]           │  ← 서비스 설명
│                                     │
│  ┌─────────────────────────────┐    │
│  │ Email                       │    │  ← 입력 라벨
│  │ [____________________]      │    │  ← 이메일 입력 필드
│  │ [에러 메시지]                │    │  ← 검증 실패 시
│  │                             │    │
│  │ Password                    │    │
│  │ [____________________]      │    │  ← 비밀번호 입력 필드
│  │ [에러 메시지]                │    │
│  │                             │    │
│  │ [전역 에러 메시지]            │    │  ← 서버 에러
│  │                             │    │
│  │ ┌─────────────────────────┐ │    │
│  │ │       로그인             │ │    │  ← 로그인 버튼 (Primary CTA)
│  │ └─────────────────────────┘ │    │
│  └─────────────────────────────┘    │
│                                     │
│  [계정이 없으신가요? 회원가입]        │  ← 하단 안내 문구
│                                     │
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
| 기본 | 로그인 버튼 활성, 에러 메시지 숨김 |
| 입력 중 (포커스) | 해당 입력 필드 border `primary`, 2px outline `primary @ 25%` |
| 검증 실패 | 해당 입력 필드 border `error`, 필드 아래 12px/700 에러 텍스트 표시 |
| 로딩 (제출 중) | 버튼 비활성화 + 텍스트 "로그인 중..." |
| 서버 오류 | 폼 하단에 전역 에러 메시지 (`error` 색) 표시 |
| 세션 만료 진입 (`?expired=1`) | "세션이 만료되었습니다. 다시 로그인해 주세요." 전역 메시지 |

---

## 폼 유효성 검사 규칙

### 이메일

| 조건 | 에러 메시지 |
|------|------------|
| 빈 값 | "이메일을 입력해 주세요." |
| 이메일 형식 아님 (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) | "올바른 이메일 형식이 아닙니다." |

### 비밀번호

| 조건 | 에러 메시지 |
|------|------------|
| 빈 값 | "비밀번호를 입력해 주세요." |
| 8자 미만 | "비밀번호는 8자 이상이어야 합니다." |

### 검증 시점

- 각 입력 필드의 `blur` 이벤트에서 1차 검증
- 제출(`submit`) 시 모든 필드 재검증
- 검증 실패 시 첫 번째 오류 필드에 포커스

---

## CSP 구조

> **⚠️ MV3 CSP(`script-src 'self' 'wasm-unsafe-eval'`)가 인라인 스크립트를 전부 차단한다.**

- HTML 파일에 `<script>` 인라인 코드 작성 금지
- `onclick="..."` 등 인라인 이벤트 핸들러 금지
- 반드시 외부 파일로 분리:

```
login.html          ← <script type="module" src="./src/login/main.js">
src/login/main.js   ← 모든 로직 (addEventListener, validation 등)
```

`vite.config.js` input에 `login: resolve(__dirname, 'login.html')` 등록 필수.

---

## API

### POST /users/login — 이메일/비밀번호 로그인 및 JWT 발급

**인증**: 없음

#### Request Body

| 필드 | 타입 | 필수 | 설명 |
|------|------|:----:|------|
| `email` | `string` | O | 사용자 이메일 |
| `password` | `string` | O | 사용자 비밀번호 |

#### Response Body

| 필드 | 타입 | 설명 |
|------|------|------|
| `resultCode` | `string` | `'0000'` = 성공, 그 외 = 실패 |
| `resultMsg` | `string` | 오류 메시지 (UI에 그대로 표시) |
| `data.jwt` | `string` | JWT — `localStorage.setItem('pie-u-wt', jwt)`로 저장 |
| `data.id` | `string` | 사용자 ID |
| `data.email` | `string` | 이메일 |
| `data.name` | `string` | 이름 |

#### 에러

| resultCode | 설명 |
|-----------|------|
| `INVALID_CREDENTIALS` | 이메일 또는 비밀번호가 일치하지 않음 |
| `USER_NOT_FOUND` | 존재하지 않는 계정 |

#### 성공 판별

```js
if (result.resultCode !== '0000') { /* 오류 처리 */ }
const jwt = result.data.jwt
localStorage.setItem('pie-u-wt', jwt)
```

---

## 컴포넌트 상세

### 입력 필드 (라벨 + input + 에러)

| 부분 | 스타일 |
|------|--------|
| 라벨 | `text-annotation-bold` (12/700), `text-30-sub-text-dark` |
| input | `border: 1px solid var(--color-border)`, `border-radius: 10px`, padding `10px 14px`, `text-chat` (14/400) |
| input:focus | border `primary`, outline `2px primary @ 25%`, offset `0` |
| input.invalid | border `error` |
| 에러 텍스트 | `text-annotation` (12/400), `color: var(--color-error)`, 표시 시 `margin-top: 6px` |

### 로그인 버튼 (Primary CTA)

| 상태 | 스타일 |
|------|--------|
| Default | bg `primary`, color `text-100`, border `primary`, `border-radius: 10px`, padding `12px 18px`, `text-description-2` |
| Hover | bg `primary-dark` |
| Active | `transform: translateY(1px)` |
| Disabled | bg `button-disable`, cursor `not-allowed` |

`width: 100%`로 폼 전체 너비를 차지한다.

---

## 중요 규칙 요약 (실수 방지)

| 항목 | 올바른 값 | 흔한 실수 |
|------|-----------|-----------|
| 토큰 사용 | `var(--color-*)` | 하드코딩 hex |
| 폰트 | Pretendard Variable | system-ui 직접 사용 |
| 레이아웃 | `width: 100%`, padding으로 정렬 | `max-width: 480px; margin: 0 auto` |
| 스크립트 | 외부 `.js` 파일 (CSP 필수) | 인라인 `<script>` |
| 이벤트 | `addEventListener` | `onclick="..."` |
| JWT 키 | `'pie-u-wt'` | `'token'` |
