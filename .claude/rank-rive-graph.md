# 랭킹 Rive 그래프 — streak-ranking-graph

> ## ⛔ 절대 규칙 — 반드시 먼저 읽을 것
>
> **TOP 5 섹션은 Rive 애니메이션으로만 구현한다.**
>
> - HTML/CSS div 막대(bar), span, 정적 그래프 등 **어떤 HTML 대체 구현도 금지**
> - CDN(`esm.sh`, `unpkg` 등) import **금지** — npm 패키지 `@rive-app/canvas`만 사용
> - `<canvas id="rivCanvas">` 하나만 배치하고, 아래 **전체 구현 예시 코드를 그대로** 사용할 것
> - 이 규칙을 지키지 않으면 Rive 애니메이션이 표시되지 않는다

---

## 전체 구현 예시 — 이 코드를 그대로 쓸 것

```html
<!-- HTML: top5 카드 안에 canvas 하나만 -->
<canvas id="rivCanvas" style="width:100%;height:280px;display:block;"></canvas>
```

```js
// JS: npm 패키지에서 named import (CDN 금지)
// @rive-app/canvas v2.37.8 이 프로젝트 node_modules에 설치되어 있음
import { Rive, decodeFont } from '@rive-app/canvas'

const GRAPH_WIDTH_THRESHOLD = 360
const REF_HEIGHT_PX = 280

function initRiveGraph(top5Users) {
  const canvas = document.getElementById('rivCanvas')
  const container = canvas.parentElement

  function calcGraphWidth() {
    const w = container.offsetWidth
    const h = container.offsetHeight || REF_HEIGHT_PX
    return w > GRAPH_WIDTH_THRESHOLD ? w : w + Math.max(0, REF_HEIGHT_PX - h)
  }

  const r = new Rive({
    src: 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/streak-ranking-graph.riv',
    canvas,
    artboard: 'StreakRankingGraph',
    stateMachines: 'State Machine 1',
    autoBind: true,
    autoplay: true,
    assetLoader(asset) {
      if (
        asset.isFont &&
        ['Pretendard Variable', 'PretendardVariable', 'Pretendard']
          .some(n => asset.name.toLowerCase().includes(n.toLowerCase()))
      ) {
        fetch('https://erin-bucket-team.s3.us-east-1.amazonaws.com/fonts/PretendardVariable-3557044.ttf')
          .then(res => res.arrayBuffer())
          .then(buf => decodeFont(new Uint8Array(buf)))
          .then(font => asset.setFont(font))
        return true  // 반드시 동기적으로 return true 먼저
      }
      return false
    },
    onLoad() {
      r.resizeDrawingSurfaceToCanvas()

      requestAnimationFrame(() => {  // 바인딩은 반드시 rAF 안에서
        const vm = r.viewModelInstance

        const gw = vm.number('graphWidth')
        if (gw) gw.value = calcGraphWidth()

        const allZero = top5Users.every(u => u.longest === 0)
        const isNoData = r.stateMachineInputs('State Machine 1')
          ?.find(i => i.name === 'isNoData')
        if (isNoData) isNoData.value = allZero

        const denom = top5Users[0]?.longest || Math.max(...top5Users.map(u => u.longest), 1)
        top5Users.forEach((u, i) => {
          const n = i + 1
          const rate = denom > 0 ? Math.min(100, Math.max(0, (u.longest / denom) * 100)) : 0

          const cs = vm.string(`rankingBar${n}/currentStreak`)
          const sl = vm.number(`rankingBar${n}/streakLong`)
          const sr = vm.number(`rankingBar${n}/streakRate`)
          const un = vm.string(`rankingBar${n}/userName`)

          if (cs) cs.value = `W${u.cur}`
          if (sl) sl.value = u.longest
          if (sr) sr.value = n === 1 && denom > 0 ? 100 : rate
          if (un) un.value = u.nick
        })
      })
    },
  })

  new ResizeObserver(() => {
    r.resizeDrawingSurfaceToCanvas()
    const gw = r.viewModelInstance?.number('graphWidth')
    if (gw) gw.value = calcGraphWidth()
  }).observe(container)
}
```

---

## Chrome 익스텐션 필수 설정 (없으면 Rive 렌더링 안 됨)

이 프로젝트는 Chrome 익스텐션(Manifest V3)이다. Rive가 내부적으로 **WebAssembly**를 사용하고, `.riv`·폰트를 **외부 S3**에서 fetch하기 때문에 아래 두 항목이 `manifest.json`에 반드시 있어야 한다.

