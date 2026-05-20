# 페이지 스펙: 팔로우 — 리그 선택 `/follow/league-list`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/follow/league-list` |
| 컴포넌트 | `LeagueListPage` |
| 파일 | `src/pages/follow/league-list/index.tsx` |
| 인증 필요 | O |
| 단계 | 팔로우 온보딩 1/3단계 |
| 진입 조건 | 첫 로그인 또는 ProfileMenu → "팔로우 설정" |

## 피그마
**Figma:** https://www.figma.com/design/FR0ELVIB6XF3dHidbEqBdz/DesignSystem_REM-EDIT?node-id=178-50767&m=dev
---

## 레이아웃 구조

```
<FollowListLayout
  title="Back Your League"
  subtitle="Follow your favorite leagues"
  searchPanel={searchPanel}
  loadMoreProps={{ hasNextPage, fetchNextPage, isFetchingNextPage }}
  stepIndicator={<StepIndicator totalSteps=3 currentStep=0 ...>}
  renderListContent={...}
>
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │  ← FollowListLayout 내부
  │   center: "Back Your League"                    │
  │   subtitle: "Follow your favorite leagues"      │
  ├─────────────────────────────────────────────────┤
  │ [검색바]                                         │
  │   <SearchInput                                  │
  │     onFocus={searchPanel.open}                  │
  │     onChange={searchPanel.setQuery}             │
  │   />                                            │
  ├─────────────────────────────────────────────────┤
  │ <FollowListContent>                             │
  │   [검색 패널 닫힘 + 목록]:                       │
  │     {getDisplayList(list).map →                 │
  │       <LeagueSelectButton                       │
  │         leagueName={league.name}                │
  │         annotation={league.slug}                │
  │         leagueImgUrl={league.image_url}         │
  │         isActive={orderedTargetIds.includes(id)}│
  │         selectedCount={selectedCountMap.get(id)}│
  │         isBoostAvailable={boostYN === 'Y'}      │
  │         onClick={() => toggleSelect(league.target_id)}│
  │       />                                        │
  │     }                                           │
  │   [검색 패널 열림]:                              │
  │     {searchList.map → 동일 형태}                │
  │     [결과 없음]: <SearchResultsEmpty>           │
  ├─────────────────────────────────────────────────┤
  │ <StepIndicator                                  │
  │   totalSteps=3                                  │
  │   currentStep=0                                 │
  │   onPrev={() => navigate('/')}                  │
  │   onNext={handleNext}                           │
  │   doneLabel="Done"                              │
  │ />                                              │
  └─────────────────────────────────────────────────┘
```

---

## StepIndicator

```
[이전 버튼] ● ○ ○ [다음 버튼]
              리그 팀 선수
```
- `currentStep=0`: 리그 단계
- `onPrev`: `navigate('/')` (메인으로)
- `onNext`: 유효성 검사 후 `goTo('/follow/team-list')`

---

## 상태 관리 (`useFollowListPage`)

```ts
const {
  list,                    // FollowTargetItem[] — 전체 리그 목록
  searchList,              // 검색 결과
  isSearchLoading,
  isListLoading,
  orderedTargetIds,        // 선택된 target_id 배열 (순서 유지)
  useServerOrder,
  toggleSelect,            // 선택/해제 토글
  markSelectedFromSearch,  // 검색 결과에서 선택 시 목록에 추가
  getDisplayList,          // 정렬 로직 (선택된 것 상단 등)
  goTo,                    // 다음 단계 이동
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useFollowListPage({ followType: 'league', searchPanel })
```

---

## API 호출

### `GET /follow/list?follow_type=league`
```ts
// useFollowList('league')
// 응답: { leagues: FollowTargetItem[] }
```

### `GET /search?q={query}&searchType=league`
```ts
// useSearchFollowList(query, 'league')
// debounce 300ms
// 응답: { leagues: FollowTargetItem[] }
```

---

## 선택 제한

```ts
// features/follow/model/constants/selectionLimits.ts
FOLLOW_SELECTION_LIMIT = {
  league: 5,   // 최대 5개
  team: 10,
  player: 20,
}

// onNext 시:
if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.league) {
  showModal('error', null, FOLLOW_LEAGUE_LIMIT_ERROR_MSG)
  return
}
```

---

## LeagueSelectButton props

```ts
{
  leagueName: string        // e.g. "LCK"
  annotation: string        // slug e.g. "lck"
  leagueImgUrl: string      // 리그 로고 이미지
  isActive: boolean         // 선택됨 여부
  selectedCount?: number    // 선택 순서 번호 (선택됐을 때만)
  isBoostAvailable: boolean // 부스트 가능 뱃지
  onClick: () => void
}
```

---

## 무한 스크롤

```ts
{ hasNextPage, fetchNextPage, isFetchingNextPage }
// FollowListLayout에서 하단 sentinel IntersectionObserver 처리
```

---

## 검색 패널 (`useSearchPanel`)

```ts
const searchPanel = useSearchPanel()
// { isOpen, query, open(), close(), setQuery() }
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `/` (메인) | StepIndicator 이전 버튼 |
| `/follow/team-list` | StepIndicator 다음 버튼 (제한 통과 시) |
