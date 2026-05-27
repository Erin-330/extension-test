const html = document.documentElement

const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
html.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light')

const top5Data = [
  { nick: 'firefly', currentStreak: 'W25', streakLong: 30 },
  { nick: 'starlit',  currentStreak: 'W22', streakLong: 26 },
  { nick: 'lunarKid', currentStreak: 'W21', streakLong: 24 },
  { nick: 'echoVibe', currentStreak: 'W20', streakLong: 22 },
  { nick: 'pixelArc', currentStreak: 'W19', streakLong: 20 },
]

const userDetails = {
  u6:  { nick: 'arc_main',    tier: 'diamond',  streak: 'W18', long: 25, reward: '+1,200E' },
  u7:  { nick: 'blueDragon',  tier: 'diamond',  streak: 'W15', long: 22, reward: '+1,200E' },
  u8:  { nick: 'coral_77',    tier: 'platinum', streak: 'W13', long: 18, reward: '+800E'   },
  u9:  { nick: 'dust.fan',    tier: 'platinum', streak: 'W11', long: 14, reward: '+800E'   },
  u10: { nick: 'forest_run',  tier: 'gold',     streak: 'W9',  long: 13, reward: '+320E'   },
  u11: { nick: 'glide_42',    tier: 'gold',     streak: 'W8',  long: 12, reward: '+320E'   },
  me:  { nick: 'erin',        tier: 'gold',     streak: 'W7',  long: 12, reward: '+320E'   },
}

const RIVE_URL = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/streak-ranking-graph.riv'
const FONT_URL = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/fonts/PretendardVariable-3557044.ttf'
const GRAPH_WIDTH_THRESHOLD = 360
const REF_HEIGHT_PX = 280

function setupFallbackBars() {
  const card = document.querySelector('.top5-card')
  const canvas = document.getElementById('rivCanvas')
  if (canvas) canvas.remove()
  const wrap = document.createElement('div')
  wrap.className = 'rive-fallback'
  const denom = top5Data[0].streakLong || Math.max(...top5Data.map((d) => d.streakLong), 1)
  for (const d of top5Data) {
    const rate = denom > 0 ? Math.min(100, Math.max(0, (d.streakLong / denom) * 100)) : 0
    const bar = document.createElement('div')
    bar.className = 'fallback-bar'
    bar.innerHTML = `
      <span class="bar-streak">${d.currentStreak}</span>
      <div class="bar-fill" style="height: ${rate}%;"></div>
      <span class="bar-name">${d.nick}</span>
    `
    wrap.appendChild(bar)
  }
  card.appendChild(wrap)
}

async function loadRiveGraph() {
  let rive
  try {
    rive = await import('https://esm.sh/@rive-app/canvas@2.21.1')
  } catch (e) {
    console.warn('Rive module load failed, using fallback', e)
    setupFallbackBars()
    return
  }

  const { Rive, decodeFont } = rive
  if (typeof Rive !== 'function') {
    setupFallbackBars()
    return
  }

  const canvas = document.getElementById('rivCanvas')
  const container = canvas.parentElement

  const assetLoader = (asset) => {
    const isFontAsset = asset.isFont === true
    const fontMatch = ['pretendard variable', 'pretendardvariable', 'pretendard']
      .some((n) => (asset.name || '').toLowerCase().includes(n))
    if (isFontAsset && fontMatch) {
      fetch(FONT_URL)
        .then((res) => res.arrayBuffer())
        .then((buf) => decodeFont(new Uint8Array(buf)))
        .then((font) => asset.setFont(font))
        .catch((err) => console.warn('font load failed', err))
      return true
    }
    return false
  }

  let r
  try {
    r = new Rive({
      src: RIVE_URL,
      canvas,
      artboard: 'StreakRankingGraph',
      stateMachines: 'State Machine 1',
      autoBind: true,
      autoplay: true,
      assetLoader,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas()
        requestAnimationFrame(() => bindData(r, container))
      },
    })
  } catch (e) {
    console.warn('Rive init failed', e)
    setupFallbackBars()
    return
  }

  const ro = new ResizeObserver(() => {
    if (!r) return
    try {
      r.resizeDrawingSurfaceToCanvas()
      updateGraphWidth(r, container)
    } catch {}
  })
  ro.observe(container)
}

function bindData(r, container) {
  const vm = r.viewModelInstance
  if (!vm) return

  const denom = top5Data[0].streakLong || Math.max(...top5Data.map((d) => d.streakLong), 0)
  const allZero = top5Data.every((d) => d.streakLong === 0)

  const isNoDataInput = r.stateMachineInputs('State Machine 1')?.find((i) => i.name === 'isNoData')
  if (isNoDataInput) isNoDataInput.value = allZero

  top5Data.forEach((d, i) => {
    const n = i + 1
    const currentStreak = vm.string(`rankingBar${n}/currentStreak`)
    const streakLong    = vm.number(`rankingBar${n}/streakLong`)
    const streakRate    = vm.number(`rankingBar${n}/streakRate`)
    const userName      = vm.string(`rankingBar${n}/userName`)

    if (currentStreak) currentStreak.value = d.currentStreak
    if (streakLong) streakLong.value = d.streakLong
    if (userName) userName.value = d.nick

    let rate
    if (i === 0) {
      rate = denom > 0 ? 100 : 0
    } else {
      rate = denom > 0 ? Math.min(100, Math.max(0, (d.streakLong / denom) * 100)) : 0
    }
    if (streakRate) streakRate.value = rate
  })

  updateGraphWidth(r, container)
}

function updateGraphWidth(r, container) {
  const vm = r.viewModelInstance
  if (!vm) return
  const w = container.clientWidth
  const h = container.clientHeight
  let graphW
  if (w > GRAPH_WIDTH_THRESHOLD) graphW = w
  else graphW = w + Math.max(0, REF_HEIGHT_PX - h)
  const graphWidthBind = vm.number('graphWidth')
  if (graphWidthBind) graphWidthBind.value = graphW
}

loadRiveGraph()

const detailModal = document.getElementById('detailModal')
const infoModal = document.getElementById('infoModal')

document.querySelectorAll('.rank-row').forEach((row) => {
  row.addEventListener('click', () => {
    const uid = row.dataset.uid
    const u = userDetails[uid]
    if (!u) return
    document.getElementById('detailAvatar').textContent = u.nick.slice(0, 1).toUpperCase()
    document.getElementById('detailNick').textContent = u.nick
    const tierEl = document.getElementById('detailTier')
    tierEl.className = `tier-badge ${u.tier}`
    tierEl.textContent = u.tier.charAt(0).toUpperCase() + u.tier.slice(1)
    document.getElementById('detailStreak').textContent = u.streak
    document.getElementById('detailLong').textContent = u.long
    document.getElementById('detailReward').textContent = u.reward
    detailModal.classList.add('open')
  })
})

document.getElementById('infoBtn').addEventListener('click', () => {
  infoModal.classList.add('open')
})

document.querySelectorAll('[data-close]').forEach((btn) => {
  btn.addEventListener('click', () => {
    detailModal.classList.remove('open')
    infoModal.classList.remove('open')
  })
})

;[detailModal, infoModal].forEach((m) => {
  m.addEventListener('click', (e) => {
    if (e.target === m) m.classList.remove('open')
  })
})

document.getElementById('monthSelect').addEventListener('change', (e) => {
  console.log('month changed to', e.target.value)
})
