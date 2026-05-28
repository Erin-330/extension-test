const THEME_KEY = 'theme'
function applyTheme(theme) { document.documentElement.dataset.theme = theme }
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(saved ?? (prefersDark ? 'dark' : 'light'))
}
initTheme()

const LEAGUES = [
  { id: 'lck',  name: 'LCK',           slug: 'lck',  boostable: true  },
  { id: 'lpl',  name: 'LPL',           slug: 'lpl',  boostable: true  },
  { id: 'lec',  name: 'LEC',           slug: 'lec',  boostable: false },
  { id: 'lcs',  name: 'LCS',           slug: 'lcs',  boostable: false },
  { id: 'kbo',  name: 'KBO',           slug: 'kbo',  boostable: true  },
  { id: 'mlb',  name: 'MLB',           slug: 'mlb',  boostable: false },
  { id: 'epl',  name: 'Premier League',slug: 'epl',  boostable: true  },
  { id: 'kleague', name: 'K League',   slug: 'kl',   boostable: false },
]

const TEAMS = [
  { id: 't1',     name: 'T1',           initial: 'T1',  boostable: true },
  { id: 'geng',   name: 'Gen.G',        initial: 'GEN', boostable: true },
  { id: 'kt',     name: 'KT Rolster',   initial: 'KT',  boostable: false },
  { id: 'hle',    name: 'Hanwha Life',  initial: 'HLE', boostable: false },
  { id: 'dk',     name: 'Dplus KIA',    initial: 'DK',  boostable: true },
  { id: 'drx',    name: 'DRX',          initial: 'DRX', boostable: false },
  { id: 'ns',     name: 'Nongshim RedForce', initial: 'NS', boostable: false },
  { id: 'bro',    name: 'BRION',        initial: 'BRO', boostable: false },
  { id: 'kdf',    name: 'Kwangdong Freecs', initial: 'KDF', boostable: false },
  { id: 'fox',    name: 'OK BRION',     initial: 'FOX', boostable: false },
]

const PLAYERS = [
  { id: 'faker',   nick: 'Faker',   team: 'T1',        teamId: 't1' },
  { id: 'zeus',    nick: 'Zeus',    team: 'T1',        teamId: 't1' },
  { id: 'oner',    nick: 'Oner',    team: 'T1',        teamId: 't1' },
  { id: 'gumayusi',nick: 'Gumayusi',team: 'T1',        teamId: 't1' },
  { id: 'keria',   nick: 'Keria',   team: 'T1',        teamId: 't1' },
  { id: 'chovy',   nick: 'Chovy',   team: 'Gen.G',     teamId: 'geng' },
  { id: 'peyz',    nick: 'Peyz',    team: 'Gen.G',     teamId: 'geng' },
  { id: 'kiin',    nick: 'Kiin',    team: 'Gen.G',     teamId: 'geng' },
  { id: 'canyon',  nick: 'Canyon',  team: 'Dplus KIA', teamId: 'dk' },
  { id: 'showmaker', nick: 'ShowMaker', team: 'Dplus KIA', teamId: 'dk' },
  { id: 'aiming', nick: 'Aiming', team: 'Hanwha Life', teamId: 'hle' },
  { id: 'viper',  nick: 'Viper',  team: 'Hanwha Life', teamId: 'hle' },
]

const STEPS = [
  { key: 'league', title: 'Back Your League', data: LEAGUES, min: 1, max: 5 },
  { key: 'team',   title: 'Back Your Team',   data: TEAMS,   min: 1, max: 10 },
  { key: 'player', title: 'Follow Players',   data: PLAYERS, min: 0, max: 20 },
]

const state = {
  step: 0,
  selected: { league: [], team: [], player: [] },
  query: '',
}

const $title    = document.getElementById('step-title')
const $list     = document.getElementById('list')
const $search   = document.getElementById('search')
const $prev     = document.getElementById('prev-btn')
const $next     = document.getElementById('next-btn')
const $dots     = [1,2,3].map(n => document.getElementById(`dot-${n}`))

