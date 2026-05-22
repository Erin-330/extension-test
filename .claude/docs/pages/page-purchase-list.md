# 페이지 스펙: 구매 내역 `/purchase-list`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 컴포넌트 | `PurchaseListPage` |
| 파일 | `src/pages/purchase/list/index.tsx` |
| Figma node-id | `1767:73369` |
| fileKey | `FR0ELVIB6XF3dHidbEqBdz` |

**구현 전 반드시 `get_screenshot(node-id: 1767:73369)` + `get_design_context(node-id: 1767:73369)`를 병렬 호출한다.**
`get_screenshot` 캡처가 유일한 레이아웃 기준 — 섹션 순서·간격·크기 임의 변경 금지. 스펙 설명과 스크린샷이 다르면 스크린샷을 따른다.

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.PROFILE` | UI Header 닫기(ButtonCloseMod) |

---

## ⚠️ Figma와 반드시 일치해야 하는 항목

### UI Header
- 왼쪽: X 닫기 버튼
- 오른쪽: 정보 버튼 — **보이지 않음** (투명 처리)
- **헤더에 "구매 내역" 타이틀 텍스트 없음** — 현재 구현에 있는 타이틀 제거할 것

### 아이템 카드 레이아웃

카드 전체는 `flex-col gap-[8px]` 2행 구조다.

```
┌──────────────────────────────────────────────┐
│ [48px 아이콘] │ 아이템명 (위)                  │  ← 1행: flex items-start gap-[12px]
│              │ TN.d725... (아래, truncate)     │
├──────────────────────────────────────────────┤
│                          날짜        🕐 11 mo │  ← 2행: flex-col items-end, 오른쪽 정렬
└──────────────────────────────────────────────┘
```

**⚠️ `text-right` 오독 주의**

Figma `get_design_context`가 아이템명 div에 `text-right`를 붙여 반환한다.
이것은 Figma 텍스트 박스의 정렬 속성일 뿐 — **아이템명을 카드 오른쪽 끝으로 보내라는 뜻이 아니다.**

```tsx
{/* ✅ 올바른 구조 — 아이콘 오른쪽에 [아이템명 위 / txId 아래] */}
<div className="flex gap-[12px] items-start w-full">
  {/* 48px 아이콘 */}
  <div className="... shrink-0 size-[48px] overflow-clip ...">...</div>

  {/* 텍스트 컬럼: flex-1, 아이템명(위) + txId(아래) */}
  <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px self-stretch">
    <div className="... text-[#a7c1e1] text-[16px] font-bold shrink-0">아이템명</div>
    <div className="... text-[#44494e] text-[12px] overflow-hidden text-ellipsis w-full shrink-0">txId</div>
  </div>
</div>

{/* ❌ 잘못된 구조 — text-right를 오른쪽 배치로 해석 */}
<div className="flex items-start justify-between w-full">
  <div>아이콘</div>
  <span>txId</span>
  <span className="ml-auto">아이템명</span>  {/* 절대 금지 */}
</div>
```

레이아웃·색상·크기는 `get_design_context` 결과를 그대로 따른다.

### 아이콘 썸네일
아이템 종류마다 다른 Figma 에셋 이미지를 사용한다. `get_design_context` 결과에서 각 아이템의 아이콘 에셋 URL을 확인하고 그대로 적용할 것.

| 아이템 종류 | Figma 에셋 |
|------------|-----------|
| Energy (50/20/40) | 에너지 번개 아이콘 |
| T1 Jersey (Seoha) | 유니폼 실루엣 아이콘 |
| T1 Panel | 패널 아이콘 |
| Sticker No.32 | 스티커 아이콘 (회전 적용) |

---

## 목 데이터

```ts
const MOCK_PURCHASES = [
  { name: '50 Energy',        icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy',        icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '40 Energy',        icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Jersey (Seoha)',icon: 'jersey',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Panel',         icon: 'panel',   txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'Sticker No.32',    icon: 'sticker', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy',        icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
]
```
