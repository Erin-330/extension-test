import { FOLLOW_ASSETS } from './assets'

type Props = {
  selected: boolean
  selectedNum?: number
}

export function SelectNum({ selected, selectedNum }: Props) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center overflow-hidden shrink-0 w-[54px]">
        <img
          src={FOLLOW_ASSETS.checkIcon}
          className="relative h-[9px] w-[13px] shrink-0"
          alt=""
        />
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
          {selectedNum}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-[48px] items-center justify-center overflow-hidden px-[12px] rounded-br-[8px] rounded-tr-[8px] shrink-0">
      <div className="border-[#969cda] border-[0.4px] border-solid relative rounded-[6px] shrink-0 size-[32px]">
        <div className="absolute inset-[-0.4px] overflow-hidden">
          <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
            <img src={FOLLOW_ASSETS.addUserIcon} className="absolute block max-w-none size-full shrink-0" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
