# RORR — Project Context

## Spec Files (읽기 규칙)
- `login.html` 관련 작업 시 → `.claude/login.md` 먼저 읽을 것
- `profile.html` 관련 작업 시 → `.claude/profile.md` 먼저 읽을 것
- `follow.html` / 팔로우 관련 작업 시 → `.claude/follow-ui-layout.md` 먼저 읽을 것
- `rank.html` / 랭킹 관련 작업 시 → `.claude/rank-ui-layout.md` 와 `.claude/rank-rive-graph.md` 모두 먼저 읽을 것
- 디자인/스타일 작업 시 → `.claude/Design System.md` 참고할 것

## Service
- **Service name:** RORR
- **Design system:** `Design System.md` (single source of truth for all tokens, typography, components)

## Assets
- **Logo / emblem:** hosted on S3 at `https://erin-bucket-team.s3.amazonaws.com/RORR%20EMBLEM.png`
  - Always reference this URL for the RORR emblem in web pages
  - Local file `RORR EMBLEM.png` exists in the project root for offline reference only

## 스타일 규칙

- 모든 색상·타이포그래피·이펙트는 반드시 `Design System.md`의 토큰을 사용할 것
- 토큰의 용도(Use 컬럼)를 확인하고 의미에 맞게 사용할 것 — 임의로 비슷한 토큰으로 대체하지 말 것

## Login Page Rules
- Authentication: Google OAuth only — no email/password fields
- Below the Google Sign-In button, include two links: **Terms of Use** and **Privacy Policy**
- Footer must always include: ⓒPitch Interactive Co.,LTD. All rights reserved
