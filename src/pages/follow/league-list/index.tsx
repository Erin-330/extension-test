import { PAGES } from '../../../shared/constants/pages'
import { AppHeader } from '../../../features/follow/ui/AppHeader'
import { SearchButton } from '../../../features/follow/ui/SearchButton'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
import { LeagueCard } from '../../../features/follow/ui/LeagueCard'
import { LEAGUE_LOGOS } from '../../../features/follow/ui/assets'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

type Props = { onNavigate: (page: string) => void }

const MOCK_LEAGUES: FollowTargetItem[] = [
  { target_id: 'lck', name: 'LCK', description: 'League of Legends Champions Korea', hasBoost: true, asset: LEAGUE_LOGOS.LCK },
  { target_id: 'lpl', name: 'LPL', description: 'League of Legends Pro League', hasBoost: true, asset: LEAGUE_LOGOS.LPL },
  { target_id: 'vcs', name: 'VCS', description: 'Vietnam Championship Series', hasBoost: true, asset: LEAGUE_LOGOS.VCS },
  { target_id: 'msi', name: 'MSI', description: 'Mid-Season Invitational', hasBoost: true, asset: LEAGUE_LOGOS.MSI },
  { target_id: 'lec', name: 'LEC', description: 'League of Legends EMEA Championship', asset: LEAGUE_LOGOS.LEC },
  { target_id: 'cblol', name: 'CBLOL', description: 'Circuit Brazilian League of Legends', asset: LEAGUE_LOGOS.CBLOL },
  { target_id: 'lla1', name: 'LEC', description: 'League of Legends in Hispanic America', asset: LEAGUE_LOGOS.LLA },
  { target_id: 'lla2', name: 'LEC', description: 'League of Legends in Hispanic America', asset: LEAGUE_LOGOS.LLA },
  { target_id: 'lla3', name: 'LEC', description: 'League of Legends in Hispanic America', asset: LEAGUE_LOGOS.LLA },
  { target_id: 'lla4', name: 'LEC', description: 'League of Legends in Hispanic America', hasBoost: true, asset: LEAGUE_LOGOS.LLA },
]

export function LeagueListPage({ onNavigate }: Props) {
  const { leagues, toggleLeague } = useFollowSelectionsStore()

  const orderedIds = leagues.map((l) => l.target_id)
  const selectedItems = orderedIds
    .map((id) => MOCK_LEAGUES.find((i) => i.target_id === id))
    .filter((i): i is FollowTargetItem => i !== undefined)
  const unselected = MOCK_LEAGUES.filter((i) => !orderedIds.includes(i.target_id))
  const ordered = [...selectedItems, ...unselected]

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-start min-w-px overflow-y-auto pb-[70px] pt-[12px] px-[16px] relative">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] text-[24px] text-black whitespace-nowrap w-full">
              Back Your League
            </p>
            <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black w-full">
              Follow your favorite Leagues
            </p>
          </div>
          {ordered.map((item) => {
            const selectedIdx = orderedIds.indexOf(item.target_id)
            return (
              <LeagueCard
                key={item.target_id}
                item={item}
                selected={selectedIdx !== -1}
                selectedNum={selectedIdx !== -1 ? selectedIdx + 1 : undefined}
                onClick={() => toggleLeague(item)}
              />
            )
          })}
        </div>
        <SearchButton />
        <StepIndicator currentStep={0} onNext={() => onNavigate(PAGES.FOLLOW_TEAM)} />
      </div>
    </div>
  )
}
