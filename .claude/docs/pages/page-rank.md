# 페이지 스펙: 랭킹 `/rank`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/rank` |
| 컴포넌트 | `RankPage` |
| 파일 | `src/pages/rank/index.tsx` |
| 인증 필요 | O |
| 진입 방법 | ProfileMenu → "랭킹" |

## 피그마
**Figma:** https://www.figma.com/design/FR0ELVIB6XF3dHidbEqBdz/DesignSystem_REM-EDIT?node-id=212-31020&m=dev

---

## 레이아웃 구조

```
<div className="relative flex min-h-dvh w-full flex-col bg-background">
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │
  │   left:  [CloseIcon → onClose(PROFILE)]         │
  │   right: [InfoIcon → showModal(랭킹 기준 안내)]  │
  ├─────────────────────────────────────────────────┤
  │ <main className="flex h-dvh w-full flex-col     │
  │   overflow-hidden bg-background">               │
  │                                                 │
  │   [isMobileDevice: <div className="h-2" />]     │
  │                                                 │
  │   <div ref={scrollContainerRef}                 │
  │     className="relative z-0 flex h-dvh w-full   │
  │       flex-col overflow-y-auto overflow-x-hidden │
  │       pb-4 pl-4 pr-2 gap-4 box-border           │
  │       [scrollbar-gutter:stable]                 │
  │       pt-10(mobile) or pt-12(desktop)">         │
  │                                                 │
  │     [로딩 중]:                                   │
  │       <RankMonthPickerSkeleton>                 │
  │       <RankTop5SectionSkeleton>                 │
  │       <RankMyRankingSectionSkeleton>            │
  │       <RankGradeListSkeleton>                   │
  │                                                 │
  │     [완료]:                                      │
  │       <RankMonthPicker>                         │
  │       <RankTop5Section>                         │
  │       <RankMyRankingSection>                    │
  │       <RankGradeListSection>                    │
  │                                                 │
  └─────────────────────────────────────────────────┘

<RankDetailModal isOpen={선택된 유저 있음} onClose={...} entry={...} />
```

---

## 스켈레톤 컴포넌트

```tsx
// RankMonthPickerSkeleton
<div className="h-7 w-[6.6875rem] animate-pulse rounded-md bg-dsText-50/30" />

// RankTop5SectionSkeleton
<div className="w-full gap-2 rounded-lg bg-surface-alt p-1">
  <div className="h-7 w-full animate-pulse rounded bg-dsText-50/30" />
  <div className="mt-2 h-[17.5rem] w-full animate-pulse rounded-lg bg-dsText-50/30" />
</div>

// RankMyRankingSectionSkeleton
<div className="flex w-full flex-col gap-2 rounded-lg border border-scoreColor bg-white p-1">
  <div className="h-7 w-full animate-pulse rounded bg-dsText-50/30" />
  <div className="flex w-full justify-between">
    <div className="h-14 w-40 animate-pulse rounded-lg bg-dsText-50/30" />
    <div className="h-14 w-20 animate-pulse rounded-lg bg-dsText-50/30" />
  </div>
</div>
```

---

## useRankPage 훅

```ts
// features/rank/model/hooks/useRankPage.ts
const {
  periodValue,              // 현재 선택된 기간 값
  onPeriodChange,           // 월 변경 핸들러
  onClose,                  // 닫기 → PROFILE
  scrollContainerRef,       // 스크롤 컨테이너 ref setter
  selectedUserId,           // 상세 모달 대상 유저 ID
  selectedRankingEntry,     // 상세 모달 데이터
  onItemClick,              // 랭킹 아이템 클릭 → 모달 열기
  onCloseDetailModal,       // 모달 닫기
  top5Rankings,             // 상위 5명 데이터
  gradeSectionsRank6Plus,   // 6위~이후 등급별 그룹
  myRankingItem,            // 내 랭킹 데이터
  isPending,                // 로딩 상태
  isError,
  isFetchingNextPage,
}
```

---

## 상태 관리

### TanStack Query
```ts
// useMonthlyRanking(periodValue)
// GET /ranking/monthly?period_value={periodValue}&page=1&limit=50
// TQ 키: ['ranking', 'monthly', periodValue]

// useRankPageData()
// GET /ranking/monthly/available-periods
// TQ 키: ['ranking', 'available-periods']
```

---

## API 호출

### `GET /ranking/monthly`
```ts
params: { period_value, page, limit }
// Response data:
{
  period_value: string
  my_grade, my_gradeId, my_currentStreak, my_rank,
  my_userName, my_picture, my_userid,
  rankings: MonthlyRankingEntry[]
  total, page, limit, total_pages
}
```

### `GET /ranking/monthly/available-periods`
```ts
// Response data: { period_values: string[] }
// e.g. ["2024-01", "2024-02", "2024-03"]
```

---

## RankMonthPicker 컴포넌트

```
<select or 커스텀 드롭다운>
  {availablePeriods.map → <option value={period}>{formatPeriod(period)}</option>}
</select>

className="h-7 w-[6.6875rem]"
```

---

## RankTop5Section 컴포넌트

```
상위 5명 특별 표시 (포디움 형태)

[2위] [1위(중앙, 더 높게)] [3위]
[4위]                      [5위]

각 항목:
  [프로필 이미지 + 등급 테두리]
  [userName]
  [rank 배지]
  [현재 스트릭]
```

---

## RankMyRankingSection 컴포넌트

```
border border-scoreColor rounded-lg bg-white p-1

[헤더] "MY RANKING"
[내 랭킹 행]
  [rank] [프로필 이미지] [userName] [grade]
  [currentStreak] [longest_win_streak]
  [expected_reward (에너지)]
```

---

## RankGradeListSection 컴포넌트

```
{gradeSectionsRank6Plus.map(section =>
  <RankGradeSection gradeName={section.grade}>
    <StreakRankingGraphRive grade={section.grade} />
    <RankGradeList>
      {section.entries.map(entry =>
        <RankGradeListItem
          entry={entry}
          isSelected={entry.userid === selectedUserId}
          onClick={() => onItemClick(entry)}
        />
      )}
    </RankGradeList>
  </RankGradeSection>
)}
```

---

## RankDetailModal

```
[반투명 오버레이]
<div className="absolute bottom-0 rounded-t-2xl bg-white p-4 w-full">
  [프로필 이미지(크게)]
  [userName]
  [gradeName 배지]
  [현재 스트릭 / 최장 스트릭]
  [예상 보상 에너지]
  [닫기 버튼]
</div>
```

---

## 랭킹 기준 모달 (InfoIcon)

```ts
showModal('info', null,
  `This monthly leaderboard (UTC) updates
once per day at a fixed time.

If multiple users have the same Streak:

1. The user who reached the longest Streak
   first ranks higher.
2. If still tied, the user who started the
   Streak earlier ranks higher.
3. If still tied, the user who joined RORR
   earlier ranks higher.`
)
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.PROFILE` | 헤더 CloseIcon (onClose) |
