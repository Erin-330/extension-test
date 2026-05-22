import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { PlayerItemCard, type PlayerItem } from '../../../features/follow/ui/PlayerItemCard'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'

interface PlayerListPageProps {
  onNavigate: (page: string) => void
}

const MOCK_PLAYERS: PlayerItem[] = [
  { target_id: 'doran', gameNick: 'Doran', fullName: 'Choi Hyeon-joon', team: 't1', hasBoost: true },
  { target_id: 'faker', gameNick: 'Faker', fullName: 'Lee Sang-hyeok', team: 't1', hasBoost: true },
  { target_id: 'keria', gameNick: 'Keria', fullName: 'Ryu Min-seok', team: 't1', hasBoost: true },
  { target_id: 'oner', gameNick: 'Oner', fullName: 'Mun Hyeon-jun', team: 't1', hasBoost: true },
  { target_id: 'perfect', gameNick: 'PerfecT', fullName: 'Lee Seung-min', team: 'kt' },
  { target_id: 'bdd', gameNick: 'Bdd', fullName: 'Gwak Bo-seong', team: 'kt' },
  { target_id: 'cuzz', gameNick: 'Cuzz', fullName: 'Moon Woo-chan', team: 'kt' },
  { target_id: 'aiming', gameNick: 'Aiming', fullName: 'Kim Ha-ram', team: 'kt' },
  { target_id: 'ghost', gameNick: 'Ghost', fullName: 'Jang Yong-jun', team: 'kt' },
  { target_id: 'canyon', gameNick: 'Canyon', fullName: 'Kim Geon-bu', team: 'geng', hasBoost: true },
  { target_id: 'raiad', gameNick: 'Raiad', fullName: 'Tristan Schrage', team: 'geng', hasBoost: true },
]

export function PlayerListPage({ onNavigate }: PlayerListPageProps) {
  const { players, togglePlayer, reset } = useFollowSelectionsStore()

  const orderedItems = useMemo(() => {
    const selectedIds = players.map((p) => p.target_id)
    const selected = selectedIds
      .map((id) => MOCK_PLAYERS.find((i) => i.target_id === id))
      .filter((i): i is PlayerItem => i !== undefined)
    const unselected = MOCK_PLAYERS.filter((i) => !selectedIds.includes(i.target_id))
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
      nextLabel="done"
    >
      {orderedItems.map((item) => {
        const order = players.findIndex((p) => p.target_id === item.target_id)
        return (
          <PlayerItemCard
            key={item.target_id}
            item={item}
            selected={order >= 0}
            order={order + 1}
            onClick={() =>
              togglePlayer({
                target_id: item.target_id,
                name: item.gameNick,
                description: item.fullName,
                imageUrl: '',
              })
            }
          />
        )
      })}
    </FollowPageLayout>
  )
}
