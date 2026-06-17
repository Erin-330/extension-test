import { FOLLOW_ASSETS } from './assets'

type Props = { onClose: () => void }

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full shrink-0">
      <div className="flex gap-[6px] items-center justify-center shrink-0">
        <div className="-scale-y-100 rotate-180 flex items-center justify-center shrink-0">
          <div className="h-[18px] w-[22px] relative overflow-hidden">
            <img
              src={FOLLOW_ASSETS.rorrLogoUnionStroke}
              className="absolute block max-w-none size-full inset-[0.03%_19.61%_-0.09%_19.66%] shrink-0"
              alt=""
            />
            <img
              src={FOLLOW_ASSETS.rorrLogoExclude}
              className="absolute block max-w-none size-full inset-[2.93%_22.01%_2.81%_22.06%] shrink-0"
              alt=""
            />
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap shrink-0">
          RORR
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="relative size-[12.414px] shrink-0"
        aria-label="Close"
      >
        <img src={FOLLOW_ASSETS.closeX} className="absolute block max-w-none size-full shrink-0" alt="" />
      </button>
    </div>
  )
}
