import { PAGES } from '../../../shared/constants/pages'
import { FollowListShell } from '../../../features/follow/ui/FollowListShell'
import { SelectNum } from '../../../features/follow/ui/SelectNum'
import { BoostTag } from '../../../features/follow/ui/BoostTag'
import { useFollowSelectionsStore } from '../../../features/follow/model/store/followSelectionsStore'

type Props = {
  onNavigate: (page: string) => void
}

type TeamItem = {
  target_id: string
  name: string
  logoUrl: string
  logoInset: string
  cover?: boolean
  boost?: boolean
}

const MOCK_TEAMS: TeamItem[] = [
  {
    target_id: 'T1',
    name: 'T1',
    logoUrl: 'https://www.figma.com/api/mcp/asset/b71eb485-bbab-47d8-b5f4-9e1dda227367',
    logoInset: '30%_0_29.57%_0',
    cover: true,
    boost: true,
  },
  {
    target_id: 'KT',
    name: 'KT Rollster',
    logoUrl: 'https://www.figma.com/api/mcp/asset/322271bd-3bbc-46f2-8b13-6a299ff5f826',
    logoInset: '20%_19.17%_16.67%_18.33%',
    boost: true,
  },
  {
    target_id: 'GENG',
    name: 'GEN G',
    logoUrl: 'https://www.figma.com/api/mcp/asset/56ea7f18-54e1-41c7-9146-41cdc99e11e8',
    logoInset: '15%_9.05%_14.89%_9.17%',
  },
  {
    target_id: 'HLE',
    name: 'Hanwha Life Esports',
    logoUrl: 'https://www.figma.com/api/mcp/asset/abae79cc-fe3d-448e-9fcd-1256f9934889',
    logoInset: '15.38%_0_14.88%_0.13%',
    cover: true,
  },
  {
    target_id: 'DK',
    name: 'Dplus KIA',
    logoUrl: 'https://www.figma.com/api/mcp/asset/b73e570f-8207-45e8-9858-f9c6a2abac93',
    logoInset: '30%_4.17%_30.28%_4.17%',
  },
  {
    target_id: 'WBG',
    name: 'Weibo Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/33c13d56-e77b-47df-ba94-c2571cb0e106',
    logoInset: '17.5%_10.75%_18.3%_10%',
  },
  {
    target_id: 'JDG',
    name: 'JD Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/33c13d56-e77b-47df-ba94-c2571cb0e106',
    logoInset: '17.5%_10.75%_18.3%_10%',
  },
  {
    target_id: 'BLG',
    name: 'Bilibili Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/c243a721-41cf-4368-87cd-593dfe218514',
    logoInset: '17.5%_10.75%_18.3%_10%',
  },
  {
    target_id: 'TES',
    name: 'Top Esports',
    logoUrl: 'https://www.figma.com/api/mcp/asset/c243a721-41cf-4368-87cd-593dfe218514',
    logoInset: '17.5%_10.75%_18.3%_10%',
    boost: true,
  },
]

function TeamCard({
  team,
  selectedIndex,
  onToggle,
}: {
  team: TeamItem
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
          <div className="overflow-clip relative shrink-0 size-[28px]">
            <div className="absolute" style={{ inset: team.logoInset.replace(/_/g, ' ') }}>
              <img
                alt=""
                className={`absolute inset-0 max-w-none size-full ${team.cover ? 'object-cover pointer-events-none' : 'block'}`}
                src={team.logoUrl}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-px">
          {team.boost && <BoostTag />}
          <p className="font-['Pretendard',sans-serif] font-bold text-[20px] text-black leading-[normal] overflow-hidden text-ellipsis w-full whitespace-nowrap">
            {team.name}
          </p>
        </div>
      </div>
      <SelectNum selected={isSelected} index={isSelected ? selectedIndex : undefined} />
    </button>
  )
}

export function TeamListPage({ onNavigate }: Props) {
  const teams = useFollowSelectionsStore((s) => s.teams)
  const toggle = useFollowSelectionsStore((s) => s.toggleTeam)
  const orderedIds = teams.map((t) => t.target_id)

  const selected = orderedIds
    .map((id) => MOCK_TEAMS.find((t) => t.target_id === id))
    .filter((t): t is TeamItem => Boolean(t))
  const unselected = MOCK_TEAMS.filter((t) => !orderedIds.includes(t.target_id))
  const ordered = [...selected, ...unselected]

  return (
    <FollowListShell
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      currentStep={1}
      onClose={() => onNavigate(PAGES.MAIN)}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
    >
      {ordered.map((team) => {
        const idx = orderedIds.indexOf(team.target_id) + 1
        return (
          <TeamCard
            key={team.target_id}
            team={team}
            selectedIndex={idx}
            onToggle={() => toggle({ target_id: team.target_id })}
          />
        )
      })}
    </FollowListShell>
  )
}
