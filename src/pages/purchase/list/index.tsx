import { PAGES } from '../../../shared/constants/pages'

const imgRorrUnionStroke = 'https://www.figma.com/api/mcp/asset/aac48be6-3a67-4de5-b7fc-6928ace01fdc'
const imgRorrExclude = 'https://www.figma.com/api/mcp/asset/3ed5883f-4764-4ae5-acd4-c6f756d87727'
const imgCloseTopRight = 'https://www.figma.com/api/mcp/asset/fa955d65-c004-4786-acf5-7298d61ad8a0'

const imgCloseBg = 'https://www.figma.com/api/mcp/asset/27653581-ebeb-4225-8457-c3d9c9c33caa'
const imgCloseX = 'https://www.figma.com/api/mcp/asset/29fabab2-5d8e-4098-b517-c088b720ef02'
const imgClockIcon = 'https://www.figma.com/api/mcp/asset/c10b0a34-a11d-4633-9c86-def7b02244a7'

const imgEnergyIcon = 'https://www.figma.com/api/mcp/asset/69e1c06a-5dd8-4c27-b44c-f4b82c554875'
const imgJerseyIcon = 'https://www.figma.com/api/mcp/asset/341ce6c6-eae9-4b0f-8dab-b45ff91b461c'
const imgPanelIcon = 'https://www.figma.com/api/mcp/asset/6d519ae4-aa0d-4abb-82a9-def40cfc1b58'
const imgStickerIcon = 'https://www.figma.com/api/mcp/asset/6672fc47-3708-4f98-8917-75737e776646'

type IconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

type Purchase = {
  name: string
  icon: IconKind
  txId: string
  date: string
  elapsed: string
}

const MOCK_PURCHASES: Purchase[] = [
  { name: '50 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '40 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Jersey (Seoha)', icon: 'jersey',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Panel',          icon: 'panel',   txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'Sticker No.32',     icon: 'sticker', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
]

function ItemIcon({ kind }: { kind: IconKind }) {
  if (kind === 'energy') {
    return (
      <div className="bg-white border border-[#a7c1e1] border-solid overflow-hidden rounded-[8px] shrink-0 size-[48px] relative">
        <div className="absolute inset-[14.29%_25%]">
          <img src={imgEnergyIcon} alt="" className="absolute inset-0 w-full h-full" />
        </div>
      </div>
    )
  }
  if (kind === 'jersey') {
    return (
      <div className="bg-white border border-[#a7c1e1] border-solid overflow-hidden rounded-[8px] shrink-0 size-[48px] relative">
        <div className="absolute inset-[15.63%_9.38%_-7.71%_9.38%]">
          <img src={imgJerseyIcon} alt="" className="absolute inset-0 w-full h-full" />
        </div>
      </div>
    )
  }
  if (kind === 'panel') {
    return (
      <div className="bg-white border border-[#a7c1e1] border-solid overflow-hidden rounded-[8px] shrink-0 size-[48px] relative">
        <div className="absolute inset-[21.43%_10.71%_19.64%_10.71%]">
          <img src={imgPanelIcon} alt="" className="absolute inset-0 w-full h-full" />
        </div>
      </div>
    )
  }
  // sticker (rotated)
  return (
    <div className="bg-white border border-[#a7c1e1] border-solid overflow-hidden rounded-[8px] shrink-0 size-[48px] relative">
      <div className="absolute inset-[14.34%_7.22%_13.09%_14.81%] -rotate-12">
        <img src={imgStickerIcon} alt="" className="absolute inset-0 w-full h-full" />
      </div>
    </div>
  )
}

function PurchaseCard({ item }: { item: Purchase }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] shrink-0 w-full">
      <div className="flex gap-[12px] items-start shrink-0 w-full">
        <ItemIcon kind={item.icon} />
        <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px self-stretch whitespace-nowrap">
          <p className="font-['Pretendard',sans-serif] font-bold text-[#a7c1e1] text-[16px] leading-[20px]">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[#44494e] text-[12px] leading-[1.2] overflow-hidden text-ellipsis w-full">
            {item.txId}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end shrink-0 w-full">
        <p className="font-['Pretendard',sans-serif] font-normal text-[#bbbfd0] text-[12px] leading-[1.2] text-right whitespace-nowrap">
          {item.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end shrink-0 w-full">
          <img src={imgClockIcon} alt="" className="shrink-0 w-[12px] h-[12px]" />
          <p className="font-['Pretendard',sans-serif] font-normal text-[#bbbfd0] text-[12px] leading-[1.2] text-right whitespace-nowrap">
            {item.elapsed}
          </p>
        </div>
      </div>
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="h-dvh w-full flex flex-col items-start bg-[#46383a] pb-[11px] px-[11px]">
      {/* App header */}
      <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center justify-center shrink-0">
          <div className="relative shrink-0 w-[22px] h-[18px] overflow-hidden">
            <img src={imgRorrUnionStroke} className="absolute inset-0 w-full h-full" alt="" />
            <img src={imgRorrExclude} className="absolute inset-0 w-full h-full" alt="" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">RORR</p>
        </div>
        <button
          onClick={() => onNavigate(PAGES.PROFILE)}
          aria-label="close"
          className="shrink-0 w-[12.414px] h-[12.414px] relative"
        >
          <img src={imgCloseTopRight} className="absolute inset-0 w-full h-full" alt="" />
        </button>
      </div>

      {/* UI panel */}
      <div className="bg-[#f0f2f5] flex-1 min-h-0 relative rounded-[16px] w-full overflow-hidden">
        <div className="absolute inset-0 overflow-y-auto px-[16px] py-[48px]">
          <div className="flex flex-col gap-[16px] items-center w-full">
            {MOCK_PURCHASES.map((p, i) => (
              <PurchaseCard key={i} item={p} />
            ))}
          </div>
        </div>

        {/* UI Header (top, absolute) */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between overflow-hidden p-[12px]">
          <button
            onClick={() => onNavigate(PAGES.PROFILE)}
            aria-label="close"
            className="flex gap-[10px] items-center justify-center shrink-0 size-[24px] relative"
          >
            <div className="absolute inset-0">
              <img src={imgCloseBg} className="absolute inset-0 w-full h-full" alt="" />
            </div>
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute inset-[31.37%_35.77%_31.37%_25%]">
                <img src={imgCloseX} className="absolute inset-0 w-full h-full" alt="" />
              </div>
            </div>
          </button>
          {/* invisible info button placeholder (per spec) */}
          <div className="shrink-0 size-[24px] opacity-0" />
        </div>
      </div>
    </div>
  )
}
