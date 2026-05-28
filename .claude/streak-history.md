# Streak History 페이지

## 개요

사용자의 월별 스트릭 현황과 퀴즈 픽 이력을 한 화면에서 확인하는 페이지.  
상단 Rive 애니메이션으로 연승 상태를 시각화하고, 캘린더로 날짜를 선택해 해당 날짜의 픽 목록을 확인·제출·취소한다.

- **라우트**: `/streak/history`
- **접근**: 앱 내 바텀 탭 또는 스트릭 관련 진입점에서 열림

---

## 레이아웃 구조 (위→아래)

```
┌─────────────────────────────────────┐
│  AppHeader                          │  ← 닫기(←메인) / 캘린더 아이콘 / 정보 버튼
├─────────────────────────────────────┤
│  StreakStatusFireRive                │  ← 현재/최장 연승 Rive 애니메이션 (12-streak-status-fire-rive.md 참고)
├─────────────────────────────────────┤
│  StreakCalendarWithData              │  ← 월별 캘린더 (날짜 선택 / 월 이동)
├─────────────────────────────────────┤
│  MyPicksSection                     │  ← 선택 날짜 헤더 + 픽 목록
│    ├─ MyPicksSkeleton               │     로딩 중
│    ├─ MyPicksEmpty                  │     데이터 없음
│    └─ MyPicksList                   │     픽 카드 목록 (무한 스크롤)
│         └─ MyPicksCardItem × N      │     개별 픽 카드
└─────────────────────────────────────┘
```

---

## 1. AppHeader

| 위치 | 내용 | 동작 |
|------|------|------|
| 좌측 | 닫기(X) 아이콘 버튼 | 메인 페이지로 이동 |
| 중앙 | 캘린더 아이콘 | — |
| 우측 | 정보(i) 아이콘 버튼 | 퀴즈 규칙 안내 모달 표시 |

정보 모달 내용: 퀴즈는 1회만 등록 가능, 현재 퀴즈 결과 발표 후 다음 참여 가능, 스트릭은 매월 UTC 기준 초기화됨.

---

## 2. StreakStatusFireRive (상단 라이브 애니메이션)

> **반드시 `.claude/docs/12-streak-status-fire-rive.md`를 참고해서 구현한다.**

- Rive 파일: `https://erin-bucket-team.s3.us-east-1.amazonaws.com/streak-status-fire.riv`
- `useQuizCalendar` 훅의 `monthlyStreak` 응답에서 데이터를 주입한다.

| Rive 바인딩 경로 | 출처 필드 |
|----------------|----------|
| `currentStreak` | `monthlyStreak.current_win_streak` |
| `longestStreak` | `monthlyStreak.longest_win_streak` |

---

## 3. StreakCalendarWithData

`quiz-calendar` 피처 슬라이스에서 제공하는 컴포넌트.

| prop | 설명 |
|------|------|
| `onSelectDay` | 날짜 선택 시 호출 (day: number \| null) |
| `onMonthChange` | 월 이동 시 호출 (year: number, month: number) |
| `selectedDay` | 현재 선택된 날짜 (number \| null) |
| `sendTodayParam` | false — 오늘 날짜를 API 파라미터로 보내지 않음 |

내부 동작:
- `useQuizCalendar({ year, month, enabled })` 훅으로 캘린더 데이터 조회
- API 응답의 `calendar` 배열을 `getDayState` 함수로 변환해 각 날짜에 상태(스트릭, 활동, 비활동) 표시
- 로딩 중엔 스켈레톤 표시

---

## 4. MyPicksSection

선택된 날짜의 픽 목록 컨테이너.

### 헤더

| 조건 | 표시 내용 |
|------|----------|
| 오늘 이후 날짜 | "Join Streak" 텍스트 + 날짜 + "Predict" 안내 |
| 오늘 이전 날짜 | "My Picks" 텍스트 + 날짜 + 이력 안내 |

`isBeforeToday` 플래그로 구분.  
`displayDate`는 선택된 날짜를 `DD MMM YYYY` 형식으로 포맷.

### 상태별 콘텐츠

| 상태 | 렌더링 |
|------|--------|
| 로딩 중 | `MyPicksSkeleton` (3행 shimmer) |
| 에러 또는 팀 없는 픽 또는 빈 목록 | `MyPicksEmpty` (점선 컨테이너 + 안내 메시지) |
| 정상 | `MyPicksList` |

---

## 5. MyPicksList

무한 스크롤로 픽 카드를 나열.

- 각 항목: `MyPicksCardItem`
- 스크롤 끝에 sentinel div(`loadMoreRef`) 위치 → `IntersectionObserver`가 뷰포트 진입 감지 시 `fetchNextPage()` 호출
- 다음 페이지 로딩 중 하단에 스피너 표시
- `rootMargin: '200px 0px'` — 뷰포트보다 200px 앞에서 미리 로딩 트리거

