import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { BoostTag } from '../../../features/follow/ui/BoostTag'
import { SelectNum } from '../../../features/follow/ui/SelectNum'
import { LEAGUE_LOGOS } from '../../../features/follow/ui/assets'
import { useFollowSelectionsStore, type FollowTargetItem } from '../../../features/follow/model/store/followSelectionsStore'

type Props = { onNavigate: (page: string) => void }

const MOCK_LEAGUES: FollowTargetItem[] = [
  { target_id: 'lck', name: 'LCK', sub: 'League of Legends Champions Korea', logo: LEAGUE_LOGOS.lck.url, logoInset: LEAGUE_LOGOS.lck.inset, boost: true },
  { target_id: 'lpl', name: 'LPL', sub: 'League of Legends Pro League', logo: LEAGUE_LOGOS.lpl.url, logoInset: LEAGUE_LOGOS.lpl.inset, boost: true },
  { target_id: 'vcs', name: 'VCS', sub: 'Vietnam Championship Series', logo: LEAGUE_LOGOS.vcs.url, logoInset: LEAGUE_LOGOS.vcs.inset, boost: true },
  { target_id: 'msi', name: 'MSI', sub: 'Mid-Season Invitational', logo: LEAGUE_LOGOS.msi.url, logoInset: LEAGUE_LOGOS.msi.inset, boost: true },
  { target_id: 'lec', name: 'LEC', sub: 'League of Legends EMEA Championship', logo: LEAGUE_LOGOS.lec.url, logoInset: LEAGUE_LOGOS.lec.inset },
  { target_id: 'cblol', name: 'CBLOL', sub: 'Circuit Brazilian League of Legends', logo: LEAGUE_LOGOS.cblol.url, logoInset: LEAGUE_LOGOS.cblol.inset },
  { target_id: 'lla', name: 'LLA', sub: 'League of Legends in Hispanic America', logo: LEAGUE_LOGOS.lla.url, logoInset: LEAGUE_LOGOS.lla.inset },
  { target_id: 'pcs', name: 'PCS', sub: 'Pacific Championship Series', logo: LEAGUE_LOGOS.lla.url, logoInset: LEAGUE_LOGOS.lla.inset },
  { target_id: 'ljl', name: 'LJL', sub: 'League of Legends Japan League', logo: LEAGUE_LOGOS.lla.url, logoInset: LEAGUE_LOGOS.lla.inset },
  { target_id: 'cl', name: 'CL', sub: 'Challengers League', logo: LEAGUE_LOGOS.lla.url, logoInset: LEAGUE_LOGOS.lla.inset, boost: true },
]

function LeagueRow({ item, selected, order, onClick }: { item: FollowTargetItem; selected: boolean; order?: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-white flex gap-[4px] h-[68px] items-start relative rounded-[8px] shrink-0 w-full text-left overflow-clip ${
        selected ? 'border-2 border-[#209fee] border-solid' : 'drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]'
      }`}
    >
      <div className="flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px px-[12px] relative">
        <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
          <div className="relative shrink-0 w-[28px] h-[28px] overflow-clip">
            {item.logo && (
              <div className={`absolute ${item.logoInset ?? 'inset-0'}`}>
                <img alt="" src={item.logo} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px">
          {item.boost && <BoostTag />}
          <p className="font-['Pretendard',sans-serif] font-bold leading-none text-[20px] text-black whitespace-nowrap overflow-hidden text-ellipsis w-full">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-[#757b90] whitespace-nowrap overflow-hidden text-ellipsis w-full">
            {item.sub}
          </p>
        </div>
      </div>
      <SelectNum selected={selected} order={order} />
    </button>
  )
}

export function LeagueListPage({ onNavigate }: Props) {
  const { leagues, toggleLeague } = useFollowSelectionsStore()
  const selectedIds = leagues.map((l) => l.target_id)

  const orderedItems = useMemo(() => {
    const selected = leagues
      .map((l) => MOCK_LEAGUES.find((m) => m.target_id === l.target_id))
      .filter((m): m is FollowTargetItem => !!m)
    const unselected = MOCK_LEAGUES.filter((m) => !selectedIds.includes(m.target_id))
    return [...selected, ...unselected]
  }, [leagues, selectedIds])

  return (
    <FollowPageLayout
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      currentStep={0}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
    >
      {orderedItems.map((item) => {
        const orderIdx = selectedIds.indexOf(item.target_id)
        return (
          <LeagueRow
            key={item.target_id}
            item={item}
            selected={orderIdx >= 0}
            order={orderIdx >= 0 ? orderIdx + 1 : undefined}
            onClick={() => toggleLeague(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
