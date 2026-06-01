# 프로필

**File:** `profile.html`
**Last updated:** 2026-06-01

---

## 개요

로그인 후 진입하는 사용자 프로필 화면. Spark 포인트·에너지 잔액·등급 정보를 표시하고, 내부/외부 메뉴 이동을 제공한다.

---

## 레이아웃

```
┌─────────────────────────────────────┐
│  HEADER  [닫기]        [메일·뱃지]  │
├─────────────────────────────────────┤
│  USER CARD                          │
│  [프로필 이미지 (등급 테두리)]        │
│  이메일  (말줄임)                    │
│  닉네임  [더 보기 / 접기]            │
│  Spark 포인트  등급명  에너지 [+]    │
├─────────────────────────────────────┤
│  MENU LIST                          │
│  [아이콘] 팔로우 팀 & 선수    [〉]   │
│  [아이콘] 구매 내역           [〉]   │
│  [아이콘] 부스트 내역         [〉]   │
│  [아이콘] 서비스 바로가기     [↗]   │
│  [아이콘] 이용약관            [↗]   │
│  [아이콘] 개인정보 처리방침   [↗]   │
├─────────────────────────────────────┤
│  FOOTER  (버전 또는 빈 여백)         │
└─────────────────────────────────────┘
```

---

## 상태별 표시

| 상태 | 표시 |
|------|------|
| 초기 로딩 | 전체 화면 로딩 오버레이 (스피너) |
| 로딩 완료 | 프로필 카드 및 메뉴 렌더 |
| 인증 토큰 없음 / 만료 | `login.html?expired=1`로 자동 이동 |
| API 오류 | 오류 메시지 표시 후 유지 |

---

## 컴포넌트 상세

### 프로필 이미지 (등급 테두리)

- `picture` URL이 있으면 원형 이미지, 없으면 기본 아이콘 (사람 실루엣 SVG)
- 이미지 바깥에 `gradeId`에 따른 그라데이션 링 적용

| gradeId | 테두리 그라데이션 |
|---------|----------------|
| 1 | `grade-top-5` |
| 2 | `grade-diamond` |
| 3 | `grade-platinum` |
| 4 | `grade-gold` |
| 5 | `grade-silver` |
| 6 | `grade-bronze` |
| 7~10 | `grade-participant` |

### 닉네임 토글

- `displayname`이 1줄(약 14자)을 초과하면 잘림 + "더 보기" 버튼 노출
- 버튼 탭 시 전체 표시 + "접기" 버튼으로 교체

### 에너지 충전 버튼 (+)

- `payments` 배열이 비어있으면 버튼 disabled
- 탭 시 `chrome.tabs.create({ url: 충전URL })` 로 외부 탭 오픈
- 충전 완료 신호(`boost/charged`)를 background로부터 수신하면 `cash` 값 업데이트 + 숫자 증가 애니메이션

### 메뉴 아이템

| 라벨 | 타입 | 이동 대상 |
|------|------|-----------|
| 팔로우 팀 & 선수 | 내부 | `follow-league.html?from=profile` |
| 구매 내역 | 내부 | `purchase-history.html?from=profile` |
| 부스트 내역 | 내부 | `boost-history.html?from=profile` |
| 서비스 바로가기 | 외부 | `https://rorr.club` |
| 이용약관 | 외부 | `https://rorr.club/terms` |
| 개인정보 처리방침 | 외부 | `https://rorr.club/privacy` |

내부 이동 시 `?from=profile` 쿼리로 "프로필에서 진입" 상태 전달.

---

## 데이터 포맷

- `exp` (Spark 포인트): `toLocaleString('ko-KR')` 천 단위 콤마, 블라-핑크 그라데이션 텍스트
- `cash` (에너지 잔액): `toLocaleString('ko-KR')`, 민트/그린(`--color-boost-energy-4-icon`) 텍스트
- `msgCnt`: 0 또는 로딩 중이면 뱃지 숨김, 1 이상이면 표시

---

## API

**Swagger**: `http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com:5012/api-docs/swagger-ui-init.js`

이 페이지에서 사용하는 엔드포인트:
- `GET /spark/profile` — 프로필 + Spark 정보 조회 (email, displayname, picture, exp, cash, gradeId, gradeName, msgCnt)
- `GET /users/me` — 결제 수단 확인 (payments 배열)

---

## 내비게이션 / 진입 state

### 내부 이동 출발

| 키 | 타입 | 설명 |
|----|------|------|
| `from` | `"profile"` | 이전 화면이 프로필임을 알림 (뒤로가기 분기용) |
