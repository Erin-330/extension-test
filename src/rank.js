const html = document.documentElement
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
html.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light')

const ME_ID = 'me'

const TOP5 = [
  { rank: 1, name: 'Faker', current: 'W12', long: 12 },
  { rank: 2, name: 'Chovy', current: 'W10', long: 10 },
  { rank: 3, name: 'Ruler', current: 'W9', long: 9 },
  { rank: 4, name: 'Zeus', current: 'W7', long: 7 },
  { rank: 5, name: 'Oner', current: 'W6', long: 6 },
]

const GRADES = [
  {
    key: 'diamond',
    name: 'Diamond',
    reward: 200,
    users: [
      { id: 'u6', rank: 6, name: 'Canyon', current: 5, long: 8 },
      { id: 'u7', rank: 7, name: 'Keria', current: 5, long: 7 },
    ],
  },
  {
    key: 'platinum',
    name: 'Platinum',
    reward: 120,
    users: [
      { id: 'u8', rank: 8, name: 'Gumayusi', current: 4, long: 6 },
      { id: ME_ID, rank: 9, name: 'erin', current: 4, long: 5 },
      { id: 'u10', rank: 10, name: 'Showmaker', current: 3, long: 5 },
    ],
  },
  {
    key: 'gold',
    name: 'Gold',
    reward: 60,
    users: [
      { id: 'u11', rank: 11, name: 'Deft', current: 2, long: 4 },
      { id: 'u12', rank: 12, name: 'BeryL', current: 2, long: 3 },
    ],
  },
]

function findMe() {
  for (const g of GRADES) {
    const me = g.users.find((u) => u.id === ME_ID)
    if (me) return { ...me, grade: g.name, gradeKey: g.key, reward: g.reward }
  }
  return null
}

function gradeClassFor(key) {
  return `g-${key}`
}

function renderTop5() {
  const el = document.getElementById('barGraph')
  const maxLong = Math.max(...TOP5.map((u) => u.long), 1)
  el.innerHTML = TOP5.map((u) => {
    const heightPct = Math.max((u.long / maxLong) * 100, 4)
    return `
      <div class="bar-col">
        <div class="bar-fill" style="height: ${heightPct}%;">
          <div class="bar-streak">${u.current}</div>
        </div>
        <div class="bar-name">${u.rank}. ${u.name}</div>
      </div>
    `
  }).join('')
}

function rankRowHTML(user, gradeKey, gradeName, reward, isMe) {
  const initial = user.name.charAt(0).toUpperCase()
  return `
    <div class="rank-row${isMe ? ' me' : ''}" data-id="${user.id}" data-grade="${gradeKey}" data-reward="${reward}">
      <div class="rank-num">${user.rank}</div>
      <div class="avatar">${initial}</div>
      <div class="nick-block">
        <div class="nick">${user.name}</div>
        <div class="grade-badge ${gradeClassFor(gradeKey)}">${gradeName}</div>
      </div>
      <div class="streak-block">
        <div class="streak-current">W${user.current}</div>
        <div class="streak-sub">최장 ${user.long} · +${reward}E</div>
      </div>
    </div>
  `
}

function renderMyRank() {
  const me = findMe()
  const el = document.getElementById('myRank')
  if (!me) {
    el.innerHTML = '<div class="rank-row"><div class="rank-num">-</div><div class="nick">랭킹 정보 없음</div></div>'
    return
  }
  el.innerHTML = rankRowHTML(me, me.gradeKey, me.grade, me.reward, true)
}

function renderGrades() {
  const el = document.getElementById('gradeSections')
  el.innerHTML = GRADES.map((g) => `
    <section class="grade-section">
      <div class="grade-header">
        <span class="name">${g.name}</span>
        <span class="reward">+${g.reward}E</span>
      </div>
      ${g.users.map((u) => rankRowHTML(u, g.key, g.name, g.reward, u.id === ME_ID)).join('')}
    </section>
  `).join('')
}

const modal = document.getElementById('modal')
const mAvatar = document.getElementById('mAvatar')
const mName = document.getElementById('mName')
const mGrade = document.getElementById('mGrade')
const mCurrent = document.getElementById('mCurrent')
const mLong = document.getElementById('mLong')
const mReward = document.getElementById('mReward')

function findUser(id) {
  for (const g of GRADES) {
    const u = g.users.find((x) => x.id === id)
    if (u) return { ...u, grade: g.name, gradeKey: g.key, reward: g.reward }
  }
  return null
}

function openModal(id) {
  const u = findUser(id)
  if (!u) return
  mAvatar.textContent = u.name.charAt(0).toUpperCase()
  mName.textContent = u.name
  mGrade.textContent = u.grade
  mGrade.className = `grade-badge ${gradeClassFor(u.gradeKey)}`
  mCurrent.textContent = `W${u.current}`
  mLong.textContent = u.long
  mReward.textContent = `${u.reward}E`
  modal.classList.add('open')
}

document.addEventListener('click', (e) => {
  const row = e.target.closest('.rank-row')
  if (row && !row.closest('#myRank')) {
    openModal(row.dataset.id)
  }
})

document.getElementById('modalClose').addEventListener('click', () => {
  modal.classList.remove('open')
})
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open')
})

const infoModal = document.getElementById('infoModal')
document.getElementById('infoBtn').addEventListener('click', () => {
  infoModal.classList.add('open')
})
document.getElementById('infoClose').addEventListener('click', () => {
  infoModal.classList.remove('open')
})
infoModal.addEventListener('click', (e) => {
  if (e.target === infoModal) infoModal.classList.remove('open')
})

document.getElementById('monthSelect').addEventListener('change', () => {
  renderTop5()
  renderMyRank()
  renderGrades()
})

renderTop5()
renderMyRank()
renderGrades()
