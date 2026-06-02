const API_BASE = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com:5012'
const JWT_KEY = 'pie-u-wt'
const NICKNAME_LIMIT = 14

const loadingEl = document.getElementById('loading-overlay')
const errorEl = document.getElementById('error-banner')
const contentEl = document.getElementById('profile-content')

const pictureEl = document.getElementById('profile-picture')
const emailEl = document.getElementById('profile-email')
const nicknameEl = document.getElementById('profile-nickname')
const nicknameToggleEl = document.getElementById('nickname-toggle')
const gradeEl = document.getElementById('profile-grade')
const avatarWrapEl = pictureEl.parentElement

const sparkEl = document.getElementById('spark-value')
const energyEl = document.getElementById('energy-value')
const energyChargeBtn = document.getElementById('energy-charge')

const mailBadgeEl = document.getElementById('mail-badge')
const mailCountEl = document.getElementById('mail-count')

const menuButtons = document.querySelectorAll('.menu-item')

let paymentsCache = []

function getJwt() {
  return localStorage.getItem(JWT_KEY)
}

function redirectToLoginExpired() {
  window.location.href = 'login.html?expired=1'
}

function setLoading(isLoading) {
  loadingEl.hidden = !isLoading
}

function showError(message) {
  errorEl.textContent = message
  errorEl.hidden = false
}

function clearError() {
  errorEl.textContent = ''
  errorEl.hidden = true
}

async function fetchJson(path, jwt) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { Authorization: `Bearer ${jwt}` },
  })
  if (res.status === 401 || res.status === 403) {
    const err = new Error('unauthorized')
    err.unauthorized = true
    throw err
  }
  if (!res.ok) {
    throw new Error(`서버 오류 (${res.status})`)
  }
  return res.json()
}

function formatNumber(n) {
  const num = Number(n) || 0
  return num.toLocaleString('ko-KR')
}

function formatMailCount(n) {
  const num = Number(n) || 0
  if (num <= 0) return null
  return num > 99 ? '99+' : String(num)
}

function applyNickname(displayname) {
  const name = displayname || ''
  nicknameEl.textContent = name
  if (name.length > NICKNAME_LIMIT) {
    nicknameEl.dataset.collapsed = 'true'
    nicknameToggleEl.hidden = false
    nicknameToggleEl.textContent = '더 보기'
  } else {
    delete nicknameEl.dataset.collapsed
    nicknameToggleEl.hidden = true
  }
}

nicknameToggleEl.addEventListener('click', () => {
  const collapsed = nicknameEl.dataset.collapsed === 'true'
  if (collapsed) {
    delete nicknameEl.dataset.collapsed
    nicknameToggleEl.textContent = '접기'
  } else {
    nicknameEl.dataset.collapsed = 'true'
    nicknameToggleEl.textContent = '더 보기'
  }
})

function renderProfile(profile) {
  const picture = profile.picture || ''
  if (picture) {
    pictureEl.src = picture
    pictureEl.alt = profile.displayname ? `${profile.displayname} 프로필 이미지` : '프로필 이미지'
  } else {
    pictureEl.removeAttribute('src')
    pictureEl.alt = ''
  }

  emailEl.textContent = profile.email || ''
  emailEl.title = profile.email || ''

  applyNickname(profile.displayname)

  gradeEl.textContent = profile.gradeName || ''
  if (profile.gradeId != null) {
    avatarWrapEl.dataset.gradeId = String(profile.gradeId)
  }

  sparkEl.textContent = formatNumber(profile.exp)
  energyEl.textContent = formatNumber(profile.cash)

  const mailText = formatMailCount(profile.msgCnt)
  if (mailText) {
    mailCountEl.textContent = mailText
    mailBadgeEl.hidden = false
  } else {
    mailBadgeEl.hidden = true
  }
}

function setEnergyChargeAvailability(payments) {
  paymentsCache = Array.isArray(payments) ? payments : []
  energyChargeBtn.disabled = paymentsCache.length === 0
}

energyChargeBtn.addEventListener('click', () => {
  if (energyChargeBtn.disabled) return
  const payment = paymentsCache[0]
  const url = payment?.chargeUrl || payment?.url || 'https://rorr.club/charge'
  if (chrome?.tabs?.create) {
    chrome.tabs.create({ url })
  } else {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
})

menuButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action
    const target = btn.dataset.target
    if (!target) return
    if (action === 'external') {
      if (chrome?.tabs?.create) {
        chrome.tabs.create({ url: target })
      } else {
        window.open(target, '_blank', 'noopener,noreferrer')
      }
    } else {
      window.location.href = target
    }
  })
})

async function init() {
  const jwt = getJwt()
  if (!jwt) {
    redirectToLoginExpired()
    return
  }

  setLoading(true)
  clearError()

  try {
    const [profileRes, meRes] = await Promise.all([
      fetchJson('/spark/profile', jwt),
      fetchJson('/users/me', jwt).catch((e) => {
        if (e.unauthorized) throw e
        return null
      }),
    ])

    const profile = profileRes?.data || profileRes || {}
    renderProfile(profile)

    const me = meRes?.data || meRes || {}
    setEnergyChargeAvailability(me?.payments)

    contentEl.hidden = false
  } catch (e) {
    if (e.unauthorized) {
      redirectToLoginExpired()
      return
    }
    showError(e?.message || '프로필을 불러오지 못했습니다.')
  } finally {
    setLoading(false)
  }
}

init()
