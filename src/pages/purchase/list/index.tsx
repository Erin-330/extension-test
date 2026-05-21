import { PAGES } from '../../../shared/constants/pages'
import { FOLLOW_ASSETS } from '../../../features/follow/ui/assets'

type Props = { onNavigate: (page: string) => void }

const PURCHASE_ASSETS = {
  closeBtnBg: 'https://www.figma.com/api/mcp/asset/84f72173-5aee-4ec2-8d9f-bfd8bd2897bd',
  backArrow: 'https://www.figma.com/api/mcp/asset/623e9b47-d825-42df-841a-ea371f0ba2ad',
  energyBoltIcon: 'https://www.figma.com/api/mcp/asset/1b444539-84d9-490b-a0cf-a7450a2d97c8',
  clockIcon: 'https://www.figma.com/api/mcp/asset/6e10d51e-f0b6-443c-8807-b7b46fd8c7c6',
  jerseyIcon: 'https://www.figma.com/api/mcp/asset/ceb9f001-53b3-44e2-b8c9-9e877ace2eb6',
  panelIcon: 'https://www.figma.com/api/mcp/asset/4eca7a67-b538-465f-9924-cd2a93a4fa54',
  stickerIcon: 'https://www.figma.com/api/mcp/asset/0784ec19-1c19-474d-9323-b34abd388ed3',
  topRightX: 'https://www.figma.com/api/mcp/asset/b6692304-df39-473d-9c5f-acdd3396eda6',
} as const

type PurchaseItem = {
  id: string
  title: string
  txId: string
  date: string
  ago: string
  iconType: 'energy' | 'jersey' | 'panel' | 'sticker'
}

const MOCK_ITEMS: PurchaseItem[] = [
  { id: '1', title: '50 Energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', ago: '11 months', iconType: 'energy' },
  { id: '2', title: '20 Energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', ago: '11 months', iconType: 'energy' },
  { id: '3', title: '40 Energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', ago: '11 months', iconType: 'energy' },
  { id: '4', title: 'T1 Jersey (Seoha)', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', ago: '11 months', iconType: 'jersey' },
  { id: '5', title: 'T1 Panel', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', ago: '11 months', iconType: 'panel' },
  { id: '6', title: 'Sticker No.32', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', ago: '11 months', iconType: 'sticker' },
  { id: '7', title: '20 Energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', ago: '11 months', iconType: 'energy' },
]

const ICON_BY_TYPE: Record<PurchaseItem['iconType'], string> = {
  energy: PURCHASE_ASSETS.energyBoltIcon,
  jersey: PURCHASE_ASSETS.jerseyIcon,
  panel: PURCHASE_ASSETS.panelIcon,
  sticker: PURCHASE_ASSETS.stickerIcon,
}

function AppTopBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] shrink-0 w-full">
      <div className="flex gap-[4px] items-center justify-center">
        <div className="relative h-[18px] w-[22px]">
          <img alt="" src={FOLLOW_ASSETS.rorrLogoStroke} className="absolute inset-0 size-full" />
          <img alt="" src={FOLLOW_ASSETS.rorrLogoExclude} className="absolute inset-0 size-full" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
          RORR
        </p>
      </div>
      <button type="button" onClick={onClose} className="size-[12.414px] flex items-center justify-center">
        <img alt="close" src={PURCHASE_ASSETS.topRightX} className="block size-full" />
      </button>
    </div>
  )
}

function PurchaseRow({ item }: { item: PurchaseItem }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] w-full shrink-0">
      <div className="flex gap-[12px] items-start w-full">
        <div className="bg-white border border-[#a7c1e1] border-solid overflow-hidden rounded-[8px] shrink-0 size-[48px] flex items-center justify-center">
          <img alt="" src={ICON_BY_TYPE[item.iconType]} className="block w-[24px] h-[24px] object-contain" />
        </div>
        <div className="flex flex-1 flex-col gap-[8px] items-start self-stretch min-w-0">
          <p className="font-['Pretendard',sans-serif] font-bold text-[#a7c1e1] text-[16px] leading-[20px] text-right">
            {item.title}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[#44494e] text-[12px] leading-[1.2] w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {item.txId}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end w-full">
        <p className="font-['Pretendard',sans-serif] font-normal text-[#bbbfd0] text-[12px] leading-[1.2] text-right">
          {item.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end w-full">
          <img alt="" src={PURCHASE_ASSETS.clockIcon} className="block size-[12px]" />
          <p className="font-['Pretendard',sans-serif] font-normal text-[#bbbfd0] text-[12px] leading-[1.2] text-right">
            {item.ago}
          </p>
        </div>
      </div>
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppTopBar onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="relative bg-[#f0f2f5] flex-1 min-h-0 overflow-hidden rounded-[16px] w-full">
        <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-[12px]">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="relative size-[24px] rounded-full overflow-hidden flex items-center justify-center"
            aria-label="back"
          >
            <img alt="" src={PURCHASE_ASSETS.closeBtnBg} className="absolute inset-0 size-full" />
            <img alt="" src={PURCHASE_ASSETS.backArrow} className="relative w-[7.7px] h-[8px]" />
          </button>
        </div>
        <div className="flex flex-col gap-[16px] items-center h-full overflow-y-auto px-[16px] py-[48px]">
          {MOCK_ITEMS.map((item) => (
            <PurchaseRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
