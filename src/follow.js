const html = document.documentElement
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
html.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light')

const STEPS = [
  {
    key: 'league',
    title: 'Back Your League',
    label: '리그',
    min: 1,
    max: 5,
    items: [
      { id: 'lck', name: 'LCK', sub: 'lck', boost: true },
      { id: 'lpl', name: 'LPL', sub: 'lpl', boost: true },
      { id: 'lec', name: 'LEC', sub: 'lec', boost: false },
      { id: 'lcs', name: 'LCS', sub: 'lcs', boost: false },
      { id: 'kbl', name: 'KBL', sub: 'kbl', boost: false },
      { id: 'kbo', name: 'KBO', sub: 'kbo', boost: true },
    ],
  },
  {
    key: 'team',
    title: 'Back Your Team',
    label: '팀',
    min: 1,
    max: 10,
    items: [
      { id: 't1', name: 'T1', sub: 'T1', boost: true },
      { id: 'geng', name: 'Gen.G', sub: 'GEN', boost: true },
      { id: 'kt', name: 'KT Rolster', sub: 'KT', boost: false },
      { id: 'hle', name: 'Hanwha Life', sub: 'HLE', boost: false },
      { id: 'drx', name: 'DRX', sub: 'DRX', boost: false },
      { id: 'dk', name: 'DPlus KIA', sub: 'DK', boost: true },
    ],
  },
  {
    key: 'player',
    title: 'Follow Players',
    label: '선수',
    min: 0,
    max: 20,
    items: [
      { id: 'faker', name: 'Faker', team: 'T1' },
      { id: 'chovy', name: 'Chovy', team: 'Gen.G' },
      { id: 'zeus', name: 'Zeus', team: 'T1' },
      { id: 'oner', name: 'Oner', team: 'T1' },
      { id: 'ruler', name: 'Ruler', team: 'Gen.G' },
      { id: 'canyon', name: 'Canyon', team: 'DPlus KIA' },
    ],
  },
]

const state = {
  stepIndex: 0,
  selections: { league: [], team: [], player: [] },
  query: '',
}

const stepTitleEl = document.getElementById('stepTitle')
const stepMetaEl = document.getElementById('stepMeta')
const searchEl = document.getElementById('searchBox')
const listEl = document.getElementById('itemList')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const dots = document.querySelectorAll('.step-dot')

function currentStep() {
  return STEPS[state.stepIndex]
}

function filteredItems() {
  const step = currentStep()
  const q = state.query.trim().toLowerCase()
  if (!q) return step.items
  return step.items.filter((it) => {
    const hay = [it.name, it.sub, it.team].filter(Boolean).join(' ').toLowerCase()
    return hay.includes(q)
  })
}

function render() {
  const step = currentStep()
  const selected = state.selections[step.key]

  stepTitleEl.textContent = step.title
  stepMetaEl.textContent = step.label

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === state.stepIndex)
    dot.classList.toggle('done', i < state.stepIndex)
  })

  const items = filteredItems()
  if (items.length === 0) {
    listEl.innerHTML = '<div class="empty">결과가 없습니다.</div>'
  } else {
    listEl.innerHTML = items
      .map((item) => {
        const orderIdx = selected.indexOf(item.id)
        const isSelected = orderIdx >= 0
        const order = isSelected ? orderIdx + 1 : null
        const initial = (item.name || '?').charAt(0).toUpperCase()
        const subLine =
          step.key === 'player'
            ? `<span class="team-mini"></span><span>${item.team ?? ''}</span>`
            : `<span>${item.sub ?? ''}</span>`
        const boostBadge = item.boost ? '<span class="badge-boost">Boost</span>' : ''
        const right = order
          ? `<div class="order-num">${order}</div>`
          : '<div class="order-placeholder"></div>'
        return `
          <div class="item-card${isSelected ? ' selected' : ''}" data-id="${item.id}">
            <div class="item-logo">${initial}</div>
            <div class="item-body">
              <div class="item-name">${item.name}</div>
              <div class="item-sub">${subLine}</div>
            </div>
            ${boostBadge}
            ${right}
          </div>
        `
      })
      .join('')
  }

  const minOk = selected.length >= step.min
  nextBtn.textContent = state.stepIndex === STEPS.length - 1 ? 'Done' : '다음'
  nextBtn.disabled = !minOk
  prevBtn.textContent = state.stepIndex === 0 ? '취소' : '이전'
}

function toggleSelection(id) {
  const step = currentStep()
  const arr = state.selections[step.key]
  const idx = arr.indexOf(id)
  if (idx >= 0) {
    arr.splice(idx, 1)
  } else {
    if (arr.length >= step.max) return
    arr.push(id)
  }
  render()
}

listEl.addEventListener('click', (e) => {
  const card = e.target.closest('.item-card')
  if (!card) return
  toggleSelection(card.dataset.id)
})

searchEl.addEventListener('input', (e) => {
  state.query = e.target.value
  render()
})

prevBtn.addEventListener('click', () => {
  if (state.stepIndex === 0) {
    window.location.href = './profile.html'
    return
  }
  state.stepIndex -= 1
  state.query = ''
  searchEl.value = ''
  render()
})

nextBtn.addEventListener('click', () => {
  if (state.stepIndex === STEPS.length - 1) {
    window.location.href = './profile.html'
    return
  }
  state.stepIndex += 1
  state.query = ''
  searchEl.value = ''
  render()
})

render()
