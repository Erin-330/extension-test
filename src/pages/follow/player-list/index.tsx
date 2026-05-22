import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { BoostTag } from '../../../features/follow/ui/BoostTag'
import { SelectNum } from '../../../features/follow/ui/SelectNum'
import { PLAYER_AVATAR, TEAM_LOGOS } from '../../../features/follow/ui/assets'
import { useFollowSelectionsStore, type FollowTargetItem } from '../../../features/follow/model/store/followSelectionsStore'

type Props = { onNavigate: (page: string) => void }

const MOCK_PLAYERS: FollowTargetItem[] = [
  { target_id: 'doran', name: 'Doran', sub: 'Choi Hyeon-joon', teamLogo: TEAM_LOGOS.t1.url, teamLogoInset: TEAM_LOGOS.t1.inset, boost: true },
  { target_id: 'faker', name: 'Faker', sub: 'Lee Sang-hyeok', teamLogo: TEAM_LOGOS.t1.url, teamLogoInset: TEAM_LOGOS.t1.inset, boost: true },
  { target_id: 'keria', name: 'Keria', sub: 'Ryu Min-seok', teamLogo: TEAM_LOGOS.t1.url, teamLogoInset: TEAM_LOGOS.t1.inset, boost: true },
  { target_id: 'oner', name: 'Oner', sub: 'Mun Hyeon-jun', teamLogo: TEAM_LOGOS.t1.url, teamLogoInset: TEAM_LOGOS.t1.inset, boost: true },
  { target_id: 'perfect', name: 'PerfecT', sub: 'Lee Cheon-ju', teamLogo: TEAM_LOGOS.kt.url, teamLogoInset: TEAM_LOGOS.kt.inset },
  { target_id: 'bdd', name: 'Bdd', sub: 'Gwak Bo-seong', teamLogo: TEAM_LOGOS.kt.url, teamLogoInset: TEAM_LOGOS.kt.inset },
  { target_id: 'cuzz', name: 'Cuzz', sub: 'Mun Woo-chan', teamLogo: TEAM_LOGOS.kt.url, teamLogoInset: TEAM_LOGOS.kt.inset },
  { target_id: 'aiming', name: 'Aiming', sub: 'Kim Ha-ram', teamLogo: TEAM_LOGOS.kt.url, teamLogoInset: TEAM_LOGOS.kt.inset },
  { target_id: 'ghost', name: 'Ghost', sub: 'Jang Yong-jun', teamLogo: TEAM_LOGOS.kt.url, teamLogoInset: TEAM_LOGOS.kt.inset },
  { target_id: 'canyon', name: 'Canyon', sub: 'Kim Geon-bu', teamLogo: TEAM_LOGOS.geng.url, teamLogoInset: TEAM_LOGOS.geng.inset, boost: true },
  { target_id: 'raiad', name: 'Raiad', sub: 'Park Sang-hyeok', teamLogo: TEAM_LOGOS.geng.url, teamLogoInset: TEAM_LOGOS.geng.inset, boost: true },
]

function PlayerAvatar() {
  return (
    <div className="bg-[#4e4743] overflow-clip relative rounded-full shrink-0 w-[28px] h-[28px]">
      <div className="absolute inset-[3.75%_0_-3.75%_0] overflow-clip">
        <div className="absolute blur-[0.75px] inset-[0_-4.17%_-20.83%_-4.17%]">
          <img alt="" src={PLAYER_AVATAR} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

function PlayerRow({ item, selected, order, onClick }: { item: FollowTargetItem; selected: boolean; order?: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white flex gap-[4px] h-[68px] items-center relative rounded-[8px] shrink-0 w-full text-left overflow-clip ${
        selected ? 'border-2 border-[#209fee] border-solid' : 'drop-shadow-[0px_1px_2px_rgba(0,0,0,0.1)]'
      }`}
    >
      <div className="flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px px-[12px] relative">
        <div className="flex flex-col items-center justify-center p-[2px] shrink-0">
          <PlayerAvatar />
        </div>
        <div className="flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px">
          {item.boost && <BoostTag />}
          <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-black whitespace-nowrap overflow-hidden text-ellipsis w-full">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-[#757b90] whitespace-nowrap overflow-hidden text-ellipsis w-full">
            {item.sub}
          </p>
        </div>
        {item.teamLogo && (
          <div className="overflow-clip relative shrink-0 w-[20px] h-[20px]">
            <div className={`absolute ${item.teamLogoInset ?? 'inset-0'} overflow-clip`}>
              <img alt="" src={item.teamLogo} className="absolute inset-0 w-full h-full object-contain" />
            </div>
          </div>
        )}
      </div>
      <SelectNum selected={selected} order={order} />
    </button>
  )
}

export function PlayerListPage({ onNavigate }: Props) {
  const { players, togglePlayer, reset } = useFollowSelectionsStore()
  const selectedIds = players.map((p) => p.target_id)

  const orderedItems = useMemo(() => {
    const selected = players
      .map((p) => MOCK_PLAYERS.find((m) => m.target_id === p.target_id))
      .filter((m): m is FollowTargetItem => !!m)
    const unselected = MOCK_PLAYERS.filter((m) => !selectedIds.includes(m.target_id))
    return [...selected, ...unselected]
  }, [players, selectedIds])

  const handleSubmitAll = () => {
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <FollowPageLayout
      title="Follow Players"
      subtitle="Select players to follow"
      currentStep={2}
      doneLabel="Done"
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onNext={handleSubmitAll}
    >
      {orderedItems.map((item) => {
        const orderIdx = selectedIds.indexOf(item.target_id)
        return (
          <PlayerRow
            key={item.target_id}
            item={item}
            selected={orderIdx >= 0}
            order={orderIdx >= 0 ? orderIdx + 1 : undefined}
            onClick={() => togglePlayer(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
