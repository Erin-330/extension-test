const API_BASE = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com:5012'
const JWT_KEY = 'pie-u-wt'
const NAME_TRUNCATE_LEN = 14

const GRADE_KEY = {
  1: 'top5',
  2: 'diamond',
  3: 'platinum',
  4: 'gold',
  5: 'silver',
  6: 'bronze',
}
function gradeKey(gradeId) {
  if (gradeId >= 7 && gradeId <= 10) return 'participant'
  return GRADE_KEY[gradeId] || 'participant'
}

const $ = (id) => document.getElementById(id)
const els = {
  loading: $('loading-overlay'),
  status: $('status-message'),
  close: $('close-btn'),
  mail: $('mail-btn'),
  mailBadge: $('mail-badge'),
  avatarRing: $('avatar-ring'),
  avatar: $('avatar'),
  email: $('email'),
  displayname: $('displayname'),
  toggleName: $('toggle-name-btn'),
  exp: $('exp'),
  gradeName: $('grade-name'),
  cash: $('cash'),
  charge: $('charge-btn'),
}

let chargeUrl = null
let nicknameFull = ''
let nicknameTruncated = true

function setStatus(text, variant) {
  els.status.textContent = text || ''
  if (variant) els.status.dataset.variant = variant
  else delete els.status.dataset.variant
}

function setLoading(isLoading) {
  els.loading.hidden = !isLoading
}

function format(n) {
  if (typeof n !== 'number') return '0'
  return n.toLocaleString('ko-KR')
}

function getJwt() {
  return localStorage.getItem(JWT_KEY)
}

function goLoginExpired() {
  window.location.href = 'login.html?expired=1'
}

async function apiGet(path) {
  const jwt = getJwt()
  if (!jwt) {
    goLoginExpired()
    throw new Error('no jwt')
  }
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { Authorization: `Bearer ${jwt}` },
  })
  if (res.status === 401) {
    localStorage.removeItem(JWT_KEY)
    goLoginExpired()
    throw new Error('unauthorized')
  }
  if (!res.ok) {
    throw new Error(`서버 오류 (${res.status})`)
  }
  return res.json()
}

function renderProfile(profile) {
  els.email.textContent = profile.email || '—'

  nicknameFull = profile.displayname || '—'
  nicknameTruncated = nicknameFull.length > NAME_TRUNCATE_LEN
  if (nicknameTruncated) {
    els.displayname.textContent = nicknameFull.slice(0, NAME_TRUNCATE_LEN) + '…'
    els.toggleName.hidden = false
    els.toggleName.textContent = '더 보기'
  } else {
    els.displayname.textContent = nicknameFull
    els.toggleName.hidden = true
  }

  if (profile.picture) {
    els.avatar.innerHTML = ''
    const img = document.createElement('img')
    img.src = profile.picture
    img.alt = ''
    els.avatar.appendChild(img)
  }
  els.avatarRing.dataset.grade = gradeKey(profile.gradeId)
  els.gradeName.textContent = profile.gradeName || '—'
  els.exp.textContent = format(profile.exp || 0)
  els.cash.textContent = format(profile.cash || 0)

  const cnt = profile.msgCnt || 0
  if (cnt > 0) {
    els.mailBadge.hidden = false
    els.mailBadge.textContent = cnt > 99 ? '99+' : String(cnt)
  } else {
    els.mailBadge.hidden = true
  }
}

function renderPayments(me) {
  const payments = Array.isArray(me?.payments) ? me.payments : []
  if (payments.length === 0) {
    els.charge.disabled = true
    chargeUrl = null
    return
  }
  els.charge.disabled = false
  chargeUrl = payments[0]?.chargeUrl || payments[0]?.url || 'https://rorr.club/charge'
}

function animateCash(prev, next) {
  if (prev === next) return
  const duration = 600
  const start = performance.now()
  function step(now) {
    const t = Math.min(1, (now - start) / duration)
    const ease = 1 - Math.pow(1 - t, 3)
    const v = Math.round(prev + (next - prev) * ease)
    els.cash.textContent = format(v)
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

function bindUi() {
  els.close.addEventListener('click', () => {
    window.close()
  })

  els.mail.addEventListener('click', () => {
    window.location.href = 'mailbox.html?from=profile'
  })

  els.toggleName.addEventListener('click', () => {
    if (nicknameTruncated) {
      els.displayname.textContent = nicknameFull
      els.toggleName.textContent = '접기'
    } else {
      els.displayname.textContent = nicknameFull.slice(0, NAME_TRUNCATE_LEN) + '…'
      els.toggleName.textContent = '더 보기'
    }
    nicknameTruncated = !nicknameTruncated
  })

  els.charge.addEventListener('click', () => {
    if (!chargeUrl) return
    if (typeof chrome !== 'undefined' && chrome.tabs?.create) {
      chrome.tabs.create({ url: chargeUrl })
    } else {
      window.open(chargeUrl, '_blank', 'noopener')
    }
  })

  document.querySelectorAll('.menu-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action
      const href = btn.dataset.href
      if (!href) return
      if (action === 'external') {
        if (typeof chrome !== 'undefined' && chrome.tabs?.create) {
          chrome.tabs.create({ url: href })
        } else {
          window.open(href, '_blank', 'noopener')
        }
      } else {
        window.location.href = href
      }
    })
  })

  if (typeof chrome !== 'undefined' && chrome.runtime?.onMessage) {
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg?.type === 'boost/charged' && typeof msg.cash === 'number') {
        const prev = Number(String(els.cash.textContent).replace(/[^\d]/g, '')) || 0
        animateCash(prev, msg.cash)
      }
    })
  }
}

async function load() {
  if (!getJwt()) {
    goLoginExpired()
    return
  }
  setLoading(true)
  setStatus('')
  try {
    const [profile, me] = await Promise.all([
      apiGet('/spark/profile'),
      apiGet('/users/me'),
    ])
    renderProfile(profile)
    renderPayments(me)
  } catch (e) {
    if (e?.message === 'unauthorized' || e?.message === 'no jwt') return
    setStatus(e?.message || '프로필을 불러오지 못했습니다.', 'error')
  } finally {
    setLoading(false)
  }
}

bindUi()
load()