```json
"host_permissions": [
  "https://erin-bucket-team.s3.amazonaws.com/*",
  "https://erin-bucket-team.s3.us-east-1.amazonaws.com/*"
],
"content_security_policy": {
  "extension_pages": "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"
}
```

- `wasm-unsafe-eval` 없으면 → Rive WASM 로드 실패, 빈 canvas
- `host_permissions` 없으면 → S3 fetch 차단, `.riv` 파일·폰트 로드 실패

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

- `import { Rive, decodeFont } from '@rive-app/canvas'` — named import만 사용
- `import Rive from '@rive-app/canvas'` (default import) → `Rive is not a constructor` 오류
- **CDN(`esm.sh`, `unpkg` 등) 금지** — `@rive-app/canvas` v2.37.8이 `node_modules`에 설치되어 있음

---

## 폰트

- URL: `https://erin-bucket-team.s3.us-east-1.amazonaws.com/fonts/PretendardVariable-3557044.ttf`
- `assetLoader` 조건: `asset.isFont === true` AND `asset.name`이 `['Pretendard Variable', 'PretendardVariable', 'Pretendard']` 중 하나를 포함(대소문자 무시)
- `decodeFont(new Uint8Array(buf))`로 디코딩 후 `asset.setFont(font)` 호출 — raw `Uint8Array` 직접 전달 불가
- `assetLoader`는 동기적으로 `return true`, fetch/decodeFont는 비동기로 처리

> **주의 — 오류 이력**
> - `asset.setFont(new Uint8Array(buf))` 직접 전달 → `TypeError: Cannot read properties of undefined (reading 'g')`
> - fetch를 비동기로 시작하고 `return true`를 나중에 반환 → asset 무효화 → 반드시 `return true` 먼저
> - S3 font fetch 시 CORS 오류 → S3 CORS 설정 필요: `AllowedOrigins: ["*"]`, `AllowedMethods: ["GET","HEAD"]`

---

## 데이터 바인딩 타이밍

- `onLoad` 콜백 내에서 **`requestAnimationFrame`** 안에서 바인딩 — 직접 바인딩하면 값 미반영

---

## State Machine Input

| Input 이름 | 타입 | 값 |
|------------|------|-----|
| `isNoData` | Boolean | 5개 막대 모두 `streakLong === 0`이면 `true` |

---

## ViewModel 바인딩 — 막대 5개 (rankingBar1 ~ rankingBar5)

루트 `viewModelInstance`에서 슬래시 경로로 직접 접근.

> **주의** — `vm.viewModel('rankingBar1')` 호출 후 `.string()` → `TypeError`. `vm.string('rankingBar1/currentStreak')` 패턴만 사용.

| 경로 | 타입 | 값 |
|------|------|-----|
| `rankingBar{n}/currentStreak` | String | 현재 스트릭 텍스트 (e.g. `"W7"`) |
| `rankingBar{n}/streakLong` | Number | 최장 스트릭 수 |
| `rankingBar{n}/streakRate` | Number | 막대 높이 비율 0~100 |
| `rankingBar{n}/userName` | String | 유저 닉네임 |

**streakRate 계산**
- 분모 = rankingBar1의 streakLong (0이면 나머지 최댓값으로 fallback)
- rankingBar1/streakRate = 분모 > 0이면 항상 `100`, 아니면 `0`
- rankingBar{n}/streakRate = `clamp((streakLong[n] / 분모) × 100, 0, 100)`

---

## ViewModel 바인딩 — 전역

| 경로 | 타입 | 값 |
|------|------|-----|
| `graphWidth` | Number | 아래 계산식 |

**graphWidth 계산** (`GRAPH_WIDTH_THRESHOLD = 360`, `REF_HEIGHT_PX = 280`)
- containerW > 360: `graphWidth = containerW`
- containerW ≤ 360: `graphWidth = containerW + max(0, 280 - containerH)`
- ResizeObserver에서도 동일하게 재계산 후 업데이트

---

## 캔버스

- CSS height: `280px`
- `onLoad`에서 `r.resizeDrawingSurfaceToCanvas()` 호출 → devicePixelRatio 반영
- ResizeObserver에서도 `r.resizeDrawingSurfaceToCanvas()` 재호출
- `canvas.width = canvas.offsetWidth` 등 수동 크기 설정 불필요
