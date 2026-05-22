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
  const onNavigate = (p: string) => setPage(p as Page)

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
