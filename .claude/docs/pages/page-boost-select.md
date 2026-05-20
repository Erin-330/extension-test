# 페이지 스펙: 부스트 대상 선택 `/boost/select`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/boost/select` |
| 컴포넌트 | `BoostCreateSelectPage` |
| 파일 | `src/pages/boost/select/index.tsx` |
| 인증 필요 | O |
| 진입 방법 | `/schedule/detail` 헤더 부스트 버튼 → location.state 전달 |
| 단계 | 부스트 생성 1/3단계 |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## Location State (진입 시)
```ts
// BoostFlowState (또는 BoostLocationState)
{
  match_id: string
  teams: ScheduleMatchTeamDto[]   // 양 팀 정보
  donationInfo?: ScheduleMatchDonationInfoDto[]
  status?: string
  leagues?: ScheduleMatchLeagueDto
  begin_date?: string | null
  // 이전에 선택했다면:
  target?: BoostTarget | null
}
```

---

## 레이아웃 구조

```
<PageScrollLayout className="flex flex-col">
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │
  │   left: [CloseIcon → SCHEDULE_DETAIL]           │
  ├─────────────────────────────────────────────────┤
  │                                                 │
  │  [로딩/에러]: fixed inset-0 bg-background        │
  │    <LoadingRive artboard="Loading">             │
  │                                                 │
  │  [teams 없음]: <NoDataRive>                     │
  │                                                 │
  │  [정상]:                                        │
  │    <Step1TeamPlayer                             │
  │      optionsSplit={optionsSplit}                │
  │      selected={selected}                        │
  │      onSelect={setSelected}                     │
  │      boostYNByTeam={boostYNByTeam}              │
  │    />                                           │
  │                                                 │
  ├─────────────────────────────────────────────────┤
  │ [fixed bottom 버튼]                              │
  │   px-10 pb-4 max-w-[500px] mx-auto              │
  │   <BoostButton                                  │
  │     disabled={!selected || isLoading}           │
  │     onClick={goNext}                            │
  │   >                                             │
  │     [Boost2Icon] BOOST [ChevronRightIcon]       │
  │   </BoostButton>                                │
  └─────────────────────────────────────────────────┘

flex-1 overflow-y-auto pl-4 pr-2 pb-24 min-h-0
```

---

## 상태 관리

### 로컬 State
| 상태 | 타입 | 초기값 | 설명 |
|------|------|--------|------|
| `selected` | `BoostTarget \| null` | `state?.target ?? null` | 선택한 대상 |

### TanStack Query (`useGetTeams`)
```ts
// features/boost/model/hooks/useGetTeams.ts
// team_id: 양팀 ID를 콤마로 join한 문자열
useGetTeams(teamId: string)
→ { data: GetTeamsResponse, isLoading, isError }
```

---

## API 호출

### `POST /teams/getTeams`
```ts
{ team_id: state.teams.map(t => t.team_id).join(',') }
// Response data: GetTeamsTeamDto[]
// → mapGetTeamsToScheduleShape() 으로 변환
// → buildTargetOptionsSplit() 으로 팀/선수 옵션 분리
```

---

## 데이터 변환

### `mapGetTeamsToScheduleShape(getTeamsData.data)`
```ts
// 반환:
{
  teams: ScheduleMatchTeamDto[]
  donationInfo: ScheduleMatchDonationInfoDto[]
}
```

### `buildTargetOptionsSplit(teams, donationInfo)`
```ts
// 반환:
{
  teamOptions: BoostTargetOption[]    // 팀 단위 선택지
  playerOptions: BoostTargetOption[]  // 선수 단위 선택지
}

// BoostTargetOption:
{
  target_id: string
  target_name: string
  target_type: 'team' | 'player'
  team_id: string
  image_url: string
  lol_role?: string
}
```

---

## Step1TeamPlayer 컴포넌트

```
[팀 A 섹션]
  [팀 A 선택 버튼] — 팀 로고 + 팀명
  [선수들 그리드] — 역할별 정렬
    [선수 카드] (nickname, role, image)

[팀 B 섹션]
  ...동일...
```

선택 시: `onSelect(target)` → `selected` 상태 업데이트
이미 선택된 항목 클릭 → 선택 해제 (`onSelect(null)`)

### BoostTarget 타입
```ts
{
  target_id: string
  target_name: string        // 선수 nickname 또는 팀명
  target_type: 'player' | 'team'
  team_id: string
}
```

---

## BoostButton 컴포넌트
```tsx
// 항상 같은 구조
<BoostButton disabled={!selected || isLoading} onClick={goNext}>
  <span className="w-5 h-5" />           {/* 왼쪽 여백 */}
  <div className="flex items-center gap-1">
    <Boost2Icon />
    <Typography variant="descriptionFocused" color="text100">BOOST</Typography>
  </div>
  <ChevronRightIcon className="w-5 h-5 text-white" />
</BoostButton>
```

---

## 이벤트 핸들러

### `goBack()`
```ts
setPage(PAGES.SCHEDULE_DETAIL, {
  state: { match_id, teams, donationInfo, status, leagues, begin_date }
})
```

### `goNext()`
```ts
if (!selected) return
setPage(PAGES.BOOST_MESSAGE, {
  state: { ...state, target: selected }
})
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.SCHEDULE_DETAIL` | 헤더 CloseIcon |
| `PAGES.BOOST_MESSAGE` | BOOST 버튼 (selected 있을 때) |

---

## 빈 상태 / 에러

| 상황 | 표시 |
|------|------|
| `isLoading \|\| isError` | fixed 로딩 오버레이 |
| `state.teams == null` | `<NoDataRive>` |
