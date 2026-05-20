# 페이지 스펙: 팔로우 — 팀/선수 선택 `/follow/team-list` `/follow/player-list`

## 기본 정보

| 항목 | 팀 | 선수 |
|------|-----|------|
| 라우트 | `/follow/team-list` | `/follow/player-list` |
| 컴포넌트 | `TeamListPage` | `PlayerListPage` |
| 파일 | `src/pages/follow/team-list/index.tsx` | `src/pages/follow/player-list/index.tsx` |
| 단계 | 팔로우 2/3단계 | 팔로우 3/3단계 |

## 피그마
**Figma (팀):** https://www.figma.com/design/FR0ELVIB6XF3dHidbEqBdz/DesignSystem_REM-EDIT?node-id=471-24358&m=dev
**Figma (선수):** https://www.figma.com/design/FR0ELVIB6XF3dHidbEqBdz/DesignSystem_REM-EDIT?node-id=502-84208&m=dev

---

## 공통 레이아웃 구조 (리그 선택과 동일 패턴)

```
<FollowListLayout
  title={팀: "Back Your Team" | 선수: "Follow Players"}
  subtitle={팀: "Select teams to follow" | 선수: "Select players to follow"}
  searchPanel={searchPanel}
  loadMoreProps={...}
  stepIndicator={<StepIndicator currentStep={팀:1 | 선수:2} ...>}
  renderListContent={...}
>
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader> center: 제목                         │
  ├─────────────────────────────────────────────────┤
  │ [검색바]                                         │
  ├─────────────────────────────────────────────────┤
  │ <FollowListContent>                             │
  │   {list.map → <TeamSelectButton> or             │
  │               <PlayerSelectButton>}             │
  ├─────────────────────────────────────────────────┤
  │ <StepIndicator currentStep={1 or 2}>            │
  └─────────────────────────────────────────────────┘
```

---

## 팀 페이지 (`TeamListPage`)

### StepIndicator
```ts
{
  totalSteps: 3,
  currentStep: 1,
  onPrev: () => navigate('/follow/league-list'),
  onNext: () => {
    if (orderedTargetIds.length > FOLLOW_SELECTION_LIMIT.team) {
      showModal('error', null, FOLLOW_TEAM_LIMIT_ERROR_MSG)
      return
    }
    goTo('/follow/player-list')
  },
  doneLabel: "Done",
}
```

### API
```
GET /follow/list?follow_type=team
GET /search?q={query}&searchType=team
```

### TeamSelectButton props
```ts
{
  teamName: string         // 팀명
  annotation: string       // initial (약어)
  teamImgUrl: string
  isActive: boolean
  selectedCount?: number
  isBoostAvailable: boolean
  onClick: () => void
}
```

### 선택 제한
```ts
FOLLOW_SELECTION_LIMIT.team = 10   // 최대 10개
```

---

## 선수 페이지 (`PlayerListPage`)

### StepIndicator
```ts
{
  totalSteps: 3,
  currentStep: 2,
  onPrev: () => navigate('/follow/team-list'),
  onNext: undefined,      // 선수 단계에서 Done 버튼
  onDone: handleSubmitAll,
  doneLabel: "Done",
}
```

### handleSubmitAll
```ts
const handleSubmitAll = async () => {
  await followApi.submitFollowAll({
    league: selectedLeagues.map(l => ({ target_id: l.target_id })),
    team:   selectedTeams.map(t => ({ target_id: t.target_id })),
    player: selectedPlayers.map(p => ({ target_id: p.target_id })),
  })
  followSelectionsStore.reset()
  navigate('/')
}
// PUT /follow { league, team, player }
```

### API
```
GET /follow/list?follow_type=player
GET /search?q={query}&searchType=player
PUT /follow { league, team, player }
```

### PlayerSelectButton props
```ts
{
  playerName: string        // nickname
  teamName?: string         // 소속 팀명
  teamImgUrl?: string       // 소속 팀 로고
  playerImgUrl: string      // 선수 이미지
  isActive: boolean
  selectedCount?: number
  onClick: () => void
}
```

### 선택 제한
```ts
FOLLOW_SELECTION_LIMIT.player = 20   // 최대 20개 (최소 없음)
```

---

## Zustand 스토어 (`followSelectionsStore`)

모든 단계에서 공유하는 선택 상태 — 페이지 이동(Next/Back) 후에도 선택이 유지된다:
```ts
// features/follow/model/store/followSelectionsStore.ts
{
  leagues: FollowTargetItem[]
  teams: FollowTargetItem[]
  players: FollowTargetItem[]
  toggleLeague: (item: FollowTargetItem) => void
  toggleTeam: (item: FollowTargetItem) => void
  togglePlayer: (item: FollowTargetItem) => void
  reset: () => void
}
```

- `orderedTargetIds`는 각 단계의 store 배열(`leagues` / `teams` / `players`)에서 파생
- Back 버튼으로 이전 단계 복귀 시 해당 단계의 선택 상태 그대로 유지
- `useHydrateFollowSelections` 훅으로 초기 진입 시 기존 팔로우 데이터로 스토어 초기화

---

## Multiselect UI (Figma 기준)

**한 번에 여러 개 선택 가능 (팀: 최대 10개, 선수: 최대 20개).**

### 미선택 상태 (팀/선수 공통)
```
카드: bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.1)] rounded-[8px] h-[68px]
오른쪽 SelectNum: px-[12px] rounded-br-[8px] rounded-tr-[8px]
  내부 아이콘 박스: border-[#969cda] border-[0.4px] rounded-[6px] size-[32px]
  (person+plus 아이콘)
```

### 선택 상태 (팀/선수 공통)
```
카드: border-2 border-[#209fee] rounded-[8px] h-[68px] overflow-clip
오른쪽 SelectNum: bg-[#209fee] w-[54px] h-full (overflow-clip)
  내부: checkmark 아이콘(w-[13px] h-[9px]) + 선택 순서 번호
  번호 텍스트: font-Pretendard-Light text-[14px] text-white leading-[20px]
```

### 선택 순서 번호
- `orderedTargetIds` 배열 기준 1-based 인덱스 표시
- 선택 해제 시 나머지 항목 번호 자동 재정렬

---

## 검색 결과 선택 특이사항

```ts
// 검색 결과에서 선택 시 두 가지 동작:
toggleSelect(item.target_id)        // 선택/해제 토글
markSelectedFromSearch(item)        // 아직 목록에 없는 아이템을 목록에 추가
```

---

## 네비게이션

| 페이지 | 이전 | 다음/완료 |
|--------|------|----------|
| 팀 | `/follow/league-list` | `/follow/player-list` |
| 선수 | `/follow/team-list` | Done → `/` |
