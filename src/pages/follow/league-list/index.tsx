import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

interface Props {
  onNavigate: (page: string) => void
}

const MOCK_LEAGUES: FollowTargetItem[] = [
  {
    target_id: 'lck',
    name: 'LCK',
    subName: 'League of Legends Champions Korea',
    logoUrl: 'https://www.figma.com/api/mcp/asset/7668f8d2-4d1f-4289-a997-02f5ce839a6b',
    boost: true,
  },
  {
    target_id: 'lpl',
    name: 'LPL',
    subName: 'League of Legends Pro League',
    logoUrl: 'https://www.figma.com/api/mcp/asset/fe61937e-9e5a-44b0-b482-3702fc333637',
    boost: true,
  },
  {
    target_id: 'vcs',
    name: 'VCS',
    subName: 'Vietnam Championship Series',
    logoUrl: 'https://www.figma.com/api/mcp/asset/f99d8897-068f-4a33-8886-0d10c6b906f4',
    boost: true,
  },
  {
    target_id: 'msi',
    name: 'MSI',
    subName: 'Mid-Season Invitational',
    logoUrl: 'https://www.figma.com/api/mcp/asset/bb34603f-9799-4b02-a2ed-ffa057490e96',
    boost: true,
  },
  {
    target_id: 'lec',
    name: 'LEC',
    subName: 'League of Legends EMEA Championship',
    logoUrl: 'https://www.figma.com/api/mcp/asset/af0c3335-10b8-4312-898f-80db38e66d99',
  },
  {
    target_id: 'cblol',
    name: 'CBLOL',
    subName: 'Circuit Brazilian League of Legends',
    logoUrl: 'https://www.figma.com/api/mcp/asset/0ae9c9ba-19db-4bad-a8e3-ca6687978b62',
  },
  {
    target_id: 'lla',
    name: 'LLA',
    subName: 'League of Legends in Hispanic America',
    logoUrl: 'https://www.figma.com/api/mcp/asset/3e696e1e-1867-4d65-9105-5140df29c320',
  },
  {
    target_id: 'pcs',
    name: 'PCS',
    subName: 'Pacific Championship Series',
    logoUrl: 'https://www.figma.com/api/mcp/asset/3e696e1e-1867-4d65-9105-5140df29c320',
  },
  {
    target_id: 'cblol2',
    name: 'LJL',
    subName: 'League of Legends Japan League',
    logoUrl: 'https://www.figma.com/api/mcp/asset/3e696e1e-1867-4d65-9105-5140df29c320',
  },
]

export function LeagueListPage({ onNavigate }: Props) {
  const leagues = useFollowSelectionsStore((s) => s.leagues)
  const toggleLeague = useFollowSelectionsStore((s) => s.toggleLeague)

  return (
    <FollowPageLayout
      title="Back Your League"
      subtitle="Follow your favorite leagues"
      currentStep={0}
      items={MOCK_LEAGUES}
      selected={leagues}
      onToggle={toggleLeague}
      onPrev={() => onNavigate(PAGES.MAIN)}
      onClose={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
      showSubName
    />
  )
}
