import { Rive, decodeFont } from '@rive-app/canvas'

const html = document.documentElement
const toggleBtn = document.getElementById('themeToggle')
const themeIcon = document.getElementById('themeIcon')

const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const initial = saved ?? (prefersDark ? 'dark' : 'light')

function applyTheme(theme) {
  html.dataset.theme = theme
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️'
  localStorage.setItem('theme', theme)
}
applyTheme(initial)
toggleBtn.addEventListener('click', () => {
  applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark')
})

const GRADE_META = {
  diamond: { label: 'Diamond', reward: 500 },
  gold:    { label: 'Gold',    reward: 300 },
  silver:  { label: 'Silver',  reward: 150 },
  bronze:  { label: 'Bronze',  reward: 60 },
}

const ME_ID = 'erin'

const DATASETS = {
  '2026-05': {
    top5: [
      { id: 'kwon',     nick: 'Kwondoooom',    cur: 22, longest: 28 },
      { id: 'lee',      nick: 'JiwooNara',     cur: 18, longest: 24 },
      { id: 'cho',      nick: 'Cho_Streak',    cur: 16, longest: 20 },
      { id: 'park',     nick: 'parkpark',      cur: 14, longest: 18 },
      { id: 'min',      nick: 'minimini',      cur: 12, longest: 15 },
    ],
    me: { id: ME_ID, nick: 'erin', rank: 24, cur: 7, longest: 11, grade: 'gold', reward: 300 },
    diamond: [
      { id: 'd1', nick: 'DiamondAce',   rank: 6, cur: 11, longest: 14 },
      { id: 'd2', nick: 'BluePhoenix',  rank: 7, cur: 10, longest: 13 },
      { id: 'd3', nick: 'IceBear',      rank: 8, cur: 10, longest: 12 },
    ],
    gold: [
      { id: 'g1', nick: 'GoldenGoose',  rank: 9,  cur: 9, longest: 12 },
      { id: 'g2', nick: 'SunRider',     rank: 10, cur: 9, longest: 11 },
      { id: ME_ID, nick: 'erin',        rank: 24, cur: 7, longest: 11, isMe: true },
      { id: 'g3', nick: 'HoneyBee',     rank: 25, cur: 7, longest: 10 },
    ],
    silver: [
      { id: 's1', nick: 'SilverFox',    rank: 40, cur: 5, longest: 8 },
      { id: 's2', nick: 'MoonChaser',   rank: 41, cur: 5, longest: 7 },
      { id: 's3', nick: 'NightOwl',     rank: 42, cur: 4, longest: 7 },
    ],
    bronze: [
      { id: 'b1', nick: 'BronzeBuddy',  rank: 80, cur: 2, longest: 4 },
      { id: 'b2', nick: 'CopperJoe',    rank: 81, cur: 2, longest: 3 },
      { id: 'b3', nick: 'EarthWalker',  rank: 82, cur: 1, longest: 2 },
    ],
  },
  '2026-04': {
    top5: [
      { id: 'a1', nick: 'AprilKing',    cur: 25, longest: 30 },
      { id: 'a2', nick: 'AprilQueen',   cur: 20, longest: 26 },
      { id: 'a3', nick: 'SpringRider',  cur: 17, longest: 22 },
      { id: 'a4', nick: 'BloomMaster',  cur: 15, longest: 19 },
      { id: 'a5', nick: 'PetalDance',   cur: 12, longest: 16 },
    ],
    me: { id: ME_ID, nick: 'erin', rank: 31, cur: 6, longest: 10, grade: 'silver', reward: 150 },
    diamond: [
      { id: 'd1', nick: 'DiamondAce',   rank: 6, cur: 12, longest: 15 },
    ],
    gold: [
      { id: 'g1', nick: 'GoldenGoose',  rank: 9, cur: 10, longest: 13 },
    ],
    silver: [
      { id: ME_ID, nick: 'erin',        rank: 31, cur: 6, longest: 10, isMe: true },
      { id: 's2', nick: 'MoonChaser',   rank: 32, cur: 5, longest: 9 },
    ],
    bronze: [
      { id: 'b1', nick: 'BronzeBuddy',  rank: 70, cur: 2, longest: 5 },
    ],
  },
  '2026-03': { top5: [], me: { id: ME_ID, nick: 'erin', rank: 0, cur: 0, longest: 0, grade: 'bronze', reward: 60 }, diamond: [], gold: [], silver: [], bronze: [] },
  '2026-02': { top5: [], me: { id: ME_ID, nick: 'erin', rank: 0, cur: 0, longest: 0, grade: 'bronze', reward: 60 }, diamond: [], gold: [], silver: [], bronze: [] },
  '2026-01': { top5: [], me: { id: ME_ID, nick: 'erin', rank: 0, cur: 0, longest: 0, grade: 'bronze', reward: 60 }, diamond: [], gold: [], silver: [], bronze: [] },
}

