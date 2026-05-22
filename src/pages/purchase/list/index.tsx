import { PAGES } from '../../../shared/constants/pages'
import { AppHeader } from '../../../shared/ui/AppHeader'

type Props = {
  onNavigate: (page: string) => void
}

const imgHeaderButtonShape = 'https://www.figma.com/api/mcp/asset/4e3de581-facb-46de-8d32-1007fbc02ec9'
const imgClose = 'https://www.figma.com/api/mcp/asset/a4626ac2-84e0-4cba-ba90-14e562a2a1a1'
const imgClock = 'https://www.figma.com/api/mcp/asset/0a2cdb86-5602-42fd-8a61-5ee92abbc87e'
const imgEnergyThumb = 'https://www.figma.com/api/mcp/asset/4abf1c55-6dc4-48f2-b85a-c67d60a54f6a'
const imgJerseyThumb = 'https://www.figma.com/api/mcp/asset/9438e80f-cca4-4d5d-a3f6-09f5f95dc648'
const imgPanelThumb = 'https://www.figma.com/api/mcp/asset/357fed73-abea-4319-b04d-76759686d315'
const imgStickerThumb = 'https://www.figma.com/api/mcp/asset/fba755a3-479d-44e8-a043-61881235910b'

type IconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

type PurchaseItem = {
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

function CloseButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[10px] items-center justify-center relative shrink-0 size-[24px] cursor-pointer"
      aria-label="Close"
    >
      <div className="flex-1 h-full relative rounded-[30px]">
        <img alt="" className="absolute block inset-0 size-full" src={imgHeaderButtonShape} />
      </div>
      <div className="absolute inset-[8.33%] overflow-clip">
        <div className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%]">
          <img alt="" className="absolute block inset-0 size-full" src={imgClose} />
        </div>
      </div>
    </button>
  )
}

function ItemIcon({ kind }: { kind: IconKind }) {
  if (kind === 'energy') {
    return (
      <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
        <div className="absolute inset-[calc(14.29%-0.71px)_calc(25%-0.5px)_calc(14.28%-0.71px)_calc(25%-0.5px)]">
          <img alt="" className="absolute block inset-0 size-full" src={imgEnergyThumb} />
        </div>
      </div>
    )
  }
  if (kind === 'jersey') {
    return (
      <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
        <div className="absolute inset-[calc(15.63%-0.69px)_calc(9.38%-0.81px)_calc(-7.71%-1.15px)_calc(9.38%-0.81px)]">
          <img alt="" className="absolute block inset-0 size-full" src={imgJerseyThumb} />
        </div>
      </div>
    )
  }
  if (kind === 'panel') {
    return (
      <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
        <div className="absolute inset-[calc(21.43%-0.57px)_calc(10.71%-0.79px)_calc(19.64%-0.61px)_calc(10.71%-0.79px)]">
          <img alt="" className="absolute block inset-0 size-full" src={imgPanelThumb} />
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      <div className="absolute inset-[calc(14.34%-0.71px)_calc(7.22%-0.86px)_calc(13.09%-0.74px)_calc(14.81%-0.7px)] flex items-center justify-center">
        <div className="-rotate-[20deg] size-full">
          <img alt="" className="absolute block inset-0 size-full" src={imgStickerThumb} />
        </div>
      </div>
    </div>
  )
}

function PurchaseCard({ item }: { item: PurchaseItem }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] shrink-0 w-full">
      <div className="flex gap-[12px] items-start shrink-0 w-full">
        <ItemIcon kind={item.icon} />
        <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px self-stretch">
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-[#a7c1e1] text-right leading-[20px] whitespace-nowrap">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[#44494e] text-[12px] leading-[1.2] overflow-hidden text-ellipsis w-full whitespace-nowrap">
            {item.txId}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end shrink-0 w-full">
        <p className="font-['Pretendard',sans-serif] font-normal text-[#bbbfd0] text-[12px] text-right leading-[1.2] whitespace-nowrap">
          {item.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end shrink-0 w-full">
          <div className="relative shrink-0 size-[12px]">
            <img alt="" className="absolute block inset-0 size-full" src={imgClock} />
          </div>
          <p className="font-['Pretendard',sans-serif] font-normal text-[#bbbfd0] text-[12px] text-right leading-[1.2] whitespace-nowrap">
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
      <div className="bg-[#f0f2f5] flex-1 min-h-px relative rounded-[16px] w-full overflow-hidden">
        <div className="flex flex-col gap-[16px] h-full items-center overflow-y-auto px-[16px] py-[48px]">
          {MOCK_PURCHASES.map((item, i) => (
            <PurchaseCard key={i} item={item} />
          ))}
        </div>
        <div className="absolute flex items-center justify-between left-0 overflow-clip p-[12px] right-0 top-0">
          <CloseButton onClick={() => onNavigate(PAGES.PROFILE)} />
          <div className="opacity-0 size-[24px]" />
        </div>
      </div>
    </div>
  )
}
