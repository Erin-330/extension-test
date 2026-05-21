const ASSET_LIGHTNING = 'https://www.figma.com/api/mcp/asset/01236762-2fd0-473d-9248-e3bebad2db7d'

export function BoostTag() {
  return (
    <div className="flex bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] to-[#6f4cff] gap-[2px] items-center justify-center overflow-hidden px-[2px] py-px rounded-[2px] shrink-0">
      <div className="relative shrink-0 size-[6px] overflow-clip">
        <div className="absolute inset-[0_20.83%_0_22.92%]">
          <div className="absolute inset-[5.85%_10.2%]">
            <img alt="" src={ASSET_LIGHTNING} className="absolute inset-0 size-full" />
          </div>
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] leading-none text-white whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}
