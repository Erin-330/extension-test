import { useEffect, useState } from 'react'
import { AppHeader } from '../../components/AppHeader'
import { LeagueSelectButton } from '../../components/LeagueSelectButton'
import { MOCK_LEAGUES } from './mockLeagues'
import type { LeagueForLoLDto } from './types'

const STORAGE_KEY = 'LoL_leagueS'
const DEFAULT_LEAGUE_ID = 'LoL_OF_98767991310872058'

export interface LeagueFilterPageProps {
  onClose: () => void
  leagues?: LeagueForLoLDto[]
  isLoading?: boolean
}

export function LeagueFilterPage({
  onClose,
  leagues = MOCK_LEAGUES,
  isLoading = false,
}: LeagueFilterPageProps) {
  const [selectedLeagueId, setSelectedLeagueId] = useState<string>(() => {
    if (typeof window === 'undefined') return DEFAULT_LEAGUE_ID
    return window.localStorage.getItem(STORAGE_KEY) ?? DEFAULT_LEAGUE_ID
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && stored !== selectedLeagueId) {
      setSelectedLeagueId(stored)
    }
  }, [])

  const handleSelect = (leagueId: string) => {
    setSelectedLeagueId(leagueId)
  }

  const handleDone = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, selectedLeagueId)
    }
    onClose()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader title="리그 선택" onClose={onClose} />

      <main className="flex-1 overflow-y-auto pb-24">
        {isLoading ? (
          <div className="h-64 flex items-center justify-center text-sm text-gray-500">
            로딩 중…
          </div>
        ) : leagues.length === 0 ? (
          <div className="h-64 flex items-center justify-center text-sm text-gray-500">
            표시할 리그가 없습니다.
          </div>
        ) : (
          <ul className="flex flex-col gap-3 p-4">
            {leagues.map((league) => (
              <li key={league.league_id}>
                <LeagueSelectButton
                  leagueName={league.name}
                  annotation={league.slug}
                  leagueImgUrl={league.image_url}
                  isActive={selectedLeagueId === league.league_id}
                  isBoostAvailable={league.boostYN === 'Y'}
                  onClick={() => handleSelect(league.league_id)}
                />
              </li>
            ))}
          </ul>
        )}
      </main>

      <div className="fixed bottom-0 inset-x-0 p-4 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent">
        <button
          type="button"
          onClick={handleDone}
          className="w-full h-12 rounded-xl bg-blue-600 text-white text-base font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          완료
        </button>
      </div>
    </div>
  )
}
