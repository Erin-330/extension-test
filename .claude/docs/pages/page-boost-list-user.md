# 페이지 스펙: 내 부스트 히스토리 `/boost-list`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/boost-list` |
| 컴포넌트 | `BoostListUserPage` |
| 파일 | `src/pages/boost-list/user/index.tsx` |
| 인증 필요 | O |
| 진입 방법 | ProfileMenu → "내 부스트" |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## 레이아웃 구조

```
<PageScrollLayout>
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │
  │   left: [CloseIcon → PROFILE]                   │
  ├─────────────────────────────────────────────────┤
  │ <main className="flex min-h-0 flex-1 flex-col   │
  │   overflow-y-auto overflow-x-hidden pt-12">     │
  │   <section className="flex flex-col gap-4       │
  │     pl-4 pr-2 pb-4">                            │
  │                                                 │
  │     [로딩 중]:                                   │
  │       min-h-[90vh] flex items-center justify-center│
  │       <LoadingRive artboard="Loading">          │
  │                                                 │
  │     [피드 있음]:                                 │
  │       {donationFeed.map →                       │
  │         <BoostHistoryMatchCard                  │
  │           key={`${donationDate}-${tranIDX}-${index}`}│
  │           item={feedItem}                       │
  │           onLikeClick={handleLikeClick}         │
  │           pendingLikeTransactionCode={pendingLikeCode}│
  │         />                                      │
  │       }                                         │
  │       <div ref={loadMoreRef} />                 │
  │       [isFetchingNextPage: <LoadingRive w=80 h=80>]│
  │                                                 │
  │     [피드 없음]:                                 │
  │       min-h-[80vh] flex items-center justify-center│
  │       <NoBoostRive>                             │
  │                                                 │
  └─────────────────────────────────────────────────┘
```

---

## 상태 관리

### 로컬 State
| 상태 | 타입 | 초기값 | 설명 |
|------|------|--------|------|
| `pendingLikeCode` | `string \| null` | `null` | 좋아요 중복 방지 |
| `loadMoreObserverEnabled` | `boolean` | `false` | IntersectionObserver 활성화 지연 |

### Ref
| ref | 설명 |
|-----|------|
| `loadMoreRef` | 무한 스크롤 sentinel |

### TanStack Query (`useDonationHistoryByUserInfinite`)
```ts
{
  list: BoostDonationFeedItem[]
  isLoading: boolean
  fetchNextPage: () => void
  hasNextPage: boolean
  isFetchingNextPage: boolean
}
```

---

## API 호출

### `POST /donation/getDonationHistoryByUser`
```ts
{ next_rown: 마지막_rown, per_page: 20, userid: currentUserId }
```
무한 스크롤: `next_rown = list[last].rown`

---

## 무한 스크롤

```ts
useIntersectionObserver({
  target: loadMoreRef,
  onIntersect: handleLoadMore,
  enabled: loadMoreObserverEnabled && !isFeedLoading && hasNextPage && !isFetchingNextPage,
  rootMargin: '200px 0px',
})

// 데이터 로드 완료 후 300ms 지연 후 Observer 활성화 (레이아웃 안정화)
useEffect(() => {
  if (isFeedLoading || donationFeed.length === 0) {
    setLoadMoreObserverEnabled(false)
    return
  }
  const t = setTimeout(() => setLoadMoreObserverEnabled(true), 300)
  return () => clearTimeout(t)
}, [isFeedLoading, donationFeed.length])
```

---

## BoostHistoryMatchCard 동작

### 상단 강조바
- `leftTeamId` 미전달 → `border-boostEnergy4Icon` (프로필/유저 목록용 색상)

### 카드 헤더 클릭
```ts
// PlayerID 있으면:
setPage(PAGES.BOOST_LIST_PLAYER, {
  state: { targetId: PlayerID, targetType: 'player', playerNickname: PlayerNickname, fromPage: page, fromPageState: pageState }
})
// TeamID 있으면:
setPage(PAGES.BOOST_LIST_TEAM, {
  state: { targetId: TeamID, targetType: 'team', teamInitial: TeamInitial, fromPage: page, fromPageState: pageState }
})
```

### 좋아요
```ts
const handleLikeClick = async (transactionCode: string, userId: string) => {
  if (!userId || pendingLikeCode !== null) return
  setPendingLikeCode(transactionCode)
  try {
    await setFeedLikeAsync({ TransactionCode: transactionCode, user_id: userId })
  } finally {
    setPendingLikeCode(null)
  }
}
// POST /mainfeed/setFeedLike { TransactionCode, user_id }
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.PROFILE` | 헤더 CloseIcon |
| `PAGES.BOOST_LIST_PLAYER` | 카드 PlayerID 클릭 |
| `PAGES.BOOST_LIST_TEAM` | 카드 TeamID 클릭 |
