const ENERGY_ICON = 'https://www.figma.com/api/mcp/asset/0d2b10a0-eba7-4b7b-bcc5-96ed311311eb'

export function BoostTag() {
  return (
    <div className="bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] via-[4.808%] to-[#6f4cff] flex gap-[2px] items-center justify-center overflow-clip px-[2px] py-px rounded-[2px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[6px]">
        <div className="absolute inset-[0_20.83%_0_22.92%] h-full">
          <div className="absolute inset-[5.85%_10.2%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={ENERGY_ICON} />
          </div>
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold leading-[normal] not-italic shrink-0 text-[8px] text-white whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}