function currentStep() { return STEPS[state.step] }
function currentSelected() { return state.selected[currentStep().key] }

function filtered() {
  const items = currentStep().data
  const q = state.query.trim().toLowerCase()
  if (!q) return items
  return items.filter(item => {
    const haystack = [item.name, item.slug, item.initial, item.nick, item.team]
      .filter(Boolean).join(' ').toLowerCase()
    return haystack.includes(q)
  })
}

function thumbLabel(item) {
  if (item.initial) return item.initial.slice(0, 3)
  if (item.slug) return item.slug.toUpperCase().slice(0, 3)
  if (item.nick) return item.nick.slice(0, 1).toUpperCase()
  return (item.name || '?').slice(0, 1).toUpperCase()
}

function renderCard(item) {
  const sel = currentSelected()
  const idx = sel.indexOf(item.id)
  const isSel = idx >= 0
  const stepKey = currentStep().key

  const card = document.createElement('button')
  card.className = `card${isSel ? ' selected' : ''}`
  card.type = 'button'
  card.dataset.id = item.id

  const thumb = document.createElement('span')
  thumb.className = 'thumb'
  thumb.textContent = thumbLabel(item)
  card.appendChild(thumb)

  const info = document.createElement('div')
  info.className = 'info'
  const name = document.createElement('span')
  name.className = 'name'
  name.textContent = stepKey === 'player' ? item.nick : item.name
  info.appendChild(name)

  const sub = document.createElement('span')
  sub.className = 'sub'
  if (stepKey === 'player') {
    const logo = document.createElement('span')
    logo.className = 'team-logo'
    sub.appendChild(logo)
    sub.appendChild(document.createTextNode(item.team))
  } else {
    sub.textContent = item.slug || item.initial || ''
  }
  info.appendChild(sub)
  card.appendChild(info)

  if (item.boostable) {
    const badge = document.createElement('span')
    badge.className = 'boost-badge'
    badge.textContent = 'BOOST'
    card.appendChild(badge)
  }

  const order = document.createElement('span')
  order.className = `order-badge${isSel ? '' : ' hidden'}`
  order.textContent = isSel ? String(idx + 1) : ''
  card.appendChild(order)

  card.addEventListener('click', () => toggle(item.id))
  return card
}

function render() {
  const step = currentStep()
  $title.textContent = step.title
  $dots.forEach((d, i) => d.classList.toggle('active', i === state.step))

  $list.innerHTML = ''
  const items = filtered()
  if (items.length === 0) {
    const empty = document.createElement('div')
    empty.className = 'empty-state'
    empty.textContent = '검색 결과가 없습니다.'
    $list.appendChild(empty)
  } else {
    items.forEach(item => $list.appendChild(renderCard(item)))
  }

  $prev.textContent = state.step === 0 ? '← 메인' : '← 이전'
  $next.textContent = state.step === STEPS.length - 1 ? 'Done' : '다음 →'

  const sel = currentSelected()
  const canAdvance = sel.length >= step.min
  $next.disabled = !canAdvance
}

function toggle(id) {
  const step = currentStep()
  const sel = currentSelected()
  const idx = sel.indexOf(id)
  if (idx >= 0) {
    sel.splice(idx, 1)
  } else {
    if (sel.length >= step.max) return
    sel.push(id)
  }
  render()
}

$search.addEventListener('input', (e) => {
  state.query = e.target.value
  render()
})

$prev.addEventListener('click', () => {
  if (state.step === 0) {
    window.location.href = 'profile.html'
    return
  }
  state.step -= 1
  state.query = ''
  $search.value = ''
  render()
})

$next.addEventListener('click', () => {
  if ($next.disabled) return
  if (state.step === STEPS.length - 1) {
    try {
      localStorage.setItem('follow.selection', JSON.stringify(state.selected))
    } catch {}
    window.location.href = 'profile.html'
    return
  }
  state.step += 1
  state.query = ''
  $search.value = ''
  render()
})

render()
