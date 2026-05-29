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

const mockData = {
  quiz: [
    { title: '오프사이드 룰 퀴즈', meta: '축구 · 5문항', status: 'solved',  points: '+40' },
    { title: '3점슛 라인 퀴즈',   meta: '농구 · 4문항', status: 'solved',  points: '+30' },
    { title: 'KBO 역대 MVP',      meta: '야구 · 6문항', status: 'pending', points: '+50' },
    { title: '월드컵 우승국',     meta: '축구 · 10문항', status: 'solved',  points: '+80' },
    { title: '서브 종류 맞히기',  meta: '배구 · 3문항', status: 'pending', points: '+20' },
  ],
  event: [
    { title: '주말 더블 부스트', meta: '2026.05.30 — 06.01', status: 'live' },
    { title: '신규 유저 환영전', meta: '2026.05.20 — 06.10', status: 'live' },
    { title: '챔스 결승 특별전', meta: '2026.06.07 21:00', status: 'upcoming' },
    { title: '5월 출석 챌린지',  meta: '2026.05.01 — 05.28', status: 'ended' },
  ],
  live: [
    { left: 'MUN',  right: 'LIV',  score: '1 : 2', status: 'live',     meta: 'EPL · 후반 32분' },
    { left: 'LAD',  right: 'SFG',  score: '4 : 3', status: 'live',     meta: 'MLB · 7회말' },
    { left: 'BOS',  right: 'GSW',  score: '88 : 91', status: 'live',   meta: 'NBA · 4Q 5:12' },
    { left: 'KOR',  right: 'JPN',  score: '— : —', status: 'upcoming', meta: '2026.05.30 19:00' },
    { left: 'T1',   right: 'GEN',  score: '0 : 0', status: 'upcoming', meta: 'LCK · 2026.05.31 17:00' },
  ],
}

const statusLabel = {
  solved:   'SOLVED',
  pending:  'PENDING',
  upcoming: 'UPCOMING',
  live:     'LIVE',
  ended:    'ENDED',
}

function renderQuiz() {
  const list = document.getElementById('quiz-list')
  list.innerHTML = mockData.quiz.map(q => `
    <li class="item">
      <div class="item-main">
        <span class="item-title">${q.title}</span>
        <span class="item-meta">${q.meta}</span>
      </div>
      <div class="item-side">
        <span class="badge ${q.status}">${statusLabel[q.status]}</span>
        <span class="badge points">${q.points}</span>
      </div>
    </li>
  `).join('')
  document.getElementById('quiz-count').textContent = `${mockData.quiz.length}개`
}

function renderEvent() {
  const list = document.getElementById('event-list')
  list.innerHTML = mockData.event.map(e => `
    <li class="item">
      <div class="item-main">
        <span class="item-title">${e.title}</span>
        <span class="item-meta">${e.meta}</span>
      </div>
      <div class="item-side">
        <span class="badge ${e.status}">${statusLabel[e.status]}</span>
      </div>
    </li>
  `).join('')
  document.getElementById('event-count').textContent = `${mockData.event.length}개`
}

function renderLive() {
  const list = document.getElementById('live-list')
  list.innerHTML = mockData.live.map(g => `
    <li class="item">
      <div class="item-main">
        <span class="item-title">${g.left} vs ${g.right}</span>
        <span class="item-meta">${g.meta}</span>
      </div>
      <div class="item-side">
        <span class="score">${g.score}</span>
        ${g.status === 'live' ? '<span class="pulse-dot" aria-hidden="true"></span>' : ''}
        <span class="badge ${g.status}">${statusLabel[g.status]}</span>
      </div>
    </li>
  `).join('')
  document.getElementById('live-count').textContent = `${mockData.live.length}경기`
}

renderQuiz()
renderEvent()
renderLive()

const tabs = document.querySelectorAll('.category-tab')
const panels = {
  quiz:  document.getElementById('section-quiz'),
  event: document.getElementById('section-event'),
  live:  document.getElementById('section-live'),
}

function activate(category) {
  tabs.forEach(t => {
    const isActive = t.dataset.category === category
    t.classList.toggle('active', isActive)
    t.setAttribute('aria-selected', String(isActive))
  })
  Object.entries(panels).forEach(([key, panel]) => {
    panel.hidden = key !== category
  })
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => activate(tab.dataset.category))
})
