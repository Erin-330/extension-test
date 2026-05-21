import { FOLLOW_ASSETS } from './assets'

type Props = {
  selected: boolean
  order?: number
}

export function SelectNum({ selected, order }: Props) {
  if (selected) {
    return (
      <div className="bg-[#209fee] flex gap-[4px] h-full items-center justify-center w-[54px] shrink-0 self-stretch rounded-tr-[6px] rounded-br-[6px]">
        <img alt="" src={FOLLOW_ASSETS.checkIcon} className="block w-[13px] h-[9px]" />
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px]">
          {order ?? ''}
        </p>
      </div>
    )
  }
  return (
    <div className="flex h-full items-center justify-center px-[12px] shrink-0">
      <div className="border-[#969cda] border-[0.4px] border-solid rounded-[6px] size-[32px] flex items-center justify-center">
        <img alt="" src={FOLLOW_ASSETS.addPersonIcon} className="block w-[24px] h-[24px]" />
      </div>
    </div>
  )
}
