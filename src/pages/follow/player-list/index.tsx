import { PAGES } from '../../../shared/constants/pages'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'
import type { FollowTargetItem } from '../../../features/follow/model/types'
import { ASSETS } from '../../../features/follow/ui/assets'
import { AppHeader } from '../../../features/follow/ui/AppHeader'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
import { SearchButton } from '../../../features/follow/ui/SearchButton'
import { BoostTag } from '../../../features/follow/ui/BoostTag'
import { SelectNum } from '../../../features/follow/ui/SelectNum'

interface Props {
  onNavigate: (page: string) => void
}

interface PlayerItem extends FollowTargetItem {
  boost: boolean
  fullName: string
  teamLogoUrl: string
}

const MOCK_PLAYERS: PlayerItem[] = [
  { target_id: 'doran', name: 'Doran', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamT1, boost: true },
  { target_id: 'faker', name: 'Faker', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamT1, boost: true },
  { target_id: 'keria', name: 'Keria', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamT1, boost: true },
  { target_id: 'oner', name: 'Oner', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamT1, boost: true },
  { target_id: 'perfect', name: 'PerfecT', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamKT, boost: false },
  { target_id: 'bdd', name: 'Bdd', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamKT, boost: false },
  { target_id: 'cuzz', name: 'Cuzz', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamKT, boost: false },
  { target_id: 'aiming', name: 'Aiming', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamKT, boost: false },
  { target_id: 'ghost', name: 'Ghost', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamKT, boost: false },
  { target_id: 'canyon', name: 'Canyon', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamGenG, boost: true },
  { target_id: 'raiad', name: 'Raiad', description: '', fullName: 'fullName', logoUrl: ASSETS.playerImage, teamLogoUrl: ASSETS.teamGenG, boost: true },
]

export function PlayerListPage({ onNavigate }: Props) {
  const { players, togglePlayer, reset } = useFollowSelectionsStore()
  const orderedIds = players.map((p) => p.target_id)
  const selected = orderedIds
    .map((id) => MOCK_PLAYERS.find((i) => i.target_id === id))
    .filter((i): i is PlayerItem => Boolean(i))
  const unselected = MOCK_PLAYERS.filter((i) => !orderedIds.includes(i.target_id))
  const list = [...selected, ...unselected]

  const handleDone = () => {
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px] font-['Pretendard',sans-serif]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="relative flex-1 min-h-0 w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden">
        <div className="h-full overflow-y-auto pt-[16px] px-[16px] pb-[70px] flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[4px] w-full pr-[40px] shrink-0">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black whitespace-nowrap">
              Follow Players
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
              Select players to follow
            </p>
          </div>
          {list.map((player) => {
            const idx = orderedIds.indexOf(player.target_id)
            const isSelected = idx >= 0
            return (
              <button
                key={player.target_id}
                onClick={() => togglePlayer(player)}
                className={`flex h-[68px] w-full rounded-[8px] bg-white shrink-0 overflow-hidden text-left ${isSelected ? 'border-2 border-[#209fee]' : 'shadow-[0px_1px_2px_rgba(0,0,0,0.1)]'}`}
              >
                <div className="flex flex-1 min-w-0 gap-[12px] h-full items-center px-[12px]">
                  <div className="flex items-center justify-center p-[2px] shrink-0">
                    <div className="bg-[#4e4743] overflow-hidden rounded-full w-[28px] h-[28px] relative">
                      <img src={player.logoUrl} className="shrink-0 w-[28px] h-[28px] object-cover" alt="" />
                    </div>
                  </div>
                  <div className="flex flex-1 min-w-0 flex-col gap-[4px] justify-center">
                    {player.boost && <BoostTag />}
                    <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-black overflow-hidden text-ellipsis whitespace-nowrap">
                      {player.name}
                    </p>
                    <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#757b90] overflow-hidden text-ellipsis whitespace-nowrap">
                      {player.fullName}
                    </p>
                  </div>
                  <img src={player.teamLogoUrl} className="shrink-0 w-[20px] h-[20px] object-contain" alt="" />
                </div>
                <SelectNum selected={isSelected} index={isSelected ? idx + 1 : undefined} />
              </button>
            )
          })}
        </div>
        <SearchButton />
        <StepIndicator
          currentStep={2}
          onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
          onDone={handleDone}
        />
      </div>
    </div>
  )
}
