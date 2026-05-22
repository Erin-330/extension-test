import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowCard } from '../../../features/follow/ui/FollowCard'

const imgNoPlayer = 'https://www.figma.com/api/mcp/asset/f4937e2c-e9a5-4933-8bf9-49724d1709fd'
const imgT1 = 'https://www.figma.com/api/mcp/asset/04a66647-659e-4d8b-8935-63379fe4f9f8'
const imgKt = 'https://www.figma.com/api/mcp/asset/7c4e162c-3e42-4e63-ae86-a7055b92de40'
const imgGenG = 'https://www.figma.com/api/mcp/asset/3fe4c375-6465-4d1c-9173-c292064130ad'

const T1_INSET = '5% 5% 5% 5%'
const KT_INSET = '20% 19.17% 16.67% 18.33%'
const GENG_INSET = '15% 9.05% 14.89% 9.17%'

const MOCK_PLAYERS: (FollowTargetItem & { teamLogoInset?: string })[] = [
  { target_id: 'doran', name: 'Doran', subtitle: 'fullName', hasBoost: true, teamLogoUrl: imgT1, teamLogoInset: T1_INSET, logoUrl: imgNoPlayer },
  { target_id: 'faker', name: 'Faker', subtitle: 'fullName', hasBoost: true, teamLogoUrl: imgT1, teamLogoInset: T1_INSET, logoUrl: imgNoPlayer },
  { target_id: 'keria', name: 'Keria', subtitle: 'fullName', hasBoost: true, teamLogoUrl: imgT1, teamLogoInset: T1_INSET, logoUrl: imgNoPlayer },
  { target_id: 'oner', name: 'Oner', subtitle: 'fullName', hasBoost: true, teamLogoUrl: imgT1, teamLogoInset: T1_INSET, logoUrl: imgNoPlayer },
  { target_id: 'perfect', name: 'PerfecT', subtitle: 'fullName', teamLogoUrl: imgKt, teamLogoInset: KT_INSET, logoUrl: imgNoPlayer },
  { target_id: 'bdd', name: 'Bdd', subtitle: 'fullName', teamLogoUrl: imgKt, teamLogoInset: KT_INSET, logoUrl: imgNoPlayer },
  { target_id: 'cuzz', name: 'Cuzz', subtitle: 'fullName', teamLogoUrl: imgKt, teamLogoInset: KT_INSET, logoUrl: imgNoPlayer },
  { target_id: 'aiming', name: 'Aiming', subtitle: 'fullName', teamLogoUrl: imgKt, teamLogoInset: KT_INSET, logoUrl: imgNoPlayer },
  { target_id: 'ghost', name: 'Ghost', subtitle: 'fullName', teamLogoUrl: imgKt, teamLogoInset: KT_INSET, logoUrl: imgNoPlayer },
  { target_id: 'canyon', name: 'Canyon', subtitle: 'fullName', hasBoost: true, teamLogoUrl: imgGenG, teamLogoInset: GENG_INSET, logoUrl: imgNoPlayer },
  { target_id: 'raiad', name: 'Raiad', subtitle: 'fullName', hasBoost: true, teamLogoUrl: imgGenG, teamLogoInset: GENG_INSET, logoUrl: imgNoPlayer },
]

type Props = { onNavigate: (page: string) => void }

export function PlayerListPage({ onNavigate }: Props) {
  const { players, togglePlayer, reset } = useFollowSelectionsStore()
  const selectedIds = players.map((p) => p.target_id)
  const selected = selectedIds
    .map((id) => MOCK_PLAYERS.find((i) => i.target_id === id))
    .filter((i): i is (typeof MOCK_PLAYERS)[number] => i !== undefined)
  const unselected = MOCK_PLAYERS.filter((i) => !selectedIds.includes(i.target_id))
  const ordered = [...selected, ...unselected]

  const handleDone = () => {
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <FollowPageLayout
      title="Back Your Player"
      subtitle="Follow your favorite Players"
      currentStep={2}
      showPrev={true}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onNext={handleDone}
      isDone
      onClose={() => onNavigate(PAGES.MAIN)}
    >
      {ordered.map((item) => {
        const idx = selectedIds.indexOf(item.target_id)
        return (
          <FollowCard
            key={item.target_id}
            variant="player"
            logoUrl={item.logoUrl}
            name={item.name}
            subtitle={item.subtitle}
            hasBoost={item.hasBoost}
            teamLogoUrl={item.teamLogoUrl}
            teamLogoInset={item.teamLogoInset}
            selected={idx >= 0}
            selectedIndex={idx >= 0 ? idx + 1 : undefined}
            onClick={() => togglePlayer(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
