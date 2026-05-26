# Login Page

**File:** `login.html`
**Last updated:** 2026-05-27

---

## Overview

로그인 방식은 **Google OAuth 단독**. 이메일/비밀번호 입력 필드 없음.

---

## Layout

```
┌──────────────────────────┐
│     [Theme Toggle]  →    │  fixed top-right
│                          │
│       [RORR Emblem]      │
│          RORR            │  gradient title
│    스포츠를 더 즐겁게, 함께   │
│   ─────────────────────  │
│  [ G ]  Google로 계속하기  │  Google OAuth button
│                          │
│  이용약관   |   개인정보처리방침 │
└──────────────────────────┘
│  ⓒPitch Interactive Co.,LTD. All rights reserved  │  footer
```

---

## Elements

### Emblem
- Source: `https://erin-bucket-team.s3.amazonaws.com/RORR%20EMBLEM.png`
- Size: 80×80px

### Brand title
- Text: `RORR`
- Style: `title` (32px / 700), gradient `boosterwall` fill

### Tagline
- Text: `스포츠를 더 즐겁게, 함께`
- Style: `chat` (14px / 400), color `text-50`

### Google Sign-In button
- Full-width, Google G logo SVG + "Google로 계속하기"
- Border: `border` color, border-radius 10px
- Hover: background `surface2-alt`, border color `primary`

### Legal links
- Two anchors: **이용약관** / **개인정보처리방침**
- Style: `annotation` (12px / 400), color `text-50`
- Hover: color `primary`

### Footer
- Text: `ⓒPitch Interactive Co.,LTD. All rights reserved`
- Style: `annotation` (12px / 400), color `text-50`

---

## Tokens used

| Element | Token |
|---|---|
| Page background | `background-light` |
| Card | `surface` + `shadow-light-surface` |
| Divider | `border` |
| Button border | `border` |
| Button hover bg | `surface2-alt` |
| Button hover border | `primary` |
| Legal text | `text-50` |
| Legal hover | `primary` |
| Title gradient | `gradient-boosterwall` |

---

## Rules

- Google OAuth only — no username/password fields
- Terms of Use and Privacy Policy links must appear below the Google button
- Footer `ⓒPitch Interactive Co.,LTD. All rights reserved` always present
- Dark/light theme toggle persisted to `localStorage`
