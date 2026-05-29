# Schedule 페이지

## 구성 페이지 overview

| 페이지 | 라우트 | 역할 |
|--------|--------|------|
| SchedulePage | `SCHEDULE` | 경기 목록 (양방향 무한 스크롤) |
| ScheduleDetailPage | `SCHEDULE_DETAIL` | 경기 상세 (BOOST / EVENT 탭) |
| LeagueFilterPage | `LEAGUE_FILTER` | 리그 필터 설정 |

---

## 1. SchedulePage — 경기 목록

### 레이아웃

```
┌─────────────────────────────────────┐
│  AppHeader                          │  ← 닫기(→메인) / 리그 필터(→LEAGUE_FILTER)
├─────────────────────────────────────┤
│  (로딩/에러) LoadingRive             │  ← loading-rive.md 참고
│  (데이터 없음) NoScheduleRive        │  ← ⚠️ Rive 사용 (아래 참고)
│  (데이터 있음)                       │
│    sentinel (상단, forward 트리거)   │
│    LoadingRive (forward 로딩 중)     │
│    날짜 라벨 + MatchScoreCard × N    │
│    LoadingRive (backward 로딩 중)    │
│    sentinel (하단, backward 트리거)  │
└─────────────────────────────────────┘
│  Today 플로팅 버튼 (조건부)          │  ← 고정, targetDate 라벨이 뷰 밖일 때만
```

### ⚠️ Rive: NoScheduleRive

경기 데이터가 없을 때 화면 중앙에 표시.

