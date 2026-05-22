const imgEnergy = 'https://www.figma.com/api/mcp/asset/aae391ac-b9db-4258-a53f-a614c493521d'

export function BoostTag() {
  return (
    <div className="bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] via-[4.808%] to-[#6f4cff] flex gap-[2px] items-center justify-center overflow-clip px-[2px] py-[1px] rounded-[2px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[6px]">
        <div className="absolute inset-[0_20.83%_0_22.92%]">
          <div className="absolute inset-[5.85%_10.2%]">
            <img alt="" className="absolute block inset-0 size-full" src={imgEnergy} />
          </div>
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[8px] text-white leading-[normal] whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}
