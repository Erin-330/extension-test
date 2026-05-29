import { Rive, decodeFont, Layout, Fit, Alignment } from '@rive-app/canvas'

const THEME_KEY = 'theme'

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = saved ?? (prefersDark ? 'dark' : 'light')
  applyTheme(theme)
}

initTheme()

document.getElementById('theme-toggle').addEventListener('click', () => {
  const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
  const next = current === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  localStorage.setItem(THEME_KEY, next)
})

/* ---------------------------------------------------------------
   Rive overlays — Live Quiz / Live Event
   Shared Rive file: streak-window-quiz.riv (artboard differs).
   --------------------------------------------------------------- */

const RIV_SRC = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/streak-window-quiz.riv'
const PRETENDARD_FONT_URL = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/fonts/PretendardVariable-3557044.ttf'

const QUIZ_MOCK = {
  current_streak_display: '5 in a row',
  quizText: 'Which team will win the game?',
  teams: [
    { team_id: 'lal', initial: 'LAL', team_name: 'Lakers' },
    { team_id: 'gsw', initial: 'GSW', team_name: 'Warriors' },
  ],
}

const EVENT_MOCK = {
  eventText: 'Curry just sank a clutch three-pointer to tie the game! Momentum has swung back to GSW.',
  eventTitle: '-',
  teamNameA: 'LAL',
  teamNameB: 'GSW',
  gameRound: 'Q3',
  time: '07:42',
}

function pretendardAssetLoader(asset) {
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
}

function setNumber(vm, path, value) {
  try {
    const prop = vm?.number(path)
    if (prop) prop.value = value
  } catch {}
}
function setString(vm, path, value) {
  try {
    const prop = vm?.string(path)
    if (prop) prop.value = value
  } catch {}
}
function setBool(vm, path, value) {
  try {
    const prop = vm?.boolean(path)
    if (prop) prop.value = value
  } catch {}
}
function setColor(vm, path, argb) {
  try {
    const prop = vm?.color(path)
    if (prop) prop.value = argb
  } catch {}
}
function fireTrigger(rive, name) {
  try {
    const inputs = rive.stateMachineInputs('State Machine 1') ?? []
    const t = inputs.find(i => i.name === name)
    if (t && typeof t.fire === 'function') t.fire()
  } catch {}
}

function showFallback(wrap, label) {
  const div = document.createElement('div')
  div.className = 'modal-fallback'
  div.textContent = label
  wrap.appendChild(div)
}

/* ---- Quiz window ---- */

let quizRive = null

function openQuiz() {
  const modal = document.getElementById('quiz-modal')
  const wrap = document.getElementById('quiz-canvas-wrap')
  const canvas = document.getElementById('quiz-canvas')
  modal.classList.add('open')

  if (quizRive) return

  quizRive = new Rive({
    src: RIV_SRC,
    canvas,
    artboard: 'QuizWindow',
    stateMachines: 'State Machine 1',
    autoplay: true,
    autoBind: true,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    assetLoader: pretendardAssetLoader,
    onLoad() {
      quizRive.resizeDrawingSurfaceToCanvas()
      requestAnimationFrame(() => {
        const vm = quizRive.viewModelInstance
        const w = Math.max(wrap.clientWidth || 360, 1)
        const h = Math.max(wrap.clientHeight || 456, 1)
        const widthSize = w > 360 ? w : w + Math.max(0, 456 - h)

        setNumber(vm, 'widthSize', widthSize)
        setNumber(vm, 'setTime', 60)
        setString(vm, 'streakRecord', QUIZ_MOCK.current_streak_display)
        setString(vm, 'quizText', QUIZ_MOCK.quizText)
        setString(vm, 'quizButtonA/name', QUIZ_MOCK.teams[0].initial)
        setNumber(vm, 'quizButtonA/buttonSize', 80)
        setBool(vm, 'quizButtonA/dbSelected', false)
        setString(vm, 'quizButtonB/name', QUIZ_MOCK.teams[1].initial)
        setNumber(vm, 'quizButtonB/buttonSize', 80)
        setBool(vm, 'quizButtonB/dbSelected', false)

        fireTrigger(quizRive, 'start')
      })
    },
    onLoadError() {
      showFallback(wrap, 'Quiz Rive를 불러올 수 없습니다.')
    },
  })

  const ro = new ResizeObserver(() => {
    if (!quizRive) return
    try { quizRive.resizeDrawingSurfaceToCanvas() } catch {}
    const vm = quizRive.viewModelInstance
    const w = Math.max(wrap.clientWidth || 360, 1)
    const h = Math.max(wrap.clientHeight || 456, 1)
    const widthSize = w > 360 ? w : w + Math.max(0, 456 - h)
    setNumber(vm, 'widthSize', widthSize)
  })
  ro.observe(wrap)
  quizRive._ro = ro
}

