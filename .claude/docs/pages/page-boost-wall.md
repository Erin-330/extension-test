# 페이지 스펙: 부스트 월 `/boost-wall`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/boost-wall` |
| 컴포넌트 | `BoostWallPage` |
| 파일 | `src/pages/boost-wall/index.tsx` |
| 인증 필요 | O |
| 진입 방법 | `/schedule/detail` 내 부스트 월 버튼 |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## Location State
```ts
{
  match_id: string
}
```

---

## 레이아웃 구조

```
<div className="relative h-[100dvh] overflow-hidden bg-background">
  ┌─────────────────────────────────────────────────┐
  │ <BoostWallConfettiRive />                       │  ← 배경 파티클 애니메이션 (Rive)
  │                                                 │
  │ <AppHeader>                                     │
  │   left: [BackIcon → SCHEDULE_DETAIL]            │
  │   center: "BOOST WALL"                          │
  ├─────────────────────────────────────────────────┤
  │ [로딩 중]: <LoadingRive> (중앙)                  │
  │                                                 │
  │ [데이터 있음]:                                   │
  │   <div className="flex flex-col gap-6 p-4       │
  │     overflow-y-auto">                           │
  │                                                 │
  │     [level1 섹션] — 최고 부스터                  │
  │       <Level1Section>                           │
  │         상위 뱃지 (왕관 아이콘 등)               │
  │         {level1.map → <BoostWallUserCard>}      │
  │                                                 │
  │     [level2 섹션]                               │
  │       <Level2Section>                           │
  │         {level2.map → <BoostWallUserCard>}      │
  │                                                 │
  │     [level3 섹션]                               │
  │       <Level3Section>                           │
  │         {level3.map → <BoostWallUserCard>}      │
  │                                                 │
  └─────────────────────────────────────────────────┘
```

---

## 상태 관리

### TanStack Query (`useBoostWall`)
```ts
// features/schedule/model/hooks/useBoostWall.ts
useBoostWall(matchId: string)
→ { data: GetBoostWallResponse, isLoading, isError }
// POST /donation/getBoostWall { match_id }
```

---

## API 호출

### `POST /donation/getBoostWall`
```ts
{ match_id: state.match_id }

// Response data:
{
  level1: BoostWallBoostInfo[]
  level2: BoostWallBoostInfo[]
  level3: BoostWallBoostInfo[]
}

// BoostWallBoostInfo:
{
  UserID: string
  boost_level: string
  displayname: string
  totAmount: string     // 총 에너지 (문자열)
}
```

---

## BoostWallUserCard 표시

```
[유저 아바타 이미지 (없으면 기본 이미지)]
[displayname]
[totAmount 에너지 + BoostIcon]
```

---

## Level별 표시 차이

| Level | 강조 방식 |
|-------|---------|
| level1 | 왕관/1위 아이콘, 더 크게 표시 |
| level2 | 2위 아이콘, 중간 크기 |
| level3 | 3위 아이콘 또는 일반 목록 |

---

## BoostWallConfettiRive

```tsx
// shared/ui/BoostWallConfetti/BoostWallConfettiRive.tsx
// Rive 파티클 애니메이션, 페이지 진입 시 자동 재생
<BoostWallConfettiRive />
// position: absolute, 전체 배경 덮음
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.SCHEDULE_DETAIL` | 헤더 BackIcon |

---

## 빈 상태 / 에러

| 상황 | 표시 |
|------|------|
| isLoading | `<LoadingRive>` 중앙 |
| level1/2/3 모두 빈 배열 | 빈 부스트 월 안내 메시지 |
