import { PAGES } from '../../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const PURCHASE_ASSET = {
  headerBtnBg: 'https://www.figma.com/api/mcp/asset/bb241951-ae1e-43bc-b983-ae373db500bd',
  infoI: 'https://www.figma.com/api/mcp/asset/7c22e845-306c-4d9e-b2cb-3de00981e051',
  closeX: 'https://www.figma.com/api/mcp/asset/ea7e37f1-f94a-4b00-b9e6-1d8a778ec6e4',
  energyIcon: 'https://www.figma.com/api/mcp/asset/3577415e-7d09-4361-86c5-2d54bcbc2f34',
  clockIcon: 'https://www.figma.com/api/mcp/asset/753f4a4d-8b20-4219-8488-e84d760e5593',
  jerseyIcon: 'https://www.figma.com/api/mcp/asset/0e209dff-ce8a-4ed0-9ac9-27c9f28d7e95',
  panelIcon: 'https://www.figma.com/api/mcp/asset/c96cd393-a35a-49a6-9d58-80349884eb45',
  stickerIcon: 'https://www.figma.com/api/mcp/asset/85b37461-8b8e-4df8-aac0-fd6282f01c21',
  rorrStroke: 'https://www.figma.com/api/mcp/asset/093f91cf-a085-4006-b1f8-e72c5dcd6e55',
  rorrExclude: 'https://www.figma.com/api/mcp/asset/7e7208f0-bea3-4665-a657-577a6d1f8482',
  topX: 'https://www.figma.com/api/mcp/asset/0b1db4c6-a17a-4682-bc68-21fe8efdb01b',
}

type IconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

interface PurchaseItem {
  name: string
  icon: IconKind
  txId: string
  date: string
  elapsed: string
}

const MOCK_PURCHASES: PurchaseItem[] = [
  { name: '50 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '40 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Jersey (Seoha)', icon: 'jersey',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Panel',          icon: 'panel',   txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'Sticker No.32',     icon: 'sticker', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy',         icon: 'energy',  txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
]

function ItemIcon({ kind }: { kind: IconKind }) {
  return (
    <div className="bg-white border border-[#a7c1e1] border-solid rounded-[8px] size-[48px] shrink-0 overflow-clip relative">
      {kind === 'energy' && (
        <div className="absolute inset-[14.29%_25%]">
          <img alt="" className="block w-full h-full" src={PURCHASE_ASSET.energyIcon} />
        </div>
      )}
      {kind === 'jersey' && (
        <div className="absolute inset-[15.63%_9.38%_-7.71%_9.38%]">
          <img alt="" className="block w-full h-full" src={PURCHASE_ASSET.jerseyIcon} />
        </div>
      )}
      {kind === 'panel' && (
        <div className="absolute inset-[21.43%_10.71%_19.64%_10.71%]">
          <img alt="" className="block w-full h-full" src={PURCHASE_ASSET.panelIcon} />
        </div>
      )}
      {kind === 'sticker' && (
        <div className="absolute inset-[14.34%_7.22%_13.09%_14.81%] flex items-center justify-center">
          <div className="-rotate-[20deg] w-full h-full">
            <img alt="" className="block w-full h-full" src={PURCHASE_ASSET.stickerIcon} />
          </div>
        </div>
      )}
    </div>
  )
}

function PurchaseCard({ item }: { item: PurchaseItem }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] w-full shrink-0">
      <div className="flex gap-[12px] items-start w-full">
        <ItemIcon kind={item.icon} />
        <div className="flex flex-1 flex-col gap-[8px] items-start self-stretch min-w-0">
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-[#a7c1e1] text-right leading-[20px]">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#44494e] leading-[1.2] truncate w-full">
            {item.txId}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end w-full">
        <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#bbbfd0] text-right leading-[1.2]">
          {item.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end w-full">
          <div className="relative size-[12px] shrink-0">
            <img alt="" className="block w-full h-full" src={PURCHASE_ASSET.clockIcon} />
          </div>
          <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#bbbfd0] text-right leading-[1.2]">
            {item.elapsed}
          </p>
        </div>
      </div>
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: Props) {
  const displayList = MOCK_PURCHASES

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] w-full shrink-0">
        <div className="flex gap-[4px] items-center justify-center">
          <div className="-scale-y-100 rotate-180 flex items-center justify-center">
            <div className="h-[18px] overflow-clip relative w-[22px]">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" className="block w-full h-full" src={PURCHASE_ASSET.rorrStroke} />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" className="block w-full h-full" src={PURCHASE_ASSET.rorrExclude} />
              </div>
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <div className="size-[12.414px] relative shrink-0">
          <img alt="" className="block w-full h-full" src={PURCHASE_ASSET.topX} />
        </div>
      </div>
      <div className="flex-1 min-h-0 bg-[#f0f2f5] rounded-[16px] relative overflow-hidden w-full">
        <div className="flex flex-col gap-[16px] h-full items-center px-[16px] pt-[60px] pb-[16px] overflow-y-auto w-full">
          {displayList.map((item, idx) => (
            <PurchaseCard key={idx} item={item} />
          ))}
        </div>
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[12px] overflow-clip">
          <button
            type="button"
            aria-label="close"
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="flex gap-[10px] items-center justify-center relative size-[24px] shrink-0"
          >
            <img alt="" className="absolute inset-0 size-full rounded-[30px]" src={PURCHASE_ASSET.headerBtnBg} />
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%]">
                <img alt="" className="block w-full h-full" src={PURCHASE_ASSET.closeX} />
              </div>
            </div>
          </button>
          <div className="flex gap-[10px] items-center justify-center opacity-0 relative rounded-[28px] size-[24px] shrink-0">
            <img alt="" className="absolute inset-0 size-full rounded-[30px]" src={PURCHASE_ASSET.headerBtnBg} />
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[22.92%_45.83%]">
                <img alt="" className="block w-full h-full" src={PURCHASE_ASSET.infoI} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
