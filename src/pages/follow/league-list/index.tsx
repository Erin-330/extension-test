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
  'https://www.figma.com/api/mcp/asset/ee0118f6-4bd2-4b33-b238-62f7466095f2'
const imgSearchBg =
  'https://www.figma.com/api/mcp/asset/272c52bb-acc4-44ab-bbf6-a91d65e675eb'
const imgPlusUser =
  'https://www.figma.com/api/mcp/asset/688da8f9-fa54-42bb-8a4a-0a26162b249c'
const imgLightning =
  'https://www.figma.com/api/mcp/asset/ced4fdb4-b398-4326-8bda-8d00367f9c09'
const imgUnionStroke =
  'https://www.figma.com/api/mcp/asset/1239f13d-5661-4958-ab20-f48633194b93'
const imgExclude =
  'https://www.figma.com/api/mcp/asset/8a52070f-6c90-4775-8de8-0ce55ee98132'
const imgClose =
  'https://www.figma.com/api/mcp/asset/a2a99331-a961-4bdb-bb2f-8070bbe080f4'
const imgSearchIcon =
  'https://www.figma.com/api/mcp/asset/7bc85f72-e447-461f-ad70-f76d2da24d08'
const imgCheck =
  'https://www.figma.com/api/mcp/asset/c9edc598-ef68-4678-8c2c-70dad0843590'
const imgLckLogo =
  'https://www.figma.com/api/mcp/asset/0800025f-8600-4a50-960a-32ea45f96ee8'
const imgLplLogo =
  'https://www.figma.com/api/mcp/asset/d9282aed-ac51-4c8c-8a8c-f1db6c31853a'
const imgVcsLogo =
  'https://www.figma.com/api/mcp/asset/882b9a1b-4ba8-4bd0-ab81-a314a0c5d5d7'
const imgMsiLogo =
  'https://www.figma.com/api/mcp/asset/bca6ef10-a77c-4e92-bba6-da850bcd5dcd'
const imgLecLogo =
  'https://www.figma.com/api/mcp/asset/ef61ddf0-071b-4aed-a205-33f1f8c844bf'
const imgCblolLogo =
  'https://www.figma.com/api/mcp/asset/9181e4c2-df91-482b-b0b3-f5a91dfbf94b'
const imgLlaLogo =
  'https://www.figma.com/api/mcp/asset/c6663746-afb3-4a87-a08a-bb875825e0a1'

type LeagueData = FollowTargetItem & { short: string }

const MOCK_LEAGUES: LeagueData[] = [
  { target_id: 'lck', short: 'LCK', name: 'League of Legends Champions Korea', logoUrl: imgLckLogo, hasBoost: true },
  { target_id: 'lpl', short: 'LPL', name: 'League of Legends Pro League', logoUrl: imgLplLogo, hasBoost: true },
  { target_id: 'vcs', short: 'VCS', name: 'Vietnam Championship Series', logoUrl: imgVcsLogo, hasBoost: true },
  { target_id: 'msi', short: 'MSI', name: 'Mid-Season Invitational', logoUrl: imgMsiLogo, hasBoost: true },
  { target_id: 'lec', short: 'LEC', name: 'League of Legends EMEA Championship', logoUrl: imgLecLogo },
  { target_id: 'cblol', short: 'CBLOL', name: 'Circuit Brazilian League of Legends', logoUrl: imgCblolLogo },
  { target_id: 'lla1', short: 'LEC', name: 'League of Legends in Hispanic America', logoUrl: imgLlaLogo },
  { target_id: 'lla2', short: 'LEC', name: 'League of Legends in Hispanic America', logoUrl: imgLlaLogo },
  { target_id: 'lla3', short: 'LEC', name: 'League of Legends in Hispanic America', logoUrl: imgLlaLogo },
  { target_id: 'lla4', short: 'LEC', name: 'League of Legends in Hispanic America', logoUrl: imgLlaLogo, hasBoost: true },
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

export const LeagueListPage = ({ onNavigate }: Props) => {
  const leagues = useFollowSelectionsStore((s) => s.leagues)
  const toggleLeague = useFollowSelectionsStore((s) => s.toggleLeague)

  const orderedIds = useMemo(() => leagues.map((l) => l.target_id), [leagues])

  const sortedList = useMemo(() => {
    const selected = orderedIds
      .map((id) => MOCK_LEAGUES.find((l) => l.target_id === id))
      .filter((l): l is LeagueData => l !== undefined)
    const unselected = MOCK_LEAGUES.filter((l) => !orderedIds.includes(l.target_id))
    return [...selected, ...unselected]
  }, [orderedIds])

  const handleToggle = (league: LeagueData) => {
    toggleLeague({
      target_id: league.target_id,
      name: league.name,
      logoUrl: league.logoUrl,
      hasBoost: league.hasBoost,
    })
  }

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
        <div className="flex flex-col gap-[16px] h-full items-start overflow-y-auto pb-[80px] pt-[12px] px-[16px] relative w-full">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full pr-[40px]">
            <p className="font-['Pretendard',sans-serif] font-semibold text-[24px] leading-[1.5] text-black whitespace-nowrap">
              Back Your League
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
              Follow your favorite Leagues
            </p>
          </div>
          {sortedList.map((league) => {
            const idx = selectedIndex(league.target_id)
            const selected = idx !== null
            return (
              <button
                key={league.target_id}
                onClick={() => handleToggle(league)}
                className={`bg-white flex gap-[4px] h-[68px] items-stretch relative rounded-[8px] shrink-0 w-full overflow-hidden text-left ${selected ? 'border-2 border-[#209fee]' : 'shadow-[0px_2px_2px_0px_rgba(0,0,0,0.08)]'}`}
              >
                <div className="flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px px-[12px]">
                  <div className="flex items-center p-[2px] rounded-[6px] shrink-0">
                    <div className="overflow-hidden shrink-0 size-[28px] flex items-center justify-center">
                      <img
                        src={league.logoUrl}
                        className="size-full shrink-0 object-contain"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px">
                    {league.hasBoost && <BoostTag />}
                    <p className="font-['Pretendard',sans-serif] font-bold text-[20px] leading-none text-black whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      {league.short}
                    </p>
                    <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#757b90] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      {league.name}
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
          currentStep={0}
          arrowIconUrl={imgVector1177Stroke}
          onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
        />
      </div>
    </div>
  )
}
