import { FOLLOW_ASSETS } from './assets'

type Props = {
  onClose: () => void
}

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] shrink-0 w-full">
      <div className="flex gap-[6px] items-center justify-center">
        <div className="relative h-[18px] w-[22px]">
          <img alt="" src={FOLLOW_ASSETS.rorrLogoStroke} className="absolute inset-0 size-full" />
          <img alt="" src={FOLLOW_ASSETS.rorrLogoExclude} className="absolute inset-0 size-full" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
          RORR
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="relative size-[12.414px] flex items-center justify-center"
      >
        <img alt="close" src={FOLLOW_ASSETS.closeX} className="block size-full" />
      </button>
    </div>
  )
}
