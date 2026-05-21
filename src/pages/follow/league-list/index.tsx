import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageShell } from '../../../features/follow/ui/FollowPageShell'
import { FollowCard } from '../../../features/follow/ui/FollowCard'
import { LEAGUE_LOGOS } from '../../../features/follow/ui/assets'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

type Props = { onNavigate: (page: string) => void }

const MOCK_LEAGUES: FollowTargetItem[] = [
  { target_id: 'lck', name: 'LCK', description: 'League of Legends Champions Korea', logo: LEAGUE_LOGOS.LCK, boost: true },
  { target_id: 'lpl', name: 'LPL', description: 'League of Legends Pro League', logo: LEAGUE_LOGOS.LPL, boost: true },
  { target_id: 'vcs', name: 'VCS', description: 'Vietnam Championship Series', logo: LEAGUE_LOGOS.VCS, boost: true },
  { target_id: 'msi', name: 'MSI', description: 'Mid-Season Invitational', logo: LEAGUE_LOGOS.MSI, boost: true },
  { target_id: 'lec', name: 'LEC', description: 'League of Legends EMEA Championship', logo: LEAGUE_LOGOS.LEC },
  { target_id: 'cblol', name: 'CBLOL', description: 'Circuit Brazilian League of Legends', logo: LEAGUE_LOGOS.CBLOL },
  { target_id: 'lla', name: 'LLA', description: 'League of Legends in Hispanic America', logo: LEAGUE_LOGOS.LLA },
  { target_id: 'pcs', name: 'PCS', description: 'Pacific Championship Series', logo: LEAGUE_LOGOS.LLA },
  { target_id: 'cl', name: 'CL', description: 'LCK Challengers League', logo: LEAGUE_LOGOS.LLA },
  { target_id: 'worlds', name: 'Worlds', description: 'League of Legends World Championship', logo: LEAGUE_LOGOS.LLA, boost: true },
]

export function LeagueListPage({ onNavigate }: Props) {
  const leagues = useFollowSelectionsStore((s) => s.leagues)
  const toggleLeague = useFollowSelectionsStore((s) => s.toggleLeague)

  const ordered = useMemo(() => {
    const selectedIds = leagues.map((l) => l.target_id)
    const selected = selectedIds
      .map((id) => MOCK_LEAGUES.find((i) => i.target_id === id))
      .filter((i): i is FollowTargetItem => i !== undefined)
    const unselected = MOCK_LEAGUES.filter((i) => !selectedIds.includes(i.target_id))
    return [...selected, ...unselected]
  }, [leagues])

  const selectedIds = leagues.map((l) => l.target_id)

  return (
    <FollowPageShell
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      currentStep={0}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
    >
      {ordered.map((item) => {
        const isSelected = selectedIds.includes(item.target_id)
        const order = isSelected ? selectedIds.indexOf(item.target_id) + 1 : undefined
        return (
          <FollowCard
            key={item.target_id}
            item={item}
            selected={isSelected}
            order={order}
            variant="league"
            onToggle={() => toggleLeague(item)}
          />
        )
      })}
    </FollowPageShell>
  )
}
