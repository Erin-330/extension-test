const imgPlus = 'https://www.figma.com/api/mcp/asset/1c30b249-1ecc-400f-baae-6cb66cd4822d'
const imgCheck = 'https://www.figma.com/api/mcp/asset/32a07c6a-6f82-40bc-b636-b3b821aeec0c'

interface Props {
  selected: boolean
  order?: number
}

export function SelectNum({ selected, order }: Props) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center overflow-clip shrink-0 w-[54px]">
        <img alt="" src={imgCheck} className="shrink-0 w-[13px] h-[9px]" />
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
          {order ?? ''}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-full items-center justify-center overflow-clip px-[12px] rounded-br-[8px] rounded-tr-[8px] shrink-0">
      <div className="border-[#969cda] border-[0.4px] border-solid relative rounded-[6px] shrink-0 size-[32px]">
        <div className="absolute inset-[-0.4px] overflow-clip">
          <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgPlus} />
          </div>
        </div>
      </div>
    </div>
  )
}
