import { BoostTag } from './BoostTag'
import { SelectNum } from './SelectNum'

const NO_PLAYER_IMAGE = 'https://www.figma.com/api/mcp/asset/346fc97f-5972-43c6-ac9f-f34be05f10df'

export interface PlayerItem {
  target_id: string
  gameNick: string
  fullName: string
  team: 't1' | 'kt' | 'geng'
  hasBoost?: boolean
}

const TEAM_LOGO_MAP: Record<PlayerItem['team'], { url: string; inset: string }> = {
  t1: {
    url: 'https://www.figma.com/api/mcp/asset/fd24dd5d-f4dd-4d25-9467-d106732a31c9',
    inset: 'inset-[30%_0_29.57%_0]',
  },
  kt: {
    url: 'https://www.figma.com/api/mcp/asset/2c232530-f80e-401a-8de5-12ed052460b8',
    inset: 'inset-[15%_18.55%_14.5%_18.45%]',
  },
  geng: {
    url: 'https://www.figma.com/api/mcp/asset/f746f87d-7151-47e8-b544-1e2a744a8ff7',
    inset: 'inset-[15%_9.05%_14.89%_9.17%]',
  },
}

interface PlayerItemCardProps {
  item: PlayerItem
  selected: boolean
  order?: number
  onClick: () => void
}

export function PlayerItemCard({ item, selected, order, onClick }: PlayerItemCardProps) {
  const team = TEAM_LOGO_MAP[item.team]
  return (
    <button
      onClick={onClick}
      className={`bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.1)] flex gap-[4px] h-[68px] items-center relative rounded-[8px] shrink-0 w-full overflow-clip ${
        selected ? 'border-2 border-[#209fee] border-solid' : ''
      }`}
    >
      <div className="flex flex-1 gap-[12px] h-full items-center min-w-px px-[12px]">
        <div className="flex flex-col items-center justify-center p-[2px] shrink-0">
          <div className="bg-[#4e4743] overflow-clip relative rounded-[40px] shrink-0 size-[28px]">
            <img src={NO_PLAYER_IMAGE} alt="" className="absolute inset-0 max-w-none object-cover size-full" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px] h-full items-start justify-center min-w-px text-left">
          {item.hasBoost && <BoostTag />}
          <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] not-italic shrink-0 text-[16px] text-black overflow-hidden text-ellipsis max-w-full whitespace-nowrap w-full">
            {item.gameNick}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] not-italic shrink-0 text-[#757b90] text-[12px] overflow-hidden text-ellipsis max-w-full whitespace-nowrap">
            {item.fullName}
          </p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className={`absolute ${team.inset} overflow-clip`}>
            <img src={team.url} alt="" className="absolute inset-0 max-w-none object-cover size-full" />
          </div>
        </div>
      </div>
      <SelectNum selected={selected} order={order} />
    </button>
  )
}
