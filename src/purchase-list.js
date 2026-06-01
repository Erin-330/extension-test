import { Rive } from '@rive-app/canvas'

const THEME_KEY = 'theme'
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light')
}
initTheme()

const LOADING_RIV = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/loading-page.riv'

const PER_PAGE = 20
const TOTAL_MOCK = 53

function buildMockItem(i) {
  const amounts = [50, 100, 200, 500, 1000]
  const base = new Date(2026, 4, 30, 14, 22, 10)
  base.setDate(base.getDate() - i)
  const pad = n => String(n).padStart(2, '0')
  const paymentDate = `${base.getFullYear()}.${pad(base.getMonth() + 1)}.${pad(base.getDate())}. ${pad(base.getHours())}:${pad(base.getMinutes())}:${pad(base.getSeconds())}`
  const expireDays = 30 - i

  return {
    rown: i + 1,
    TransactionCode: `TX-${String(10000 + i).padStart(8, '0')}`,
    Amount: amounts[i % amounts.length],
    PaymentDate: paymentDate,
    ExpireDays: expireDays,
  }
}

let nextRown = 0
let isLoading = false
let hasNext = true
let errorShown = false
let observer = null

let initialRive = null
let bottomRive = null

const $initialLoading = document.getElementById('initial-loading')
const $initialCanvas = document.getElementById('initial-canvas')
const $emptyState = document.getElementById('empty-state')
const $list = document.getElementById('list')
const $sentinel = document.getElementById('sentinel')
const $bottomLoader = document.getElementById('bottom-loader')
const $bottomCanvas = document.getElementById('bottom-canvas')
const $endNote = document.getElementById('end-note')
const $errorModal = document.getElementById('error-modal')
const $modalCloseBtn = document.getElementById('modal-close-btn')

$modalCloseBtn.addEventListener('click', () => {
  $errorModal.classList.remove('active')
})

function showError() {
  if (errorShown) return
  errorShown = true
  $errorModal.classList.add('active')
}

function startInitialRive() {
  initialRive = new Rive({
    src: LOADING_RIV,
    canvas: $initialCanvas,
    artboard: 'Loading',
    stateMachines: 'State Machine 1',
    autoplay: true,
    onLoad() {
      try { initialRive.resizeDrawingSurfaceToCanvas() } catch {}
    },
  })
}

function stopInitialRive() {
  $initialLoading.style.display = 'none'
  if (initialRive) {
    try { initialRive.cleanup() } catch {}
    initialRive = null
  }
}

function startBottomRive() {
  $bottomLoader.classList.add('active')
  if (bottomRive) return
  bottomRive = new Rive({
    src: LOADING_RIV,
    canvas: $bottomCanvas,
    artboard: 'Loading_addList',
    stateMachines: 'State Machine 1',
    autoplay: true,
    onLoad() {
      try { bottomRive.resizeDrawingSurfaceToCanvas() } catch {}
    },
  })
}

function stopBottomRive() {
  $bottomLoader.classList.remove('active')
  if (bottomRive) {
    try { bottomRive.cleanup() } catch {}
    bottomRive = null
  }
}

function expireLabel(days) {
  if (days > 0) return { text: `${days}일 남음`, cls: '' }
  if (days === 0) return { text: '오늘 만료', cls: 'today' }
  return { text: '만료됨', cls: 'expired' }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  )
}

function renderCard(item) {
  const { text, cls } = expireLabel(item.ExpireDays)
  const card = document.createElement('div')
  card.className = 'purchase-card'
  card.innerHTML = `
    <div class="card-top">
      <div class="energy-badge">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>
        ${item.Amount} Energy
      </div>
      <span class="tx-code">${escapeHtml(item.TransactionCode)}</span>
    </div>
    <div class="payment-date">${escapeHtml(item.PaymentDate)}</div>
    <div class="expire-row">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
      <span class="expire-label ${cls}">${text}</span>
    </div>
  `
  $list.appendChild(card)
}

function fetchPage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.02) { reject(new Error('network')); return }
      const slice = []
      for (let i = 0; i < PER_PAGE; i++) {
        const idx = nextRown + i
        if (idx >= TOTAL_MOCK) break
        slice.push(buildMockItem(idx))
      }
      nextRown += slice.length
      hasNext = nextRown < TOTAL_MOCK
      resolve(slice)
    }, 600)
  })
}

async function loadInitial() {
  isLoading = true
  startInitialRive()
  try {
    const page = await fetchPage()
    stopInitialRive()
    if (page.length === 0) {
      $emptyState.style.display = 'flex'
    } else {
      page.forEach(renderCard)
      setTimeout(setupObserver, 300)
    }
  } catch {
    stopInitialRive()
    showError()
  }
  isLoading = false
}

async function loadMore() {
  if (isLoading || !hasNext) return
  isLoading = true
  startBottomRive()
  try {
    const page = await fetchPage()
    stopBottomRive()
    page.forEach(renderCard)
    if (!hasNext) {
      $endNote.classList.add('active')
      if (observer) observer.disconnect()
    }
  } catch {
    stopBottomRive()
    showError()
  }
  isLoading = false
}

function setupObserver() {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) loadMore()
  }, { rootMargin: '200px 0px' })
  observer.observe($sentinel)
}

window.addEventListener('beforeunload', () => {
  try { initialRive?.cleanup() } catch {}
  try { bottomRive?.cleanup() } catch {}
})

loadInitial()
