# 페이지 스펙: 경기 일정 목록 `/schedule`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/schedule` |
| 컴포넌트 | `SchedulePage` |
| 파일 | `src/pages/schedule/index.tsx` |
| 인증 필요 | O |
| 특이사항 | 양방향 무한 스크롤, 오늘 날짜 자동 스크롤, Today 플로팅 버튼 |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## 레이아웃 구조

```
<PageScrollLayout ref={scrollContainerRef}>            ← 스크롤 컨테이너
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │  ← fixed top
  │   left: [CloseIcon → MAIN]                      │
  │   right: [LeagueFilterIcon → LEAGUE_FILTER]     │
  ├─────────────────────────────────────────────────┤
  │                                                 │
  │  [로딩 중 / 에러]: <LoadingRive artboard="Loading">│
  │                                                 │
  │  [일정 없음]: <NoScheduleRive width=250 height=250>│
  │                                                 │
  │  [일정 있음]:                                   │
  │    <div ref={topSentinelRef} className="h-1 pt-4">│  ← forward 트리거
  │    [isFetchingForward: <LoadingRive w=80 h=80>]  │
  │                                                 │
  │    [날짜 그룹별]:                                │
  │      <Typography "YYYY.MM.DD" color="text50">   │  ← 날짜 바뀔 때만
  │      <MatchScoreCard onClick→SCHEDULE_DETAIL />  │
  │      ...                                        │
  │                                                 │
  │    [isFetchingBackward: <LoadingRive w=80 h=80>] │
  │    <div ref={bottomSentinelRef} className="h-1">│  ← backward 트리거
  │                                                 │
  ├─────────────────────────────────────────────────┤
  │ [Today 버튼: fixed bottom-6, right, conditional] │
  │   className="pointer-events-none fixed bottom-6  │
  │     left-0 right-0 z-[9999] w-full               │
  │     max-w-[500px] mx-auto px-3 flex justify-end" │
  │   <button className="pointer-events-auto          │
  │     bg-surface rounded-full px-5 py-2             │
  │     flex items-center gap-2 border-solid          │
  │     border-[#808080]                              │
  │     shadow-[0_0.325rem_0.35rem_0_rgba(0,0,0,0.08)]">│
  │     <TodayIcon className="w-6 h-6" />            │
  │     <Typography variant="description2" color="text50">Today│
  │   </button>                                     │
  └─────────────────────────────────────────────────┘

콘텐츠 영역: pl-4 pr-2 pb-8 flex flex-col gap-4 w-full max-w-[500px] mx-auto
```

---

## 상태 관리

### 로컬 State
| 상태 | 타입 | 초기값 | 설명 |
|------|------|--------|------|
| `isTargetDateLabelVisible` | `boolean` | `false` | Today 버튼 표시 여부 |

### Ref
| ref | 설명 |
|-----|------|
| `scrollContainerRef` | 스크롤 컨테이너 DOM |
| `topSentinelRef` | 상단 sentinel (forward 무한스크롤 트리거) |
| `bottomSentinelRef` | 하단 sentinel (backward 무한스크롤 트리거) |
| `dateLabelElsByDatePartRef` | `Map<string, HTMLElement>` 날짜 라벨 DOM |
| `hasScrolledToInitialRef` | 초기 스크롤 1회만 실행 여부 |
| `forwardPrependAdjustRef` | prepend 후 스크롤 위치 보정용 |

### TanStack Query (`useScheduleMatches`)
```ts
// features/schedule/model/hooks/useScheduleMatches.ts
{
  matches: ScheduleMatchDto[]
  isLoading: boolean
  isError: boolean
  fetchMoreForward: () => void    // direction: 'forward'
  fetchMoreBackward: () => void   // direction: 'backward'
  hasMoreForward: boolean
  hasMoreBackward: boolean
  isFetchingForward: boolean
  isFetchingBackward: boolean
}
```

---

## API 호출

### `POST /schedules/getAllMatchesForLoL`
```ts
// 초기 로드
{ direction: 'standard', league_id: localStorage['LoL_leagueS'] ?? 'LoL_OF_98767991310872058', next_rown: 0, per_page: 20, prev_rown: 0 }
// 위 스크롤 (이전 경기)
{ direction: 'forward', league_id, prev_rown: matches[0].rown, next_rown: 0, per_page: 20 }
// 아래 스크롤 (다음 경기)
{ direction: 'backward', league_id, next_rown: matches[last].rown, prev_rown: 0, per_page: 20 }
```

---

## 무한 스크롤 로직

### IntersectionObserver 설정
```ts
new IntersectionObserver(entries => {
  // topSentinel 보임 → fetchMoreForward() (한 번만, 사라지면 플래그 초기화)
  // bottomSentinel 보임 → fetchMoreBackward() (한 번만)
}, { root: scrollEl, rootMargin: '100px', threshold: 0 })
```

### Forward(위) prepend 후 스크롤 점프 방지
```ts
// prepend 전 scrollHeight, scrollTop 저장
// prepend 후 → scrollTop += (newScrollHeight - prevScrollHeight)
// RAF으로 최대 10회 안정화 감지
```

---

## 오늘/최신 날짜 자동 스크롤

```
초기 로드 완료 →
  오늘 날짜 경기 있으면 → today 라벨로 스크롤
  없으면 → 가장 최근 completed 경기 날짜로 스크롤
  → RAF retry 최대 10회 (라벨 ref commit 지연 대응)
```

## Today 버튼 표시 조건
```
targetDatePart !== null && !isTargetDateLabelVisible
```
- IntersectionObserver로 대상 날짜 라벨 가시성 감지
- 클릭 → `element.scrollIntoView({ behavior: 'smooth', block: 'center' })`

---

## MatchScoreCard props

```ts
{
  gameLabel: 'LOL',
  leagueLabel: match.leagues.league_name,
  leftTeamName: match.teams[0].initial,
  leftTeamLogo: match.teams[0].image_url,
  rightTeamName: match.teams[1].initial,
  rightTeamLogo: match.teams[1].image_url,
  leftScore: match.teams[0].score,
  rightScore: match.teams[1].score,
  status: mapSeriesStatusToMatchStatus(match.status),  // 'live'|'upcoming'|'finished'
  beginDate: match.begin_date ?? '',
  className: 'w-full',
  onClick: () => setPage(PAGES.SCHEDULE_DETAIL, { state: { match_id, status, teams, leagues, series, begin_date, donationInfo } }),
}
```

### Status 매핑
| match.status | 표시 |
|-------------|------|
| `'running'` | `'live'` (빨간 LIVE 배지) |
| `'completed'` | `'finished'` (점수 표시) |
| 그 외 | `'upcoming'` (노란 예정 배지) |

---

## 날짜 라벨

- 날짜가 바뀌는 첫 번째 경기 위에만 표시
- 형식: `YYYY.MM.DD` (ISO 슬래시 → 점으로 변환)
- `data-schedule-date-part="YYYY-MM-DD"` 속성 부착 (querySelector 폴백용)

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.MAIN` | 헤더 CloseIcon |
| `PAGES.LEAGUE_FILTER` | 헤더 LeagueFilterIcon |
| `PAGES.SCHEDULE_DETAIL` | MatchScoreCard 클릭 |

---

## 빈 상태 / 에러

| 상황 | 표시 |
|------|------|
| `isLoading \|\| isError` | `<LoadingRive artboard="Loading">` 중앙 |
| `matches.length === 0` | `<NoScheduleRive width=250 height=250>` 중앙 |
