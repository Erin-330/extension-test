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

const PLAYER_AVATAR = 'https://www.figma.com/api/mcp/asset/da76b795-a5c7-4757-b5c9-bf72caa8e8e0'
const T1_LOGO = 'https://www.figma.com/api/mcp/asset/f4012c25-cebb-4020-9658-8d17c3c848d9'
const KT_LOGO = 'https://www.figma.com/api/mcp/asset/6f551a1b-87f0-4072-93c0-14566e75fcd4'
const GENG_LOGO = 'https://www.figma.com/api/mcp/asset/96aca669-e892-488e-8a43-bfd01777f84b'

const MOCK_PLAYERS: FollowTargetItem[] = [
  { target_id: 'doran', name: 'Doran', sub: 'fullName', logo: PLAYER_AVATAR, boost: true, teamLogo: T1_LOGO },
  { target_id: 'faker', name: 'Faker', sub: 'fullName', logo: PLAYER_AVATAR, boost: true, teamLogo: T1_LOGO },
  { target_id: 'keria', name: 'Keria', sub: 'fullName', logo: PLAYER_AVATAR, boost: true, teamLogo: T1_LOGO },
  { target_id: 'oner', name: 'Oner', sub: 'fullName', logo: PLAYER_AVATAR, boost: true, teamLogo: T1_LOGO },
  { target_id: 'perfect', name: 'PerfecT', sub: 'fullName', logo: PLAYER_AVATAR, teamLogo: KT_LOGO },
  { target_id: 'bdd', name: 'Bdd', sub: 'fullName', logo: PLAYER_AVATAR, teamLogo: KT_LOGO },
  { target_id: 'cuzz', name: 'Cuzz', sub: 'fullName', logo: PLAYER_AVATAR, teamLogo: KT_LOGO },
  { target_id: 'aiming', name: 'Aiming', sub: 'fullName', logo: PLAYER_AVATAR, teamLogo: KT_LOGO },
  { target_id: 'ghost', name: 'Ghost', sub: 'fullName', logo: PLAYER_AVATAR, teamLogo: KT_LOGO },
  { target_id: 'canyon', name: 'Canyon', sub: 'fullName', logo: PLAYER_AVATAR, boost: true, teamLogo: GENG_LOGO },
  { target_id: 'raiad', name: 'Raiad', sub: 'fullName', logo: PLAYER_AVATAR, boost: true, teamLogo: GENG_LOGO },
]

export function PlayerListPage({ onNavigate }: Props) {
  const { players, leagues, teams, togglePlayer, reset } = useFollowSelectionsStore()
  const orderedIds = players.map((p) => p.target_id)

  const selected = orderedIds
    .map((id) => MOCK_PLAYERS.find((i) => i.target_id === id))
    .filter((i): i is FollowTargetItem => i !== undefined)
  const unselected = MOCK_PLAYERS.filter((i) => !orderedIds.includes(i.target_id))
  const displayList = [...selected, ...unselected]

  const handleClick = (item: FollowTargetItem) => {
    const isSelected = orderedIds.includes(item.target_id)
    if (!isSelected && players.length >= FOLLOW_SELECTION_LIMIT.player) return
    togglePlayer(item)
  }

  const handleDone = () => {
    void leagues
    void teams
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <FollowPageShell
      title="Follow Players"
      subtitle="Select players to follow"
      currentStep={2}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onDone={handleDone}
    >
      {displayList.map((item) => {
        const idx = orderedIds.indexOf(item.target_id)
        return (
          <FollowItemCard
            key={item.target_id}
            logoUrl={item.logo}
            teamLogoUrl={item.teamLogo}
            title={item.name}
            subtitle={item.sub}
            boost={item.boost}
            selected={idx >= 0}
            order={idx >= 0 ? idx + 1 : undefined}
            onClick={() => handleClick(item)}
            variant="player"
          />
        )
      })}
    </FollowPageShell>
  )
}
