import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

interface Props {
  onNavigate: (page: string) => void
}

const MOCK_TEAMS: FollowTargetItem[] = [
  {
    target_id: 't1',
    name: 'T1',
    logoUrl: 'https://www.figma.com/api/mcp/asset/1bf94967-5383-4460-8b3f-9591944e9995',
    boost: true,
  },
  {
    target_id: 'kt',
    name: 'KT Rollster',
    logoUrl: 'https://www.figma.com/api/mcp/asset/1673209e-f6b7-4fd5-8ab2-802bb2decf90',
    boost: true,
  },
  {
    target_id: 'geng',
    name: 'GEN G',
    logoUrl: 'https://www.figma.com/api/mcp/asset/050d0aed-8d5f-4e8d-a8db-8c0f45fdcd5e',
  },
  {
    target_id: 'hle',
    name: 'Hanwha Life Esports',
    logoUrl: 'https://www.figma.com/api/mcp/asset/1770eece-e7c7-491f-94eb-4b620c364323',
  },
  {
    target_id: 'dk',
    name: 'Dplus KIA',
    logoUrl: 'https://www.figma.com/api/mcp/asset/0c78466e-80e0-497f-be46-340364aad8d3',
  },
  {
    target_id: 'wbg',
    name: 'Weibo Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/811c30fc-e011-444d-b980-c8e6b7e681b6',
  },
  {
    target_id: 'blg',
    name: 'Bilibili Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/811c30fc-e011-444d-b980-c8e6b7e681b6',
  },
  {
    target_id: 'tes',
    name: 'Top Esports',
    logoUrl: 'https://www.figma.com/api/mcp/asset/ff906121-dcc1-4bfe-ad63-07261f8b9dc3',
  },
  {
    target_id: 'jdg',
    name: 'JD Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/ff906121-dcc1-4bfe-ad63-07261f8b9dc3',
    boost: true,
  },
]

export function TeamListPage({ onNavigate }: Props) {
  const teams = useFollowSelectionsStore((s) => s.teams)
  const toggleTeam = useFollowSelectionsStore((s) => s.toggleTeam)

  return (
    <FollowPageLayout
      title="Back Your Team"
      subtitle="Select teams to follow"
      currentStep={1}
      items={MOCK_TEAMS}
      selected={teams}
      onToggle={toggleTeam}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onClose={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
    />
  )
}
