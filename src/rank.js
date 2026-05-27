import { Rive, decodeFont } from 'https://esm.sh/@rive-app/canvas@2.21.6'

/* ---------------- Theme ---------------- */
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
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark'
  applyTheme(next)
})

/* ---------------- Mock data ---------------- */
const AVATAR_PALETTE = [
  'var(--gradient-top5)',
  'var(--gradient-diamond)',
  'var(--gradient-platinum)',
  'var(--gradient-gold)',
  'var(--gradient-silver)',
  'var(--gradient-bronze)',
  'var(--gradient-quiz)',
  'var(--gradient-boost)',
  'var(--gradient-boosterwall)',
  'var(--gradient-spark)',
]

const GRADE_GRADIENT = {
  Diamond: 'var(--gradient-diamond)',
  Platinum: 'var(--gradient-platinum)',
  Gold: 'var(--gradient-gold)',
  Silver: 'var(--gradient-silver)',
  Bronze: 'var(--gradient-bronze)',
  Participant: 'var(--gradient-participant)',
}
const GRADE_REWARD = {
  Diamond: 45, Platinum: 30, Gold: 20, Silver: 12, Bronze: 6, Participant: 2,
}

function user(id, rank, nick, grade, current, longest) {
  return { id, rank, nick, grade, current, longest, reward: GRADE_REWARD[grade] ?? 0 }
}

/* monthly datasets — keyed by yyyy-mm */
const DATA = {
  '2026-05': [
    user('u1', 1, 'streakking', 'Diamond', 28, 28),
    user('u2', 2, 'mira',       'Diamond', 24, 26),
    user('u3', 3, 'jaylogs',    'Diamond', 21, 24),
    user('u4', 4, 'pico',       'Diamond', 18, 22),
    user('u5', 5, 'donghae',    'Diamond', 16, 20),
    user('u6', 6, 'kang',       'Diamond', 15, 18),
    user('u7', 7, 'leeha',      'Platinum', 12, 16),
    user('u8', 8, 'nori',       'Platinum', 11, 14),
    user('u9', 9, 'min',        'Platinum', 10, 13),
    user('u10', 10, 'soo',      'Gold',     9, 12),
    user('u11', 11, 'taeya',    'Gold',     8, 11),
    user('me',  12, 'erin',     'Gold',     7, 10),
    user('u13', 13, 'hyun',     'Gold',     6, 9),
    user('u14', 14, 'kal',      'Silver',   5, 8),
    user('u15', 15, 'rin',      'Silver',   4, 7),
    user('u16', 16, 'choi',     'Silver',   3, 6),
    user('u17', 17, 'park',     'Bronze',   2, 5),
    user('u18', 18, 'na',       'Bronze',   2, 4),
    user('u19', 19, 'kim',      'Bronze',   1, 3),
    user('u20', 20, 'lee',      'Participant', 1, 2),
    user('u21', 21, 'oh',       'Participant', 0, 1),
    user('u22', 22, 'son',      'Participant', 0, 0),
  ],
  '2026-04': [
    user('u1', 1, 'mira',       'Diamond', 26, 26),
    user('u2', 2, 'streakking', 'Diamond', 22, 24),
    user('u3', 3, 'jaylogs',    'Diamond', 20, 22),
    user('u4', 4, 'donghae',    'Diamond', 17, 20),
    user('u5', 5, 'pico',       'Diamond', 15, 19),
    user('u6', 6, 'kang',       'Platinum', 13, 17),
    user('u7', 7, 'leeha',      'Platinum', 11, 15),
    user('me', 8, 'erin',       'Platinum', 10, 14),
    user('u9', 9, 'min',        'Gold',     9, 12),
    user('u10', 10, 'soo',      'Gold',     8, 11),
    user('u11', 11, 'taeya',    'Silver',   6, 9),
    user('u12', 12, 'hyun',     'Silver',   5, 8),
    user('u13', 13, 'rin',      'Bronze',   3, 5),
    user('u14', 14, 'park',     'Bronze',   2, 4),
    user('u15', 15, 'lee',      'Participant', 1, 2),
  ],
  '2026-03': [
    user('u1', 1, 'jaylogs',    'Diamond', 30, 30),
    user('u2', 2, 'streakking', 'Diamond', 25, 28),
    user('u3', 3, 'mira',       'Diamond', 22, 25),
    user('u4', 4, 'pico',       'Diamond', 18, 21),
    user('u5', 5, 'donghae',    'Diamond', 16, 19),
    user('me', 18, 'erin',      'Bronze',  3, 5),
  ],
  '2026-02': [
    user('u1', 1, 'donghae',    'Diamond', 22, 24),
    user('u2', 2, 'mira',       'Diamond', 20, 22),
    user('u3', 3, 'streakking', 'Diamond', 18, 20),
    user('u4', 4, 'jaylogs',    'Diamond', 15, 18),
    user('u5', 5, 'pico',       'Diamond', 12, 16),
    user('me', 9, 'erin',       'Gold',    7, 10),
  ],
  '2026-01': [
    user('u1', 1, 'pico',       'Diamond', 14, 14),
    user('u2', 2, 'streakking', 'Diamond', 12, 13),
    user('u3', 3, 'mira',       'Diamond', 10, 12),
    user('u4', 4, 'jaylogs',    'Diamond', 9, 11),
    user('u5', 5, 'donghae',    'Diamond', 8, 10),
    user('me', 15, 'erin',      'Silver',  4, 6),
  ],
}

