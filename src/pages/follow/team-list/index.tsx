import { FollowPage } from '../../../features/follow/ui/FollowPage'
import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../shared/types/follow'

const MOCK_TEAMS: FollowTargetItem[] = [
  {
    target_id: 't1',
    name: 'T1',
    description: '',
    logo: 'https://www.figma.com/api/mcp/asset/7ecf43d0-430d-4591-9550-e577e0e65db1',
    boost: true,
  },
  {
    target_id: 'kt',
    name: 'KT Rolster',
    description: '',
    logo: 'https://www.figma.com/api/mcp/asset/238e0a1b-40d3-4df3-808e-646e8ccf3b6a',
    boost: true,
  },
  {
    target_id: 'geng',
    name: 'GEN G',
    description: '',
    logo: 'https://www.figma.com/api/mcp/asset/1cabc8ee-8ba7-45a2-8b60-e9729150d26b',
  },
  {
    target_id: 'hle',
    name: 'Hanwha Life Esports',
    description: '',
    logo: 'https://www.figma.com/api/mcp/asset/2026533b-7e04-4044-a888-3798e4df10e3',
  },
  {
    target_id: 'dk',
    name: 'Dplus KIA',
    description: '',
    logo: 'https://www.figma.com/api/mcp/asset/28eb4eba-7ce6-4c56-b71b-b5d67b25331a',
  },
  {
    target_id: 'wbg',
    name: 'Weibo Gaming',
    description: '',
    logo: 'https://www.figma.com/api/mcp/asset/b6d84052-49e5-4136-8edc-3dd78e2e6bb2',
  },
  {
    target_id: 'blg',
    name: 'Bilibili Gaming',
    description: '',
    logo: 'https://www.figma.com/api/mcp/asset/7df08454-d4ec-47b2-baed-4278c7977ce9',
  },
  {
    target_id: 'tes',
    name: 'Top Esports',
    description: '',
    logo: 'https://www.figma.com/api/mcp/asset/7df08454-d4ec-47b2-baed-4278c7977ce9',
    boost: true,
  },
]

type NavProp = {
  onNavigate: (page: string) => void
}

export function TeamListPage({ onNavigate }: NavProp) {
  return (
    <FollowPage
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      followType="team"
      currentStep={1}
      items={MOCK_TEAMS}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
    />
  )
}
