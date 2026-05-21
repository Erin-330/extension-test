import { PAGES } from '../../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const imgHeaderButtonShape =
  'https://www.figma.com/api/mcp/asset/1c8bb0fb-217d-4184-898f-8d76462d66a9'
const imgEnergyIcon =
  'https://www.figma.com/api/mcp/asset/7ebc583a-4ec1-4eda-8a59-de64771f88c0'
const imgClockIcon =
  'https://www.figma.com/api/mcp/asset/e062cb54-f0a8-43b9-901c-0d93a9cb6908'
const imgJerseyIcon =
  'https://www.figma.com/api/mcp/asset/c17c3de9-6b9f-4774-b791-328da801f4bc'
const imgPanelIcon =
  'https://www.figma.com/api/mcp/asset/b0cc3a94-e725-4785-862e-632dfa33b4ee'
const imgStickerIcon =
  'https://www.figma.com/api/mcp/asset/a1b8ed40-27a4-4873-9811-7bfd7cdcdd83'
const imgCloseX =
  'https://www.figma.com/api/mcp/asset/5743b889-bbe9-4dd9-9b84-64e7f60949f1'
const imgUnionStroke =
  'https://www.figma.com/api/mcp/asset/a99031f9-487a-4c55-805f-64f5403dc785'
const imgExclude =
  'https://www.figma.com/api/mcp/asset/ed2aebed-fe37-4c85-a5ea-02705997b00d'
const imgClose =
  'https://www.figma.com/api/mcp/asset/cb33e7e0-bd00-4fd1-8463-d3bf6ed938d8'

type PurchaseIconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

type Purchase = {
  name: string
  icon: PurchaseIconKind
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

const PurchaseIcon = ({ kind }: { kind: PurchaseIconKind }) => {
  const containerCls = 'bg-white border border-[#a7c1e1] overflow-hidden rounded-[8px] shrink-0 size-[48px] relative flex items-center justify-center'
  if (kind === 'energy') {
    return (
      <div className={containerCls}>
        <img src={imgEnergyIcon} className="size-[60%] shrink-0" alt="" />
      </div>
    )
  }
  if (kind === 'jersey') {
    return (
      <div className={containerCls}>
        <img src={imgJerseyIcon} className="size-[70%] shrink-0" alt="" />
      </div>
    )
  }
  if (kind === 'panel') {
    return (
      <div className={containerCls}>
        <img src={imgPanelIcon} className="size-[60%] shrink-0" alt="" />
      </div>
    )
  }
  return (
    <div className={containerCls}>
      <img src={imgStickerIcon} className="size-[70%] shrink-0 -rotate-[20deg]" alt="" />
    </div>
  )
}

export const PurchaseListPage = ({ onNavigate }: Props) => {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center">
          <div className="h-[18px] relative w-[22px] overflow-hidden">
            <img src={imgUnionStroke} className="absolute inset-0 size-full shrink-0" alt="" />
            <img src={imgExclude} className="absolute inset-0 size-full shrink-0" alt="" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <img src={imgClose} className="size-[12.414px] shrink-0" alt="" />
      </div>
      <div className="bg-[#f0f2f5] flex-[1_0_0] min-h-px overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full items-center overflow-y-auto px-[16px] py-[48px] relative w-full">
          {MOCK_PURCHASES.map((p, i) => (
            <div
              key={i}
              className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] shrink-0 w-full"
            >
              <div className="flex gap-[12px] items-start w-full shrink-0">
                <PurchaseIcon kind={p.icon} />
                <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px self-stretch">
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-[#a7c1e1] text-right">
                    {p.name}
                  </p>
                  <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#44494e] overflow-hidden text-ellipsis w-full whitespace-nowrap">
                    {p.txId}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-end w-full shrink-0">
                <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#bbbfd0] text-right whitespace-nowrap">
                  {p.date}
                </p>
                <div className="flex gap-[4px] items-center justify-end w-full shrink-0">
                  <img src={imgClockIcon} className="size-[12px] shrink-0" alt="" />
                  <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#bbbfd0] text-right whitespace-nowrap">
                    {p.elapsed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute flex items-center justify-between left-0 right-0 top-0 p-[12px]">
          <button
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="flex items-center justify-center shrink-0 size-[24px] relative rounded-full"
            aria-label="close"
          >
            <img src={imgHeaderButtonShape} className="absolute inset-0 size-full shrink-0" alt="" />
            <img
              src={imgCloseX}
              className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%] shrink-0"
              alt=""
            />
          </button>
          <div className="size-[24px] opacity-0 shrink-0" />
        </div>
      </div>
    </div>
  )
}
