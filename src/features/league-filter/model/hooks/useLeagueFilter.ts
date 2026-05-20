import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getLeaguesForLoL } from '../../api/leagueApi'
import { PAGES } from '../../../../shared/constants/pages'

const DEFAULT_LEAGUE_ID = 'LoL_OF_98767991310872058'
const STORAGE_KEY = 'LoL_leagueS'

export function useLeagueFilter(onNavigate: (page: string) => void) {
  const [selectedLeagueId, setSelectedLeagueId] = useState<string>(
    () => localStorage.getItem(STORAGE_KEY) ?? DEFAULT_LEAGUE_ID,
  )

  const { data: leagues = [], isPending, isError } = useQuery({
    queryKey: ['leagues', 'lol'],
    queryFn: getLeaguesForLoL,
  })

  const handleSelect = (leagueId: string) => setSelectedLeagueId(leagueId)

  const handleDone = () => {
    localStorage.setItem(STORAGE_KEY, selectedLeagueId)
    onNavigate(PAGES.SCHEDULE)
  }

  const handleClose = () => onNavigate(PAGES.SCHEDULE)

  return { selectedLeagueId, leagues, isPending, isError, handleSelect, handleDone, handleClose }
}
