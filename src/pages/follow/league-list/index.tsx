import { PAGES } from '../../../shared/constants/pages'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'
import { FollowPage } from '../../../features/follow/ui/FollowPage'
import type { FollowTargetItem } from '../../../features/follow/model/store/followSelectionsStore'

const MOCK_LEAGUES: FollowTargetItem[] = [
  { target_id: 'lck',  name: 'LCK',   subtitle: 'League of Legends Champions Korea',  boost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/0345b1d6-50a0-464a-b416-aa37fc81d5ba' },
  { target_id: 'lpl',  name: 'LPL',   subtitle: 'League of Legends Pro League',       boost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/44e827a4-3318-4113-a8a5-bbddc24cb344' },
  { target_id: 'vcs',  name: 'VCS',   subtitle: 'Vietnam Championship Series',        boost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/0d2447ae-27b5-48c5-b015-d1ee35b9e99b' },
  { target_id: 'msi',  name: 'MSI',   subtitle: 'Mid-Season Invitational',            boost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/b61b0571-d6d3-4722-bb80-ad5200cc261b' },
  { target_id: 'lec',  name: 'LEC',   subtitle: 'League of Legends EMEA Championship',              logoUrl: 'https://www.figma.com/api/mcp/asset/78bc018a-9114-4a9f-8139-257053e9a50c' },
  { target_id: 'cblol',name: 'CBLOL', subtitle: 'Circuit Brazilian League of Legends',              logoUrl: 'https://www.figma.com/api/mcp/asset/bd070ce4-7a5a-4ef9-b811-ab5f397a1ef7' },
  { target_id: 'lla',  name: 'LLA',   subtitle: 'League of Legends in Hispanic America',            logoUrl: 'https://www.figma.com/api/mcp/asset/b32192bc-1058-4bf9-8c26-29dd46018092' },
  { target_id: 'pcs',  name: 'PCS',   subtitle: 'Pacific Championship Series',                       logoUrl: 'https://www.figma.com/api/mcp/asset/b32192bc-1058-4bf9-8c26-29dd46018092' },
  { target_id: 'cl',   name: 'CL',    subtitle: 'Challengers League',                                logoUrl: 'https://www.figma.com/api/mcp/asset/b32192bc-1058-4bf9-8c26-29dd46018092' },
]

type Props = { onNavigate: (page: string) => void }

export function LeagueListPage({ onNavigate }: Props) {
  const leagues = useFollowSelectionsStore((s) => s.leagues)
  const toggleLeague = useFollowSelectionsStore((s) => s.toggleLeague)

  return (
    <FollowPage
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      currentStep={0}
      items={MOCK_LEAGUES}
      selected={leagues}
      onToggle={toggleLeague}
      onPrev={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onClose={() => onNavigate(PAGES.MAIN)}
    />
  )
}
