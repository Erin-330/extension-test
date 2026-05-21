# 페이지 스펙: 구매 내역 `/purchase-list`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 컴포넌트 | `PurchaseListPage` |
| 파일 | `src/pages/purchase/list/index.tsx` |
| Figma node-id | `1767:73369` |
| fileKey | `FR0ELVIB6XF3dHidbEqBdz` |

**구현 전 반드시 `get_design_context(node-id: 1767:73369)`를 호출하고, 그 결과를 그대로 구현한다.**

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
**현재 구현(가로 한 줄)과 완전히 다름. Figma는 2행 세로 구조.**

- 1행: 아이콘(48px 정사각형 테두리 박스) + 아이템명 + txId
- 2행: 날짜(우측 정렬) + 클록 아이콘 + 경과 시간(우측 정렬)

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
