const API_BASE = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com:5012'
const JWT_KEY = 'pie-u-wt'
const NICKNAME_LIMIT = 14

const els = {
  overlay: document.getElementById('loading-overlay'),
  error: document.getElementById('error-message'),
  card: document.getElementById('profile-card'),
  menu: document.getElementById('menu'),
  avatar: document.getElementById('avatar'),
  msgBadge: document.getElementById('msg-badge'),
  email: document.getElementById('email'),
  displayname: document.getElementById('displayname'),
  nicknameToggle: document.getElementById('nickname-toggle'),
  gradeName: document.getElementById('grade-name'),
  sparkValue: document.getElementById('spark-value'),
  cashValue: document.getElementById('cash-value'),
  chargeBtn: document.getElementById('charge-btn'),
}

const state = {
  fullDisplayname: '',
  expanded: false,
  chargeUrl: '',
  cash: 0,
}

function formatNumber(n) {
  const v = typeof n === 'number' ? n : Number(n) || 0
  return v.toLocaleString('ko-KR')
}

function redirectToLogin() {
  window.location.href = 'login.html?expired=1'
}

function showError(message) {
  els.overlay.hidden = true
  els.error.hidden = false
  els.error.textContent = message
}

function showContent() {
  els.overlay.hidden = true
  els.error.hidden = true
  els.card.hidden = false
  els.menu.hidden = false
}

async function fetchProfile(jwt) {
  const res = await fetch(`${API_BASE}/spark/profile`, {
    headers: { Authorization: `Bearer ${jwt}` },
  })
  if (res.status === 401 || res.status === 403) {
    return { unauthorized: true }
  }
  if (!res.ok) {
    throw new Error(`프로필 조회 실패 (${res.status})`)
  }
  return res.json()
}

async function fetchMe(jwt) {
  const res = await fetch(`${API_BASE}/users/me`, {
    headers: { Authorization: `Bearer ${jwt}` },
  })
  if (res.status === 401 || res.status === 403) {
    return { unauthorized: true }
  }
  if (!res.ok) return null
  return res.json()
}

function extractProfile(payload) {
  if (!payload) return null
  if (payload.data && typeof payload.data === 'object') return payload.data
  return payload
}

function applyNickname(name) {
  state.fullDisplayname = name || ''
  state.expanded = false
  const long = state.fullDisplayname.length > NICKNAME_LIMIT
  if (long) {
    els.displayname.textContent = `${state.fullDisplayname.slice(0, NICKNAME_LIMIT)}…`
    els.nicknameToggle.hidden = false
    els.nicknameToggle.textContent = '더 보기'
  } else {
    els.displayname.textContent = state.fullDisplayname
    els.nicknameToggle.hidden = true
  }
}

function toggleNickname() {
  state.expanded = !state.expanded
  if (state.expanded) {
    els.displayname.textContent = state.fullDisplayname
    els.nicknameToggle.textContent = '접기'
  } else {
    els.displayname.textContent = `${state.fullDisplayname.slice(0, NICKNAME_LIMIT)}…`
    els.nicknameToggle.textContent = '더 보기'
  }
}

function renderMsgBadge(count) {
  const n = Number(count) || 0
  if (n <= 0) {
    els.msgBadge.hidden = true
    return
  }
  els.msgBadge.hidden = false
  els.msgBadge.textContent = n > 99 ? '99+' : String(n)
}

function renderProfile(profile) {
  els.email.textContent = profile.email || ''
  applyNickname(profile.displayname)
  els.gradeName.textContent = profile.gradeName || ''
  els.sparkValue.textContent = formatNumber(profile.exp)
  state.cash = Number(profile.cash) || 0
  els.cashValue.textContent = formatNumber(state.cash)
  renderMsgBadge(profile.msgCnt)

  if (profile.picture) {
    els.avatar.src = profile.picture
    els.avatar.alt = profile.displayname || ''
  } else {
    els.avatar.removeAttribute('src')
    els.avatar.alt = ''
  }

  const gradeId = Number(profile.gradeId) || 0
  if (gradeId > 0) {
    els.avatar.dataset.grade = String(gradeId)
  }
}

function configureChargeButton(me) {
  const payments = me && Array.isArray(me.payments) ? me.payments : []
  if (payments.length === 0) {
    els.chargeBtn.disabled = true
    state.chargeUrl = ''
    return
  }
  els.chargeBtn.disabled = false
  const first = payments[0] || {}
  state.chargeUrl = first.url || first.chargeUrl || 'https://rorr.club/charge'
}

function animateCash(prev, next) {
  if (prev === next) return
  const duration = 600
  const start = performance.now()
  const delta = next - prev
  els.cashValue.classList.add('is-bumping')
  const step = (now) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    const value = Math.round(prev + delta * eased)
    els.cashValue.textContent = formatNumber(value)
    if (t < 1) {
      requestAnimationFrame(step)
    } else {
      els.cashValue.classList.remove('is-bumping')
    }
  }
  requestAnimationFrame(step)
}

function handleMenuClick(event) {
  const item = event.currentTarget
  const target = item.dataset.target
  const kind = item.dataset.kind
  if (!target) return

  if (kind === 'external') {
    if (typeof chrome !== 'undefined' && chrome.tabs?.create) {
      chrome.tabs.create({ url: target })
    } else {
      window.open(target, '_blank', 'noopener')
    }
    return
  }

  const url = target.includes('?') ? `${target}&from=profile` : `${target}?from=profile`
  window.location.href = url
}

function handleChargeClick() {
  if (!state.chargeUrl) return
  if (typeof chrome !== 'undefined' && chrome.tabs?.create) {
    chrome.tabs.create({ url: state.chargeUrl })
  } else {
    window.open(state.chargeUrl, '_blank', 'noopener')
  }
}

function bindBackgroundListener() {
  if (typeof chrome === 'undefined' || !chrome.runtime?.onMessage) return
  chrome.runtime.onMessage.addListener((message) => {
    if (!message || typeof message !== 'object') return
    if (message.type === 'boost/charged' || message.type === 'charge/complete') {
      const next = Number(message.data?.cash)
      if (Number.isFinite(next)) {
        const prev = state.cash
        state.cash = next
        animateCash(prev, next)
      }
    }
  })
}

async function init() {
  const jwt = localStorage.getItem(JWT_KEY)
  if (!jwt) {
    redirectToLogin()
    return
  }

  try {
    const [profileRes, meRes] = await Promise.all([fetchProfile(jwt), fetchMe(jwt)])

    if (profileRes?.unauthorized || meRes?.unauthorized) {
      localStorage.removeItem(JWT_KEY)
      redirectToLogin()
      return
    }

    const profile = extractProfile(profileRes)
    if (!profile) {
      showError('프로필 정보를 불러올 수 없습니다.')
      return
    }

    renderProfile(profile)
    configureChargeButton(extractProfile(meRes))
    showContent()
  } catch (e) {
    showError(e?.message || '프로필을 불러오는 중 오류가 발생했습니다.')
  }
}

els.nicknameToggle.addEventListener('click', toggleNickname)
els.chargeBtn.addEventListener('click', handleChargeClick)
document.querySelectorAll('.menu-item').forEach((btn) => {
  btn.addEventListener('click', handleMenuClick)
})
bindBackgroundListener()

init()
