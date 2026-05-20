# 페이지 스펙: OAuth 인증 콜백 `/auth-verification`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/auth-verification` |
| 컴포넌트 | `AuthVerificationPage` |
| 파일 | `src/pages/auth-verification/index.tsx` |
| 인증 불필요 | OAuth 콜백 처리 전용 |
| 특이사항 | 이 경로에 있는 동안 `<RiveLoading overlayPosition="absolute">` 표시 |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## 레이아웃 구조

이 페이지는 UI 없이 로직만 수행. 화면은 `AppRouter`의 `RiveLoading` 오버레이가 덮음.

```
<div> (빈 컨테이너, 백그라운드 처리용)
  [처리 중: Rive 오버레이 → AppRouter에서 렌더]
</div>
```

---

## 처리 흐름

```
마운트
  └─ URL params에서 platform, token 추출
  └─ authApi.login({ platformType, token, loginType: 'OAuth' })
       성공
         └─ setToken(jwt)              ← localStorage 저장
         └─ followApi.getMyFollow()   ← 온보딩 여부 확인
              follow_onboarding_yn === false
                └─ navigate('/follow/league-list')
              follow_onboarding_yn === true
                └─ navigate('/')
       실패
         └─ showModal('error', null, 메시지)
         └─ navigate('/login')
```

---

## API 호출

### `POST /users/login`
```ts
{
  loginType: 'OAuth',
  platformType: 'google' | 'apple' | 'kakao',
  token: string,         // OAuth에서 받은 토큰
  autoLogin: true,
}
```
**응답** → `data.jwt` → `setToken(jwt)`

### `GET /follow/my`
```ts
// 응답
data.follow_onboarding_yn: boolean
```

---

## JWT 저장 함수
```ts
// shared/lib/auth/token.ts
setToken(jwt: string)          // localStorage.setItem('token', jwt)
getStoredToken(): string|null
isAuthValid(): boolean         // exp 기준 만료 확인
clearToken()                   // localStorage.removeItem
getUserIdFromToken(): string|null
```

---

## 상태 관리

| 상태 | 타입 | 설명 |
|------|------|------|
| `isLoading` | `boolean` | API 호출 중 |
| `error` | `string \| null` | 에러 메시지 |
