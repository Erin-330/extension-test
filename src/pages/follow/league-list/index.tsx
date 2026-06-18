import { FollowPage } from '../../../features/follow/ui/FollowPage'
import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../shared/types/follow'

const MOCK_LEAGUES: FollowTargetItem[] = [
  {
    target_id: 'lck',
    name: 'LCK',
    description: 'League of Legends Champions Korea',
    logo: 'https://www.figma.com/api/mcp/asset/24b6cd5e-1ec6-41a1-84bd-8100423b2c4c',
    boost: true,
  },
  {
    target_id: 'lpl',
    name: 'LPL',
    description: 'League of Legends Pro League',
    logo: 'https://www.figma.com/api/mcp/asset/6dd28fc4-4062-47ec-8271-e0712ee634fc',
    boost: true,
  },
  {
    target_id: 'vcs',
    name: 'VCS',
    description: 'Vietnam Championship Series',
    logo: 'https://www.figma.com/api/mcp/asset/20333781-26b2-4dc6-a9f5-9d4b5155a9c7',
    boost: true,
  },
  {
    target_id: 'msi',
    name: 'MSI',
    description: 'Mid-Season Invitational',
    logo: 'https://www.figma.com/api/mcp/asset/166e7303-db98-4707-882a-34aa105a5de0',
    boost: true,
  },
  {
    target_id: 'lec',
    name: 'LEC',
    description: 'League of Legends EMEA Championship',
    logo: 'https://www.figma.com/api/mcp/asset/ed32ef2e-7afa-4be7-b9d2-145775c711f0',
  },
  {
    target_id: 'cblol',
    name: 'CBLOL',
    description: 'Circuit Brazilian League of Legends',
    logo: 'https://www.figma.com/api/mcp/asset/6ab951aa-fd0f-425f-b2de-f990b3ea3197',
  },
  {
    target_id: 'lla',
    name: 'LLA',
    description: 'League of Legends in Hispanic America',
    logo: 'https://www.figma.com/api/mcp/asset/22244d4e-222f-4709-8478-390eb335a456',
  },
  {
    target_id: 'pcs',
    name: 'PCS',
    description: 'Pacific Championship Series',
    logo: 'https://www.figma.com/api/mcp/asset/22244d4e-222f-4709-8478-390eb335a456',
  },
  {
    target_id: 'cl',
    name: 'CL',
    description: 'LCK Challengers League',
    logo: 'https://www.figma.com/api/mcp/asset/22244d4e-222f-4709-8478-390eb335a456',
  },
  {
    target_id: 'worlds',
    name: 'WORLDS',
    description: 'World Championship',
    logo: 'https://www.figma.com/api/mcp/asset/22244d4e-222f-4709-8478-390eb335a456',
    boost: true,
  },
]

type NavProp = {
  onNavigate: (page: string) => void
}

export function LeagueListPage({ onNavigate }: NavProp) {
  return (
    <FollowPage
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      followType="league"
      currentStep={0}
      items={MOCK_LEAGUES}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
    />
  )
}
