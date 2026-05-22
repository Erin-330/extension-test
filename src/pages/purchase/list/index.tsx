import { PAGES } from '../../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ASSETS = {
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/a7772fbc-870a-4709-b73a-30b9b6dad239',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/3c6a0f3c-93fc-43f1-8814-e7313d125d3f',
  headerCloseX: 'https://www.figma.com/api/mcp/asset/c8cd971f-3ca6-45ac-99f9-dd67d7e1dfbc',
  buttonShape: 'https://www.figma.com/api/mcp/asset/3e23d5e9-a3b7-41e4-9388-8f7cfc811d39',
  closeIcon: 'https://www.figma.com/api/mcp/asset/e491da7e-e101-4d11-a3b3-970b631671fe',
  iconEnergy: 'https://www.figma.com/api/mcp/asset/fc3664e3-8cc4-4396-8cac-284e31cbad13',
  iconJersey: 'https://www.figma.com/api/mcp/asset/303b5d46-f679-4e87-8888-2760487dfc16',
  iconPanel: 'https://www.figma.com/api/mcp/asset/c5982fdd-16c7-4be0-b653-f378cb889536',
  iconSticker: 'https://www.figma.com/api/mcp/asset/be5b409c-c1aa-4e70-91e0-a68f8248a462',
  iconClock: 'https://www.figma.com/api/mcp/asset/9ca3cf2e-e738-459a-850c-656d6c127fac',
}

type IconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

const MOCK_PURCHASES: { name: string; icon: IconKind; txId: string; date: string; elapsed: string }[] = [
  { name: '50 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '40 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Jersey (Seoha)', icon: 'jersey',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Panel',          icon: 'panel',   txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'Sticker No.32',     icon: 'sticker', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
]

function ItemIcon({ kind }: { kind: IconKind }) {
  const iconUrl =
    kind === 'energy' ? ASSETS.iconEnergy :
    kind === 'jersey' ? ASSETS.iconJersey :
    kind === 'panel' ? ASSETS.iconPanel :
    ASSETS.iconSticker
  return (
    <div className="bg-white border border-[#a7c1e1] border-solid overflow-hidden rounded-[8px] shrink-0 w-[48px] h-[48px] flex items-center justify-center">
      <img
        src={iconUrl}
        className={`shrink-0 w-[36px] h-[36px] object-contain ${kind === 'sticker' ? '-rotate-12' : ''}`}
      />
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full">
        <div className="flex gap-[4px] items-center">
          <img src={ASSETS.rorrLogoStroke} className="shrink-0 w-[22px] h-[18px]" />
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <img src={ASSETS.headerCloseX} className="shrink-0 w-[12.414px] h-[12.414px]" />
      </div>

      <div className="bg-[#f0f2f5] flex flex-1 min-h-0 overflow-hidden rounded-[16px] w-full relative">
        <div className="flex flex-1 flex-col gap-[8px] items-center min-w-0 overflow-y-auto pb-[20px] pt-[60px] px-[16px] w-full">
          {MOCK_PURCHASES.map((item, i) => (
            <div
              key={i}
              className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] shrink-0 w-full"
            >
              <div className="flex gap-[12px] items-start w-full">
                <ItemIcon kind={item.icon} />
                <div className="flex flex-1 flex-col gap-[8px] items-end self-stretch min-w-0">
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-[#a7c1e1] text-right whitespace-nowrap">
                    {item.name}
                  </p>
                  <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#44494e] w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.txId}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-end w-full">
                <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#bbbfd0] text-right whitespace-nowrap">
                  {item.date}
                </p>
                <div className="flex gap-[4px] items-center justify-end w-full">
                  <img src={ASSETS.iconClock} className="shrink-0 w-[12px] h-[12px]" />
                  <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#bbbfd0] text-right whitespace-nowrap">
                    {item.elapsed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px]">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="relative shrink-0 w-[24px] h-[24px] flex items-center justify-center"
            aria-label="Close"
          >
            <img src={ASSETS.buttonShape} className="absolute inset-0 shrink-0 w-[24px] h-[24px]" />
            <img src={ASSETS.closeIcon} className="relative shrink-0 w-[8px] h-[8px]" />
          </button>
          <div className="shrink-0 w-[24px] h-[24px] opacity-0" />
        </div>
      </div>
    </div>
  )
}
