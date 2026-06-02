const API_BASE = 'http://mcp-agents-staging-alb-249976027.us-east-1.elb.amazonaws.com:5012'
const JWT_KEY = 'pie-u-wt'

const loadingEl = document.getElementById('loading')
const profileEl = document.getElementById('profile')
const errorEl = document.getElementById('error-state')
const errorTextEl = document.getElementById('error-text')

const avatarRingEl = document.getElementById('avatar-ring')
const avatarEl = document.getElementById('avatar')
const emailEl = document.getElementById('email')
const displaynameEl = document.getElementById('displayname')
const expEl = document.getElementById('exp')
const cashEl = document.getElementById('cash')
const gradeNameEl = document.getElementById('grade-name')

const retryBtn = document.getElementById('retry-btn')
const logoutBtn = document.getElementById('logout-btn')

const GRADE_RING_BY_ID = {
  1: 'top-5',
  2: 'diamond',
  3: 'platinum',
  4: 'gold',
  5: 'silver',
  6: 'bronze',
}

function gradeRingKey(gradeId) {
  const id = Number(gradeId)
  if (Number.isFinite(id) && GRADE_RING_BY_ID[id]) return GRADE_RING_BY_ID[id]
  return 'participant'
}

function show(view) {
  loadingEl.hidden = view !== 'loading'
  profileEl.hidden = view !== 'profile'
  errorEl.hidden = view !== 'error'
}

function formatNumber(value) {
  const num = Number(value)
  if (!Number.isFinite(num)) return '0'
  return num.toLocaleString('ko-KR')
}

function redirectToLogin() {
  window.location.href = 'login.html?expired=1'
}

function renderProfile(data) {
  const picture = data?.picture
  if (picture) {
    avatarEl.innerHTML = ''
    const img = document.createElement('img')
    img.alt = '프로필 이미지'
    img.referrerPolicy = 'no-referrer'
    img.src = picture
    img.addEventListener('error', () => {
      avatarEl.innerHTML = `
        <svg class="avatar-fallback" viewBox="0 0 24 24" width="48" height="48" aria-hidden="true">
          <path fill="currentColor" d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z"/>
        </svg>`
    })
    avatarEl.appendChild(img)
  }

  avatarRingEl.dataset.grade = gradeRingKey(data?.gradeId)

  const email = data?.email || ''
  emailEl.textContent = email
  emailEl.title = email

  const name = data?.displayname || data?.name || '이름 없음'
  displaynameEl.textContent = name

  expEl.textContent = formatNumber(data?.exp)
  cashEl.textContent = formatNumber(data?.cash)
  gradeNameEl.textContent = data?.gradeName || '—'
}

async function fetchProfile(jwt) {
  const res = await fetch(`${API_BASE}/spark/profile`, {
    headers: { Authorization: `Bearer ${jwt}` },
  })
  if (res.status === 401) {
    const err = new Error('UNAUTHORIZED')
    err.code = 401
    throw err
  }
  if (!res.ok) {
    throw new Error(`서버 오류 (${res.status})`)
  }
  return res.json()
}

function unwrapProfile(payload) {
  if (!payload) return null
  if (payload.data && typeof payload.data === 'object') return payload.data
  return payload
}

async function loadProfile() {
  show('loading')

  const jwt = localStorage.getItem(JWT_KEY)
  if (!jwt) {
    redirectToLogin()
    return
  }

  try {
    const result = await fetchProfile(jwt)
    const profile = unwrapProfile(result)
    if (!profile) {
      throw new Error('프로필 데이터가 비어 있습니다.')
    }
    renderProfile(profile)
    show('profile')
  } catch (e) {
    if (e?.code === 401) {
      localStorage.removeItem(JWT_KEY)
      redirectToLogin()
      return
    }
    errorTextEl.textContent = e?.message || '프로필 정보를 불러오지 못했습니다.'
    show('error')
  }
}

function handleLogout() {
  localStorage.removeItem(JWT_KEY)
  window.location.href = 'login.html'
}

retryBtn.addEventListener('click', loadProfile)
logoutBtn.addEventListener('click', handleLogout)

loadProfile()
