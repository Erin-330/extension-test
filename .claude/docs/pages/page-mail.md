# 페이지 스펙: 메시지함 `/mail`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/mail` |
| 컴포넌트 | `MailPage` |
| 파일 | `src/pages/mail/index.tsx` |
| 인증 필요 | O |
| 진입 방법 | 프로필 헤더 MailIcon |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## 레이아웃 구조

```
<PageScrollLayout ref={scrollContainerRef}
  className="relative flex h-[100dvh] max-h-[100dvh]
             min-h-0 w-full flex-col bg-background">
  ┌─────────────────────────────────────────────────┐
  │ <MailHeader onBack={() => setPage(PAGES.PROFILE)}│  ← fixed top
  ├─────────────────────────────────────────────────┤
  │ <main className="flex min-h-0 flex-1 flex-col   │
  │   bg-background">                               │
  │   <div className="flex min-h-0 flex-1 flex-col  │
  │     box-border pb-4 pl-4 pr-2 pt-12">           │
  │                                                 │
  │     [초기 로딩]: <RiveLoading inline>            │
  │                                                 │
  │     [로드 완료]:                                 │
  │       <MailList list={list} />                  │
  │       <div ref={loadMoreRef} className="min-h-[1px]"/> │
  │       [하단 추가 로딩]:                          │
  │         <LoadingRive width=80 height=80>        │
  │                                                 │
  └─────────────────────────────────────────────────┘
```

---

## MailHeader 컴포넌트

```
[fixed top] h-14 flex items-center justify-between px-4

left: [BackIcon 버튼 → PROFILE]
center: "메시지함" or "Mail"
```

---

## MailList 컴포넌트

```
flex flex-col gap-3

{list.map → <MailListItem item={msg} />}
```

---

## MailListItem 컴포넌트

```
<div className="flex gap-3 p-3 bg-surface rounded-[0.5rem]">
  ┌────────┬────────────────────────────────────────┐
  │ [thumb]│ [상단 행]                               │
  │ 56x56  │   [player_nickname or 시스템 메시지]    │
  │        │   [날짜 (createdDate)]                  │
  │        ├────────────────────────────────────────┤
  │        │ [title]   ← Typography variant="description2"│
  │        │ [description] (2줄 clamp)               │
  │        ├────────────────────────────────────────┤
  │        │ [만료일: expired_date] [영상 버튼: videoURL 있을 때]│
  └────────┴────────────────────────────────────────┘

[미읽음 뱃지]: readMsgYN === 'N' → 우상단 빨간 점
```

### 썸네일 우선순위
1. `player_image` → 선수 이미지
2. `team_image` → 팀 이미지
3. `coach_image` → 코치 이미지
4. 기본 이미지 (`DEFAULT_PLAYER_IMAGE`)

---

## 상태 관리

### TanStack Query (`useMessageList`)
```ts
// features/mail/model/hooks/useMessageList.ts
useMessageList()
→ { list: MessageItem[], isLoading, fetchNextPage, hasNextPage, isFetchingNextPage }

// POST /msgboxes/getMsgList { user_id, per_page: 20, next_rown }
// 무한 스크롤: next_rown = list[last].rown
```

### 로컬 State
| 상태 | 타입 | 설명 |
|------|------|------|
| `scrollRoot` | `HTMLDivElement \| null` | 스크롤 컨테이너 |

---

## API 호출

### 마운트 시 (읽음 처리)
```ts
// POST /msgboxes/setMsgReadState { user_id }
// → 전체 메시지 읽음 처리 (뱃지 카운트 초기화)
```

### 영상 시청 처리
```ts
// 영상 재생 버튼 클릭 시:
// POST /msgboxes/setMsgWatchState { user_id, msg_id }
```

---

## 무한 스크롤 (`useInfiniteScrollLoadMore`)

```ts
const { loadMoreRef, showBottomLoading } = useInfiniteScrollLoadMore({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  listLength: list.length,
  scrollRoot,
})
```

---

## 영상 메시지 처리

```
videoURL 있을 때:
  <button onClick={handleWatchVideo}>
    [PlayIcon] 영상 보기
  </button>

클릭 시:
  window.open(videoURL, '_blank')
  또는 인앱 플레이어 표시
  mailboxApi.setMsgWatchState({ user_id, msg_id })
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.PROFILE` | 헤더 BackIcon |

---

## 빈 상태

| 상황 | 표시 |
|------|------|
| 초기 로딩 (`isLoading && list.length === 0`) | `<RiveLoading inline>` |
| 메시지 없음 | 빈 메시지 안내 (또는 NoDataRive) |
