# Profile Page

**File:** `profile.html`
**Last updated:** 2026-05-27

---

## Overview

로그인한 유저의 개인 프로필 화면. 상단 정보 카드 + 등급 + 활동 타일 + 출석 캘린더 + 메뉴 리스트로 구성.

---

## Layout

```
┌─────────────────────────────┐
│  RORR                [☀️][⚙] │  sticky top nav
├─────────────────────────────┤
│      [Profile Image]        │
│         Erin                │  nickname
│    erin@rorr.club           │  email
│  [ ⚡ Energy  320 ] [ 🚀 Boost 5 ]  │  resource cards
│    142 예측 | 68% | 24 연속    │  stats row
│      [ 프로필 편집 ]           │
├─────────────────────────────┤
│  등급                        │
│  [G] Gold     4,680점        │
│  ████████░░  Gold→Platinum   │
├─────────────────────────────┤
│  활동                        │
│  [Quiz 38] [Boosterwall 12] │
│  [Boost ×5] [Spark 97]      │
├─────────────────────────────┤
│  출석 스트릭  🔥 24일 연속       │
│  월 화 수 목 금 토 일           │
│  [ ][ ][✓][ ][🔥][ ][ ]     │
├─────────────────────────────┤
│  ⭐  Follow Team & Player  › │
│  🛒  Purchase List          › │
│  🚀  Boost List             › │
│  ─────────────────           │
│  🔗  dev-app.rorr.club    ↗  │
│  📄  Terms of Use           › │
│  🔒  Privacy Policy         › │
└─────────────────────────────┘
│  🏠홈  ⚽매치  🏆리그  👤프로필  │  bottom tab bar
```

---

## Sections

### Profile Hero

| Element | Detail |
|---|---|
| Profile image | 80×80 circle, gradient ring border (`gradient-ai-profile-border`), `img` tag with fallback initial |
| Nickname | `sub-title` (24px / 600), color `text-0` |
| Email | `chat` (14px / 400), color `text-50` |
| Energy card | `⚡` icon, label "ENERGY", value (tabular-nums) — teal accent (`#00b395`) |
| Boost card | `🚀` icon, label "BOOST", value (tabular-nums) — secondary accent (`secondary`) |
| Stats row | 예측 / 적중률 / 연속, separated by 1px dividers |
| Edit button | Ghost style, `primary` text, `button-border` border |

### Grade Card

| Element | Detail |
|---|---|
| Medal | 56×56 circle, `gradient-gold`, bold initial |
| Tier label | UPPERCASE, `description-2` (16px / 700) |
| Sub text | `annotation` (12px / 400), color `text-50` |
| Score | 24px / 700, color `primary`, tabular-nums |
| Progress bar | 8px height, `gradient-gold` fill, labels on both ends |

### Activity Tiles (2×2 grid)

| Tile | Gradient | Value |
|---|---|---|
| Quiz | `gradient-quiz` | 38 |
| Boosterwall | `gradient-boosterwall` | 12 |
| Boost Energy | `gradient-boost` | ×5 |
| Spark | `gradient-spark` | 97 |

### Streak Calendar

- 7-column grid, `streakcalendar-bold` (8px / 700) font
- Cell states: `default` `surface2-alt` / `done` `primary` / `today` `success` with ring / `flame` `gradient-spark`

### Menu List

Ordered list, each item: icon (36×36 pill) + label + chevron.

| Item | Icon bg | Label style |
|---|---|---|
| Follow Team & Player | blue tint | `description-16` (16px / 400) |
| Purchase List | orange tint | `description-16` |
| Boost List | purple tint | `description-16` |
| *(group divider)* | | |
| dev-app.rorr.club | green tint | `chat` (14px / 400), `text-50`, external link icon |
| Terms of Use | `surface2-alt` | `chat`, `text-50` |
| Privacy Policy | `surface2-alt` | `chat`, `text-50` |

---

## Tokens used

| Element | Token |
|---|---|
| Page background | `background-light` |
| Cards | `surface` + `shadow-light-surface` |
| Avatar ring | `gradient-ai-profile-border` |
| Energy card bg | `#00b395` 12% tint |
| Boost card bg | `secondary` 12% tint |
| Grade medal | `gradient-gold` |
| Progress fill | `gradient-gold` |
| Activity tiles | `gradient-quiz`, `gradient-boosterwall`, `gradient-boost`, `gradient-spark` |
| Streak flame | `gradient-spark` |
| Streak done | `primary` |
| Streak today | `success` |
| Menu border | `border` |
| Chevron | `text-80-sub-text-light` |

---

## Navigation

- **Top nav:** RORR logo (links to login.html), theme toggle, settings icon
- **Bottom tab bar:** 홈 / 매치 / 리그 / 프로필 (active)
- Dark/light theme persisted to `localStorage`
