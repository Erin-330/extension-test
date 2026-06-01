import { getList } from '../lib/backs.js'

const TITLES = {
  league: '리그 선택',
  team: '팀 선택',
  player: '선수 선택',
}

const EMPTY = {
  league: '아직 응원하는 리그가 없습니다.',
  team: '아직 응원하는 팀이 없습니다.',
  player: '아직 응원하는 선수가 없습니다.',
}

export async function renderFollowList(root, kind) {
  const items = await getList(kind)

  root.innerHTML = `
    <h2 class="page-title">${TITLES[kind]}</h2>
    <p class="page-sub">응원 항목을 추가하거나 확인할 수 있습니다.</p>
    <div class="home-card" style="margin-top:16px;">
      ${
        items.length === 0
          ? `<p style="margin:0;color:var(--color-text-50);font-size:var(--font-size-description);">${EMPTY[kind]}</p>`
          : items
              .map(
                (item) =>
                  `<div style="padding:8px 0;border-top:1px solid var(--color-border);">${
                    item?.name ?? item?.id ?? '항목'
                  }</div>`,
              )
              .join('')
      }
    </div>
  `
}
