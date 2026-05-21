import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

interface Props {
  onNavigate: (page: string) => void
}

const T1_LOGO = 'https://www.figma.com/api/mcp/asset/cb10ca61-f78f-4a8b-9907-796db492b1ff'
const KT_LOGO = 'https://www.figma.com/api/mcp/asset/340767b9-210f-43d6-bc6e-2a83ba57b955'
const GENG_LOGO = 'https://www.figma.com/api/mcp/asset/1a91838a-aa6d-472b-841c-7f6bcffa460a'

const MOCK_PLAYERS: FollowTargetItem[] = [
  { target_id: 'doran', name: 'Doran', subName: 'fullName', teamLogoUrl: T1_LOGO, boost: true },
  { target_id: 'faker', name: 'Faker', subName: 'fullName', teamLogoUrl: T1_LOGO, boost: true },
  { target_id: 'keria', name: 'Keria', subName: 'fullName', teamLogoUrl: T1_LOGO, boost: true },
  { target_id: 'oner', name: 'Oner', subName: 'fullName', teamLogoUrl: T1_LOGO, boost: true },
  { target_id: 'perfect', name: 'PerfecT', subName: 'fullName', teamLogoUrl: KT_LOGO },
  { target_id: 'bdd', name: 'Bdd', subName: 'fullName', teamLogoUrl: KT_LOGO },
  { target_id: 'cuzz', name: 'Cuzz', subName: 'fullName', teamLogoUrl: KT_LOGO },
  { target_id: 'aiming', name: 'Aiming', subName: 'fullName', teamLogoUrl: KT_LOGO },
  { target_id: 'ghost', name: 'Ghost', subName: 'fullName', teamLogoUrl: KT_LOGO },
  { target_id: 'canyon', name: 'Canyon', subName: 'fullName', teamLogoUrl: GENG_LOGO, boost: true },
  { target_id: 'ruler', name: 'Ruler', subName: 'fullName', teamLogoUrl: GENG_LOGO, boost: true },
  { target_id: 'chovy', name: 'Chovy', subName: 'fullName', teamLogoUrl: GENG_LOGO, boost: true },
]

async function submitFollowAll(_: {
  league: { target_id: string }[]
  team: { target_id: string }[]
  player: { target_id: string }[]
}) {
  // PUT /follow stub
  return Promise.resolve()
}

export function PlayerListPage({ onNavigate }: Props) {
  const { players, leagues, teams, togglePlayer, reset } = useFollowSelectionsStore()

  const handleDone = async () => {
    await submitFollowAll({
      league: leagues.map((l) => ({ target_id: l.target_id })),
      team: teams.map((t) => ({ target_id: t.target_id })),
      player: players.map((p) => ({ target_id: p.target_id })),
    })
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <FollowPageLayout
      title="Follow Players"
      subtitle="Select players to follow"
      currentStep={2}
      items={MOCK_PLAYERS}
      selected={players}
      onToggle={togglePlayer}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onClose={() => onNavigate(PAGES.MAIN)}
      onNext={handleDone}
      nextLabel="Done"
      showPlayerAvatar
      showTeamLogo
      showSubName
    />
  )
}
