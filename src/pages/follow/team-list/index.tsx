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

const MOCK_TEAMS: (FollowTargetItem & { boost: boolean })[] = [
  { target_id: 't1', name: 'T1', description: '', logoUrl: ASSETS.teamT1, boost: true },
  { target_id: 'kt', name: 'KT Rollster', description: '', logoUrl: ASSETS.teamKT, boost: true },
  { target_id: 'geng', name: 'GEN G', description: '', logoUrl: ASSETS.teamGenG, boost: false },
  { target_id: 'hle', name: 'Hanwha Life Esports', description: '', logoUrl: ASSETS.teamHanwha, boost: false },
  { target_id: 'dk', name: 'Dplus KIA', description: '', logoUrl: ASSETS.teamDplus, boost: false },
  { target_id: 'wbg', name: 'Weibo Gaming', description: '', logoUrl: ASSETS.teamWeibo, boost: false },
  { target_id: 'wbg2', name: 'Weibo Gaming', description: '', logoUrl: ASSETS.teamWeibo, boost: false },
  { target_id: 'wbg3', name: 'Weibo Gaming', description: '', logoUrl: ASSETS.teamWeibo2, boost: false },
  { target_id: 'wbg4', name: 'Weibo Gaming', description: '', logoUrl: ASSETS.teamWeibo2, boost: true },
]

export function TeamListPage({ onNavigate }: Props) {
  const { teams, toggleTeam } = useFollowSelectionsStore()
  const orderedIds = teams.map((t) => t.target_id)
  const selected = orderedIds
    .map((id) => MOCK_TEAMS.find((i) => i.target_id === id))
    .filter((i): i is (typeof MOCK_TEAMS)[number] => Boolean(i))
  const unselected = MOCK_TEAMS.filter((i) => !orderedIds.includes(i.target_id))
  const list = [...selected, ...unselected]

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px] font-['Pretendard',sans-serif]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="relative flex-1 min-h-0 w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden">
        <div className="h-full overflow-y-auto pt-[16px] px-[16px] pb-[70px] flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[4px] w-full pr-[40px] shrink-0">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black whitespace-nowrap">
              Back Your Team
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
              Follow your favorite Teams
            </p>
          </div>
          {list.map((team) => {
            const idx = orderedIds.indexOf(team.target_id)
            const isSelected = idx >= 0
            return (
              <button
                key={team.target_id}
                onClick={() => toggleTeam(team)}
                className={`flex h-[68px] w-full rounded-[8px] bg-white shrink-0 overflow-hidden text-left ${isSelected ? 'border-2 border-[#209fee]' : 'shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'}`}
              >
                <div className="flex flex-1 min-w-0 gap-[12px] h-full items-center px-[12px]">
                  <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
                    <div className="relative w-[28px] h-[28px] overflow-hidden">
                      <img src={team.logoUrl} className="shrink-0 w-[28px] h-[28px] object-contain" alt="" />
                    </div>
                  </div>
                  <div className="flex flex-1 min-w-0 flex-col gap-[4px] justify-center">
                    {team.boost && <BoostTag />}
                    <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none overflow-hidden text-ellipsis whitespace-nowrap">
                      {team.name}
                    </p>
                  </div>
                </div>
                <SelectNum selected={isSelected} index={isSelected ? idx + 1 : undefined} />
              </button>
            )
          })}
        </div>
        <SearchButton />
        <StepIndicator
          currentStep={1}
          onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
          onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
        />
      </div>
    </div>
  )
}
