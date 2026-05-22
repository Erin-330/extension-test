# 컴포넌트 스펙: MatchPickCard (픽 카드)

## 기본 정보
| 항목 | 내용 |
|------|------|
| 컴포넌트 | `MatchPickCard` |
| 파일 | `src/features/quiz/ui/MatchPickCard.tsx` |
| Figma node-id | `7259:125496` |
| fileKey | `FR0ELVIB6XF3dHidbEqBdz` |
| 사용 위치 | `page-streak-history.md` → `MyPicksCardItem` |

**구현 전 반드시 `get_screenshot(node-id: 7259:125496)` + `get_design_context(node-id: 7259:125496)`를 병렬 호출한다.**
`get_screenshot` 캡처가 유일한 레이아웃 기준 — 스펙 설명과 스크린샷이 다르면 스크린샷을 따른다.

---

## ⚠️ 가장 중요: 픽(PICK) 상태 — 스크린샷과 100% 일치 필수

사용자가 팀을 픽했을 때 해당 팀 로고 위에 **프레임 이미지(Figma 에셋) + "YOUR PICK" 라벨 + 취소 버튼**이 겹쳐 보여야 한다.
이 영역을 유니코드, inline style, 자체 SVG로 대체하면 **절대 안 된다**. 에셋 URL만 사용한다.

---

## Figma 에셋 URL (get_design_context 확인값)

| 변수명 | 에셋 URL | 용도 |
|--------|----------|------|
| `imgProperty1CancelLeft` | `https://www.figma.com/api/mcp/asset/7d830be8-a591-4ade-98f0-c3bd8a787118` | 픽 선택됨 (취소 가능) — 파란 테두리 프레임 |
| `imgProperty1SuccessSelection` | `https://www.figma.com/api/mcp/asset/0089e6f9-3e09-4885-a402-2b5f438612a5` | 정답 — 초록 결과 프레임 |
| `imgProperty1FailSelection` | `https://www.figma.com/api/mcp/asset/6c1bdf67-545c-4fa4-a997-4c9b7ec38ff3` | 오답 — 빨간 결과 프레임 |
| `imgUnion` (체크 아이콘) | `https://www.figma.com/api/mcp/asset/c50f9299-b91a-48e4-a822-6381982b1900` | 픽 잠금 상태 취소 버튼 내 아이콘 |
| `imgKtRolster` (샘플 로고) | `https://www.figma.com/api/mcp/asset/24101fba-8109-4a10-a23e-ecaa3d485b24` | KT Rolster 로고 (목 데이터용) |

---

## 카드 전체 레이아웃

```
┌──────────────────────────────────────────────────┐
│ LOL                               league          │  ← 헤더 행
├──────────────────────────────────────────────────┤
│                                                  │
│  [왼팀 80×74px]   [중앙 영역]   [오른팀 80×74px]  │
│                                                  │
└──────────────────────────────────────────────────┘
```

- 카드 배경: `bg-white` (또는 `bg-[#ffffff]`), `rounded-[12px]` (Figma 확인 후 적용)
- 헤더: `LOL` (좌측, 소문자 게임 레이블) + `league` (우측, 보라색)
- 중앙: 게임 번호 + 시간 + 상태 라벨 (Upcoming / LIVE / 점수 등)

---

## QuizResultTeamInfo — 팀 영역 컴포넌트

```tsx
// w-[80px] h-[74px] overflow-clip relative
<div className="h-[74px] overflow-clip relative w-[80px]">
  {/* TeamDefaultInfo: 팀 로고 + 이름, 중앙 정렬 */}
  <TeamDefaultInfo className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-[calc(50%-3.5px)] w-[64px]" />

  {/* 픽 선택 시에만 표시: QuizResultCheck 오버레이 */}
  {isPicked && (
    <QuizResultCheck className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[74px] top-1/2" />
  )}
</div>
```

---

## TeamDefaultInfo — 팀 로고 + 이름

