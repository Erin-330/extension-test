import { Rive, decodeFont } from '@rive-app/canvas'

const THEME_KEY = 'theme'
function applyTheme(theme) { document.documentElement.dataset.theme = theme }
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(saved ?? (prefersDark ? 'dark' : 'light'))
}
initTheme()

const FIRE_RIV_SRC = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/streak-status-fire.riv'
const PRETENDARD_FONT_URL = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/fonts/PretendardVariable-3557044.ttf'

const TODAY = new Date(2026, 4, 28)

const MONTH_DATA = {
  '2026-05': {
    currentStreak: 5,
    longestStreak: 7,
    streakDays: [3, 4, 5, 6, 7, 10, 11, 12, 14, 15, 18, 24, 25, 26, 27, 28],
    activeDays: [1, 2, 8, 9, 13, 16, 17, 19, 20, 21, 22, 23],
    picks: {
      28: [
        { match_id: 'm-528-1', teams: [{ id: 'lal', initial: 'LAL' }, { id: 'gsw', initial: 'GSW' }], scores: [108, 102], selected_team_id: 'lal', is_correct: true, status: 'completed', pass: false },
        { match_id: 'm-528-2', teams: [{ id: 'mia', initial: 'MIA' }, { id: 'bos', initial: 'BOS' }], scores: [98, 110], selected_team_id: 'bos', is_correct: true, status: 'completed', pass: false },
      ],
      27: [
        { match_id: 'm-527-1', teams: [{ id: 'phx', initial: 'PHX' }, { id: 'den', initial: 'DEN' }], scores: [115, 112], selected_team_id: 'phx', is_correct: true, status: 'completed', pass: false },
      ],
      26: [
        { match_id: 'm-526-1', teams: [{ id: 'nyk', initial: 'NYK' }, { id: 'phi', initial: 'PHI' }], scores: [104, 99], selected_team_id: 'nyk', is_correct: true, status: 'completed', pass: false },
        { match_id: 'm-526-2', teams: [{ id: 'mil', initial: 'MIL' }, { id: 'chi', initial: 'CHI' }], scores: [120, 95], selected_team_id: 'mil', is_correct: true, status: 'completed', pass: false },
      ],
      24: [
        { match_id: 'm-524-1', teams: [{ id: 'dal', initial: 'DAL' }, { id: 'hou', initial: 'HOU' }], scores: [110, 100], selected_team_id: null, is_correct: false, status: 'completed', pass: true },
      ],
      18: [
        { match_id: 'm-518-1', teams: [{ id: 'okc', initial: 'OKC' }, { id: 'lac', initial: 'LAC' }], scores: [105, 108], selected_team_id: 'okc', is_correct: false, status: 'completed', pass: false },
      ],
    },
  },
  '2026-04': {
    currentStreak: 0,
    longestStreak: 8,
    streakDays: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 15, 18, 22, 23],
    activeDays: [9, 10, 13, 14, 16, 17, 19, 20, 21],
    picks: {
      15: [
        { match_id: 'm-415-1', teams: [{ id: 'lal', initial: 'LAL' }, { id: 'bos', initial: 'BOS' }], scores: [105, 110], selected_team_id: 'bos', is_correct: true, status: 'completed', pass: false },
      ],
    },
  },
  '2026-03': {
    currentStreak: 0,
    longestStreak: 4,
    streakDays: [10, 11, 12, 13, 20, 21],
    activeDays: [5, 6, 7, 14, 15, 22, 23, 28],
    picks: {},
  },
}

const $monthLabel = document.getElementById('month-label')
const $calGrid = document.getElementById('cal-grid')
const $prevBtn = document.getElementById('prev-month')
const $nextBtn = document.getElementById('next-month')
const $picksTitle = document.getElementById('picks-title')
const $picksSub = document.getElementById('picks-sub')
const $picksBody = document.getElementById('picks-body')
const $currentText = document.getElementById('current-streak-text')
const $longestText = document.getElementById('longest-streak-text')
const $infoBtn = document.getElementById('info-btn')
const $infoModal = document.getElementById('info-modal')
const $infoClose = document.getElementById('info-close')

const MONTH_NAMES_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let viewYear = TODAY.getFullYear()
let viewMonth = TODAY.getMonth()
let selectedDay = TODAY.getDate()

