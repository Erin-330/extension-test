import { getAllCounts } from '../lib/backs.js'

export async function renderHome(root, { user } = {}) {
  const counts = await getAllCounts()
  const greeting = user?.name ? `${user.name}님` : '환영합니다'

  root.innerHTML = `
    <h2 class="page-title">${greeting}</h2>
    <p class="page-sub">스포츠를 더 즐겁게, 함께.</p>

    <div class="home-card">
      <h3 style="margin:0 0 8px;font-size:var(--font-size-description-16);">내 응원 현황</h3>
      <p style="margin:0;color:var(--color-text-50);font-size:var(--font-size-description);">
        Backed Leagues ${counts.league} · Teams ${counts.team} · Players ${counts.player}
      </p>
    </div>

    ${
      user
        ? ''
        : `<div class="home-card">
            <p style="margin:0;color:var(--color-text-50);font-size:var(--font-size-description);">
              로그인하면 더 많은 기능을 이용할 수 있습니다.
            </p>
          </div>`
    }
  `
}
