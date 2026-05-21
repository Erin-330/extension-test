import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowTeamItem,
} from '../../../features/follow/model/store'
import { AppHeader } from '../../../features/follow/ui/AppHeader'
import { SearchButton } from '../../../features/follow/ui/SearchButton'
import { StepBottom } from '../../../features/follow/ui/StepBottom'
import { SelectNum } from '../../../features/follow/ui/SelectNum'
import { BoostTag } from '../../../features/follow/ui/BoostTag'
import { TEAM_LOGO } from '../../../features/follow/ui/assets'

interface Props {
  onNavigate: (page: string) => void
}

const MOCK_TEAMS: FollowTeamItem[] = [
  { target_id: 't1', name: 'T1', logoUrl: TEAM_LOGO.t1, hasBoost: true },
  { target_id: 'kt', name: 'KT Rollster', logoUrl: TEAM_LOGO.kt, hasBoost: true },
  { target_id: 'geng', name: 'GEN G', logoUrl: TEAM_LOGO.geng },
  { target_id: 'hanwha', name: 'Hanwha Life Esports', logoUrl: TEAM_LOGO.hanwha },
  { target_id: 'dplus', name: 'Dplus KIA', logoUrl: TEAM_LOGO.dplus },
  { target_id: 'wbg', name: 'Weibo Gaming', logoUrl: TEAM_LOGO.weibo },
  { target_id: 'blg', name: 'Bilibili Gaming', logoUrl: TEAM_LOGO.weibo },
  { target_id: 'jdg', name: 'JD Gaming', logoUrl: TEAM_LOGO.weiboAlt },
  { target_id: 'tes', name: 'Top Esports', logoUrl: TEAM_LOGO.weiboAlt, hasBoost: true },
  { target_id: 'fpx', name: 'FunPlus Phoenix', logoUrl: TEAM_LOGO.weiboAlt },
]

export function TeamListPage({ onNavigate }: Props) {
  const { teams, toggleTeam } = useFollowSelectionsStore()
  const orderedIds = teams.map((t) => t.target_id)
  const selected = orderedIds
    .map((id) => MOCK_TEAMS.find((i) => i.target_id === id))
    .filter((i): i is FollowTeamItem => i !== undefined)
  const unselected = MOCK_TEAMS.filter((i) => !orderedIds.includes(i.target_id))
  const display = [...selected, ...unselected]

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="flex-1 min-h-0 bg-[#f0f2f5] rounded-[16px] relative overflow-hidden w-full">
        <div className="flex-1 flex flex-col gap-[16px] h-full pt-[16px] pb-[70px] px-[16px] overflow-y-auto">
          <div className="flex flex-col gap-[4px] h-[68px] w-[215px] shrink-0">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black">
              Back Your Team
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
              Follow your favorite Teams
            </p>
          </div>
          {display.map((item) => {
            const isSelected = orderedIds.includes(item.target_id)
            const order = isSelected ? orderedIds.indexOf(item.target_id) + 1 : 0
            return (
              <button
                type="button"
                key={item.target_id}
                onClick={() => toggleTeam(item)}
                className={`bg-white flex gap-[4px] h-[68px] items-start rounded-[8px] w-full shrink-0 text-left overflow-hidden ${
                  isSelected
                    ? 'border-2 border-[#209fee] border-solid'
                    : 'drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'
                }`}
              >
                <div className="flex flex-1 gap-[12px] h-full items-center min-w-0 px-[12px]">
                  <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
                    <div className="relative size-[28px] shrink-0 overflow-clip">
                      <img
                        alt=""
                        className="absolute inset-0 size-full object-contain"
                        src={item.logoUrl}
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-0">
                    {item.hasBoost && <BoostTag />}
                    <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none truncate w-full">
                      {item.name}
                    </p>
                  </div>
                </div>
                <SelectNum selected={isSelected} order={order} />
              </button>
            )
          })}
        </div>
        <SearchButton />
        <StepBottom
          currentStep={1}
          onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
          onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
        />
      </div>
    </div>
  )
}
