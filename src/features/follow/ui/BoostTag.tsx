import { FOLLOW_ASSETS } from './FollowAssets'

export function BoostTag() {
  return (
    <div className="bg-gradient-to-b from-[#c0b1ff] via-[4.808%] via-[#a28cff] to-[#6f4cff] flex gap-[2px] items-center justify-center overflow-clip px-[2px] py-px rounded-[2px] shrink-0">
      <div className="relative size-[6px] shrink-0 overflow-clip">
        <img
          src={FOLLOW_ASSETS.boostLightning}
          className="absolute inset-[0_20.83%_0_22.92%] block max-w-none size-full shrink-0"
          alt=""
        />
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-white leading-none whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}
