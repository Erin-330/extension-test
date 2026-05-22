import { FollowItemCard } from '../../../shared/ui/FollowItemCard'
import { FollowPageShell } from '../../../shared/ui/FollowPageShell'
import { PAGES } from '../../../shared/constants/pages'
import {
  FOLLOW_SELECTION_LIMIT,
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
    sub: 'League of Legends Champions Korea',
    logo: 'https://www.figma.com/api/mcp/asset/8e1bf8df-dd40-4702-a2fc-463873b26e3d',
    boost: true,
  },
  {
    target_id: 'lpl',
    name: 'LPL',
    sub: 'League of Legends Pro League',
    logo: 'https://www.figma.com/api/mcp/asset/37c71532-71d6-4cfa-827e-b6a7e3322017',
    boost: true,
  },
  {
    target_id: 'vcs',
    name: 'VCS',
    sub: 'Vietnam Championship Series',
    logo: 'https://www.figma.com/api/mcp/asset/8af8eaed-7f87-4971-90d5-af0292821fa0',
    boost: true,
  },
  {
    target_id: 'msi',
    name: 'MSI',
    sub: 'Mid-Season Invitational',
    logo: 'https://www.figma.com/api/mcp/asset/c5b44f1b-2156-4d2c-96d9-4bdf723248d9',
    boost: true,
  },
  {
    target_id: 'lec',
    name: 'LEC',
    sub: 'League of Legends EMEA Championship',
    logo: 'https://www.figma.com/api/mcp/asset/12e17dd2-2523-4d22-83c1-f9eb160e8f98',
  },
  {
    target_id: 'cblol',
    name: 'CBLOL',
    sub: 'Circuit Brazilian League of Legends',
    logo: 'https://www.figma.com/api/mcp/asset/6631255e-d104-40ee-bcfc-2756121f80e3',
  },
  {
    target_id: 'lla',
    name: 'LLA',
    sub: 'League of Legends in Hispanic America',
    logo: 'https://www.figma.com/api/mcp/asset/68a34297-80e8-4a90-aff4-d2194dfa409b',
  },
  {
    target_id: 'pcs',
    name: 'PCS',
    sub: 'Pacific Championship Series',
    logo: 'https://www.figma.com/api/mcp/asset/68a34297-80e8-4a90-aff4-d2194dfa409b',
  },
  {
    target_id: 'ljl',
    name: 'LJL',
    sub: 'League of Legends Japan League',
    logo: 'https://www.figma.com/api/mcp/asset/68a34297-80e8-4a90-aff4-d2194dfa409b',
  },
]

export function LeagueListPage({ onNavigate }: Props) {
  const { leagues, toggleLeague } = useFollowSelectionsStore()
  const orderedIds = leagues.map((l) => l.target_id)

  const selected = orderedIds
    .map((id) => MOCK_LEAGUES.find((i) => i.target_id === id))
    .filter((i): i is FollowTargetItem => i !== undefined)
  const unselected = MOCK_LEAGUES.filter((i) => !orderedIds.includes(i.target_id))
  const displayList = [...selected, ...unselected]

  const handleClick = (item: FollowTargetItem) => {
    const isSelected = orderedIds.includes(item.target_id)
    if (!isSelected && leagues.length >= FOLLOW_SELECTION_LIMIT.league) return
    toggleLeague(item)
  }

  return (
    <FollowPageShell
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      currentStep={0}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
    >
      {displayList.map((item) => {
        const idx = orderedIds.indexOf(item.target_id)
        return (
          <FollowItemCard
            key={item.target_id}
            logoUrl={item.logo}
            title={item.name}
            subtitle={item.sub}
            boost={item.boost}
            selected={idx >= 0}
            order={idx >= 0 ? idx + 1 : undefined}
            onClick={() => handleClick(item)}
            variant="league"
          />
        )
      })}
    </FollowPageShell>
  )
}
