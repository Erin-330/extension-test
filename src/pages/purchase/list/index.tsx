import { PAGES } from '../../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ASSETS = {
  headerButtonShape: 'https://www.figma.com/api/mcp/asset/3d75de7f-b490-4224-9138-9bed704d6ed9',
  closeStroke: 'https://www.figma.com/api/mcp/asset/c8b29102-8212-4dbc-946c-32a1ca9deeb7',
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/449e91f5-585f-4106-98f9-d57ab04a3428',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/bbfb03eb-bc3d-4e7a-a411-ede2dba3e6f4',
  headerCloseUnion: 'https://www.figma.com/api/mcp/asset/a08e9e5a-8dfe-463d-a067-4aae0963b058',
  clock: 'https://www.figma.com/api/mcp/asset/7c504039-14fa-4458-8d96-dde1ed15b23b',
  energy: 'https://www.figma.com/api/mcp/asset/7c41a719-8800-4ea7-b82e-308e69e3319e',
  jersey: 'https://www.figma.com/api/mcp/asset/cc9f358b-77a8-4825-b38f-2fef96a09d7a',
  panel: 'https://www.figma.com/api/mcp/asset/63bef500-d25c-4dd5-95db-765c48630ff1',
  sticker: 'https://www.figma.com/api/mcp/asset/2a17602b-dd3b-4701-aa5d-f36c0401cdb5',
}

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
    <div className="bg-white border border-[#a7c1e1] border-solid overflow-clip relative rounded-[8px] shrink-0 w-[48px] h-[48px]">
      {kind === 'energy' && (
        <div className="absolute inset-[14.29%_25%]">
          <img alt="" src={ASSETS.energy} className="absolute inset-0 w-full h-full" />
        </div>
      )}
      {kind === 'jersey' && (
        <div className="absolute inset-[15.63%_9.38%_-7.71%_9.38%]">
          <img alt="" src={ASSETS.jersey} className="absolute inset-0 w-full h-full" />
        </div>
      )}
      {kind === 'panel' && (
        <div className="absolute inset-[21.43%_10.71%_19.64%_10.71%]">
          <img alt="" src={ASSETS.panel} className="absolute inset-0 w-full h-full" />
        </div>
      )}
      {kind === 'sticker' && (
        <div className="absolute inset-[14.34%_7.22%_13.09%_14.81%] -rotate-[20deg]">
          <img alt="" src={ASSETS.sticker} className="absolute inset-0 w-full h-full" />
        </div>
      )}
    </div>
  )
}

function PurchaseCard({ item }: { item: Purchase }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] w-full shrink-0">
      <div className="flex gap-[12px] items-start w-full shrink-0">
        <ItemIcon kind={item.icon} />
        <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px self-stretch">
          <div className="font-['Pretendard',sans-serif] font-bold text-[#a7c1e1] text-[16px] leading-[20px] shrink-0">
            {item.name}
          </div>
          <div className="font-['Pretendard',sans-serif] font-normal text-[#44494e] text-[12px] leading-[1.2] overflow-hidden text-ellipsis whitespace-nowrap w-full shrink-0">
            {item.txId}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end w-full shrink-0">
        <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[#bbbfd0] text-[12px] text-right whitespace-nowrap">
          {item.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end w-full">
          <img src={ASSETS.clock} alt="" className="shrink-0 w-[12px] h-[12px]" />
          <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[#bbbfd0] text-[12px] text-right whitespace-nowrap">
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
      <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center justify-center">
          <div className="relative w-[22px] h-[18px] overflow-hidden">
            <img alt="" src={ASSETS.rorrLogoStroke} className="absolute inset-[0.03%_19.61%_-0.09%_19.66%] w-auto h-auto" />
            <img alt="" src={ASSETS.rorrLogoExclude} className="absolute inset-[2.93%_22.01%_2.81%_22.06%] w-auto h-auto" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white">RORR</p>
        </div>
        <button type="button" onClick={() => onNavigate(PAGES.PROFILE)} className="shrink-0 w-[12.414px] h-[12.414px]" aria-label="close">
          <img alt="close" src={ASSETS.headerCloseUnion} className="shrink-0 w-[12.414px] h-[12.414px]" />
        </button>
      </div>
      <div className="bg-[#f0f2f5] flex flex-[1_0_0] items-start min-h-px overflow-y-auto relative rounded-[16px] w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px px-[16px] py-[48px] relative w-full">
          {MOCK_PURCHASES.map((item, idx) => (
            <PurchaseCard key={idx} item={item} />
          ))}
        </div>
        <div className="absolute flex items-center justify-between left-0 right-0 top-0 p-[12px] overflow-clip">
          <button type="button" onClick={() => onNavigate(PAGES.PROFILE)} className="relative shrink-0 w-[24px] h-[24px]" aria-label="close">
            <img alt="" src={ASSETS.headerButtonShape} className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute bottom-[31.37%] left-[25%] right-[35.77%] top-[31.37%]">
                <img alt="" src={ASSETS.closeStroke} className="absolute inset-0 w-full h-full" />
              </div>
            </div>
          </button>
          <div className="shrink-0 w-[24px] h-[24px] opacity-0" />
        </div>
      </div>
    </div>
  )
}
