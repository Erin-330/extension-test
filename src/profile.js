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

document.getElementById('backBtn').addEventListener('click', () => {
  window.location.href = 'login.html'
})

document.getElementById('signOutBtn').addEventListener('click', () => {
  window.location.href = 'login.html'
})
