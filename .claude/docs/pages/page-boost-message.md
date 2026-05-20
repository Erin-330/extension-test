# 페이지 스펙: 부스트 메시지 작성 `/boost/message`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/boost/message` |
| 컴포넌트 | `BoostCreateMessagePage` |
| 파일 | `src/pages/boost/message/index.tsx` |
| 인증 필요 | O |
| 단계 | 부스트 생성 2/3단계 |
| 가드 | `state.target` 없으면 `/boost/select` 리다이렉트 |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## Location State (진입 시)
```ts
// BoostFlowState
{
  match_id: string
  teams: ScheduleMatchTeamDto[]
  donationInfo?: ScheduleMatchDonationInfoDto[]
  status?: string
  leagues?: ScheduleMatchLeagueDto
  begin_date?: string | null
  target: BoostTarget         // 1단계에서 선택
  // 뒤로가기 후 복귀 시:
  message?: string
  quantity?: number
  image?: File | null
  imagePreviewUrl?: string | null
  imageRotationDeg?: 0 | 90 | 180 | 270
}
```

---

## 레이아웃 구조

```
<PageScrollLayout className="pl-4 pr-2 pb-24">
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │
  │   left:  [HistoryBackIcon → BOOST_SELECT]       │
  │   right: [CloseIcon → SCHEDULE_DETAIL]          │
  ├─────────────────────────────────────────────────┤
  │ pt-12 text-center flex flex-col gap-4           │
  │                                                 │
  │   <Typography variant="subtitle" color="text0"> │
  │     BOOST                                       │
  │   </Typography>                                 │
  │                                                 │
  │   <p className="flex items-end justify-center gap-2.5">│
  │     <span color="text80">To</span>              │
  │     <span variant="subtitle" color="selected">  │
  │       {target.target_name}                      │
  │     </span>                                     │
  │   </p>                                          │
  │                                                 │
  │ <Step2MessageQuantityImage                      │
  │   message={message}                             │
  │   quantity={quantity}                           │
  │   imagePreviewUrl={imagePreviewUrl}             │
  │   imageFile={image}                             │
  │   imageRotationDeg={imageRotationDeg}           │
  │   onMessageChange={setMessage}                  │
  │   onQuantityChange={setQuantity}                │
  │   onImageChange={(file, url) => ...}            │
  │   onRotationChange={setImageRotationDeg}        │
  │ />                                              │
  │                                                 │
  ├─────────────────────────────────────────────────┤
  │ [fixed bottom]                                  │
  │   px-10 pb-4 max-w-[500px] mx-auto             │
  │   flex flex-col items-center gap-3              │
  │                                                 │
  │   <BoostButton                                  │
  │     disabled={isFormIncomplete || exceedsBalance│
  │               || isBalanceLoading}              │
  │     onClick={goNext}                            │
  │   >                                             │
  │     [Boost2Icon]                                │
  │     {quantity === 0 ? 'BOOST' : quantity}       │
  │     [ChevronRightIcon]                          │
  │   </BoostButton>                                │
  └─────────────────────────────────────────────────┘
```

---

## 상태 관리

### 로컬 State
| 상태 | 타입 | 초기값 | 설명 |
|------|------|--------|------|
| `message` | `string` | `state?.message ?? ''` | 응원 메시지 |
| `quantity` | `number` | `state?.quantity ?? 5` | 에너지 수량 (기본 5) |
| `image` | `File \| null` | `state?.image ?? null` | 이미지 파일 |
| `imagePreviewUrl` | `string \| null` | `state?.imagePreviewUrl ?? null` | 이미지 미리보기 URL |
| `imageRotationDeg` | `0\|90\|180\|270` | `state?.imageRotationDeg ?? 0` | 이미지 회전각 |
| `balance` | `number \| null` | `null` | 에너지 잔액 |
| `isBalanceLoading` | `boolean` | `true` | 잔액 로딩 중 |

---

## API 호출

### `POST /users/getUserBalance` (마운트 시)
```ts
// JWT에서 userId 추출 후 호출
authApi.getUserBalance(userId)
// 성공: setBalance(res.data.cash)
// 실패: setBalance(0)
```

---

## Step2MessageQuantityImage 컴포넌트

```
[메시지 입력 영역]
  <textarea
    placeholder="응원 메시지를 입력하세요"
    maxLength={200}
    value={message}
    onChange={e => onMessageChange(e.target.value)}
  />

[수량 입력 영역]
  <button onClick={() => onQuantityChange(quantity - 1)}>-</button>
  <input type="number" value={quantity} onChange={...} />
  <button onClick={() => onQuantityChange(quantity + 1)}>+</button>
  잔액 표시: "잔액: {balance} 에너지"

[이미지 업로드]
  <input type="file" accept="image/*" onChange={...} />
  [imagePreviewUrl 있으면]:
    <img src={imagePreviewUrl} 회전 미리보기 />
    <button onClick={rotate90deg}>회전</button>
    <button onClick={removeImage}>삭제</button>
```

---

## 버튼 비활성화 조건

```ts
const isFormIncomplete = !imagePreviewUrl && !message.trim() && quantity === 0
const exceedsBalance = balance !== null && quantity > balance
const disabled = isFormIncomplete || exceedsBalance || isBalanceLoading
```

---

## 이미지 회전
```ts
// onRotationChange((prev) => (prev + 90) % 360)
// 0 → 90 → 180 → 270 → 0
```

---

## 이벤트 핸들러

### `goPrev()` (HistoryBackIcon)
```ts
setPage(PAGES.BOOST_SELECT, {
  state: { ...state, message, quantity, image, imagePreviewUrl, imageRotationDeg }
})
```

### `goDetail()` (CloseIcon)
```ts
setPage(PAGES.SCHEDULE_DETAIL, { state: { ...state } })
```

### `goNext()` (BOOST 버튼)
```ts
setPage(PAGES.BOOST_CONFIRM, {
  state: { ...state, message, quantity, image, imagePreviewUrl, imageRotationDeg }
})
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.BOOST_SELECT` | 뒤로가기 (현재 입력값 state로 전달) |
| `PAGES.SCHEDULE_DETAIL` | CloseIcon |
| `PAGES.BOOST_CONFIRM` | BOOST 버튼 |
