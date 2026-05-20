# 페이지 스펙: 팀/선수 부스트 피드 `/boost-list/team` `/boost-list/player`

## 기본 정보

| 항목 | 팀 | 선수 |
|------|-----|------|
| 라우트 | `/boost-list/team` | `/boost-list/player` |
| 컴포넌트 | `BoostListTeamPage` | `BoostListPlayerPage` |
| 파일 | `src/pages/boost-list/team/index.tsx` | `src/pages/boost-list/player/index.tsx` |
| 인증 필요 | O | O |
| 진입 방법 | BoostHistoryMatchCard 헤더 클릭 | BoostHistoryMatchCard 헤더 클릭 |

## 피그마
**Figma (팀):** *(미입력)*
**Figma (선수):** *(미입력)*

---

## Location State

### 팀 페이지
```ts
{
  targetId: string         // team_id
  targetType: 'team'
  teamInitial: string      // 팀 약어 (헤더 표시용)
  fromPage?: string        // 이전 페이지 경로
  fromPageState?: unknown  // 이전 페이지 state
}
```

### 선수 페이지
```ts
{
  targetId: string         // player_id
  targetType: 'player'
  playerNickname: string   // 선수 닉네임 (헤더 표시용)
  fromPage?: string
  fromPageState?: unknown
}
```

---

## 레이아웃 구조 (팀/선수 동일 패턴)

```
<PageScrollLayout>
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │
  │   left: [BackIcon → fromPage || MAIN]           │
  │   center: [팀: `${teamInitial} 부스트`]          │
  │          [선수: `${playerNickname} 부스트`]      │
  ├─────────────────────────────────────────────────┤
  │ <main className="flex min-h-0 flex-1 flex-col   │
  │   overflow-y-auto overflow-x-hidden pt-12">     │
  │   <section className="flex flex-col gap-4       │
  │     pl-4 pr-2 pb-4">                            │
  │                                                 │
  │     [로딩 중]:                                   │
  │       <LoadingRive artboard="Loading"> (중앙)   │
  │                                                 │
  │     [피드 있음]:                                 │
  │       {list.map → <BoostHistoryMatchCard        │
  │         item={item}                             │
  │         onLikeClick={handleLikeClick}           │
  │         pendingLikeTransactionCode={pendingCode}│
  │       />}                                       │
  │       <div ref={loadMoreRef} />                 │
  │       [isFetchingNextPage: <LoadingRive>]        │
  │                                                 │
  │     [피드 없음]:                                 │
  │       <NoBoostRive> (중앙)                      │
  │                                                 │
  └─────────────────────────────────────────────────┘
```

---

## 상태 관리 (팀/선수 동일)

### 로컬 State
| 상태 | 타입 | 설명 |
|------|------|------|
| `pendingLikeCode` | `string \| null` | 좋아요 중복 방지 |

### TanStack Query

**팀**: `useDonationHistoryByTeamInfinite({ teamId, userId })`
```ts
// POST /donation/getDonationHistoryByTeam
{ teamid, next_rown, per_page: 20, userid }
```

**선수**: `useDonationHistoryByPlayerInfinite({ playerId, userId })`
```ts
// POST /donation/getDonationHistoryByPlayer
{ playerid, next_rown, per_page: 20, userid }
```

---

## 무한 스크롤

```ts
useIntersectionObserver({
  target: loadMoreRef,
  onIntersect: () => { if (hasNextPage && !isFetchingNextPage) fetchNextPage() },
  enabled: !isLoading && hasNextPage,
  rootMargin: '200px 0px',
})
```

---

## BoostHistoryMatchCard 동작

- `leftTeamId` 미전달 → 상단 강조바 `border-boostEnergy4Icon`
- 카드 헤더 클릭 → 다시 같은 팀/선수 페이지로 이동 (또는 크로스 네비게이션)

### 좋아요 처리
```ts
// POST /mainfeed/setFeedLike { TransactionCode, user_id }
const handleLikeClick = async (transactionCode, userId) => {
  if (pendingLikeCode !== null) return
  setPendingLikeCode(transactionCode)
  try { await setFeedLikeAsync({ TransactionCode: transactionCode, user_id: userId }) }
  finally { setPendingLikeCode(null) }
}
```

---

## 뒤로가기 처리

```ts
const goBack = () => {
  if (state?.fromPage) {
    setPage(state.fromPage, { state: state.fromPageState })
  } else {
    setPage(PAGES.MAIN)
  }
}
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `fromPage` 또는 `PAGES.MAIN` | 헤더 BackIcon |
| `PAGES.BOOST_LIST_PLAYER` | 카드 PlayerID 클릭 |
| `PAGES.BOOST_LIST_TEAM` | 카드 TeamID 클릭 |
