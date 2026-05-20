import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PAGES, type Page } from './shared/constants/pages'
import { LeagueListPage } from './pages/follow/league-list'

const queryClient = new QueryClient()

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>(PAGES.FOLLOW_LEAGUE)

  if (currentPage === PAGES.FOLLOW_LEAGUE) {
    return <LeagueListPage onNavigate={(page) => setCurrentPage(page as Page)} />
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-[#f0f2f5]">
      <div className="flex flex-col items-center gap-4">
        <p className="font-pretendard text-lg font-semibold text-[#000000]">
          현재 페이지: {currentPage}
        </p>
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
