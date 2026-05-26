# 페이지 스펙: 프로필 `/profile`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 컴포넌트 | `ProfilePage` |
| 파일 | `src/pages/profile/index.tsx` |
| Figma node-id | `7582:48955` |
| fileKey | `FR0ELVIB6XF3dHidbEqBdz` |

**구현 전 반드시 `get_screenshot(node-id: 7582:48955)`를 호출한다.**

---

## 목 데이터

```ts
const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.MAIN` | UI Header 닫기(ButtonCloseMod) |
| `PAGES.FOLLOW_LEAGUE` | Follow Team & Player 메뉴 항목 |
| `PAGES.PURCHASE_LIST` | Purchase List 메뉴 항목 |
