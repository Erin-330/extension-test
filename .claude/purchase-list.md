# Purchase List (구매 내역)

**File:** `purchase-list.html`
**Last updated:** 2026-06-01

---

## 개요

사용자가 구매한 에너지 내역을 시간순으로 확인하는 페이지.
프로필 페이지에서 진입하며, 거래 코드·결제일·만료 정보를 카드 형태로 제공한다.
페이지당 20건 무한 스크롤, 초기/추가 로딩 Rive 애니메이션 포함.

---

## 레이아웃

```
┌─────────────────────────────────────┐
│  ← (뒤로)   구매 내역               │  sticky header
├─────────────────────────────────────┤
│  [카드]                              │  purchase-card
│  [카드]                              │
│  ...                                │
│  (sentinel)                         │  IntersectionObserver
│  [로딩 스피너]                        │  추가 로딩 시
│  — end —                            │  마지막 페이지
└─────────────────────────────────────┘
```

> **주의:** 초기 로딩 중에는 카드 목록 대신 전체 영역에 Rive 로딩 오버레이 표시.

---

## 상태별 표시

| 상태 | 표시 |
|------|------|
| 초기 로딩 (`isLoading && list.length === 0`) | Rive `Loading` 아트보드, 전체 영역 점유 |
| 추가 로딩 (`isFetchingNextPage`) | Rive `Loading_addList` 아트보드, 목록 하단 소형 스피너 |
| 빈 상태 (데이터 0건) | "구매 내역이 없습니다." 텍스트 메시지 |
| 에러 | 에러 모달 1회만 표시 |
| 미인증 | 페이지 진입 불가 (사용자 ID 확인 불가 시 API 미호출) |

---

## Rive 애니메이션

> ⚠️ **이 페이지에는 Rive 파일 1개가 사용된다. 반드시 아래 명세대로 구현해야 한다.**

### LoadingRive — 초기/추가 로딩 스피너

| 항목 | 값 |
|------|-----|
| Rive 파일 | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/loading-page.riv` |
| 아트보드 (초기) | `Loading` |
| 아트보드 (추가) | `Loading_addList` |
| State Machine | `State Machine 1` |
| autoplay | true |
| autoBind | false |

- 초기 로딩: `Loading` 아트보드, 250×250px, 전체 영역 flex 중앙 배치
- 추가 로딩: `Loading_addList` 아트보드, 80×80px, 목록 하단 중앙 배치
- 각 Rive 인스턴스는 사용 후 `rive.cleanup()` 호출

---

## 컴포넌트 상세

### PurchaseCard (구매 내역 카드)

```
┌─────────────────────────────────────┐
│  [⚡ N Energy]   [거래코드 ...]       │
│  결제일: YYYY.MM.DD. HH:mm:ss        │
│  [🕐] N일 남음                       │
└─────────────────────────────────────┘
```

| 위치 | 항목 | 출처 |
|------|------|------|
| 상단 좌 | 에너지 배지 (아이콘 + 수량) | `item.Amount` |
| 상단 우 | 거래 코드 (말줄임) | `item.TransactionCode` |
| 중단 | 결제일 | `item.PaymentDate` |
| 하단 | 만료 아이콘 + N일 남음 | `item.ExpireDays` |

#### 표시 규칙

| 조건 | 표시 |
|------|------|
| `ExpireDays > 0` | `${ExpireDays}일 남음` |
| `ExpireDays === 0` | `오늘 만료` |
| `ExpireDays < 0` | `만료됨` (muted) |

---

## 무한 스크롤

- sentinel div에 `IntersectionObserver` 연결 (rootMargin: `200px 0px`)
- 초기 로딩 완료 후 300ms 딜레이 뒤 Observer 활성화
- 페이지당 20개
- 마지막 항목 `rown`을 다음 `next_rown`으로 전달하는 커서 방식

---

## API

### 구매 내역 조회

```
POST /getPurchaseList
body: { userUID, next_rown }
```

응답 타입 `PurchaseItem` 주요 필드:

| 필드 | 타입 | 설명 |
|------|------|------|
| `rown` | number | 커서용 행 번호 |
| `TransactionCode` | string | 거래 코드 |
| `Amount` | number | 구매 에너지 수량 |
| `PaymentDate` | string | 결제일 (`YYYY.MM.DD. HH:mm:ss`) |
| `ExpireDays` | number | 만료 잔여일 (음수 = 만료) |
