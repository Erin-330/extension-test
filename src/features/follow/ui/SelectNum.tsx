import { FOLLOW_ICON } from './assets'

interface Props {
  selected: boolean
  order?: number
}

export function SelectNum({ selected, order }: Props) {
  if (selected) {
    return (
      <div className="flex h-full w-[54px] items-center justify-center gap-[4px] bg-[#209fee] overflow-clip">
        <div className="h-[9px] w-[13px] relative shrink-0">
          <img alt="" className="block w-full h-full" src={FOLLOW_ICON.checkWhite} />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px] whitespace-nowrap">
          {order ?? 0}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-[48px] items-center justify-center px-[12px] rounded-br-[8px] rounded-tr-[8px] overflow-clip shrink-0">
      <div className="border-[#969cda] border-[0.4px] border-solid rounded-[6px] size-[32px] relative shrink-0">
        <div className="absolute inset-[-0.4px] overflow-clip">
          <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
            <img alt="" className="block w-full h-full" src={FOLLOW_ICON.userPlus} />
          </div>
        </div>
      </div>
    </div>
  )
}