const GRAPH_WIDTH_THRESHOLD = 360
const REF_HEIGHT_PX = 280

let riveInstance = null
let riveLoaded = false
let pendingTop5 = null

function ensureTop5Padded(top5) {
  const out = [...top5]
  while (out.length < 5) {
    out.push({ id: `pad-${out.length}`, nick: '-', cur: 0, longest: 0 })
  }
  return out.slice(0, 5)
}

function initRiveGraph(top5Users) {
  const canvas = document.getElementById('rivCanvas')
  const container = canvas.parentElement

  function calcGraphWidth() {
    const w = container.offsetWidth
    const h = container.offsetHeight || REF_HEIGHT_PX
    return w > GRAPH_WIDTH_THRESHOLD ? w : w + Math.max(0, REF_HEIGHT_PX - h)
  }

  function applyTop5(vm, users) {
    const padded = ensureTop5Padded(users)
    const gw = vm.number('graphWidth')
    if (gw) gw.value = calcGraphWidth()

    const allZero = padded.every(u => u.longest === 0)
    const isNoData = riveInstance.stateMachineInputs('State Machine 1')
      ?.find(i => i.name === 'isNoData')
    if (isNoData) isNoData.value = allZero

    const denom = padded[0]?.longest || Math.max(...padded.map(u => u.longest), 1)
    padded.forEach((u, i) => {
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
  }

  riveInstance = new Rive({
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
      riveInstance.resizeDrawingSurfaceToCanvas()
      riveLoaded = true
      requestAnimationFrame(() => {
        const vm = riveInstance.viewModelInstance
        applyTop5(vm, pendingTop5 || top5Users)
      })
    },
  })

  riveInstance.__applyTop5 = applyTop5

  new ResizeObserver(() => {
    if (!riveInstance) return
    riveInstance.resizeDrawingSurfaceToCanvas()
    const gw = riveInstance.viewModelInstance?.number('graphWidth')
    if (gw) gw.value = calcGraphWidth()
  }).observe(container)
}

function updateTop5(top5) {
  pendingTop5 = top5
  if (riveLoaded && riveInstance?.viewModelInstance) {
    requestAnimationFrame(() => {
      riveInstance.__applyTop5(riveInstance.viewModelInstance, top5)
    })
  }
}

function avatarText(nick) {
  return (nick || '?').slice(0, 1).toUpperCase()
}

function gradeBadge(grade) {
  const meta = GRADE_META[grade]
  if (!meta) return ''
  return `<span class="grade-badge ${grade}">${meta.label}</span>`
}

function rowHtml(user, grade, opts = {}) {
  const rewardLine = opts.showReward && GRADE_META[grade]
    ? `<span class="rank-energy">+${GRADE_META[grade].reward} ⚡</span>`
    : ''
  return `
    <div class="rank-row ${opts.isMe ? 'me' : ''}" data-user-id="${user.id}" data-nick="${user.nick}" data-cur="${user.cur}" data-longest="${user.longest}" data-grade="${grade}" data-rank="${user.rank}">
      <div class="rank-rank">${user.rank}</div>
      <div class="rank-avatar">${avatarText(user.nick)}</div>
      <div class="rank-body">
        <div class="rank-nick">${user.nick}</div>
        ${gradeBadge(grade)}
      </div>
      <div class="rank-meta">
        <span class="rank-streak">W${user.cur}</span>
        <span class="rank-sub">최장 ${user.longest}</span>
        ${rewardLine}
      </div>
    </div>
  `
}

function renderMy(data) {
  const me = data.me
  const root = document.getElementById('myRankRow')
  root.innerHTML = rowHtml(me, me.grade, { isMe: true, showReward: true })
}

function renderGrades(data) {
  const wrap = document.getElementById('gradeSections')
  const grades = ['diamond', 'gold', 'silver', 'bronze']
  wrap.innerHTML = grades.map(g => {
    const meta = GRADE_META[g]
    const list = data[g] || []
    const rows = list.map(u => rowHtml(u, g, { isMe: u.isMe })).join('') || `<div class="rank-row" style="cursor:default;color:var(--color-text-50);"><div></div><div></div><div class="rank-body"><div class="rank-nick" style="font-weight:400;font-size:13px;color:var(--color-text-50);">아직 이 등급에 유저가 없어요</div></div><div></div></div>`
    return `
      <div class="grade-section">
        <div class="grade-header">
          <div class="grade-name"><span class="grade-medal ${g}"></span>${meta.label}</div>
          <div class="grade-reward">+${meta.reward} ⚡</div>
        </div>
        ${rows}
      </div>
    `
  }).join('')
}

function attachRowHandlers() {
  document.querySelectorAll('.rank-row[data-user-id]').forEach(row => {
    row.addEventListener('click', () => {
      openUserSheet({
        nick: row.dataset.nick,
        cur: Number(row.dataset.cur),
        longest: Number(row.dataset.longest),
        grade: row.dataset.grade,
        rank: row.dataset.rank,
      })
    })
  })
}

function openUserSheet(u) {
  const sheet = document.getElementById('userSheet')
  const meta = GRADE_META[u.grade]
  sheet.innerHTML = `
    <div class="sheet-avatar">${avatarText(u.nick)}</div>
    <div class="sheet-nick">${u.nick}</div>
    ${gradeBadge(u.grade)}
    <div class="sheet-stats">
      <div class="sheet-stat">
        <span class="sheet-stat-label">현재 스트릭</span>
        <span class="sheet-stat-value">W${u.cur}</span>
      </div>
      <div class="sheet-stat">
        <span class="sheet-stat-label">최장 스트릭</span>
        <span class="sheet-stat-value">${u.longest}</span>
      </div>
      <div class="sheet-stat">
        <span class="sheet-stat-label">예상 보상</span>
        <span class="sheet-stat-value">+${meta?.reward ?? 0}⚡</span>
      </div>
    </div>
    <button class="sheet-close" id="userSheetClose">닫기</button>
  `
  document.getElementById('userScrim').classList.add('open')
  document.getElementById('userSheetClose').addEventListener('click', closeSheets)
}

function closeSheets() {
  document.getElementById('userScrim').classList.remove('open')
  document.getElementById('infoScrim').classList.remove('open')
}

document.getElementById('userScrim').addEventListener('click', e => {
  if (e.target.id === 'userScrim') closeSheets()
})
document.getElementById('infoScrim').addEventListener('click', e => {
  if (e.target.id === 'infoScrim') closeSheets()
})
document.getElementById('infoBtn').addEventListener('click', () => {
  document.getElementById('infoScrim').classList.add('open')
})
document.getElementById('infoClose').addEventListener('click', closeSheets)

function loadMonth(month) {
  const data = DATASETS[month] || DATASETS['2026-05']
  renderMy(data)
  renderGrades(data)
  attachRowHandlers()
  updateTop5(data.top5)
}

const monthSelect = document.getElementById('monthSelect')
monthSelect.addEventListener('change', e => loadMonth(e.target.value))

const initialMonth = monthSelect.value
const initialData = DATASETS[initialMonth] || DATASETS['2026-05']
renderMy(initialData)
renderGrades(initialData)
attachRowHandlers()
initRiveGraph(initialData.top5)
