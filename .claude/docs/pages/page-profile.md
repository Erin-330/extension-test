# 페이지 스펙: 프로필 `/profile`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 컴포넌트 | `ProfilePage` |
| 파일 | `src/pages/profile/index.tsx` |
| Figma node-id | `197:35086` |
| fileKey | `FR0ELVIB6XF3dHidbEqBdz` |

**구현 전 반드시 `get_screenshot(node-id: 197:35086)` + `get_design_context(node-id: 197:35086)`를 병렬 호출한다.**
`get_screenshot` 캡처가 유일한 레이아웃 기준 — 섹션 순서·간격·크기 임의 변경 금지. 스펙 설명과 스크린샷이 다르면 스크린샷을 따른다.

---

## ⚠️ 구현 시 반드시 지켜야 할 규칙

### 메뉴 아이템 아이콘 — Figma Icons_UI 구조를 그대로 사용

**`get_design_context` 가 반환한 Icons_UI 블록 전체 구조를 그대로 복사한다.**
img 태그만 꺼내서 쓰는 것은 절대 금지 — Figma는 `overflow-clip` 컨테이너 → `absolute inset` 중간 레이어 → `img` 순의 3단 구조를 사용하며, 이 구조가 아이콘을 올바른 크기로 클리핑한다.

```tsx
{/* ✅ Figma 구조 그대로 — overflow-clip 컨테이너가 절대 위치 이미지를 클리핑 */}
<div className="overflow-clip relative shrink-0 size-[28px]">   {/* Icons_UI 컨테이너 */}
  <div className="absolute inset-[...]">                        {/* Figma inset 레이어 */}
    <img alt="" className="absolute block inset-0 max-w-none size-full" src={assetUrl} />
  </div>
</div>

{/* ❌ img만 추출 — overflow-clip 없어서 이미지가 원본 크기(수십 px)로 카드를 뒤덮음 */}
<img src={assetUrl} className="w-[28px] h-[28px]" />
```

> Figma가 바뀌면 `get_design_context`를 재호출하면 된다. 수치를 MD에 박지 않는 이유가 이것이다.

---

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
