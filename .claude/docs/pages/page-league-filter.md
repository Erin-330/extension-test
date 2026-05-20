# 페이지 스펙: 리그 필터 `/league-filter`

## 기본 정보
| 항목 | 내용 |
|------|------|
| 라우트 | `/league-filter` |
| 컴포넌트 | `LeagueFilterPage` |
| 파일 | `src/pages/schedule/league-filter/index.tsx` |
| 인증 필요 | O |
| 목적 | 스케줄 페이지에서 볼 리그 필터 선택 |

## 피그마
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*

---

## 레이아웃 구조

```
<PageScrollLayout>
  ┌─────────────────────────────────────────────────┐
  │ <AppHeader>                                     │
  │   left: [CloseIcon → SCHEDULE]                  │
  │   center: "리그 선택"                            │
  ├─────────────────────────────────────────────────┤
  │                                                 │
  │  [로딩 중]: <LoadingRive>                        │
  │                                                 │
  │  [리그 목록]: flex flex-col gap-3 p-4            │
  │    {leagues.map →                               │
  │      <LeagueSelectButton                        │
  │        leagueName={league.name}                 │
  │        annotation={league.slug}                 │
  │        leagueImgUrl={league.image_url}          │
  │        isActive={selectedLeagueId === league.league_id} │
  │        isBoostAvailable={league.boostYN === 'Y'}│
  │        onClick={() => handleSelect(league.league_id)} │
  │      />                                         │
  │    }                                            │
  │                                                 │
  ├─────────────────────────────────────────────────┤
  │ [하단 고정 완료 버튼]                             │
  │   <button onClick={handleDone}                  │
  │     className="fixed bottom-4 ...">완료</button>│
  └─────────────────────────────────────────────────┘
```

---

## 상태 관리

### 로컬 State
| 상태 | 타입 | 초기값 | 설명 |
|------|------|--------|------|
| `selectedLeagueId` | `string` | `localStorage['LoL_leagueS'] ?? 'LoL_OF_98767991310872058'` | 선택된 리그 ID |

### localStorage
- 키: `'LoL_leagueS'`
- 기본값: `'LoL_OF_98767991310872058'` (LCK)

---

## API 호출

### `POST /schedules/getLeaguesForLoL`
```ts
// Request: {}
// Response data: LeagueForLoLDto[]
{
  league_id: string
  name: string
  slug: string          // 리그 약어 annotation
  image_url: string
  sports_type: string
  created_date: string
  updated_date: string
}
```
TanStack Query 키: `['leagues', 'lol']`

---

## 이벤트 핸들러

### `handleSelect(leagueId: string)`
```ts
setSelectedLeagueId(leagueId)
```

### `handleDone()`
```ts
localStorage.setItem('LoL_leagueS', selectedLeagueId)
setPage(PAGES.SCHEDULE)
```

---

## LeagueSelectButton props
```ts
{
  leagueName: string       // 리그명
  annotation: string       // slug (약어)
  leagueImgUrl: string
  isActive: boolean        // 현재 선택됨
  isBoostAvailable: boolean
  selectedCount?: number   // (이 페이지에서는 불필요)
  onClick: () => void
}
```

---

## 네비게이션

| 목적지 | 트리거 |
|--------|--------|
| `PAGES.SCHEDULE` | 헤더 CloseIcon / 완료 버튼 |
