# Boost List (부스트 내역)

## 개요

부스트(도네이션) 피드를 무한 스크롤로 나열하는 페이지. 세 가지 진입 경로가 있다:

| 페이지 | 라우트 | 데이터 범위 |
|--------|--------|------------|
| 내 부스트 목록 | `BOOST_LIST` | 현재 로그인 사용자가 보낸 부스트 전체 |
| 팀 부스트 목록 | `BOOST_LIST_TEAM` | 특정 팀에게 보낸 부스트 |
| 플레이어 부스트 목록 | `BOOST_LIST_PLAYER` | 특정 플레이어에게 보낸 부스트 |

팀/플레이어 페이지는 경기 상세(`SCHEDULE_DETAIL`) 또는 부스트 목록에서 진입 가능하다.  
뒤로가기 시 `fromPage` 상태에 따라 경기 상세 또는 부스트 목록으로 복귀한다.

---

## 공통 레이아웃 구조 (위→아래)

```
┌─────────────────────────────────────┐
│  AppHeader                          │  ← 닫기/뒤로가기
├─────────────────────────────────────┤
│  (팀/플레이어 페이지만) 프로필 헤더   │  ← 이미지 + 이름/약칭
├─────────────────────────────────────┤
│  (초기 로딩 중) LoadingRive          │  ← 전체 영역 중앙
│  또는                               │
│  BoostHistoryMatchCard × N          │  ← 부스트 카드 목록
│  sentinel div                       │  ← 무한 스크롤 트리거
│  (추가 로딩 중) LoadingRive          │  ← 하단 스피너
│  또는                               │
│  NoBoostRive                        │  ← 빈 상태 (데이터 없을 때)
└─────────────────────────────────────┘
```

---

## Rive 애니메이션 — 필수

> ⚠️ **이 페이지에는 Rive 파일이 2개 사용된다. 반드시 아래 명세대로 구현해야 한다.**

### 1. NoBoostRive — 빈 상태 표시

| 항목 | 값 |
|------|-----|
| Rive 파일 | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/no-boost.riv` |
| 아트보드 | `donateFirst` |
| State Machine | `State Machine 1` |
| autoplay | true |
| 데이터 바인딩 | 없음 (정적 애니메이션) |

로컬 경로 없음. CDN URL 직접 사용.

표시 조건: 피드 데이터가 0건일 때 화면 중앙에 표시.  
텍스트: "Be the first BOOSTER" (상단) / "Please press 'BOOST' to cheer..." (하단 설명)

### 2. LoadingRive — 로딩 스피너

> `loading-page.riv` 사용. 자세한 명세는 `loading-rive.md` 참고.

| Rive 파일 | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/loading-page.riv` |
|----------|------------------------------------------------------------------------|

| 상황 | 아트보드 | 크기 |
|------|---------|------|
| 초기 로딩 (화면 전체 중앙) | `Loading` | 기본(250px) |
| 무한 스크롤 추가 로딩 (하단) | `Loading_addList` | 80×80px |

---

## 팀/플레이어 페이지 프로필 헤더

데이터가 있을 때만 표시된다. 첫 번째 피드 아이템에서 이미지/이름을 추출한다.

### 팀 페이지 헤더

| 요소 | 출처 |
|------|------|
| 팀 로고 이미지 | `donationFeed[0].TeamImage` |
| 팀 약칭 | `donationFeed[0].TeamInitial` |

### 플레이어 페이지 헤더

| 요소 | 출처 |
|------|------|
| 플레이어 이미지 | `donationFeed[0].PlayerImage` |
| 닉네임 | `pageState.playerNickname` (진입 시 전달) |
| 팀 약칭 | `donationFeed[0].TeamInitial` |
| 팀 로고 (우측) | `donationFeed[0].TeamImage` |

---

## BoostHistoryMatchCard (부스트 카드)

피드 1건을 나타내는 카드.

### 카드 구조 (위→아래)

```
┌── 상단 accent 바 (1px 높이, 컬러 border) ──┐
│  [팀/플레이어 헤더 행]   ← 비상세 페이지만   │
│    팀 약칭 | 플레이어 닉네임 또는 팀 로고     │
│  [발신자 정보]                               │
│    비공개 아이콘? + 아바타 + 이름 + 시간      │
│  [부스트 내용]                               │
│    에너지 아이콘 + 수량  |  메시지/이미지     │
│  [게임 정보]                                 │
│    리그명 배지 | "팀A @ 팀B / YY.MM.DD"      │
│    GameID 있으면 LiveRorrIcon               │
│  [좋아요 버튼]                               │
│    FeedLikeBtnRive ← Rive 사용              │
└──────────────────────────────────────────────┘
```

### 상단 accent 바 색상 규칙

| 조건 | 색상 |
|------|------|
| `isDetailPage === true` | 배경색 (구분선 없음) |
| `leftTeamId`가 없음 (내 부스트 목록) | `boostEnergy4Icon` 색상 |
| `item.TeamID === leftTeamId` | `teamColorLeft` (경기 상세 좌측팀) |
| 그 외 | `teamColorRight` (경기 상세 우측팀) |