| 항목 | 값 |
|------|-----|
| Rive 파일 | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/no-schedule.riv` |
| 아트보드 | `noSchedule1`, `noSchedule2`, `noSchedule3` 중 **랜덤** 선택 |
| State Machine | `State Machine 1` |
| autoplay | true |
| 데이터 바인딩 | 없음 |

### 양방향 무한 스크롤

- 상단 sentinel → `fetchMoreForward()` (이전 경기 prepend)
- 하단 sentinel → `fetchMoreBackward()` (다음 경기 append)
- `rootMargin: '100px'`
- sentinel이 뷰에서 사라지면 중복 fetch 방지 플래그 해제

**Forward(prepend) 스크롤 점프 방지:**  
prepend 전 `scrollHeight`와 `scrollTop`을 저장 → prepend 후 `scrollTop += 새 scrollHeight - 이전 scrollHeight`.  
이미지 로딩 등으로 height가 늦게 변할 수 있어 최대 10 rAF 동안 추적해 누적 보정.

### Today 플로팅 버튼

| 조건 | 동작 |
|------|------|
| `targetDatePart`가 있고 해당 날짜 라벨이 뷰 밖 | 버튼 표시 |
| 버튼 클릭 | `targetDatePart` 라벨로 smooth scroll |
| 라벨이 뷰포트 안 | 버튼 숨김 |

**targetDatePart 결정:**
1. 오늘 날짜 경기가 있으면 → 오늘
2. 없으면 → 완료(completed) 경기 중 가장 최근 날짜

**초기 자동 스크롤:**  
최초 로드 후 `targetDatePart` 라벨을 `block: 'center'`로 1회 자동 스크롤. 라벨 ref가 commit 이후에 붙는 경우 최대 10 rAF 재시도.

### 날짜 라벨

- 이전 경기와 날짜(YYYY-MM-DD)가 다를 때만 날짜 라벨 표시 (`YYYY.MM.DD` 포맷)
- `data-schedule-date-part` 속성 + ref Map에 등록 → Today 버튼 / 자동 스크롤에서 참조

### MatchScoreCard 표시 데이터

| 필드 | 출처 |
|------|------|
| `gameLabel` | `"LOL"` |
| `leagueLabel` | `match.leagues.league_name` |
| `leftTeamName` | `teams[0].initial` |
| `leftTeamLogo` | `teams[0].image_url` |
| `rightTeamName` | `teams[1].initial` |
| `rightTeamLogo` | `teams[1].image_url` |
| `leftScore` | `teams[0].score` |
| `rightScore` | `teams[1].score` |
| `status` | `mapSeriesStatusToMatchStatus(match.status)` |
| `beginDate` | `match.begin_date` |

클릭 시 `SCHEDULE_DETAIL` 페이지로 이동하며 아래 state를 전달:  
`{ match_id, status, teams, leagues, series, begin_date, donationInfo }`

---

## 2. ScheduleDetailPage — 경기 상세

### 레이아웃

```
┌─────────────────────────────────────┐
│  AppHeader                          │  ← 닫기(→SCHEDULE)
├─────────────────────────────────────┤
│  MatchScoreTransparentCard          │  ← 경기 정보 (팀, 스코어, 상태, 날짜)
├─────────────────────────────────────┤
│  TabNav: [ BOOST | EVENT ]          │
├─────────────────────────────────────┤
│  BOOST 탭 패널                       │  ← ScheduleDetailBoostPage
│  EVENT 탭 패널                       │  ← ScheduleDetailEventPage
└─────────────────────────────────────┘
│  Boost 플로팅 버튼 (우하단 고정)     │
```

### Boost 플로팅 버튼

| 경기 상태 | 이미지 | 이동 페이지 |
|----------|--------|-----------|
| `completed` | `PageSideBottomBtn_Boost_wall.png` | `BOOST_WALL` |
| 그 외 | `PageSideBottomBtn_Boost.png` | `BOOST_SELECT` |

팀이 없을 때(`teams == null || length === 0`) 버튼 미표시.

**BOOST_WALL 이동 시 state:**
`{ match_id, teams, leagues, series, begin_date, _scheduleDetailState }`  
(`_scheduleDetailState`는 boost-wall에서 뒤로가기 시 상세 페이지 복원용)

**BOOST_SELECT 이동 시 state:**
`{ match_id, teams, donationInfo, status, leagues, begin_date }`

### EVENT 탭 — not_started 상태

경기가 아직 시작 전(`status === 'not_started'`)이면 `NoDataRive` 표시.

---

## 3. ScheduleDetailBoostPage — BOOST 탭

### 레이아웃

```
┌─ Energy Boost 섹션 ─────────────────┐
│  좌팀 컬럼         우팀 컬럼         │  ← 선수/팀별 에너지 합계, 2열
├─ Boosting List ─────────────────────┤
│  SectionHeader + 총 에너지 합계      │
│  (로딩) LoadingRive                 │  ← loading-rive.md 참고
│  (데이터) BoostHistoryMatchCard × N │
│  (없음) NoBoostRive                 │  ← boost-list.md 참고
└─────────────────────────────────────┘
```

### Energy Boost 섹션

- `donationInfo` 배열을 `teams[0].team_id` 기준으로 좌/우 분리
- 각 컬럼: `target_name` + 에너지 아이콘 + `totAmout` 표시 (2열 grid)
- `totAmout === 0`인 항목은 표시하지 않음

### Boosting List

- `BoostHistoryMatchCard`에 `leftTeamId` 전달 → 카드 상단 accent 바 색상 결정 (boost-list.md 참고)
- 무한 스크롤: 첫 로드 300ms 후 Observer 활성화 (중복 트리거 방지)
- 페이지당 20개, `rown` 커서 방식

### API

```
POST /donation/getDonationHistoryByMatch
body: { next_rown, per_page, matchId }
```

---

## 4. ScheduleDetailEventPage — EVENT 탭

### 레이아웃

```
┌─────────────────────────────────────┐
│  (로딩) LoadingRive                 │
│  (데이터) GameEventCard × N         │
│    sentinel + LoadingRive           │  ← 다음 페이지 로딩
│  (없음) NoDataRive                  │  ← ⚠️ Rive 사용 (아래 참고)
└─────────────────────────────────────┘
```

### ⚠️ Rive: NoDataRive

| 항목 | 값 |
|------|-----|
| Rive 파일 | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/no-data.riv` |
| 아트보드 | `NoDataByError` |
| State Machine | `State Machine 1` |
| autoplay | true |
| 데이터 바인딩 | 없음 |

"No data" 텍스트와 함께 표시.

