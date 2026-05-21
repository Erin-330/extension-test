type Props = {
  unionStrokeUrl: string
  excludeUrl: string
  closeIconUrl: string
  onClose: () => void
}

export const AppHeader = ({ unionStrokeUrl, excludeUrl, closeIconUrl, onClose }: Props) => {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] shrink-0 w-full">
      <div className="flex gap-[6px] items-center">
        <div className="h-[18px] relative w-[22px] overflow-hidden">
          <img src={unionStrokeUrl} className="absolute inset-0 size-full shrink-0" alt="" />
          <img src={excludeUrl} className="absolute inset-0 size-full shrink-0" alt="" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
          RORR
        </p>
      </div>
      <button
        onClick={onClose}
        className="size-[12.414px] shrink-0 flex items-center justify-center"
        aria-label="close"
      >
        <img src={closeIconUrl} className="size-full shrink-0" alt="" />
      </button>
    </div>
  )
}
