import { FOLLOW_ASSETS } from './FollowAssets'

interface Props {
  currentStep: 0 | 1 | 2
  onPrev?: () => void
  onNext: () => void
  nextLabel?: string
}

function NaviButton({ onClick, label, arrow, flip = false, hidden = false }: { onClick?: () => void; label?: string; arrow?: boolean; flip?: boolean; hidden?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-[1_0_0] h-[48px] max-w-[96px] min-w-[80px] relative rounded-[30px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] bg-[#969cda] hover:bg-[#afb5ea] transition-colors ${hidden ? 'opacity-0 pointer-events-none' : ''}`}
    >
      {label ? (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[16px] font-['Pretendard',sans-serif] font-bold leading-[20px] whitespace-nowrap">
          {label}
        </span>
      ) : (
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[36px] overflow-clip ${flip ? '-scale-x-100' : ''}`}>
          <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%]">
            {arrow && <img src={FOLLOW_ASSETS.arrowRight} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />}
          </div>
        </div>
      )}
    </button>
  )
}

export function StepIndicator({ currentStep, onPrev, onNext, nextLabel }: Props) {
  const isFirst = currentStep === 0
  return (
    <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 flex gap-[10px] items-center justify-center left-0 right-0 px-[16px] py-[8px]">
      <NaviButton onClick={onPrev} arrow flip hidden={isFirst} />
      <div className="flex flex-[1_0_0] gap-[4px] items-center max-w-[190px] min-w-0 px-[5px] py-[10px]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-[1_0_0] items-center justify-center min-w-0">
            {i === currentStep ? (
              <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
            ) : (
              <div className="bg-[#b2bac3] rounded-[4px] size-[8px]" />
            )}
          </div>
        ))}
      </div>
      {nextLabel ? (
        <NaviButton onClick={onNext} label={nextLabel} />
      ) : (
        <NaviButton onClick={onNext} arrow />
      )}
    </div>
  )
}
