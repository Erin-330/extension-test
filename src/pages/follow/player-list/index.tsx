import { PAGES } from '../../../shared/constants/pages'
import { AppHeader } from '../../../features/follow/ui/AppHeader'
import { SearchButton } from '../../../features/follow/ui/SearchButton'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
import { PlayerCard } from '../../../features/follow/ui/PlayerCard'
import { TEAM_LOGOS } from '../../../features/follow/ui/assets'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

type Props = { onNavigate: (page: string) => void }

const MOCK_PLAYERS: FollowTargetItem[] = [
  { target_id: 'doran', name: 'Doran', description: 'fullName', hasBoost: true, asset: '', teamLogo: TEAM_LOGOS.T1 },
  { target_id: 'faker', name: 'Faker', description: 'fullName', hasBoost: true, asset: '', teamLogo: TEAM_LOGOS.T1 },
  { target_id: 'keria', name: 'Keria', description: 'fullName', hasBoost: true, asset: '', teamLogo: TEAM_LOGOS.T1 },
  { target_id: 'oner', name: 'Oner', description: 'fullName', hasBoost: true, asset: '', teamLogo: TEAM_LOGOS.T1 },
  { target_id: 'perfect', name: 'PerfecT', description: 'fullName', asset: '', teamLogo: TEAM_LOGOS.KT },
  { target_id: 'bdd', name: 'Bdd', description: 'fullName', asset: '', teamLogo: TEAM_LOGOS.KT },
  { target_id: 'cuzz', name: 'Cuzz', description: 'fullName', asset: '', teamLogo: TEAM_LOGOS.KT },
  { target_id: 'aiming', name: 'Aiming', description: 'fullName', asset: '', teamLogo: TEAM_LOGOS.KT },
  { target_id: 'ghost', name: 'Ghost', description: 'fullName', asset: '', teamLogo: TEAM_LOGOS.KT },
  { target_id: 'canyon', name: 'Canyon', description: 'fullName', hasBoost: true, asset: '', teamLogo: TEAM_LOGOS.GENG },
  { target_id: 'raiad', name: 'Raiad', description: 'fullName', hasBoost: true, asset: '', teamLogo: TEAM_LOGOS.GENG },
]

export function PlayerListPage({ onNavigate }: Props) {
  const { players, togglePlayer, reset } = useFollowSelectionsStore()

  const orderedIds = players.map((p) => p.target_id)
  const selectedItems = orderedIds
    .map((id) => MOCK_PLAYERS.find((i) => i.target_id === id))
    .filter((i): i is FollowTargetItem => i !== undefined)
  const unselected = MOCK_PLAYERS.filter((i) => !orderedIds.includes(i.target_id))
  const ordered = [...selectedItems, ...unselected]

  const handleDone = () => {
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-start min-w-px overflow-y-auto pb-[70px] pt-[16px] px-[16px] relative">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] text-[24px] text-black whitespace-nowrap w-full">
              Back Your Player
            </p>
            <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black w-full">
              Follow your favorite Players
            </p>
          </div>
          {ordered.map((item) => {
            const selectedIdx = orderedIds.indexOf(item.target_id)
            return (
              <PlayerCard
                key={item.target_id}
                item={item}
                selected={selectedIdx !== -1}
                selectedNum={selectedIdx !== -1 ? selectedIdx + 1 : undefined}
                onClick={() => togglePlayer(item)}
              />
            )
          })}
        </div>
        <SearchButton />
        <StepIndicator
          currentStep={2}
          onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
          onNext={handleDone}
          doneLabel="Done"
        />
      </div>
    </div>
  )
}
