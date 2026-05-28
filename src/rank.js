import { Rive, decodeFont } from '@rive-app/canvas'

const THEME_KEY = 'theme'
function applyTheme(theme) { document.documentElement.dataset.theme = theme }
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(saved ?? (prefersDark ? 'dark' : 'light'))
}
initTheme()

const GRADES = [
  { key: 'diamond',     name: 'DIAMOND',     reward: 500, cls: 'grade-bg-diamond' },
  { key: 'platinum',    name: 'PLATINUM',    reward: 300, cls: 'grade-bg-platinum' },
  { key: 'gold',        name: 'GOLD',        reward: 180, cls: 'grade-bg-gold' },
  { key: 'silver',      name: 'SILVER',      reward: 100, cls: 'grade-bg-silver' },
  { key: 'bronze',      name: 'BRONZE',      reward: 50,  cls: 'grade-bg-bronze' },
  { key: 'participant', name: 'PARTICIPANT', reward: 10,  cls: 'grade-bg-participant' },
]

const ME_ID = 'erin'

const MOCK_USERS_BY_MONTH = {
  '2026-05': [
    { id: 'kim',     nick: 'Kim',     cur: 12, longest: 18, grade: 'diamond' },
    { id: 'lee',     nick: 'Lee',     cur: 8,  longest: 15, grade: 'diamond' },
    { id: 'park',    nick: 'Park',    cur: 14, longest: 14, grade: 'diamond' },
    { id: 'choi',    nick: 'Choi',    cur: 5,  longest: 13, grade: 'diamond' },
    { id: 'jeong',   nick: 'Jeong',   cur: 11, longest: 11, grade: 'diamond' },
    { id: 'kang',    nick: 'Kang',    cur: 6,  longest: 9,  grade: 'platinum' },
    { id: 'yoon',    nick: 'Yoon',    cur: 4,  longest: 8,  grade: 'platinum' },
    { id: 'jang',    nick: 'Jang',    cur: 7,  longest: 7,  grade: 'platinum' },
    { id: 'erin',    nick: 'Erin',    cur: 5,  longest: 6,  grade: 'gold' },
    { id: 'lim',     nick: 'Lim',     cur: 3,  longest: 5,  grade: 'gold' },
    { id: 'oh',      nick: 'Oh',      cur: 2,  longest: 4,  grade: 'silver' },
    { id: 'han',     nick: 'Han',     cur: 1,  longest: 3,  grade: 'silver' },
    { id: 'seo',     nick: 'Seo',     cur: 1,  longest: 2,  grade: 'bronze' },
    { id: 'shin',    nick: 'Shin',    cur: 0,  longest: 1,  grade: 'bronze' },
    { id: 'baek',    nick: 'Baek',    cur: 0,  longest: 0,  grade: 'participant' },
  ],
  '2026-04': [
    { id: 'kim',   nick: 'Kim',   cur: 9,  longest: 14, grade: 'diamond' },
    { id: 'park',  nick: 'Park',  cur: 7,  longest: 12, grade: 'diamond' },
    { id: 'lee',   nick: 'Lee',   cur: 5,  longest: 10, grade: 'diamond' },
    { id: 'erin',  nick: 'Erin',  cur: 4,  longest: 8,  grade: 'diamond' },
    { id: 'choi',  nick: 'Choi',  cur: 6,  longest: 7,  grade: 'diamond' },
    { id: 'kang',  nick: 'Kang',  cur: 3,  longest: 6,  grade: 'platinum' },
    { id: 'yoon',  nick: 'Yoon',  cur: 2,  longest: 4,  grade: 'gold' },
    { id: 'lim',   nick: 'Lim',   cur: 1,  longest: 3,  grade: 'silver' },
  ],
  '2026-03': [
    { id: 'kim',  nick: 'Kim',  cur: 4, longest: 8, grade: 'platinum' },
    { id: 'erin', nick: 'Erin', cur: 3, longest: 5, grade: 'gold' },
    { id: 'lee',  nick: 'Lee',  cur: 2, longest: 3, grade: 'silver' },
  ],
  '2026-02': [],
  '2026-01': [],
}

const $month  = document.getElementById('month-select')
const $myRank = document.getElementById('my-rank')
const $grades = document.getElementById('grade-list')

const $modal       = document.getElementById('detail-modal')
const $dAvatar     = document.getElementById('d-avatar')
const $dNick       = document.getElementById('d-nick')
const $dGrade      = document.getElementById('d-grade')
const $dCur        = document.getElementById('d-cur')
const $dLongest    = document.getElementById('d-longest')
const $dReward     = document.getElementById('d-reward')

const $infoBtn     = document.getElementById('info-btn')
const $infoModal   = document.getElementById('info-modal')

function sortUsers(users) {
  return [...users].sort((a, b) => {
    if (b.longest !== a.longest) return b.longest - a.longest
    return b.cur - a.cur
  })
}

function gradeOf(key) { return GRADES.find(g => g.key === key) }

function initialOf(nick) { return (nick || '?').slice(0, 1).toUpperCase() }

