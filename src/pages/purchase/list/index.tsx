import { PAGES } from '../../../shared/constants/pages'

interface PurchaseListPageProps {
  onNavigate: (page: string) => void
}

const ASSET_ENERGY_ICON =
  'https://www.figma.com/api/mcp/asset/f0989b07-f9d1-4454-9972-a3918942b106'
const ASSET_JERSEY_ICON =
  'https://www.figma.com/api/mcp/asset/e809b17a-24ce-41f7-84c1-f11ad8de58f4'
const ASSET_PANEL_ICON =
  'https://www.figma.com/api/mcp/asset/a66a4b1f-8323-464e-a302-5057dffe633c'
const ASSET_STICKER_ICON =
  'https://www.figma.com/api/mcp/asset/fa8fc4a6-8a95-401f-bf09-a5dead93409d'
const ASSET_CLOCK_ICON =
  'https://www.figma.com/api/mcp/asset/37a33df5-d20c-47bb-99f1-5279f62ee98f'
const ASSET_RORR_LOGO_UNION =
  'https://www.figma.com/api/mcp/asset/7525b9a8-904d-43a4-ac45-69958e0bb256'
const ASSET_RORR_LOGO_EXCLUDE =
  'https://www.figma.com/api/mcp/asset/bc4473d0-eb59-4935-93f7-82bbb812343d'
const ASSET_HEADER_BTN_SHAPE =
  'https://www.figma.com/api/mcp/asset/ace48fd1-b21a-4368-9ef9-448f3419757a'
const ASSET_CLOSE_X =
  'https://www.figma.com/api/mcp/asset/0ff7bec0-3598-4186-b068-aaa4a43925de'

type IconKind = 'energy' | 'jersey' | 'panel' | 'sticker'

interface PurchaseItem {
  id: string
  title: string
  transactionCode: string
  payedDate: string
  expiresIn: string
  iconKind: IconKind
}

const MOCK_PURCHASE_ITEMS: PurchaseItem[] = [
  {
    id: '1',
    title: '50 Energy',
    transactionCode: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76',
    payedDate: '2024. 10. 24. 13:55:48',
    expiresIn: '11 months',
    iconKind: 'energy',
  },
  {
    id: '2',
    title: '20 Energy',
    transactionCode: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76',
    payedDate: '2024. 10. 24. 13:55:48',
    expiresIn: '11 months',
    iconKind: 'energy',
  },
  {
    id: '3',
    title: '40 Energy',
    transactionCode: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76',
    payedDate: '2024. 10. 24. 13:55:48',
    expiresIn: '11 months',
    iconKind: 'energy',
  },
  {
    id: '4',
    title: 'T1 Jersey (Seoha)',
    transactionCode: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76',
    payedDate: '2024. 10. 24. 13:55:48',
    expiresIn: '11 months',
    iconKind: 'jersey',
  },
  {
    id: '5',
    title: 'T1 Panel',
    transactionCode: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76',
    payedDate: '2024. 10. 24. 13:55:48',
    expiresIn: '11 months',
    iconKind: 'panel',
  },
  {
    id: '6',
    title: 'Sticker No.32',
    transactionCode: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76',
    payedDate: '2024. 10. 24. 13:55:48',
    expiresIn: '11 months',
    iconKind: 'sticker',
  },
  {
    id: '7',
    title: '20 Energy',
    transactionCode: 'TN.d7258ad6-a945-4479-ae22-4bb575944f76',
    payedDate: '2024. 10. 24. 13:55:48',
    expiresIn: '11 months',
    iconKind: 'energy',
  },
]

function ItemIcon({ kind }: { kind: IconKind }) {
  return (
    <div className="relative flex size-[48px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] border border-[#a7c1e1] bg-white">
      {kind === 'energy' && (
        <img src={ASSET_ENERGY_ICON} alt="energy" className="h-[34px] w-[24px]" />
      )}
      {kind === 'jersey' && (
        <img src={ASSET_JERSEY_ICON} alt="jersey" className="h-[44px] w-[38px]" />
      )}
      {kind === 'panel' && (
        <img src={ASSET_PANEL_ICON} alt="panel" className="h-[28px] w-[38px]" />
      )}
      {kind === 'sticker' && (
        <img src={ASSET_STICKER_ICON} alt="sticker" className="h-[34px] w-[34px]" />
      )}
    </div>
  )
}

function PurchaseListItem({ item }: { item: PurchaseItem }) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-[8px] rounded-[8px] bg-white p-[12px]">
      <div className="flex w-full items-start gap-[12px]">
        <ItemIcon kind={item.iconKind} />
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[8px] self-stretch">
          <p
            className="font-['Pretendard',sans-serif] text-right text-[16px] font-bold leading-[20px] text-[#a7c1e1]"
          >
            {item.title}
          </p>
          <p
            className="w-full overflow-hidden truncate font-['Pretendard',sans-serif] text-[12px] font-normal leading-[1.2] text-[#44494e]"
          >
            {item.transactionCode}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-end gap-[4px]">
        <p className="font-['Pretendard',sans-serif] text-right text-[12px] font-normal leading-[1.2] text-[#bbbfd0]">
          {item.payedDate}
        </p>
        <div className="flex w-full items-center justify-end gap-[4px]">
          <img src={ASSET_CLOCK_ICON} alt="" className="size-[12px]" />
          <p className="font-['Pretendard',sans-serif] text-right text-[12px] font-normal leading-[1.2] text-[#bbbfd0]">
            {item.expiresIn}
          </p>
        </div>
      </div>
    </div>
  )
}

export function PurchaseListPage({ onNavigate }: PurchaseListPageProps) {
  const displayList = MOCK_PURCHASE_ITEMS

  return (
    <div className="flex h-dvh w-full flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] w-full items-center justify-between px-[4px] opacity-[0.66]">
        <div className="flex shrink-0 items-center justify-center gap-[4px]">
          <div className="relative h-[18px] w-[22px] overflow-hidden">
            <img
              src={ASSET_RORR_LOGO_UNION}
              alt=""
              className="absolute inset-0 block size-full"
              style={{ inset: '0.03% 19.61% -0.09% 19.66%' }}
            />
            <img
              src={ASSET_RORR_LOGO_EXCLUDE}
              alt=""
              className="absolute block size-full"
              style={{ inset: '2.93% 22.01% 2.81% 22.06%' }}
            />
          </div>
          <p className="font-['Pretendard',sans-serif] text-[14px] font-light leading-[20px] text-white">
            RORR
          </p>
        </div>
      </div>

      <div className="relative flex w-full flex-1 items-start overflow-hidden rounded-[16px] bg-[#f0f2f5]">
        <div className="flex h-full w-full flex-1 flex-col items-center gap-[16px] overflow-y-auto px-[16px] py-[48px]">
          {displayList.map((item) => (
            <PurchaseListItem key={item.id} item={item} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => onNavigate(PAGES.MAIN)}
          aria-label="닫기"
          className="absolute left-[12px] top-[12px] flex size-[24px] items-center justify-center"
        >
          <img
            src={ASSET_HEADER_BTN_SHAPE}
            alt=""
            className="absolute inset-0 size-full rounded-[30px]"
          />
          <img
            src={ASSET_CLOSE_X}
            alt=""
            className="relative h-[14px] w-[14px]"
          />
        </button>
      </div>
    </div>
  )
}
