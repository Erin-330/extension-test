import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'
import { FollowPage } from '../../../features/follow/ui/FollowPage'

const PLAYER_PLACEHOLDER =
  'https://www.figma.com/api/mcp/asset/2e71ed81-ab9b-4deb-9bc9-039af8e0595a'
const T1_LOGO = 'https://www.figma.com/api/mcp/asset/9e4a3045-f10b-4382-9adf-8d399ec4ca73'
const KT_LOGO = 'https://www.figma.com/api/mcp/asset/190fb939-84db-4596-b1d8-1e3b4ae142fa'
const GENG_LOGO = 'https://www.figma.com/api/mcp/asset/ffc598c8-83fe-426f-b7f7-f7f25c11d234'

const player = (
  target_id: string,
  name: string,
  team: { url: string; inset: string },
  boost = false,
): FollowTargetItem => ({
  target_id,
  name,
  subName: 'fullName',
  logoUrl: PLAYER_PLACEHOLDER,
  logoInsetClass: 'absolute inset-0',
  teamLogoUrl: team.url,
  teamLogoInsetClass: team.inset,
  boost,
})

const T1 = { url: T1_LOGO, inset: 'absolute inset-[30%_2.99%_29.57%_2.99%]' }
const KT = { url: KT_LOGO, inset: 'absolute inset-[20%_19.17%_16.67%_18.33%]' }
const GENG = { url: GENG_LOGO, inset: 'absolute inset-[15%_9.05%_14.89%_9.17%]' }

const MOCK_PLAYERS: FollowTargetItem[] = [
  player('doran', 'Doran', T1, true),
  player('faker', 'Faker', T1, true),
  player('keria', 'Keria', T1, true),
  player('oner', 'Oner', T1, true),
  player('perfect', 'PerfecT', KT),
  player('bdd', 'Bdd', KT),
  player('cuzz', 'Cuzz', KT),
  player('aiming', 'Aiming', KT),
  player('ghost', 'Ghost', KT),
  player('canyon', 'Canyon', GENG, true),
  player('raiad', 'Raiad', GENG, true),
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
      items={MOCK_PLAYERS}
      selected={players}
      onToggle={togglePlayer}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onNext={handleDone}
      onClose={() => onNavigate(PAGES.MAIN)}
      currentStep={2}
      doneLabel="Done"
    />
  )
}
