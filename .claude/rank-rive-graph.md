# 랭킹 Rive 그래프 — streak-ranking-graph

등급 내 상위 5명의 스트릭을 막대 그래프로 시각화하는 Rive 애니메이션.

---

## 파일 / Rive 설정

| 항목 | 값 |
|------|-----|
| .riv URL | `https://erin-bucket-team.s3.us-east-1.amazonaws.com/streak-ranking-graph.riv` |
| Artboard | `StreakRankingGraph` |
| State Machine | `State Machine 1` |
| autoBind | `true` |
| autoplay | `true` |

---

## Import

`Rive`와 `decodeFont` 둘 다 `@rive-app/canvas`에서 **named import**.
- `import { Rive, decodeFont } from '@rive-app/canvas'`
- `import Rive from '@rive-app/canvas'` (default import) 하면 `Rive is not a constructor` 오류 발생

---

## 폰트

- URL: `https://erin-bucket-team.s3.us-east-1.amazonaws.com/fonts/PretendardVariable-3557044.ttf`
- `assetLoader` 조건: `asset.isFont === true` AND `asset.name`이 `['Pretendard Variable', 'PretendardVariable', 'Pretendard']` 중 하나를 포함(대소문자 무시)
- **`decodeFont(new Uint8Array(buf))`로 디코딩 후 `asset.setFont(font)` 호출** — raw `Uint8Array` 직접 전달 불가
- `assetLoader`는 동기적으로 `return true`, fetch/decodeFont는 비동기로 처리

> **주의 — 오류 이력**
> - `asset.setFont(new Uint8Array(buf))` 직접 전달 시 → `TypeError: Cannot read properties of undefined (reading 'g')` 발생
> - fetch를 `assetLoader` 내부에서 비동기로 시작하고 `return true`를 나중에 반환하면 asset이 무효화됨 → 반드시 `return true` 먼저, fetch는 그 다음
> - S3에서 font를 fetch할 때 CORS 오류 발생 가능 → S3 버킷 Permissions > CORS configuration에 `AllowedOrigins: ["*"]`, `AllowedMethods: ["GET","HEAD"]` 설정 필요 (ACL 퍼블릭 읽기와 CORS는 별개)

---

## HTML 구조

> **⚠️ 절대 HTML/CSS div 막대로 구현하지 말 것 — 반드시 `<canvas>` 요소 하나만 사용할 것**

Top 5 섹션에는 `<canvas>` 하나만 넣는다. div·span 막대 구조 금지.

```html
<canvas id="rivCanvas" style="width:100%;height:280px;display:block;"></canvas>
```

카드 래퍼가 필요하면 `<div id="top5Card">` 안에 위 canvas만 배치할 것. bar, streak, nick 등 HTML 요소 추가 금지.

---

## 캔버스

- CSS height: `280px`
- `onLoad`에서 `r.resizeDrawingSurfaceToCanvas()` 호출 → devicePixelRatio 반영, 선명하게 렌더링
- ResizeObserver에서도 `r.resizeDrawingSurfaceToCanvas()` 재호출

> **주의 — 오류 이력**
> - `resizeDrawingSurfaceToCanvas()` 없으면 Retina 등 고해상도 화면에서 흐릿하게 렌더링됨
> - `canvas.width = canvas.offsetWidth` 등 수동 크기 설정 불필요 — Rive가 `resizeDrawingSurfaceToCanvas()`로 자동 처리

---

## 데이터 바인딩 타이밍

- `onLoad` 콜백 내에서 **`requestAnimationFrame`** 안에서 바인딩해야 정상 반영됨

> **주의 — 오류 이력**
> - `onLoad` 안에서 바로 바인딩하면 값이 적용되지 않는 경우 있음 → `requestAnimationFrame` 필수

---

## State Machine Input

| Input 이름 | 타입 | 값 |
|------------|------|-----|
| `isNoData` | Boolean | 5개 막대 모두 `streakLong === 0`이면 `true` |

---

## ViewModel 바인딩 — 막대 5개 (rankingBar1 ~ rankingBar5)

루트 `viewModelInstance`에서 경로 문자열로 직접 접근. `vm.viewModel()` 메서드 없음.

> **주의 — 오류 이력**
> - `vm.viewModel('rankingBar1')` 호출 후 `.string()` 접근하면 `TypeError` 발생 — `ViewModelInstance`에 `.viewModel()` 메서드 없음
> - 반드시 `vm.string('rankingBar1/currentStreak')` 처럼 루트에서 슬래시 경로로 접근할 것
> - `vm.string(path)` 등은 `null`을 반환할 수 있으므로 null 체크 후 `.value` 설정

| 경로 | 타입 | 값 |
|------|------|-----|
| `rankingBar{n}/currentStreak` | String | 현재 스트릭 텍스트 (e.g. `"W7"`) |
| `rankingBar{n}/streakLong` | Number | 최장 스트릭 수 |
| `rankingBar{n}/streakRate` | Number | 막대 높이 비율 0~100 |
| `rankingBar{n}/userName` | String | 유저 닉네임 |

**streakRate 계산**

- 분모 = rankingBar1의 streakLong (0이면 나머지 중 최댓값으로 fallback)
- rankingBar1/streakRate = 분모 > 0이면 항상 `100`, 아니면 `0`
- rankingBar{n}/streakRate = `clamp((streakLong[n] / 분모) × 100, 0, 100)`

---

## ViewModel 바인딩 — 전역

| 경로 | 타입 | 값 |
|------|------|-----|
| `graphWidth` | Number | 아래 계산식 |

**graphWidth 계산** (상수: `GRAPH_WIDTH_THRESHOLD = 360`, `REF_HEIGHT_PX = 280`)

- containerW > 360: `graphWidth = containerW`
- containerW ≤ 360: `graphWidth = containerW + max(0, 280 - containerH)`
- ResizeObserver에서도 동일하게 재계산 후 업데이트
