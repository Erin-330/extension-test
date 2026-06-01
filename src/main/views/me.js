import { buildAvatar } from '../lib/avatar.js'
import { getAllCounts, getNotifications, setNotifications } from '../lib/backs.js'
import { signOut } from '../lib/session.js'

function formatJoinedAt(value) {
  if (!value) return '—'
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
}

function row({ label, value }) {
  return `
    <div class="row">
      <span class="row-label">${label}</span>
      <span class="row-value">${value}</span>
    </div>
  `
}

const chev = `<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>`

function clickRow({ title, desc, hash }) {
  return `
    <div class="row clickable" data-nav="${hash}" role="button" tabindex="0">
      <div class="row-main">
        <span class="row-title">${title}</span>
        <span class="row-desc">${desc}</span>
      </div>
      ${chev}
    </div>
  `
}

function toggleRow({ title, desc, id, checked }) {
  return `
    <div class="row">
      <div class="row-main">
        <span class="row-title">${title}</span>
        <span class="row-desc">${desc}</span>
      </div>
      <label class="switch">
        <input type="checkbox" id="${id}" ${checked ? 'checked' : ''} />
        <span class="track"></span>
        <span class="knob"></span>
      </label>
    </div>
  `
}

export async function renderMe(root, { user }) {
  const [counts, notifications] = await Promise.all([getAllCounts(), getNotifications()])
  const u = user || {}

  root.classList.add('me-page')
  root.innerHTML = `
    <section class="profile-block" id="profile-block"></section>

    <div class="stat-tiles">
      <div class="stat-tile" data-nav="#/follow-league" role="button" tabindex="0">
        <span class="num">${counts.league}</span>
        <span class="label">Backed Leagues</span>
      </div>
      <div class="stat-tile" data-nav="#/follow-team" role="button" tabindex="0">
        <span class="num">${counts.team}</span>
        <span class="label">Backed Teams</span>
      </div>
      <div class="stat-tile" data-nav="#/follow-player" role="button" tabindex="0">
        <span class="num">${counts.player}</span>
        <span class="label">Backed Players</span>
      </div>
    </div>

    <section class="section">
      <h3 class="section-title">Account</h3>
      ${row({ label: 'Name', value: u.name || '—' })}
      ${row({ label: 'Email', value: u.email || '—' })}
      ${row({ label: 'Joined', value: formatJoinedAt(u.joinedAt) })}
      ${row({ label: 'Plan', value: u.plan || 'Free' })}
    </section>

    <section class="section">
      <h3 class="section-title">My Backs</h3>
      ${clickRow({ title: 'Backed Leagues', desc: `${counts.league}개 응원 중`, hash: '#/follow-league' })}
      ${clickRow({ title: 'Backed Teams', desc: `${counts.team}개 응원 중`, hash: '#/follow-team' })}
      ${clickRow({ title: 'Backed Players', desc: `${counts.player}명 응원 중`, hash: '#/follow-player' })}
    </section>

    <section class="section">
      <h3 class="section-title">Notifications</h3>
      ${toggleRow({
        title: 'Push 알림',
        desc: '경기 시작·결과·응원 알림을 받습니다.',
        id: 'toggle-push',
        checked: notifications.push,
      })}
      ${toggleRow({
        title: 'Email 다이제스트',
        desc: '주간 응원 요약을 이메일로 받습니다.',
        id: 'toggle-email',
        checked: notifications.emailDigest,
      })}
    </section>

    <button id="signout-btn" class="signout-btn" type="button">Sign out</button>
    <p class="bottom-note">RORR · ${u.email || '게스트'}</p>
  `

  const profile = root.querySelector('#profile-block')
  profile.appendChild(buildAvatar(u, 'avatar'))
  const name = document.createElement('p')
  name.className = 'profile-name'
  name.textContent = u.name || 'RORR User'
  profile.appendChild(name)
  const email = document.createElement('p')
  email.className = 'profile-email'
  email.textContent = u.email || ''
  profile.appendChild(email)
  const badge = document.createElement('span')
  badge.className = 'plan-badge'
  badge.textContent = `${u.plan || 'Free'} plan`
  profile.appendChild(badge)

  root.querySelectorAll('[data-nav]').forEach((el) => {
    const target = el.getAttribute('data-nav')
    const go = () => {
      location.hash = target
    }
    el.addEventListener('click', go)
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        go()
      }
    })
  })

  const $push = root.querySelector('#toggle-push')
  const $email = root.querySelector('#toggle-email')
  const persist = async () => {
    await setNotifications({ push: $push.checked, emailDigest: $email.checked })
  }
  $push.addEventListener('change', persist)
  $email.addEventListener('change', persist)

  root.querySelector('#signout-btn').addEventListener('click', async () => {
    await signOut()
    location.href = './login.html'
  })
}
