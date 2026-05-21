import { PAGES } from '../../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const RORR_LOGO_STROKE = 'https://www.figma.com/api/mcp/asset/d7e31274-ad5f-4837-954c-e525c5f7c425'
const RORR_LOGO_EXCLUDE = 'https://www.figma.com/api/mcp/asset/f70b8421-b7af-43ee-9b60-3c566d118506'
const HEADER_X_TOP = 'https://www.figma.com/api/mcp/asset/c8c0bcde-0ac5-4491-8f4a-61c20b10b0cb'
const HEADER_BTN_BG = 'https://www.figma.com/api/mcp/asset/ebcd06c7-db9b-4b57-b33c-c3f57fd691db'
const X_GLYPH = 'https://www.figma.com/api/mcp/asset/8765c507-e290-45f6-a426-a736d601131d'
const ENERGY_ICON = 'https://www.figma.com/api/mcp/asset/cbaf37c2-d927-404c-b5a9-29047a5de8ea'
const CLOCK_ICON = 'https://www.figma.com/api/mcp/asset/7df36dd9-cb0c-46a1-aee9-fb821194fd77'
const JERSEY_ICON = 'https://www.figma.com/api/mcp/asset/275a3df9-e0cf-4b28-8529-fb1ac732b1fe'
const PANEL_ICON = 'https://www.figma.com/api/mcp/asset/14cc5c95-a72b-4bd2-8b21-362c8cfa7567'
const STICKER_ICON = 'https://www.figma.com/api/mcp/asset/d4927e90-2991-4c41-a8db-c169cf71df7f'

type IconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

interface Purchase {
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
    <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] shrink-0 w-full">
      <div className="flex gap-[4px] items-center">
        <div className="relative h-[18px] w-[22px] overflow-hidden">
          <img src={RORR_LOGO_STROKE} alt="" className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]" />
          <img src={RORR_LOGO_EXCLUDE} alt="" className="absolute inset-[2.93%_22.01%_2.81%_22.06%]" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px]">
          RORR
        </p>
      </div>
      <button onClick={onClose} className="relative size-[12.414px] cursor-pointer">
        <img src={HEADER_X_TOP} alt="close" className="block size-full" />
      </button>
    </div>
  )
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="relative size-[24px] cursor-pointer rounded-[28px]">
      <img src={HEADER_BTN_BG} alt="" className="absolute inset-0 size-full rounded-[30px]" />
      <div className="absolute inset-[8.33%] overflow-hidden">
        <img src={X_GLYPH} alt="close" className="absolute bottom-[31.37%] left-1/4 right-[35.77%] top-[31.37%]" />
      </div>
    </button>
  )
}

function PurchaseIconThumb({ icon }: { icon: IconKind }) {
  return (
    <div className="bg-white border border-[#a7c1e1] rounded-[8px] size-[48px] overflow-hidden relative shrink-0">
      {icon === 'energy' ? (
        <img src={ENERGY_ICON} alt="" className="absolute inset-[14.29%_25%_14.28%_25%]" />
      ) : null}
      {icon === 'jersey' ? (
        <img src={JERSEY_ICON} alt="" className="absolute inset-[15.63%_9.38%_-7.71%_9.38%]" />
      ) : null}
      {icon === 'panel' ? (
        <img src={PANEL_ICON} alt="" className="absolute inset-[21.43%_10.71%_19.64%_10.71%]" />
      ) : null}
      {icon === 'sticker' ? (
        <img
          src={STICKER_ICON}
          alt=""
          className="absolute inset-[14.34%_7.22%_13.09%_14.81%] -rotate-[20deg]"
        />
      ) : null}
    </div>
  )
}

function PurchaseItem({ purchase }: { purchase: Purchase }) {
  return (
    <div className="bg-white flex flex-col gap-[8px] items-start justify-center p-[12px] rounded-[8px] shrink-0 w-full">
      <div className="flex gap-[12px] items-start w-full">
        <PurchaseIconThumb icon={purchase.icon} />
        <div className="flex flex-1 flex-col gap-[8px] items-start min-w-px self-stretch">
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-[#a7c1e1] leading-[20px] text-right">
            {purchase.name}
          </p>
          <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#44494e] leading-[1.2] w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {purchase.txId}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-end w-full">
        <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#bbbfd0] leading-[1.2] text-right">
          {purchase.date}
        </p>
        <div className="flex gap-[4px] items-center justify-end w-full">
          <div className="relative size-[12px] shrink-0">
            <img src={CLOCK_ICON} alt="" className="absolute inset-0 size-full" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-normal text-[12px] text-[#bbbfd0] leading-[1.2] text-right">
            {purchase.elapsed}
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
      <div className="bg-[#f0f2f5] flex flex-1 min-h-px rounded-[16px] w-full relative overflow-hidden">
        <div className="flex flex-1 flex-col gap-[16px] items-center min-w-px overflow-y-auto px-[16px] py-[48px]">
          {MOCK_PURCHASES.map((p, i) => (
            <PurchaseItem key={i} purchase={p} />
          ))}
        </div>
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[12px] overflow-hidden">
          <CloseButton onClick={() => onNavigate(PAGES.PROFILE)} />
          <div className="size-[24px] opacity-0" />
        </div>
      </div>
    </div>
  )
}
