import { PAGES } from '../../../shared/constants/pages'

interface PurchaseListPageProps {
  onNavigate: (page: string) => void
}

const IMG_HEADER_BUTTON_SHAPE = 'https://www.figma.com/api/mcp/asset/fa85d746-f521-443f-9b4e-589de25dd005'
const IMG_ENERGY = 'https://www.figma.com/api/mcp/asset/96eca855-9132-4770-a692-5044b886fe4a'
const IMG_CLOCK = 'https://www.figma.com/api/mcp/asset/a93e8c22-b02f-4004-a140-16aa9c56cdbf'
const IMG_JERSEY = 'https://www.figma.com/api/mcp/asset/5a7562a6-6862-43de-a2f2-4e9f347c9362'
const IMG_PANEL = 'https://www.figma.com/api/mcp/asset/219e19be-2841-45de-9698-82ca4dc34019'
const IMG_STICKER = 'https://www.figma.com/api/mcp/asset/893fe8ee-69c8-4d9a-b282-79f64d3c63fd'
const IMG_BACK_ARROW = 'https://www.figma.com/api/mcp/asset/928ba87a-cfd9-4847-8ce6-6f912b25e580'
const IMG_RORR_UNION_STROKE = 'https://www.figma.com/api/mcp/asset/a88007cc-ec31-47d0-a1d7-4e5149b4ea02'
const IMG_RORR_EXCLUDE = 'https://www.figma.com/api/mcp/asset/e849505a-b395-4b9c-b27c-8898d2e1fac9'
const IMG_HEADER_CLOSE = 'https://www.figma.com/api/mcp/asset/049d58d6-a09d-4b59-9da4-29aec81fd6a7'

type IconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

type Purchase = {
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
    <div className="bg-white border border-[#a7c1e1] border-solid overflow-hidden relative rounded-[8px] shrink-0 size-[48px]">
      {kind === 'energy' && (
        <div className="absolute inset-[calc(14.29%-0.71px)_calc(25%-0.5px)_calc(14.28%-0.71px)_calc(25%-0.5px)]">
          <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_ENERGY} />
        </div>
      )}
      {kind === 'jersey' && (
        <div className="absolute inset-[calc(15.63%-0.69px)_calc(9.38%-0.81px)_calc(-7.71%-1.15px)_calc(9.38%-0.81px)]">
          <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_JERSEY} />
        </div>
      )}
      {kind === 'panel' && (
        <div className="absolute inset-[calc(21.43%-0.57px)_calc(10.71%-0.79px)_calc(19.64%-0.61px)_calc(10.71%-0.79px)]">
          <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_PANEL} />
        </div>
      )}
      {kind === 'sticker' && (
        <div className="absolute inset-[calc(14.34%-0.71px)_calc(7.22%-0.86px)_calc(13.09%-0.74px)_calc(14.81%-0.7px)]">
          <div className="relative size-full -rotate-[20deg]">
            <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_STICKER} />
          </div>
        </div>
      )}
    </div>
  )
}

function PurchaseItem({ item }: { item: Purchase }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] shrink-0 w-full">
      <div className="flex gap-[12px] items-start w-full">
        <ItemIcon kind={item.icon} />
        <div className="flex flex-1 min-w-0 flex-col gap-[8px] items-start self-stretch">
          <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-[#a7c1e1] text-right whitespace-nowrap">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-[#44494e] overflow-hidden text-ellipsis whitespace-nowrap min-w-full">
            {item.txId}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end w-full">
        <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-[#bbbfd0] text-right whitespace-nowrap">
          {item.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end w-full">
          <div className="relative shrink-0 size-[12px]">
            <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_CLOCK} />
          </div>
          <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-[#bbbfd0] text-right whitespace-nowrap">
            {item.elapsed}
          </p>
        </div>
      </div>
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: PurchaseListPageProps) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      {/* Outer RORR header */}
      <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center">
          <div className="-scale-y-100 rotate-180">
            <div className="h-[18px] overflow-hidden relative w-[22px]">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_RORR_UNION_STROKE} />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_RORR_EXCLUDE} />
              </div>
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <button onClick={() => onNavigate(PAGES.PROFILE)} className="relative shrink-0 size-[12.414px]">
          <img alt="close" className="absolute inset-0 max-w-none size-full" src={IMG_HEADER_CLOSE} />
        </button>
      </div>

      {/* Inner UI panel */}
      <div className="flex-1 min-h-0 bg-[#f0f2f5] rounded-[16px] relative overflow-hidden w-full">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="flex flex-col gap-[16px] items-center px-[16px] py-[48px] w-full">
            {MOCK_PURCHASES.map((item, idx) => (
              <PurchaseItem key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* UI Header (Close + invisible Info) - absolute */}
        <div className="absolute flex items-center justify-between left-0 right-0 top-0 overflow-hidden p-[12px]">
          <button
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="flex items-center justify-center relative size-[24px]"
          >
            <div className="absolute inset-0 rounded-[30px]">
              <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_HEADER_BUTTON_SHAPE} />
            </div>
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%]">
                <img alt="back" className="absolute inset-0 max-w-none size-full" src={IMG_BACK_ARROW} />
              </div>
            </div>
          </button>
          <div className="opacity-0 size-[24px]" />
        </div>
      </div>
    </div>
  )
}
