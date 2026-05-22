import { FOLLOW_ASSETS } from './assets'

type Props = {
  selected: boolean
  order?: number
}

export function SelectNum({ selected, order }: Props) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center overflow-clip shrink-0 w-[54px] rounded-br-[8px] rounded-tr-[8px]">
        <img src={FOLLOW_ASSETS.checkIcon} alt="" className="shrink-0 w-[13px] h-[9px]" />
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
          {order ?? ''}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-[48px] items-center justify-center overflow-clip px-[12px] rounded-br-[8px] rounded-tr-[8px] shrink-0">
      <div className="border-[#969cda] border-[0.4px] border-solid relative rounded-[6px] shrink-0 w-[32px] h-[32px]">
        <div className="absolute inset-[-0.4px] overflow-clip">
          <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
            <img alt="" src={FOLLOW_ASSETS.plusIcon} className="absolute inset-0 max-w-none w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
