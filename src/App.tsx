import { useState } from 'react'
import { LeagueListPage } from './pages/follow/league-list'
import { PlayerListPage } from './pages/follow/player-list'
import { TeamListPage } from './pages/follow/team-list'
import { MainPage } from './pages/main'
import { ProfilePage } from './pages/profile'
import { PurchaseListPage } from './pages/purchase/list'
import { RankPage } from './pages/rank'
import { PAGES } from './shared/constants/pages'
import type { Page } from './shared/constants/pages'

export function App() {
  const [page, setPage] = useState<Page>(PAGES.MAIN)
  const onNavigate = (next: string) => setPage(next as Page)

  switch (page) {
    case PAGES.FOLLOW_LEAGUE:
      return <LeagueListPage onNavigate={onNavigate} />
    case PAGES.FOLLOW_TEAM:
      return <TeamListPage onNavigate={onNavigate} />
    case PAGES.FOLLOW_PLAYER:
      return <PlayerListPage onNavigate={onNavigate} />
    case PAGES.PROFILE:
      return <ProfilePage onNavigate={onNavigate} />
    case PAGES.RANK:
      return <RankPage onNavigate={onNavigate} />
    case PAGES.PURCHASE_LIST:
      return <PurchaseListPage onNavigate={onNavigate} />
    case PAGES.MAIN:
    default:
      return <MainPage onNavigate={onNavigate} />
  }
}
