import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'
import { AppHeader } from '../../../features/follow/ui/AppHeader'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'

type Props = { onNavigate: (page: string) => void }

const imgVector1177Stroke =
  'https://www.figma.com/api/mcp/asset/48745748-22e5-426a-82b7-94da40535c37'
const imgSearchBg =
  'https://www.figma.com/api/mcp/asset/72bb31a1-47bf-4b5e-954b-44c12dfc61f5'
const imgPlusUser =
  'https://www.figma.com/api/mcp/asset/0979d9e4-71fa-47b7-b32b-c8b494bf9958'
const imgLightning =
  'https://www.figma.com/api/mcp/asset/5e5549c0-cfd7-4159-b8c9-135d9e22beb3'
const imgUnionStroke =
  'https://www.figma.com/api/mcp/asset/2425a84c-185c-4d58-80c9-78ef7d84abc3'
const imgExclude =
  'https://www.figma.com/api/mcp/asset/b6368a87-4bc0-4c24-8878-86d786e8ba54'
const imgClose =
  'https://www.figma.com/api/mcp/asset/a7f3cb5b-0d4a-4e29-a675-0938c246dea4'
const imgSearchIcon =
  'https://www.figma.com/api/mcp/asset/c22a648a-addc-4d11-a782-9a2096c5e9c3'
const imgCheck =
  'https://www.figma.com/api/mcp/asset/b3dbe1b9-c1e5-4877-a5f3-45dcfc72227c'
const imgT1Logo =
  'https://www.figma.com/api/mcp/asset/fc57c462-af3b-4969-a6cd-fb1622161350'
const imgKtLogo =
  'https://www.figma.com/api/mcp/asset/05247b91-2430-479c-99a9-8342c111d41d'
const imgGenGLogo =
  'https://www.figma.com/api/mcp/asset/ddbd0de0-0d96-45ed-ac96-75351d226736'
const imgHleLogo =
  'https://www.figma.com/api/mcp/asset/0afd7f41-aae6-40f4-90ba-a4d6d8283817'
const imgDplusLogo =
  'https://www.figma.com/api/mcp/asset/5ef08555-a334-4133-aeb9-bf4586bc4606'
const imgWeiboLogo =
  'https://www.figma.com/api/mcp/asset/32d7a052-a747-4604-96bd-ae6d9685bfb3'
const imgWeibo2Logo =
  'https://www.figma.com/api/mcp/asset/cd92d9ec-92ce-48a6-9c8b-aff087478170'

type TeamData = FollowTargetItem

const MOCK_TEAMS: TeamData[] = [
  { target_id: 't1', name: 'T1', logoUrl: imgT1Logo, hasBoost: true },
  { target_id: 'kt', name: 'KT Rollster', logoUrl: imgKtLogo, hasBoost: true },
  { target_id: 'gen', name: 'GEN G', logoUrl: imgGenGLogo },
  { target_id: 'hle', name: 'Hanwha Life Esports', logoUrl: imgHleLogo },
  { target_id: 'dk', name: 'Dplus KIA', logoUrl: imgDplusLogo },
  { target_id: 'wb1', name: 'Weibo Gaming', logoUrl: imgWeiboLogo },
  { target_id: 'wb2', name: 'Weibo Gaming', logoUrl: imgWeiboLogo },
  { target_id: 'wb3', name: 'Weibo Gaming', logoUrl: imgWeibo2Logo },
  { target_id: 'wb4', name: 'Weibo Gaming', logoUrl: imgWeibo2Logo, hasBoost: true },
]

const BoostTag = () => (
  <div
    className="flex gap-[2px] items-center justify-center px-[2px] py-px rounded-[2px] shrink-0"
    style={{
      background:
        'linear-gradient(to bottom, #c0b1ff 0%, #a28cff 4.808%, #6f4cff 100%)',
    }}
  >
    <img src={imgLightning} className="size-[6px] shrink-0" alt="" />
    <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-white whitespace-nowrap">
      BOOST
    </p>
  </div>
)

const SelectNum = ({ index }: { index: number | null }) => {
  if (index !== null) {
    return (
      <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center overflow-hidden shrink-0 w-[54px]">
        <img src={imgCheck} className="h-[9px] w-[13px] shrink-0" alt="" />
        <span className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
          {index + 1}
        </span>
      </div>
    )
  }
  return (
    <div className="flex h-full items-center justify-center overflow-hidden px-[12px] rounded-br-[8px] rounded-tr-[8px] shrink-0">
      <div className="border border-[#969cda] rounded-[6px] shrink-0 size-[32px] flex items-center justify-center">
        <img src={imgPlusUser} className="size-[20px] shrink-0" alt="" />
      </div>
    </div>
  )
}

export const TeamListPage = ({ onNavigate }: Props) => {
  const teams = useFollowSelectionsStore((s) => s.teams)
  const toggleTeam = useFollowSelectionsStore((s) => s.toggleTeam)

  const orderedIds = useMemo(() => teams.map((t) => t.target_id), [teams])

  const sortedList = useMemo(() => {
    const selected = orderedIds
      .map((id) => MOCK_TEAMS.find((t) => t.target_id === id))
      .filter((t): t is TeamData => t !== undefined)
    const unselected = MOCK_TEAMS.filter((t) => !orderedIds.includes(t.target_id))
    return [...selected, ...unselected]
  }, [orderedIds])

  const selectedIndex = (id: string) => {
    const idx = orderedIds.indexOf(id)
    return idx === -1 ? null : idx
  }

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader
        unionStrokeUrl={imgUnionStroke}
        excludeUrl={imgExclude}
        closeIconUrl={imgClose}
        onClose={() => onNavigate(PAGES.MAIN)}
      />
      <div className="bg-[#f0f2f5] flex-[1_0_0] min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full items-start overflow-y-auto pb-[80px] pt-[16px] px-[16px] relative w-full">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black whitespace-nowrap">
              Back Your Team
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
              Follow your favorite Teams
            </p>
          </div>
          {sortedList.map((team) => {
            const idx = selectedIndex(team.target_id)
            const selected = idx !== null
            return (
              <button
                key={team.target_id}
                onClick={() => toggleTeam(team)}
                className={`bg-white flex gap-[4px] h-[68px] items-stretch relative rounded-[8px] shrink-0 w-full overflow-hidden text-left ${selected ? 'border-2 border-[#209fee]' : 'shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]'}`}
              >
                <div className="flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px px-[12px]">
                  <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
                    <div className="overflow-hidden shrink-0 size-[28px] flex items-center justify-center">
                      <img
                        src={team.logoUrl}
                        className="size-full shrink-0 object-contain"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px">
                    {team.hasBoost && <BoostTag />}
                    <p className="font-['Pretendard',sans-serif] font-bold text-[20px] leading-none text-black whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      {team.name}
                    </p>
                  </div>
                </div>
                <SelectNum index={idx} />
              </button>
            )
          })}
        </div>
        <div className="absolute flex flex-col gap-[4px] items-start p-[10px] right-0 top-0">
          <button
            className="rounded-[28px] shrink-0 size-[24px] relative"
            aria-label="search"
          >
            <img src={imgSearchBg} className="absolute inset-0 size-full shrink-0" alt="" />
            <img
              src={imgSearchIcon}
              className="absolute inset-[8.33%] size-[80%] shrink-0"
              alt=""
            />
          </button>
        </div>
        <StepIndicator
          currentStep={1}
          arrowIconUrl={imgVector1177Stroke}
          onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
          onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
        />
      </div>
    </div>
  )
}
