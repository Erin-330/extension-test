import { PAGES } from '../../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
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
  { name: '50 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb5759...', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb5759...', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '40 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb5759...', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Jersey (Seoha)', icon: 'jersey', txId: 'TN.d7258ad6-a945-4479-ae22-4bb5759...', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'T1 Panel', icon: 'panel', txId: 'TN.d7258ad6-a945-4479-ae22-4bb5759...', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: 'Sticker No.32', icon: 'sticker', txId: 'TN.d7258ad6-a945-4479-ae22-4bb5759...', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
  { name: '20 Energy', icon: 'energy', txId: 'TN.d7258ad6-a945-4479-ae22-4bb5759...', date: '2024. 10. 24. 13:55:48', elapsed: '11 months' },
]

export function PurchaseListPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <header className="flex items-center justify-between h-12 shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-md bg-[#7b6ad4] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">R</span>
          </div>
          <span className="text-white text-sm font-bold tracking-wide">RORR</span>
        </div>
        <button
          type="button"
          onClick={() => onNavigate(PAGES.MAIN)}
          className="w-8 h-8 flex items-center justify-center text-white"
          aria-label="close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      <div className="flex-1 flex flex-col bg-[#eef0f2] rounded-2xl overflow-hidden">
        <div className="px-4 pt-4 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="w-9 h-9 rounded-full bg-[#bcb5e6] flex items-center justify-center"
            aria-label="back"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M9 4L5 8L9 12M13 4L9 8L13 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-3 pt-3 pb-3 space-y-2.5">
          {MOCK_PURCHASES.map((item, idx) => (
            <li key={idx} className="bg-white rounded-2xl px-3 py-3 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-lg bg-[#eef1fa] border border-[#dde2ef] flex items-center justify-center shrink-0">
                  <ItemIcon kind={item.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#9aa7d2] text-[16px] font-extrabold leading-tight">{item.name}</p>
                  <p className="text-[#5b5b5b] text-[12px] mt-1 truncate">{item.txId}</p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-1.5 mt-1">
                <span className="text-[#a8b0bf] text-[12px]">{item.date}</span>
              </div>
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke="#a8b0bf" strokeWidth="1.2" />
                  <path d="M6 3V6L8 7.5" stroke="#a8b0bf" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="text-[#a8b0bf] text-[12px]">{item.elapsed}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ItemIcon({ kind }: { kind: IconKind }) {
  const stroke = '#9aa7d2'
  switch (kind) {
    case 'energy':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M11 2L4 11H9L8 18L15 9H10L11 2Z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'jersey':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="7" r="3.5" stroke={stroke} strokeWidth="1.5" />
          <path
            d="M3 18C3 14 6 12 10 12C14 12 17 14 17 18"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'panel':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M2 6C2 5 2.5 4.5 3.5 4.5H7L9 6.5H16.5C17.5 6.5 18 7 18 8V15C18 16 17.5 16.5 16.5 16.5H3.5C2.5 16.5 2 16 2 15V6Z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'sticker':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M3 4C3 3 3.5 2.5 4.5 2.5H13.5L17.5 6.5V15.5C17.5 16.5 17 17 16 17H4.5C3.5 17 3 16.5 3 15.5V4Z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M13 2.5V7H17.5" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      )
  }
}
