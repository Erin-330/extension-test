# 페이지 스펙: 팔로우 온보딩 (3단계)

요청에 **팔로우 페이지** 구현 의도가 있으면 리그·팀·선수 **3단계 전부**를 구현한다.

코드 작성 전 3개 단계의 `get_screenshot`를 **한 번에 병렬 호출**한다:

| 단계 | Figma node-id | 파일 |
|------|--------------|------|
| 1/3 리그 | `7582:48958` | `src/pages/follow/league-list/index.tsx` |
<!--
| 2/3 팀 | `471:24358` | `src/pages/follow/team-list/index.tsx` |
| 3/3 선수 | `502:84208` | `src/pages/follow/player-list/index.tsx` |
-->

---

## 네비게이션

| 페이지 | 이전 | 다음/완료 |
|--------|------|----------|
| 리그 | `PAGES.MAIN` | Next → `onNavigate(PAGES.FOLLOW_TEAM)` |
<!--
| 팀 | `PAGES.FOLLOW_LEAGUE` | Next → `onNavigate(PAGES.FOLLOW_PLAYER)` |
| 선수 | `PAGES.FOLLOW_TEAM` | Done → handleSubmitAll → `onNavigate(PAGES.MAIN)` |
-->

---

## 단계별 데이터

| 단계 | followType | currentStep | 선택 제한 |
|------|------------|-------------|----------|
| 리그 | `'league'` | `0` | 5 |
<!--
| 팀 | `'team'` | `1` | 10 |
| 선수 | `'player'` | `2` | 20 |
-->

---

## 제출 로직

```ts
const handleSubmitAll = async () => {
  await followApi.submitFollowAll({
    league: selectedLeagues.map(l => ({ target_id: l.target_id })),
    team:   selectedTeams.map(t => ({ target_id: t.target_id })),
    player: selectedPlayers.map(p => ({ target_id: p.target_id })),
  })
  followSelectionsStore.reset()
  navigate(PAGES.MAIN)
}
// PUT /follow { league, team, player }
```

---

## Zustand 스토어 (`followSelectionsStore`)

```ts
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
