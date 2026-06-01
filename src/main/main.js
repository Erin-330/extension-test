import { renderHome } from './views/home.js'
import { renderMe } from './views/me.js'
import { renderFollowList } from './views/follow.js'
import { getCurrentUser, isLoggedIn } from './lib/session.js'
import { buildAvatar } from './lib/avatar.js'

const ROUTES = {
  '#/': renderHome,
  '': renderHome,
  '#/me': renderMe,
  '#/follow-league': (el) => renderFollowList(el, 'league'),
  '#/follow-team': (el) => renderFollowList(el, 'team'),
  '#/follow-player': (el) => renderFollowList(el, 'player'),
}

const PROTECTED_ROUTES = new Set(['#/me', '#/follow-league', '#/follow-team', '#/follow-player'])

const $app = document.getElementById('app')

function resolveRoute() {
  const raw = location.hash || '#/'
  const matchKey = Object.keys(ROUTES).find((k) => k === raw)
  return matchKey ?? '#/'
}

async function route() {
  const hash = resolveRoute()

  if (PROTECTED_ROUTES.has(hash) && !(await isLoggedIn())) {
    location.href = './login.html'
    return
  }

  const user = await getCurrentUser()
  $app.innerHTML = ''
  $app.appendChild(renderHeader({ hash, user }))

  const pageContainer = document.createElement('section')
  pageContainer.className = 'page'
  $app.appendChild(pageContainer)

  const renderer = ROUTES[hash] || renderHome
  await renderer(pageContainer, { user })
}

function renderHeader({ hash, user }) {
  const header = document.createElement('header')
  header.className = 'app-header'

  const left = document.createElement('div')
  left.className = 'left'

  if (hash !== '#/' && hash !== '') {
    const back = document.createElement('button')
    back.type = 'button'
    back.className = 'icon-btn'
    back.setAttribute('aria-label', '뒤로')
    back.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>'
    back.addEventListener('click', () => {
      if (history.length > 1) history.back()
      else location.hash = '#/'
    })
    left.appendChild(back)

    const close = document.createElement('button')
    close.type = 'button'
    close.className = 'icon-btn'
    close.setAttribute('aria-label', '닫기')
    close.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
    close.addEventListener('click', () => {
      location.hash = '#/'
    })
    left.appendChild(close)
  }

  const brand = document.createElement('div')
  brand.className = 'brand-row'
  brand.innerHTML = `
    <img class="logo-emblem" alt="" src="https://erin-bucket-team.s3.amazonaws.com/RORR%20EMBLEM.png"/>
    <span class="logo-text">RORR</span>
  `
  left.appendChild(brand)
  header.appendChild(left)

  const right = document.createElement('div')
  right.className = 'right'

  if (user && hash !== '#/me') {
    const myAccount = document.createElement('button')
    myAccount.type = 'button'
    myAccount.className = 'my-account-btn'
    myAccount.setAttribute('aria-label', 'My Account')
    myAccount.appendChild(buildAvatar(user, 'ma-avatar'))
    const label = document.createElement('span')
    label.textContent = 'My Account'
    myAccount.appendChild(label)
    myAccount.addEventListener('click', () => {
      location.hash = '#/me'
    })
    right.appendChild(myAccount)
  }

  header.appendChild(right)
  return header
}

window.addEventListener('hashchange', route)
window.addEventListener('storage', route)
route()
