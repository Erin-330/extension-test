import { PAGES } from '../../../shared/constants/pages'
import { AppHeader } from '../../../shared/ui/AppHeader'

interface PurchaseListPageProps {
  onNavigate: (page: string) => void
}

const ICON_CLOSE_BG = 'https://www.figma.com/api/mcp/asset/e460c255-945b-4bfc-a978-ba980dfd71fb'
const ICON_CLOSE_X = 'https://www.figma.com/api/mcp/asset/88d81b97-9fd9-4fdd-a3d3-516df2fa2256'
const ICON_ENERGY = 'https://www.figma.com/api/mcp/asset/81b6b41d-80e2-4cee-a2e6-c103e9a65dcc'
const ICON_JERSEY = 'https://www.figma.com/api/mcp/asset/f7598061-630e-4b52-be7b-f75d5e3dee27'
const ICON_PANEL = 'https://www.figma.com/api/mcp/asset/7e4efa5a-655a-4774-8236-27de4d9c9675'
const ICON_STICKER = 'https://www.figma.com/api/mcp/asset/dcc44764-923c-4824-92be-6b431ce53f4a'
const ICON_CLOCK = 'https://www.figma.com/api/mcp/asset/eeab65a7-28e5-4ab3-8eab-22f1035922e1'

type IconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

interface Purchase {
  name: string
  icon: IconKind
  txId: string
  date: string
  elapsed: string
}

const MOCK_PURCHASES: Purchase[] = [
  { name: '50 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '40 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Jersey (Seoha)', icon: 'jersey', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Panel', icon: 'panel', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'Sticker No.32', icon: 'sticker', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
]

function ItemIcon({ kind }: { kind: IconKind }) {
  return (
    <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      {kind === 'energy' && (
        <div className="absolute inset-[calc(14.29%-0.71px)_calc(25%-0.5px)_calc(14.28%-0.71px)_calc(25%-0.5px)]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_ENERGY} />
        </div>
      )}
      {kind === 'jersey' && (
        <div className="absolute inset-[calc(15.63%-0.69px)_calc(9.38%-0.81px)_calc(-7.71%-1.15px)_calc(9.38%-0.81px)]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_JERSEY} />
        </div>
      )}
      {kind === 'panel' && (
        <div className="absolute inset-[calc(21.43%-0.57px)_calc(10.71%-0.79px)_calc(19.64%-0.61px)_calc(10.71%-0.79px)]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_PANEL} />
        </div>
      )}
      {kind === 'sticker' && (
        <div className="absolute inset-[14.34%_7.22%_13.09%_14.81%]">
          <div className="-rotate-[20deg] origin-center w-full h-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_STICKER} />
          </div>
        </div>
      )}
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: PurchaseListPageProps) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start min-h-px overflow-clip relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-center min-w-px px-[16px] py-[48px] overflow-y-auto">
          {MOCK_PURCHASES.map((p, i) => (
            <div key={i} className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] shrink-0 w-full">
              <div className="flex gap-[12px] items-start shrink-0 w-full">
                <ItemIcon kind={p.icon} />
                <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px self-stretch">
                  <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] not-italic shrink-0 text-[#a7c1e1] text-[16px] text-right w-full">
                    {p.name}
                  </p>
                  <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] not-italic shrink-0 text-[#44494e] text-[12px] overflow-hidden text-ellipsis w-full whitespace-nowrap">
                    {p.txId}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-end shrink-0 w-full">
                <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] not-italic shrink-0 text-[#bbbfd0] text-[12px] text-right whitespace-nowrap">
                  {p.date}
                </p>
                <div className="flex gap-[4px] items-center justify-end shrink-0 w-full">
                  <img src={ICON_CLOCK} alt="" className="shrink-0 w-[12px] h-[12px]" />
                  <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] not-italic shrink-0 text-[#bbbfd0] text-[12px] text-right whitespace-nowrap">
                    {p.elapsed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute flex items-center justify-between left-0 overflow-clip p-[12px] right-0 top-0">
          <button onClick={() => onNavigate(PAGES.PROFILE)} className="flex gap-[10px] items-center justify-center relative shrink-0 size-[24px]" aria-label="close">
            <div className="flex-1 h-full min-w-px relative rounded-[30px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_CLOSE_BG} />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_CLOSE_X} />
              </div>
            </div>
          </button>
          <div className="opacity-0 relative shrink-0 size-[24px]" />
        </div>
      </div>
    </div>
  )
}
