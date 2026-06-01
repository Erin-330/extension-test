# OAuth 리다이렉트

**File:** `redirect.html`
**Last updated:** 2026-06-01

---

## 개요

Chrome Extension OAuth 흐름에서 인증 완료 후 리다이렉트되는 중간 페이지. URL 파라미터에서 인증 코드 또는 에러를 파싱해 background service worker에 전달하고 자동으로 탭을 닫는다.

진입 경로: `chrome.identity.launchWebAuthFlow` redirect URL 또는 외부 OAuth 제공자의 callback.

---

## 레이아웃

```
┌─────────────────────────────────────┐
│                                     │
│         [RORR 로고]                 │  ← 세로 중앙 정렬
│                                     │
│    [상태 아이콘 + 메시지]            │  ← 처리 결과 표시
│                                     │
│    [안내 문구]                      │  ← "잠시 후 창이 닫힙니다"
│                                     │
└─────────────────────────────────────┘
```

전체 높이 세로 중앙 정렬. 사용자 입력 없음 — 완전 자동 처리.

---

## 상태별 표시

| 상태 | 표시 |
|------|------|
| 처리 중 | 스피너 + "인증 처리 중..." |
| 성공 | 체크 아이콘 + "로그인이 완료되었습니다." |
| 실패 | X 아이콘 + `error_description` 또는 "인증에 실패했습니다." |

성공·실패 모두 1500ms 후 `window.close()`.

---

## URL 파라미터 파싱

### 성공 케이스

| 파라미터 위치 | 키 | 설명 |
|-------------|-----|------|
| `location.hash` | `access_token` | Implicit flow 토큰 |
| `location.search` | `code` | Authorization Code flow |

### 실패 케이스

| 파라미터 위치 | 키 | 설명 |
|-------------|-----|------|
| `location.hash` 또는 `location.search` | `error` | 에러 코드 |
| `location.hash` 또는 `location.search` | `error_description` | 에러 설명 |

---

## background 메시지 전송

| 케이스 | 메시지 타입 | 페이로드 |
|--------|-----------|---------|
| 성공 (access_token) | `auth/redirectSuccess` | `{ token }` |
| 성공 (code) | `auth/redirectSuccess` | `{ code }` |
| 실패 | `auth/redirectError` | `{ error, error_description }` |
