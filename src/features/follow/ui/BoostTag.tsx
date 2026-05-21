import { FOLLOW_ICON } from './assets'

export function BoostTag() {
  return (
    <div className="bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] via-[4.808%] to-[#6f4cff] flex gap-[2px] items-center justify-center px-[2px] py-px rounded-[2px] overflow-clip shrink-0">
      <div className="relative size-[6px] overflow-clip shrink-0">
        <div className="absolute inset-[0_20.83%_0_22.92%]">
          <div className="absolute inset-[5.85%_10.2%] h-[88.3%] w-[79.6%]">
            <img alt="" className="block w-full h-full" src={FOLLOW_ICON.energyBolt} />
          </div>
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-white whitespace-nowrap leading-none">
        BOOST
      </p>
    </div>
  )
}
