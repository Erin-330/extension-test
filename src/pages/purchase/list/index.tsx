import { PAGES } from '../../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const ASSETS = {
  headerBtnBg: 'https://www.figma.com/api/mcp/asset/4131d611-22a4-4636-b37a-033464624030',
  closeX: 'https://www.figma.com/api/mcp/asset/b27ab044-3054-41c2-b80d-333b659c594a',
  energyIcon: 'https://www.figma.com/api/mcp/asset/8f58f474-4ae7-4813-b2a0-775345ae307e',
  jerseyIcon: 'https://www.figma.com/api/mcp/asset/e904573e-3a4f-4d60-9707-071b97f7e3c1',
  panelIcon: 'https://www.figma.com/api/mcp/asset/d7401b9b-4ef6-4e70-b1b2-50070f35407f',
  stickerIcon: 'https://www.figma.com/api/mcp/asset/c1e5f16d-ef4c-4ef9-a16d-bae0f50bfbdf',
  clockIcon: 'https://www.figma.com/api/mcp/asset/647d2e89-3435-4021-ad05-3ca31a5da5fe',
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/8da90fcc-fdfb-4903-b47a-56e9f106bb26',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/949449cc-0e25-41df-8425-0b0f07a80980',
  closeHeaderIcon: 'https://www.figma.com/api/mcp/asset/93dbe5f3-825b-430b-b73a-d1b34219d177',
}

type IconType = 'energy' | 'jersey' | 'panel' | 'sticker'

interface PurchaseItem {
  name: string
  icon: IconType
  txId: string
  date: string
  elapsed: string
}

const MOCK_PURCHASES: PurchaseItem[] = [
  { name: '50 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '40 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Jersey (Seoha)', icon: 'jersey', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Panel', icon: 'panel', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'Sticker No.32', icon: 'sticker', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
]

function ItemThumb({ icon }: { icon: IconType }) {
  return (
    <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      {icon === 'energy' && (
        <img src={ASSETS.energyIcon} className="absolute inset-[14.29%_25%] block max-w-none size-full shrink-0" alt="" />
      )}
      {icon === 'jersey' && (
        <img src={ASSETS.jerseyIcon} className="absolute inset-[15.63%_9.38%_-7.71%_9.38%] block max-w-none size-full shrink-0" alt="" />
      )}
      {icon === 'panel' && (
        <img src={ASSETS.panelIcon} className="absolute inset-[21.43%_10.71%] block max-w-none size-full shrink-0" alt="" />
      )}
      {icon === 'sticker' && (
        <div className="absolute inset-[14.34%_7.22%_13.09%_14.81%] flex items-center justify-center">
          <img src={ASSETS.stickerIcon} className="block max-w-none size-full -rotate-[20deg] shrink-0" alt="" />
        </div>
      )}
    </div>
  )
}

function PurchaseCard({ item }: { item: PurchaseItem }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] w-full shrink-0">
      <div className="flex gap-[12px] items-start w-full">
        <ItemThumb icon={item.icon} />
        <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start self-stretch min-w-0">
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-[#a7c1e1] text-right leading-[20px] whitespace-nowrap">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#44494e] leading-[1.2] overflow-hidden text-ellipsis whitespace-nowrap w-full">
            {item.txId}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end w-full">
        <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#bbbfd0] text-right leading-[1.2] whitespace-nowrap">
          {item.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end w-full">
          <img src={ASSETS.clockIcon} className="size-[12px] shrink-0" alt="" />
          <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#bbbfd0] text-right leading-[1.2] whitespace-nowrap">
            {item.elapsed}
          </p>
        </div>
      </div>
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between px-[4px] w-full opacity-[0.66] shrink-0">
        <div className="flex gap-[4px] items-center justify-center shrink-0">
          <div className="relative h-[18px] w-[22px] overflow-hidden -scale-y-100 rotate-180">
            <img src={ASSETS.rorrLogoStroke} className="absolute inset-0 w-full h-full shrink-0" alt="" />
            <img src={ASSETS.rorrLogoExclude} className="absolute inset-0 w-full h-full shrink-0" alt="" />
          </div>
          <p className="text-white text-[14px] font-['Pretendard',sans-serif] font-light leading-[20px] whitespace-nowrap">RORR</p>
        </div>
        <button onClick={() => onNavigate(PAGES.PROFILE)} className="size-[12.414px] shrink-0">
          <img src={ASSETS.closeHeaderIcon} className="w-full h-full shrink-0" alt="" />
        </button>
      </div>

      <div className="bg-[#f0f2f5] flex flex-[1_0_0] items-start min-h-0 rounded-[16px] w-full relative overflow-hidden">
        <div className="flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-0 px-[16px] py-[48px] overflow-y-auto">
          {MOCK_PURCHASES.map((item, idx) => (
            <PurchaseCard key={idx} item={item} />
          ))}
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] overflow-clip">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="size-[24px] relative shrink-0"
            aria-label="close"
          >
            <img src={ASSETS.headerBtnBg} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
            <div className="absolute inset-[8.33%] overflow-clip">
              <img src={ASSETS.closeX} className="absolute inset-[31.37%_35.77%_31.37%_25%] block max-w-none shrink-0" alt="" />
            </div>
          </button>
          <div className="size-[24px] opacity-0 shrink-0" />
        </div>
      </div>
    </div>
  )
}
