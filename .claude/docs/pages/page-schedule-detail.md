# 페이지 스펙: 경기 상세 `/schedule/detail`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/schedule/detail` |
| 컴포넌트 | `ScheduleDetailPage` |
| 파일 | `src/pages/schedule/detail/index.tsx` |
| 인증 필요 | O |
| 진입 방법 | location.state로 매치 데이터 전달 (SchedulePage → 카드 클릭) |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## Location State (진입 시 전달)
```ts
{
  match_id: string
  status: string              // 'running' | 'completed' | 'not_started' | ...
  teams: ScheduleMatchTeamDto[]
  leagues: ScheduleMatchLeagueDto
  series: { serie_id, serie_name, begin_date, end_date }
  begin_date: string | null
  donationInfo: ScheduleMatchDonationInfoDto[]
}
```

---

## 레이아웃 구조

```
<PageScrollLayout>
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │
  │   left: [BackIcon → SCHEDULE]                   │
  │   center: [leagues.league_name]                  │
  │   right: [BoostIcon → BOOST_SELECT]             │
  ├─────────────────────────────────────────────────┤
  │ <MatchScoreCard>                                │  ← 상태 표시용 (클릭 불가)
  │   (status, 양팀 점수, begin_date 표시)           │
  ├─────────────────────────────────────────────────┤
  │ <TabNav tabs={['부스트', '이벤트']} />            │
  ├─────────────────────────────────────────────────┤
  │ [탭 0 - 부스트]:                                │
  │   <BoostDetailTab>                              │
  │     {feeds.map → <BoostHistoryMatchCard>}       │
  │     [무한 스크롤 sentinel]                       │
  │   </BoostDetailTab>                             │
  │                                                 │
  │ [탭 1 - 이벤트]:                                │
  │   <EventDetailTab>                              │
  │     {events.map → <GameEventCard>}              │
  │     or <NoDataRive>                             │
  │   </EventDetailTab>                             │
  └─────────────────────────────────────────────────┘
```

---

## 탭 0: 부스트 피드

### 파일
```
src/pages/schedule/detail/boost/index.tsx
src/features/schedule/model/hooks/useDonationHistoryByMatchInfinite.ts
src/features/schedule/model/hooks/useSetFeedLike.ts
```

### 상태 관리
```ts
// useDonationHistoryByMatchInfinite(matchId, userId)
{
  list: BoostDonationFeedItem[]
  isLoading: boolean
  fetchNextPage: () => void
  hasNextPage: boolean
  isFetchingNextPage: boolean
}

// useSetFeedLike
{ mutateAsync: setFeedLikeAsync }

// 로컬
pendingLikeCode: string | null  // 좋아요 중복 방지
```

### API
```
POST /donation/getDonationHistoryByMatch
{ matchid, next_rown: 마지막rown, per_page: 20, userid }
```

### BoostHistoryMatchCard props
```ts
{
  item: BoostDonationFeedItem,
  leftTeamId: state.teams[0].team_id,   // 상단 강조바 색상 결정
  onLikeClick: (transactionCode, userId) => Promise<void>,
  pendingLikeTransactionCode: pendingLikeCode,
}
```

### 빈 상태
```
<NoBoostRive />  (부스트 없음)
```

---

## 탭 1: 이벤트

### 파일
```
src/pages/schedule/detail/event/index.tsx
src/features/schedule/model/hooks/useScheduleEvents.ts
src/shared/ui/GameEventCard/
```

### API
```
GET /event?match_id={match_id}&page=1&per_page=20
```

### GameEventCard props
```ts
{
  event: ScheduleEventDto
  // ScheduleEventDto:
  // { idx, match_id, game_id, game_number, created_date, summary, items: ScheduleEventItemDto[] }
}
```

### 빈 상태
```
<NoDataRive />
```

---

## 헤더 오른쪽: 부스트 버튼

```tsx
onClick={() => setPage(PAGES.BOOST_SELECT, {
  state: {
    match_id: state.match_id,
    teams: state.teams,
    donationInfo: state.donationInfo,
    status: state.status,
    leagues: state.leagues,
    begin_date: state.begin_date,
  } as BoostFlowState
})
```

---

## 상태 관리

### 로컬 State
| 상태 | 타입 | 초기값 | 설명 |
|------|------|--------|------|
| `activeTab` | `0 \| 1` | `0` | 현재 탭 |
| `pendingLikeCode` | `string \| null` | `null` | 좋아요 처리 중 코드 |

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.SCHEDULE` | 헤더 BackIcon |
| `PAGES.BOOST_SELECT` | 헤더 BoostIcon |
| `PAGES.BOOST_LIST_TEAM` | 피드 카드 TeamID 클릭 |
| `PAGES.BOOST_LIST_PLAYER` | 피드 카드 PlayerID 클릭 |

---

## 좋아요 처리
```ts
const handleLike = async (transactionCode: string, userId: string) => {
  if (pendingLikeCode !== null) return
  setPendingLikeCode(transactionCode)
  try {
    await setFeedLikeAsync({ TransactionCode: transactionCode, user_id: userId })
    // TanStack Query invalidate → 피드 갱신
  } finally {
    setPendingLikeCode(null)
  }
}
```