function monthKey(y, m) {
  return `${y}-${String(m + 1).padStart(2, '0')}`
}

function getMonthData(y, m) {
  return MONTH_DATA[monthKey(y, m)] ?? { currentStreak: 0, longestStreak: 0, streakDays: [], activeDays: [], picks: {} }
}

function renderHeader() {
  $monthLabel.textContent = `${viewYear}년 ${viewMonth + 1}월`
  const isCurrentMonth = viewYear === TODAY.getFullYear() && viewMonth === TODAY.getMonth()
  $nextBtn.disabled = isCurrentMonth
}

function renderCalendar() {
  $calGrid.innerHTML = ''
  const dows = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  dows.forEach(d => {
    const el = document.createElement('div')
    el.className = 'dow'
    el.textContent = d
    $calGrid.appendChild(el)
  })

  const firstDay = new Date(viewYear, viewMonth, 1).getDay()
  const lastDate = new Date(viewYear, viewMonth + 1, 0).getDate()
  const data = getMonthData(viewYear, viewMonth)
  const streakSet = new Set(data.streakDays)
  const activeSet = new Set(data.activeDays)

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div')
    empty.className = 'day empty'
    $calGrid.appendChild(empty)
  }

  for (let day = 1; day <= lastDate; day++) {
    const btn = document.createElement('button')
    btn.className = 'day'
    btn.textContent = String(day)

    const cellDate = new Date(viewYear, viewMonth, day)
    const isToday =
      viewYear === TODAY.getFullYear() &&
      viewMonth === TODAY.getMonth() &&
      day === TODAY.getDate()
    const isFuture = cellDate > TODAY

    if (streakSet.has(day)) btn.classList.add('streak')
    if (activeSet.has(day)) btn.classList.add('active')
    if (isToday) btn.classList.add('today')
    if (isFuture) btn.classList.add('future')
    if (
      day === selectedDay &&
      viewYear === TODAY.getFullYear() &&
      viewMonth === TODAY.getMonth()
    ) btn.classList.add('selected')

    btn.addEventListener('click', () => selectDay(day))
    $calGrid.appendChild(btn)
  }
}

function selectDay(day) {
  selectedDay = day
  document.querySelectorAll('.day').forEach(el => el.classList.remove('selected'))
  const dayButtons = Array.from($calGrid.querySelectorAll('.day:not(.empty)'))
  const target = dayButtons[day - 1]
  if (target) target.classList.add('selected')
  renderPicks()
}

function formatDate(y, m, d) {
  return `${String(d).padStart(2, '0')} ${MONTH_NAMES_SHORT[m]} ${y}`
}

function statusClass(status) {
  if (status === 'completed') return 'finished'
  if (status === 'in_progress') return 'running'
  return 'not_started'
}

function statusLabel(status) {
  if (status === 'completed') return 'FINISHED'
  if (status === 'in_progress') return 'LIVE'
  return 'UPCOMING'
}

function resultOf(pick) {
  if (pick.pass) return { key: 'pass', label: 'PASS' }
  if (pick.status !== 'completed') return { key: 'pending', label: 'PENDING' }
  if (pick.is_correct) return { key: 'win', label: 'WIN' }
  return { key: 'lose', label: 'LOSE' }
}

