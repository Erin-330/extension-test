import { useMemo } from 'react'
import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'
import { AppHeader } from '../../../features/follow/ui/AppHeader'
import { StepIndicator } from '../../../features/follow/ui/StepIndicator'

type Props = { onNavigate: (page: string) => void }

const imgSearchBg =
  'https://www.figma.com/api/mcp/asset/f596bfca-aeb4-484a-9e8a-d324053a99d5'
const imgVector1177Stroke =
  'https://www.figma.com/api/mcp/asset/107277a6-59b5-4ede-b7be-1bb2b355af49'
const imgPlusUser =
  'https://www.figma.com/api/mcp/asset/11c399dc-7f6b-46df-9c8f-e31e8199a272'
const imgCheck =
  'https://www.figma.com/api/mcp/asset/ac344b5c-a3c4-4d6c-9812-d2f257c8596b'
const imgLightning =
  'https://www.figma.com/api/mcp/asset/53c370a8-d8bd-454d-9b7b-f68f66a01f53'
const imgPlayerAvatar =
  'https://www.figma.com/api/mcp/asset/cadb20a3-71ed-4a88-924f-707b42a2ebe0'
const imgT1Logo =
  'https://www.figma.com/api/mcp/asset/ec328936-fc73-4a79-a34c-21f487a2906c'
const imgUnionStroke =
  'https://www.figma.com/api/mcp/asset/330d7dc2-85e3-4878-9ad8-fdad0d406624'
const imgExclude =
  'https://www.figma.com/api/mcp/asset/15941ce0-4bc9-4cf5-8da0-74f9287ee017'
const imgClose =
  'https://www.figma.com/api/mcp/asset/05c17947-9c88-42e5-9a42-53ed3c8c9f8f'
const imgKtLogo =
  'https://www.figma.com/api/mcp/asset/ffc9af20-e4ef-4d72-909c-9c6d705183ec'
const imgGenGLogo =
  'https://www.figma.com/api/mcp/asset/3ea22366-d097-4993-b2c6-4183512bfbeb'
const imgSearchIcon =
  'https://www.figma.com/api/mcp/asset/c22a648a-addc-4d11-a782-9a2096c5e9c3'

type PlayerData = FollowTargetItem & { teamLogo: string }

const MOCK_PLAYERS: PlayerData[] = [
  { target_id: 'doran', name: 'Doran', fullName: 'fullName', teamLogo: imgT1Logo, hasBoost: true },
  { target_id: 'faker', name: 'Faker', fullName: 'fullName', teamLogo: imgT1Logo, hasBoost: true },
  { target_id: 'keria', name: 'Keria', fullName: 'fullName', teamLogo: imgT1Logo, hasBoost: true },
  { target_id: 'oner', name: 'Oner', fullName: 'fullName', teamLogo: imgT1Logo, hasBoost: true },
  { target_id: 'perfect', name: 'PerfecT', fullName: 'fullName', teamLogo: imgKtLogo },
  { target_id: 'bdd', name: 'Bdd', fullName: 'fullName', teamLogo: imgKtLogo },
  { target_id: 'cuzz', name: 'Cuzz', fullName: 'fullName', teamLogo: imgKtLogo },
  { target_id: 'aiming', name: 'Aiming', fullName: 'fullName', teamLogo: imgKtLogo },
  { target_id: 'ghost', name: 'Ghost', fullName: 'fullName', teamLogo: imgKtLogo },
  { target_id: 'canyon', name: 'Canyon', fullName: 'fullName', teamLogo: imgGenGLogo, hasBoost: true },
  { target_id: 'raiad', name: 'Raiad', fullName: 'fullName', teamLogo: imgGenGLogo, hasBoost: true },
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

export const PlayerListPage = ({ onNavigate }: Props) => {
  const players = useFollowSelectionsStore((s) => s.players)
  const togglePlayer = useFollowSelectionsStore((s) => s.togglePlayer)
  const reset = useFollowSelectionsStore((s) => s.reset)

  const orderedIds = useMemo(() => players.map((p) => p.target_id), [players])

  const sortedList = useMemo(() => {
    const selected = orderedIds
      .map((id) => MOCK_PLAYERS.find((p) => p.target_id === id))
      .filter((p): p is PlayerData => p !== undefined)
    const unselected = MOCK_PLAYERS.filter((p) => !orderedIds.includes(p.target_id))
    return [...selected, ...unselected]
  }, [orderedIds])

  const selectedIndex = (id: string) => {
    const idx = orderedIds.indexOf(id)
    return idx === -1 ? null : idx
  }

  const handleDone = () => {
    reset()
    onNavigate(PAGES.MAIN)
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
              Follow Players
            </p>
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
              Select players to follow
            </p>
          </div>
          {sortedList.map((player) => {
            const idx = selectedIndex(player.target_id)
            const selected = idx !== null
            return (
              <button
                key={player.target_id}
                onClick={() => togglePlayer(player)}
                className={`bg-white flex gap-[4px] h-[68px] items-center relative rounded-[8px] shrink-0 w-full overflow-hidden text-left ${selected ? 'border-2 border-[#209fee]' : 'shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]'}`}
              >
                <div className="flex flex-[1_0_0] gap-[12px] h-full items-center min-w-px px-[12px]">
                  <div className="flex items-center justify-center p-[2px] shrink-0">
                    <div className="bg-[#4e4743] overflow-hidden rounded-full shrink-0 size-[28px] relative">
                      <img
                        src={imgPlayerAvatar}
                        className="absolute inset-0 size-full shrink-0 object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-w-px">
                    {player.hasBoost && <BoostTag />}
                    <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-black whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      {player.name}
                    </p>
                    <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#757b90] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      {player.fullName}
                    </p>
                  </div>
                  <div className="overflow-hidden shrink-0 size-[20px] flex items-center justify-center">
                    <img
                      src={player.teamLogo}
                      className="size-full shrink-0 object-contain"
                      alt=""
                    />
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
          currentStep={2}
          arrowIconUrl={imgVector1177Stroke}
          onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
          onNext={handleDone}
          nextLabel="Done"
        />
      </div>
    </div>
  )
}
