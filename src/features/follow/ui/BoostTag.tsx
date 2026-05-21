import { FOLLOW_ASSETS } from './assets'

export function BoostTag() {
  return (
    <div className="bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] via-[4.808%] to-[#6f4cff] flex gap-[2px] items-center justify-center px-[2px] py-px rounded-[2px] shrink-0">
      <div className="size-[6px] flex items-center justify-center">
        <img alt="" src={FOLLOW_ASSETS.boostIcon} className="block w-[2.34px] h-[5.3px]" />
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-white whitespace-nowrap leading-none">
        BOOST
      </p>
    </div>
  )
}
