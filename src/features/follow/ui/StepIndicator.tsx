const imgStepArrow = 'https://www.figma.com/api/mcp/asset/398235a2-c550-47da-94f9-d814ea333fde'

type Props = {
  currentStep: 0 | 1 | 2
  onPrev: () => void
  onNext?: () => void
  onDone?: () => void
}

function ArrowButton({ direction, onClick, hidden }: { direction: 'left' | 'right'; onClick?: () => void; hidden?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={hidden}
      className={`flex-1 h-[48px] max-w-[96px] min-w-[80px] relative ${hidden ? 'opacity-0 pointer-events-none' : ''}`}
    >
      <div className="absolute inset-0 bg-[#969cda] rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]" />
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[36px] overflow-clip ${direction === 'left' ? 'rotate-180' : ''}`}>
        <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%]">
          <img alt="" src={imgStepArrow} className="absolute inset-0 block max-w-none size-full" />
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
      className="flex-1 h-[48px] max-w-[96px] min-w-[80px] relative"
    >
      <div className="absolute inset-0 bg-[#969cda] rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)]" />
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
        Done
      </p>
    </button>
  )
}

export function StepIndicator({ currentStep, onPrev, onNext, onDone }: Props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-[10px] px-[16px] py-[8px] bg-[rgba(255,255,255,0.01)] backdrop-blur-[3px]">
      <ArrowButton direction="left" onClick={onPrev} hidden={currentStep === 0} />
      <div className="flex-1 flex items-center max-w-[190px] min-w-px px-[5px] py-[10px] gap-[4px]">
        {[0, 1, 2].map((step) => {
          const active = step === currentStep
          return (
            <div key={step} className="flex-1 flex items-center justify-center">
              {active ? (
                <div className="bg-[#2d39b4] h-[8px] w-full rounded-[4px]" />
              ) : (
                <div className="bg-[#b2bac3] size-[8px] rounded-[4px]" />
              )}
            </div>
          )
        })}
      </div>
      {currentStep === 2 ? (
        <DoneButton onClick={onDone} />
      ) : (
        <ArrowButton direction="right" onClick={onNext} />
      )}
    </div>
  )
}
