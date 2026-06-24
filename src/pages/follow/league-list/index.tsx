import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowLeagueItem,
} from '../../../features/follow/model/store'
import { AppHeader } from '../../../features/follow/ui/AppHeader'
import { SearchButton } from '../../../features/follow/ui/SearchButton'
import { StepBottom } from '../../../features/follow/ui/StepBottom'
import { SelectNum } from '../../../features/follow/ui/SelectNum'
import { BoostTag } from '../../../features/follow/ui/BoostTag'
import { LEAGUE_LOGO } from '../../../features/follow/ui/assets'

interface Props {
  onNavigate: (page: string) => void
}

const MOCK_LEAGUES: FollowLeagueItem[] = [
  {
    target_id: 'lck',
    name: 'LCK',
    description: 'League of Legends Champions Korea',
    logoUrl: LEAGUE_LOGO.lck,
    hasBoost: true,
  },
  {
    target_id: 'lpl',
    name: 'LPL',
    description: 'League of Legends Pro League',
    logoUrl: LEAGUE_LOGO.lpl,
    hasBoost: true,
  },
  {
    target_id: 'vcs',
    name: 'VCS',
    description: 'Vietnam Championship Series',
    logoUrl: LEAGUE_LOGO.vcs,
    hasBoost: true,
  },
  {
    target_id: 'msi',
    name: 'MSI',
    description: 'Mid-Season Invitational',
    logoUrl: LEAGUE_LOGO.msi,
    hasBoost: true,
  },
  {
    target_id: 'lec',
    name: 'LEC',
    description: 'League of Legends EMEA Championship',
    logoUrl: LEAGUE_LOGO.lec,
  },
  {
    target_id: 'cblol',
    name: 'CBLOL',
    description: 'Circuit Brazilian League of Legends',
    logoUrl: LEAGUE_LOGO.cblol,
  },
  {
    target_id: 'lla',
    name: 'LLA',
    description: 'League of Legends in Hispanic America',
    logoUrl: LEAGUE_LOGO.lla,
  },
  {
    target_id: 'pcs',
    name: 'PCS',
    description: 'Pacific Championship Series',
    logoUrl: LEAGUE_LOGO.lla,
  },
  {
    target_id: 'lcs',
    name: 'LCS',
    description: 'League of Legends Championship Series',
    logoUrl: LEAGUE_LOGO.lla,
  },
  {
    target_id: 'cbl',
    name: 'CBL',
    description: 'Continental Brazilian League',
    logoUrl: LEAGUE_LOGO.lla,
    hasBoost: true,
  },
]

export function LeagueListPage({ onNavigate }: Props) {
  const { leagues, toggleLeague } = useFollowSelectionsStore()
  const orderedIds = leagues.map((l) => l.target_id)
  const selected = orderedIds
    .map((id) => MOCK_LEAGUES.find((i) => i.target_id === id))
    .filter((i): i is FollowLeagueItem => i !== undefined)
  const unselected = MOCK_LEAGUES.filter((i) => !orderedIds.includes(i.target_id))
  const display = [...selected, ...unselected]

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="flex-1 min-h-0 bg-[#f0f2f5] rounded-[16px] relative overflow-hidden w-full">
        <div className="flex-1 flex flex-col gap-[16px] h-full pt-[12px] pb-[70px] px-[16px] overflow-y-auto">
          <div className="flex flex-col gap-[4px] h-[68px] w-[215px] shrink-0">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black">
              Back Your League
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
              Follow your favorite Leagues
            </p>
          </div>
          {display.map((item) => {
            const isSelected = orderedIds.includes(item.target_id)
            const order = isSelected ? orderedIds.indexOf(item.target_id) + 1 : 0
            return (
              <button
                type="button"
                key={item.target_id}
                onClick={() => toggleLeague(item)}
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
                  <div className="flex flex-1 flex-col gap-[4px] items-start justify-center min-w-0">
                    {item.hasBoost && <BoostTag />}
                    <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-none truncate w-full">
                      {item.name}
                    </p>
                    <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#757b90] leading-[1.2] truncate w-full">
                      {item.description}
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
          currentStep={0}
          onPrev={() => onNavigate(PAGES.MAIN)}
          onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
        />
      </div>
    </div>
  )
}