/* ---------------- Helpers ---------------- */
function avatarBg(seed) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return AVATAR_PALETTE[h % AVATAR_PALETTE.length]
}
function initial(nick) { return (nick || '?').charAt(0).toUpperCase() }

function rankRowHTML(u, opts = {}) {
  const isMe = u.id === 'me'
  return `
    <div class="rank-row ${isMe ? 'is-me' : ''}" data-user-id="${u.id}" tabindex="0">
      <div class="rank-num">${u.rank}</div>
      <div class="rank-avatar" style="background:${avatarBg(u.id + u.nick)}">${initial(u.nick)}</div>
      <div class="rank-info">
        <div class="rank-nick">${u.nick}${isMe ? ' (나)' : ''}</div>
        <span class="rank-badge" style="background:${GRADE_GRADIENT[u.grade]}">${u.grade}</span>
      </div>
      <div class="rank-stats">
        <div class="rank-streak">W${u.current}</div>
        <div class="rank-sub">최장 ${u.longest}</div>
        <div class="rank-reward">+${u.reward} ⚡</div>
      </div>
    </div>
  `
}

function myRankCardHTML(u) {
  return `
    <div class="my-rank-label">My Ranking</div>
    <div class="rank-num">${u.rank}</div>
    <div class="rank-avatar" style="background:${avatarBg(u.id + u.nick)}">${initial(u.nick)}</div>
    <div class="rank-info">
      <div class="rank-nick">${u.nick}</div>
      <span class="rank-badge" style="background:${GRADE_GRADIENT[u.grade]}">${u.grade}</span>
    </div>
    <div class="rank-stats">
      <div class="rank-streak">W${u.current}</div>
      <div class="rank-sub">최장 ${u.longest}</div>
      <div class="rank-reward">+${u.reward} ⚡</div>
    </div>
  `
}

/* ---------------- Render ---------------- */
const monthSelect = document.getElementById('monthSelect')
const myRankCard = document.getElementById('myRankCard')

let currentMonth = monthSelect.value
let usersById = new Map()
let riveInstance = null

function getUsers(month) {
  return DATA[month] || []
}

function render(month) {
  const users = getUsers(month)
  usersById = new Map(users.map(u => [u.id, u]))

  // My ranking
  const me = users.find(u => u.id === 'me')
  if (me) {
    myRankCard.innerHTML = myRankCardHTML(me)
    myRankCard.style.display = 'grid'
  } else {
    myRankCard.innerHTML = '<div class="my-rank-label" style="grid-column:1/-1;text-align:center;color:var(--color-text-50)">이 달 랭킹에 참여한 기록이 없습니다.</div>'
    myRankCard.style.display = 'grid'
  }

  // Grade sections (rank >= 6)
  document.querySelectorAll('.grade-list').forEach(list => {
    const grade = list.dataset.grade
    const rows = users
      .filter(u => u.grade === grade && u.rank >= 6)
      .map(u => rankRowHTML(u))
      .join('')
    list.innerHTML = rows || `<div style="padding:14px 16px;color:var(--color-text-50);font-size:13px;text-align:center;">이 등급의 사용자가 없습니다.</div>`
  })

  // Top 5 → Rive
  const top5 = users.slice(0, 5).map(u => ({
    cur: u.current,
    longest: u.longest,
    nick: u.nick,
  }))
  while (top5.length < 5) top5.push({ cur: 0, longest: 0, nick: '—' })

  if (riveInstance) {
    updateRiveBars(riveInstance, top5)
  } else {
    initRiveGraph(top5)
  }
}