```tsx
// w-[64px], flex-col, items-center
<div className="flex flex-col items-center justify-center min-w-[56px] w-[64px]">
  {/* 로고 컨테이너: 42×42, 라운드 8px, 반투명 배경 */}
  <div className="bg-[rgba(0,0,0,0.07)] flex items-center justify-center rounded-[8px] shrink-0 size-[42px]">
    {/* 로고 이미지: 32×32 */}
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <img src={teamLogoUrl} className="shrink-0 w-[32px] h-[32px]" alt="" />
    </div>
  </div>
  {/* 팀 이름: 20px bold black */}
  <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black text-center">
    KT
  </p>
</div>
```

---

## QuizResultCheck — 픽 오버레이 컴포넌트

```tsx
// size-[74px], max-w-[90px], min-h-[66px], min-w-[72px]
// 프레임 이미지가 전체를 덮는다 → 아이콘·라벨은 그 위에 absolute

type PickState = 'cancel-enable' | 'locked' | 'success' | 'fail'

const frameImageByState: Record<PickState, string> = {
  'cancel-enable': 'https://www.figma.com/api/mcp/asset/7d830be8-a591-4ade-98f0-c3bd8a787118',
  'locked':        'https://www.figma.com/api/mcp/asset/7d830be8-a591-4ade-98f0-c3bd8a787118',
  'success':       'https://www.figma.com/api/mcp/asset/0089e6f9-3e09-4885-a402-2b5f438612a5',
  'fail':          'https://www.figma.com/api/mcp/asset/6c1bdf67-545c-4fa4-a997-4c9b7ec38ff3',
}

<div className="max-w-[90px] min-h-[66px] min-w-[72px] relative size-[74px]">
  {/* 프레임 이미지 — 배경 전체를 덮는다 */}
  <img
    src={frameImageByState[pickState]}
    className="absolute block inset-0 max-w-none size-full"
    alt=""
  />

  {/* "YOUR PICK" 라벨 — 하단 중앙 */}
  <div className="-translate-x-1/2 absolute bottom-0 left-1/2 flex h-[10px] w-[80px] items-center justify-center px-[8px] rounded-bl-[8px] rounded-br-[8px]">
    <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-center text-white uppercase whitespace-nowrap leading-normal">
      YOUR PICK
    </p>
  </div>

  {/* 취소/잠금 버튼 — cancel-enable, locked 상태에만 표시 */}
  {(pickState === 'cancel-enable' || pickState === 'locked') && (
    <BtnCancelPick
      className="absolute right-0 top-0 rounded-[4px] size-[20px]"
      pickState={pickState}
    />
  )}
</div>
```

---

## BtnCancelPick — 취소/잠금 버튼 (20×20)

```tsx
// 오른쪽 상단 20×20 버튼
// cancel-enable: 빨간 배경(#860000) + 파란 테두리(#209fee) + "X" 텍스트
// locked:        파란 배경(#209fee) + 체크 아이콘

{pickState === 'cancel-enable' ? (
  // ❗ 취소 가능 상태
  <div
    className="bg-[#860000] border border-[#209fee] border-solid flex items-center justify-center rounded-[4px] size-[20px]"
    onClick={onCancelPick}
  >
    {/* "X" — 유니코드 금지, 텍스트 그대로 사용 */}
    <p className="font-['Pretendard',sans-serif] font-bold text-[12px] text-center text-white uppercase leading-[20px]">
      X
    </p>
  </div>
) : (
  // 🔒 잠금 상태 (취소 불가)
  <div className="bg-[#209fee] flex items-center justify-center rounded-[4px] size-[20px]">
    <div className="relative size-[14px]">
      <img
        src="https://www.figma.com/api/mcp/asset/c50f9299-b91a-48e4-a822-6381982b1900"
        className="shrink-0 w-[14px] h-[14px]"
        alt=""
      />
    </div>
  </div>
)}
```

---

## 픽 상태(PickState) 매핑 규칙

