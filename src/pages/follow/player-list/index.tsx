import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowCard } from '../../../features/follow/ui/FollowCard'
import { FOLLOW_ASSETS, TEAM_LOGOS } from '../../../features/follow/ui/FollowAssets'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

interface Props {
  onNavigate: (page: string) => void
}

const MOCK_PLAYERS: FollowTargetItem[] = [
  { target_id: 'doran', name: 'Doran', subname: 'Choi Hyeon-joon', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.t1, boost: true },
  { target_id: 'faker', name: 'Faker', subname: 'Lee Sang-hyeok', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.t1, boost: true },
  { target_id: 'keria', name: 'Keria', subname: 'Ryu Min-seok', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.t1, boost: true },
  { target_id: 'oner', name: 'Oner', subname: 'Mun Hyeon-jun', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.t1, boost: true },
  { target_id: 'perfect', name: 'PerfecT', subname: 'Lee Seung-min', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.kt },
  { target_id: 'bdd', name: 'Bdd', subname: 'Gwak Bo-seong', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.kt },
  { target_id: 'cuzz', name: 'Cuzz', subname: 'Moon Woo-chan', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.kt },
  { target_id: 'aiming', name: 'Aiming', subname: 'Kim Ha-ram', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.kt },
  { target_id: 'ghost', name: 'Ghost', subname: 'Jang Yong-jun', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.kt },
  { target_id: 'canyon', name: 'Canyon', subname: 'Kim Geon-bu', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.geng, boost: true },
  { target_id: 'ruler', name: 'Ruler', subname: 'Park Jae-hyuk', imageUrl: FOLLOW_ASSETS.playerPlaceholder, teamLogoUrl: TEAM_LOGOS.geng, boost: true },
]

export function PlayerListPage({ onNavigate }: Props) {
  const { players, togglePlayer, reset } = useFollowSelectionsStore()

  const ordered = useMemo(() => {
    const selected = players
      .map((s) => MOCK_PLAYERS.find((i) => i.target_id === s.target_id))
      .filter((i): i is FollowTargetItem => i !== undefined)
    const unselected = MOCK_PLAYERS.filter((i) => !players.some((s) => s.target_id === i.target_id))
    return [...selected, ...unselected]
  }, [players])

  const handleDone = () => {
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <FollowPageLayout
      title="Back Your Player"
      subtitle="Follow your favorite Players"
      currentStep={2}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onNext={handleDone}
      nextLabel="Done"
    >
      {ordered.map((item) => {
        const selectedIndex = players.findIndex((s) => s.target_id === item.target_id)
        return (
          <FollowCard
            key={item.target_id}
            item={item}
            selected={selectedIndex >= 0}
            order={selectedIndex >= 0 ? selectedIndex + 1 : undefined}
            variant="player"
            onToggle={() => togglePlayer(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
