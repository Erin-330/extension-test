'use strict'

const API_BASE = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com:5012'
const JWT_KEY = 'pie-u-wt'
const CHARGE_URL = 'https://rorr.club/charge'

const GRADE_BORDER_CLASS = {
  1: 'grade-top5',
  2: 'grade-diamond',
  3: 'grade-platinum',
  4: 'grade-gold',
  5: 'grade-silver',
  6: 'grade-bronze',
}

function getGradeClass(gradeId) {
  return GRADE_BORDER_CLASS[gradeId] ?? 'grade-participant'
}

function formatKRNumber(n) {
  return Number(n ?? 0).toLocaleString('ko-KR')
}

function getJwt() {
  return localStorage.getItem(JWT_KEY)
}

function redirectToLogin() {
  window.location.href = 'login.html?expired=1'
}

function setLoading(visible) {
  const overlay = document.getElementById('loading-overlay')
  if (visible) {
    overlay.removeAttribute('aria-hidden')
    overlay.classList.remove('hidden')
  } else {
    overlay.setAttribute('aria-hidden', 'true')
    overlay.classList.add('hidden')
  }
}

async function fetchProfile(jwt) {
  const res = await fetch(`${API_BASE}/spark/profile`, {
    headers: { Authorization: `Bearer ${jwt}` },
  })
  if (res.status === 401) throw new Error('401')
  if (!res.ok) throw new Error(`서버 오류 (${res.status})`)
  const json = await res.json()
  return json.data ?? json
}

async function fetchMe(jwt) {
  try {
    const res = await fetch(`${API_BASE}/users/me`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    if (!res.ok) return null
    const json = await res.json()
    return json.data ?? json
  } catch {
    return null
  }
}

function applyProfile(profile, me) {
  // 아바타
  const avatarWrapper = document.getElementById('avatar-wrapper')
  const avatarImg = document.getElementById('avatar-img')
  const avatarFallback = document.getElementById('avatar-fallback')
  const gradeClass = getGradeClass(profile.gradeId)
  avatarWrapper.className = `avatar-wrapper ${gradeClass}`
  if (profile.picture) {
    avatarImg.src = profile.picture
    avatarImg.alt = profile.displayname ?? '프로필'
    avatarImg.classList.remove('hidden')
    avatarFallback.classList.add('hidden')
  }

  // 이메일
  document.getElementById('user-email').textContent = profile.email ?? ''

  // 닉네임 및 토글
  const nicknameEl = document.getElementById('user-nickname')
  const toggleBtn = document.getElementById('nickname-toggle')
  const nickname = profile.displayname ?? ''
  nicknameEl.textContent = nickname
  requestAnimationFrame(() => {
    const isClamped = nicknameEl.scrollHeight > nicknameEl.clientHeight + 2
    if (isClamped) {
      toggleBtn.classList.remove('hidden')
      toggleBtn.addEventListener('click', () => {
        const expanded = nicknameEl.classList.toggle('clamped')
        toggleBtn.textContent = expanded ? '더 보기' : '접기'
      })
    }
  })

  // Spark 포인트
  document.getElementById('spark-value').textContent = formatKRNumber(profile.cash)

  // 등급명
  document.getElementById('grade-name').textContent = profile.gradeName ?? ''

  // 에너지 잔액
  const energyEl = document.getElementById('energy-value')
  energyEl.textContent = formatKRNumber(profile.exp)

  // 메일 뱃지
  const badge = document.getElementById('mail-badge')
  const msgCnt = Number(profile.msgCnt ?? 0)
  if (msgCnt > 0) {
    badge.textContent = msgCnt > 99 ? '99+' : msgCnt
    badge.classList.remove('hidden')
  }

  // 충전 버튼 활성화 여부
  const chargeBtn = document.getElementById('btn-charge')
  const hasPayments = Array.isArray(me?.payments) ? me.payments.length > 0 : true
  if (!hasPayments) {
    chargeBtn.disabled = true
    chargeBtn.classList.add('disabled')
  }
}

function animateEnergyUpdate(newValue) {
  const el = document.getElementById('energy-value')
  el.classList.add('energy-animate')
  el.textContent = formatKRNumber(newValue)
  el.addEventListener('animationend', () => el.classList.remove('energy-animate'), { once: true })
}

async function init() {
  const jwt = getJwt()
  if (!jwt) {
    redirectToLogin()
    return
  }

  setLoading(true)
  try {
    const [profile, me] = await Promise.all([fetchProfile(jwt), fetchMe(jwt)])
    applyProfile(profile, me)
  } catch (err) {
    if (err.message === '401') {
      redirectToLogin()
      return
    }
  } finally {
    setLoading(false)
  }

  // 닫기 버튼
  document.getElementById('btn-close').addEventListener('click', () => {
    window.history.back()
  })

  // 메일 버튼
  document.getElementById('btn-mail').addEventListener('click', () => {
    window.location.href = 'mail.html'
  })

  // 충전 버튼
  document.getElementById('btn-charge').addEventListener('click', () => {
    if (typeof chrome !== 'undefined' && chrome.tabs) {
      chrome.tabs.create({ url: CHARGE_URL })
    } else {
      window.open(CHARGE_URL, '_blank')
    }
  })

  // 메뉴 클릭
  document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', () => {
      const type = item.dataset.type
      const href = item.dataset.href
      if (type === 'external') {
        if (typeof chrome !== 'undefined' && chrome.tabs) {
          chrome.tabs.create({ url: href })
        } else {
          window.open(href, '_blank')
        }
      } else {
        window.location.href = href
      }
    })
  })

  // background로부터 충전 완료 수신
  if (typeof chrome !== 'undefined' && chrome.runtime?.onMessage) {
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg.type === 'boost/charged' && msg.cash !== undefined) {
        animateEnergyUpdate(msg.cash)
      }
    })
  }
}

init()
