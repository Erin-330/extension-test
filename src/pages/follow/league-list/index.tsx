import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'
import { FollowPage } from '../../../features/follow/ui/FollowPage'

const MOCK_LEAGUES: FollowTargetItem[] = [
  {
    target_id: 'lck',
    name: 'LCK',
    subName: 'League of Legends Champions Korea',
    logoUrl: 'https://www.figma.com/api/mcp/asset/f14ed598-b37a-487e-a20d-23b457ff3e72',
    logoInsetClass: 'absolute inset-[15%_0_14.65%_0]',
    boost: true,
  },
  {
    target_id: 'lpl',
    name: 'LPL',
    subName: 'League of Legends Pro League',
    logoUrl: 'https://www.figma.com/api/mcp/asset/c0cde1bc-4b48-450c-bba0-06027dc58565',
    logoInsetClass: 'absolute inset-[19.65%_0_20.29%_0]',
    boost: true,
  },
  {
    target_id: 'vcs',
    name: 'VCS',
    subName: 'Vietnam Championship Series',
    logoUrl: 'https://www.figma.com/api/mcp/asset/a0291f40-04bc-4738-932d-1868d6da72e7',
    logoInsetClass: 'absolute inset-0',
    boost: true,
  },
  {
    target_id: 'msi',
    name: 'MSI',
    subName: 'Mid-Season Invitational',
    logoUrl: 'https://www.figma.com/api/mcp/asset/628322ae-4b7b-46b8-9538-9569a1802bdf',
    logoInsetClass: 'absolute inset-[6.31%_9%_5.69%_9%]',
    boost: true,
  },
  {
    target_id: 'lec',
    name: 'LEC',
    subName: 'League of Legends EMEA Championship',
    logoUrl: 'https://www.figma.com/api/mcp/asset/3b94c9a9-8bcf-47b4-80bb-2303f86f91ff',
    logoInsetClass: 'absolute inset-[1%]',
  },
  {
    target_id: 'cblol',
    name: 'CBLOL',
    subName: 'Circuit Brazilian League of Legends',
    logoUrl: 'https://www.figma.com/api/mcp/asset/4969001c-1afc-4e5a-a2e7-859ac587d159',
    logoInsetClass: 'absolute inset-[1%]',
  },
  {
    target_id: 'lla',
    name: 'LLA',
    subName: 'League of Legends in Hispanic America',
    logoUrl: 'https://www.figma.com/api/mcp/asset/eda0fffa-a845-4452-b82d-c77f0437694d',
    logoInsetClass: 'absolute inset-[17%_0_17.48%_0]',
  },
]

type Props = { onNavigate: (page: string) => void }

export function LeagueListPage({ onNavigate }: Props) {
  const leagues = useFollowSelectionsStore((s) => s.leagues)
  const toggleLeague = useFollowSelectionsStore((s) => s.toggleLeague)
  return (
    <FollowPage
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      items={MOCK_LEAGUES}
      selected={leagues}
      onToggle={toggleLeague}
      onPrev={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onClose={() => onNavigate(PAGES.MAIN)}
      currentStep={0}
    />
  )
}
