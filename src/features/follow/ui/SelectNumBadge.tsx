const imgPlus = 'https://www.figma.com/api/mcp/asset/d551af1d-85a6-4b5d-8d0e-2791293f73d3'
const imgCheck = 'https://www.figma.com/api/mcp/asset/51e5166a-0989-4074-a136-fa8147dea4e8'

type Props = {
  selected: boolean
  order?: number
}

export function SelectNumBadge({ selected, order }: Props) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex h-full items-center justify-center gap-[4px] overflow-clip w-[54px] shrink-0">
        <div className="relative h-[9px] w-[13px] shrink-0">
          <img alt="" src={imgCheck} className="absolute inset-0 block max-w-none size-full" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
          {order}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-full items-center justify-center px-[12px] shrink-0">
      <div className="border-[#969cda] border-[0.4px] border-solid rounded-[6px] size-[32px] flex items-center justify-center overflow-clip">
        <img alt="" src={imgPlus} className="block size-[20px]" />
      </div>
    </div>
  )
}
