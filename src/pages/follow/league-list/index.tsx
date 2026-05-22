import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowItemCard } from '../../../features/follow/ui/FollowItemCard'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

interface LeagueListPageProps {
  onNavigate: (page: string) => void
}

const MOCK_LEAGUES: FollowTargetItem[] = [
  {
    target_id: 'lck',
    name: 'LCK',
    description: 'League of Legends Champions Korea',
    imageUrl: 'https://www.figma.com/api/mcp/asset/81d31feb-7d49-4822-a857-7ec6dd74481b',
    insetClass: 'inset-[15%_0_14.65%_0]',
    hasBoost: true,
  },
  {
    target_id: 'lpl',
    name: 'LPL',
    description: 'League of Legends Pro League',
    imageUrl: 'https://www.figma.com/api/mcp/asset/79a730bc-dfd5-4f43-884f-7727473ca1ca',
    insetClass: 'inset-[19.65%_0_20.29%_0]',
    hasBoost: true,
  },
  {
    target_id: 'vcs',
    name: 'VCS',
    description: 'Vietnam Championship Series',
    imageUrl: 'https://www.figma.com/api/mcp/asset/0db7b014-dc8a-4bdb-bd98-ecd077ab5172',
    insetClass: 'inset-[0_-180.85%_0_1%]',
    hasBoost: true,
  },
  {
    target_id: 'msi',
    name: 'MSI',
    description: 'Mid-Season Invitational',
    imageUrl: 'https://www.figma.com/api/mcp/asset/deb72193-829c-4320-a918-2d8c42856b0d',
    insetClass: 'inset-[6.31%_9%_5.69%_9%]',
    hasBoost: true,
  },
  {
    target_id: 'lec',
    name: 'LEC',
    description: 'League of Legends EMEA Championship',
    imageUrl: 'https://www.figma.com/api/mcp/asset/2acd5c9d-8bed-4084-a419-43dc432415f5',
    insetClass: 'inset-[1%]',
  },
  {
    target_id: 'cblol',
    name: 'CBLOL',
    description: 'Circuit Brazilian League of Legends',
    imageUrl: 'https://www.figma.com/api/mcp/asset/a2f972be-d2f2-46cc-9b13-cb7bfd449d2f',
    insetClass: 'inset-[1%]',
  },
  {
    target_id: 'lla',
    name: 'LLA',
    description: 'League of Legends in Hispanic America',
    imageUrl: 'https://www.figma.com/api/mcp/asset/cc40d665-43b5-4768-bc25-15252b6179a3',
    insetClass: 'inset-[17%_0_17.48%_0]',
  },
  {
    target_id: 'cblol-academy',
    name: 'CBLOL Academy',
    description: 'CBLOL Academy League',
    imageUrl: 'https://www.figma.com/api/mcp/asset/a2f972be-d2f2-46cc-9b13-cb7bfd449d2f',
    insetClass: 'inset-[1%]',
  },
  {
    target_id: 'pcs',
    name: 'PCS',
    description: 'Pacific Championship Series',
    imageUrl: 'https://www.figma.com/api/mcp/asset/cc40d665-43b5-4768-bc25-15252b6179a3',
    insetClass: 'inset-[17%_0_17.48%_0]',
  },
  {
    target_id: 'ljl',
    name: 'LJL',
    description: 'League of Legends Japan League',
    imageUrl: 'https://www.figma.com/api/mcp/asset/cc40d665-43b5-4768-bc25-15252b6179a3',
    insetClass: 'inset-[17%_0_17.48%_0]',
  },
]

export function LeagueListPage({ onNavigate }: LeagueListPageProps) {
  const { leagues, toggleLeague } = useFollowSelectionsStore()

  const orderedItems = useMemo(() => {
    const selectedIds = leagues.map((l) => l.target_id)
    const selected = selectedIds
      .map((id) => MOCK_LEAGUES.find((i) => i.target_id === id))
      .filter((i): i is FollowTargetItem => i !== undefined)
    const unselected = MOCK_LEAGUES.filter((i) => !selectedIds.includes(i.target_id))
    return [...selected, ...unselected]
  }, [leagues])

  return (
    <FollowPageLayout
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      currentStep={0}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
    >
      {orderedItems.map((item) => {
        const order = leagues.findIndex((l) => l.target_id === item.target_id)
        return (
          <FollowItemCard
            key={item.target_id}
            item={item}
            selected={order >= 0}
            order={order + 1}
            onClick={() => toggleLeague(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
