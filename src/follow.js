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

const STEPS = ['league', 'team', 'player']
const STEP_CONFIG = {
  league: {
    title: 'Back Your League',
    min: 1,
    max: 5,
    placeholder: '리그 검색',
  },
  team: {
    title: 'Back Your Team',
    min: 1,
    max: 10,
    placeholder: '팀 검색',
  },
  player: {
    title: 'Follow Players',
    min: 0,
    max: 20,
    placeholder: '선수 검색',
  },
}

const DATA = {
  league: [
    { id: 'lck',    name: 'LCK',           sub: 'lck',    boost: true,  logo: 'LCK', cls: '' },
    { id: 'lpl',    name: 'LPL',           sub: 'lpl',    boost: true,  logo: 'LPL', cls: 'team-r' },
    { id: 'lec',    name: 'LEC',           sub: 'lec',    boost: false, logo: 'LEC', cls: 'team-l' },
    { id: 'lcs',    name: 'LCS',           sub: 'lcs',    boost: false, logo: 'LCS', cls: 'team-g' },
    { id: 'kbo',    name: 'KBO 리그',       sub: 'kbo',    boost: true,  logo: 'KBO', cls: 'team-r' },
    { id: 'kleague',name: 'K리그1',         sub: 'k1',     boost: false, logo: 'K1',  cls: 'team-l' },
    { id: 'epl',    name: 'Premier League',sub: 'epl',    boost: true,  logo: 'EPL', cls: 'team-d' },
    { id: 'mlb',    name: 'MLB',           sub: 'mlb',    boost: false, logo: 'MLB', cls: '' },
    { id: 'nba',    name: 'NBA',           sub: 'nba',    boost: true,  logo: 'NBA', cls: 'team-g' },
    { id: 'kbl',    name: 'KBL',           sub: 'kbl',    boost: false, logo: 'KBL', cls: 'team-r' },
  ],
  team: [
    { id: 't1',   name: 'T1',          sub: 'T1',  boost: true,  logo: 'T1',  cls: 'team-r' },
    { id: 'gen',  name: 'Gen.G',       sub: 'GEN', boost: true,  logo: 'GEN', cls: 'team-l' },
    { id: 'hle',  name: 'Hanwha Life', sub: 'HLE', boost: false, logo: 'HLE', cls: '' },
    { id: 'dk',   name: 'Dplus KIA',   sub: 'DK',  boost: true,  logo: 'DK',  cls: 'team-r' },
    { id: 'kt',   name: 'KT Rolster',  sub: 'KT',  boost: false, logo: 'KT',  cls: 'team-g' },
    { id: 'lsb',  name: 'Liiv SANDBOX',sub: 'LSB', boost: false, logo: 'LSB', cls: 'team-l' },
    { id: 'ns',   name: 'NS RedForce', sub: 'NS',  boost: false, logo: 'NS',  cls: '' },
    { id: 'bro',  name: 'BRION',       sub: 'BRO', boost: false, logo: 'BRO', cls: 'team-d' },
    { id: 'dyn',  name: 'DRX',         sub: 'DRX', boost: true,  logo: 'DRX', cls: 'team-l' },
    { id: 'fox', name: 'FOX',          sub: 'FOX', boost: false, logo: 'FOX', cls: 'team-g' },
  ],
  player: [
    { id: 'faker',  name: 'Faker',  team: 'T1',   teamId: 't1',  cls: 'team-r' },
    { id: 'gumayusi',name: 'Gumayusi', team: 'T1', teamId: 't1', cls: 'team-r' },
    { id: 'oner',   name: 'Oner',   team: 'T1',   teamId: 't1',  cls: 'team-r' },
    { id: 'zeus',   name: 'Zeus',   team: 'HLE',  teamId: 'hle', cls: '' },
    { id: 'keria',  name: 'Keria',  team: 'T1',   teamId: 't1',  cls: 'team-r' },
    { id: 'chovy',  name: 'Chovy',  team: 'Gen.G',teamId: 'gen', cls: 'team-l' },
    { id: 'peyz',   name: 'Peyz',   team: 'Gen.G',teamId: 'gen', cls: 'team-l' },
    { id: 'canyon', name: 'Canyon', team: 'Gen.G',teamId: 'gen', cls: 'team-l' },
    { id: 'ruler',  name: 'Ruler',  team: 'Gen.G',teamId: 'gen', cls: 'team-l' },
    { id: 'showmaker',name:'ShowMaker',team:'Dplus KIA', teamId:'dk', cls: 'team-r' },
    { id: 'deft',   name: 'Deft',   team: 'KT',   teamId: 'kt',  cls: 'team-g' },
    { id: 'bdd',    name: 'Bdd',    team: 'KT',   teamId: 'kt',  cls: 'team-g' },
  ],
}

const state = {
  step: 'league',
  selections: {
    league: [],
    team: [],
    player: [],
  },
  query: '',
}

