const PLUS_ICON = 'https://www.figma.com/api/mcp/asset/1cb25418-6def-40e4-aac0-1dc2ef49de37'
const CHECK_ICON = 'https://www.figma.com/api/mcp/asset/20b64b34-9fc2-4b4e-ab33-31153a094e3b'

interface SelectNumProps {
  selected: boolean
  order?: number
}

export function SelectNum({ selected, order }: SelectNumProps) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center overflow-clip relative shrink-0 w-[54px]">
        <img src={CHECK_ICON} alt="" className="shrink-0 w-[13px] h-[9px]" />
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white whitespace-nowrap leading-[20px]">
          {order ?? 0}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-full items-center justify-center overflow-clip px-[12px] rounded-br-[8px] rounded-tr-[8px] shrink-0">
      <div className="border-[#969cda] border-[0.4px] border-solid relative rounded-[6px] shrink-0 size-[32px]">
        <div className="absolute inset-[-0.4px] overflow-clip">
          <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={PLUS_ICON} />
          </div>
        </div>
      </div>
    </div>
  )
}
