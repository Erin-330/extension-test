import { FOLLOW_ASSETS } from './assets'

export function BoostTag() {
  return (
    <div className="bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] via-[4.808%] to-[#6f4cff] flex gap-[2px] items-center justify-center overflow-clip px-[2px] py-px rounded-[2px] shrink-0">
      <div className="overflow-clip relative shrink-0 w-[6px] h-[6px]">
        <div className="absolute inset-[0_20.83%_0_22.92%]">
          <div className="absolute inset-[5.85%_10.2%]">
            <img alt="" src={FOLLOW_ASSETS.energyIcon} className="absolute inset-0 max-w-none w-full h-full" />
          </div>
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold leading-none text-[8px] text-white whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}