/* ---------------- Rive graph ---------------- */
const GRAPH_WIDTH_THRESHOLD = 360
const REF_HEIGHT_PX = 280

function calcGraphWidth(container) {
  const w = container.offsetWidth
  const h = container.offsetHeight || REF_HEIGHT_PX
  return w > GRAPH_WIDTH_THRESHOLD ? w : w + Math.max(0, REF_HEIGHT_PX - h)
}

function updateRiveBars(r, top5Users) {
  const vm = r.viewModelInstance
  if (!vm) return

  const canvas = document.getElementById('rivCanvas')
  const container = canvas.parentElement

  const gw = vm.number('graphWidth')
  if (gw) gw.value = calcGraphWidth(container)

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
}

function initRiveGraph(top5Users) {
  const canvas = document.getElementById('rivCanvas')
  const container = canvas.parentElement

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
      requestAnimationFrame(() => updateRiveBars(r, top5Users))
    },
  })

  riveInstance = r

  new ResizeObserver(() => {
    r.resizeDrawingSurfaceToCanvas()
    const gw = r.viewModelInstance?.number('graphWidth')
    if (gw) gw.value = calcGraphWidth(container)
  }).observe(container)
}

/* ---------------- Modal interactions ---------------- */
const scrim = document.getElementById('modalScrim')
const userModal = document.getElementById('userModal')
const userModalAvatar = document.getElementById('userModalAvatar')
const userModalNick = document.getElementById('userModalNick')
const userModalBadge = document.getElementById('userModalBadge')
const userModalCurrent = document.getElementById('userModalCurrent')
const userModalLongest = document.getElementById('userModalLongest')
const userModalReward = document.getElementById('userModalReward')
const userModalClose = document.getElementById('userModalClose')

const infoBtn = document.getElementById('infoBtn')
const infoModal = document.getElementById('infoModal')
const infoClose = document.getElementById('infoClose')

function openUserModal(u) {
  userModalAvatar.textContent = initial(u.nick)
  userModalAvatar.style.background = avatarBg(u.id + u.nick)
  userModalNick.textContent = u.nick
  userModalBadge.textContent = u.grade
  userModalBadge.style.background = GRADE_GRADIENT[u.grade]
  userModalCurrent.textContent = `W${u.current}`
  userModalLongest.textContent = u.longest
  userModalReward.textContent = `+${u.reward} ⚡`
  scrim.classList.add('open')
  userModal.classList.add('open')
}
function closeUserModal() {
  scrim.classList.remove('open')
  userModal.classList.remove('open')
}
function openInfoModal() {
  scrim.classList.add('open')
  infoModal.classList.add('open')
}
function closeInfoModal() {
  infoModal.classList.remove('open')
  if (!userModal.classList.contains('open')) scrim.classList.remove('open')
}

document.addEventListener('click', e => {
  const row = e.target.closest('[data-user-id]')
  if (!row) return
  const u = usersById.get(row.dataset.userId)
  if (u) openUserModal(u)
})

scrim.addEventListener('click', () => {
  if (userModal.classList.contains('open')) closeUserModal()
  if (infoModal.classList.contains('open')) closeInfoModal()
})
userModalClose.addEventListener('click', closeUserModal)
infoBtn.addEventListener('click', openInfoModal)
infoClose.addEventListener('click', closeInfoModal)

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (userModal.classList.contains('open')) closeUserModal()
    if (infoModal.classList.contains('open')) closeInfoModal()
  }
})

/* ---------------- Month switch ---------------- */
monthSelect.addEventListener('change', () => {
  currentMonth = monthSelect.value
  render(currentMonth)
})

/* ---------------- Init ---------------- */
render(currentMonth)
