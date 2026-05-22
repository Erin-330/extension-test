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

const MOCK_TEAMS: FollowTargetItem[] = [
  {
    target_id: 't1',
    name: 'T1',
    logo: 'https://www.figma.com/api/mcp/asset/e903e5f7-710f-4f99-a8d4-a0ca8c23e528',
    boost: true,
  },
  {
    target_id: 'kt',
    name: 'KT Rollster',
    logo: 'https://www.figma.com/api/mcp/asset/cdb02afe-7d6a-4889-ba2d-ef81f0ac6e8a',
    boost: true,
  },
  {
    target_id: 'geng',
    name: 'GEN G',
    logo: 'https://www.figma.com/api/mcp/asset/053b6265-549f-4479-9d4e-338c0dbf552b',
  },
  {
    target_id: 'hle',
    name: 'Hanwha Life Esports',
    logo: 'https://www.figma.com/api/mcp/asset/404180e8-5702-4125-98c8-1e1b709ffaf0',
  },
  {
    target_id: 'dk',
    name: 'Dplus KIA',
    logo: 'https://www.figma.com/api/mcp/asset/3ea7b8e1-b4c3-4dd0-8628-2070327920be',
  },
  {
    target_id: 'wbg',
    name: 'Weibo Gaming',
    logo: 'https://www.figma.com/api/mcp/asset/b5b68f83-1ef6-4885-a165-53810dcb5556',
  },
  {
    target_id: 'blg',
    name: 'Bilibili Gaming',
    logo: 'https://www.figma.com/api/mcp/asset/b5b68f83-1ef6-4885-a165-53810dcb5556',
  },
  {
    target_id: 'tes',
    name: 'Top Esports',
    logo: 'https://www.figma.com/api/mcp/asset/3a095cf1-1884-4cc2-9747-2cccb7ad5285',
  },
  {
    target_id: 'jdg',
    name: 'JD Gaming',
    logo: 'https://www.figma.com/api/mcp/asset/3a095cf1-1884-4cc2-9747-2cccb7ad5285',
    boost: true,
  },
]

export function TeamListPage({ onNavigate }: Props) {
  const { teams, toggleTeam } = useFollowSelectionsStore()
  const orderedIds = teams.map((t) => t.target_id)

  const selected = orderedIds
    .map((id) => MOCK_TEAMS.find((i) => i.target_id === id))
    .filter((i): i is FollowTargetItem => i !== undefined)
  const unselected = MOCK_TEAMS.filter((i) => !orderedIds.includes(i.target_id))
  const displayList = [...selected, ...unselected]

  const handleClick = (item: FollowTargetItem) => {
    const isSelected = orderedIds.includes(item.target_id)
    if (!isSelected && teams.length >= FOLLOW_SELECTION_LIMIT.team) return
    toggleTeam(item)
  }

  return (
    <FollowPageShell
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      currentStep={1}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
    >
      {displayList.map((item) => {
        const idx = orderedIds.indexOf(item.target_id)
        return (
          <FollowItemCard
            key={item.target_id}
            logoUrl={item.logo}
            title={item.name}
            boost={item.boost}
            selected={idx >= 0}
            order={idx >= 0 ? idx + 1 : undefined}
            onClick={() => handleClick(item)}
            variant="team"
          />
        )
      })}
    </FollowPageShell>
  )
}
