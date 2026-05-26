# Design System

> Single-file reference for the RORR design system. Bilingual (한국어 / English) product. Pretendard Variable typeface. Explicit dark-mode via paired `*-dark` tokens.
>
> **This file is self-contained.** Every token value, every code snippet, and every component spec needed to implement the system lives in this one document. Hand it to Claude Code and it has everything.

**Last updated:** 2026.05.26 · **Version:** 1.0

---

## Table of contents

- [1. Foundations — Color](#1-foundations--color)
  - [1.1 Brand](#11-brand)
  - [1.2 Status](#12-status)
  - [1.3 Surface](#13-surface)
  - [1.4 Background](#14-background)
  - [1.5 Border](#15-border)
  - [1.6 Text](#16-text)
  - [1.7 Button — Light](#17-button--light)
  - [1.8 Button — Dark](#18-button--dark)
  - [1.9 Team — Left](#19-team--left)
  - [1.10 Team — Right](#110-team--right)
  - [1.11 AI Companion](#111-ai-companion)
  - [1.12 Boost Energy](#112-boost-energy)
  - [1.13 Misc](#113-misc)
- [2. Foundations — Gradients](#2-foundations--gradients)
- [3. Foundations — Typography](#3-foundations--typography)
- [4. Foundations — Effects](#4-foundations--effects)
- [5. Theming & Dark mode](#5-theming--dark-mode)
- [6. Components](#6-components)
  - [6.1 Button](#61-button)
  - [6.2 Form controls](#62-form-controls)
  - [6.3 Status pill & Score](#63-status-pill--score)
  - [6.4 Team match card](#64-team-match-card)
  - [6.5 AI Companion panel](#65-ai-companion-panel)
  - [6.6 Feature tiles](#66-feature-tiles)
  - [6.7 Streak calendar](#67-streak-calendar)
  - [6.8 Grade badges](#68-grade-badges)
- [7. Motion](#7-motion)
- [8. Accessibility](#8-accessibility)
- [9. Implementation](#9-implementation)

---

## 1. Foundations — Color

68 solid color tokens, organized by semantic group. All values are hex; `RRGGBBAA` indicates alpha. Tokens that have an explicit `-dark` sibling swap automatically when `[data-theme="dark"]` is set on `<html>` or `<body>`.

### 1.1 Brand

| Token | Light | Dark | Use |
|---|---|---|---|
| `primary` | `#2d39b4` | `#4d57d9` | Primary CTA, brand emphasis |
| `secondary` | `#6f4cff` | `#8c6eff` | Secondary surfaces, gradient stops |
| `accent` | `#ff6f00` | `#ffb400` | Spark / sparkle / orange highlights |
| `selected` | `#209fee` | `#4db2f1` | Selection state, focus highlight |

### 1.2 Status

| Token | Value | Use |
|---|---|---|
| `success` | `#11c72d` | Success state |
| `success-dark` | `#2fd948` | Success on dark surfaces |
| `success-surface` | `#c3c7ef` | Success card / muted success bg |
| `error` | `#860000` | Error text / icon |
| `status-color-upcoming` | `#5618da` | Upcoming match indicator |
| `status-color-live` | `#c10f0f` | LIVE pulse, real-time indicator |
| `score-color` | `#9ca3f1` | Scoreline numerals (light) |
| `score-color-dark` | `#555b83` | Scoreline numerals (dark) |

### 1.3 Surface

| Token | Light | Dark | Use |
|---|---|---|---|
| `surface` | `#ffffff` | `#161c26` | Primary card / sheet surface |
| `surface-alt` | `#dce2eb` | `#202a38` | Subdued surface, fills |
| `surface2-alt` | `#e9eef4` | `#1e2630` | Surface above `surface` (nested) |
| `surface-floating` | `#ffffffb2` | `#24282d99` | Translucent floating panels (glass) |
| `surface-border-in-dark-mode` | — | `#191f28` | 1px hairlines on dark cards |

### 1.4 Background

| Token | Value | Use |
|---|---|---|
| `background-light` | `#f0f2f5` | Page bg (light) |
| `background-light-half` | `#f0f2f580` | Page bg @ 50% (modal scrim) |
| `background-dark` | `#0e1116` | Page bg (dark) |
| `background-dark-half` | `#0e111680` | Page bg @ 50% (modal scrim on dark) |
| `background-b-30` | `#0000004d` | Black @ 30% — generic overlay |

### 1.5 Border

| Token | Value | Use |
|---|---|---|
| `border` | `#ced6e6` | Default border |
| `border-dark` | `#282f3d` | Default border on dark surfaces |

### 1.6 Text

| Token | Value | Use |
|---|---|---|
| `text-0` | `#000000` | Strong text on light surfaces |
| `text-30-sub-text-dark` | `#44494e` | Sub-text on light |
| `text-50` | `#757b90` | Tertiary / muted text (both modes) |
| `text-80-sub-text-light` | `#bbbfd0` | Sub-text on dark |
| `text-90` | `#e6eaf0` | Body text on dark |
| `text-100` | `#ffffff` | Strong text on dark |

### 1.7 Button — Light

| Token | Value | State |
|---|---|---|
| `button` | `#969cda` | Default fill |
| `button-border` | `#c1c5ec` | Default border |
| `button-hover` | `#afb5ea` | Hover fill |
| `button-press` | `#c1c5ec` | Active / pressed fill |
| `button-disable` | `#b2bac3` | Disabled fill |

### 1.8 Button — Dark

| Token | Value | State |
|---|---|---|
| `button-dark` | `#3c5bff` | Default fill (dark mode) |
| `button-dark-border` | `#637cff` | Border (dark mode) |
| `button-disable-dark` | `#30353b` | Disabled fill (dark mode) |

### 1.9 Team — Left

Cool / blue side.

| Token | Value | Use |
|---|---|---|
| `team-color-left` | `#2f9cfc` | Primary team color |
| `team-color-left-50` | `#c0e1fe` | 50% tint (badge bg) |
| `team-color-left-btn-normal` | `#cedaef` | Team-affiliated button (default) |
| `team-color-left-btn-hover` | `#a4c6e5` | Team button (hover) |
| `team-color-left-btn-press` | `#acd7fe` | Team button (pressed) |

### 1.10 Team — Right

Warm / pink side.

| Token | Value | Use |
|---|---|---|
| `team-color-right` | `#fe2054` | Primary team color |
| `team-color-right-50` | `#ffbccb` | 50% tint |
| `team-color-right-btn-normal` | `#dfc3ca` | Team button (default) |
| `team-color-right-btn-hover` | `#d99dab` | Team button (hover) |
| `team-color-right-btn-press` | `#ffa6bb` | Team button (pressed) |

### 1.11 AI Companion

| Token | Value | Use |
|---|---|---|
| `ai-companion-bg` | `#1d2333` | AI panel background (always dark) |
| `ai-popup-surface` | `#ffffff26` | Translucent overlay inside panel |
| `ai-popup-color` | `#2562b2` | Gradient stop A |
| `ai-popup-color-2nd` | `#3991c0` | Gradient stop B |
| `ai-area-btn-hover` | `#8398f7` | AI button hover |
| `ai-area-btn-alarm` | `#138dff80` | Pulsing alarm indicator |
| `ai-area-btn-disable` | `#3c3e45` | AI button disabled |

### 1.12 Boost Energy

| Token | Value | State |
|---|---|---|
| `boost-energy-4-icon` | `#00b395` | Default |
| `boost-energy-4-icon-hover` | `#26bea5` | Hover |
| `boost-energy-4-icon-press` | `#4ccab5` | Pressed |

### 1.13 Misc

| Token | Value | Use |
|---|---|---|
| `item-color` | `#a7c1e1` | Generic item / chip color |
| `white-100` | `#ffffff` | Pure white |
| `black-100` | `#000000` | Pure black |

---

## 2. Foundations — Gradients

19 linear gradients, all `135deg`. **Note:** these are reconstructed from semantic names + adjacent solid tokens (the original Figma export shipped names only). Verify against Figma before treating as canonical.

| Token | Value |
|---|---|
| `ai-area-btn-color` | `linear-gradient(135deg, #2562b2 0%, #3991c0 100%)` |
| `ai-profile-border` | `linear-gradient(135deg, #2562b2 0%, #3991c0 50%, #6f4cff 100%)` |
| `spark-color` | `linear-gradient(135deg, #ff6f00 0%, #ffb400 100%)` |
| `quiz-color` | `linear-gradient(135deg, #6f4cff 0%, #8c6eff 100%)` |
| `quiz-color-hover` | `linear-gradient(135deg, #8c6eff 0%, #afa1ff 100%)` |
| `quiz-color-press` | `linear-gradient(135deg, #5638e0 0%, #6f4cff 100%)` |
| `boost-energy-4-bg` | `linear-gradient(135deg, #00b395 0%, #26bea5 100%)` |
| `boost-energy-4-bg-hover` | `linear-gradient(135deg, #26bea5 0%, #4ccab5 100%)` |
| `boost-energy-4-bg-press` | `linear-gradient(135deg, #4ccab5 0%, #00b395 100%)` |
| `boosterwall` | `linear-gradient(135deg, #2d39b4 0%, #6f4cff 100%)` |
| `boosterwall-hover` | `linear-gradient(135deg, #4d57d9 0%, #8c6eff 100%)` |
| `boosterwall-press` | `linear-gradient(135deg, #1f2890 0%, #5638e0 100%)` |
| `grade-top-5` | `linear-gradient(135deg, #ff6f00 0%, #ffb400 45%, #6f4cff 100%)` |
| `grade-diamond` | `linear-gradient(135deg, #4db2f1 0%, #c0e1fe 50%, #e6eaf0 100%)` |
| `grade-platinum` | `linear-gradient(135deg, #bbbfd0 0%, #e6eaf0 100%)` |
| `grade-gold` | `linear-gradient(135deg, #ff6f00 0%, #ffb400 100%)` |
| `grade-silver` | `linear-gradient(135deg, #757b90 0%, #bbbfd0 100%)` |
| `grade-bronze` | `linear-gradient(135deg, #860000 0%, #ff6f00 100%)` |
| `grade-participant` | `linear-gradient(135deg, #44494e 0%, #757b90 100%)` |

---

## 3. Foundations — Typography

**Font:** Pretendard Variable. Free, SIL OFL 1.1, Korean + Latin coverage.

**Web install:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css">
```

**Native:** ship the OTF/TTF in `assets/fonts/`. ([orioncactus/pretendard](https://github.com/orioncactus/pretendard))

**Font stack:**
```css
font-family: "Pretendard Variable", "Pretendard",
  -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, sans-serif;
```

### 14 text styles

| Token | Weight | Size | Line-height | Letter | Notes |
|---|---|---|---|---|---|
| `title` | 700 | 32px | normal | 0 | Page-level title |
| `header` | 600 | 28px | 1.5 | 0 | Section header |
| `sub-title` | 600 | 24px | 1.5 | 0 | Sub-section / card title |
| `teamname` | 700 | 20px | normal | 0 | Team name display |
| `description-2` | 700 | 16px | 20px | 0 | Body, emphasized |
| `description-16` | 400 | 16px | 20px | 0 | Default body |
| `description-focused` | 700 | 16px | 1.2 | 0 | **UPPERCASE** emphasis |
| `chat` | 400 | 14px | 20px | 0 | Chat / regular body |
| `description` | 300 | 14px | 20px | 0 | Light secondary copy |
| `annotation-bold` | 700 | 12px | 1.2 | 0 | Caption, emphasized |
| `annotation` | 400 | 12px | 1.2 | 0 | Captions, meta |
| `streakcalendar-bold` | 700 | 8px | normal | 0 | Streak grid (emphasized) |
| `streakcalendar` | 400 | 8px | normal | 0 | Streak grid |
| `text-4-icon` | 700 | 8px | normal | 0 | Icon-adjacent label |

**Numerals:** for scores, percentages, clocks, and tabular data, always use `font-variant-numeric: tabular-nums`. For oversized scores (≥56px), tighten with `letter-spacing: -0.02em` to `-0.04em`.

---

## 4. Foundations — Effects

```css
--shadow-light-surface:   0px 2px 4px 0px rgba(0, 0, 0, 0.08);
--shadow-light-surface-2: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
--shadow-dark-surface:    0px 2px 4px 0px rgba(255, 255, 255, 0.06);
--shadow-live-card:       0px 2px 4px 0px rgba(86, 24, 218, 0.20);
--floating-effect:        0px 2px 6px 0px rgba(0, 0, 0, 0.15);
--glow-aiareabtn:         0px 0px 8px 0px #138dff;
```

| Token | Use |
|---|---|
| `shadow-light-surface` | Default card shadow on light bg |
| `shadow-light-surface-2` | Tighter, lower-z elevation (chips, mini cards) |
| `shadow-dark-surface` | Upward white-light bloom for dark cards |
| `shadow-live-card` | Purple-tinted shadow for upcoming / live match cards |
| `floating-effect` | Pair with `backdrop-filter: blur(12px)` and `surface-floating` for glass panels |
| `glow-aiareabtn` | AI action button glow (cyan-blue ring) |

---

## 5. Theming & Dark mode

Dark mode is toggled by setting `data-theme="dark"` on `<html>` or `<body>`. Every token that has an explicit `*-dark` sibling overrides automatically — consumers read the base token only.

```css
[data-theme="dark"] {
  --color-primary:     var(--color-primary-dark);
  --color-secondary:   var(--color-secondary-dark);
  --color-accent:      var(--color-accent-dark);
  --color-selected:    var(--color-selected-dark);
  --color-success:     var(--color-success-dark);
  --color-surface:     var(--color-surface-dark);
  --color-surface-alt: var(--color-surface-alt-dark);
  --color-border:      var(--color-border-dark);
  --color-button:      var(--color-button-dark);
  --color-background-light: var(--color-background-dark);
  /* …etc, see tokens.css */
}
```

**Theme hook (React):**
```ts
const [theme, setTheme] = useState<"light" | "dark">(() =>
  (localStorage.getItem("theme") as any) ??
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
);
useEffect(() => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}, [theme]);
```

**Components must never hardcode hex.** Always read `var(--color-*)`. The team colors (`team-color-left`, `team-color-right`) intentionally do **not** swap in dark mode — team identity is mode-independent.

---

## 6. Components

8 component patterns demonstrating how tokens compose into real UI. Recreate these in your codebase using its native primitives — the markup below is illustrative, not the API surface.

### 6.1 Button

5 states × 2 modes. Padding `10px 18px`, `border-radius: 10px`, font `description-2` (16/700). Compact density: drop to `chat` (14/600).

**Light mode:**

| State | Background | Border | Color |
|---|---|---|---|
| Default | `button` `#969cda` | `button-border` `#c1c5ec` | `text-100` |
| Hover | `button-hover` `#afb5ea` | same | same |
| Active | `button-press` `#c1c5ec` | same | same |
| Disabled | `button-disable` `#b2bac3` | same | same |

**Primary CTA:** `primary` bg → `primary-dark` on hover, white text.
**Ghost:** transparent bg, `border`, `primary` text.

**Dark mode:**

| State | Background | Border |
|---|---|---|
| Default | `button-dark` `#3c5bff` | `button-dark-border` `#637cff` |
| Disabled | `button-disable-dark` `#30353b` | same |

```css
.btn {
  font-size: 16px; font-weight: 700;
  padding: 10px 18px;
  border-radius: 10px;
  background: var(--color-primary);
  color: white;
  border: 1px solid var(--color-primary);
  transition: background 120ms;
}
.btn:hover  { background: var(--color-primary-dark); }
.btn:active { transform: translateY(1px); }
.btn[disabled] { background: var(--color-button-disable); cursor: not-allowed; }
```

### 6.2 Form controls

**Input:** `border: 1px solid border`, `border-radius: 10px`, padding `10px 14px`, font `chat` (14/400). Focus = 2px outline `primary @ 25% alpha` + `primary` border.

**Tabs (segmented):** pill container `surface2-alt` bg, `border-radius: 999px`, `padding: 4px`. Active tab: `surface` bg + `primary` text + `shadow-light-surface-2`. Inactive: `text-50`.

### 6.3 Status pill & Score

**Pill:** `border-radius: 999px`, padding `6px 12px`, font `annotation-bold` UPPERCASE. 6px dot indicator before label. Variants: `live` (with 4px glow ring at 18% alpha), `upcoming`, `success`, `error`.

```css
.pill.live {
  background: var(--color-status-color-live);
  color: white;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-status-color-live) 18%, transparent);
}
```

**Score:** `font-weight: 700`, oversized (56–128px), color `primary`, `font-variant-numeric: tabular-nums`. Label uses `annotation` + `text-50`.

### 6.4 Team match card

3-column grid `1fr auto 1fr`, gap `18px`, padding `18px 20px`, `surface` bg, `shadow-light-surface`, `border-radius: 16px`.

- **Crest:** 56×56 circle, `team-color-left/right` bg, white 800 initials.
- **Side label:** small pill using `*-btn-normal` bg + team color text.
- **Score divider:** `28px / 700 / tabular-nums`, `text-30-sub-text-dark`. "VS" line in `annotation` + `text-50` + `0.1em` tracking.

### 6.5 AI Companion panel

```css
.ai-panel {
  background: var(--color-ai-companion-bg);   /* #1d2333 */
  border-radius: 16px;
  padding: 18px;
  color: var(--color-text-90);
}
/* Gradient border ring */
.ai-panel::before {
  content: "";
  position: absolute; inset: -1px;
  border-radius: 17px;
  padding: 1px;
  background: var(--gradient-ai-profile-border);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  pointer-events: none;
}
```

- **Avatar:** 30×30 circle, `linear-gradient(135deg, #2562b2, #6f4cff)`.
- **Message bubble:** `ai-popup-surface` bg, `border-radius: 12px`, padding `12px 14px`, font `chat`, color `text-90`.
- **Action button:** `border-radius: 999px`, padding `7px 12px`, font `annotation-bold`, bg `gradient-ai-area-btn-color`, `glow-aiareabtn` shadow. Hover = `ai-area-btn-hover` flat. Disabled = `ai-area-btn-disable` bg, `text-50` text, no glow.

### 6.6 Feature tiles

2×2 grid of 96px-tall tiles, `border-radius: 14px`, padding `16px`, white text. Each tile uses its feature gradient:

| Tile | Gradient token |
|---|---|
| Quiz | `quiz-color` |
| Boosterwall | `boosterwall` |
| Boost Energy | `boost-energy-4-bg` |
| Spark | `spark-color` |

- Hover: `filter: brightness(1.08)`. Press: swap to `-press` variant.
- Content: uppercase label `annotation-bold` @ 85% opacity + big number `22px / 700 / tabular-nums`.

### 6.7 Streak calendar

7-column grid of square cells, `gap: 4px`, on `surface` bg, padding `14px`, `border-radius: 12px`.

| Cell state | Background | Color |
|---|---|---|
| Default | `surface2-alt` | `text-30-sub-text-dark` |
| Done | `primary` | `text-100` |
| Today | `success` + 2px ring `success @ 25%` | `text-100` |
| Flame | `spark-color` gradient | `text-100` |

Font: `streakcalendar-bold` (8/700).

### 6.8 Grade badges

7 tiers. Medal = 56px circle, white 800-weight initial, dual shadow:

```css
box-shadow:
  inset 0 -3px 6px rgba(0,0,0,0.2),
  0 4px 10px rgba(0,0,0,0.12);
```

Order (highest → lowest):
1. Top 5 — `grade-top-5`
2. Diamond — `grade-diamond`
3. Platinum — `grade-platinum`
4. Gold — `grade-gold`
5. Silver — `grade-silver`
6. Bronze — `grade-bronze`
7. Participant — `grade-participant`

Label: `annotation` 10/700 UPPERCASE, `text-50`.

---

## 7. Motion

Standard timing across the system:

| Transition | Duration | Easing |
|---|---|---|
| Hover state (color/bg) | 120ms | linear |
| Button press | 80ms | linear (`translateY(1px)`) |
| Theme swap | 200ms | ease (on `background-color`, `color`) |
| Card lift / float | 150ms | ease |
| Live pulse | 1.4s | ease-out (`infinite`) |
| Score change | 600ms | `cubic-bezier(0.2, 1.4, 0.3, 1)` (one-shot) |
| Spinner | 700ms | linear (`infinite`) |
| Leader glow | 2.4s | ease-in-out (`infinite`) |

**Reduced motion:** wrap all `infinite` and one-shot pop animations in `@media (prefers-reduced-motion: no-preference)`. Always preserve color/elevation changes (those are state communication, not decoration).

---

## 8. Accessibility

- **Contrast:** body text (`text-30-sub-text-dark` on `background-light`) is 7.4:1 — passes AA + AAA. Team colors on light bg are large-text-only (≥18px or ≥14px bold).
- **Focus:** every interactive element needs visible focus. Default treatment: 2px outline `primary @ 25% alpha` offset by `2px`.
- **Status pill `live`:** add `aria-label="Live now"` because the dot is purely decorative.
- **Score region:** wrap in `aria-live="polite"` so screen readers announce changes — but throttle (don't read every flicker).
- **Animations:** respect `prefers-reduced-motion: reduce` for pulse / pop / glow.
- **Color is never the sole signal:** team identity uses color **and** initials; status uses color **and** label.

---

## 9. Drop-in code

Everything below is ready to paste into a real codebase. Pick the format that matches your stack — CSS variables, TypeScript module, or Tailwind preset. All three produce equivalent results.

### 9.1 CSS custom properties

Save as `tokens.css` and import once globally (`@import "./tokens.css";` at the top of your root stylesheet, or `<link rel="stylesheet">` in `<head>`). Read tokens with `var(--color-primary)`, `var(--shadow-light-surface)`, etc. Dark mode swaps automatically when `[data-theme="dark"]` is set on `<html>` or `<body>`.

```css
/* =============================================================
   Design tokens — CSS custom properties.
   Dark mode is applied automatically when [data-theme="dark"]
   is set on <html> or <body>.
   ============================================================= */

:root {
  /* ---- Brand ---- */
  --color-primary: #2d39b4;
  --color-primary-dark: #4d57d9;
  --color-secondary: #6f4cff;
  --color-secondary-dark: #8c6eff;
  --color-accent: #ff6f00;
  --color-accent-dark: #ffb400;
  --color-selected: #209fee;
  --color-selected-dark: #4db2f1;

  /* ---- Status ---- */
  --color-success: #11c72d;
  --color-success-dark: #2fd948;
  --color-success-surface: #c3c7ef;
  --color-error: #860000;
  --color-status-color-upcoming: #5618da;
  --color-status-color-live: #c10f0f;
  --color-score-color: #9ca3f1;
  --color-score-color-dark: #555b83;

  /* ---- Surface ---- */
  --color-surface: #ffffff;
  --color-surface-alt: #dce2eb;
  --color-surface2-alt: #e9eef4;
  --color-surface-floating: #ffffffb2;
  --color-surface-dark: #161c26;
  --color-surface-alt-dark: #202a38;
  --color-surface2-alt-dark: #1e2630;
  --color-surface-floating-dark: #24282d99;
  --color-surface-border-in-dark-mode: #191f28;

  /* ---- Background ---- */
  --color-background-light: #f0f2f5;
  --color-background-light-half: #f0f2f580;
  --color-background-dark: #0e1116;
  --color-background-dark-half: #0e111680;
  --color-background-b-30: #0000004d;

  /* ---- Border ---- */
  --color-border: #ced6e6;
  --color-border-dark: #282f3d;

  /* ---- Text ---- */
  --color-text-0: #000000;
  --color-text-30-sub-text-dark: #44494e;
  --color-text-50: #757b90;
  --color-text-80-sub-text-light: #bbbfd0;
  --color-text-90: #e6eaf0;
  --color-text-100: #ffffff;

  /* ---- Button (light) ---- */
  --color-button: #969cda;
  --color-button-border: #c1c5ec;
  --color-button-hover: #afb5ea;
  --color-button-press: #c1c5ec;
  --color-button-disable: #b2bac3;

  /* ---- Button (dark) ---- */
  --color-button-dark: #3c5bff;
  --color-button-dark-border: #637cff;
  --color-button-disable-dark: #30353b;

  /* ---- Team — Left ---- */
  --color-team-color-left: #2f9cfc;
  --color-team-color-left-50: #c0e1fe;
  --color-team-color-left-btn-normal: #cedaef;
  --color-team-color-left-btn-hover: #a4c6e5;
  --color-team-color-left-btn-press: #acd7fe;

  /* ---- Team — Right ---- */
  --color-team-color-right: #fe2054;
  --color-team-color-right-50: #ffbccb;
  --color-team-color-right-btn-normal: #dfc3ca;
  --color-team-color-right-btn-hover: #d99dab;
  --color-team-color-right-btn-press: #ffa6bb;

  /* ---- AI Companion ---- */
  --color-ai-companion-bg: #1d2333;
  --color-ai-popup-surface: #ffffff26;
  --color-ai-popup-color: #2562b2;
  --color-ai-popup-color-2nd: #3991c0;
  --color-ai-area-btn-hover: #8398f7;
  --color-ai-area-btn-alarm: #138dff80;
  --color-ai-area-btn-disable: #3c3e45;

  /* ---- Boost Energy ---- */
  --color-boost-energy-4-icon: #00b395;
  --color-boost-energy-4-icon-hover: #26bea5;
  --color-boost-energy-4-icon-press: #4ccab5;

  /* ---- Misc ---- */
  --color-item-color: #a7c1e1;
  --color-white-100: #ffffff;
  --color-black-100: #000000;

  /* ---- Typography ---- */
  --font-family-base: "Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, sans-serif;

  --font-size-title: 32px;
  --font-size-header: 28px;
  --font-size-sub-title: 24px;
  --font-size-teamname: 20px;
  --font-size-description-16: 16px;
  --font-size-description-2: 16px;
  --font-size-description-focused: 16px;
  --font-size-chat: 14px;
  --font-size-description: 14px;
  --font-size-annotation: 12px;
  --font-size-streakcalendar: 8px;
  --font-size-text-4-icon: 8px;

  --line-height-tight: 1.2;
  --line-height-base: 1.5;
  --line-height-20: 20px;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* ---- Effects ---- */
  --shadow-light-surface:   0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  --shadow-light-surface-2: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);
  --shadow-dark-surface:    0px 2px 4px 0px rgba(255, 255, 255, 0.06);
  --shadow-live-card:       0px 2px 4px 0px rgba(86, 24, 218, 0.20);
  --floating-effect:        0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  --glow-aiareabtn:         0px 0px 8px 0px #138dff;

  /* ---- Gradients (synthesized — verify against Figma) ---- */
  --gradient-ai-area-btn-color:       linear-gradient(135deg, #2562b2 0%, #3991c0 100%);
  --gradient-ai-profile-border:       linear-gradient(135deg, #2562b2 0%, #3991c0 50%, #6f4cff 100%);
  --gradient-spark-color:             linear-gradient(135deg, #ff6f00 0%, #ffb400 100%);
  --gradient-quiz-color:              linear-gradient(135deg, #6f4cff 0%, #8c6eff 100%);
  --gradient-quiz-color-hover:        linear-gradient(135deg, #8c6eff 0%, #afa1ff 100%);
  --gradient-quiz-color-press:        linear-gradient(135deg, #5638e0 0%, #6f4cff 100%);
  --gradient-boost-energy-4-bg:       linear-gradient(135deg, #00b395 0%, #26bea5 100%);
  --gradient-boost-energy-4-bg-hover: linear-gradient(135deg, #26bea5 0%, #4ccab5 100%);
  --gradient-boost-energy-4-bg-press: linear-gradient(135deg, #4ccab5 0%, #00b395 100%);
  --gradient-boosterwall:             linear-gradient(135deg, #2d39b4 0%, #6f4cff 100%);
  --gradient-boosterwall-hover:       linear-gradient(135deg, #4d57d9 0%, #8c6eff 100%);
  --gradient-boosterwall-press:       linear-gradient(135deg, #1f2890 0%, #5638e0 100%);
  --gradient-grade-top-5:             linear-gradient(135deg, #ff6f00 0%, #ffb400 45%, #6f4cff 100%);
  --gradient-grade-diamond:           linear-gradient(135deg, #4db2f1 0%, #c0e1fe 50%, #e6eaf0 100%);
  --gradient-grade-platinum:          linear-gradient(135deg, #bbbfd0 0%, #e6eaf0 100%);
  --gradient-grade-gold:              linear-gradient(135deg, #ff6f00 0%, #ffb400 100%);
  --gradient-grade-silver:            linear-gradient(135deg, #757b90 0%, #bbbfd0 100%);
  --gradient-grade-bronze:            linear-gradient(135deg, #860000 0%, #ff6f00 100%);
  --gradient-grade-participant:       linear-gradient(135deg, #44494e 0%, #757b90 100%);
}

/* Dark-mode swaps — override base tokens that have explicit -dark siblings */
[data-theme="dark"] {
  --color-primary:           #4d57d9;
  --color-secondary:         #8c6eff;
  --color-accent:            #ffb400;
  --color-selected:          #4db2f1;
  --color-success:           #2fd948;
  --color-surface:           #161c26;
  --color-surface-alt:       #202a38;
  --color-surface2-alt:      #1e2630;
  --color-surface-floating:  #24282d99;
  --color-border:            #282f3d;
  --color-button:            #3c5bff;
  --color-button-border:     #637cff;
  --color-button-disable:    #30353b;
  --color-score-color:       #555b83;
  --color-background-light:  #0e1116;
}

/* Text style utility classes — optional but handy */
.text-title           { font-family: var(--font-family-base); font-weight: 700; font-size: 32px; letter-spacing: 0; }
.text-header          { font-family: var(--font-family-base); font-weight: 600; font-size: 28px; line-height: 1.5; }
.text-sub-title       { font-family: var(--font-family-base); font-weight: 600; font-size: 24px; line-height: 1.5; }
.text-teamname        { font-family: var(--font-family-base); font-weight: 700; font-size: 20px; }
.text-chat            { font-family: var(--font-family-base); font-weight: 400; font-size: 14px; line-height: 20px; }
.text-description     { font-family: var(--font-family-base); font-weight: 300; font-size: 14px; line-height: 20px; }
.text-description-16  { font-family: var(--font-family-base); font-weight: 400; font-size: 16px; line-height: 20px; }
.text-description-2   { font-family: var(--font-family-base); font-weight: 700; font-size: 16px; line-height: 20px; }
.text-description-focused {
  font-family: var(--font-family-base); font-weight: 700; font-size: 16px; line-height: 1.2;
  text-transform: uppercase;
}
.text-annotation      { font-family: var(--font-family-base); font-weight: 400; font-size: 12px; line-height: 1.2; }
.text-annotation-bold { font-family: var(--font-family-base); font-weight: 700; font-size: 12px; line-height: 1.2; }
.text-streakcalendar       { font-family: var(--font-family-base); font-weight: 400; font-size: 8px; }
.text-streakcalendar-bold  { font-family: var(--font-family-base); font-weight: 700; font-size: 8px; }
.text-4-icon          { font-family: var(--font-family-base); font-weight: 700; font-size: 8px; }
```

### 9.2 TypeScript module

Save as `tokens.ts`. Use in React, React Native, or any JS context for type-safe token references.

```ts
/**
 * Design tokens — TypeScript export.
 *
 * Example:
 *   import { colors, typography, shadows, gradients } from "./tokens";
 *   <View style={{ backgroundColor: colors.primary }} />
 */

export const colors = {
  // Brand
  primary: "#2d39b4",
  primaryDark: "#4d57d9",
  secondary: "#6f4cff",
  secondaryDark: "#8c6eff",
  accent: "#ff6f00",
  accentDark: "#ffb400",
  selected: "#209fee",
  selectedDark: "#4db2f1",
  // Status
  success: "#11c72d",
  successDark: "#2fd948",
  successSurface: "#c3c7ef",
  error: "#860000",
  statusColorUpcoming: "#5618da",
  statusColorLive: "#c10f0f",
  scoreColor: "#9ca3f1",
  scoreColorDark: "#555b83",
  // Surface
  surface: "#ffffff",
  surfaceAlt: "#dce2eb",
  surface2Alt: "#e9eef4",
  surfaceFloating: "#ffffffb2",
  surfaceDark: "#161c26",
  surfaceAltDark: "#202a38",
  surface2AltDark: "#1e2630",
  surfaceFloatingDark: "#24282d99",
  surfaceBorderInDarkMode: "#191f28",
  // Background
  backgroundLight: "#f0f2f5",
  backgroundLightHalf: "#f0f2f580",
  backgroundDark: "#0e1116",
  backgroundDarkHalf: "#0e111680",
  backgroundB30: "#0000004d",
  // Border
  border: "#ced6e6",
  borderDark: "#282f3d",
  // Text
  text0: "#000000",
  text30SubTextDark: "#44494e",
  text50: "#757b90",
  text80SubTextLight: "#bbbfd0",
  text90: "#e6eaf0",
  text100: "#ffffff",
  // Button (light)
  button: "#969cda",
  buttonBorder: "#c1c5ec",
  buttonHover: "#afb5ea",
  buttonPress: "#c1c5ec",
  buttonDisable: "#b2bac3",
  // Button (dark)
  buttonDark: "#3c5bff",
  buttonDarkBorder: "#637cff",
  buttonDisableDark: "#30353b",
  // Team — Left
  teamColorLeft: "#2f9cfc",
  teamColorLeft50: "#c0e1fe",
  teamColorLeftBtnNormal: "#cedaef",
  teamColorLeftBtnHover: "#a4c6e5",
  teamColorLeftBtnPress: "#acd7fe",
  // Team — Right
  teamColorRight: "#fe2054",
  teamColorRight50: "#ffbccb",
  teamColorRightBtnNormal: "#dfc3ca",
  teamColorRightBtnHover: "#d99dab",
  teamColorRightBtnPress: "#ffa6bb",
  // AI Companion
  aiCompanionBg: "#1d2333",
  aiPopupSurface: "#ffffff26",
  aiPopupColor: "#2562b2",
  aiPopupColor2nd: "#3991c0",
  aiAreaBtnHover: "#8398f7",
  aiAreaBtnAlarm: "#138dff80",
  aiAreaBtnDisable: "#3c3e45",
  // Boost Energy
  boostEnergy4Icon: "#00b395",
  boostEnergy4IconHover: "#26bea5",
  boostEnergy4IconPress: "#4ccab5",
  // Misc
  itemColor: "#a7c1e1",
  white100: "#ffffff",
  black100: "#000000",
} as const;

export type ColorToken = keyof typeof colors;

export const typography = {
  fontFamily: '"Pretendard Variable", "Pretendard", -apple-system, system-ui, sans-serif',
  styles: {
    title:              { fontWeight: 700, fontSize: 32, letterSpacing: 0 },
    header:             { fontWeight: 600, fontSize: 28, lineHeight: 1.5 },
    subTitle:           { fontWeight: 600, fontSize: 24, lineHeight: 1.5 },
    teamname:           { fontWeight: 700, fontSize: 20 },
    chat:               { fontWeight: 400, fontSize: 14, lineHeight: 20 },
    description:        { fontWeight: 300, fontSize: 14, lineHeight: 20 },
    description16:      { fontWeight: 400, fontSize: 16, lineHeight: 20 },
    description2:       { fontWeight: 700, fontSize: 16, lineHeight: 20 },
    descriptionFocused: { fontWeight: 700, fontSize: 16, lineHeight: 1.2, textTransform: "uppercase" as const },
    annotation:         { fontWeight: 400, fontSize: 12, lineHeight: 1.2 },
    annotationBold:     { fontWeight: 700, fontSize: 12, lineHeight: 1.2 },
    streakcalendar:     { fontWeight: 400, fontSize: 8 },
    streakcalendarBold: { fontWeight: 700, fontSize: 8 },
    text4Icon:          { fontWeight: 700, fontSize: 8 },
  },
} as const;

export const shadows = {
  lightSurface:  "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
  lightSurface2: "0px 1px 4px 0px rgba(0, 0, 0, 0.10)",
  darkSurface:   "0px 2px 4px 0px rgba(255, 255, 255, 0.06)",
  liveCard:      "0px 2px 4px 0px rgba(86, 24, 218, 0.20)",
  floating:      "0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
  glowAIAreaBtn: "0px 0px 8px 0px #138dff",
} as const;

/** Synthesized — verify against source Figma before treating as canonical. */
export const gradients = {
  aiAreaBtnColor:      "linear-gradient(135deg, #2562b2 0%, #3991c0 100%)",
  aiProfileBorder:     "linear-gradient(135deg, #2562b2 0%, #3991c0 50%, #6f4cff 100%)",
  sparkColor:          "linear-gradient(135deg, #ff6f00 0%, #ffb400 100%)",
  quizColor:           "linear-gradient(135deg, #6f4cff 0%, #8c6eff 100%)",
  quizColorHover:      "linear-gradient(135deg, #8c6eff 0%, #afa1ff 100%)",
  quizColorPress:      "linear-gradient(135deg, #5638e0 0%, #6f4cff 100%)",
  boostEnergy4Bg:      "linear-gradient(135deg, #00b395 0%, #26bea5 100%)",
  boostEnergy4BgHover: "linear-gradient(135deg, #26bea5 0%, #4ccab5 100%)",
  boostEnergy4BgPress: "linear-gradient(135deg, #4ccab5 0%, #00b395 100%)",
  boosterwall:         "linear-gradient(135deg, #2d39b4 0%, #6f4cff 100%)",
  boosterwallHover:    "linear-gradient(135deg, #4d57d9 0%, #8c6eff 100%)",
  boosterwallPress:    "linear-gradient(135deg, #1f2890 0%, #5638e0 100%)",
  gradeTop5:           "linear-gradient(135deg, #ff6f00 0%, #ffb400 45%, #6f4cff 100%)",
  gradeDiamond:        "linear-gradient(135deg, #4db2f1 0%, #c0e1fe 50%, #e6eaf0 100%)",
  gradePlatinum:       "linear-gradient(135deg, #bbbfd0 0%, #e6eaf0 100%)",
  gradeGold:           "linear-gradient(135deg, #ff6f00 0%, #ffb400 100%)",
  gradeSilver:         "linear-gradient(135deg, #757b90 0%, #bbbfd0 100%)",
  gradeBronze:         "linear-gradient(135deg, #860000 0%, #ff6f00 100%)",
  gradeParticipant:    "linear-gradient(135deg, #44494e 0%, #757b90 100%)",
} as const;
```

### 9.3 Tailwind preset

Save as `tailwind.preset.js` next to your Tailwind config. Wire it up:

```js
// tailwind.config.js
module.exports = {
  presets: [require("./tailwind.preset.js")],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};
```

Usage: `<button class="bg-primary text-text-100 hover:bg-primary-dark shadow-light-surface">`.

```js
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "primary": "#2d39b4", "primary-dark": "#4d57d9",
        "secondary": "#6f4cff", "secondary-dark": "#8c6eff",
        "accent": "#ff6f00", "accent-dark": "#ffb400",
        "selected": "#209fee", "selected-dark": "#4db2f1",
        "success": "#11c72d", "success-dark": "#2fd948", "success-surface": "#c3c7ef",
        "error": "#860000",
        "status-color-upcoming": "#5618da",
        "status-color-live": "#c10f0f",
        "score-color": "#9ca3f1", "score-color-dark": "#555b83",
        "surface": "#ffffff", "surface-alt": "#dce2eb", "surface2-alt": "#e9eef4",
        "surface-floating": "#ffffffb2",
        "surface-dark": "#161c26", "surface-alt-dark": "#202a38", "surface2-alt-dark": "#1e2630",
        "surface-floating-dark": "#24282d99",
        "surface-border-in-dark-mode": "#191f28",
        "border": "#ced6e6", "border-dark": "#282f3d",
        "background-light": "#f0f2f5", "background-light-half": "#f0f2f580",
        "background-dark": "#0e1116", "background-dark-half": "#0e111680",
        "background-b-30": "#0000004d",
        "text-0": "#000000", "text-30-sub-text-dark": "#44494e",
        "text-50": "#757b90", "text-80-sub-text-light": "#bbbfd0",
        "text-90": "#e6eaf0", "text-100": "#ffffff",
        "button": "#969cda", "button-border": "#c1c5ec",
        "button-hover": "#afb5ea", "button-press": "#c1c5ec", "button-disable": "#b2bac3",
        "button-dark": "#3c5bff", "button-dark-border": "#637cff", "button-disable-dark": "#30353b",
        "team-color-left": "#2f9cfc", "team-color-left-50": "#c0e1fe",
        "team-color-left-btn-normal": "#cedaef", "team-color-left-btn-hover": "#a4c6e5",
        "team-color-left-btn-press": "#acd7fe",
        "team-color-right": "#fe2054", "team-color-right-50": "#ffbccb",
        "team-color-right-btn-normal": "#dfc3ca", "team-color-right-btn-hover": "#d99dab",
        "team-color-right-btn-press": "#ffa6bb",
        "ai-companion-bg": "#1d2333", "ai-popup-surface": "#ffffff26",
        "ai-popup-color": "#2562b2", "ai-popup-color-2nd": "#3991c0",
        "ai-area-btn-hover": "#8398f7", "ai-area-btn-alarm": "#138dff80",
        "ai-area-btn-disable": "#3c3e45",
        "boost-energy-4-icon": "#00b395",
        "boost-energy-4-icon-hover": "#26bea5",
        "boost-energy-4-icon-press": "#4ccab5",
        "item-color": "#a7c1e1",
        "white-100": "#ffffff", "black-100": "#000000",
      },
      fontFamily: {
        sans: ['"Pretendard Variable"', '"Pretendard"', '-apple-system', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        "title":              ["32px", { fontWeight: "700" }],
        "header":             ["28px", { lineHeight: "1.5", fontWeight: "600" }],
        "sub-title":          ["24px", { lineHeight: "1.5", fontWeight: "600" }],
        "teamname":           ["20px", { fontWeight: "700" }],
        "description-16":     ["16px", { lineHeight: "20px", fontWeight: "400" }],
        "description-2":      ["16px", { lineHeight: "20px", fontWeight: "700" }],
        "description-focused":["16px", { lineHeight: "1.2",  fontWeight: "700" }],
        "chat":               ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "description":        ["14px", { lineHeight: "20px", fontWeight: "300" }],
        "annotation":         ["12px", { lineHeight: "1.2",  fontWeight: "400" }],
        "annotation-bold":    ["12px", { lineHeight: "1.2",  fontWeight: "700" }],
        "streakcalendar":     ["8px",  { fontWeight: "400" }],
        "streakcalendar-bold":["8px",  { fontWeight: "700" }],
      },
      boxShadow: {
        "light-surface":   "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
        "light-surface-2": "0px 1px 4px 0px rgba(0, 0, 0, 0.10)",
        "dark-surface":    "0px 2px 4px 0px rgba(255, 255, 255, 0.06)",
        "live-card":       "0px 2px 4px 0px rgba(86, 24, 218, 0.20)",
        "floating":        "0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
        "glow-ai":         "0px 0px 8px 0px #138dff",
      },
      backgroundImage: {
        "gradient-ai-btn":      "linear-gradient(135deg, #2562b2 0%, #3991c0 100%)",
        "gradient-ai-profile":  "linear-gradient(135deg, #2562b2 0%, #3991c0 50%, #6f4cff 100%)",
        "gradient-spark":       "linear-gradient(135deg, #ff6f00 0%, #ffb400 100%)",
        "gradient-quiz":        "linear-gradient(135deg, #6f4cff 0%, #8c6eff 100%)",
        "gradient-boost":       "linear-gradient(135deg, #00b395 0%, #26bea5 100%)",
        "gradient-boosterwall": "linear-gradient(135deg, #2d39b4 0%, #6f4cff 100%)",
        "gradient-top5":        "linear-gradient(135deg, #ff6f00 0%, #ffb400 45%, #6f4cff 100%)",
        "gradient-diamond":     "linear-gradient(135deg, #4db2f1 0%, #c0e1fe 50%, #e6eaf0 100%)",
        "gradient-platinum":    "linear-gradient(135deg, #bbbfd0 0%, #e6eaf0 100%)",
        "gradient-gold":        "linear-gradient(135deg, #ff6f00 0%, #ffb400 100%)",
        "gradient-silver":      "linear-gradient(135deg, #757b90 0%, #bbbfd0 100%)",
        "gradient-bronze":      "linear-gradient(135deg, #860000 0%, #ff6f00 100%)",
        "gradient-participant": "linear-gradient(135deg, #44494e 0%, #757b90 100%)",
      },
    },
  },
};
```

### 9.4 Suggested implementation order

1. Install Pretendard Variable.
2. Paste **one** of the three blocks above into your codebase and wire it up.
3. Verify the 19 gradient values against Figma; correct any drift.
4. Build the 5 button states (light + dark) — smoke test for most tokens.
5. Build Status pill + Score — locks in the type system.
6. Build the Team match card and AI Companion panel — most token-dense components.
7. Build Feature tiles, Streak calendar, Grade badges.
8. Add the `[data-theme="dark"]` toggle + persistence.

### 9.5 Editing this document

This file is the single source of truth. When you change a token value:
1. Update the table in §1–4 above.
2. Update the matching value in the relevant code block in §9.1/9.2/9.3.
3. Bump the version + date at the top.

When adding a new token: place it in the smallest semantically-appropriate group. If it doesn't fit any existing group, add a new H3 subsection rather than overloading "Misc".

When deprecating a token: leave it in the table but strike through and add a `→ use X instead` note. Remove after one release cycle.
