import { Rive, decodeFont } from '@rive-app/canvas'

const html = document.documentElement
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
html.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light')

const GRAPH_WIDTH_THRESHOLD = 360
const REF_HEIGHT_PX = 280

const GRADES = [
  { key: 'diamond', name: 'Diamond', reward: 500 },
  { key: 'gold',    name: 'Gold',    reward: 300 },
  { key: 'silver',  name: 'Silver',  reward: 150 },
  { key: 'bronze',  name: 'Bronze',  reward: 50  },
]

const MOCK_USERS_BY_MONTH = {
  '2026-05': [
    { rank: 1,  nick: 'erin',     cur: 28, longest: 28, grade: 'diamond', isMe: true  },
    { rank: 2,  nick: 'leo',      cur: 24, longest: 26, grade: 'diamond', isMe: false },
    { rank: 3,  nick: 'mira',     cur: 22, longest: 25, grade: 'diamond', isMe: false },
    { rank: 4,  nick: 'jay',      cur: 20, longest: 22, grade: 'diamond', isMe: false },
    { rank: 5,  nick: 'soo',      cur: 18, longest: 20, grade: 'diamond', isMe: false },
    { rank: 6,  nick: 'kai',      cur: 14, longest: 16, grade: 'gold',    isMe: false },
    { rank: 7,  nick: 'noa',      cur: 12, longest: 15, grade: 'gold',    isMe: false },
    { rank: 8,  nick: 'rio',      cur: 11, longest: 14, grade: 'gold',    isMe: false },
    { rank: 9,  nick: 'lin',      cur: 9,  longest: 11, grade: 'silver',  isMe: false },
    { rank: 10, nick: 'tao',      cur: 7,  longest: 10, grade: 'silver',  isMe: false },
    { rank: 11, nick: 'aki',      cur: 5,  longest: 9,  grade: 'silver',  isMe: false },
    { rank: 12, nick: 'min',      cur: 3,  longest: 6,  grade: 'bronze',  isMe: false },
    { rank: 13, nick: 'rae',      cur: 2,  longest: 4,  grade: 'bronze',  isMe: false },
    { rank: 14, nick: 'sky',      cur: 1,  longest: 3,  grade: 'bronze',  isMe: false },
  ],
  '2026-04': [
    { rank: 1,  nick: 'leo',      cur: 30, longest: 30, grade: 'diamond', isMe: false },
    { rank: 2,  nick: 'mira',     cur: 27, longest: 29, grade: 'diamond', isMe: false },
    { rank: 3,  nick: 'erin',     cur: 22, longest: 24, grade: 'diamond', isMe: true  },
    { rank: 4,  nick: 'jay',      cur: 18, longest: 21, grade: 'diamond', isMe: false },
    { rank: 5,  nick: 'noa',      cur: 16, longest: 19, grade: 'diamond', isMe: false },
    { rank: 6,  nick: 'kai',      cur: 13, longest: 17, grade: 'gold',    isMe: false },
    { rank: 7,  nick: 'soo',      cur: 11, longest: 14, grade: 'gold',    isMe: false },
    { rank: 8,  nick: 'rio',      cur: 8,  longest: 12, grade: 'silver',  isMe: false },
    { rank: 9,  nick: 'lin',      cur: 5,  longest: 8,  grade: 'silver',  isMe: false },
    { rank: 10, nick: 'aki',      cur: 2,  longest: 5,  grade: 'bronze',  isMe: false },
    { rank: 11, nick: 'rae',      cur: 1,  longest: 3,  grade: 'bronze',  isMe: false },
  ],
  '2026-03': [
    { rank: 1,  nick: 'mira',     cur: 26, longest: 28, grade: 'diamond', isMe: false },
    { rank: 2,  nick: 'jay',      cur: 21, longest: 25, grade: 'diamond', isMe: false },
    { rank: 3,  nick: 'leo',      cur: 19, longest: 22, grade: 'diamond', isMe: false },
    { rank: 4,  nick: 'noa',      cur: 16, longest: 20, grade: 'diamond', isMe: false },
    { rank: 5,  nick: 'soo',      cur: 14, longest: 18, grade: 'diamond', isMe: false },
    { rank: 6,  nick: 'erin',     cur: 12, longest: 15, grade: 'gold',    isMe: true  },
    { rank: 7,  nick: 'kai',      cur: 10, longest: 13, grade: 'gold',    isMe: false },
    { rank: 8,  nick: 'rio',      cur: 7,  longest: 11, grade: 'silver',  isMe: false },
    { rank: 9,  nick: 'lin',      cur: 4,  longest: 8,  grade: 'silver',  isMe: false },
    { rank: 10, nick: 'min',      cur: 2,  longest: 5,  grade: 'bronze',  isMe: false },
  ],
}

const MONTH_LABEL = {
  '2026-05': '2026년 5월',
  '2026-04': '2026년 4월',
  '2026-03': '2026년 3월',
}

let riveInstance = null
let currentMonth = '2026-05'

// ===== Month selector =====
const monthSelect = document.getElementById('monthSelect')
Object.keys(MOCK_USERS_BY_MONTH).forEach((m) => {
  const opt = document.createElement('option')
  opt.value = m
  opt.textContent = MONTH_LABEL[m] ?? m
  monthSelect.appendChild(opt)
})
monthSelect.value = currentMonth
monthSelect.addEventListener('change', (e) => {
  currentMonth = e.target.value
  render()
})

