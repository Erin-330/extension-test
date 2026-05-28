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
const NO_BOOST_RIV = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/no-boost.riv'
const FEED_LIKE_RIV = 'https://erin-bucket-team.s3.us-east-1.amazonaws.com/feed-like-button.riv'

const PER_PAGE = 20
const TOTAL_MOCK = 47

const USERS = [
  { name: 'Erin',     image: 'E', color: 'boosterwall' },
  { name: 'Joon',     image: 'J', color: 'boosterwall' },
  { name: 'Min',      image: 'M', color: 'boosterwall' },
  { name: 'Sora',     image: 'S', color: 'boosterwall' },
  { name: 'TaeYong',  image: 'T', color: 'boosterwall' },
  { name: 'Anonymous',image: '?', color: 'boosterwall' },
]
const TARGETS = [
  { team: 'T1',  player: 'Faker',     league: 'LCK', match: 'T1 @ GEN' },
  { team: 'GEN', player: 'Chovy',     league: 'LCK', match: 'GEN @ HLE' },
  { team: 'DK',  player: 'ShowMaker', league: 'LCK', match: 'DK @ KT' },
  { team: 'HLE', player: 'Viper',     league: 'LCK', match: 'HLE @ T1' },
]
const MESSAGES = [
  'GO GO GO! 오늘도 화이팅!',
  '오늘 경기 너무 멋졌어요 🔥',
  '다음 경기도 응원할게요',
  '꼭 이겨주세요!',
  '진짜 최고임',
  null,
  'PRIVATE',
  'GG WP. 다음 라운드도 부탁드려요.',
]

function buildMockItem(i) {
  const u = USERS[i % USERS.length]
  const t = TARGETS[i % TARGETS.length]
  const m = MESSAGES[i % MESSAGES.length]
  const isPrivate = m === 'PRIVATE'
  const amount = [10, 50, 100, 250, 500][i % 5]
  const daysAgo = i
  const d = new Date(2026, 4, 28 - daysAgo)
  const date = `${String(d.getFullYear()).slice(2)}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
  return {
    rown: i + 1,
    Amount: amount,
    Comment: isPrivate ? '' : (m ?? 'GG'),
    privateYN: isPrivate ? 'Y' : 'N',
    UserName: u.name,
    UserImage: u.image,
    TeamInitial: t.team,
    PlayerNickname: t.player,
    LeagueName: t.league,
    MatchName: t.match,
    MatchDate: date,
    GameID: i % 6 === 0 ? `live-${i}` : null,
    TransactionCode: `TX-${1000 + i}`,
    feedLikeCount: (i * 3) % 17,
    FeedLikeYN: i % 4 === 0 ? 'Y' : 'N',
    donationDate: date,
  }
}

let nextRown = 0
let isLoading = false
let hasNext = true
let observer = null
const likeRiveInstances = new Map()

const $main = document.getElementById('main')
const $list = document.getElementById('list')
const $initial = document.getElementById('initial-loading')
const $initialCanvas = document.getElementById('initial-loading-canvas')
const $empty = document.getElementById('empty-state')
const $noBoostCanvas = document.getElementById('no-boost-canvas')
const $sentinel = document.getElementById('sentinel')
const $bottom = document.getElementById('bottom-loader')
const $bottomCanvas = document.getElementById('bottom-loader-canvas')
const $end = document.getElementById('end-note')

let initialRive = null
let bottomRive = null
let noBoostRive = null

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
  noBoostRive = new Rive({
    src: NO_BOOST_RIV,
    canvas: $noBoostCanvas,
    artboard: 'donateFirst',
    stateMachines: 'State Machine 1',
    autoplay: true,
    onLoad() {
      try { noBoostRive.resizeDrawingSurfaceToCanvas() } catch {}
    },
  })
}

function renderCard(item) {
  const card = document.createElement('div')
  card.className = 'boost-card'
  card.dataset.tx = item.TransactionCode

  const isPrivate = item.privateYN === 'Y'
  const isLive = !!item.GameID
  const isLiked = item.FeedLikeYN === 'Y'

  card.innerHTML = `
    <div class="accent-bar"></div>
    <div class="card-body">
      <div class="sender-row">
        <div class="sender-avatar">${item.UserImage}</div>
        <div class="sender-info">
          <div class="sender-name">${item.UserName}</div>
          <div class="sender-time">${item.donationDate}</div>
        </div>
        ${isPrivate ? `
          <svg class="private-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        ` : ''}
      </div>

      <div class="boost-content">
        <div class="energy-amount">
          <svg class="energy-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>
          ${item.Amount}
        </div>
        <div class="boost-message ${isPrivate ? 'private' : ''}">
          ${isPrivate ? 'PRIVATE MESSAGE' : escapeHtml(item.Comment || 'GG!')}
        </div>
      </div>

      <div class="game-info">
        <span class="league-badge">${item.LeagueName}</span>
        <span class="match-info">${item.MatchName} · ${item.MatchDate}</span>
        ${isLive ? '<span class="live-dot" title="LIVE"></span>' : ''}
      </div>

      <div class="like-row">
        <button class="like-btn ${isLiked ? 'liked' : ''}" data-tx="${item.TransactionCode}" aria-label="좋아요">
          <div class="like-canvas-wrap"><canvas></canvas></div>
          <span class="like-count">${item.feedLikeCount}</span>
        </button>
      </div>
    </div>
  `

  $list.appendChild(card)

  const btn = card.querySelector('.like-btn')
  const canvas = card.querySelector('.like-canvas-wrap canvas')
  initLikeRive(canvas, item)
  btn.addEventListener('click', () => handleLike(item, btn))
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ))
}

function initLikeRive(canvas, item) {
  let rive = null
  try {
    rive = new Rive({
      src: FEED_LIKE_RIV,
      canvas,
      artboard: 'FeedLikeButtonSet',
      stateMachines: 'State Machine 1',
      autoplay: true,
      autoBind: true,
      onLoad() {
        try { rive.resizeDrawingSurfaceToCanvas() } catch {}
        try {
          const vm = rive.viewModelInstance
          const cnt = vm?.number('LikeNumber')
          const on  = vm?.boolean('isOnState')
          if (cnt) cnt.value = item.feedLikeCount
          if (on)  on.value = item.FeedLikeYN === 'Y'
        } catch {}
      },
      onLoadError() {
        canvas.parentElement.innerHTML = `<div style="font-size:14px;line-height:20px;text-align:center;">${item.FeedLikeYN === 'Y' ? '♥' : '♡'}</div>`
      },
    })
    likeRiveInstances.set(item.TransactionCode, rive)
  } catch {}
}

function handleLike(item, btn) {
  if (btn.disabled) return
  btn.disabled = true

  const wasLiked = item.FeedLikeYN === 'Y'
  item.FeedLikeYN = wasLiked ? 'N' : 'Y'
  item.feedLikeCount += wasLiked ? -1 : 1
  btn.classList.toggle('liked', !wasLiked)
  btn.querySelector('.like-count').textContent = item.feedLikeCount

  const rive = likeRiveInstances.get(item.TransactionCode)
  if (rive) {
    try {
      const vm = rive.viewModelInstance
      const cnt = vm?.number('LikeNumber')
      const on  = vm?.boolean('isOnState')
      if (cnt) cnt.value = item.feedLikeCount
      if (on)  on.value = !wasLiked
    } catch {}
  }

  setTimeout(() => { btn.disabled = false }, 400)
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
  try { noBoostRive?.cleanup() } catch {}
  likeRiveInstances.forEach(r => { try { r.cleanup() } catch {} })
})

loadInitial()
