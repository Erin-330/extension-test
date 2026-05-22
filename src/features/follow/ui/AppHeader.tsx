import { FOLLOW_ASSETS } from './assets'

type Props = {
  onClose: () => void
}

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] relative shrink-0 w-full">
      <div className="flex gap-[6px] items-center justify-center">
        <div className="relative w-[22px] h-[18px] overflow-hidden">
          <img alt="" src={FOLLOW_ASSETS.rorrLogoUnionStroke} className="absolute inset-[0.03%_19.61%_-0.09%_19.66%] block max-w-none w-auto h-auto" />
          <img alt="" src={FOLLOW_ASSETS.rorrLogoExclude} className="absolute inset-[2.93%_22.01%_2.81%_22.06%] block max-w-none w-auto h-auto" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
          RORR
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="shrink-0 w-[12.414px] h-[12.414px] flex items-center justify-center"
        aria-label="close"
      >
        <img src={FOLLOW_ASSETS.closeUnion} alt="close" className="shrink-0 w-[12.414px] h-[12.414px]" />
      </button>
    </div>
  )
}
