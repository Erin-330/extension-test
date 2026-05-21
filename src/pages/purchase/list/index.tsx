import { AppHeader } from '../../../features/follow/ui/AppHeader'
import { PAGES } from '../../../shared/constants/pages'

const imgHeaderButtonShape = 'https://www.figma.com/api/mcp/asset/0b1c6104-0941-4068-bbdc-f196e0527d1e'
const imgCloseX = 'https://www.figma.com/api/mcp/asset/aa49893d-cd08-4118-96c6-6fe7d3f8c1ba'
const imgEnergy = 'https://www.figma.com/api/mcp/asset/8722fa0a-4389-41b6-828f-686dca7bedef'
const imgClock = 'https://www.figma.com/api/mcp/asset/a870ffcc-75ad-4695-9c31-424730c90be0'
const imgJersey = 'https://www.figma.com/api/mcp/asset/33515141-7667-4685-98e7-e7bb84b0ab2a'
const imgPanel = 'https://www.figma.com/api/mcp/asset/6fc634b4-49bc-43ff-99bc-936e127add5f'
const imgSticker = 'https://www.figma.com/api/mcp/asset/5a34a592-67a9-467e-a637-11ae375bb95d'

type IconKey = 'energy' | 'jersey' | 'panel' | 'sticker'

type PurchaseItem = {
  name: string
  icon: IconKey
  txId: string
  date: string
  elapsed: string
}

const MOCK_PURCHASES: PurchaseItem[] = [
  { name: '50 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '40 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Jersey (Seoha)', icon: 'jersey', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Panel', icon: 'panel', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'Sticker No.32', icon: 'sticker', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
]

function ItemIcon({ icon }: { icon: IconKey }) {
  const base = 'bg-white border border-[#a7c1e1] border-solid rounded-[8px] size-[48px] overflow-clip relative shrink-0'
  if (icon === 'energy') {
    return (
      <div className={base}>
        <div className="absolute inset-[14.29%_25%]">
          <img alt="" src={imgEnergy} className="absolute inset-0 block size-full" />
        </div>
      </div>
    )
  }
  if (icon === 'jersey') {
    return (
      <div className={base}>
        <div className="absolute inset-[15.63%_9.38%_-7.71%_9.38%]">
          <img alt="" src={imgJersey} className="absolute inset-0 block size-full" />
        </div>
      </div>
    )
  }
  if (icon === 'panel') {
    return (
      <div className={base}>
        <div className="absolute inset-[21.43%_10.71%_19.64%_10.71%]">
          <img alt="" src={imgPanel} className="absolute inset-0 block size-full" />
        </div>
      </div>
    )
  }
  return (
    <div className={base}>
      <div className="absolute inset-[14.34%_7.22%_13.09%_14.81%] flex items-center justify-center">
        <div className="-rotate-[20deg] size-full">
          <img alt="" src={imgSticker} className="block size-full" />
        </div>
      </div>
    </div>
  )
}

function PurchaseCard({ item }: { item: PurchaseItem }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] w-full">
      <div className="flex gap-[12px] items-start w-full">
        <ItemIcon icon={item.icon} />
        <div className="flex flex-1 min-w-px flex-col gap-[8px] items-start self-stretch">
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-[#a7c1e1] text-right whitespace-nowrap">
            {item.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#44494e] overflow-hidden text-ellipsis whitespace-nowrap w-full">
            {item.txId}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end w-full">
        <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#bbbfd0] text-right whitespace-nowrap">
          {item.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end w-full">
          <div className="relative size-[12px] shrink-0">
            <img alt="" src={imgClock} className="absolute inset-0 block size-full" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-[#bbbfd0] text-right whitespace-nowrap">
            {item.elapsed}
          </p>
        </div>
      </div>
    </div>
  )
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} type="button" aria-label="close" className="relative size-[24px] rounded-[28px]">
      <img alt="" src={imgHeaderButtonShape} className="absolute inset-0 block size-full rounded-[30px]" />
      <div className="absolute inset-[8.33%] overflow-clip">
        <div className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%]">
          <img alt="" src={imgCloseX} className="absolute inset-0 block size-full" />
        </div>
      </div>
    </button>
  )
}

type NavProp = { onNavigate: (page: string) => void }

export function PurchaseListPage({ onNavigate }: NavProp) {
  const displayList = MOCK_PURCHASES
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.PROFILE)} />
      <div className="relative flex-1 min-h-px w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden">
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] z-10">
          <CloseButton onClick={() => onNavigate(PAGES.PROFILE)} />
          <div className="size-[24px] opacity-0" />
        </div>
        <div className="flex flex-1 flex-col gap-[16px] items-center px-[16px] py-[48px] w-full h-full overflow-y-auto">
          {displayList.map((item, idx) => (
            <PurchaseCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