function closeQuiz() {
  const modal = document.getElementById('quiz-modal')
  modal.classList.remove('open')
  if (quizRive) {
    try { quizRive._ro?.disconnect() } catch {}
    try { quizRive.cleanup() } catch {}
    quizRive = null
  }
}

/* ---- Event window ---- */

let eventRive = null

function openEvent() {
  const modal = document.getElementById('event-modal')
  const wrap = document.getElementById('event-canvas-wrap')
  const canvas = document.getElementById('event-canvas')
  modal.classList.add('open')

  if (eventRive) return

  eventRive = new Rive({
    src: RIV_SRC,
    canvas,
    artboard: 'EventWindow',
    stateMachines: 'State Machine 1',
    autoplay: true,
    autoBind: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
    assetLoader: pretendardAssetLoader,
    onLoad() {
      eventRive.resizeDrawingSurfaceToCanvas()
      const apply = () => {
        const vm = eventRive.viewModelInstance
        const w = Math.max(wrap.clientWidth || 360, 1)
        const h = Math.max(wrap.clientHeight || 173, 1)
        const widthSize = w > 360 ? w : w + Math.max(0, 173 - h)

        setString(vm, 'eventText', EVENT_MOCK.eventText)
        setString(vm, 'eventTitle', EVENT_MOCK.eventTitle)
        setString(vm, 'teamNameA', EVENT_MOCK.teamNameA)
        setString(vm, 'teamNameB', EVENT_MOCK.teamNameB)
        setString(vm, 'gameRound', EVENT_MOCK.gameRound)
        setString(vm, 'time', EVENT_MOCK.time)
        setColor(vm, 'SideBorderColor', 0xff0000ff)
        setNumber(vm, 'width', w)
        setNumber(vm, 'widthSize', widthSize)
        setNumber(vm, 'setTime', 10)
      }
      apply()
      requestAnimationFrame(() => {
        apply()
        fireTrigger(eventRive, 'start')
      })
    },
    onLoadError() {
      showFallback(wrap, 'Event Rive를 불러올 수 없습니다.')
    },
  })

  const ro = new ResizeObserver(() => {
    if (!eventRive) return
    try { eventRive.resizeDrawingSurfaceToCanvas() } catch {}
    const vm = eventRive.viewModelInstance
    const w = Math.max(wrap.clientWidth || 360, 1)
    const h = Math.max(wrap.clientHeight || 173, 1)
    const widthSize = w > 360 ? w : w + Math.max(0, 173 - h)
    setNumber(vm, 'width', w)
    setNumber(vm, 'widthSize', widthSize)
  })
  ro.observe(wrap)
  eventRive._ro = ro
}

function closeEvent() {
  const modal = document.getElementById('event-modal')
  modal.classList.remove('open')
  if (eventRive) {
    try { eventRive._ro?.disconnect() } catch {}
    try { eventRive.cleanup() } catch {}
    eventRive = null
  }
}

/* ---- Wire up controls ---- */

document.getElementById('quiz-open').addEventListener('click', openQuiz)
document.getElementById('quiz-close').addEventListener('click', closeQuiz)
document.getElementById('quiz-modal').addEventListener('click', (e) => {
  if (e.target.id === 'quiz-modal') closeQuiz()
})

document.getElementById('event-open').addEventListener('click', openEvent)
document.getElementById('event-close').addEventListener('click', closeEvent)
document.getElementById('event-modal').addEventListener('click', (e) => {
  if (e.target.id === 'event-modal') closeEvent()
})

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return
  if (document.getElementById('quiz-modal').classList.contains('open')) closeQuiz()
  if (document.getElementById('event-modal').classList.contains('open')) closeEvent()
})

window.addEventListener('beforeunload', () => {
  if (quizRive) { try { quizRive.cleanup() } catch {} }
  if (eventRive) { try { eventRive.cleanup() } catch {} }
})
