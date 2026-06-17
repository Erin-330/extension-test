import { PAGES } from '../../../shared/constants/pages'
import { AppHeader } from '../../../features/follow/ui/AppHeader'
import { SearchButton } from '../../../features/follow/ui/SearchButton'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'
import { TeamCard } from '../../../features/follow/ui/TeamCard'
import { TEAM_LOGOS } from '../../../features/follow/ui/assets'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'

type Props = { onNavigate: (page: string) => void }

const MOCK_TEAMS: FollowTargetItem[] = [
  { target_id: 't1', name: 'T1', description: '', hasBoost: true, asset: TEAM_LOGOS.T1 },
  { target_id: 'kt', name: 'KT Rollster', description: '', hasBoost: true, asset: TEAM_LOGOS.KT },
  { target_id: 'geng', name: 'GEN G', description: '', asset: TEAM_LOGOS.GENG },
  { target_id: 'hle', name: 'Hanwha Life Esports', description: '', asset: TEAM_LOGOS.HLE },
  { target_id: 'dplus', name: 'Dplus KIA', description: '', asset: TEAM_LOGOS.DPLUS },
  { target_id: 'wbg1', name: 'Weibo Gaming', description: '', asset: TEAM_LOGOS.WBG },
  { target_id: 'wbg2', name: 'Weibo Gaming', description: '', asset: TEAM_LOGOS.WBG },
  { target_id: 'wbg3', name: 'Weibo Gaming', description: '', asset: TEAM_LOGOS.WBG_ALT },
  { target_id: 'wbg4', name: 'Weibo Gaming', description: '', hasBoost: true, asset: TEAM_LOGOS.WBG_ALT },
]

export function TeamListPage({ onNavigate }: Props) {
  const { teams, toggleTeam } = useFollowSelectionsStore()

  const orderedIds = teams.map((t) => t.target_id)
  const selectedItems = orderedIds
    .map((id) => MOCK_TEAMS.find((i) => i.target_id === id))
    .filter((i): i is FollowTargetItem => i !== undefined)
  const unselected = MOCK_TEAMS.filter((i) => !orderedIds.includes(i.target_id))
  const ordered = [...selectedItems, ...unselected]

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-start min-w-px overflow-y-auto pb-[70px] pt-[16px] px-[16px] relative">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] text-[24px] text-black whitespace-nowrap w-full">
              Back Your Team
            </p>
            <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black w-full">
              Follow your favorite Teams
            </p>
          </div>
          {ordered.map((item) => {
            const selectedIdx = orderedIds.indexOf(item.target_id)
            return (
              <TeamCard
                key={item.target_id}
                item={item}
                selected={selectedIdx !== -1}
                selectedNum={selectedIdx !== -1 ? selectedIdx + 1 : undefined}
                onClick={() => toggleTeam(item)}
              />
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