function openDetail(user) {
  const g = gradeOf(user.grade)
  $dAvatar.textContent = initialOf(user.nick)
  $dNick.textContent = user.nick
  $dGrade.textContent = g ? g.name : ''
  $dGrade.className = `badge ${g ? g.cls : ''}`
  $dCur.textContent = user.cur
  $dLongest.textContent = user.longest
  $dReward.textContent = g ? g.reward : 0
  $modal.classList.add('open')
}

function closeDetail() { $modal.classList.remove('open') }

document.getElementById('d-close').addEventListener('click', closeDetail)
$modal.addEventListener('click', (e) => {
  if (e.target === $modal) closeDetail()
})

$infoBtn.addEventListener('click', () => $infoModal.classList.add('open'))
document.getElementById('info-close').addEventListener('click', () => $infoModal.classList.remove('open'))
$infoModal.addEventListener('click', (e) => {
  if (e.target === $infoModal) $infoModal.classList.remove('open')
})

function renderMyRank(sorted) {
  const myIdx = sorted.findIndex(u => u.id === ME_ID)
  if (myIdx < 0) {
    $myRank.innerHTML = ''
    return
  }
  const me = sorted[myIdx]
  const g = gradeOf(me.grade)
  $myRank.innerHTML = ''
  const card = document.createElement('div')
  card.className = 'my-rank-card'
  card.innerHTML = `
    <div class="rank-num">${myIdx + 1}</div>
    <div class="avatar">${initialOf(me.nick)}</div>
    <div class="meta">
      <span class="nick">${me.nick} (나)</span>
      <span class="grade-badge">${g ? g.name : ''}</span>
    </div>
    <div class="stats">
      <span class="cur">W${me.cur}</span>
      <span class="sub">최장 ${me.longest} · 보상 ${g ? g.reward : 0}</span>
    </div>
  `
  card.addEventListener('click', () => openDetail(me))
  $myRank.appendChild(card)
}

function renderGradeList(sorted) {
  $grades.innerHTML = ''
  const grouped = new Map()
  sorted.forEach((u, idx) => {
    const rank = idx + 1
    if (rank <= 5) return
    if (!grouped.has(u.grade)) grouped.set(u.grade, [])
    grouped.get(u.grade).push({ ...u, rank })
  })

  GRADES.forEach(g => {
    const users = grouped.get(g.key)
    if (!users || users.length === 0) return
    const section = document.createElement('section')
    section.className = 'grade-section'
    const head = document.createElement('div')
    head.className = 'grade-head'
    head.innerHTML = `
      <span class="grade ${g.cls}">${g.name}</span>
      <span class="reward">+${g.reward} 에너지</span>
    `
    section.appendChild(head)
    users.forEach(u => {
      const row = document.createElement('div')
      row.className = `user-row${u.id === ME_ID ? ' me' : ''}`
      row.innerHTML = `
        <div class="rank-num">${u.rank}</div>
        <div class="avatar">${initialOf(u.nick)}</div>
        <div class="meta">
          <span class="nick">${u.nick}${u.id === ME_ID ? ' (나)' : ''}</span>
          <span class="badge ${g.cls}">${g.name}</span>
        </div>
        <div class="stats">
          <span class="cur">W${u.cur}</span>
          <span class="sub">최장 ${u.longest}</span>
        </div>
      `
      row.addEventListener('click', () => openDetail(u))
      section.appendChild(row)
    })
    $grades.appendChild(section)
  })
}

const GRAPH_WIDTH_THRESHOLD = 360
const REF_HEIGHT_PX = 280

let riveInstance = null
let resizeObserver = null

function initRiveGraph(top5Users) {
  const canvas = document.getElementById('rivCanvas')
  const container = canvas.parentElement

  function calcGraphWidth() {
    const w = container.offsetWidth
    const h = container.offsetHeight || REF_HEIGHT_PX
    return w > GRAPH_WIDTH_THRESHOLD ? w : w + Math.max(0, REF_HEIGHT_PX - h)
  }

  if (riveInstance) {
    try { riveInstance.cleanup() } catch {}
    riveInstance = null
  }
  if (resizeObserver) {
    try { resizeObserver.disconnect() } catch {}
    resizeObserver = null
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

  resizeObserver = new ResizeObserver(() => {
    r.resizeDrawingSurfaceToCanvas()
    const gw = r.viewModelInstance?.number('graphWidth')
    if (gw) gw.value = calcGraphWidth()
  })
  resizeObserver.observe(container)
}

function padTop5(top5) {
  const result = top5.slice(0, 5)
  while (result.length < 5) {
    result.push({ id: `_placeholder_${result.length}`, nick: '-', cur: 0, longest: 0, grade: 'participant' })
  }
  return result
}

function refresh(month) {
  const users = MOCK_USERS_BY_MONTH[month] || []
  const sorted = sortUsers(users)
  const top5 = padTop5(sorted)

  initRiveGraph(top5)
  renderMyRank(sorted)
  renderGradeList(sorted)
}

$month.addEventListener('change', (e) => refresh(e.target.value))
refresh($month.value)
