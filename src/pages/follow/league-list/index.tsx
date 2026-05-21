import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowCard } from '../../../features/follow/ui/FollowCard'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

type LeagueItem = FollowTargetItem & { logoInsetClass?: string }

const MOCK_LEAGUES: LeagueItem[] = [
  {
    target_id: 'LCK',
    name: 'LCK',
    description: 'League of Legends Champions Korea',
    logoUrl: 'https://www.figma.com/api/mcp/asset/6213a3e3-ab1a-4dec-9349-cd20a2246a14',
    logoInsetClass: 'inset-[15%_0_14.65%_0]',
    boost: true,
  },
  {
    target_id: 'LPL',
    name: 'LPL',
    description: 'League of Legends Pro League',
    logoUrl: 'https://www.figma.com/api/mcp/asset/743b069c-991e-4f29-90cb-2f9cdf344ac4',
    logoInsetClass: 'inset-[19.65%_0_20.29%_0]',
    boost: true,
  },
  {
    target_id: 'VCS',
    name: 'VCS',
    description: 'Vietnam Championship Series',
    logoUrl: 'https://www.figma.com/api/mcp/asset/0ceb613b-a861-491f-aa8c-7a5c06264492',
    logoInsetClass: 'inset-0',
    boost: true,
  },
  {
    target_id: 'MSI',
    name: 'MSI',
    description: 'Mid-Season Invitational',
    logoUrl: 'https://www.figma.com/api/mcp/asset/de78b219-12ba-4b82-811b-2a1243f61ec1',
    logoInsetClass: 'inset-[6.31%_9%_5.69%_9%]',
    boost: true,
  },
  {
    target_id: 'LEC',
    name: 'LEC',
    description: 'League of Legends EMEA Championship',
    logoUrl: 'https://www.figma.com/api/mcp/asset/01c6d31f-8cbd-4cfd-9152-65bc1c7cd40a',
    logoInsetClass: 'inset-[1%]',
  },
  {
    target_id: 'CBLOL',
    name: 'CBLOL',
    description: 'Circuit Brazilian League of Legends',
    logoUrl: 'https://www.figma.com/api/mcp/asset/9b334b96-e88d-4b8b-8af8-1b341bae1ff0',
    logoInsetClass: 'inset-[1%]',
  },
  {
    target_id: 'LLA',
    name: 'LLA',
    description: 'League of Legends in Hispanic America',
    logoUrl: 'https://www.figma.com/api/mcp/asset/6825da73-f20a-4d1c-a4f2-14a2430cb87a',
    logoInsetClass: 'inset-[17%_0_17.48%_0]',
  },
  {
    target_id: 'PCS',
    name: 'PCS',
    description: 'Pacific Championship Series',
    logoUrl: 'https://www.figma.com/api/mcp/asset/6825da73-f20a-4d1c-a4f2-14a2430cb87a',
    logoInsetClass: 'inset-[17%_0_17.48%_0]',
  },
  {
    target_id: 'LJL',
    name: 'LJL',
    description: 'League of Legends Japan League',
    logoUrl: 'https://www.figma.com/api/mcp/asset/6825da73-f20a-4d1c-a4f2-14a2430cb87a',
    logoInsetClass: 'inset-[17%_0_17.48%_0]',
  },
]

type Props = { onNavigate: (page: string) => void }

export function LeagueListPage({ onNavigate }: Props) {
  const { leagues, toggleLeague } = useFollowSelectionsStore()
  const orderedIds = useMemo(() => leagues.map((l) => l.target_id), [leagues])

  const sortedList = useMemo(() => {
    const selected = orderedIds
      .map((id) => MOCK_LEAGUES.find((l) => l.target_id === id))
      .filter((l): l is LeagueItem => l !== undefined)
    const unselected = MOCK_LEAGUES.filter((l) => !orderedIds.includes(l.target_id))
    return [...selected, ...unselected]
  }, [orderedIds])

  return (
    <FollowPageLayout
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      currentStep={0}
      onClose={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
    >
      {sortedList.map((item) => {
        const idx = orderedIds.indexOf(item.target_id)
        return (
          <FollowCard
            key={item.target_id}
            name={item.name}
            description={item.description}
            logoUrl={item.logoUrl}
            logoInsetClass={item.logoInsetClass}
            boost={item.boost}
            selected={idx >= 0}
            order={idx >= 0 ? idx + 1 : undefined}
            variant="league"
            onClick={() => toggleLeague(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
