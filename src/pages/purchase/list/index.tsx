import { PAGES } from '../../../shared/constants/pages'
import { AppHeader } from '../../../shared/ui/AppHeader'

const imgBtnShape = 'https://www.figma.com/api/mcp/asset/aae41be8-1d9d-4ca3-b1ef-2385adcbc9ce'
const imgXIcon = 'https://www.figma.com/api/mcp/asset/8946a465-60ce-4787-9ab5-af1f65fff872'
const imgClock = 'https://www.figma.com/api/mcp/asset/d7740cdb-ecd1-47a2-90cb-bd8180ad1e56'
const imgEnergyIcon = 'https://www.figma.com/api/mcp/asset/16ac3c41-34aa-4cbf-a41d-0c63ad2b2701'
const imgJerseyIcon = 'https://www.figma.com/api/mcp/asset/5df603a9-212d-4017-8f9c-8833072069e1'
const imgPanelIcon = 'https://www.figma.com/api/mcp/asset/0dc023ff-83c5-444b-a2d6-0adbfe24d311'
const imgStickerIcon = 'https://www.figma.com/api/mcp/asset/18709b43-df5f-4242-8f24-f0993ab79073'

interface Props {
  onNavigate: (page: string) => void
}

type IconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

interface PurchaseItem {
  name: string
  icon: IconKind
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

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative shrink-0 size-[24px] rounded-[30px]"
      aria-label="close"
    >
      <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgBtnShape} />
      <div className="absolute inset-[8.33%] overflow-clip">
        <div className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%]">
          <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgXIcon} />
        </div>
      </div>
    </button>
  )
}

function ItemIcon({ kind }: { kind: IconKind }) {
  if (kind === 'energy') {
    return (
      <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
        <div className="absolute inset-[14.29%_25%]">
          <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgEnergyIcon} />
        </div>
      </div>
    )
  }
  if (kind === 'jersey') {
    return (
      <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
        <div className="absolute inset-[15.63%_9.38%_-7.71%_9.38%]">
          <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgJerseyIcon} />
        </div>
      </div>
    )
  }
  if (kind === 'panel') {
    return (
      <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
        <div className="absolute inset-[21.43%_10.71%_19.64%_10.71%]">
          <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgPanelIcon} />
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      <div
        className="absolute inset-[14.34%_7.22%_13.09%_14.81%]"
        style={{ transform: 'rotate(-20deg)' }}
      >
        <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgStickerIcon} />
      </div>
    </div>
  )
}

function PurchaseCard({ item }: { item: PurchaseItem }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] shrink-0 w-full">
      <div className="flex gap-[12px] items-start shrink-0 w-full">
        <ItemIcon kind={item.icon} />
        <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px self-stretch whitespace-nowrap">
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-[#a7c1e1] text-right leading-[20px]">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#44494e] min-w-full overflow-hidden text-ellipsis leading-[1.2]">
            {item.txId}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end shrink-0 w-full">
        <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#bbbfd0] text-right leading-[1.2] whitespace-nowrap">
          {item.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end shrink-0 w-full">
          <img alt="" src={imgClock} className="shrink-0 w-[12px] h-[12px]" />
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
      <AppHeader onClose={() => onNavigate(PAGES.PROFILE)} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start min-h-px overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-center min-w-px overflow-y-auto px-[16px] py-[48px]">
          {MOCK_PURCHASES.map((item, i) => (
            <PurchaseCard key={i} item={item} />
          ))}
        </div>

        {/* UI Header */}
        <div className="absolute flex items-center justify-between left-0 overflow-clip p-[12px] right-0 top-0">
          <CloseButton onClick={() => onNavigate(PAGES.PROFILE)} />
          <div className="opacity-0 shrink-0 size-[24px]" />
        </div>
      </div>
    </div>
  )
}
