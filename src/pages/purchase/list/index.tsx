import { PAGES } from '../../../shared/constants/pages'

type Props = {
  onNavigate: (page: string) => void
}

type IconType = 'energy' | 'jersey' | 'panel' | 'sticker'

type Purchase = {
  name: string
  icon: IconType
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

function ItemIcon({ type }: { type: IconType }) {
  const common = 'w-11 h-11 rounded-[10px] bg-white border border-[#CFD9F2] flex items-center justify-center text-[#8FA4DC]'
  switch (type) {
    case 'energy':
      return (
        <div className={common}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#8FA4DC">
            <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
          </svg>
        </div>
      )
    case 'jersey':
      return (
        <div className={common}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#8FA4DC">
            <circle cx="12" cy="9" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          </svg>
        </div>
      )
    case 'panel':
      return (
        <div className={common}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8FA4DC" strokeWidth="1.8">
            <rect x="3" y="6" width="18" height="13" rx="2" />
            <path d="M3 9h10l2-3h6" />
          </svg>
        </div>
      )
    case 'sticker':
      return (
        <div className={common}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8FA4DC" strokeWidth="1.8" strokeLinejoin="round">
            <path d="M4 4h12l4 4v12H4z" />
            <path d="M16 4v4h4" />
          </svg>
        </div>
      )
  }
}

export function PurchaseListPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px] font-['Pretendard',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between h-[44px] shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-[#6E5BFF] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">R</span>
          </div>
          <span className="text-white text-[13px] font-bold tracking-wider">RORR</span>
        </div>
        <button
          onClick={() => onNavigate(PAGES.PROFILE)}
          className="w-6 h-6 flex items-center justify-center text-white text-lg leading-none"
          aria-label="close"
        >
          ×
        </button>
      </div>

      {/* Card */}
      <div className="flex-1 bg-[#EEEEF0] rounded-t-[16px] flex flex-col overflow-hidden">
        <div className="px-4 pt-4 pb-2 shrink-0">
          <button
            onClick={() => onNavigate(PAGES.PROFILE)}
            className="w-9 h-9 rounded-full bg-[#C9CBE8] flex items-center justify-center text-[#46383a]"
            aria-label="back"
          >
            «
          </button>
        </div>

        <div className="flex-1 px-3 pb-4 overflow-y-auto space-y-3">
          {MOCK_PURCHASES.map((p, idx) => (
            <div key={idx} className="bg-white rounded-[12px] px-3 py-3">
              <div className="flex items-start gap-3">
                <ItemIcon type={p.icon} />
                <div className="flex-1 min-w-0">
                  <div className="text-[#8FA4DC] text-[16px] font-extrabold leading-tight">
                    {p.name}
                  </div>
                  <div className="text-[#1A1A1A] text-[12px] mt-0.5 truncate">
                    {p.txId.slice(0, 30)}…
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-3 mt-2 text-[12px] text-[#9B9DA8]">
                <span>{p.date}</span>
              </div>
              <div className="flex justify-end items-center gap-1 text-[11px] text-[#9B9DA8]">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9B9DA8" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" strokeLinecap="round" />
                </svg>
                <span>{p.elapsed}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
