# Purchase List (구매 내역)

## 개요

사용자의 에너지 구매 내역을 무한 스크롤로 나열하는 페이지.  
프로필 페이지에서 진입하며, 뒤로가기 시 프로필로 복귀한다.

---

## 레이아웃 구조 (위→아래)

```
┌─────────────────────────────────────┐
│  PurchaseListHeader                 │  ← 뒤로가기 버튼 고정 헤더
├─────────────────────────────────────┤
│  (초기 로딩 중)                      │  ← RiveLoading (inline)
│  또는                               │
│  PurchaseHistoryList                │  ← 구매 카드 목록
│    └─ PurchaseListItem × N          │
│  sentinel div                       │  ← 무한 스크롤 트리거
│  (추가 로딩 중) LoadingRive          │  ← 다음 페이지 로딩 스피너
└─────────────────────────────────────┘
```

---

## 헤더: PurchaseListHeader

- 좌측 뒤로가기 버튼 → 프로필 페이지로 이동
- 고정(fixed) 위치 또는 상단 고정 레이아웃

---

## 로딩 상태

| 상태 | 표시 |
|------|------|
| 초기 로딩 (`isLoading && list.length === 0`) | `RiveLoading` (inline, 전체 영역) |
| 다음 페이지 로딩 (`isFetchingNextPage`) | `LoadingRive` (목록 하단 중앙) |

> **Rive 파일 사용**: 로딩 상태에 Rive 애니메이션을 사용한다. 자세한 명세는 `loading-rive.md` 참고.  
> Rive 파일 CDN URL: `https://erin-bucket-team.s3.us-east-1.amazonaws.com/loading-page.riv`

| 상황 | 컴포넌트 | 아트보드 |
|------|---------|---------|
| 초기 로딩 (전체 영역) | `RiveLoading` (inline) | — |
| 추가 로딩 (하단 스피너) | `LoadingRive` 80×80px | `Loading_addList` |

---

## PurchaseListItem (카드)

구매 1건을 나타내는 카드.

### 표시 데이터

| 위치 | 내용 |
|------|------|
| 좌상단 | 에너지 아이콘 (`PurchaseEnergyIcon`) |
| 우측 상단 | 에너지 수량 (`energyCount`) |
| 우측 중단 | 거래 코드 (`TransactionCode`, 말줄임) |
| 우측 하단 | 결제일 (`payed_date` 포맷) |
| 우측 최하단 | 만료까지 남은 시간 (`expired_date` diff) + 만료 아이콘 (`PurchaseExpireIcon`) |

### 날짜 포맷

- `payed_date` → `formatPayedDate()` 유틸로 포맷
- `expired_date` → `getExpireDiff()` 유틸로 "N일 남음" 형태로 표시

---

## 무한 스크롤

- 목록 하단 sentinel div에 `IntersectionObserver` 연결
- 뷰포트 진입 시 `fetchNextPage()` 호출
- 페이지당 20개 (`per_page: 20`)
- 마지막 항목의 `rown`을 `next_rown`으로 전달하는 커서 방식

---

## API

```
POST /users/getUserDepositHistory
body: { next_rown, per_page, userid }
```

응답 타입 `UserDepositHistoryItem`:

| 필드 | 타입 | 설명 |
|------|------|------|
| `Amount` | number | 결제 금액 |
| `DepositType` | string | 입금 유형 |
| `TransactionCode` | string | 거래 코드 |
| `UserID` | string | 사용자 ID |
| `currency` | string | 통화 |
| `energyCount` | number | 지급된 에너지 수 |
| `expired_date` | string | 에너지 만료일 |
| `payed_date` | string | 결제일 |
| `pgType` | string | PG사 유형 |
| `rown` | number | 커서용 row 번호 |

에러 시 모달 표시 (1회만).

---

## 훅: `useUserDepositHistory`

- `userid`: JWT 또는 Zustand store에서 추출
- `enabled`: userid가 있을 때만 쿼리 활성화
- 반환: `list`, `isLoading`, `isFetching`, `isError`, `fetchNextPage`, `hasNextPage`, `isFetchingNextPage`
