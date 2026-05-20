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

## Multiselect UI (Figma 기준)

**한 번에 여러 개 선택 가능 (최대 5개).**

### 미선택 상태
```
카드: bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)] rounded-[8px] h-[68px]
오른쪽 SelectNum: px-[12px] rounded-br-[8px] rounded-tr-[8px]
  내부 아이콘 박스: border-[#969cda] border-[0.4px] rounded-[6px] size-[32px]
  (person+plus 아이콘)
```

### 선택 상태
```
카드: border-2 border-[#209fee] rounded-[8px] h-[68px] overflow-clip
오른쪽 SelectNum: bg-[#209fee] w-[54px] h-full (rounded-br/tr 없음, overflow-clip)
  내부: checkmark 아이콘(w-[13px] h-[9px]) + 선택 순서 번호
  번호 텍스트: font-Pretendard-Light text-[14px] text-white leading-[20px]
```

### 선택 순서 번호
- `orderedTargetIds` 배열 기준 1-based 인덱스 표시
- 선택 해제 시 나머지 항목 번호 자동 재정렬

### 목록 정렬 규칙 ⚠️ 필수
- **선택된 항목은 반드시 선택 순서(1→2→3…) 그대로 목록 맨 위에 표시한다.**
- `getDisplayList`는 `orderedTargetIds` 배열 순서대로 선택 항목을 재정렬한 뒤, 미선택 항목을 그 아래에 이어 붙인다.
- 원래 목록 순서(API 응답 순, 서버 정렬 순)로 선택 항목을 표시하면 안 된다.

```ts
// ✅ 올바른 구현 — 선택 순서 기준 정렬
const selected = orderedTargetIds
  .map((id) => combined.find((i) => i.target_id === id))
  .filter((i): i is FollowTargetItem => i !== undefined)
const unselected = combined.filter((i) => !orderedTargetIds.includes(i.target_id))
return [...selected, ...unselected]

// ❌ 금지 — 목록 순서 그대로 선택 항목을 나열 (번호가 뒤죽박죽)
const selected = combined.filter((i) => orderedTargetIds.includes(i.target_id))
```

---

## 선택 상태 페이지 간 유지 (Zustand)

`followSelectionsStore`(Zustand)에 선택 상태를 저장해 페이지 이동 후에도 유지한다.

```ts
// features/follow/model/store/followSelectionsStore.ts
{
  leagues: FollowTargetItem[]   // 리그 선택 목록
  teams: FollowTargetItem[]
  players: FollowTargetItem[]
  toggleLeague: (item: FollowTargetItem) => void
  toggleTeam: (item: FollowTargetItem) => void
  togglePlayer: (item: FollowTargetItem) => void
  reset: () => void
}
```

- `/follow/league-list` → Next → `/follow/team-list` → Back → `/follow/league-list` 복귀 시 선택 유지
- `orderedTargetIds`는 `followSelectionsStore.leagues`에서 파생
- `useHydrateFollowSelections` 훅으로 첫 진입 시 기존 팔로우 데이터로 초기화

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
