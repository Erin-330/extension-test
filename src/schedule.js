import { Rive } from '@rive-app/canvas'

const THEME_KEY = 'theme'
function applyTheme(theme) { document.documentElement.dataset.theme = theme }
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(saved ?? (prefersDark ? 'dark' : 'light'))
}
initTheme()

const LOADING_RIV = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/loading-page.riv'
const NO_SCHEDULE_RIV = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/no-schedule.riv'

const PER_PAGE = 20
const TOTAL_MOCK = 38
const TODAY = new Date(2026, 4, 29)

const TEAMS = [
  { team_id: 'T1',  initial: 'T1',  team_name: 'T1' },
  { team_id: 'GEN', initial: 'GEN', team_name: 'Gen.G' },
  { team_id: 'HLE', initial: 'HLE', team_name: 'Hanwha Life' },
  { team_id: 'DK',  initial: 'DK',  team_name: 'DPlus KIA' },
  { team_id: 'KT',  initial: 'KT',  team_name: 'KT Rolster' },
  { team_id: 'NS',  initial: 'NS',  team_name: 'Nongshim' },
  { team_id: 'BRO', initial: 'BRO', team_name: 'OK Brion' },
  { team_id: 'DRX', initial: 'DRX', team_name: 'DRX' },
]
const LEAGUES = ['LCK', 'LEC', 'LPL', 'LCS']

function pad(n) { return String(n).padStart(2, '0') }
function ymd(d) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` }
function ymdLabel(d) { return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}` }

function buildMockMatch(i) {
  const dayOffset = i - 18
  const date = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + dayOffset)
  const hour = 17 + (i % 4)
  date.setHours(hour, 0, 0, 0)

  const a = TEAMS[i % TEAMS.length]
  const b = TEAMS[(i + 3) % TEAMS.length]

  let status
  if (date < TODAY) status = 'completed'
  else if (ymd(date) === ymd(TODAY) && i % 3 === 0) status = 'running'
  else status = 'not_started'

  const leftScore = status === 'not_started' ? null : (i % 5) % 3
  const rightScore = status === 'not_started' ? null : (i % 7) % 3

  return {
    match_id: `m-${i}`,
    begin_date: date.toISOString(),
    end_date: null,
    status,
    name: `${a.initial} vs ${b.initial}`,
    rown: i + 1,
    leagues: { league_id: 'L1', league_name: LEAGUES[i % LEAGUES.length], image_url: '' },
    teams: [
      { team_id: a.team_id, team_name: a.team_name, initial: a.initial, image_url: '', score: leftScore, boostYN: 'N' },
      { team_id: b.team_id, team_name: b.team_name, initial: b.initial, image_url: '', score: rightScore, boostYN: 'N' },
    ],
  }
}

function mapStatus(apiStatus) {
  if (apiStatus === 'completed') return 'finished'
  if (apiStatus === 'running') return 'running'
  return 'not_started'
}

const $main = document.querySelector('main')
const $initial = document.getElementById('initial-loading')
const $initialCanvas = document.getElementById('initial-loading-canvas')
const $empty = document.getElementById('empty-state')
const $noScheduleCanvas = document.getElementById('no-schedule-canvas')
const $list = document.getElementById('schedule-list')
const $bottom = document.getElementById('bottom-loader')
const $bottomCanvas = document.getElementById('bottom-loader-canvas')
const $end = document.getElementById('end-note')
const $todayFab = document.getElementById('today-fab')
const $filterBtn = document.getElementById('filter-btn')

let initialRive = null
let bottomRive = null
let noScheduleRive = null

let cursor = 0
let isLoading = false
let hasNext = true
let observer = null
const dateLabelRefs = new Map()

function startInitialLoadingRive() {
  initialRive = new Rive({
    src: LOADING_RIV,
    canvas: $initialCanvas,
    artboard: 'Loading',
    stateMachines: 'State Machine 1',
    autoplay: true,
    onLoad() { try { initialRive.resizeDrawingSurfaceToCanvas() } catch {} },
  })
}

function stopInitialLoadingRive() {
  $initial.style.display = 'none'
  if (initialRive) {
    try { initialRive.cleanup() } catch {}
    initialRive = null
  }
}

function startBottomLoaderRive() {
  $bottom.classList.add('active')
  if (bottomRive) return
  bottomRive = new Rive({
    src: LOADING_RIV,
    canvas: $bottomCanvas,
    artboard: 'Loading_addList',
    stateMachines: 'State Machine 1',
    autoplay: true,
    onLoad() { try { bottomRive.resizeDrawingSurfaceToCanvas() } catch {} },
  })
}

function stopBottomLoaderRive() {
  $bottom.classList.remove('active')
  if (bottomRive) {
    try { bottomRive.cleanup() } catch {}
    bottomRive = null
  }
}

function showEmptyState() {
  $empty.style.display = 'flex'
  const artboards = ['noSchedule1', 'noSchedule2', 'noSchedule3']
  const artboard = artboards[Math.floor(Math.random() * artboards.length)]
  noScheduleRive = new Rive({
    src: NO_SCHEDULE_RIV,
    canvas: $noScheduleCanvas,
    artboard,
    stateMachines: 'State Machine 1',
    autoplay: true,
    onLoad() { try { noScheduleRive.resizeDrawingSurfaceToCanvas() } catch {} },
    onLoadError() {
      $noScheduleCanvas.style.display = 'none'
    },
  })
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ))
}

