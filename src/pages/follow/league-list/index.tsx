import { PAGES } from '../../../shared/constants/pages'
import { FollowListShell } from '../../../features/follow/ui/FollowListShell'
import { SelectNum } from '../../../features/follow/ui/SelectNum'
import { BoostTag } from '../../../features/follow/ui/BoostTag'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'

type Props = {
  onNavigate: (page: string) => void
}

type LeagueItem = {
  target_id: string
  shortName: string
  fullName: string
  logoUrl: string
  logoInset?: string
  boost?: boolean
  cover?: boolean
}

const MOCK_LEAGUES: LeagueItem[] = [
  {
    target_id: 'LCK',
    shortName: 'LCK',
    fullName: 'League of Legends Champions Korea',
    logoUrl: 'https://www.figma.com/api/mcp/asset/7832cd69-2770-45c6-a228-3e373431e316',
    logoInset: '15%_0_14.65%_0',
    boost: true,
  },
  {
    target_id: 'LPL',
    shortName: 'LPL',
    fullName: 'League of Legends Pro League',
    logoUrl: 'https://www.figma.com/api/mcp/asset/c88e19b5-0e8b-4536-a4d2-aa1a54035c87',
    logoInset: '19.65%_0_20.29%_0',
    boost: true,
  },
  {
    target_id: 'VCS',
    shortName: 'VCS',
    fullName: 'Vietnam Championship Series',
    logoUrl: 'https://www.figma.com/api/mcp/asset/792b87b1-2a26-45d1-8ccd-f766f22bf063',
    logoInset: '0_-180.85%_0_1%',
    boost: true,
    cover: true,
  },
  {
    target_id: 'MSI',
    shortName: 'MSI',
    fullName: 'Mid-Season Invitational',
    logoUrl: 'https://www.figma.com/api/mcp/asset/803d1403-5c72-4e1b-a65a-0869e974f281',
    logoInset: '6.31%_9%_5.69%_9%',
    boost: true,
    cover: true,
  },
  {
    target_id: 'LEC',
    shortName: 'LEC',
    fullName: 'League of Legends EMEA Championship',
    logoUrl: 'https://www.figma.com/api/mcp/asset/bbc1cb92-0cc4-4ce0-98c0-0fbe9e7af9e7',
    logoInset: '1%',
    cover: true,
  },
  {
    target_id: 'CBLOL',
    shortName: 'CBLOL',
    fullName: 'Circuit Brazilian League of Legends',
    logoUrl: 'https://www.figma.com/api/mcp/asset/58ac73fb-affa-44b9-a3b1-f69b638238da',
    logoInset: '1%',
    cover: true,
  },
  {
    target_id: 'LLA',
    shortName: 'LLA',
    fullName: 'League of Legends in Hispanic America',
    logoUrl: 'https://www.figma.com/api/mcp/asset/6772e93b-6d34-44a4-853f-65d7c05efe74',
    logoInset: '17%_0_17.48%_0',
    cover: true,
  },
  {
    target_id: 'LCO',
    shortName: 'LCO',
    fullName: 'League of Legends Circuit Oceania',
    logoUrl: 'https://www.figma.com/api/mcp/asset/6772e93b-6d34-44a4-853f-65d7c05efe74',
    logoInset: '17%_0_17.48%_0',
    cover: true,
  },
  {
    target_id: 'PCS',
    shortName: 'PCS',
    fullName: 'Pacific Championship Series',
    logoUrl: 'https://www.figma.com/api/mcp/asset/6772e93b-6d34-44a4-853f-65d7c05efe74',
    logoInset: '17%_0_17.48%_0',
    cover: true,
    boost: true,
  },
]

function LeagueCard({
  league,
  selectedIndex,
  onToggle,
}: {
  league: LeagueItem
  selectedIndex: number
  onToggle: () => void
}) {
  const isSelected = selectedIndex > 0
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`bg-white flex gap-[4px] h-[68px] items-start relative rounded-[8px] shrink-0 w-full text-left ${isSelected ? 'border-2 border-[#209fee] overflow-clip' : 'drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'}`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-px px-[12px] relative">
        <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
          <div
            className={`relative shrink-0 size-[28px] ${league.cover ? 'overflow-clip' : ''}`}
          >
            <div
              className="absolute"
              style={{ inset: league.logoInset?.replace(/_/g, ' ') ?? '0' }}
            >
              <img
                alt=""
                className={`absolute inset-0 max-w-none size-full ${league.cover ? 'object-cover pointer-events-none' : 'block'}`}
                src={league.logoUrl}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px] items-start justify-center min-w-px">
          {league.boost && <BoostTag />}
          <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-[normal] overflow-hidden text-ellipsis w-full whitespace-nowrap">
            {league.shortName}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[#757b90] text-[12px] leading-[1.2] overflow-hidden text-ellipsis w-full whitespace-nowrap">
            {league.fullName}
          </p>
        </div>
      </div>
      <SelectNum selected={isSelected} index={isSelected ? selectedIndex : undefined} />
    </button>
  )
}

export function LeagueListPage({ onNavigate }: Props) {
  const leagues = useFollowSelectionsStore((s) => s.leagues)
  const toggle = useFollowSelectionsStore((s) => s.toggleLeague)
  const orderedIds = leagues.map((l) => l.target_id)

  const selected = orderedIds
    .map((id) => MOCK_LEAGUES.find((l) => l.target_id === id))
    .filter((l): l is LeagueItem => Boolean(l))
  const unselected = MOCK_LEAGUES.filter((l) => !orderedIds.includes(l.target_id))
  const ordered = [...selected, ...unselected]

  return (
    <FollowListShell
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      currentStep={0}
      onClose={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
    >
      {ordered.map((league) => {
        const idx = orderedIds.indexOf(league.target_id) + 1
        return (
          <LeagueCard
            key={league.target_id}
            league={league}
            selectedIndex={idx}
            onToggle={() => toggle({ target_id: league.target_id })}
          />
        )
      })}
    </FollowListShell>
  )
}
