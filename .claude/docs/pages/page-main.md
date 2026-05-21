# 페이지 스펙: 메인 (채팅) `/`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/` |
| 컴포넌트 | `MainPage` → `ChatPage` |
| 파일 | `src/pages/main/index.tsx`, `src/features/chat/ui/ChatPage.tsx` |
| 인증 필요 | `isAuthValid()` 실패 시 `/login` |
| 특이사항 | WebSocket 초기화, AI 채팅, 라이브 퀴즈 창 |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## 레이아웃 구조

```
<div className="relative min-h-dvh">                 ← AppRouter 루트
  <ChatPage>
    ┌─────────────────────────────────────────┐
    │ <AppHeader>                             │  ← fixed top, h-14
    │   left: [프로필 아이콘 → /profile]       │
    │   center: [에너지 잔액 표시]             │
    │   right: [메일 아이콘(미읽음 뱃지) → /mail]│
    ├─────────────────────────────────────────┤
    │ [스크롤 영역: flex-1 overflow-y-auto]    │
    │   <ChatMessage /> × n                   │
    ├─────────────────────────────────────────┤
    │ [ScheduleQuizToast] (conditional)       │  ← 스케줄 퀴즈 배너
    │ [StreakWindowEvent]  (conditional)       │  ← LLM 이벤트
    │ [StreakWindowQuiz]   (conditional)       │  ← 라이브 퀴즈
    ├─────────────────────────────────────────┤
    │ <ChatInput>                             │  ← fixed bottom, 입력창
    └─────────────────────────────────────────┘
  </ChatPage>
  <RiveLoading overlayPosition="absolute" />         ← 페이지 전환 시 표시
</div>
```

---

## WebSocket 초기화 (`MainPage`)

```tsx
useEffect(() => {
  const userId = getUserIdFromToken()
  if (!userId) return

  const state = LoLSocket.getConnectionState()
  if (state !== 'connected' && state !== 'connecting') {
    LoLSocket.installSocket(
      getLolWsUrl(VITE_LOL_WS_BASE_URL, DEFAULT_CHANNEL_ID, 'web', userId)
    )
    LoLSocket.ConnectSocket((data) => handleSocketMessage(data))
  }
}, [user?.id])
```

**URL 패턴**: `{VITE_LOL_WS_BASE_URL}?channelId={channelId}&type=web&userId={userId}`

---

## 소켓 이벤트 처리 (`handleSocketMessage`)

| CMD | Zustand 스토어 업데이트 | UI |
|-----|----------------------|-----|
| 50 LIVE_QUIZ_START | `liveQuizStore.setLiveQuiz(payload)` | `StreakWindowQuiz` 표시 |
| 53 SCHEDULE_QUIZ_START | `scheduleQuizBannerStore` 업데이트 | `ScheduleQuizToast` 표시 |
| 60 LIVE_EVENT_LLM | `liveEventStore` 업데이트 | `StreakWindowEvent` 표시 |

---

## ChatInput 컴포넌트

```
┌─────────────────────────────────────────────┐
│ [설정 아이콘] [textarea 입력창] [전송 버튼]  │
└─────────────────────────────────────────────┘
```

- 설정 아이콘 → `ChatSettingsModal` (OpenAI API 키 입력)
- 전송: `chatService.sendMessage(text)` → OpenAI API
- 모델: `gpt-4o-mini`, `max_tokens: 1024`
- API 키: `VITE_OPENAI_API_KEY` 또는 모달 직접 입력 (localStorage 저장)

---

## ChatMessage 컴포넌트

```
[사용자 메시지]  → 우측 정렬, 배경: selected
[AI 응답]       → 좌측 정렬, 배경: surface, AI 아바타 표시
```

---

## StreakWindowQuiz (라이브 퀴즈)

```
┌──────────────────────────────────────────┐
│ 현재 스트릭: {current_streak_display}     │
│ {leagues.league_name}                    │
│                                          │
│ [팀A 로고] [팀A name]  [팀B 로고] [팀B name]│
│                                          │
│ [팀A 선택 버튼]      [팀B 선택 버튼]       │
│                                          │
│            [닫기 버튼]                   │
└──────────────────────────────────────────┘
```

**이벤트**:
- 팀 선택 → `quizAnswerApi.submitAnswer({ match_id, selected_team_id, game_id })`
- 취소 → `quizAnswerApi.cancelAnswer({ match_id, action: 'cancel' })`
- 닫기 → `liveQuizStore.clearLiveQuiz()`

---

## StreakWindowEvent (LLM 이벤트)

```
┌──────────────────────────────────────────┐
│ [게임 이벤트 요약 텍스트]                 │
│                                          │
│ [팀1 LLM 메시지]  [팀2 LLM 메시지]        │
└──────────────────────────────────────────┘
```

---

## ScheduleQuizToast

- 화면 하단 배너
- 탭 → `setPage(PAGES.STREAK_HISTORY)` or 해당 매치 상세

---

## 상태 관리

### Zustand
| 스토어 | 상태 | 설명 |
|--------|------|------|
| `liveQuizStore` | `payload: LiveQuizPayload \| null` | 라이브 퀴즈 데이터 |
| `liveEventStore` | LLM 이벤트 데이터 | 이벤트 창 표시 여부 |
| `scheduleQuizBannerStore` | 배너 표시 여부 + matchInfo | 스케줄 퀴즈 배너 |
| `transitionStore` | `transitioningTo`, `submitRiveVisible` | 페이지 전환 오버레이 |

### 로컬 State
| 상태 | 타입 | 설명 |
|------|------|------|
| `chatMessages` | `Message[]` | 채팅 메시지 배열 |
| `inputText` | `string` | 입력창 값 |
| `isAiLoading` | `boolean` | AI 응답 대기 중 |

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `/profile` | 헤더 프로필 아이콘 |
| `/mail` | 헤더 메일 아이콘 |
| `/schedule` | 별도 진입점 없음 (ChatPage 내 버튼 있을 수 있음) |

---

## 부트스트랩 모드 (extension-test 전용)

extension-test 프로젝트에서는 MainPage가 아래 버튼 4개만 가진 심플한 허브 역할을 한다.

| 버튼 라벨 | 이동 대상 (`PAGES.*`) |
|-----------|----------------------|
| 팔로우 | `FOLLOW_LEAGUE` |
| 프로필 | `PROFILE` |
| 랭킹 | `RANK` |
| 구매 리스트 | `PURCHASE_LIST` |

레이아웃: 공통 외부 컨테이너(`h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]`) 안에 버튼 4개 세로 나열.

---

## 헤더 데이터 로딩

- 에너지 잔액: `authApi.getUserBalance(userId)` 또는 `profileApi.getProfile()` 캐시 사용
- 미읽음 메일: `authApi.getNewMsgCount({ user_id })` → `data[0].newMsgCnt`
