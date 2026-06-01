import { getUser, isLoggedIn, signOut, getBackedCounts } from '../shared/session.js'

const TARGET_PAGES = {
  'follow-league': 'follow-league.html',
  'follow-team': 'follow-team.html',
  'follow-player': 'follow-player.html',
}

function ensureRoute() {
  if (location.hash !== '#/me') {
    location.replace('#/me')
  }
}

function guardAuth() {
  if (!isLoggedIn()) {
    window.location.replace('login.html')
    return false
  }
  return true
}

function initials(name) {
  const trimmed = (name ?? '').trim()
  if (!trimmed) return '?'
  const parts = trimmed.split(/\s+/).filter(Boolean)
  if (parts.length === 1) {
    return parts[0].slice(0, 1).toUpperCase()
  }
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

function formatJoined(iso) {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function planLabel(plan) {
  const value = (plan ?? 'free').toLowerCase()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function renderProfile(user) {
  const name = user?.name ?? '이름 없음'
  const email = user?.email ?? '—'

  document.getElementById('profile-name').textContent = name
  document.getElementById('profile-email').textContent = email
  document.getElementById('info-name').textContent = name
  document.getElementById('info-email').textContent = email
  document.getElementById('info-joined').textContent = formatJoined(user?.joinedAt)
  document.getElementById('info-plan').textContent = planLabel(user?.plan)

  const planBadge = document.getElementById('plan-badge')
  planBadge.textContent = `${planLabel(user?.plan)} plan`

  const avatar = document.getElementById('avatar')
  const initialEl = document.getElementById('avatar-initial')
  if (user?.picture) {
    avatar.innerHTML = ''
    const img = document.createElement('img')
    img.src = user.picture
    img.alt = name
    img.referrerPolicy = 'no-referrer'
    img.addEventListener('error', () => {
      avatar.innerHTML = ''
      const span = document.createElement('span')
      span.className = 'avatar-initial'
      span.textContent = initials(name)
      avatar.appendChild(span)
    })
    avatar.appendChild(img)
  } else {
    initialEl.textContent = initials(name)
  }
}

async function renderCounts() {
  const counts = await getBackedCounts()
  document.getElementById('stat-leagues').textContent = String(counts.leagues)
  document.getElementById('stat-teams').textContent = String(counts.teams)
  document.getElementById('stat-players').textContent = String(counts.players)
  document.getElementById('row-leagues').textContent = String(counts.leagues)
  document.getElementById('row-teams').textContent = String(counts.teams)
  document.getElementById('row-players').textContent = String(counts.players)
}

function bindNav() {
  document.getElementById('back-btn').addEventListener('click', () => {
    if (history.length > 1) history.back()
    else window.location.href = 'main.html'
  })
  document.getElementById('close-btn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ type: 'sidePanel/close' }).catch(() => {})
    window.location.href = 'main.html'
  })

  document.querySelectorAll('[data-target]').forEach((el) => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-target')
      const path = TARGET_PAGES[target]
      if (path) window.location.href = path
    })
  })
}

function bindToggles() {
  const pushKey = 'pref-push'
  const emailKey = 'pref-email-digest'
  const $push = document.getElementById('toggle-push')
  const $email = document.getElementById('toggle-email')

  $push.checked = localStorage.getItem(pushKey) === 'true'
  $email.checked = localStorage.getItem(emailKey) === 'true'

  $push.addEventListener('change', () => {
    localStorage.setItem(pushKey, String($push.checked))
  })
  $email.addEventListener('change', () => {
    localStorage.setItem(emailKey, String($email.checked))
  })
}

function bindSignOut() {
  document.getElementById('signout-btn').addEventListener('click', () => {
    signOut()
    window.location.href = 'login.html'
  })
}

ensureRoute()
if (guardAuth()) {
  renderProfile(getUser())
  renderCounts()
  bindNav()
  bindToggles()
  bindSignOut()
}

window.addEventListener('hashchange', () => {
  if (location.hash !== '#/me') {
    window.location.href = 'main.html'
  }
})
