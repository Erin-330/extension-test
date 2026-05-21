import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowCard } from '../../../features/follow/ui/FollowCard'
import { LEAGUE_LOGOS } from '../../../features/follow/ui/FollowAssets'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

interface Props {
  onNavigate: (page: string) => void
}

const MOCK_LEAGUES: FollowTargetItem[] = [
  { target_id: 'lck', name: 'LCK', subname: 'League of Legends Champions Korea', imageUrl: LEAGUE_LOGOS.lck, imageInset: 'inset-[15%_0_14.65%_0]', boost: true },
  { target_id: 'lpl', name: 'LPL', subname: 'League of Legends Pro League', imageUrl: LEAGUE_LOGOS.lpl, imageInset: 'inset-[19.65%_0_20.29%_0]', boost: true },
  { target_id: 'vcs', name: 'VCS', subname: 'Vietnam Championship Series', imageUrl: LEAGUE_LOGOS.vcs, boost: true },
  { target_id: 'msi', name: 'MSI', subname: 'Mid-Season Invitational', imageUrl: LEAGUE_LOGOS.msi, boost: true },
  { target_id: 'lec', name: 'LEC', subname: 'League of Legends EMEA Championship', imageUrl: LEAGUE_LOGOS.lec },
  { target_id: 'cblol', name: 'CBLOL', subname: 'Circuit Brazilian League of Legends', imageUrl: LEAGUE_LOGOS.cblol },
  { target_id: 'lla', name: 'LLA', subname: 'League of Legends in Hispanic America', imageUrl: LEAGUE_LOGOS.lla },
  { target_id: 'pcs', name: 'PCS', subname: 'Pacific Championship Series', imageUrl: LEAGUE_LOGOS.lla },
  { target_id: 'cl', name: 'CL', subname: 'Challengers League', imageUrl: LEAGUE_LOGOS.lla },
  { target_id: 'kr', name: 'KR', subname: 'Korea Regional League', imageUrl: LEAGUE_LOGOS.lla, boost: true },
]

export function LeagueListPage({ onNavigate }: Props) {
  const { leagues, toggleLeague } = useFollowSelectionsStore()

  const ordered = useMemo(() => {
    const selected = leagues
      .map((s) => MOCK_LEAGUES.find((i) => i.target_id === s.target_id))
      .filter((i): i is FollowTargetItem => i !== undefined)
    const unselected = MOCK_LEAGUES.filter((i) => !leagues.some((s) => s.target_id === i.target_id))
    return [...selected, ...unselected]
  }, [leagues])

  return (
    <FollowPageLayout
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      currentStep={0}
      onClose={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
    >
      {ordered.map((item) => {
        const selectedIndex = leagues.findIndex((s) => s.target_id === item.target_id)
        return (
          <FollowCard
            key={item.target_id}
            item={item}
            selected={selectedIndex >= 0}
            order={selectedIndex >= 0 ? selectedIndex + 1 : undefined}
            variant="league"
            onToggle={() => toggleLeague(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
