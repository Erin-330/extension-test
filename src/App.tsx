import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PAGES, type Page } from './shared/constants/pages'
import { LeagueListPage } from './pages/follow/league-list'
import { TeamListPage } from './pages/follow/team-list'
import { PlayerListPage } from './pages/follow/player-list'

const queryClient = new QueryClient()

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>(PAGES.FOLLOW_LEAGUE)
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

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#f0f2f5]">
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg font-semibold text-[#000000]">현재 페이지: {currentPage}</p>
        <button
          type="button"
          onClick={() => setCurrentPage(PAGES.FOLLOW_LEAGUE)}
          className="rounded-[30px] bg-[#969cda] px-6 py-3 text-sm font-semibold text-white"
        >
          팔로우 리그로 이동
        </button>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}
