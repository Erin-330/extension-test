import { useState } from 'react'
import { PAGES, type Page } from './shared/constants/pages'
import { MainPage } from './pages/main'
import { LeagueListPage } from './pages/follow/league-list'
import { TeamListPage } from './pages/follow/team-list'
import { PlayerListPage } from './pages/follow/player-list'
import { ProfilePage } from './pages/profile'
import { RankPage } from './pages/rank'
import { PurchaseListPage } from './pages/purchase/list'

export function App() {
  const [page, setPage] = useState<Page>(PAGES.MAIN)

  const handleNavigate = (next: string) => setPage(next as Page)

  switch (page) {
    case PAGES.FOLLOW_LEAGUE:
      return <LeagueListPage onNavigate={handleNavigate} />
    case PAGES.FOLLOW_TEAM:
      return <TeamListPage onNavigate={handleNavigate} />
    case PAGES.FOLLOW_PLAYER:
      return <PlayerListPage onNavigate={handleNavigate} />
    case PAGES.PROFILE:
      return <ProfilePage onNavigate={handleNavigate} />
    case PAGES.RANK:
      return <RankPage onNavigate={handleNavigate} />
    case PAGES.PURCHASE_LIST:
      return <PurchaseListPage onNavigate={handleNavigate} />
    case PAGES.MAIN:
    default:
      return <MainPage onNavigate={handleNavigate} />
  }
}
