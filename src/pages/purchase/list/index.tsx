import { PAGES } from '../../../shared/constants/pages'
import { AppHeader } from '../../../shared/ui/AppHeader'

const imgHeaderButtonShape = 'https://www.figma.com/api/mcp/asset/2f10a567-5c2e-431a-9ce8-7350dbdbfbe9'
const imgClose = 'https://www.figma.com/api/mcp/asset/a3262290-3df4-4394-a480-da2845915968'
const imgEnergy = 'https://www.figma.com/api/mcp/asset/bb0af6da-79a9-444d-a564-c816f5b4b63c'
const imgClock = 'https://www.figma.com/api/mcp/asset/59c0219e-de7e-4876-845e-de0e842cc422'
const imgJersey = 'https://www.figma.com/api/mcp/asset/cca679f0-fc14-49c1-8a28-d7f28848be23'
const imgPanel = 'https://www.figma.com/api/mcp/asset/40854500-6e9c-40dc-8835-33d24cdbea19'
const imgSticker = 'https://www.figma.com/api/mcp/asset/8a43fcdd-faeb-43bf-a86f-6d582c52f88a'

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

type Props = { onNavigate: (page: string) => void }

function ItemIcon({ kind }: { kind: IconKind }) {
  return (
    <div className="bg-white border border-[#a7c1e1] rounded-[8px] size-[48px] overflow-clip relative shrink-0">
      {kind === 'energy' && (
        <div className="absolute inset-[14.29%_25%_14.28%_25%]">
          <img alt="" src={imgEnergy} className="absolute inset-0 size-full shrink-0" />
        </div>
      )}
      {kind === 'jersey' && (
        <div className="absolute inset-[15.63%_9.38%_-7.71%_9.38%]">
          <img alt="" src={imgJersey} className="absolute inset-0 size-full shrink-0" />
        </div>
      )}
      {kind === 'panel' && (
        <div className="absolute inset-[21.43%_10.71%_19.64%_10.71%]">
          <img alt="" src={imgPanel} className="absolute inset-0 size-full shrink-0" />
        </div>
      )}
      {kind === 'sticker' && (
        <div
          className="absolute inset-[14.34%_7.22%_13.09%_14.81%] flex items-center justify-center"
          style={{ transform: 'rotate(-20deg)' }}
        >
          <img alt="" src={imgSticker} className="size-full shrink-0" />
        </div>
      )}
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.PROFILE)} />
      <div className="bg-[#f0f2f5] flex-[1_0_0] min-h-px rounded-[16px] w-full relative overflow-hidden">
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] z-10">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="size-[24px] relative flex items-center justify-center"
          >
            <img alt="" src={imgHeaderButtonShape} className="absolute inset-0 size-full shrink-0" />
            <div className="absolute inset-[8.33%] flex items-center justify-center">
              <div className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%]">
                <img alt="back" src={imgClose} className="absolute inset-0 size-full shrink-0" />
              </div>
            </div>
          </button>
          <div className="size-[24px] opacity-0" />
        </div>

        <div className="flex flex-col gap-[16px] h-full overflow-y-auto px-[16px] py-[48px]">
          {MOCK_PURCHASES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] w-full shrink-0"
            >
              <div className="flex gap-[12px] items-start w-full">
                <ItemIcon kind={item.icon} />
                <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start self-stretch min-w-px">
                  <p className="font-['Pretendard',sans-serif] font-bold text-[#a7c1e1] text-[16px] leading-[20px] text-right whitespace-nowrap">
                    {item.name}
                  </p>
                  <p className="font-['Pretendard',sans-serif] font-normal text-[#44494e] text-[12px] leading-[1.2] w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.txId}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-end w-full">
                <p className="font-['Pretendard',sans-serif] font-normal text-[#bbbfd0] text-[12px] leading-[1.2] text-right whitespace-nowrap">
                  {item.date}
                </p>
                <div className="flex gap-[4px] items-center justify-end w-full">
                  <div className="relative size-[12px] shrink-0">
                    <img alt="" src={imgClock} className="absolute inset-0 size-full shrink-0" />
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-normal text-[#bbbfd0] text-[12px] leading-[1.2] text-right whitespace-nowrap">
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
