# Streak Quiz Window (StreakWindowQuiz)

## 개요

라이브 경기 중 WebSocket으로 퀴즈 이벤트가 수신되면 채팅 화면 위에 오버레이로 나타나는 Rive 퀴즈 창.  
사용자가 A/B 팀을 선택하고, 타이머 종료(Rive 내부 애니메이션 완료) 시 자동으로 선택값을 서버에 제출한다.

---

## ⚠️ Rive 파일

| 항목 | 값 |
|------|-----|
| CDN URL | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/streak-window-quiz.riv` |
| 아트보드 | `QuizWindow` |
| State Machine | `State Machine 1` |
| autoplay | true |
| autoBind | true |
| Layout | `Fit.Contain`, `Alignment.Center` |
| 폰트 | Pretendard (assetLoader로 런타임 주입) |

> 이벤트 창(`streak-event.md`)과 **같은 Rive 파일**을 공유하며 아트보드만 다르다.

---

## State Machine 인풋

| 인풋명 | 타입 | 역할 |
|--------|------|------|
| `start` | trigger | 마운트 후 즉시 fire → 퀴즈 애니메이션 시작 |

---

## Rive 이벤트 (수신)

| 이벤트명 | 시점 | 처리 |
|---------|------|------|
| `Event ALLCLOSEDONE` | 타이머 종료 + 닫기 애니메이션 완료 | 선택된 팀 ID를 읽어 API 제출 → `onClose()` 호출 |

중복 처리 방지: `closeHandledRef`(ref)로 이벤트가 1회만 실행되도록 보장.

---

## 데이터 바인딩 (뷰모델 인스턴스)

`autoBind: true` → `rive.viewModelInstance`를 통해 접근.  
바인딩은 `requestAnimationFrame` 안에서 실행한다.

| 뷰모델 경로 | 타입 | 값 | 훅 |
|------------|------|----|----|
| `widthSize` | number | 컨테이너 너비(px), 반응형 보정 포함 | `useViewModelInstanceNumber` |
| `setTime` | number | `60` (퀴즈 제한시간 초) | `useViewModelInstanceNumber` |
| `streakRecord` | string | `payload.current_streak_display` | `useViewModelInstanceString` |
| `quizText` | string | `"Which team will win the game?"` | `useViewModelInstanceString` |
| `quizButtonA/name` | string | 팀A 약칭 또는 팀명 | `useViewModelInstanceString` |
| `quizButtonA/buttonSize` | number | `80` | `useViewModelInstanceNumber` |
| `quizButtonA/dbSelected` | boolean | 초기 선택 여부 (기본 `false`) | `useViewModelInstanceBoolean` |
| `quizButtonB/name` | string | 팀B 약칭 또는 팀명 | `useViewModelInstanceString` |
| `quizButtonB/buttonSize` | number | `80` | `useViewModelInstanceNumber` |
| `quizButtonB/dbSelected` | boolean | 초기 선택 여부 (기본 `false`) | `useViewModelInstanceBoolean` |

### 선택 상태 주입 규칙

- 초기 진입 시(`didApplyInitialSelectionRef`가 `false`일 때) **1회만** `dbSelected` 값을 주입한다.
- 이후 Rive 내부 상태(유저 클릭)가 선택을 관리하므로 다시 덮어쓰지 않는다.
- `match_id`, `game_id`, `opened_at`이 바뀌면 ref를 리셋해 새 퀴즈에서 다시 초기값 주입.

### 반응형 widthSize 계산

| 조건 | widthSize |
|------|-----------|
| `containerWidth > 360` | `containerWidth` |
| `containerWidth ≤ 360` | `containerWidth + max(0, 456 - containerHeight)` |
| 측정 전(0) | `360` (fallback) |

`ResizeObserver`로 컨테이너 크기를 감지해 실시간 업데이트.

---

## 답안 제출

타이머 만료 → `Event ALLCLOSEDONE` → 뷰모델에서 선택값 읽기 → API 제출.

```
POST /quiz/answer
body: { match_id, selected_team_id, game_id }
```

- `selected_team_id`: `rive.viewModelInstance.boolean('quizButtonA/dbSelected').value`가 true면 `teams[0].team_id`, `quizButtonB/dbSelected`가 true면 `teams[1].team_id`
- 선택값이 없으면(`selected_team_id === ''`) 제출하지 않는다.
- 제출 중복 방지: `submittedRef`로 1회만 실행.
- 에러 시 에러 모달 표시.

---

## 데이터 흐름

```
WebSocket (CMD: 50 = LIVE_QUIZ_START)
  → handleSocketMessage
    → liveQuizStore.setLiveQuiz(payload)
      → ChatPage: useLiveQuizStore로 구독
        → StreakWindowRive에 quizPayload prop 전달
```

---

## Props

| prop | 타입 | 설명 |
|------|------|------|
| `quizPayload` | `LiveQuizPayload` | WebSocket 수신 퀴즈 데이터 |
| `displayWidth` | `number` (optional) | 사용 안 함 (ResizeObserver로 대체) |
| `onClose` | `() => void` | Rive 닫기 이벤트 수신 시 호출 |

---

## LiveQuizPayload 타입

| 필드 | 타입 | 설명 |
|------|------|------|
| `cmd` | `50` | WebSocket 커맨드 번호 |
| `event` | `'live_quiz_started'` | 이벤트 타입 |
| `current_streak_display` | string | 현재 연승 표시 문자열 |
| `match_id` | string | 경기 ID |
| `game_id` | string | 게임 ID |
| `live_quiz_open` | boolean | 퀴즈 오픈 여부 |
| `opened_at` | number | 오픈 타임스탬프 |
| `matchInfo.teams[0]` | `LiveQuizTeam` | 팀A 정보 (`initial`, `team_name`, `team_id`) |
| `matchInfo.teams[1]` | `LiveQuizTeam` | 팀B 정보 |

---

## 컴포넌트 크기

컨테이너: `h-[28.5rem]`, `w-full` (전체 너비)  
`RiveComponent`: `h-full w-full`
