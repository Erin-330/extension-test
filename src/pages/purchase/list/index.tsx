import { PAGES } from '../../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const ASSETS = {
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/6721392a-d507-4b82-b378-3e3a9bb8bd05',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/6c152e22-bea8-4915-aa1f-8f960f981dd6',
  closeIconUnion: 'https://www.figma.com/api/mcp/asset/ab3c4af0-c653-4468-8259-1bc4b1378756',
  closeButtonShape: 'https://www.figma.com/api/mcp/asset/2edf7a4f-b325-4c2c-b189-39cf27d68faa',
  backArrow: 'https://www.figma.com/api/mcp/asset/19c85075-bf5d-4f0c-b713-a07a31aa479c',
  energyIcon: 'https://www.figma.com/api/mcp/asset/12c32871-d766-455c-8a79-a8d69ea89443',
  jerseyIcon: 'https://www.figma.com/api/mcp/asset/ae65a980-9991-4914-8cef-249b6ea3049d',
  panelIcon: 'https://www.figma.com/api/mcp/asset/d52ab456-ffad-4e03-9a61-2ab6a996df09',
  stickerIcon: 'https://www.figma.com/api/mcp/asset/1c6230d6-c867-4e2c-81d8-8e8f50c3c44b',
  clockIcon: 'https://www.figma.com/api/mcp/asset/cc222b24-dc25-4f09-9bb7-ee43066d1afd',
}

type IconType = 'energy' | 'jersey' | 'panel' | 'sticker'

const MOCK_PURCHASES: { name: string; icon: IconType; txId: string; date: string; elapsed: string }[] = [
  { name: '50 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '40 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Jersey (Seoha)', icon: 'jersey', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Panel', icon: 'panel', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'Sticker No.32', icon: 'sticker', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
]

function ItemIcon({ type }: { type: IconType }) {
  if (type === 'sticker') {
    return (
      <div className="bg-white border border-[#a7c1e1] overflow-hidden rounded-[8px] shrink-0 w-[48px] h-[48px] relative">
        <img src={ASSETS.stickerIcon} className="shrink-0 w-[32px] h-[32px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12" alt="" />
      </div>
    )
  }
  const iconUrl =
    type === 'energy'
      ? ASSETS.energyIcon
      : type === 'jersey'
      ? ASSETS.jerseyIcon
      : ASSETS.panelIcon
  return (
    <div className="bg-white border border-[#a7c1e1] overflow-hidden rounded-[8px] shrink-0 w-[48px] h-[48px] relative">
      <img src={iconUrl} className="shrink-0 w-[24px] h-[34px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px] font-['Pretendard',sans-serif]">
      {/* Outer RORR header */}
      <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] w-full shrink-0">
        <div className="flex gap-[4px] items-center">
          <div className="relative w-[22px] h-[18px] shrink-0">
            <img src={ASSETS.rorrLogoStroke} className="absolute inset-0 w-full h-full" alt="" />
            <img src={ASSETS.rorrLogoExclude} className="absolute inset-0 w-full h-full" alt="" />
          </div>
          <p className="font-light text-[14px] leading-[20px] text-white">RORR</p>
        </div>
        <button onClick={() => onNavigate(PAGES.PROFILE)} className="shrink-0">
          <img src={ASSETS.closeIconUnion} className="shrink-0 w-[12px] h-[12px]" alt="close" />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden">
        {/* UI Header */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[12px] z-10">
          <button onClick={() => onNavigate(PAGES.PROFILE)} className="relative w-[24px] h-[24px] flex items-center justify-center shrink-0">
            <img src={ASSETS.closeButtonShape} className="absolute inset-0 w-full h-full" alt="" />
            <img src={ASSETS.backArrow} className="shrink-0 w-[10px] h-[8px] relative" alt="back" />
          </button>
          <div className="w-[24px] h-[24px] opacity-0" />
        </div>

        <div className="h-full overflow-y-auto px-[16px] py-[48px] flex flex-col gap-[16px]">
          {MOCK_PURCHASES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] w-full shrink-0"
            >
              <div className="flex gap-[12px] items-start w-full">
                <ItemIcon type={item.icon} />
                <div className="flex flex-1 min-w-0 flex-col gap-[8px] items-start self-stretch">
                  <p className="font-bold text-[16px] leading-[20px] text-[#a7c1e1] text-right whitespace-nowrap">
                    {item.name}
                  </p>
                  <p className="font-normal text-[12px] leading-[1.2] text-[#44494e] overflow-hidden text-ellipsis whitespace-nowrap w-full">
                    {item.txId}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-end w-full">
                <p className="font-normal text-[12px] leading-[1.2] text-[#bbbfd0] text-right whitespace-nowrap">
                  {item.date}
                </p>
                <div className="flex gap-[4px] items-center justify-end w-full">
                  <img src={ASSETS.clockIcon} className="shrink-0 w-[12px] h-[12px]" alt="" />
                  <p className="font-normal text-[12px] leading-[1.2] text-[#bbbfd0] text-right whitespace-nowrap">
                    {item.elapsed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
