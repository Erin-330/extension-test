import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageShell } from '../../../features/follow/ui/FollowPageShell'
import { FollowCard } from '../../../features/follow/ui/FollowCard'
import { FOLLOW_ASSETS, TEAM_LOGOS } from '../../../features/follow/ui/assets'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

type Props = { onNavigate: (page: string) => void }

const MOCK_PLAYERS: FollowTargetItem[] = [
  { target_id: 'doran', name: 'Doran', description: 'Choi Hyeon-joon', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.T1, boost: true },
  { target_id: 'faker', name: 'Faker', description: 'Lee Sang-hyeok', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.T1, boost: true },
  { target_id: 'keria', name: 'Keria', description: 'Ryu Min-seok', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.T1, boost: true },
  { target_id: 'oner', name: 'Oner', description: 'Mun Hyeon-jun', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.T1, boost: true },
  { target_id: 'perfect', name: 'PerfecT', description: 'Lee Seung-min', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.KT },
  { target_id: 'bdd', name: 'Bdd', description: 'Gwak Bo-seong', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.KT },
  { target_id: 'cuzz', name: 'Cuzz', description: 'Mun U-chan', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.KT },
  { target_id: 'aiming', name: 'Aiming', description: 'Kim Ha-ram', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.KT },
  { target_id: 'ghost', name: 'Ghost', description: 'Jang Yong-jun', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.KT },
  { target_id: 'canyon', name: 'Canyon', description: 'Kim Geon-bu', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.GENG, boost: true },
  { target_id: 'raiad', name: 'Raiad', description: '', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.GENG, boost: true },
  { target_id: 'chovy', name: 'Chovy', description: 'Jeong Ji-hoon', logo: FOLLOW_ASSETS.playerDefault, teamLogo: TEAM_LOGOS.GENG, boost: true },
]

export function PlayerListPage({ onNavigate }: Props) {
  const players = useFollowSelectionsStore((s) => s.players)
  const togglePlayer = useFollowSelectionsStore((s) => s.togglePlayer)
  const reset = useFollowSelectionsStore((s) => s.reset)

  const ordered = useMemo(() => {
    const selectedIds = players.map((p) => p.target_id)
    const selected = selectedIds
      .map((id) => MOCK_PLAYERS.find((i) => i.target_id === id))
      .filter((i): i is FollowTargetItem => i !== undefined)
    const unselected = MOCK_PLAYERS.filter((i) => !selectedIds.includes(i.target_id))
    return [...selected, ...unselected]
  }, [players])

  const selectedIds = players.map((p) => p.target_id)

  const handleDone = () => {
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <FollowPageShell
      title="Back Your Player"
      subtitle="Follow your favorite Players"
      currentStep={2}
      isLast
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onNext={handleDone}
    >
      {ordered.map((item) => {
        const isSelected = selectedIds.includes(item.target_id)
        const order = isSelected ? selectedIds.indexOf(item.target_id) + 1 : undefined
        return (
          <FollowCard
            key={item.target_id}
            item={item}
            selected={isSelected}
            order={order}
            variant="player"
            playerDefaultImage={FOLLOW_ASSETS.playerDefault}
            onToggle={() => togglePlayer(item)}
          />
        )
      })}
    </FollowPageShell>
  )
}
