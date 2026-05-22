# 페이지 스펙: 팔로우 온보딩 (3단계)

## "팔로우 페이지 구현해" 트리거

요청에 **팔로우 페이지** 구현 의도가 있으면 리그·팀·선수 **3단계 전부**를 구현한다.

코드 작성 전 3개 단계의 `get_screenshot` + `get_design_context`를 **한 번에 병렬 호출**한다 (총 6개 동시 호출):
`get_screenshot` 캡처가 유일한 레이아웃 기준 — 섹션 순서·간격·크기 임의 변경 금지. 스펙 설명과 스크린샷이 다르면 스크린샷을 따른다.

| 단계 | Figma node-id | 파일 |
|------|--------------|------|
| 1/3 리그 | `178:50767` | `src/pages/follow/league-list/index.tsx` |
| 2/3 팀 | `471:24358` | `src/pages/follow/team-list/index.tsx` |
| 3/3 선수 | `502:84208` | `src/pages/follow/player-list/index.tsx` |
| 선택됨 SelectNum (공통) | `823:58265` | — |

fileKey: `FR0ELVIB6XF3dHidbEqBdz`

---

## 네비게이션

**⚠️ 리그 → 팀 → 선수 순서 고정. 건너뛰거나 바꾸면 안 된다.**

| 페이지 | 이전 | 다음/완료 |
|--------|------|----------|
| 리그 | `PAGES.MAIN` | Next → `onNavigate(PAGES.FOLLOW_TEAM)` |
| 팀 | `PAGES.FOLLOW_LEAGUE` | Next → `onNavigate(PAGES.FOLLOW_PLAYER)` |
| 선수 | `PAGES.FOLLOW_TEAM` | Done → handleSubmitAll → `onNavigate(PAGES.MAIN)` |

---

## 공통 레이아웃 구조

```
┌─────────────────────────────────────────────────┐
│ AppHeader (RORR 로고 + 닫기)                      │
├─────────────────────────────────────────────────┤
│ 타이틀 + 서브타이틀                               │
│ 검색 버튼 (우상단, absolute)                      │
├─────────────────────────────────────────────────┤
│ 리스트 (스크롤)                                   │
│   선택 순서대로 상단 정렬 → 미선택 순              │
├─────────────────────────────────────────────────┤
│ StepIndicator (하단 고정, backdrop-blur)          │
└─────────────────────────────────────────────────┘
```

### 타이틀 영역 주의사항

- 타이틀 컨테이너는 **`w-full`** — 고정 너비(`w-[215px]` 등) 절대 사용 금지
- 검색 버튼이 `absolute right-0 top-0`이므로 컨테이너에 `pr-[40px]`을 줘서 겹침 방지
- 타이틀 텍스트("Back Your League" 등)는 **한 줄**로 표시 — `whitespace-nowrap` 적용

```tsx
{/* ✅ */}
<div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
  <p className="... whitespace-nowrap">{title}</p>
  <p className="...">{subtitle}</p>
</div>

{/* ❌ 고정 너비로 인해 타이틀 줄바꿈 발생 */}
<div className="flex flex-col gap-[4px] items-start shrink-0 w-[215px] pr-[40px]">
```

---

## 단계별 스펙

### 1단계 — 리그 (`LeagueListPage`)

| 항목 | 값 |
|------|---|
| title | "Back Your League" |
| subtitle | "Follow your favorite leagues" |
| followType | `'league'` |
| currentStep | `0` |
| onPrev | `() => navigate(PAGES.MAIN)` |
| onNext | `() => navigate(PAGES.FOLLOW_TEAM)` |

선택 제한: `FOLLOW_SELECTION_LIMIT.league = 5`

---

### 2단계 — 팀 (`TeamListPage`)

| 항목 | 값 |
|------|---|
| title | "Back Your Team" |
| subtitle | "Select teams to follow" |
| followType | `'team'` |
| currentStep | `1` |
| onPrev | `() => navigate(PAGES.FOLLOW_LEAGUE)` |
| onNext | `() => navigate(PAGES.FOLLOW_PLAYER)` |

선택 제한: `FOLLOW_SELECTION_LIMIT.team = 10`

---

### 3단계 — 선수 (`PlayerListPage`)

| 항목 | 값 |
|------|---|
| title | "Follow Players" |
| subtitle | "Select players to follow" |
| followType | `'player'` |
| currentStep | `2` |
| onPrev | `() => navigate(PAGES.FOLLOW_TEAM)` |
| onDone | handleSubmitAll → `navigate(PAGES.MAIN)` |

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

선택 제한: `FOLLOW_SELECTION_LIMIT.player = 20`

---

## Multiselect UI

**선택된 항목은 반드시 선택 순서(1→2→3…) 그대로 목록 맨 위에 표시.**

```ts
// ✅ 올바른 구현
const selected = orderedTargetIds
  .map((id) => combined.find((i) => i.target_id === id))
  .filter((i): i is FollowTargetItem => i !== undefined)
const unselected = combined.filter((i) => !orderedTargetIds.includes(i.target_id))
return [...selected, ...unselected]
```

### 선택 상태

> Figma node `823:58265`를 `get_design_context`로 호출해 그 결과를 그대로 구현한다.
> 리그·팀·선수 카드 모두 이 1개 디자인을 공통 적용한다.

---

## 선택 상태 유지

**페이지 간 이동(리그 → 팀 → 선수 → 뒤로가기)을 해도 각 단계의 선택 항목은 반드시 유지되어야 한다.**

- 리그 페이지에서 선택 후 팀으로 이동했다가 돌아와도 리그 선택이 그대로 남아있어야 한다.
- 팀, 선수도 동일하다.
- 이를 위해 선택 상태는 컴포넌트 로컬 state가 아닌 **`followSelectionsStore`(Zustand)** 에 저장한다.

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

---

## ⚠️ BOOST 태그 에너지 아이콘 — Figma Icons_UI 구조를 그대로 사용

리그 카드의 BOOST 태그 안 에너지 아이콘은 **매우 작은 컨테이너(Figma 기준 6px)**에 들어간다.
`get_design_context` 가 반환한 `SendEnergyAvailableTag` → `IconsUi` 블록을 **구조 그대로** 사용해야 한다.

```tsx
{/* ✅ Figma Icons_UI 구조 그대로 — overflow-clip 컨테이너가 에너지 아이콘을 작게 클리핑 */}
<div className="... overflow-clip ...">   {/* SendEnergyAvailableTag */}
  <div className="overflow-clip relative shrink-0 size-[Xpx]">  {/* IconsUi — Figma 반환 크기 */}
    <div className="absolute inset-[...]">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={energyIconUrl} />
    </div>
  </div>
  <p className="...">BOOST</p>
</div>

{/* ❌ img만 추출 — overflow-clip 없어서 에너지 이미지가 카드 전체를 덮음 */}
<img src={energyIconUrl} />
```

> 컨테이너 크기·inset 값은 Figma가 바뀌면 재호출하면 된다. MD에 수치를 박지 않는 이유가 이것이다.

---

## StepIndicator

- 활성 도트: `bg-[#2d39b4]`
- 비활성 도트: `bg-[#b2bac3]`
- 버튼: `bg-[#969cda]`, hover: `bg-[#afb5ea]`
- 1단계 이전 버튼: `opacity-0`
