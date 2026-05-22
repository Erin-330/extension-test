import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { BoostTag } from '../../../features/follow/ui/BoostTag'
import { SelectNum } from '../../../features/follow/ui/SelectNum'
import { TEAM_LOGOS } from '../../../features/follow/ui/assets'
import { useFollowSelectionsStore, type FollowTargetItem } from '../../../features/follow/model/store/followSelectionsStore'

type Props = { onNavigate: (page: string) => void }

const MOCK_TEAMS: FollowTargetItem[] = [
  { target_id: 't1', name: 'T1', logo: TEAM_LOGOS.t1.url, logoInset: TEAM_LOGOS.t1.inset, boost: true },
  { target_id: 'kt', name: 'KT Rollster', logo: TEAM_LOGOS.kt.url, logoInset: TEAM_LOGOS.kt.inset, boost: true },
  { target_id: 'geng', name: 'GEN G', logo: TEAM_LOGOS.geng.url, logoInset: TEAM_LOGOS.geng.inset },
  { target_id: 'hanwha', name: 'Hanwha Life Esports', logo: TEAM_LOGOS.hanwha.url, logoInset: TEAM_LOGOS.hanwha.inset },
  { target_id: 'dplus', name: 'Dplus KIA', logo: TEAM_LOGOS.dplus.url, logoInset: TEAM_LOGOS.dplus.inset },
  { target_id: 'weibo1', name: 'Weibo Gaming', logo: TEAM_LOGOS.weibo.url, logoInset: TEAM_LOGOS.weibo.inset },
  { target_id: 'weibo2', name: 'Bilibili Gaming', logo: TEAM_LOGOS.weibo.url, logoInset: TEAM_LOGOS.weibo.inset },
  { target_id: 'weibo3', name: 'JD Gaming', logo: TEAM_LOGOS.weibo.url, logoInset: TEAM_LOGOS.weibo.inset },
  { target_id: 'weibo4', name: 'TES', logo: TEAM_LOGOS.weibo.url, logoInset: TEAM_LOGOS.weibo.inset, boost: true },
]

function TeamRow({ item, selected, order, onClick }: { item: FollowTargetItem; selected: boolean; order?: number; onClick: () => void }) {
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
              <div className={`absolute ${item.logoInset ?? 'inset-0'} overflow-clip`}>
                <img alt="" src={item.logo} className="absolute inset-0 w-full h-full object-contain" />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px">
          {item.boost && <BoostTag />}
          <p className="font-['Pretendard',sans-serif] font-bold leading-none text-[20px] text-black whitespace-nowrap overflow-hidden text-ellipsis w-full">
            {item.name}
          </p>
        </div>
      </div>
      <SelectNum selected={selected} order={order} />
    </button>
  )
}

export function TeamListPage({ onNavigate }: Props) {
  const { teams, toggleTeam } = useFollowSelectionsStore()
  const selectedIds = teams.map((t) => t.target_id)

  const orderedItems = useMemo(() => {
    const selected = teams
      .map((t) => MOCK_TEAMS.find((m) => m.target_id === t.target_id))
      .filter((m): m is FollowTargetItem => !!m)
    const unselected = MOCK_TEAMS.filter((m) => !selectedIds.includes(m.target_id))
    return [...selected, ...unselected]
  }, [teams, selectedIds])

  return (
    <FollowPageLayout
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      currentStep={1}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
    >
      {orderedItems.map((item) => {
        const orderIdx = selectedIds.indexOf(item.target_id)
        return (
          <TeamRow
            key={item.target_id}
            item={item}
            selected={orderIdx >= 0}
            order={orderIdx >= 0 ? orderIdx + 1 : undefined}
            onClick={() => toggleTeam(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
