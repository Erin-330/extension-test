import { FOLLOW_ICON } from './assets'

interface Props {
  onClose: () => void
}

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] w-full shrink-0">
      <div className="flex gap-[6px] items-center justify-center">
        <div className="-scale-y-100 rotate-180 flex items-center justify-center">
          <div className="h-[18px] overflow-clip relative w-[22px]">
            <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
              <img alt="" className="block w-full h-full" src={FOLLOW_ICON.rorrLogoStroke} />
            </div>
            <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
              <img alt="" className="block w-full h-full" src={FOLLOW_ICON.rorrLogoExclude} />
            </div>
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
          RORR
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="size-[12.414px] relative shrink-0"
        aria-label="close"
      >
        <img alt="" className="block w-full h-full" src={FOLLOW_ICON.closeX} />
      </button>
    </div>
  )
}
