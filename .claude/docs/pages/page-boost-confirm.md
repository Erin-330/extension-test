# 페이지 스펙: 부스트 확인 및 전송 `/boost/confirm`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/boost/confirm` |
| 컴포넌트 | `BoostCreateConfirmPage` |
| 파일 | `src/pages/boost/confirm/index.tsx` |
| 인증 필요 | O |
| 단계 | 부스트 생성 3/3단계 |
| 가드 | `state.target` 없으면 `/boost/select` 리다이렉트 |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## Location State (진입 시)
```ts
// BoostFlowState (2단계에서 누적)
{
  match_id: string
  teams: ScheduleMatchTeamDto[]
  donationInfo?: ScheduleMatchDonationInfoDto[]
  status?: string
  leagues?: ScheduleMatchLeagueDto
  begin_date?: string | null
  target: BoostTarget
  message: string
  quantity: number
  image: File | null
  imagePreviewUrl: string | null
  imageRotationDeg: 0 | 90 | 180 | 270
}
```

---

## 레이아웃 구조

```
<PageScrollLayout>
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │
  │   left:  [HistoryBackIcon → BOOST_MESSAGE]      │
  │   right: [CloseIcon → SCHEDULE_DETAIL]          │
  ├─────────────────────────────────────────────────┤
  │ <Step3Confirm                                   │
  │   form={form}                                   │
  │   currentUser={{ userId, userImage, userName }} │
  │   agreed={agreed}                               │
  │   onAgreedChange={setAgreed}                   │
  │ />                                              │
  ├─────────────────────────────────────────────────┤
  │ [fixed bottom]                                  │
  │   px-10 max-w-[500px] mx-auto flex flex-col    │
  │                                                 │
  │   [isSubmitting]:                               │
  │     <LoadingRive width=80 height=80> (우측 정렬)│
  │                                                 │
  │   [!isSubmitting]:                              │
  │     <BoostButton                                │
  │       disabled={!agreed}                        │
  │       onClick={handleDone}                      │
  │     >                                           │
  │       [Boost2Icon] BOOST [ChevronRightIcon]     │
  │     </BoostButton>                              │
  └─────────────────────────────────────────────────┘
```

---

## Step3Confirm 컴포넌트 레이아웃

```
[선택 대상 카드]
  팀 로고 + 선수/팀명 + target_type

[보낸 사람 카드]
  userImage(원형) + userName

[메시지 카드]
  message 텍스트 (없으면 회색 placeholder)

[이미지 미리보기] (imagePreviewUrl 있을 때)
  <img> 회전각 적용 (imageRotationDeg)

[에너지 수량]
  [Boost2Icon] {quantity}

[동의 체크박스]
  <input type="checkbox" checked={agreed} onChange={...} />
  "위 내용으로 부스트를 전송합니다"
```

---

## 상태 관리

### 로컬 State
| 상태 | 타입 | 초기값 | 설명 |
|------|------|--------|------|
| `agreed` | `boolean` | `false` | 동의 체크박스 |
| `isSubmitting` | `boolean` | `false` | 전송 중 |

### 파생 (useMemo)
```ts
const form = flowStateToFormState(state)
// BoostCreateFormState: { target, message, quantity, image, imagePreviewUrl, imageRotationDeg }

const currentUser = {
  userId: JWT payload.id ?? payload.sub,
  userImage: JWT payload.picture,
  userName: JWT payload.name,
}
```

---

## API 호출 순서 (`handleDone`)

```
1. agreed && !isSubmitting 확인
2. JWT에서 userId 추출
3. [이미지 있으면]:
   a. getRotatedImageAsBlob(source, imageRotationDeg, mimeType) → Blob
   b. new File([blob], filename, { type: mimeType })
   c. POST /uploader/getOnetimeURL → { url, key }
   d. PUT {url} (binary) → S3 직접 업로드
   e. payload.cheeringImage = key
4. POST /donation/setBoostPlayerForSchedules
   {
     userid,
     amount: quantity,
     targetid: target.target_id,
     matchid: match_id,
     comment: message,
     targetType: target.target_type,
     privateYN: 'N',
     cheeringImage?: key,
   }
5. queryClient.invalidateQueries(DONATION_HISTORY_BY_MATCH_QUERY_KEY)
6. goDetail() → SCHEDULE_DETAIL 복귀
```

### 에러 처리
```ts
catch (e) {
  showModal('error', null, DEFAULT_API_ERROR_MESSAGE)
}
finally {
  setIsSubmitting(false)
}
```

---

## 이미지 처리 (`getRotatedImageAsBlob`)

```ts
// features/boost/lib/getRotatedImageAsBlob.ts
getRotatedImageAsBlob(
  source: File | string,   // File 또는 base64/URL
  rotationDeg: number,     // 0 | 90 | 180 | 270
  mimeType: string,        // 'image/jpeg' 등
): Promise<Blob>
// Canvas에 그려서 회전 적용 후 Blob 반환
```

---

## 이벤트 핸들러

### `goPrev()` (HistoryBackIcon)
```ts
setPage(PAGES.BOOST_MESSAGE, { state })
```

### `goDetail()` (CloseIcon)
```ts
setPage(PAGES.SCHEDULE_DETAIL, { state: { ...state } })
```

### `handleDone()` (BOOST 버튼)
위 API 호출 순서 수행

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.BOOST_MESSAGE` | 뒤로가기 |
| `PAGES.SCHEDULE_DETAIL` | CloseIcon 또는 전송 성공 |
