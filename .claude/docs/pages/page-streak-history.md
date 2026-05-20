# 페이지 스펙: 내 픽 히스토리 `/streak/history`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/streak/history` |
| 컴포넌트 | `StreakHistoryPage` |
| 파일 | `src/pages/streak/history/index.tsx` |
| 인증 필요 | O |
| 진입 방법 | ProfileMenu → "내 픽 히스토리" |
| 특이사항 | 캘린더 + 퀴즈 픽 목록, 진입 시 최하단 자동 스크롤 |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## 레이아웃 구조

```
<PageScrollLayout ref={setScrollRoot}>
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │
  │   left:   [CloseIcon → MAIN]                    │
  │   center: [CalendarIcon fill="#2D39B4"]         │
  │   right:  [InfoIcon → 퀴즈 안내 모달]            │
  ├─────────────────────────────────────────────────┤
  │ <div className="pb-[max(2rem,                   │
  │   calc(env(safe-area-inset-bottom,0px)+2rem))]  │
  │   pl-4 pr-2 flex flex-col">                     │
  │                                                 │
  │   [스트릭 상태 카드]                              │
  │   <StreakStatusFireRive                          │
  │     currentStreak={monthlyStreak.current_win_streak}│
  │     longestStreak={monthlyStreak.longest_win_streak} │
  │   />                                            │
  │                                                 │
  │   [스트릭 캘린더]                                │
  │   <StreakCalendarWithData                        │
  │     onSelectDay={handleSelectDay}               │
  │     onMonthChange={handleMonthChange}           │
  │     selectedDay={selectedDay}                   │
  │     sendTodayParam={false}                      │
  │   />                                            │
  │                                                 │
  │   [내 픽 목록]                                   │
  │   <MyPicksSection                               │
  │     displayDate={displayDate}                   │
  │     isBeforeToday={isBeforeToday}               │
  │   >                                             │
  │     [로딩]: <MyPicksSkeleton>                   │
  │     [빈 결과/에러]: <MyPicksEmpty>              │
  │     [목록]:                                     │
  │       <MyPicksList                              │
  │         picks={picks}                           │
  │         localPicks={localPicks}                 │
  │         cancelledMatchIds={cancelledMatchIds}   │
  │         submitAnswer={submitAnswer}             │
  │         cancelAnswer={cancelAnswer}             │
  │         loadMoreRef={loadMoreRef}               │
  │         ...                                     │
  │       />                                        │
  │   </MyPicksSection>                             │
  └─────────────────────────────────────────────────┘
```

---

## 상태 관리

### 로컬 State
| 상태 | 타입 | 초기값 | 설명 |
|------|------|--------|------|
| `viewingMonth` | `Dayjs` | `dayjs()` (오늘) | 현재 보는 월 |
| `selectedDay` | `number \| null` | `dayjs().date()` | 선택된 날짜 (일) |
| `localPicks` | `Record<string, string \| null>` | `{}` | 낙관적 업데이트용 로컬 선택 |
| `cancelledMatchIds` | `Set<string>` | `new Set()` | 취소 처리된 match_id |
| `scrollRoot` | `HTMLDivElement \| null` | `null` | 스크롤 컨테이너 |

### TanStack Query
```ts
// 스트릭 캘린더
useQuizCalendar({ year, month, enabled: true })
→ { monthlyStreak: QuizCalendarMonthlyStreak, calendarItems, ... }
// GET /quiz/calendar?year={year}&month={month}

// 내 픽 목록 (무한 스크롤)
useQuizMyPicksInfinite({
  periodValue: selectedDay !== null ? selectedDate : undefined,
  periodMonth: selectedDay === null ? periodMonth : undefined,
  enabled: true,
})
→ { picks: QuizMyPickItem[], isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage }
// GET /quiz/my-picks?limit=20&offset=0&period_value={...}&period_month={...}

// 퀴즈 답변 제출/취소
useQuizAnswerMutation()
useQuizAnswerCancelMutation()
```

---

## API 호출

### `GET /quiz/calendar`
```ts
params: { year, month }
// Response data.monthly_streak: { current_win_streak, longest_win_streak, current_lose_streak, ... }
// Response data.calendar: QuizCalendarItem[]
```

### `GET /quiz/my-picks`
```ts
params: {
  limit: 20,
  offset: 0,                         // 무한 스크롤 offset
  period_value?: 'YYYY-MM-DD',       // 특정 날짜 선택 시
  period_month?: 'YYYY-MM',          // 월 전체 보기 시
}
```

### `PUT /quiz/answer` (제출)
```ts
{ match_id, selected_team_id, game_id? }
```

### `PUT /quiz/answer` (취소)
```ts
{ match_id, action: 'cancel' }
```

---

## StreakStatusFireRive 컴포넌트

```
[불꽃 Rive 애니메이션] (연승 중일 때 점화)
[현재 연승 수]
[최장 연승 수]

className: 상단 배치
```

