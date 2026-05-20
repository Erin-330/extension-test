# 페이지별 구현 스펙 (제로베이스 재현용)

각 파일은 **해당 페이지만 보고 완전히 구현 가능한 수준**으로 작성됐습니다.

포함 내용:
- 피그마 URL 자리 (`**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*`)
- 라우트 / 파일 경로 / 진입 조건
- 레이아웃 트리 (className 포함)
- 로컬 state / TanStack Query / Zustand
- API 호출 (엔드포인트, 타입)
- 이벤트 핸들러 로직
- 네비게이션 (어디서 → 어디로)
- 빈 상태 / 로딩 / 에러 처리

---

## 파일 목록

| 파일 | 라우트 |
|------|--------|
| [page-login.md](page-login.md) | `/login` |
| [page-auth-verification.md](page-auth-verification.md) | `/auth-verification` |
| [page-main.md](page-main.md) | `/` (채팅 + 라이브 퀴즈) |
| [page-schedule-list.md](page-schedule-list.md) | `/schedule` |
| [page-schedule-detail.md](page-schedule-detail.md) | `/schedule/detail` |
| [page-league-filter.md](page-league-filter.md) | `/league-filter` |
| [page-boost-select.md](page-boost-select.md) | `/boost/select` (1단계) |
| [page-boost-message.md](page-boost-message.md) | `/boost/message` (2단계) |
| [page-boost-confirm.md](page-boost-confirm.md) | `/boost/confirm` (3단계) |
| [page-boost-list-user.md](page-boost-list-user.md) | `/boost-list` |
| [page-boost-list-team-player.md](page-boost-list-team-player.md) | `/boost-list/team` `/boost-list/player` |
| [page-boost-wall.md](page-boost-wall.md) | `/boost-wall` |
| [page-follow-league.md](page-follow-league.md) | `/follow/league-list` (1단계) |
| [page-follow-team-player.md](page-follow-team-player.md) | `/follow/team-list` `/follow/player-list` |
| [page-profile.md](page-profile.md) | `/profile` |
| [page-mail.md](page-mail.md) | `/mail` |
| [page-charge.md](page-charge.md) | `/charge` `/charge/toss` `/payment/verify` |
| [page-purchase-list.md](page-purchase-list.md) | `/purchase-list` |
| [page-rank.md](page-rank.md) | `/rank` |
| [page-streak-history.md](page-streak-history.md) | `/streak/history` |

---

## 피그마 URL 채우는 방법

각 파일에서 아래 주석을 찾아 URL로 교체:

```md
**Figma:** *(미입력 — Figma URL을 여기에 붙여넣으세요)*
```

교체 후:
```md
<!-- FIGMA_URL: https://www.figma.com/design/xxxx/page-name?node-id=0-1 -->
```

---

## 공통 패턴 참조

- 전체 API 타입: `../11-api-reference.md`
- 디자인 시스템 (Typography, 색상, 컴포넌트): `../20-design-system.md`
- FSD 구조 규칙: `../01-architecture.md`
- 라우팅/네비게이션: `../04-routing-auth.md`
