const ASSET_ADD_PERSON = 'https://www.figma.com/api/mcp/asset/c2d8b1cf-b3cf-429c-b66d-70a4c4e8791c'
const ASSET_CHECK = 'https://www.figma.com/api/mcp/asset/6e9004e8-8608-499c-8282-e7a84d66c295'

type Props = { selected: boolean; order?: number }

export function SelectNum({ selected, order }: Props) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex h-full items-center justify-center gap-[4px] overflow-hidden w-[54px] shrink-0">
        <div className="relative h-[9px] w-[13px] shrink-0">
          <img alt="" src={ASSET_CHECK} className="absolute inset-0 size-full" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
          {order}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-full items-center justify-center px-[12px] shrink-0 rounded-r-[8px]">
      <div className="relative size-[32px] rounded-[6px] border border-[#969cda]/40">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
            <img alt="" src={ASSET_ADD_PERSON} className="absolute inset-0 size-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
