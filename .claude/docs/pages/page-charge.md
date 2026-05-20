# 페이지 스펙: 에너지 충전 `/charge` `/charge/toss` `/payment/verify`

## 기본 정보

| 항목 | 내용 |
|------|------|
| 라우트 1 | `/charge` |
| 라우트 2 | `/charge/toss` |
| 라우트 3 | `/payment/verify` |
| 파일 | `src/pages/charge/index.tsx`, `src/pages/charge/toss/index.tsx`, `src/pages/payment/verify/index.tsx` |
| 인증 필요 | O |
| 특이사항 | 익스텐션 팝업으로 열리는 경우 `fromExtension=1` 쿼리 파라미터 |

## 피그마
**Figma (충전):** *(미입력)*
**Figma (결제확인):** *(미입력)*

---

## `/charge` 레이아웃

```
<div className="relative flex h-[100dvh] max-h-[100dvh]
  min-h-0 w-full flex-col overflow-hidden bg-white">
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │
  │   left: [CloseIcon → PROFILE]                   │
  ├─────────────────────────────────────────────────┤
  │ <main className="flex min-h-0 flex-1 flex-col   │
  │   bg-white">                                    │
  │                                                 │
  │   [익스텐션 초기화 대기 중]:                      │
  │     <RiveLoading>                               │
  │                                                 │
  │   [정상]:                                        │
  │     <ChargeContent key={isInitAuthReceived}>    │
  └─────────────────────────────────────────────────┘
```

---

## ChargeContent 컴포넌트

```
<div className="flex flex-col overflow-y-auto">
  ┌─────────────────────────────────────────────────┐
  │ [에너지 잔액 표시]                               │
  │   현재 보유: {balance} Energy                   │
  │                                                 │
  │ <ChargeEnergyAmounts>                           │
  │   [패키지 그리드] (예: 100E / 500E / 1000E 등)  │
  │   각 패키지:                                    │
  │     <button isSelected={...}                    │
  │       className="border rounded-lg p-3">        │
  │       {energyCount} Energy                      │
  │       {price}원                                 │
  │       [인기 뱃지] (isPopular일 때)              │
  │     </button>                                   │
  │                                                 │
  │ <ChargePaymentMethods>                          │
  │   [결제 수단 선택]                               │
  │   Toss Payments (현재 유일한 수단)              │
  │                                                 │
  │ <ChargeSubmitButton onClick={handleCharge}>     │
  │   {selectedPackage.price}원 충전하기             │
  └─────────────────────────────────────────────────┘
```

---

## 충전 패키지 (`features/charge/lib/constants.ts`)

```ts
interface ChargePackage {
  energyCount: number
  price: number       // KRW
  label: string
  isPopular?: boolean
}
```

---

## 결제 플로우

```
1. 패키지 선택 (selectedPackage)
2. handleCharge() 클릭
   ├─ POST /payments/getTransactionID
   │   { userid, appCode, platform, channel }
   │   → { transactionID }
   └─ navigate('/charge/toss', {
        state: { transactionID, package: selectedPackage }
      })

3. /charge/toss:
   TossPayments SDK 초기화
   tossPayments.requestPayment('카드', {
     amount: selectedPackage.price,
     orderId: transactionID,
     orderName: `${energyCount} Energy`,
     customerName: userName,
     successUrl: `${origin}/payment/verify`,
     failUrl: `${origin}/payment/fail`,
   })

4. /payment/verify?paymentKey=...&orderId=...&amount=...
   POST /payments/confirmPaymentByToss
   { orderId, amount, paymentKey, userid }
   → { energy: newBalance }

5. 성공: PaymentVerifySuccess 표시
6. /payment/fail → Navigate to /profile
```

---

## `/charge/toss` 레이아웃

```
<div className="flex h-[100dvh] flex-col bg-white">
  <AppHeader left={CloseIcon → CHARGE} />
  <TossKrwTemplate
    transactionID={state.transactionID}
    package={state.package}
  />
</div>
```

---

## `/payment/verify` 레이아웃

```
<PaymentVerifyContainer>
  ┌─────────────────────────────────────────────────┐
  │ [처리 중]: <RiveLoading>                         │
  │                                                 │
  │ [성공]:                                          │
  │   <PaymentVerifySuccess>                        │
  │     [Confetti 애니메이션]                        │
  │     +{energy} Energy 충전 완료                   │
  │     <button → PROFILE>확인</button>             │
  │                                                 │
  │ [실패]:                                          │
  │   <PaymentVerifyFail>                           │
  │     오류 메시지 표시                             │
  │     <button → CHARGE>다시 시도</button>          │
  └─────────────────────────────────────────────────┘
```

---

## 익스텐션 팝업 처리

```ts
// URL: /charge?fromExtension=1
// 부모 창으로부터 postMessage로 JWT 수신
window.addEventListener('message', (ev) => {
  if (ev.data.type === 'charge/initAuth') {
    setToken(ev.data.token)
    // followTeamTargetIds도 localStorage에 저장
    setIsInitAuthReceived(true)
    window.opener?.postMessage({ type: 'charge/initAck' }, '*')
  }
})
// 7초 타임아웃: initAuth 못 받으면 /login 리다이렉트
```

---

## 상태 관리

### `/charge` 로컬 State
| 상태 | 타입 | 설명 |
|------|------|------|
| `selectedPackage` | `ChargePackage \| null` | 선택한 패키지 |
| `selectedMethod` | `'toss'` | 결제 수단 |
| `isInitAuthReceived` | `boolean` | 익스텐션 JWT 수신 완료 |

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.PROFILE` | 헤더 CloseIcon |
| `/charge/toss` | 충전하기 버튼 |
| `/payment/verify` | Toss 결제 성공 (Toss SDK redirect) |
| `/payment/fail` → `/profile` | Toss 결제 실패 |
