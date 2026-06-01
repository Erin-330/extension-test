# CLAUDE.md — 프로젝트 규칙

## 프로젝트 세팅 플로우

"프로젝트 세팅", "초기 세팅", "세팅해줘", "처음부터 만들어줘" 등의 요청이 오면 **반드시 아래 순서를 따른다.**

1. `.claude/infrastructure.md` 읽기
2. 파일 목록의 모든 파일을 코드 블록 내용 그대로 생성한다. 임의로 변경하지 않는다.
3. `npm install` 실행

---

## 필수 참조 파일

| 파일 | 경로 | 언제 읽는가 |
|------|------|------------|
| Design System | `.claude/Design System.md` | 페이지(HTML) 또는 컴포넌트를 만들거나 수정할 때 **항상** |
| Spec Template | `.claude/spec-template.md` | MD 명세 파일을 만들거나 수정할 때 **항상** |

---

## 기능명세서 → UI 자동 플로우

기능명세서(이미지 또는 텍스트)가 입력으로 오면 **아래 순서를 반드시 따른다.** 단계를 건너뛰지 않는다.

### Step 1 — 참조 파일 읽기

두 파일을 순서대로 읽는다.

1. `.claude/spec-template.md` 읽기
2. `.claude/Design System.md` 읽기

### Step 2 — Swagger fetch (조건부 — Swagger URL이 함께 제공된 경우)

Swagger URL에서 OpenAPI 스펙을 fetch해 페이지에서 사용할 엔드포인트를 파악한다.

> **⚠️ WebFetch 툴은 HTTP URL을 HTTPS로 자동 업그레이드하므로 HTTP 서버에 접근 불가.**
> **반드시 Bash 툴의 curl 명령어를 사용한다.**

```bash
curl -s "[Swagger URL]/api-docs/swagger-ui-init.js"
```

- 위 경로로 전체 OpenAPI 스펙(swaggerDoc)을 가져온다.
- `/api-docs/swagger-ui-init.js` 가 없으면 `/api-docs-json`, `/openapi.json` 순으로 시도한다.
- 이 페이지의 기능과 관계없는 엔드포인트는 제외한다.
- fetch 결과는 Step 3의 **API 섹션**에만 반영한다. 별도 파일로 저장하지 않는다.

### Step 3 — MD 명세 파일 작성

`spec-template.md`의 구조를 따라 MD 파일을 작성한다.

- 저장 위치: `.claude/pages/[페이지명].md`
- 파일명은 spec-template의 "파일명 규칙" 섹션을 따른다.
- 필수 섹션은 모두 작성, 조건부 섹션은 해당 기능이 없으면 생략한다.
- 기능명세서 이미지가 입력으로 오면 spec-template의 "기능명세서 이미지에서 추출해야 할 정보" 표를 참고해 정보를 추출한다.
- Swagger를 fetch했다면 spec-template의 API 섹션 형식대로 Request/Response 표를 채운다.

### Step 4 — CLAUDE.md 매핑 업데이트

이 파일(CLAUDE.md) 아래 "Spec Files 매핑" 표에 새 행을 추가한다.

```
| [생성한 MD 파일명] | [생성한 HTML 파일명] | [한 줄 설명] |
```

### Step 5 — HTML 페이지 구현

> **Chrome Extension JS 작성 규칙**
> - `chrome.runtime.sendMessage` 응답 형식: `{ code, message: 'success'|'fail', data: { ... } }`
> - OAuth 토큰: `result.data.token` (❌ `result.token`)
> - 에러 판별: `result.message === 'fail'` (❌ `!result.token`)
> - JWT 저장: `localStorage.setItem('pie-u-wt', jwt)`
> - `chrome.identity.getAuthToken()`은 manifest에 `identity` 권한과 `oauth2` 설정이 있어야 동작한다 → infrastructure.md 참조
>
> **CSP 필수 규칙 (MV3) — 위반 시 스크립트 전체 차단됨**
> - `<script>` 인라인 코드 **절대 금지** → 반드시 외부 `.js` 파일로 분리
> - `onclick="..."` 등 인라인 이벤트 핸들러 **절대 금지** → `addEventListener`로 교체
> - HTML에는 `<script type="module" src="./src/[페이지명]/main.js"></script>` 형태로만 연결
> - Vite가 `src/[페이지명]/main.js`를 번들링해 `dist/assets/`에 출력함
> - `vite.config.js`의 `input`에 HTML 파일 경로를 추가해야 빌드됨

`Design System.md`를 참고해 UI를 구현한다. 아래 제약은 예외 없이 지킨다.

- 색상: `var(--color-*)` 토큰만 사용. 하드코딩 hex 금지.
- 폰트: Pretendard Variable만 사용.
- 레이아웃: `width: 100%`, `max-width` 제한 금지, 정렬은 `padding`으로 처리.
- 다크모드: `[data-theme="dark"]` 토큰 스왑 방식.
- Step 3에서 작성한 MD의 레이아웃·상태·컴포넌트 명세를 그대로 구현한다.

---

## Spec Files 매핑

> MD 명세 파일이 추가될 때마다 Step 4에서 이 표를 업데이트한다.

| Spec MD | HTML 페이지 | 설명 |
|---------|------------|------|
| `login.md` | `login.html` | Google OAuth 로그인 및 JWT 발급, Chrome Extension 사이드 패널 진입점 |
| `redirect.md` | `redirect.html` | OAuth 리다이렉트 콜백 처리, 인증 결과를 background에 전달 후 탭 자동 닫기 |
