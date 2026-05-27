const html = document.documentElement
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
html.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light')

const LEAGUES = [
  { id: 'lck', name: 'LCK', slug: 'lck', boost: true },
  { id: 'lpl', name: 'LPL', slug: 'lpl', boost: true },
  { id: 'lec', name: 'LEC', slug: 'lec', boost: false },
  { id: 'lcs', name: 'LCS', slug: 'lcs', boost: false },
  { id: 'kbo', name: 'KBO', slug: 'kbo', boost: true },
  { id: 'mlb', name: 'MLB', slug: 'mlb', boost: false },
  { id: 'epl', name: 'EPL', slug: 'epl', boost: true },
  { id: 'nba', name: 'NBA', slug: 'nba', boost: false },
]

const TEAMS = [
  { id: 't1', name: 'T1', initial: 'T1', leagueId: 'lck', boost: true },
  { id: 'gen', name: 'Gen.G', initial: 'GEN', leagueId: 'lck', boost: true },
  { id: 'hle', name: 'Hanwha Life Esports', initial: 'HLE', leagueId: 'lck', boost: false },
  { id: 'dk', name: 'Dplus KIA', initial: 'DK', leagueId: 'lck', boost: false },
  { id: 'kt', name: 'kt Rolster', initial: 'KT', leagueId: 'lck', boost: true },
  { id: 'lng', name: 'LNG Esports', initial: 'LNG', leagueId: 'lpl', boost: false },
  { id: 'blg', name: 'Bilibili Gaming', initial: 'BLG', leagueId: 'lpl', boost: true },
  { id: 'g2', name: 'G2 Esports', initial: 'G2', leagueId: 'lec', boost: false },
  { id: 'doosan', name: '두산 베어스', initial: 'OB', leagueId: 'kbo', boost: true },
  { id: 'lg', name: 'LG 트윈스', initial: 'LG', leagueId: 'kbo', boost: false },
]

const PLAYERS = [
  { id: 'faker', nick: 'Faker', teamId: 't1', teamName: 'T1' },
  { id: 'gumayusi', nick: 'Gumayusi', teamId: 't1', teamName: 'T1' },
  { id: 'zeus', nick: 'Zeus', teamId: 't1', teamName: 'T1' },
  { id: 'oner', nick: 'Oner', teamId: 't1', teamName: 'T1' },
  { id: 'keria', nick: 'Keria', teamId: 't1', teamName: 'T1' },
  { id: 'chovy', nick: 'Chovy', teamId: 'gen', teamName: 'Gen.G' },
  { id: 'peyz', nick: 'Peyz', teamId: 'gen', teamName: 'Gen.G' },
  { id: 'canyon', nick: 'Canyon', teamId: 'gen', teamName: 'Gen.G' },
  { id: 'bdd', nick: 'Bdd', teamId: 'kt', teamName: 'kt Rolster' },
  { id: 'deft', nick: 'Deft', teamId: 'kt', teamName: 'kt Rolster' },
]

const STEPS = [
  { id: 1, key: 'league', title: 'Back Your League', label: '리그', min: 1, max: 5 },
  { id: 2, key: 'team', title: 'Back Your Team', label: '팀', min: 1, max: 10 },
  { id: 3, key: 'player', title: 'Follow Players', label: '선수', min: 0, max: 20 },
]

const state = {
  step: 1,
  query: '',
  selections: { league: [], team: [], player: [] },
}

const $title = document.getElementById('headerTitle')
const $stepLabel = document.getElementById('stepLabel')
const $list = document.getElementById('list')
const $search = document.getElementById('searchInput')
const $prev = document.getElementById('prevBtn')
const $next = document.getElementById('nextBtn')
const $dots = [...document.querySelectorAll('.dot')]

function currentStep() { return STEPS[state.step - 1] }

function currentItems() {
  const q = state.query.trim().toLowerCase()
  let items
  if (state.step === 1) {
    items = LEAGUES.map(l => ({ ...l, _label: `${l.name} ${l.slug}` }))
  } else if (state.step === 2) {
    items = TEAMS.map(t => ({ ...t, _label: `${t.name} ${t.initial}` }))
  } else {
    items = PLAYERS.map(p => ({ ...p, _label: `${p.nick} ${p.teamName}` }))
  }
  if (!q) return items
  return items.filter(i => i._label.toLowerCase().includes(q))
}

function selectedList() { return state.selections[currentStep().key] }

function renderList() {
  const items = currentItems()
  const selected = selectedList()
  const stepKey = currentStep().key

  if (items.length === 0) {
    $list.innerHTML = `<div class="empty-state">검색 결과가 없어요</div>`
    return
  }

  $list.innerHTML = items.map(item => {
    const orderIdx = selected.indexOf(item.id)
    const isSelected = orderIdx !== -1
    const orderNum = isSelected ? orderIdx + 1 : ''
    const boostBadge = (stepKey !== 'player' && item.boost)
      ? '<span class="badge-boost">Boost</span>'
      : ''

    let logoText = ''
    let meta = ''
    if (stepKey === 'league') {
      logoText = item.slug.toUpperCase().slice(0, 3)
      meta = item.slug
    } else if (stepKey === 'team') {
      logoText = item.initial.slice(0, 3)
      meta = item.initial
    } else {
      logoText = item.nick.slice(0, 2).toUpperCase()
      meta = `<span class="team-logo-mini" aria-hidden="true"></span>${item.teamName}`
    }

    const name = stepKey === 'player' ? item.nick : item.name

    return `
      <div class="card ${isSelected ? 'selected' : ''}" data-id="${item.id}">
        <div class="logo">${logoText}</div>
        <div class="info">
          <span class="name">${name}</span>
          <span class="meta">${meta}</span>
        </div>
        ${boostBadge}
        <div class="order-num">${orderNum}</div>
      </div>
    `
  }).join('')

  $list.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => toggle(card.dataset.id))
  })
}

function toggle(id) {
  const step = currentStep()
  const list = state.selections[step.key]
  const idx = list.indexOf(id)
  if (idx !== -1) {
    list.splice(idx, 1)
  } else {
    if (list.length >= step.max) return
    list.push(id)
  }
  renderList()
  updateBar()
}

function updateBar() {
  const step = currentStep()
  $title.textContent = step.title
  $stepLabel.textContent = step.label
  $dots.forEach(d => {
    d.classList.toggle('active', Number(d.dataset.step) === state.step)
  })

  const selected = selectedList()
  const canGoNext = selected.length >= step.min
  $next.disabled = !canGoNext

  if (state.step === 3) {
    $next.textContent = 'Done'
  } else {
    $next.textContent = '다음 →'
  }
}

$prev.addEventListener('click', () => {
  if (state.step === 1) {
    window.location.href = './profile.html'
    return
  }
  state.step -= 1
  state.query = ''
  $search.value = ''
  renderList()
  updateBar()
})

$next.addEventListener('click', () => {
  if ($next.disabled) return
  if (state.step === 3) {
    localStorage.setItem('rorr:follow', JSON.stringify(state.selections))
    window.location.href = './profile.html'
    return
  }
  state.step += 1
  state.query = ''
  $search.value = ''
  renderList()
  updateBar()
})

$search.addEventListener('input', e => {
  state.query = e.target.value
  renderList()
})

renderList()
updateBar()
