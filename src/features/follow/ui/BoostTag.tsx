import { ASSETS } from './assets'

export function BoostTag() {
  return (
    <div className="flex items-center justify-center gap-[2px] px-[2px] py-[1px] rounded-[2px] bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] to-[#6f4cff]">
      <div className="relative shrink-0 w-[6px] h-[6px]">
        <img
          src={ASSETS.boostLightning}
          className="shrink-0 absolute inset-0 w-full h-full"
          alt=""
        />
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-white whitespace-nowrap leading-none">
        BOOST
      </p>
    </div>
  )
}
