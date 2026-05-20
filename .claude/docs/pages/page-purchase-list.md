# 페이지 스펙: 구매 내역 `/purchase-list`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/purchase-list` |
| 컴포넌트 | `PurchaseListPage` |
| 파일 | `src/pages/purchase/list/index.tsx` |
| 인증 필요 | O |
| 진입 방법 | ProfileMenu → "구매 내역" |

## 피그마
**Figma:** https://www.figma.com/design/FR0ELVIB6XF3dHidbEqBdz/DesignSystem_REM-EDIT?node-id=1767-73369&m=dev

---

## 레이아웃 구조

```
<div className="flex h-[100dvh] flex-col bg-background">
  ┌─────────────────────────────────────────────────┐
  │ <PurchaseListHeader onClose={→ PROFILE}>        │  ← fixed top
  │   center: "구매 내역"                            │
  ├─────────────────────────────────────────────────┤
  │ <div className="flex-1 overflow-y-auto p-4 pt-14">│
  │                                                 │
  │   [초기 로딩]: <LoadingRive artboard="Loading"> │
  │                                                 │
  │   [목록]:                                        │
  │     <PurchaseHistoryList>                       │
  │       {items.map →                              │
  │         <PurchaseListItem item={item} />        │
  │       }                                         │
  │       <div ref={loadMoreRef} />                 │
  │       [추가 로딩: <LoadingRive w=80 h=80>]       │
  │                                                 │
  │   [빈 목록]:                                    │
  │     "구매 내역이 없습니다" 메시지               │
  │                                                 │
  └─────────────────────────────────────────────────┘
```

---

## PurchaseListItem 컴포넌트

```
<div className="flex items-center justify-between p-3 bg-surface rounded-[0.5rem]">
  ┌───────────────────────────────────────────────────┐
  │ [왼쪽]                                            │
  │   [에너지 아이콘]                                  │
  │   <div className="flex flex-col gap-1">           │
  │     <Typography variant="description2">           │
  │       +{energyCount} Energy                       │
  │     </Typography>                                 │
  │     <Typography variant="annotation" color="text80">│
  │       {formatPayedDate(payed_date)}               │
  │     </Typography>                                 │
  │   </div>                                          │
  │                                                   │
  │ [오른쪽]                                          │
  │   <div className="flex flex-col items-end gap-1"> │
  │     <Typography variant="description2">           │
  │       {Amount.toLocaleString()}원                 │
  │     </Typography>                                 │
  │     <Typography variant="annotation" color="text80">│
  │       만료: {formatExpiredDate(expired_date)}     │
  │     </Typography>                                 │
  │   </div>                                          │
  └───────────────────────────────────────────────────┘
```

---

## 날짜 포맷 함수

### `formatPayedDate(payed_date: string)`
```ts
// features/purchase-list/lib/formatPayedDate.ts
// 예: "2024-01-15T12:30:00" → "2024.01.15 12:30"
```

### `formatExpiredDate(expired_date: string)`
```ts
// features/purchase-list/lib/formatExpiredDate.ts
// 예: "2025-01-15" → "2025.01.15 만료"
```

---

## 상태 관리

### TanStack Query (`useUserDepositHistory`)
```ts
// features/purchase-list/model/hooks/useUserDepositHistory.ts
useUserDepositHistory(userId: string)
→ { items: UserDepositHistoryItem[], isLoading, fetchNextPage, hasNextPage, isFetchingNextPage }

// POST /users/getUserDepositHistory { next_rown, per_page: 20, userid }
// 무한 스크롤: next_rown = items[last].rown
```

---

## API 호출

### `POST /users/getUserDepositHistory`
```ts
{ next_rown: 0, per_page: 20, userid: currentUserId }

// Response data: UserDepositHistoryItem[]
{
  Amount: number           // 결제 금액
  DepositType: string      // 충전 유형
  TransactionCode: string
  UserID: string
  currency: string         // 'KRW'
  energyCount: number      // 충전된 에너지
  expired_date: string     // 에너지 만료일
  payed_date: string       // 결제일시
  pgType: string           // 'TOSS' 등
  rown: number
}
```

---

## 무한 스크롤

```ts
useIntersectionObserver({
  target: loadMoreRef,
  onIntersect: () => { if (hasNextPage && !isFetchingNextPage) fetchNextPage() },
  enabled: !isLoading && hasNextPage,
  rootMargin: '100px 0px',
})
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.PROFILE` | 헤더 CloseIcon (PurchaseListHeader) |