### GameEventCard 표시 데이터

| 필드 | 출처 |
|------|------|
| `gameNumber` | `event.game_number` |
| `timeStamp` | `event.created_date` |
| `teamInfo` | `event.items` (team_id, team_name, llm_msg, expression, actions) |

`event.items`가 비어 있는 항목은 렌더링 생략.

### 탭 활성화 제어

- `isActive` prop: EVENT 탭이 활성화된 경우에만 `enabled: true`로 데이터 fetch
- 탭 전환 시(`isActive` 변경) `refetch()` 호출로 최신 데이터 보장

### API

```
GET /event
params: { match_id, page, per_page(20) }
```

응답: `{ events, page, per_page, total }` (page 기반 페이지네이션)

---

## 5. LeagueFilterPage — 리그 필터

### 레이아웃

```
┌─────────────────────────────────────┐
│  AppHeader                          │  ← 뒤로가기(→SCHEDULE + query invalidate)
├─────────────────────────────────────┤
│  SectionHeader "League of Legends"  │
│  LeagueFilterToggle × N            │  ← 리그별 토글
└─────────────────────────────────────┘
```

### 리그 필터 상태 관리 (localStorage)

| 키 | 내용 |
|----|------|
| `LoL_leagueS` | 선택된 리그 ID 목록 (`,` 구분) |
| `LoL_leagueNS` | 비선택된 리그 ID 목록 (`,` 구분) |

토글 ON → `leagueS`에 추가, `leagueNS`에서 제거  
토글 OFF → `leagueNS`에 추가, `leagueS`에서 제거

초기 체크 상태: `leagueNS`에 없고 `leagueS`에 있으면 체크.

### 뒤로가기 동작

`queryClient.invalidateQueries({ queryKey: SCHEDULE_MATCHES_QUERY_KEY + 'initial' })`  
→ 필터 변경이 경기 목록에 즉시 반영되도록 캐시 무효화 후 스케줄 페이지로 이동.

### API

```
POST /schedules/getLeaguesForLoL
```

응답: `LeagueForLoLDto[]` — `{ league_id, name, slug, image_url, ... }`

---

## API 전체 목록

| 메서드 | 경로 | 역할 |
|--------|------|------|
| POST | `/schedules/getAllMatchesForLoL` | 경기 목록 (양방향 페이지네이션) |
| POST | `/schedules/getLeaguesForLoL` | 리그 목록 |
| GET | `/event` | 경기 이벤트 목록 |
| POST | `/donation/getDonationHistoryByMatch` | 경기별 부스트 피드 |

### getAllMatchesForLoL params

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `direction` | `'standard'` \| `'forward'` \| `'backward'` | 초기/이전/다음 |
| `league_id` | string | localStorage `LoL_leagueS` 값. 기본: `LoL_OF_98767991310872058` |
| `next_rown` | number | forward 시 현재 최상단 rown, backward 시 forward에서 받은 rown |
| `prev_rown` | number | backward 시 현재 최하단 rown, forward 시 backward에서 받은 rown |
| `per_page` | number | 20 |

---

## ScheduleMatchDto 타입

| 필드 | 타입 | 설명 |
|------|------|------|
| `match_id` | string | |
| `begin_date` | string \| null | |
| `end_date` | string \| null | |
| `status` | string | `'not_started'` \| `'running'` \| `'completed'` 등 |
| `name` | string | |
| `rown` | number | 커서 번호 |
| `leagues` | `ScheduleMatchLeagueDto` | `{ league_id, league_name, image_url }` |
| `teams` | `ScheduleMatchTeamDto[]` | `{ team_id, team_name, initial, image_url, score, boostYN }` |
| `donationInfo` | `ScheduleMatchDonationInfoDto[]` | `{ target_id, target_name, target_type, team_id, totAmout, image_url, lol_role }` |
| `series` | object | `{ serie_id, serie_name, begin_date, end_date }` |

### status 매핑 (`mapSeriesStatusToMatchStatus`)

| API status | UI status |
|-----------|----------|
| `completed` | `finished` |
| `running` | `running` |
| 그 외 | `not_started` |
