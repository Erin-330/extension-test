import { PAGES } from '../../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ASSET_RORR_UNION_STROKE = 'https://www.figma.com/api/mcp/asset/aee85691-292a-400f-b4d0-21f2280a764b'
const ASSET_RORR_EXCLUDE = 'https://www.figma.com/api/mcp/asset/c37697a5-ab7e-4c2a-bf74-cf45c22f3441'
const ASSET_HEADER_UNION = 'https://www.figma.com/api/mcp/asset/a9cced93-d73f-4c6c-b730-153b41ab101a'
const ASSET_BTN_BG = 'https://www.figma.com/api/mcp/asset/3dd63a91-b901-450f-afbd-a8c5b9061a95'
const ASSET_BTN_CLOSE_X = 'https://www.figma.com/api/mcp/asset/9b547db5-e32e-401a-8512-01b56acf0fef'
const ASSET_CLOCK = 'https://www.figma.com/api/mcp/asset/da9b86b7-1e9f-4dc6-a478-1b0cdc6c3f2b'
const ASSET_ICON_ENERGY = 'https://www.figma.com/api/mcp/asset/fb85852d-44af-438c-8cca-2b82ebe8d515'
const ASSET_ICON_JERSEY = 'https://www.figma.com/api/mcp/asset/0eea2fe5-883b-47ae-807d-7e98d9e16764'
const ASSET_ICON_PANEL = 'https://www.figma.com/api/mcp/asset/aaedf8c3-b43c-4851-8bb0-f2abd517850f'
const ASSET_ICON_STICKER = 'https://www.figma.com/api/mcp/asset/808f14e0-7f9d-4907-8526-908e0c6b2135'

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
    <div className="bg-white border border-[#a7c1e1] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      {kind === 'energy' && (
        <div className="absolute inset-[14.29%_25%]">
          <img alt="" src={ASSET_ICON_ENERGY} className="absolute inset-0 size-full" />
        </div>
      )}
      {kind === 'jersey' && (
        <div className="absolute inset-[15.63%_9.38%_-7.71%_9.38%]">
          <img alt="" src={ASSET_ICON_JERSEY} className="absolute inset-0 size-full" />
        </div>
      )}
      {kind === 'panel' && (
        <div className="absolute inset-[21.43%_10.71%_19.64%_10.71%]">
          <img alt="" src={ASSET_ICON_PANEL} className="absolute inset-0 size-full" />
        </div>
      )}
      {kind === 'sticker' && (
        <div className="absolute inset-[14.34%_7.22%_13.09%_14.81%] -rotate-[20deg]">
          <img alt="" src={ASSET_ICON_STICKER} className="absolute inset-0 size-full" />
        </div>
      )}
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full shrink-0">
        <div className="flex gap-[4px] items-center justify-center">
          <div className="-scale-y-100 rotate-180">
            <div className="h-[18px] relative w-[22px] overflow-clip">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" src={ASSET_RORR_UNION_STROKE} className="absolute inset-0 size-full" />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" src={ASSET_RORR_EXCLUDE} className="absolute inset-0 size-full" />
              </div>
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <div className="size-[12.414px] relative shrink-0">
          <img alt="" src={ASSET_HEADER_UNION} className="absolute inset-0 size-full" />
        </div>
      </div>

      <div className="bg-[#f0f2f5] flex flex-1 min-h-px relative rounded-[16px] w-full overflow-hidden">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-center min-w-px overflow-y-auto px-[16px] py-[48px]">
          {MOCK_PURCHASES.map((p, i) => (
            <div
              key={i}
              className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] shrink-0 w-full"
            >
              <div className="flex gap-[12px] items-start w-full">
                <ItemIcon kind={p.icon} />
                <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0 self-stretch">
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-[#a7c1e1] text-right whitespace-nowrap">
                    {p.name}
                  </p>
                  <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#44494e] overflow-hidden text-ellipsis whitespace-nowrap w-full">
                    {p.txId}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-end w-full">
                <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#bbbfd0] text-right whitespace-nowrap">
                  {p.date}
                </p>
                <div className="flex gap-[4px] items-center justify-end w-full">
                  <div className="relative size-[12px] shrink-0">
                    <img alt="" src={ASSET_CLOCK} className="absolute inset-0 size-full" />
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#bbbfd0] text-right whitespace-nowrap">
                    {p.elapsed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] overflow-clip">
          <button
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="relative size-[24px] flex items-center justify-center shrink-0"
            aria-label="close"
          >
            <div className="absolute inset-0 rounded-[30px]">
              <img alt="" src={ASSET_BTN_BG} className="absolute inset-0 size-full" />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%]">
                <img alt="" src={ASSET_BTN_CLOSE_X} className="absolute inset-0 size-full" />
              </div>
            </div>
          </button>
          <div className="opacity-0 size-[24px]" />
        </div>
      </div>
    </div>
  )
}
