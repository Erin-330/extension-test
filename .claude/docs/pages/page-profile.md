# 페이지 스펙: 프로필 `/profile`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 컴포넌트 | `ProfilePage` |
| 파일 | `src/pages/profile/index.tsx` |
| Figma node-id | `197:35086` |
| fileKey | `FR0ELVIB6XF3dHidbEqBdz` |

**구현 전 반드시 `get_design_context(node-id: 197:35086)`를 호출하고, 그 결과를 그대로 구현한다.**

---

## ⚠️ 구현 시 반드시 지켜야 할 규칙

### 아바타 (Profile with Frame)

Figma 코드에 `absolute contents` 래퍼가 중첩되어 있으나, `display: contents`는 박스를 생성하지 않으므로 무시한다.  
IconUser의 실제 inset은 **최상위 `relative size-[96px]` 기준 `inset-[0.41%_0_-0.41%_0]`** 이다.

```tsx
<div className="relative shrink-0 size-[96px]">
  {/* ✅ 올바른 구현 */}
  <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
    <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
      <img ... />  {/* Union 유저 실루엣 */}
    </div>
  </div>
  <div className="absolute inset-[0.41%_0_-0.41%_0]">
    <img ... />  {/* GradeBorder */}
    <div className="absolute inset-[5%]"><img ... /></div>   {/* highLight Stroke */}
    <div className="absolute inset-[6%]"><img ... /></div>   {/* innerLine Stroke */}
  </div>
</div>
```

- `inset-[3.98%_3.57%_3.16%_3.57%]` 은 contents 래퍼 값 — **절대 사용 금지**
- `rounded-full` 없으면 회색 사각형이 GradeBorder 밖으로 삐져나옴

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
| `PAGES.MAIN` | 외부 헤더 X 버튼, UI Header 닫기(ButtonCloseMod) |
| `PAGES.FOLLOW_LEAGUE` | Follow Team & Player 메뉴 항목 |
| `PAGES.PURCHASE_LIST` | Purchase List 메뉴 항목 |