function statusBadgeHtml(uiStatus) {
  if (uiStatus === 'finished') return '<span class="status-badge finished">FINAL</span>'
  if (uiStatus === 'running')  return '<span class="status-badge running">LIVE</span>'
  return '<span class="status-badge not_started">UPCOMING</span>'
}

function renderMatchCard(match) {
  const uiStatus = mapStatus(match.status)
  const [left, right] = match.teams
  const beginDate = new Date(match.begin_date)
  const timeText = `${pad(beginDate.getHours())}:${pad(beginDate.getMinutes())}`

  const scoreHtml = uiStatus === 'not_started'
    ? `<span class="time">${timeText}</span>`
    : `<span>${left.score ?? 0}</span><span class="sep">:</span><span>${right.score ?? 0}</span>`

  const card = document.createElement('li')
  card.className = 'match-card'
  card.dataset.matchId = match.match_id
  card.innerHTML = `
    <div class="card-head">
      <div class="game-league">
        <span class="game-label">LOL</span>
        <span class="league-label">${escapeHtml(match.leagues.league_name)}</span>
      </div>
      ${statusBadgeHtml(uiStatus)}
    </div>
    <div class="teams">
      <div class="team left">
        <div class="team-logo">${escapeHtml(left.initial.slice(0, 3))}</div>
        <div class="team-name">${escapeHtml(left.team_name)}</div>
      </div>
      <div class="score">${scoreHtml}</div>
      <div class="team right">
        <div class="team-name">${escapeHtml(right.team_name)}</div>
        <div class="team-logo">${escapeHtml(right.initial.slice(0, 3))}</div>
      </div>
    </div>
  `

  card.addEventListener('click', () => {
    console.log('navigate to SCHEDULE_DETAIL', match.match_id)
  })

  return card
}

function appendDateLabel(datePart) {
  const label = document.createElement('li')
  label.className = 'date-label'
  label.textContent = ymdLabel(new Date(datePart))
  label.dataset.scheduleDatePart = datePart
  dateLabelRefs.set(datePart, label)
  $list.appendChild(label)
}

let lastDatePart = null

function appendMatches(matches) {
  for (const match of matches) {
    const datePart = ymd(new Date(match.begin_date))
    if (datePart !== lastDatePart) {
      appendDateLabel(datePart)
      lastDatePart = datePart
    }
    $list.appendChild(renderMatchCard(match))
  }
}

function fetchPage() {
  return new Promise(resolve => {
    setTimeout(() => {
      const slice = []
      for (let i = 0; i < PER_PAGE; i++) {
        const idx = cursor + i
        if (idx >= TOTAL_MOCK) break
        slice.push(buildMockMatch(idx))
      }
      cursor += slice.length
      hasNext = cursor < TOTAL_MOCK
      resolve(slice)
    }, 500)
  })
}

function getTargetDatePart(matches) {
  const todayPart = ymd(TODAY)
  if (matches.some(m => ymd(new Date(m.begin_date)) === todayPart)) return todayPart
  const completed = matches.filter(m => m.status === 'completed')
  if (completed.length === 0) return null
  const latest = completed.reduce((a, b) => (
    new Date(a.begin_date) > new Date(b.begin_date) ? a : b
  ))
  return ymd(new Date(latest.begin_date))
}

let targetDatePart = null

function tryAutoScrollToTarget(retry = 0) {
  if (!targetDatePart) return
  const el = dateLabelRefs.get(targetDatePart)
  if (el) {
    el.scrollIntoView({ block: 'center', behavior: 'auto' })
    return
  }
  if (retry < 10) requestAnimationFrame(() => tryAutoScrollToTarget(retry + 1))
}

function setupTodayFabObserver() {
  if (!targetDatePart) return
  const el = dateLabelRefs.get(targetDatePart)
  if (!el) return
  const io = new IntersectionObserver(entries => {
    for (const entry of entries) {
      $todayFab.classList.toggle('visible', !entry.isIntersecting)
    }
  }, { root: null, threshold: 0 })
  io.observe(el)
}

$todayFab.addEventListener('click', () => {
  if (!targetDatePart) return
  const el = dateLabelRefs.get(targetDatePart)
  if (el) el.scrollIntoView({ block: 'center', behavior: 'smooth' })
})

$filterBtn.addEventListener('click', () => {
  console.log('navigate to LEAGUE_FILTER')
})

async function loadInitial() {
  isLoading = true
  startInitialLoadingRive()
  const page = await fetchPage()
  stopInitialLoadingRive()
  if (page.length === 0) {
    showEmptyState()
    isLoading = false
    return
  }
  appendMatches(page)
  targetDatePart = getTargetDatePart(page)
  isLoading = false
  setTimeout(() => {
    setupObserver()
    tryAutoScrollToTarget()
    setupTodayFabObserver()
  }, 50)
}

async function loadMore() {
  if (isLoading || !hasNext) return
  isLoading = true
  startBottomLoaderRive()
  const page = await fetchPage()
  stopBottomLoaderRive()
  appendMatches(page)
  isLoading = false
  if (!hasNext) {
    $end.classList.add('active')
    if (observer) observer.disconnect()
  }
}

function setupObserver() {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) loadMore()
  }, { rootMargin: '100px' })
  observer.observe($end)
}

window.addEventListener('beforeunload', () => {
  try { initialRive?.cleanup() } catch {}
  try { bottomRive?.cleanup() } catch {}
  try { noScheduleRive?.cleanup() } catch {}
})

loadInitial()
