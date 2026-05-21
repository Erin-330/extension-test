import { PAGES } from '../../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const A = {
  headerBg: 'https://www.figma.com/api/mcp/asset/f4429c55-3fc5-4980-a7a2-e415802d9b6c',
  energyIcon: 'https://www.figma.com/api/mcp/asset/5ef36c0e-8d1a-4455-9a97-8be12b72e794',
  clockIcon: 'https://www.figma.com/api/mcp/asset/4ce4f71f-8e98-429f-b052-c7fe1b63dcb1',
  jerseyIcon: 'https://www.figma.com/api/mcp/asset/5546344d-ea6f-46c2-80d1-4b43c6d83755',
  panelIcon: 'https://www.figma.com/api/mcp/asset/1f2c14ee-bc31-4e4a-88b8-2667178efd82',
  stickerIcon: 'https://www.figma.com/api/mcp/asset/da010aab-026d-43e1-8993-706ce0b9878d',
  closeX: 'https://www.figma.com/api/mcp/asset/c4219388-0bb0-40d3-bb23-9de10b4a5197',
  rorrUnionStroke: 'https://www.figma.com/api/mcp/asset/fcf79a51-140a-4356-82d2-ab6ea5d3fdad',
  rorrExclude: 'https://www.figma.com/api/mcp/asset/e6241f4d-a4fa-4a28-aded-501fa444f911',
  rorrCloseX: 'https://www.figma.com/api/mcp/asset/bc22e015-da39-4635-91b7-d507b7855c66',
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

function AppHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full shrink-0">
      <div className="flex gap-[4px] items-center justify-center shrink-0">
        <div className="-scale-y-100 rotate-180 flex items-center justify-center shrink-0">
          <div className="h-[18px] w-[22px] relative overflow-hidden">
            <img src={A.rorrUnionStroke} className="absolute block max-w-none size-full inset-[0.03%_19.61%_-0.09%_19.66%] shrink-0" alt="" />
            <img src={A.rorrExclude} className="absolute block max-w-none size-full inset-[2.93%_22.01%_2.81%_22.06%] shrink-0" alt="" />
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap shrink-0">
          RORR
        </p>
      </div>
      <button type="button" onClick={onClose} className="relative size-[12.414px] shrink-0" aria-label="Close">
        <img src={A.rorrCloseX} className="absolute block max-w-none size-full shrink-0" alt="" />
      </button>
    </div>
  )
}

function ItemIcon({ kind }: { kind: IconKind }) {
  return (
    <div className="bg-white border border-[#a7c1e1] border-solid overflow-hidden relative rounded-[8px] shrink-0 size-[48px]">
      {kind === 'energy' && (
        <div className="absolute inset-[calc(14.29%-0.71px)_calc(25%-0.5px)_calc(14.28%-0.71px)_calc(25%-0.5px)]">
          <img src={A.energyIcon} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
      )}
      {kind === 'jersey' && (
        <div className="absolute inset-[calc(15.63%-0.69px)_calc(9.38%-0.81px)_calc(-7.71%-1.15px)_calc(9.38%-0.81px)]">
          <img src={A.jerseyIcon} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
      )}
      {kind === 'panel' && (
        <div className="absolute inset-[calc(21.43%-0.57px)_calc(10.71%-0.79px)_calc(19.64%-0.61px)_calc(10.71%-0.79px)]">
          <img src={A.panelIcon} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
      )}
      {kind === 'sticker' && (
        <div className="absolute inset-[calc(14.34%-0.71px)_calc(7.22%-0.86px)_calc(13.09%-0.74px)_calc(14.81%-0.7px)] flex items-center justify-center">
          <div className="-rotate-12 w-full h-full">
            <img src={A.stickerIcon} className="block max-w-none size-full shrink-0" alt="" />
          </div>
        </div>
      )}
    </div>
  )
}

function PurchaseItem({ item }: { item: Purchase }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex gap-[12px] items-start relative shrink-0 w-full">
        <ItemIcon kind={item.icon} />
        <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px relative self-stretch">
          <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[#a7c1e1] text-[16px] text-right whitespace-nowrap">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] min-w-full overflow-hidden text-[#44494e] text-[12px] text-ellipsis whitespace-nowrap">
            {item.txId}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end relative shrink-0 w-full">
        <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[#bbbfd0] text-[12px] text-right whitespace-nowrap">
          {item.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end shrink-0 w-full">
          <div className="relative shrink-0 size-[12px]">
            <img src={A.clockIcon} className="absolute block max-w-none size-full shrink-0" alt="" />
          </div>
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
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] flex flex-1 items-start min-h-px overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-center min-w-px px-[16px] py-[48px] relative overflow-y-auto">
          {MOCK_PURCHASES.map((item, i) => (
            <PurchaseItem key={i} item={item} />
          ))}
        </div>
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between overflow-hidden p-[12px]">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="flex gap-[10px] items-center justify-center relative size-[24px]"
            aria-label="Close"
          >
            <div className="flex-1 h-full min-w-px relative rounded-[30px]">
              <img src={A.headerBg} className="absolute block max-w-none size-full shrink-0" alt="" />
            </div>
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%]">
                <img src={A.closeX} className="absolute block max-w-none size-full shrink-0" alt="" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
