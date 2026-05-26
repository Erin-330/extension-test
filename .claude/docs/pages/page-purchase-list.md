# 페이지 스펙: 구매 내역 `/purchase-list`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 컴포넌트 | `PurchaseListPage` |
| 파일 | `src/pages/purchase/list/index.tsx` |
| Figma node-id | `7582:48961` |
| fileKey | `FR0ELVIB6XF3dHidbEqBdz` |

**구현 전 반드시 `get_screenshot(node-id: 7582:48961)`를 호출한다.**

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.PROFILE` | UI Header 닫기(ButtonCloseMod) |

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
