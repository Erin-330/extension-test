# Login

**File:** `login.html`
**Last updated:** 2026-06-01

---

## 개요

Google OAuth 로그인 진입점. 크롬 익스텐션 환경에서만 동작하며, background.js가 `chrome.identity.getAuthToken`으로 OAuth 토큰을 발급한다.

---

## 레이아웃

```
┌─────────────────────────────────────┐
│  RORR Emblem (S3 URL)               │  ← 중앙 배치
├─────────────────────────────────────┤
│  [에러/안내 메시지]                  │  ← 조건부 표시
│  [Google로 계속하기] 버튼            │  ← 유일한 로그인 수단
│  이용약관          개인정보처리방침  │  ← 버튼 하단 두 링크
├─────────────────────────────────────┤
│  ⓒPitch Interactive Co.,LTD.        │  ← 항상 표시
│  All rights reserved                │
└─────────────────────────────────────┘
```

> **주의:** 이메일/비밀번호 입력 필드 추가 금지. 테마 토글 버튼 추가 금지.

---

## 상태별 표시

| 상태 | 표시 |
|------|------|
| 기본 | Google 버튼 활성 |
| 로그인 중 | 버튼 disabled, 라벨 "로그인 중..." |
| OAuth 실패 | 에러 메시지 표시, 버튼 재활성 |
| `?reason=session_expired` | "세션이 만료되었습니다. 다시 로그인해 주세요." (info) |
| `?reason=auth_required` | "이 기능을 사용하려면 로그인이 필요합니다." (info) |

---

## 로그인 플로우

```
버튼 클릭
  └─ chrome.runtime.sendMessage({ type: 'auth/chromeLogin' })
       └─ background.js: chrome.identity.getAuthToken({ interactive: true })
            └─ { token } 수신
                 └─ POST /users/login
                      └─ resultCode === '0000'
                           ├─ JWT → localStorage('pie-u-wt')
                           ├─ GET /follow/my → localStorage('followTeamTargetIds')
                           ├─ chrome.runtime.sendMessage({ type: 'auth/loginSuccess' })
                           └─ 라우팅:
                                follow_onboarding_yn true  → profile.html
                                follow_onboarding_yn false → follow.html
```

> **필수 — background.js**: `auth/chromeLogin` 메시지 핸들러가 없으면 API가 호출되지 않는다.  
> `onMessage` 리스너에서 반드시 `return true`로 비동기 응답을 허용해야 한다.

```js
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'auth/chromeLogin') {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError || !token) {
        sendResponse({ error: chrome.runtime.lastError?.message ?? 'no token' })
      } else {
        sendResponse({ token })
      }
    })
    return true
  }
})
```

> **필수 — manifest.json**: `"identity"` 권한이 없으면 `chrome.identity.getAuthToken`이 동작하지 않는다.

```json
"permissions": ["sidePanel", "identity"]
```

---

## API

### `POST /users/login` — 소셜 로그인

**Request Body**

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `loginType` | `'OAuth'` | O | 고정값 |
| `platformType` | `string` | O | `'google'` |
| `token` | `string` | O | `chrome.identity.getAuthToken`으로 수신한 토큰 |
| `autoLogin` | `boolean` | X | 자동 로그인 여부 |

**Response Body**

| 필드 | 타입 | 설명 |
|------|------|------|
| `resultCode` | `string` | `'0000'` = 성공 |
| `resultMsg` | `string` | 결과 메시지 |
| `data.id` | `string` | Google 사용자 ID |
| `data.email` | `string` | 이메일 |
| `data.verified_email` | `boolean` | 이메일 인증 여부 |
| `data.name` | `string` | 표시 이름 |
| `data.given_name` | `string` | 이름 |
| `data.picture` | `string` | 프로필 이미지 URL |
| `data.boost` | `number` | 보유 부스트 수 |
| `data.payments.xsollaUseYN` | `'Y' \| 'N'` | Xsolla 결제 활성 여부 |
| `data.payments.tossUseYN` | `'Y' \| 'N'` | Toss 결제 활성 여부 |
| `data.follow_onboarding_yn` | `boolean` | 팔로우 온보딩 완료 여부 → 라우팅 기준 |
| `data.jwt` | `string` | JWT → `localStorage('pie-u-wt')` 저장 |

---

### `GET /follow/my` — 내 팔로우 목록 조회

로그인 성공 직후 팀 ID 캐싱 목적으로 호출. Authorization 헤더 자동 부착.  
실패해도 로그인 플로우를 중단하지 않는다 (try/catch로 무시).

**Response Body**

| 필드 | 타입 | 설명 |
|------|------|------|
| `[].id` | `string` | 팔로우 레코드 ID |
| `[].type` | `'league' \| 'team' \| 'player'` | 팔로우 대상 종류 |
| `[].targetId` | `string` | 팔로우 대상 ID |

`type === 'team'`인 항목의 `targetId`만 추출 → `localStorage('followTeamTargetIds')`에 JSON 배열로 저장.

---

## 정책

- Google OAuth 버튼이 유일한 로그인 수단.
- 인증되지 않은 사용자는 Spark, Energy, Boost, Quiz, Ranking 기능 진입 불가.
- 로그아웃 시 `localStorage('pie-u-wt')` 제거.