---

## 6. MyPicksCardItem

개별 퀴즈 픽 카드.

### 상태 관리

| 상태 | 출처 |
|------|------|
| 선택된 팀 | 서버 `selected_team_id` 또는 `localPicks[cardKey]` |
| 취소된 픽 | `cancelledMatchIds` Set |

`localPicks`와 `cancelledMatchIds`는 페이지 최상위에서 관리하고 props로 내려온다.

### 카드 표시 데이터

| 필드 | 설명 |
|------|------|
| 두 팀 정보 | `teams[0]`, `teams[1]` — 팀 로고, 약칭 |
| 스코어 | `scores[0]`, `scores[1]` |
| 정답 여부 | `is_correct` |
| 진행 상태 | `status` 매핑 참고 |
| 결과 | `pass`, `is_correct` 조합으로 결과 결정 |

### status 매핑

| API 값 | 카드 표시 |
|--------|----------|
| `completed` | `finished` |
| `in_progress` | `running` |
| 그 외 | `not_started` |

### result 매핑

| 조건 | result |
|------|--------|
| `pass === true` | `pass` |
| `is_correct === true` | `win` |
| 그 외 | `lose` |

### 인터랙션

| 액션 | 처리 |
|------|------|
| 팀 선택 | `onLocalPick(cardKey, teamId)` → `submitAnswer` mutation |
| 픽 취소 | `onAddCancelledMatchId(matchId)` → `cancelAnswer` mutation |
| 취소 성공 | `onRemoveCancelledMatchId(matchId)`, `onLocalPick(cardKey, null)` |

`cardKey`: `${match_id}-${selected_team_id ?? 'none'}` 형태로 서버 상태 변경 시 카드 리셋 방지.

---

## 데이터 흐름

### 페이지 레벨 상태

| 상태 | 초기값 | 타입 | 역할 |
|------|--------|------|------|
| `viewingMonth` | 오늘 | `dayjs` | 캘린더에 표시 중인 월 |
| `selectedDay` | 오늘 날짜(number) | `number \| null` | 선택된 날짜 |
| `localPicks` | `{}` | `Record<cardKey, string \| null>` | 서버 응답 전 임시 팀 선택 상태 |
| `cancelledMatchIds` | `new Set()` | `Set<matchId>` | 취소된 match ID 목록 |

### API 파라미터 결정 로직

| 상황 | `periodValue` | `periodMonth` |
|------|--------------|--------------|
| 날짜 선택 시 | `YYYY-MM-DD` | undefined |
| 날짜 미선택 시 | undefined | `YYYY-MM` |
| 월 변경 시 | `YYYY-MM-01`로 초기화 | — |

---

## API 엔드포인트

### 1. 캘린더 조회

```
GET /quiz/calendar
params: year, month, today(YYYY-MM-DD)
```

응답:
- `calendar`: 날짜별 활동 상태 배열
- `monthly_streak`: `{ current_win_streak, longest_win_streak, ... }`

### 2. 퀴즈 픽 목록 조회 (무한 스크롤)

```
GET /quiz/my-picks
params: limit(20), offset, period_value(YYYY-MM-DD), period_month(YYYY-MM)
```

응답: `{ picks: QuizMyPickItem[], total }` (offset 기반 페이지네이션)

### 3. 픽 제출

```
POST /quiz/answer
body: { match_id, game_id, selected_team_id }
```

### 4. 픽 취소

```
DELETE /quiz/answer/:matchId
```

---

## 자동 스크롤 동작

페이지 진입 시 한 번만 동작 (sessionStorage 키 `streak-entry-auto-scroll`로 중복 방지).

| 조건 | 동작 |
|------|------|
| `current_win_streak <= 0` | 즉시 하단으로 스크롤 |
| `current_win_streak > 0` | 3500ms 딜레이 후 하단으로 스크롤 |
| 이미 스크롤 완료(세션 내) | 스크롤 생략 |
| 픽 없음 / 로딩 중 / 에러 | 스크롤 생략 |

---

## 타입 참조

### `QuizMyPickItem` (quiz-my-picks feature API)

| 필드 | 타입 | 설명 |
|------|------|------|
| `idx` | number | |
| `match_id` | string | |
| `game_id` | string \| null | |
| `begin_date` | string \| Date | 경기 시작 시간 |
| `selected_team_id` | string \| null | 선택한 팀 |
| `pass` | boolean | 패스 여부 |
| `teams` | `QuizMyPickTeam[]` | 두 팀 정보 |
| `scores` | `[number, number]` | 양팀 스코어 |
| `is_correct` | boolean | 정답 여부 |
| `status` | string | `completed` \| `in_progress` \| 기타 |
| `verified` | boolean | 결과 확정 여부 |

### `QuizMyPickTeam`

| 필드 | 타입 |
|------|------|
| `team_id` | string |
| `team_initial` | string |
| `team_logo` | string |


