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

const PER_PAGE = 20
const TOTAL_MOCK = 33
const TODAY = new Date(2026, 4, 28)

const PACKAGES = [
  { energy: 100,   amount: 1100,   currency: 'KRW' },
  { energy: 500,   amount: 5500,   currency: 'KRW' },
  { energy: 1200,  amount: 11000,  currency: 'KRW' },
  { energy: 3500,  amount: 33000,  currency: 'KRW' },
  { energy: 6000,  amount: 55000,  currency: 'KRW' },
  { energy: 13000, amount: 110000, currency: 'KRW' },
]

function buildMockItem(i) {
  const pkg = PACKAGES[i % PACKAGES.length]
  const daysAgo = i * 4 + (i % 3)
  const payed = new Date(TODAY)
  payed.setDate(payed.getDate() - daysAgo)
  const expire = new Date(payed)
  expire.setFullYear(expire.getFullYear() + 1)

  return {
    rown: i + 1,
    Amount: pkg.amount,
    DepositType: 'energy_pack',
    TransactionCode: `TX-${(20260000 + i * 137).toString(16).toUpperCase()}`,
    UserID: 'erin@rorr.club',
    currency: pkg.currency,
    energyCount: pkg.energy,
    payed_date: payed.toISOString(),
    expired_date: expire.toISOString(),
    pgType: 'tosspayments',
  }
}

let nextRown = 0
let isLoading = false
let hasNext = true
let observer = null

const $main = document.getElementById('main')
const $list = document.getElementById('list')
const $initial = document.getElementById('initial-loading')
const $initialCanvas = document.getElementById('initial-loading-canvas')
const $empty = document.getElementById('empty-state')
const $sentinel = document.getElementById('sentinel')
const $bottom = document.getElementById('bottom-loader')
const $bottomCanvas = document.getElementById('bottom-loader-canvas')
const $end = document.getElementById('end-note')

let initialRive = null
let bottomRive = null

function startInitialLoadingRive() {
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
    onLoad() {
      try { bottomRive.resizeDrawingSurfaceToCanvas() } catch {}
    },
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
}

function formatPayedDate(iso) {
  const d = new Date(iso)
  const yy = String(d.getFullYear()).slice(2)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const hh = String(d.getHours()).padStart(2, '0')
  const mi = String(d.getMinutes()).padStart(2, '0')
  return `${yy}.${mm}.${dd} ${hh}:${mi}`
}

function getExpireDiff(iso) {
  const expire = new Date(iso).getTime()
  const now = TODAY.getTime()
  const diffMs = expire - now
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24))
  if (days < 0)   return { label: 'EXPIRED',          cls: 'expired' }
  if (days === 0) return { label: 'Expires today',    cls: 'warn'    }
  if (days <= 30) return { label: `${days}일 남음`,    cls: 'warn'    }
  return { label: `${days}일 남음`, cls: '' }
}

function shortenTx(tx) {
  if (tx.length <= 20) return tx
  return tx.slice(0, 12) + '…' + tx.slice(-4)
}

function renderCard(item) {
  const card = document.createElement('div')
  card.className = 'purchase-card'

  const exp = getExpireDiff(item.expired_date)

  card.innerHTML = `
    <div class="energy-icon">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>
    </div>
    <div class="pc-right">
      <div class="energy-count">+${item.energyCount.toLocaleString()}<span class="unit">ENERGY</span></div>
      <div class="tx-code">${shortenTx(item.TransactionCode)}</div>
      <div class="payed-date">${formatPayedDate(item.payed_date)}</div>
      <div class="expire-info ${exp.cls}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        ${exp.label}
      </div>
    </div>
  `

  $list.appendChild(card)
}

function fetchPage() {
  return new Promise(resolve => {
    setTimeout(() => {
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
  startInitialLoadingRive()
  const page = await fetchPage()
  stopInitialLoadingRive()
  if (page.length === 0) {
    showEmptyState()
    isLoading = false
    return
  }
  page.forEach(renderCard)
  isLoading = false
  setTimeout(setupObserver, 300)
}

async function loadMore() {
  if (isLoading || !hasNext) return
  isLoading = true
  startBottomLoaderRive()
  const page = await fetchPage()
  stopBottomLoaderRive()
  page.forEach(renderCard)
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
  }, { rootMargin: '200px 0px' })
  observer.observe($sentinel)
}

window.addEventListener('beforeunload', () => {
  try { initialRive?.cleanup() } catch {}
  try { bottomRive?.cleanup() } catch {}
})

loadInitial()
