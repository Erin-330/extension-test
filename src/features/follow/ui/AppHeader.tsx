import { ASSETS } from './assets'

interface Props {
  onClose: () => void
}

export function AppHeader({ onClose }: Props) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] w-full shrink-0">
      <div className="flex gap-[6px] items-center">
        <div className="relative w-[22px] h-[18px] shrink-0">
          <img src={ASSETS.rorrLogoUnionStroke} className="absolute inset-0 w-full h-full" alt="" />
          <img src={ASSETS.rorrLogoExclude} className="absolute inset-0 w-full h-full" alt="" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
          RORR
        </p>
      </div>
      <button onClick={onClose} className="shrink-0">
        <img src={ASSETS.closeIconUnion} className="shrink-0 w-[12px] h-[12px]" alt="close" />
      </button>
    </div>
  )
}
