# loading-page.riv (로딩 Rive)

## Rive 파일 정보

| 항목 | 값 |
|------|-----|
| CDN URL | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/loading-page.riv` |
| State Machine | `State Machine 1` |
| autoplay | true |

## 아트보드 종류

| 아트보드명 | 사용 시점 |
|-----------|----------|
| `Loading` | 페이지/리스트 초기 로딩 (전체 영역 점유) |
| `Loading_addList` | 무한 스크롤 추가 로딩 (목록 하단 소형 스피너) |

데이터 바인딩 없음. 정적 루프 애니메이션.

---

## 컴포넌트 2종

같은 Rive 파일을 공유하지만 사용 맥락이 다르다.

### 1. `LoadingRive` — 일반 로딩 스피너

props:

| prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `width` | number | 250 | 너비(px) |
| `height` | number | 250 | 높이(px) |
| `artboard` | string | `'Loading_addList'` | 아트보드명 |

- 컨테이너 div가 `width × height` 크기를 고정으로 잡고 내부에 `RiveComponent`를 채움
- 언마운트 시 `rive.cleanup()` 호출

사용 예:
- 무한 스크롤 하단 스피너: `artboard` 생략 (기본값 `Loading_addList`), `width={80}`, `height={80}`
- 초기 로딩 전체 영역: `artboard="Loading"`, 기본 크기(250px)

### 2. `RiveLoading` — 전체/인라인 오버레이 로딩

props:

| prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `size` | number | 250 | 너비와 높이 동일값(px) |
| `inline` | boolean | false | 인라인 모드 여부 |
| `overlayPosition` | `'fixed'` \| `'absolute'` | `'fixed'` | 오버레이 포지션 |
| `className` | string | `''` | 추가 wrapper 클래스 |

동작 방식:

| `inline` | 동작 |
|----------|------|
| `false` (기본) | `document.body`에 portal로 렌더 — 화면 전체를 덮는 오버레이 |
| `true` | 부모 컨테이너 안에 flex 중앙 배치 |

- `overlayPosition: 'absolute'`이면 portal 없이 현재 위치에 `absolute` 배치
- `aria-hidden` (오버레이) / `aria-busy` (인라인) 처리

---

## 사전 로딩 유틸

라우트 이동 전 미리 fetch해두면 Rive 파일이 캐시에서 즉시 표시된다:

```
preloadRiveLoading()  →  fetch('/rives/loading-page.riv')
```

---

## 패키지

```bash
yarn add @rive-app/react-canvas
```
