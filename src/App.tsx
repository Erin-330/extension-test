import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PAGES, type Page } from './shared/constants/pages'
import { MainPage } from './pages/main'
import { LeagueListPage } from './pages/follow/league-list'
import { TeamListPage } from './pages/follow/team-list'
import { PlayerListPage } from './pages/follow/player-list'
import { PurchaseListPage } from './pages/purchase/list'

const queryClient = new QueryClient()

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>(PAGES.MAIN)
  const handleNavigate = (page: string) => setCurrentPage(page as Page)

  if (currentPage === PAGES.FOLLOW_LEAGUE) {
    return <LeagueListPage onNavigate={handleNavigate} />
  }

  if (currentPage === PAGES.FOLLOW_TEAM) {
    return <TeamListPage onNavigate={handleNavigate} />
  }

  if (currentPage === PAGES.FOLLOW_PLAYER) {
    return <PlayerListPage onNavigate={handleNavigate} />
  }

  if (currentPage === PAGES.PURCHASE_LIST) {
    return <PurchaseListPage onNavigate={handleNavigate} />
  }

  return <MainPage onNavigate={handleNavigate} />
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}
