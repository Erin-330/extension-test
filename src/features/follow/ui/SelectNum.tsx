import { ASSETS } from './assets'

interface Props {
  selected: boolean
  index?: number
}

export function SelectNum({ selected, index }: Props) {
  if (selected) {
    return (
      <div className="flex h-full items-center justify-center gap-[4px] w-[54px] bg-[#209fee] overflow-clip rounded-tr-[6px] rounded-br-[6px]">
        <img src={ASSETS.checkIcon} className="shrink-0 w-[13px] h-[9px]" alt="" />
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px]">
          {index ?? ''}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-full items-center justify-center px-[12px] rounded-tr-[8px] rounded-br-[8px]">
      <div className="relative w-[32px] h-[32px] rounded-[6px] border border-[#969cda] flex items-center justify-center">
        <img src={ASSETS.selectAddIcon} className="shrink-0 w-[16px] h-[16px]" alt="" />
      </div>
    </div>
  )
}