function renderPicks() {
  const cellDate = new Date(viewYear, viewMonth, selectedDay)
  const isBeforeToday = cellDate < new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate())
  const isFuture = cellDate > TODAY
  const displayDate = formatDate(viewYear, viewMonth, selectedDay)

  if (isFuture) {
    $picksTitle.textContent = 'Join Streak'
    $picksSub.textContent = `${displayDate} · Predict upcoming matches`
  } else if (isBeforeToday) {
    $picksTitle.textContent = 'My Picks'
    $picksSub.textContent = `${displayDate} · History`
  } else {
    $picksTitle.textContent = 'Today\'s Picks'
    $picksSub.textContent = `${displayDate}`
  }

  const data = getMonthData(viewYear, viewMonth)
  const picks = data.picks[selectedDay] ?? []

  if (picks.length === 0) {
    $picksBody.innerHTML = `
      <div class="picks-empty">
        ${isFuture ? '아직 등록된 픽이 없습니다.' : '이 날짜에 픽 기록이 없습니다.'}
      </div>
    `
    return
  }

  $picksBody.innerHTML = picks.map(p => {
    const sel = p.selected_team_id
    const r = resultOf(p)
    return `
      <div class="pick-card">
        <div class="pick-meta">
          <span>MATCH ${p.match_id.split('-').pop()}</span>
          <span class="pick-status ${statusClass(p.status)}">${statusLabel(p.status)}</span>
        </div>
        <div class="pick-teams">
          <div class="team left ${sel === p.teams[0].id ? 'selected' : ''}">
            <div class="logo">${p.teams[0].initial.slice(0, 1)}</div>
            <div class="initial">${p.teams[0].initial}</div>
            <div class="score">${p.scores[0]}</div>
          </div>
          <div class="vs">VS</div>
          <div class="team right ${sel === p.teams[1].id ? 'selected' : ''}">
            <div class="logo">${p.teams[1].initial.slice(0, 1)}</div>
            <div class="initial">${p.teams[1].initial}</div>
            <div class="score">${p.scores[1]}</div>
          </div>
        </div>
        <div class="pick-result">
          <span style="color:var(--color-text-50)">${p.pass ? '패스됨' : '내 픽: ' + (p.teams.find(t => t.id === sel)?.initial ?? '-')}</span>
          <span class="result-badge ${r.key}">${r.label}</span>
        </div>
      </div>
    `
  }).join('')
}

$prevBtn.addEventListener('click', () => {
  if (viewMonth === 0) { viewMonth = 11; viewYear-- } else { viewMonth-- }
  selectedDay = 1
  initFire()
  renderHeader()
  renderCalendar()
  renderPicks()
})

$nextBtn.addEventListener('click', () => {
  if ($nextBtn.disabled) return
  if (viewMonth === 11) { viewMonth = 0; viewYear++ } else { viewMonth++ }
  selectedDay = 1
  initFire()
  renderHeader()
  renderCalendar()
  renderPicks()
})

$infoBtn.addEventListener('click', () => $infoModal.classList.add('open'))
$infoClose.addEventListener('click', () => $infoModal.classList.remove('open'))
$infoModal.addEventListener('click', (e) => {
  if (e.target === $infoModal) $infoModal.classList.remove('open')
})

let riveInstance = null

function initFire() {
  const data = getMonthData(viewYear, viewMonth)
  $currentText.textContent = data.currentStreak
  $longestText.textContent = data.longestStreak

  if (riveInstance) {
    try {
      const vm = riveInstance.viewModelInstance
      const cs = vm?.number('currentStreak')
      const ls = vm?.number('longestStreak')
      if (cs) cs.value = data.currentStreak
      if (ls) ls.value = data.longestStreak
      return
    } catch {
      try { riveInstance.cleanup() } catch {}
      riveInstance = null
    }
  }

  const canvas = document.getElementById('fire-canvas')
  riveInstance = new Rive({
    src: FIRE_RIV_SRC,
    canvas,
    artboard: 'StreakFire',
    stateMachines: 'State Machine 1',
    autoBind: true,
    autoplay: true,
    assetLoader(asset) {
      if (
        asset.isFont &&
        ['Pretendard Variable', 'PretendardVariable', 'Pretendard']
          .some(n => asset.name.toLowerCase().includes(n.toLowerCase()))
      ) {
        fetch(PRETENDARD_FONT_URL)
          .then(res => res.arrayBuffer())
          .then(buf => decodeFont(new Uint8Array(buf)))
          .then(font => asset.setFont(font))
        return true
      }
      return false
    },
    onLoad() {
      riveInstance.resizeDrawingSurfaceToCanvas()
      requestAnimationFrame(() => {
        const vm = riveInstance.viewModelInstance
        const cs = vm?.number('currentStreak')
        const ls = vm?.number('longestStreak')
        if (cs) cs.value = data.currentStreak
        if (ls) ls.value = data.longestStreak
      })
    },
    onLoadError() {
      const wrap = document.querySelector('.fire-canvas-wrap')
      if (wrap) {
        wrap.innerHTML = `
          <div style="font-size:72px;line-height:1;">🔥</div>
        `
      }
    },
  })
}

window.addEventListener('beforeunload', () => {
  if (riveInstance) {
    try { riveInstance.cleanup() } catch {}
  }
})

renderHeader()
renderCalendar()
renderPicks()
initFire()
