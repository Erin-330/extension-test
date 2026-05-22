import { PAGES } from '../../../shared/constants/pages'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'
import { FollowPage } from '../../../features/follow/ui/FollowPage'
import type { FollowTargetItem } from '../../../features/follow/model/store/followSelectionsStore'

const MOCK_TEAMS: FollowTargetItem[] = [
  { target_id: 't1',           name: 'T1',                  boost: true, logoUrl: 'https://www.figma.com/api/mcp/asset/e8915129-fcbf-4565-a893-fd5730d8bf8f' },
  { target_id: 'kt',           name: 'KT Rollster',         boost: true, logoUrl: 'https://www.figma.com/api/mcp/asset/1f832ed2-1d54-4029-a067-82d37b52a377' },
  { target_id: 'geng',         name: 'GEN G',                            logoUrl: 'https://www.figma.com/api/mcp/asset/86972e72-e9ad-4d23-b4fa-abc236033cb4' },
  { target_id: 'hle',          name: 'Hanwha Life Esports',              logoUrl: 'https://www.figma.com/api/mcp/asset/2c2fffcf-7b1a-43f6-bb76-0167f312f475' },
  { target_id: 'dplus',        name: 'Dplus KIA',                         logoUrl: 'https://www.figma.com/api/mcp/asset/674031c7-864d-433e-a5f1-d0450409e7b9' },
  { target_id: 'weibo',        name: 'Weibo Gaming',                      logoUrl: 'https://www.figma.com/api/mcp/asset/d3fe48f0-9d10-44af-9327-42440b7e15d6' },
  { target_id: 'jdg',          name: 'JD Gaming',                         logoUrl: 'https://www.figma.com/api/mcp/asset/cc6ee717-6197-4dd4-b737-091bd6113058' },
  { target_id: 'blg',          name: 'Bilibili Gaming',                   logoUrl: 'https://www.figma.com/api/mcp/asset/cc6ee717-6197-4dd4-b737-091bd6113058' },
  { target_id: 'tes',          name: 'TOP Esports',          boost: true, logoUrl: 'https://www.figma.com/api/mcp/asset/cc6ee717-6197-4dd4-b737-091bd6113058' },
]

type Props = { onNavigate: (page: string) => void }

export function TeamListPage({ onNavigate }: Props) {
  const teams = useFollowSelectionsStore((s) => s.teams)
  const toggleTeam = useFollowSelectionsStore((s) => s.toggleTeam)

  return (
    <FollowPage
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      currentStep={1}
      items={MOCK_TEAMS}
      selected={teams}
      onToggle={toggleTeam}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
      onClose={() => onNavigate(PAGES.MAIN)}
    />
  )
}
