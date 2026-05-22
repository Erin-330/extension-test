import { PAGES } from '../../../shared/constants/pages'
import { AppHeader } from '../../../shared/ui/AppHeader'

const imgHeaderShape = 'https://www.figma.com/api/mcp/asset/de9408ee-ebc6-4c9c-bd8c-986ebcd0a9b8'
const imgCloseStroke = 'https://www.figma.com/api/mcp/asset/d8fafcb7-e12f-43e8-b0f6-0af6eff20653'
const imgEnergy = 'https://www.figma.com/api/mcp/asset/cef2cd08-0308-4e16-8993-eb69ce2a8fce'
const imgClock = 'https://www.figma.com/api/mcp/asset/9120b263-d0b5-4e95-8b99-6711ff7e4771'
const imgJersey = 'https://www.figma.com/api/mcp/asset/0f499e3d-531b-4347-a4bd-ff3645c2cb93'
const imgPanel = 'https://www.figma.com/api/mcp/asset/14269357-1c88-4f1b-a9c3-2a55d7081f14'
const imgSticker = 'https://www.figma.com/api/mcp/asset/0f89bbd1-e401-493a-bade-47d420b420d3'

type IconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

const MOCK_PURCHASES: {
  name: string
  icon: IconKind
  txId: string
  date: string
  elapsed: string
}[] = [
  { name: '50 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '40 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Jersey (Seoha)', icon: 'jersey', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Panel', icon: 'panel', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'Sticker No.32', icon: 'sticker', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
]

function IconThumbnail({ icon }: { icon: IconKind }) {
  if (icon === 'energy') {
    return (
      <div className="bg-white border border-[#a7c1e1] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
        <div
          className="absolute"
          style={{ inset: 'calc(14.29% - 0.71px) calc(25% - 0.5px) calc(14.28% - 0.71px) calc(25% - 0.5px)' }}
        >
          <img src={imgEnergy} alt="" className="absolute block inset-0 max-w-none size-full" />
        </div>
      </div>
    )
  }
  if (icon === 'jersey') {
    return (
      <div className="bg-white border border-[#a7c1e1] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
        <div
          className="absolute"
          style={{ inset: 'calc(15.63% - 0.69px) calc(9.38% - 0.81px) calc(-7.71% - 1.15px) calc(9.38% - 0.81px)' }}
        >
          <img src={imgJersey} alt="" className="absolute block inset-0 max-w-none size-full" />
        </div>
      </div>
    )
  }
  if (icon === 'panel') {
    return (
      <div className="bg-white border border-[#a7c1e1] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
        <div
          className="absolute"
          style={{ inset: 'calc(21.43% - 0.57px) calc(10.71% - 0.79px) calc(19.64% - 0.61px) calc(10.71% - 0.79px)' }}
        >
          <img src={imgPanel} alt="" className="absolute block inset-0 max-w-none size-full" />
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white border border-[#a7c1e1] overflow-clip relative rounded-[8px] shrink-0 size-[48px]">
      <div
        className="absolute"
        style={{ inset: '20% 14% 20% 14%', transform: 'rotate(-20deg)' }}
      >
        <img src={imgSticker} alt="" className="absolute block inset-0 max-w-none size-full" />
      </div>
    </div>
  )
}

type Props = { onNavigate: (page: string) => void }

export function PurchaseListPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.PROFILE)} />
      <div className="bg-[#f0f2f5] flex-1 min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full items-center overflow-y-auto pb-[20px] pt-[48px] px-[16px]">
          {MOCK_PURCHASES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] shrink-0 w-full"
            >
              <div className="flex gap-[12px] items-start shrink-0 w-full">
                <IconThumbnail icon={item.icon} />
                <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px self-stretch whitespace-nowrap">
                  <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] shrink-0 text-[#a7c1e1] text-[16px]">
                    {item.name}
                  </p>
                  <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] min-w-full overflow-hidden shrink-0 text-[#44494e] text-[12px] text-ellipsis w-[min-content]">
                    {item.txId}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-end shrink-0 w-full">
                <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] shrink-0 text-[#bbbfd0] text-[12px] text-right whitespace-nowrap">
                  {item.date}
                </p>
                <div className="flex gap-[4px] items-center justify-end shrink-0 w-full">
                  <div className="relative shrink-0 size-[12px]">
                    <img src={imgClock} alt="" className="absolute block inset-0 max-w-none size-full" />
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] shrink-0 text-[#bbbfd0] text-[12px] text-right whitespace-nowrap">
                    {item.elapsed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute flex items-center justify-between left-0 right-0 top-0 overflow-clip p-[12px]">
          <button
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="relative size-[24px]"
            aria-label="close"
          >
            <img
              src={imgHeaderShape}
              alt=""
              className="absolute block inset-0 max-w-none size-full rounded-[30px]"
            />
            <span className="absolute overflow-clip" style={{ inset: '8.33%' }}>
              <span
                className="absolute block"
                style={{ bottom: '31.37%', left: '25%', right: '35.77%', top: '31.37%' }}
              >
                <img src={imgCloseStroke} alt="" className="absolute block inset-0 max-w-none size-full" />
              </span>
            </span>
          </button>
          <div className="opacity-0 size-[24px]" />
        </div>
      </div>
    </div>
  )
}
