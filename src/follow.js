const html = document.documentElement

const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
html.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light')

const STEPS = {
  1: { title: 'Back Your League', label: '리그', max: 5, min: 1 },
  2: { title: 'Back Your Team',  label: '팀',   max: 10, min: 1 },
  3: { title: 'Follow Players',  label: '선수', max: 20, min: 0 },
}

const DATA = {
  leagues: [
    { id: 'lck',     name: 'LCK',        slug: 'lck',     boost: true },
    { id: 'lpl',     name: 'LPL',        slug: 'lpl',     boost: true },
    { id: 'lec',     name: 'LEC',        slug: 'lec',     boost: false },
    { id: 'lcs',     name: 'LCS',        slug: 'lcs',     boost: false },
    { id: 'mlb',     name: 'MLB',        slug: 'mlb',     boost: true },
    { id: 'kbo',     name: 'KBO 리그',   slug: 'kbo',     boost: true },
    { id: 'epl',     name: 'Premier League', slug: 'epl', boost: true },
    { id: 'nba',     name: 'NBA',        slug: 'nba',     boost: false },
  ],
  teams: [
    { id: 't1',  name: 'T1',           initial: 'T1',  boost: true },
    { id: 'gen', name: 'Gen.G',        initial: 'GEN', boost: true },
    { id: 'hle', name: 'Hanwha Life',  initial: 'HLE', boost: false },
    { id: 'dk',  name: 'Dplus KIA',    initial: 'DK',  boost: true },
    { id: 'kt',  name: 'kt Rolster',   initial: 'KT',  boost: false },
    { id: 'bro', name: 'OKBR Brion',   initial: 'BRO', boost: false },
    { id: 'ns',  name: 'Nongshim',     initial: 'NS',  boost: false },
    { id: 'dna', name: 'DRX',          initial: 'DRX', boost: false },
  ],
  players: [
    { id: 'faker', nick: 'Faker',  team: 'T1',          teamId: 't1'  },
    { id: 'chovy', nick: 'Chovy',  team: 'Gen.G',       teamId: 'gen' },
    { id: 'zeus',  nick: 'Zeus',   team: 'Hanwha Life', teamId: 'hle' },
    { id: 'oner',  nick: 'Oner',   team: 'T1',          teamId: 't1'  },
    { id: 'gumayusi', nick: 'Gumayusi', team: 'T1',     teamId: 't1'  },
    { id: 'keria', nick: 'Keria',  team: 'T1',          teamId: 't1'  },
    { id: 'peyz',  nick: 'Peyz',   team: 'Gen.G',       teamId: 'gen' },
    { id: 'kiin',  nick: 'Kiin',   team: 'Gen.G',       teamId: 'gen' },
  ],
}

const state = {
  step: 1,
  selected: { 1: [], 2: [], 3: [] },
  query: '',
}

const els = {
  stepTitle: document.getElementById('stepTitle'),
  stepLabel: document.getElementById('stepLabel'),
  searchInput: document.getElementById('searchInput'),
  leagueList: document.getElementById('leagueList'),
  teamList: document.getElementById('teamList'),
  playerList: document.getElementById('playerList'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  screens: document.querySelectorAll('.step-screen'),
  dots: document.querySelectorAll('.step-dot'),
}

function matches(text, q) {
  if (!q) return true
  return text.toLowerCase().includes(q.toLowerCase())
}

function renderLeagueCard(item) {
  const order = state.selected[1].indexOf(item.id) + 1
  const selected = order > 0
  return `
    <div class="item-card ${selected ? 'selected' : ''}" data-id="${item.id}">
      <div class="item-logo">${item.slug.slice(0, 1).toUpperCase()}</div>
      <div class="item-body">
        <div class="item-name">${item.name}</div>
        <div class="item-sub">${item.slug}</div>
      </div>
      ${item.boost ? '<div class="boost-badge">BOOST</div>' : ''}
      <div class="order-num">${order || ''}</div>
    </div>
  `
}

function renderTeamCard(item) {
  const order = state.selected[2].indexOf(item.id) + 1
  const selected = order > 0
  return `
    <div class="item-card ${selected ? 'selected' : ''}" data-id="${item.id}">
      <div class="item-logo">${item.initial.slice(0, 2)}</div>
      <div class="item-body">
        <div class="item-name">${item.name}</div>
        <div class="item-sub">${item.initial}</div>
      </div>
      ${item.boost ? '<div class="boost-badge">BOOST</div>' : ''}
      <div class="order-num">${order || ''}</div>
    </div>
  `
}

function renderPlayerCard(item) {
  const order = state.selected[3].indexOf(item.id) + 1
  const selected = order > 0
  return `
    <div class="item-card ${selected ? 'selected' : ''}" data-id="${item.id}">
      <div class="item-logo">${item.nick.slice(0, 1).toUpperCase()}</div>
      <div class="item-body">
        <div class="item-name">${item.nick}</div>
        <div class="item-sub"><span class="sub-logo"></span>${item.team}</div>
      </div>
      <div class="order-num">${order || ''}</div>
    </div>
  `
}

function renderList(stepKey, list, items, renderer) {
  const filtered = items.filter((it) => {
    const key = it.name || it.nick
    const slug = it.slug || it.initial || it.team || ''
    return matches(key, state.query) || matches(slug, state.query)
  })
  if (filtered.length === 0) {
    list.innerHTML = '<div class="empty-state">검색 결과가 없습니다</div>'
    return
  }
  list.innerHTML = filtered.map(renderer).join('')
  list.querySelectorAll('.item-card').forEach((card) => {
    card.addEventListener('click', () => toggle(stepKey, card.dataset.id))
  })
}

function toggle(stepKey, id) {
  const sel = state.selected[stepKey]
  const idx = sel.indexOf(id)
  const max = STEPS[stepKey].max
  if (idx >= 0) {
    sel.splice(idx, 1)
  } else {
    if (sel.length >= max) return
    sel.push(id)
  }
  render()
}

function render() {
  const cfg = STEPS[state.step]
  els.stepTitle.textContent = cfg.title
  els.stepLabel.textContent = cfg.label

  els.screens.forEach((s) => {
    s.classList.toggle('active', Number(s.dataset.step) === state.step)
  })
  els.dots.forEach((d) => {
    d.classList.toggle('active', Number(d.dataset.dot) === state.step)
  })

  renderList(1, els.leagueList, DATA.leagues, renderLeagueCard)
  renderList(2, els.teamList,   DATA.teams,   renderTeamCard)
  renderList(3, els.playerList, DATA.players, renderPlayerCard)

  els.prevBtn.textContent = state.step === 1 ? '← 메인' : '← 이전'
  els.nextBtn.textContent = state.step === 3 ? 'Done' : '다음 →'

  const sel = state.selected[state.step]
  const min = cfg.min
  els.nextBtn.disabled = sel.length < min
}

els.searchInput.addEventListener('input', (e) => {
  state.query = e.target.value
  render()
})

els.prevBtn.addEventListener('click', () => {
  if (state.step === 1) {
    location.href = './profile.html'
    return
  }
  state.step -= 1
  state.query = ''
  els.searchInput.value = ''
  render()
})

els.nextBtn.addEventListener('click', () => {
  if (state.step === 3) {
    location.href = './profile.html'
    return
  }
  state.step += 1
  state.query = ''
  els.searchInput.value = ''
  render()
})

render()