| `PickState` | `QuizResultCheck` 표시 | `BtnCancelPick` | 설명 |
|------------|----------------------|----------------|------|
| `null` (미선택) | 표시 안 함 | 없음 | 팀 클릭 시 픽 제출 |
| `'cancel-enable'` | `imgProperty1CancelLeft` (파란 프레임) | 빨간 X (클릭 → 픽 취소) | 경기 시작 전, 취소 가능 |
| `'locked'` | `imgProperty1CancelLeft` (파란 프레임) | 파란 체크 (클릭 불가) | 경기 시작 후, 취소 불가 |
| `'success'` | `imgProperty1SuccessSelection` (초록 프레임) | 없음 | 정답 |
| `'fail'` | `imgProperty1FailSelection` (빨간 프레임) | 없음 | 오답 |

### PickState 결정 로직
```ts
function resolvePickState(
  selectedTeamId: string | null,
  isCorrect: boolean | null,
  verified: boolean,
  status: 'upcoming' | 'running' | 'completed',
): PickState | null {
  if (!selectedTeamId) return null
  if (verified && isCorrect) return 'success'
  if (verified && !isCorrect) return 'fail'
  if (status === 'upcoming') return 'cancel-enable'
  return 'locked'   // running / completed & !verified
}
```

---

## 카드 헤더 색상 / 폰트

| 요소 | 색상 | 크기 | 굵기 |
|------|------|------|------|
| 게임 레이블 ("LOL") | `text-black` (또는 `text-[#1a1a1a]`) | `text-[12px]` | `font-normal` |
| 리그 레이블 ("league") | `text-[#6E3FF3]` (보라) | `text-[12px]` | `font-normal` |

> 정확한 색상은 `get_design_context(7259:125496)` 결과를 우선 적용한다.

---

## 중앙 상태 라벨 (MatchResultLabel) 색상

| 상태 | 텍스트 | 색상 |
|------|--------|------|
| Upcoming | "Upcoming" | `text-[#6E3FF3]` (보라) |
| LIVE | "Live" | `text-[#c10f0f]` (빨강), 옆에 초록 점(ellipse 6px) |
| Finished / 점수 | 숫자 점수 | `text-black` |

---

## 목 데이터 예시

```ts
const MOCK_PICKS = [
  {
    match_id: 'mock-1',
    teams: [
      { team_id: 'kt', team_initial: 'KT', team_logo: 'https://www.figma.com/api/mcp/asset/24101fba-8109-4a10-a23e-ecaa3d485b24' },
      { team_id: 't1', team_initial: 'T1', team_logo: '<T1 에셋 URL — get_design_context 확인>' },
    ],
    scores: [null, null],
    selected_team_id: 'kt',       // 픽한 팀
    is_correct: null,
    verified: false,
    status: 'upcoming',
    begin_date: '2024-12-01T17:00:00',
    game_label: 'LOL',
    league_label: 'league',
  },
]
```

---

## 구현 시 주의사항

### ⛔ 절대 금지

1. **픽 프레임을 CSS border나 outline으로 직접 구현** — 에셋 이미지(imgProperty1CancelLeft)를 그대로 `<img>` 로 사용
2. **"YOUR PICK" 텍스트 위치를 flex로 배치** — `absolute bottom-0 left-1/2 -translate-x-1/2` 유지
3. **취소 버튼의 X를 유니코드 ✕·× 로 대체** — `"X"` 텍스트 그대로 사용
4. **QuizResultCheck 없이 별도 CSS로 구현** — 컴포넌트 구조 동일하게 유지
5. **img 태그에 w/h + shrink-0 미지정** — CLAUDE.md 규칙 2 적용 필수

### ✅ 필수 확인

- `QuizResultCheck` 오버레이는 `overflow-clip` 부모 안에서 `absolute` 중앙 정렬
- 프레임 이미지가 팀 로고를 덮는 구조 — z-index 불필요 (DOM 순서로 해결)
- `YOUR PICK` 라벨의 배경색은 프레임 이미지(에셋)에 포함됨 — 별도 `bg-[...]` 추가 금지