// ===== Rive setup =====
function initRiveGraph(top5Users) {
  const canvas = document.getElementById('rivCanvas')
  const container = canvas.parentElement

  function calcGraphWidth() {
    const w = container.offsetWidth
    const h = container.offsetHeight || REF_HEIGHT_PX
    return w > GRAPH_WIDTH_THRESHOLD ? w : w + Math.max(0, REF_HEIGHT_PX - h)
  }

  if (riveInstance) {
    try { riveInstance.cleanup() } catch (_) {}
    riveInstance = null
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
        return true
      }
      return false
    },
    onLoad() {
      r.resizeDrawingSurfaceToCanvas()

      requestAnimationFrame(() => {
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

  riveInstance = r

  new ResizeObserver(() => {
    r.resizeDrawingSurfaceToCanvas()
    const gw = r.viewModelInstance?.number('graphWidth')
    if (gw) gw.value = calcGraphWidth()
  }).observe(container)
}

// ===== Renderers =====
const initial = (s) => (s?.[0] || '?').toUpperCase()
const rewardForGrade = (g) => GRADES.find(x => x.key === g)?.reward ?? 0

function renderMyRank(users) {
  const me = users.find(u => u.isMe)
  const el = document.getElementById('myRank')
  if (!me) {
    el.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 8px 0;">랭킹 정보가 없습니다.</div>`
    return
  }
  el.innerHTML = `
    <div class="rank-num">${me.rank}</div>
    <div class="avatar">${initial(me.nick)}</div>
    <div class="nickname">
      <span>${me.nick}</span>
      <span class="grade-badge ${me.grade}">${me.grade}</span>
    </div>
    <div class="grade-badge ${me.grade}" style="display:none;"></div>
    <div class="streak-cur">W${me.cur}</div>
    <div class="meta">
      <span>최장 ${me.longest}</span>
      <span>보상 ${rewardForGrade(me.grade)} ⚡</span>
    </div>
  `
}

function renderGradeSections(users) {
  const others = users.filter(u => u.rank > 5)
  const byGrade = {}
  GRADES.forEach(g => { byGrade[g.key] = [] })
  others.forEach(u => { if (byGrade[u.grade]) byGrade[u.grade].push(u) })

  const root = document.getElementById('gradeList')
  root.innerHTML = ''

  GRADES.forEach((g) => {
    const list = byGrade[g.key]
    if (!list || list.length === 0) return

    const section = document.createElement('div')
    section.className = 'grade-section'
    section.innerHTML = `
      <div class="grade-header">
        <div class="grade-name">
          <span class="grade-dot ${g.key}"></span>
          <span>${g.name}</span>
        </div>
        <div class="reward">예상 보상 ${g.reward} ⚡</div>
      </div>
      ${list.map(u => `
        <div class="rank-row ${u.isMe ? 'is-me' : ''}" data-nick="${u.nick}">
          <div class="rnum">${u.rank}</div>
          <div class="avatar">${initial(u.nick)}</div>
          <div class="nick"><span>${u.nick}</span></div>
          <div class="badge-line"><span class="grade-badge ${u.grade}">${u.grade}</span></div>
          <div class="cur">W${u.cur}</div>
          <div class="meta-r">최장 ${u.longest} · 보상 ${rewardForGrade(u.grade)}</div>
        </div>
      `).join('')}
    `
    root.appendChild(section)
  })

  root.querySelectorAll('.rank-row').forEach((row) => {
    row.addEventListener('click', () => {
      const nick = row.dataset.nick
      const u = users.find(x => x.nick === nick)
      if (u) openDetail(u)
    })
  })
}

function render() {
  const users = MOCK_USERS_BY_MONTH[currentMonth] ?? []
  const top5 = users.slice(0, 5)
  initRiveGraph(top5)
  renderMyRank(users)
  renderGradeSections(users)
}

render()

// ===== Modals =====
function openDetail(u) {
  document.getElementById('mAvatar').textContent = initial(u.nick)
  document.getElementById('mNick').textContent = u.nick
  document.getElementById('mBadge').innerHTML = `<span class="grade-badge ${u.grade}">${u.grade}</span>`
  document.getElementById('mCur').textContent = `W${u.cur}`
  document.getElementById('mLong').textContent = u.longest
  document.getElementById('mReward').textContent = `${rewardForGrade(u.grade)} ⚡`
  document.getElementById('detailModal').classList.add('open')
}

const detailModal = document.getElementById('detailModal')
detailModal.addEventListener('click', (e) => {
  if (e.target === detailModal) detailModal.classList.remove('open')
})
document.getElementById('detailClose').addEventListener('click', () => {
  detailModal.classList.remove('open')
})

const infoModal = document.getElementById('infoModal')
document.getElementById('infoBtn').addEventListener('click', () => {
  infoModal.classList.add('open')
})
document.getElementById('infoClose').addEventListener('click', () => {
  infoModal.classList.remove('open')
})
infoModal.addEventListener('click', (e) => {
  if (e.target === infoModal) infoModal.classList.remove('open')
})
