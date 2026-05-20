# 페이지 스펙: 프로필 `/profile`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/profile` |
| 컴포넌트 | `ProfilePage` |
| 파일 | `src/pages/profile/index.tsx` |
| 인증 필요 | O (실패 시 `/login`) |
| 특이사항 | 매 마운트마다 프로필 refetch |

## 피그마
**Figma:** https://www.figma.com/design/FR0ELVIB6XF3dHidbEqBdz/DesignSystem_REM-EDIT?node-id=197-35086&m=dev

---

## 레이아웃 구조

```
<div className="relative h-full min-h-[100dvh] w-full bg-background">
  ┌─────────────────────────────────────────────────┐
  │ <ProfileHeader>                                 │  ← fixed top
  │   onClose={() => setPage(PAGES.MAIN)}           │
  │   onMailClick={() => setPage(PAGES.MAIL)}       │
  │   messageCount={profile.msgCnt}                 │
  │   isLoading={isLoading}                         │
  ├─────────────────────────────────────────────────┤
  │ <main className="flex h-[100dvh] w-full          │
  │   flex-col bg-background">                      │
  │   <div className="flex min-h-0 flex-1            │
  │     flex-col overflow-y-auto overflow-x-hidden   │
  │     px-4 pt-20">                                │
  │                                                 │
  │     [로딩 중]: <RiveLoading inline>              │
  │                                                 │
  │     [완료]:                                      │
  │       <ProfileUserCard profile={profile} />     │
  │       <div className="w-full border-b           │
  │         border-dsText-80" />                    │
  │       <ProfileMenu onSetPage={handleSetPage} /> │
  │                                                 │
  ├─────────────────────────────────────────────────┤
  │ <footer className="flex shrink-0 flex-col        │
  │   items-center justify-center p-4">             │
  │   <div className="mb-4 w-full border-b          │
  │     border-dsText-80" />                        │
  │   <RorrIcon className="h-[3.375rem] w-16        │
  │     text-[#2D39B4]" />                          │
  └─────────────────────────────────────────────────┘
```

---

## ProfileHeader 컴포넌트

```
[fixed top] h-14 flex items-center justify-between px-4 bg-background

left: [CloseIcon 버튼]
right:
  [MailIcon 버튼]  (messageCount > 0 → 빨간 뱃지)
  badge 표시: messageCount > 99 → "99+"
```

---

## ProfileUserCard 컴포넌트

```
[프로필 이미지 원형] (picture)
  + [등급 테두리: ProfileGradeBorder gradeId={gradeId}]

[displayname]     ← Typography variant="subtitle"
[email]           ← Typography variant="description" color="text80"
[gradeName 뱃지]  ← 등급명

[에너지 잔액 행]
  [에너지 아이콘] {cash} Energy

[경험치 행]
  [경험치 아이콘] {exp} EXP
```

---

## ProfileGradeBorder

등급별 테두리 색상/스타일 컴포넌트:
```tsx
<ProfileGradeBorder gradeId={profile.gradeId}>
  <img src={profile.picture} className="rounded-full" />
</ProfileGradeBorder>
```

---

## ProfileMenu 컴포넌트

메뉴 행 목록:
```
[팔로우 설정]   → /follow/league-list  (FROM_PROFILE_STATE_KEY state 포함)
[내 픽 히스토리] → /streak/history
[에너지 충전]   → /charge
[구매 내역]     → /purchase-list
[랭킹]         → /rank
─────────────────────────────────────────────
[로그아웃]     → clearToken() + navigate('/login')
```

각 행 (`ProfileMenuRow`):
```
[아이콘] [메뉴명] [ChevronRightIcon]
```

---

## 상태 관리

### TanStack Query (`useProfile`)
```ts
// features/profile/model/hooks/useProfile.ts
useProfile()
→ { profile: SparkProfile | null, isLoading, refetch }

// GET /spark/profile
// SparkProfile:
{
  email, displayname, picture, exp,
  cash: string,  gradeId, gradeName, msgCnt
}
```

---

## API 호출

### `GET /spark/profile` (마운트 시 + refetch)
TanStack Query 키: `['profile']`

---

## 이벤트 핸들러

### 로그아웃
```ts
clearToken()          // localStorage 토큰 제거
LoLSocket.disconnect() // 소켓 연결 종료
navigate('/login')
```

### ProfileMenu 네비게이션
```ts
// FROM_PROFILE_STATE_KEY state 전달 (일부 페이지에서 복귀 시 프로필로 돌아가기 위해)
setPage(page, { state: { [FROM_PROFILE_STATE_KEY]: true } })
```

---

## 가드

```ts
useEffect(() => {
  if (!isAuthValid()) setPage(PAGES.LOGIN)
}, [setPage])

useEffect(() => {
  if (isAuthValid()) refetch()
}, [refetch])
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.MAIN` | 헤더 CloseIcon |
| `PAGES.MAIL` | 헤더 MailIcon |
| `/follow/league-list` | 팔로우 설정 메뉴 |
| `/streak/history` | 내 픽 히스토리 메뉴 |
| `/charge` | 에너지 충전 메뉴 |
| `/purchase-list` | 구매 내역 메뉴 |
| `/rank` | 랭킹 메뉴 |
| `/login` | 로그아웃 |
