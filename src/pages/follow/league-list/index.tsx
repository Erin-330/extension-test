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

const MOCK_LEAGUES: (FollowTargetItem & { boost: boolean })[] = [
  { target_id: 'lck', name: 'LCK', description: 'League of Legends Champions Korea', logoUrl: ASSETS.leagueLCK, boost: true },
  { target_id: 'lpl', name: 'LPL', description: 'League of Legends Pro League', logoUrl: ASSETS.leagueLPL, boost: true },
  { target_id: 'vcs', name: 'VCS', description: 'Vietnam Championship Series', logoUrl: ASSETS.leagueVCS, boost: true },
  { target_id: 'msi', name: 'MSI', description: 'Mid-Season Invitational', logoUrl: ASSETS.leagueMSI, boost: true },
  { target_id: 'lec', name: 'LEC', description: 'League of Legends EMEA Championship', logoUrl: ASSETS.leagueLEC, boost: false },
  { target_id: 'cblol', name: 'CBLOL', description: 'Circuit Brazilian League of Legends', logoUrl: ASSETS.leagueCBLOL, boost: false },
  { target_id: 'lla', name: 'LLA', description: 'League of Legends in Hispanic America', logoUrl: ASSETS.leagueLLA, boost: false },
  { target_id: 'lla2', name: 'LLA', description: 'League of Legends in Hispanic America', logoUrl: ASSETS.leagueLLA, boost: false },
  { target_id: 'lla3', name: 'LLA', description: 'League of Legends in Hispanic America', logoUrl: ASSETS.leagueLLA, boost: false },
  { target_id: 'lla4', name: 'LLA', description: 'League of Legends in Hispanic America', logoUrl: ASSETS.leagueLLA, boost: true },
]

export function LeagueListPage({ onNavigate }: Props) {
  const { leagues, toggleLeague } = useFollowSelectionsStore()
  const orderedIds = leagues.map((l) => l.target_id)
  const selected = orderedIds
    .map((id) => MOCK_LEAGUES.find((i) => i.target_id === id))
    .filter((i): i is (typeof MOCK_LEAGUES)[number] => Boolean(i))
  const unselected = MOCK_LEAGUES.filter((i) => !orderedIds.includes(i.target_id))
  const list = [...selected, ...unselected]

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px] font-['Pretendard',sans-serif]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="relative flex-1 min-h-0 w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden">
        <div className="h-full overflow-y-auto pt-[12px] px-[16px] pb-[70px] flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[4px] w-full pr-[40px] shrink-0">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black whitespace-nowrap">
              Back Your League
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
              Follow your favorite Leagues
            </p>
          </div>
          {list.map((league) => {
            const idx = orderedIds.indexOf(league.target_id)
            const isSelected = idx >= 0
            return (
              <button
                key={league.target_id}
                onClick={() => toggleLeague(league)}
                className={`flex h-[68px] w-full rounded-[8px] bg-white shrink-0 overflow-hidden text-left ${isSelected ? 'border-2 border-[#209fee]' : 'shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'}`}
              >
                <div className="flex flex-1 min-w-0 gap-[12px] h-full items-center px-[12px]">
                  <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
                    <div className="relative w-[28px] h-[28px] overflow-hidden">
                      <img src={league.logoUrl} className="shrink-0 w-[28px] h-[28px] object-contain" alt="" />
                    </div>
                  </div>
                  <div className="flex flex-1 min-w-0 flex-col gap-[4px] justify-center">
                    {league.boost && <BoostTag />}
                    <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none overflow-hidden text-ellipsis whitespace-nowrap">
                      {league.name}
                    </p>
                    <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#757b90] leading-[1.2] overflow-hidden text-ellipsis whitespace-nowrap">
                      {league.description}
                    </p>
                  </div>
                </div>
                <SelectNum selected={isSelected} index={isSelected ? idx + 1 : undefined} />
              </button>
            )
          })}
        </div>
        <SearchButton />
        <StepIndicator currentStep={0} onNext={() => onNavigate(PAGES.FOLLOW_TEAM)} />
      </div>
    </div>
  )
}
