import { FOLLOW_ASSETS } from './FollowAssets'

interface Props {
  selected: boolean
  order?: number
}

export function SelectNum({ selected, order }: Props) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex h-full w-[54px] gap-[4px] items-center justify-center overflow-clip shrink-0">
        <img src={FOLLOW_ASSETS.checkMark} className="h-[9px] w-[13px] shrink-0" alt="" />
        <p className="text-white text-[14px] font-['Pretendard',sans-serif] font-light leading-[20px] whitespace-nowrap">
          {order ?? ''}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-full items-center justify-center overflow-clip px-[12px] rounded-tr-[8px] rounded-br-[8px] shrink-0">
      <div className="border-[#969cda] border-[0.4px] border-solid rounded-[6px] shrink-0 size-[32px] relative">
        <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
          <img src={FOLLOW_ASSETS.addUserIcon} className="absolute inset-0 max-w-none size-full block shrink-0" alt="" />
        </div>
      </div>
    </div>
  )
}