---

## StreakCalendarWithData

```
<StreakCalendarWithData
  onSelectDay={setSelectedDay}
  onMonthChange={(year, month) => {
    setViewingMonth(dayjs().year(year).month(month - 1))
    setSelectedDay(1)
  }}
  selectedDay={selectedDay}
  sendTodayParam={false}
/>
```

내부: `GET /quiz/calendar` 호출 → `<StreakCalendar>` 렌더

### 달력 셀 클릭
```ts
onSelectDay(day: number | null)
// selectedDay 변경 → picks 재조회
// period_value = "YYYY-MM-DD"
```

---

## MyPicksSection 헤더

```
<div className="flex items-center justify-between py-3">
  <Typography variant="description2">
    {displayDate}   // e.g. "15 May 2024"
  </Typography>
  [isBeforeToday: 과거 날짜 표시 여부에 따른 아이콘/뱃지]
</div>
```

---

## MyPicksList / MyPicksCardItem

```
{picks.map(pick =>
  <MyPicksCardItem
    pick={pick}
    localPick={localPicks[cardKey]}
    isCancelled={cancelledMatchIds.has(pick.match_id)}
    onLocalPick={(cardKey, teamId) => setLocalPicks(...)}
    onAddCancelledMatchId={...}
    onRemoveCancelledMatchId={...}
    submitAnswer={submitAnswer}
    cancelAnswer={cancelAnswer}
    isPending={isPending}
    submitVariables={variables}
  />
)}
<div ref={loadMoreRef} />
[isFetchingNextPage: <LoadingRive w=80 h=80>]
```

---

## MyPicksCardItem — MatchPickCard 렌더

```
<MatchPickCard
  matchId={pick.match_id}
  teams={pick.teams}           // [{ team_id, team_initial, team_logo }]
  scores={pick.scores}         // [leftScore, rightScore]
  selectedTeamId={resolvedSelectedTeamId}  // localPick 우선, 없으면 서버값
  isCorrect={pick.is_correct}
  status={mapStatus(pick.status)}
  beginDate={pick.begin_date}
  verified={pick.verified}
/>
```

### MatchResultLabel 표시 규칙
| 조건 | 라벨 |
|------|------|
| `verified && is_correct` | ✅ 정답 (초록) |
| `verified && !is_correct` | ❌ 오답 (빨강) |
| `!verified && status === 'running'` | 🔴 LIVE |
| `!verified && status === 'upcoming'` | 예정 |
| `status === 'completed' && !verified` | Finished |
| `selectedTeamId === null` | 미선택 |

---

## 픽 선택 / 취소 인터랙션

```ts
// 선택:
setLocalPicks(prev => ({ ...prev, [cardKey]: teamId }))
await submitAnswer({ match_id, selected_team_id: teamId, game_id? })

// 취소:
addCancelledMatchId(match_id)
setLocalPicks(prev => ({ ...prev, [cardKey]: null }))
await cancelAnswer({ match_id, action: 'cancel' })
removeCancelledMatchId(match_id)
```

---

## 진입 시 자동 스크롤 (최하단)

```ts
// sessionStorage로 탭 내 1회만 실행
useEffect(() => {
  if (handleHasAutoScrolled()) return
  if (!scrollRoot || isLoading || !monthlyStreak || picks.length <= 0) return

  const currentWinStreak = monthlyStreak.current_win_streak ?? 0
  if (currentWinStreak <= 0) {
    // 즉시 스크롤
    scrollRoot.scrollTo({ top: scrollRoot.scrollHeight, behavior: 'smooth' })
  } else {
    // 3.5초 후 스크롤 (StreakStatusFireRive 애니메이션 후)
    setTimeout(() => scrollRoot.scrollTo({ top: scrollRoot.scrollHeight, behavior: 'smooth' }), 3500)
  }
  sessionStorage.setItem(STREAK_ENTRY_AUTO_SCROLL_SESSION_KEY, '1')
}, [isError, isLoading, monthlyStreak, picks.length, scrollRoot])
```

---

## 퀴즈 안내 모달 (InfoIcon)

```ts
showModal('info', null,
  `You can only register for one quiz. You can
participate in the next quiz after the results
of the current one are announced.

All streaks reset monthly at UTC.`
)
```

---

## 무한 스크롤

```ts
useIntersectionObserver({
  target: loadMoreRef,
  onIntersect: handleLoadMore,
  enabled: !isLoading && hasNextPage && !isFetchingNextPage,
  root: scrollRoot,
  rootMargin: '200px 0px',
})
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.MAIN` | 헤더 CloseIcon |

---

## 빈 상태

| 상황 | 표시 |
|------|------|
| `isLoading` | `<MyPicksSkeleton>` |
| 오류 또는 picks 없음 | `<MyPicksEmpty>` |
| 일부 pick의 teams가 비어있음 | `<MyPicksEmpty>` |
