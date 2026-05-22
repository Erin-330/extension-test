import { PAGES } from '../../../shared/constants/pages'
import { FollowListShell } from '../../../features/follow/ui/FollowListShell'
import { SelectNum } from '../../../features/follow/ui/SelectNum'
import { BoostTag } from '../../../features/follow/ui/BoostTag'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'

type Props = {
  onNavigate: (page: string) => void
}

type PlayerItem = {
  target_id: string
  name: string
  fullName: string
  teamLogoUrl: string
  teamLogoInset: string
  boost?: boolean
}

const imgPlayerImage = 'https://www.figma.com/api/mcp/asset/2b3e90bf-d54c-4094-9fd3-07f5ba756eb8'

const T1_LOGO = 'https://www.figma.com/api/mcp/asset/4da32c03-7f10-4dea-989e-f9c22c0a20a8'
const KT_LOGO = 'https://www.figma.com/api/mcp/asset/9820cfd5-2405-41a6-915b-2159740012cb'
const GENG_LOGO = 'https://www.figma.com/api/mcp/asset/2237b027-0abc-4582-974b-c63caec264fe'

const MOCK_PLAYERS: PlayerItem[] = [
  {
    target_id: 'doran',
    name: 'Doran',
    fullName: 'Choi Hyeon-joon',
    teamLogoUrl: T1_LOGO,
    teamLogoInset: '30%_0_29.57%_0',
    boost: true,
  },
  {
    target_id: 'faker',
    name: 'Faker',
    fullName: 'Lee Sang-hyeok',
    teamLogoUrl: T1_LOGO,
    teamLogoInset: '30%_0_29.57%_0',
    boost: true,
  },
  {
    target_id: 'keria',
    name: 'Keria',
    fullName: 'Ryu Min-seok',
    teamLogoUrl: T1_LOGO,
    teamLogoInset: '30%_0_29.57%_0',
    boost: true,
  },
  {
    target_id: 'oner',
    name: 'Oner',
    fullName: 'Moon Hyeon-jun',
    teamLogoUrl: T1_LOGO,
    teamLogoInset: '30%_0_29.57%_0',
    boost: true,
  },
  {
    target_id: 'perfect',
    name: 'PerfecT',
    fullName: 'Lee Seung-min',
    teamLogoUrl: KT_LOGO,
    teamLogoInset: '20%_19.17%_16.67%_18.33%',
  },
  {
    target_id: 'bdd',
    name: 'Bdd',
    fullName: 'Gwak Bo-seong',
    teamLogoUrl: KT_LOGO,
    teamLogoInset: '20%_19.17%_16.67%_18.33%',
  },
  {
    target_id: 'cuzz',
    name: 'Cuzz',
    fullName: 'Moon Woo-chan',
    teamLogoUrl: KT_LOGO,
    teamLogoInset: '20%_19.17%_16.67%_18.33%',
  },
  {
    target_id: 'aiming',
    name: 'Aiming',
    fullName: 'Kim Ha-ram',
    teamLogoUrl: KT_LOGO,
    teamLogoInset: '20%_19.17%_16.67%_18.33%',
  },
  {
    target_id: 'ghost',
    name: 'Ghost',
    fullName: 'Jang Yong-jun',
    teamLogoUrl: KT_LOGO,
    teamLogoInset: '20%_19.17%_16.67%_18.33%',
  },
  {
    target_id: 'canyon',
    name: 'Canyon',
    fullName: 'Kim Geon-bu',
    teamLogoUrl: GENG_LOGO,
    teamLogoInset: '15%_9.05%_14.89%_9.17%',
    boost: true,
  },
  {
    target_id: 'raiad',
    name: 'Raiad',
    fullName: 'Kim Yong-jin',
    teamLogoUrl: GENG_LOGO,
    teamLogoInset: '15%_9.05%_14.89%_9.17%',
    boost: true,
  },
]

function PlayerCard({
  player,
  selectedIndex,
  onToggle,
}: {
  player: PlayerItem
  selectedIndex: number
  onToggle: () => void
}) {
  const isSelected = selectedIndex > 0
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`bg-white flex gap-[4px] h-[68px] items-center relative rounded-[8px] shrink-0 w-full text-left ${isSelected ? 'border-2 border-[#209fee] overflow-clip' : 'drop-shadow-[0px_1px_2px_rgba(0,0,0,0.1)]'}`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-px px-[12px] relative">
        <div className="flex flex-col items-center justify-center p-[2px] shrink-0">
          <div className="bg-[#4e4743] overflow-clip relative rounded-[40px] shrink-0 size-[28px]">
            <div className="absolute inset-[3.75%_0_-3.75%_0] overflow-clip">
              <div className="absolute blur-[0.75px] inset-[0_-4.17%_-20.83%_-4.17%]">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgPlayerImage}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-px">
          {player.boost && <BoostTag />}
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-black leading-[20px] overflow-hidden text-ellipsis w-full whitespace-nowrap">
            {player.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[#757b90] text-[12px] leading-[1.2] overflow-hidden text-ellipsis w-full whitespace-nowrap">
            {player.fullName}
          </p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute" style={{ inset: player.teamLogoInset.replace(/_/g, ' ') }}>
            <img alt="" className="absolute block inset-0 size-full" src={player.teamLogoUrl} />
          </div>
        </div>
      </div>
      <SelectNum selected={isSelected} index={isSelected ? selectedIndex : undefined} />
    </button>
  )
}

export function PlayerListPage({ onNavigate }: Props) {
  const players = useFollowSelectionsStore((s) => s.players)
  const togglePlayer = useFollowSelectionsStore((s) => s.togglePlayer)
  const reset = useFollowSelectionsStore((s) => s.reset)
  const orderedIds = players.map((p) => p.target_id)

  const selected = orderedIds
    .map((id) => MOCK_PLAYERS.find((p) => p.target_id === id))
    .filter((p): p is PlayerItem => Boolean(p))
  const unselected = MOCK_PLAYERS.filter((p) => !orderedIds.includes(p.target_id))
  const ordered = [...selected, ...unselected]

  const handleSubmitAll = () => {
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <FollowListShell
      title="Back Your Player"
      subtitle="Follow your favorite Players"
      currentStep={2}
      isLast
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onDone={handleSubmitAll}
    >
      {ordered.map((player) => {
        const idx = orderedIds.indexOf(player.target_id) + 1
        return (
          <PlayerCard
            key={player.target_id}
            player={player}
            selectedIndex={idx}
            onToggle={() => togglePlayer({ target_id: player.target_id })}
          />
        )
      })}
    </FollowListShell>
  )
}