### 메시지 표시 규칙

| 조건 | 표시 |
|------|------|
| `privateYN === 'Y'` 또는 `BlindYN === 'Y'`이고 내가 작성자가 아님 | "PRIVATE MESSAGE" 텍스트 |
| `cheeringImage`가 있음 | 이미지 + 텍스트 댓글 |
| `Comment`가 없고 이미지도 없음 | 랜덤 이미지/GIF (emptyBoostMsg 목록에서) |
| 그 외 | `Comment` 텍스트 |

### 헤더 행 클릭 동작 (비상세 페이지)

| 조건 | 이동 |
|------|------|
| `PlayerID`가 있음 | `BOOST_LIST_PLAYER` (targetId, playerNickname 전달) |
| `TeamID`가 있음 | `BOOST_LIST_TEAM` (targetId, teamInitial 전달) |

### FeedLikeBtnRive — 좋아요 버튼 Rive

> ⚠️ **좋아요 버튼에도 Rive 파일이 사용된다.**

| 항목 | 값 |
|------|-----|
| Rive 파일 | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/feed-like-button.riv` |
| 아트보드 | `FeedLikeButtonSet` |
| State Machine | `State Machine 1` |
| autoplay | true |
| autoBind | true |

데이터 바인딩 (`useViewModelInstanceNumber`, `useViewModelInstanceBoolean`):

| 뷰모델 경로 | 타입 | 출처 |
|------------|------|------|
| `LikeNumber` | number | `item.feedLikeCount` |
| `isOnState` | boolean | `item.FeedLikeYN === 'Y'` |

`rive`와 값이 모두 준비된 후 바인딩한다 (`if (!rive || !likeCount || !isOnState) return`).

좋아요 중복 방지: 부모에서 `pendingLikeTransactionCode`를 전달하면 해당 카드의 버튼이 비활성화된다.  
비로그인 시 (`isNotSignIn`) 클릭 이벤트 비활성화.

---

## 무한 스크롤

- sentinel div에 `IntersectionObserver` 연결 (rootMargin: `200px 0px`)
- 초기 로딩 완료 후 300ms 딜레이 뒤 Observer 활성화 (초기 로딩 중 중복 트리거 방지)
- 페이지당 20개
- 마지막 항목 `rown`을 다음 `next_rown`으로 전달하는 커서 방식

---

## API

### 내 부스트 목록

```
POST /donation/getDonationHistoryByUser
body: { next_rown, per_page, userid }
```

### 팀 부스트 목록

```
POST /donation/getDonationHistoryByTeam
body: { next_rown, per_page, teamId }
```

### 플레이어 부스트 목록

```
POST /donation/getDonationHistoryByPlayer
body: { next_rown, per_page, playerId }
```

응답 타입 `BoostDonationFeedItem` 주요 필드:

| 필드 | 설명 |
|------|------|
| `Amount` | 부스트 에너지 수량 |
| `Comment` | 응원 메시지 |
| `cheeringImage` | 첨부 이미지 URL |
| `privateYN` | 비공개 여부 (`'Y'` \| `'N'`) |
| `BlindYN` | 블라인드 여부 |
| `UserID`, `UserName`, `UserImage` | 발신자 정보 |
| `PlayerID`, `PlayerNickname`, `PlayerImage` | 대상 플레이어 정보 |
| `TeamID`, `TeamInitial`, `TeamImage` | 팀 정보 |
| `LeagueName`, `MatchName`, `MatchDate` | 경기 정보 |
| `GameID` | null이면 경기 전/후, 있으면 라이브 |
| `TransactionCode` | 거래 코드 (좋아요 식별자) |
| `feedLikeCount` | 좋아요 수 |
| `FeedLikeYN` | 내가 좋아요 눌렀는지 (`'Y'` \| `'N'`) |
| `donationDate` | 부스트 일시 |
| `rown` | 커서용 row 번호 |

---

## 좋아요 처리 흐름

1. 카드에서 `onLikeClick(TransactionCode, currentUserId)` 호출
2. 부모 페이지에서 `pendingLikeCode` 상태 세팅 → 해당 카드 버튼 비활성화
3. `useSetFeedLike` mutation 호출 (`POST /donation/setFeedLike` 또는 유사)
4. 완료 후 `pendingLikeCode` 초기화
5. `currentUserId`: Zustand store → JWT 파싱 순서로 추출

---

## 진입 시 전달하는 pageState

### 팀 페이지

| 키 | 타입 | 설명 |
|----|------|------|
| `targetId` | string | 팀 ID |
| `targetType` | `'team'` | |
| `teamInitial` | string | 팀 약칭 |
| `fromPage` | PageId | 이전 페이지 |
| `fromPageState` | unknown | 이전 페이지 state (복귀용) |

### 플레이어 페이지

| 키 | 타입 | 설명 |
|----|------|------|
| `targetId` | string | 플레이어 ID |
| `playerNickname` | string | 플레이어 닉네임 |
| `fromPage` | PageId | 이전 페이지 |
| `fromPageState` | unknown | 이전 페이지 state (복귀용) |