const els = {
  title: document.getElementById('headerTitle'),
  search: document.getElementById('searchInput'),
  meta: document.getElementById('stepMeta'),
  prev: document.getElementById('prevBtn'),
  next: document.getElementById('nextBtn'),
  back: document.getElementById('backBtn'),
  screens: {
    league: document.getElementById('screen-league'),
    team: document.getElementById('screen-team'),
    player: document.getElementById('screen-player'),
  },
  lists: {
    league: document.getElementById('list-league'),
    team: document.getElementById('list-team'),
    player: document.getElementById('list-player'),
  },
  dots: Array.from(document.querySelectorAll('.step-dot')),
}

function toggleSelect(step, id) {
  const sel = state.selections[step]
  const idx = sel.indexOf(id)
  const cfg = STEP_CONFIG[step]
  if (idx >= 0) {
    sel.splice(idx, 1)
  } else {
    if (sel.length >= cfg.max) return
    sel.push(id)
  }
  render()
}

function renderList(step) {
  const list = els.lists[step]
  const items = DATA[step]
  const q = state.query.trim().toLowerCase()
  const filtered = q
    ? items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        (i.sub && i.sub.toLowerCase().includes(q)) ||
        (i.team && i.team.toLowerCase().includes(q))
      )
    : items

  list.innerHTML = ''
  if (filtered.length === 0) {
    const empty = document.createElement('div')
    empty.className = 'empty-state'
    empty.textContent = '검색 결과가 없어요'
    list.appendChild(empty)
    return
  }

  const sel = state.selections[step]
  filtered.forEach(item => {
    const card = document.createElement('div')
    card.className = 'item-card'
    const orderIdx = sel.indexOf(item.id)
    if (orderIdx >= 0) card.classList.add('selected')

    const logo = document.createElement('div')
    logo.className = `item-logo ${item.cls || ''}`.trim()
    logo.textContent = (item.logo || item.name).slice(0, 3).toUpperCase()
    card.appendChild(logo)

    const body = document.createElement('div')
    body.className = 'item-body'
    const name = document.createElement('div')
    name.className = 'item-name'
    name.textContent = item.name
    body.appendChild(name)

    const sub = document.createElement('div')
    sub.className = 'item-sub'
    if (step === 'player') {
      const subLogo = document.createElement('span')
      subLogo.className = 'item-sub-logo'
      sub.appendChild(subLogo)
      const subText = document.createElement('span')
      subText.textContent = item.team
      sub.appendChild(subText)
    } else {
      sub.textContent = item.sub
    }
    body.appendChild(sub)
    card.appendChild(body)

    const right = document.createElement('div')
    right.className = 'item-right'
    if (orderIdx >= 0) {
      const order = document.createElement('div')
      order.className = 'order-badge'
      order.textContent = String(orderIdx + 1)
      right.appendChild(order)
    }
    card.appendChild(right)

    if (item.boost) {
      const badge = document.createElement('span')
      badge.className = 'boost-badge'
      badge.textContent = 'BOOST'
      card.appendChild(badge)
    }

    card.addEventListener('click', () => toggleSelect(step, item.id))
    list.appendChild(card)
  })
}

function renderHeader() {
  const cfg = STEP_CONFIG[state.step]
  els.title.textContent = cfg.title
  els.search.placeholder = cfg.placeholder
  const count = state.selections[state.step].length
  const minTxt = cfg.min > 0 ? `최소 ${cfg.min}개 · ` : ''
  els.meta.innerHTML = `${minTxt}최대 ${cfg.max}개 · 선택 <strong>${count}</strong>개`
}

function renderDots() {
  const idx = STEPS.indexOf(state.step)
  els.dots.forEach((dot, i) => {
    dot.classList.remove('active', 'done')
    if (i === idx) dot.classList.add('active')
    else if (i < idx) dot.classList.add('done')
  })
}

function renderScreen() {
  for (const s of STEPS) {
    els.screens[s].classList.toggle('active', s === state.step)
  }
}

function renderActions() {
  const idx = STEPS.indexOf(state.step)
  const cfg = STEP_CONFIG[state.step]
  const sel = state.selections[state.step]
  const ok = sel.length >= cfg.min

  els.prev.disabled = false
  els.prev.textContent = idx === 0 ? '취소' : '이전'

  if (idx === STEPS.length - 1) {
    els.next.textContent = 'Done'
  } else {
    els.next.textContent = '다음'
  }
  els.next.disabled = !ok
}

function render() {
  renderHeader()
  renderDots()
  renderScreen()
  renderList(state.step)
  renderActions()
}

els.search.addEventListener('input', e => {
  state.query = e.target.value
  renderList(state.step)
})

els.prev.addEventListener('click', () => {
  const idx = STEPS.indexOf(state.step)
  if (idx === 0) {
    window.location.href = './profile.html'
    return
  }
  state.step = STEPS[idx - 1]
  state.query = ''
  els.search.value = ''
  render()
})

els.next.addEventListener('click', () => {
  const idx = STEPS.indexOf(state.step)
  if (idx === STEPS.length - 1) {
    try {
      localStorage.setItem('rorr.follow', JSON.stringify(state.selections))
    } catch (_) {}
    window.location.href = './profile.html'
    return
  }
  state.step = STEPS[idx + 1]
  state.query = ''
  els.search.value = ''
  render()
})

render()
