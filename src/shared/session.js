export const JWT_KEY = 'pie-u-wt'
export const USER_KEY = 'pie-u-info'

export function getJwt() {
  return localStorage.getItem(JWT_KEY)
}

export function isLoggedIn() {
  return Boolean(getJwt())
}

export function getUser() {
  try {
    const raw = localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user ?? {}))
}

export function signOut() {
  localStorage.removeItem(JWT_KEY)
  localStorage.removeItem(USER_KEY)
}

export function redirectToLogin() {
  window.location.href = 'login.html'
}

export function getBackedCounts() {
  return new Promise((resolve) => {
    if (typeof chrome === 'undefined' || !chrome.storage?.local) {
      resolve({ leagues: 0, teams: 0, players: 0 })
      return
    }
    chrome.storage.local.get(['backedLeagues', 'backedTeams', 'backedPlayers'], (result) => {
      const count = (v) => (Array.isArray(v) ? v.length : 0)
      resolve({
        leagues: count(result?.backedLeagues),
        teams: count(result?.backedTeams),
        players: count(result?.backedPlayers),
      })
    })
  })
}
