import { FOLLOW_ASSETS } from './FollowAssets'

interface Props {
  onClose: () => void
}

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between px-[4px] w-full opacity-[0.66] shrink-0">
      <div className="flex gap-[6px] items-center justify-center shrink-0">
        <div className="relative h-[18px] w-[22px] overflow-hidden -scale-y-100 rotate-180">
          <img src={FOLLOW_ASSETS.rorrLogoStroke} className="absolute inset-0 w-full h-full shrink-0" alt="" />
          <img src={FOLLOW_ASSETS.rorrLogoExclude} className="absolute inset-0 w-full h-full shrink-0" alt="" />
        </div>
        <p className="text-white text-[14px] font-['Pretendard',sans-serif] font-light leading-[20px] whitespace-nowrap">
          RORR
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="size-[12.414px] flex items-center justify-center shrink-0"
        aria-label="close"
      >
        <img src={FOLLOW_ASSETS.closeIcon} className="w-full h-full shrink-0" alt="" />
      </button>
    </div>
  )
}
