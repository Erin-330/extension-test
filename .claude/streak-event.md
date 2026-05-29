# Streak Event Window (StreakWindowEvent)

## 개요

라이브 경기 중 WebSocket으로 LLM 이벤트가 수신되면 채팅 화면 위에 오버레이로 짧게 표시되는 Rive 이벤트 창.  
팔로우한 팀의 LLM 메시지를 우선 표시하고, 10초 카운트다운 후 자동으로 닫힌다.

---

## ⚠️ Rive 파일

| 항목 | 값 |
|------|-----|
| CDN URL | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/streak-window-quiz.riv` |
| 아트보드 | `EventWindow` |
| State Machine | `State Machine 1` |
| autoplay | true |
| autoBind | true |
| Layout | `Fit.Cover`, `Alignment.Center` |
| 폰트 | Pretendard (assetLoader로 런타임 주입) |

> 퀴즈 창(`streak-quiz.md`)과 **같은 Rive 파일**을 공유하며 아트보드만 다르다.

---

## State Machine 인풋

| 인풋명 | 타입 | 역할 |
|--------|------|------|
| `start` | trigger | 데이터 바인딩 후 fire → 이벤트 창 애니메이션 시작 |

`start`는 `viewModelInstance`와 `startInput`이 모두 준비된 후에 fire한다.  
같은 이벤트가 반복될 때(`resetToken` 변경 시) `setTime(0)` → rAF → `setTime(10)` + `start.fire()` 순서로 강제 재시작한다.

---

## Rive 이벤트 (수신)

| 이벤트명 | 시점 | 처리 |
|---------|------|------|
| `Event ALLCLOSEDONE` | 카운트다운 완료 + 닫기 애니메이션 완료 | `onClose()` 호출 |

중복 처리 방지: `closeHandledRef`(ref)로 1회만 실행.

---

## 데이터 바인딩 (뷰모델 인스턴스)

`autoBind: true` → `rive.viewModelInstance`를 통해 접근.  
바인딩은 즉시 1회 + `requestAnimationFrame` 후 1회, 총 2회 적용해 Rive가 값을 확실히 반영하도록 한다.

| 뷰모델 경로 | 타입 | 값 | 훅 |
|------------|------|----|----|
| `eventText` | string | 팀 LLM 메시지 | `useViewModelInstanceString` |
| `eventTitle` | string | 이벤트 제목 (기본 `'-'`) | `useViewModelInstanceString` |
| `teamNameA` | string | 팀1 이름 | `useViewModelInstanceString` |
| `teamNameB` | string | 팀2 이름 | `useViewModelInstanceString` |
| `gameRound` | string | 게임 라운드 번호 | `useViewModelInstanceString` |
| `time` | string | 시간 표시 레이블 | `useViewModelInstanceString` |
| `SideBorderColor` | color | `0xff0000ff` (ARGB) | `useViewModelInstanceColor` |
| `width` | number | 컨테이너 너비(px) | `useViewModelInstanceNumber` |
| `widthSize` | number | 컨테이너 너비(px), 반응형 보정 포함 | `useViewModelInstanceNumber` |
| `setTime` | number | `10` (이벤트 창 표시 시간) | `useViewModelInstanceNumber` |

### 반응형 widthSize 계산

| 조건 | widthSize |
|------|-----------|
| `containerWidth > 360` | `containerWidth` |
| `containerWidth ≤ 360` | `containerWidth + max(0, 173 - containerHeight)` |
| 측정 전(0) | `360` (fallback) |

`ResizeObserver`로 컨테이너 크기를 감지해 실시간 업데이트.

---

## LLM 메시지 팀 선택 로직

`eventText`에 넣을 팀 메시지를 결정하는 우선순위:

1. localStorage의 `followTeamTargetIds` 또는 `followTeamTargets` 키에서 팔로우한 팀 ID 목록을 읽는다.
2. `team1_llm.team_id` 또는 `team2_llm.team_id`가 팔로우 목록에 있으면 해당 팀의 `llm_msg`를 사용.
3. 매칭되는 팀이 없으면 `team_other_llm.llm_msg`를 사용.

구현 함수: `selectTeamLlmByFollowTargets(cleanData)` → `mapLlmEventCleanDataToBinding(cleanData)`

---

## 데이터 흐름

```
WebSocket (CMD: 60 = LIVE_EVENT_LLM)
  → handleSocketMessage / handleLiveEventLlmExpressionActions
    → liveEventStore.setLiveEvent(payload)
      → ChatPage: useLiveEventWindow 훅으로 구독
        → mapLlmEventCleanDataToBinding으로 바인딩 데이터 변환
          → EventWindowRive에 data + resetToken prop 전달
```

---

## Props

| prop | 타입 | 설명 |
|------|------|------|
| `data` | `EventWindowRiveDataInput` (optional) | 바인딩할 텍스트 데이터 |
| `resetToken` | `number` (optional) | 변경될 때마다 `start` trigger를 재fire (같은 이벤트 반복 수신 대응) |
| `displayWidth` | `number` (optional) | 사용 안 함 (ResizeObserver로 대체) |
| `onClose` | `() => void` | Rive 닫기 이벤트 수신 시 호출 |

---

## EventWindowRiveDataInput 타입

| 필드 | 타입 | 출처 |
|------|------|------|
| `eventText` | string | `selectTeamLlmByFollowTargets().llm_msg` |
| `eventTitle` | string | (현재 미사용, 기본 `'-'`) |
| `teamNameA` | string | `cleanData.team1_llm.team_name` |
| `teamNameB` | string | `cleanData.team2_llm.team_name` |
| `gameRound` | string | `cleanData.game_number` |
| `time` | string | 시간 레이블 |

---

## LlmEventCleanData 타입 (WebSocket 수신)

| 필드 | 타입 | 설명 |
|------|------|------|
| `match_id` | string | 경기 ID |
| `game_id` | string | 게임 ID |
| `game_number` | string | 라운드 번호 |
| `summary` | string | 이벤트 요약 |
| `team1_llm` | `LlmEventTeamBlock` | 팀1 LLM 블록 |
| `team2_llm` | `LlmEventTeamBlock` | 팀2 LLM 블록 |
| `team_other_llm` | `LlmEventTeamBlock` | 중립/기타 팀 LLM 블록 |

**LlmEventTeamBlock**:

| 필드 | 타입 |
|------|------|
| `team_id` | string |
| `team_name` | string |
| `llm_msg` | string |
| `expression` | string |
| `actions` | string |

---

## 컴포넌트 크기

컨테이너: `w-full`, `aspect-[360/173]` (고정 비율)  
`RiveComponent`: `h-full w-full`
