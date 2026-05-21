import { FollowPage } from '../../../features/follow/ui/FollowPage'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'
import { PAGES } from '../../../shared/constants/pages'
import type { FollowTargetItem } from '../../../shared/types/follow'

const T1_LOGO = 'https://www.figma.com/api/mcp/asset/b77e25ef-18bc-41fb-89c2-db1123468706'
const KT_LOGO = 'https://www.figma.com/api/mcp/asset/ca8498eb-d433-4ceb-ba23-cb0a5fc9ca3c'
const GENG_LOGO = 'https://www.figma.com/api/mcp/asset/fb757080-1cbb-42dd-96da-29ee629a96fe'

const MOCK_PLAYERS: FollowTargetItem[] = [
  { target_id: 'doran', name: 'Doran', description: 'fullName', logo: '', isPlayer: true, esportsLogo: T1_LOGO, boost: true },
  { target_id: 'faker', name: 'Faker', description: 'fullName', logo: '', isPlayer: true, esportsLogo: T1_LOGO, boost: true },
  { target_id: 'keria', name: 'Keria', description: 'fullName', logo: '', isPlayer: true, esportsLogo: T1_LOGO, boost: true },
  { target_id: 'oner', name: 'Oner', description: 'fullName', logo: '', isPlayer: true, esportsLogo: T1_LOGO, boost: true },
  { target_id: 'perfect', name: 'PerfecT', description: 'fullName', logo: '', isPlayer: true, esportsLogo: KT_LOGO },
  { target_id: 'bdd', name: 'Bdd', description: 'fullName', logo: '', isPlayer: true, esportsLogo: KT_LOGO },
  { target_id: 'cuzz', name: 'Cuzz', description: 'fullName', logo: '', isPlayer: true, esportsLogo: KT_LOGO },
  { target_id: 'aiming', name: 'Aiming', description: 'fullName', logo: '', isPlayer: true, esportsLogo: KT_LOGO },
  { target_id: 'ghost', name: 'Ghost', description: 'fullName', logo: '', isPlayer: true, esportsLogo: KT_LOGO },
  { target_id: 'canyon', name: 'Canyon', description: 'fullName', logo: '', isPlayer: true, esportsLogo: GENG_LOGO, boost: true },
  { target_id: 'raiad', name: 'Raiad', description: 'fullName', logo: '', isPlayer: true, esportsLogo: GENG_LOGO, boost: true },
]

type NavProp = {
  onNavigate: (page: string) => void
}

export function PlayerListPage({ onNavigate }: NavProp) {
  const reset = useFollowSelectionsStore((s) => s.reset)
  const handleDone = () => {
    reset()
    onNavigate(PAGES.MAIN)
  }
  return (
    <FollowPage
      title="Back Your Player"
      subtitle="Follow your favorite Players"
      followType="player"
      currentStep={2}
      items={MOCK_PLAYERS}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onDone={handleDone}
    />
  )
}
