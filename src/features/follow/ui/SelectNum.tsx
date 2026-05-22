const imgPlus = 'https://www.figma.com/api/mcp/asset/11896f89-13aa-4878-9acd-c02d20d5d1f7'
const imgCheck = 'https://www.figma.com/api/mcp/asset/d8dc91f2-605d-4eb7-b07f-8c4ed0b21da7'

type Props = {
  selected: boolean
  index?: number
}

export function SelectNum({ selected, index }: Props) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center overflow-clip relative shrink-0 w-[54px]">
        <img alt="" className="shrink-0 w-[13px] h-[9px]" src={imgCheck} />
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px]">
          {index ?? ''}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-[48px] items-center justify-center overflow-clip px-[12px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0">
      <div className="border-[#969cda] border-[0.4px] border-solid relative rounded-[6px] shrink-0 size-[32px]">
        <div className="absolute inset-[-0.4px] overflow-clip">
          <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
            <img alt="" className="absolute block inset-0 size-full" src={imgPlus} />
          </div>
        </div>
      </div>
    </div>
  )
}
