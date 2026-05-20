# 페이지 스펙: 로그인 `/login`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/login` |
| 컴포넌트 | `LoginPage` |
| 파일 | `src/pages/login/index.tsx` |
| 인증 불필요 | 비로그인 사용자용 |
| 진입 조건 | JWT 없거나 만료 시 자동 리다이렉트 |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## 레이아웃 구조

```
<div className="flex flex-col items-center justify-center h-[100dvh] bg-background">
  ┌─────────────────────────────────────────┐
  │           [RorrLogo 브랜드 로고]         │  ← 중앙 상단
  │                                         │
  │     [SocialLoginButton platform="google"]│  ← 소셜 버튼 스택
  │     [SocialLoginButton platform="apple"] │
  │     [SocialLoginButton platform="kakao"] │
  └─────────────────────────────────────────┘

max-w-[500px] mx-auto
버튼 영역: max-w-[320px] px-4 mt-8
버튼 간격: flex flex-col gap-3
```

---

## 컴포넌트

### `<SocialLoginButton>`
```tsx
interface SocialLoginButtonProps {
  platform: 'google' | 'apple' | 'kakao'
  onClick: () => void
  disabled?: boolean
}
```
- Google: 흰 배경 + Google 로고
- Apple: 검정 배경 + Apple 로고
- Kakao: 노란 배경 + Kakao 로고

---

## 상태 관리

| 상태 | 타입 | 초기값 | 설명 |
|------|------|--------|------|
| `isLoading` | `boolean` | `false` | OAuth 요청 중 버튼 비활성화 |

---

## API 호출

로그인 버튼 클릭 → OAuth 팝업/리다이렉트 → token 획득 후 `/auth-verification`으로 이동.
실제 API 호출은 `AuthVerificationPage`에서 수행.

---

## 이벤트 핸들러

| 이벤트 | 처리 |
|--------|------|
| Google 버튼 클릭 | Google OAuth 시작 → `/auth-verification?platform=google&token=...` |
| Apple 버튼 클릭 | Apple OAuth 시작 → `/auth-verification?platform=apple&token=...` |
| Kakao 버튼 클릭 | Kakao OAuth 시작 → `/auth-verification?platform=kakao&token=...` |

---

## 네비게이션

- **성공** → `AuthVerificationPage` 처리 후 `/` 또는 `/follow/league-list`
- **실패** → 현재 페이지 유지, 에러 모달

---

## 빈 상태 / 에러

- OAuth 팝업 차단: 사용자에게 팝업 허용 안내
- 네트워크 오류: `showModal('error', null, 에러메시지)`
