import { PAGES } from '../../../shared/constants/pages'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'
import { FollowPage } from '../../../features/follow/ui/FollowPage'
import type { FollowTargetItem } from '../../../features/follow/model/store/followSelectionsStore'

const T1_LOGO = 'https://www.figma.com/api/mcp/asset/b9ef4253-bac0-44be-816c-c6dc5db5a417'
const KT_LOGO = 'https://www.figma.com/api/mcp/asset/bb386ba5-ca0c-422d-81c6-ef571bd11139'
const GENG_LOGO = 'https://www.figma.com/api/mcp/asset/2f8745a6-f81c-4c7c-be8b-2e0ac3cae687'
const PLAYER_IMG = 'https://www.figma.com/api/mcp/asset/491818d2-5d57-4ac7-8744-9475a82752d0'

const MOCK_PLAYERS: FollowTargetItem[] = [
  { target_id: 'doran',   name: 'Doran',   subtitle: 'fullName', boost: true,  logoUrl: PLAYER_IMG, teamLogoUrl: T1_LOGO },
  { target_id: 'faker',   name: 'Faker',   subtitle: 'fullName', boost: true,  logoUrl: PLAYER_IMG, teamLogoUrl: T1_LOGO },
  { target_id: 'keria',   name: 'Keria',   subtitle: 'fullName', boost: true,  logoUrl: PLAYER_IMG, teamLogoUrl: T1_LOGO },
  { target_id: 'oner',    name: 'Oner',    subtitle: 'fullName', boost: true,  logoUrl: PLAYER_IMG, teamLogoUrl: T1_LOGO },
  { target_id: 'perfect', name: 'PerfecT', subtitle: 'fullName',                logoUrl: PLAYER_IMG, teamLogoUrl: KT_LOGO },
  { target_id: 'bdd',     name: 'Bdd',     subtitle: 'fullName',                logoUrl: PLAYER_IMG, teamLogoUrl: KT_LOGO },
  { target_id: 'cuzz',    name: 'Cuzz',    subtitle: 'fullName',                logoUrl: PLAYER_IMG, teamLogoUrl: KT_LOGO },
  { target_id: 'aiming',  name: 'Aiming',  subtitle: 'fullName',                logoUrl: PLAYER_IMG, teamLogoUrl: KT_LOGO },
  { target_id: 'ghost',   name: 'Ghost',   subtitle: 'fullName',                logoUrl: PLAYER_IMG, teamLogoUrl: KT_LOGO },
  { target_id: 'canyon',  name: 'Canyon',  subtitle: 'fullName', boost: true,   logoUrl: PLAYER_IMG, teamLogoUrl: GENG_LOGO },
  { target_id: 'raiad',   name: 'Raiad',   subtitle: 'fullName', boost: true,   logoUrl: PLAYER_IMG, teamLogoUrl: GENG_LOGO },
  { target_id: 'chovy',   name: 'Chovy',   subtitle: 'fullName', boost: true,   logoUrl: PLAYER_IMG, teamLogoUrl: GENG_LOGO },
]

type Props = { onNavigate: (page: string) => void }

export function PlayerListPage({ onNavigate }: Props) {
  const players = useFollowSelectionsStore((s) => s.players)
  const togglePlayer = useFollowSelectionsStore((s) => s.togglePlayer)
  const reset = useFollowSelectionsStore((s) => s.reset)

  const handleDone = () => {
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <FollowPage
      title="Back Your Player"
      subtitle="Follow your favorite Players"
      currentStep={2}
      items={MOCK_PLAYERS}
      selected={players}
      onToggle={togglePlayer}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onDone={handleDone}
      onClose={() => onNavigate(PAGES.MAIN)}
    />
  )
}
