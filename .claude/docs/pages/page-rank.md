# 페이지 스펙: 랭킹 `/rank`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 컴포넌트 | `RankPage` |
| 파일 | `src/pages/rank/index.tsx` |
| Figma node-id | `212:31020` |
| fileKey | `FR0ELVIB6XF3dHidbEqBdz` |

**구현 전 반드시 `get_design_context(node-id: 212:31020)`를 호출하고, 그 결과를 그대로 구현한다.**

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.MAIN` | UI Header 닫기(ButtonCloseMod) |

---

## ⚠️ Figma와 반드시 일치해야 하는 항목

### ⚠️ 너비 100% 필수

랭킹 페이지의 **모든 컨테이너·행·카드는 반드시 `w-full`** 이어야 한다.
`flex` 자식 요소에 `w-full`이 누락되면 콘텐츠가 화면 너비를 채우지 못한다.

```tsx
{/* ✅ */}
<div className="w-full flex items-center ...">

{/* ❌ — w-full 없으면 콘텐츠가 좁아짐 */}
<div className="flex items-center ...">
```

### UI Header
- 왼쪽: X 닫기 버튼, 오른쪽: 정보(i) 버튼
- 버튼 외형·에셋은 `get_design_context` 결과 그대로

### 월 선택 드롭다운
- 흰 배경에 테두리가 있는 드롭다운 형태 (현재 구현의 굵은 텍스트와 다름)
- 화살표 아이콘 + "Dec. 2025" 텍스트, 디자인은 Figma 그대로

### Top 5 바 차트
- **바는 반드시 Figma 에셋 이미지(Rectangle)로 렌더링. 커스텀 컬러 div 사용 금지**
- 바 표시 순서(왼→오): 4th → 2nd → 1st → 3rd → 5th
- 각 바 내부에 순위(1st/2nd…), 구분선, 점수 표시
- 레이아웃·크기·색상 Figma 그대로

### My Ranking 카드
- 바 차트 아래, 그레이드 섹션 위에 별도 카드로 위치
- 보라색(#9ca3f1) 헤더 + 내 정보 행으로 구성
- Figma 디자인 그대로

### 그레이드 섹션

#### ⛔ 등급 아이콘 — 반드시 Figma 에셋 원본 크기로 표시

각 섹션 헤더 왼쪽의 등급 아이콘(Diamond 💎, Platinum, Gold 등)은 **`get_design_context`가 반환한 에셋 URL을 `<img />`로 렌더링**한다.

- 아이콘에 임의 `w-` / `h-` 크기 지정 금지 — Figma에서 추출한 크기 그대로 사용
- 아이콘이 작게 나오는 원인 1순위: 부모 컨테이너가 `flex` + `items-center`인데 `<img>`에 크기 미지정 → 브라우저가 0×0 또는 매우 작게 렌더링
- 반드시 `<img src={...} width={W} height={H} />` 형태로 Figma 추출 크기를 명시

```tsx
{/* ✅ Figma 추출 크기 명시 */}
<img src="https://www.figma.com/api/mcp/asset/..." width={32} height={32} className="shrink-0" />

{/* ❌ 크기 미지정 — 아이콘이 찌그러지거나 거의 안 보임 */}
<img src="https://www.figma.com/api/mcp/asset/..." />
```

- 각 섹션 헤더: 그라디언트 배경 + 등급 아이콘(Figma 크기 명시) + 등급명 텍스트
- 아이템 행: 순위 | 아바타(size-[20px]) | 이름 | 왼쪽스탯 | 수직구분선 | 오른쪽스탯
- **아바타는 반드시 size-[20px]** — 현재 구현의 size-[28px] 사용 금지
- **Platinum 섹션의 rank 9 "Andy" 행은 보라색 배경 + 흰 텍스트** (내 위치 강조)
- 수직 구분선은 Figma 에셋 이미지 사용

---

## 목 데이터 (Figma 기준)

| 섹션 | 항목 | rank | name | leftStat | rightStat |
|------|------|------|------|----------|-----------|
| My Ranking | — | 9 | andy13 | L4 | W6 |
| Diamond | — | 6 | namcheondong | W3 | W8 |
| Diamond | — | 7 | kkkim | L2 | W7 |
| Platinum | — | 8 | OrangeCan | W1 | W7 |
| Platinum | ★내위치 | 9 | Andy | W4 | W6 |
| Platinum | — | 10 | Zammin | W2 | W6 |
| Gold | — | 11~14 | TrumpKing 외 | … | … |
| Silver | — | 15~18 | TrumpKing 외 | … | … |
| Bronze | — | 19~22 | TrumpKing 외 | … | … |
| Participant | — | - | Asde, rodkdufs 외 | L3/L2 | W1 |
