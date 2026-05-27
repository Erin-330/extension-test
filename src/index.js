const html = document.documentElement
const toggleBtn = document.getElementById('themeToggle')
const themeIcon = document.getElementById('themeIcon')

const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const initial = saved ?? (prefersDark ? 'dark' : 'light')

function applyTheme(theme) {
  html.dataset.theme = theme
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️'
  localStorage.setItem('theme', theme)
}

applyTheme(initial)

toggleBtn.addEventListener('click', () => {
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark'
  applyTheme(next)
})

const accountBtn = document.getElementById('accountBtn')
const panel = document.getElementById('profilePanel')
const overlay = document.getElementById('profileOverlay')

function setPanelOpen(open) {
  panel.classList.toggle('open', open)
  overlay.classList.toggle('open', open)
  accountBtn.setAttribute('aria-expanded', String(open))
  overlay.setAttribute('aria-hidden', String(!open))
}

accountBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  setPanelOpen(!panel.classList.contains('open'))
})

overlay.addEventListener('click', () => setPanelOpen(false))

document.addEventListener('click', (e) => {
  if (!panel.classList.contains('open')) return
  if (panel.contains(e.target) || accountBtn.contains(e.target)) return
  setPanelOpen(false)
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && panel.classList.contains('open')) {
    setPanelOpen(false)
    accountBtn.focus()
  }
})

document.getElementById('signOutBtn').addEventListener('click', () => {
  setPanelOpen(false)
  window.location.href = 'login.html'
})
