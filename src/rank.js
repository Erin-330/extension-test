const html = document.documentElement
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
html.dataset.theme = saved ?? (prefersDark ? 'dark' : 'light')

const USERS = [
  { id: 'me',     nick: 'erin',     rank: 12, grade: 'gold',     cur: 5,  longest: 9,  reward: 220, isMe: true },
  { id: 'u1',     nick: 'Faker',    rank: 1,  grade: 'diamond',  cur: 21, longest: 21, reward: 980 },
  { id: 'u2',     nick: 'Chovy',    rank: 2,  grade: 'diamond',  cur: 18, longest: 19, reward: 820 },
  { id: 'u3',     nick: 'Zeus',     rank: 3,  grade: 'platinum', cur: 16, longest: 17, reward: 660 },
  { id: 'u4',     nick: 'Keria',    rank: 4,  grade: 'platinum', cur: 14, longest: 15, reward: 540 },
  { id: 'u5',     nick: 'Canyon',   rank: 5,  grade: 'platinum', cur: 13, longest: 14, reward: 480 },
  { id: 'u6',     nick: 'Gumayusi', rank: 6,  grade: 'gold',     cur: 11, longest: 13, reward: 360 },
  { id: 'u7',     nick: 'Peyz',     rank: 7,  grade: 'gold',     cur: 9,  longest: 11, reward: 300 },
  { id: 'u8',     nick: 'Bdd',      rank: 8,  grade: 'gold',     cur: 8,  longest: 10, reward: 280 },
  { id: 'u9',     nick: 'Oner',     rank: 9,  grade: 'gold',     cur: 7,  longest: 9,  reward: 240 },
  { id: 'u10',    nick: 'Deft',     rank: 10, grade: 'gold',     cur: 6,  longest: 8,  reward: 220 },
  { id: 'u11',    nick: 'Doran',    rank: 11, grade: 'gold',     cur: 6,  longest: 7,  reward: 220 },
  { id: 'u13',    nick: 'Kiin',     rank: 13, grade: 'silver',   cur: 4,  longest: 7,  reward: 140 },
  { id: 'u14',    nick: 'Pyosik',   rank: 14, grade: 'silver',   cur: 4,  longest: 6,  reward: 140 },
  { id: 'u15',    nick: 'Showmaker',rank: 15, grade: 'silver',   cur: 3,  longest: 6,  reward: 120 },
  { id: 'u16',    nick: 'Aiming',   rank: 16, grade: 'silver',   cur: 3,  longest: 5,  reward: 120 },
  { id: 'u17',    nick: 'Lehends',  rank: 17, grade: 'bronze',   cur: 2,  longest: 4,  reward: 60 },
  { id: 'u18',    nick: 'Beryl',    rank: 18, grade: 'bronze',   cur: 1,  longest: 3,  reward: 60 },
  { id: 'u19',    nick: 'Teddy',    rank: 19, grade: 'participant', cur: 0, longest: 2, reward: 20 },
  { id: 'u20',    nick: 'Cuzz',     rank: 20, grade: 'participant', cur: 0, longest: 1, reward: 20 },
]

const GRADES = [
  { key: 'diamond',     label: 'Diamond',     reward: 800 },
  { key: 'platinum',    label: 'Platinum',    reward: 500 },
  { key: 'gold',        label: 'Gold',        reward: 250 },
  { key: 'silver',      label: 'Silver',      reward: 130 },
  { key: 'bronze',      label: 'Bronze',      reward: 60 },
  { key: 'participant', label: 'Participant', reward: 20 },
]

function initial(nick) { return nick.slice(0, 1).toUpperCase() }

function renderTop5() {
  const top5 = USERS.slice().sort((a, b) => a.rank - b.rank).slice(0, 5)
  const denom = top5[0]?.longest || 1
  const card = document.getElementById('top5Card')
  card.innerHTML = top5.map(u => {
    const h = Math.max(8, (u.longest / denom) * 220)
    return `
      <div class="top5-bar" title="${u.nick}">
        <span class="streak">W${u.cur}</span>
        <div class="bar" style="height:${h}px"></div>
        <span class="nick">${u.nick}</span>
      </div>
    `
  }).join('')
}

function rowHTML(u, isMy = false) {
  const cls = isMy ? 'my-rank' : 'row'
  return `
    <div class="${cls}" data-id="${u.id}">
      <span class="rank-num">${u.rank}</span>
      <div class="avatar">${initial(u.nick)}</div>
      <div class="row-info">
        <span class="nick">${u.nick}${isMy ? ' (나)' : ''}</span>
        <span class="grade ${u.grade}">${u.grade}</span>
      </div>
      <div class="row-stats">
        <span class="cur">W${u.cur}</span>
        <span class="meta">최장 ${u.longest}</span>
        <span class="reward">+${u.reward} E</span>
      </div>
    </div>
  `
}

function renderMyRank() {
  const me = USERS.find(u => u.isMe)
  document.getElementById('myRank').innerHTML = rowHTML(me, true)
}

function renderGradeSections() {
  const others = USERS.filter(u => !u.isMe && u.rank >= 6).sort((a, b) => a.rank - b.rank)
  const container = document.getElementById('gradeSections')
  container.innerHTML = GRADES.map(g => {
    const users = others.filter(u => u.grade === g.key)
    if (users.length === 0) return ''
    const rows = users.map(u => rowHTML(u)).join('')
    return `
      <div class="grade-section">
        <div class="grade-header">
          <span class="label">${g.label}</span>
          <span class="reward">+${g.reward} E</span>
        </div>
        ${rows}
      </div>
    `
  }).join('')
}

function openDetail(id) {
  const u = USERS.find(x => x.id === id)
  if (!u) return
  const sheet = document.getElementById('detailSheet')
  sheet.innerHTML = `
    <div class="avatar-lg">${initial(u.nick)}</div>
    <div class="nick-lg">${u.nick}</div>
    <span class="grade ${u.grade}">${u.grade}</span>
    <div class="stats-grid">
      <div class="stat"><span class="v">W${u.cur}</span><span class="l">현재</span></div>
      <div class="stat"><span class="v">${u.longest}</span><span class="l">최장</span></div>
      <div class="stat"><span class="v">+${u.reward}</span><span class="l">예상 E</span></div>
    </div>
    <button class="close-modal" id="closeDetailBtn">닫기</button>
  `
  document.getElementById('detailScrim').classList.add('open')
  document.getElementById('closeDetailBtn').addEventListener('click', closeDetail)
}

function closeDetail() {
  document.getElementById('detailScrim').classList.remove('open')
}

function bindRowClicks() {
  document.querySelectorAll('[data-id]').forEach(el => {
    el.addEventListener('click', () => openDetail(el.dataset.id))
  })
}

function renderAll() {
  renderTop5()
  renderMyRank()
  renderGradeSections()
  bindRowClicks()
}

document.getElementById('monthSelect').addEventListener('change', renderAll)
document.getElementById('detailScrim').addEventListener('click', e => {
  if (e.target.id === 'detailScrim') closeDetail()
})

const infoScrim = document.getElementById('infoScrim')
document.getElementById('infoBtn').addEventListener('click', () => infoScrim.classList.add('open'))
document.getElementById('closeInfoBtn').addEventListener('click', () => infoScrim.classList.remove('open'))
infoScrim.addEventListener('click', e => {
  if (e.target.id === 'infoScrim') infoScrim.classList.remove('open')
})

renderAll()
