import { FOLLOW_ASSETS } from './assets'

export function BoostTag() {
  return (
    <div className="bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] via-[4.808%] to-[#6f4cff] flex gap-[2px] items-center justify-center overflow-hidden px-[2px] py-px rounded-[2px] shrink-0">
      <div className="overflow-hidden relative size-[6px] shrink-0">
        <div className="absolute h-[6px] w-[3.44px] inset-[0_20.83%_0_22.92%]">
          <div className="absolute inset-[5.85%_10.2%]">
            <img src={FOLLOW_ASSETS.boostLightning} className="absolute block max-w-none size-full shrink-0" alt="" />
          </div>
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold leading-none text-[8px] text-white whitespace-nowrap shrink-0">
        BOOST
      </p>
    </div>
  )
}
