const imgArrow = 'https://www.figma.com/api/mcp/asset/61d61321-a30a-46c1-8c16-5a04253b81b4'

type Props = {
  currentStep: 0 | 1 | 2
  onPrev?: () => void
  onNext?: () => void
  onDone?: () => void
  isLast?: boolean
}

function ArrowButton({
  direction,
  onClick,
  hidden,
}: {
  direction: 'prev' | 'next'
  onClick?: () => void
  hidden?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={hidden}
      className={`flex-1 max-w-[96px] min-w-[80px] h-[48px] relative rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] ${hidden ? 'opacity-0 pointer-events-none' : 'bg-[#969cda] hover:bg-[#afb5ea] active:bg-[#afb5ea] transition-colors cursor-pointer'}`}
      aria-label={direction}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip size-[36px]">
        <div
          className={`absolute inset-[30.21%_22.66%_30.21%_23.96%] ${direction === 'prev' ? 'scale-x-[-1]' : ''}`}
        >
          <img alt="" className="absolute block inset-0 size-full" src={imgArrow} />
        </div>
      </div>
    </button>
  )
}

function DoneButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 max-w-[96px] min-w-[80px] h-[48px] relative rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] bg-[#969cda] hover:bg-[#afb5ea] active:bg-[#afb5ea] transition-colors cursor-pointer"
    >
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
        Done
      </p>
    </button>
  )
}

function Dot({ active }: { active: boolean }) {
  if (active) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center min-w-px">
        <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
      </div>
    )
  }
  return (
    <div className="flex flex-1 items-center justify-center min-w-px">
      <div className="bg-[#b2bac3] rounded-[4px] size-[8px]" />
    </div>
  )
}

export function StepIndicator({ currentStep, onPrev, onNext, onDone, isLast }: Props) {
  return (
    <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 left-0 right-0 flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
      <ArrowButton direction="prev" onClick={onPrev} hidden={currentStep === 0} />
      <div className="flex flex-1 gap-[4px] items-center max-w-[190px] min-w-px px-[5px] py-[10px]">
        <Dot active={currentStep === 0} />
        <Dot active={currentStep === 1} />
        <Dot active={currentStep === 2} />
      </div>
      {isLast ? (
        <DoneButton onClick={onDone} />
      ) : (
        <ArrowButton direction="next" onClick={onNext} />
      )}
    </div>
  )
}
