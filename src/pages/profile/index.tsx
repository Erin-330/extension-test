import { PAGES } from '../../shared/constants/pages'

type Props = {
  onNavigate: (page: string) => void
}

const MOCK_PROFILE = {
  email: 'yeomdw@gmail.com',
  displayname: 'dany13',
  cash: '12,345',
  exp: '45,678',
  gradeName: 'HALL OF FAME',
}

export function ProfilePage({ onNavigate }: Props) {
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
          onClick={() => onNavigate(PAGES.MAIN)}
          className="w-6 h-6 flex items-center justify-center text-white text-lg leading-none"
          aria-label="close"
        >
          ×
        </button>
      </div>

      {/* Card */}
      <div className="flex-1 bg-[#EEEEF0] rounded-t-[16px] overflow-y-auto">
        {/* Top action row */}
        <div className="flex items-center justify-between px-5 pt-4">
          <button
            onClick={() => onNavigate(PAGES.MAIN)}
            className="w-8 h-8 rounded-full bg-[#C9CBE8] flex items-center justify-center"
            aria-label="close"
          >
            <span className="text-[#46383a] text-base leading-none">×</span>
          </button>
          <div className="relative">
            <button className="w-8 h-8 flex items-center justify-center" aria-label="mail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1A1A1A" strokeWidth="1.6" />
                <path d="m3 7 9 6 9-6" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 rounded-full bg-[#FF6A1A] text-white text-[10px] font-bold flex items-center justify-center">
              2
            </span>
          </div>
        </div>

        {/* Avatar + info */}
        <div className="px-5 mt-2">
          <div className="w-[88px] h-[88px] rounded-full bg-[#BFBFC8] border-[3px] border-[#7A7A86] flex items-center justify-center overflow-hidden">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#fff">
              <circle cx="12" cy="9" r="4" />
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
            </svg>
          </div>

          <p className="mt-3 text-[#1A1A1A] text-[13px]">{MOCK_PROFILE.email}</p>
          <h1 className="text-[#1A1A1A] text-[32px] font-extrabold leading-tight">
            {MOCK_PROFILE.displayname}
          </h1>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              <span className="text-[#A689FF]">✦</span>
              <span className="text-[#A689FF] text-[14px] font-semibold">{MOCK_PROFILE.exp}</span>
            </div>
            <span className="w-px h-3 bg-[#1A1A1A]/30" />
            <span className="text-[#1A1A1A] text-[13px] font-extrabold">{MOCK_PROFILE.gradeName}</span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-[#00C896]">⚡</span>
            <span className="text-[#00C896] text-[14px] font-semibold">{MOCK_PROFILE.cash}</span>
            <button
              className="w-6 h-6 rounded bg-[#C9CBE8] flex items-center justify-center text-[#46383a] text-sm"
              aria-label="charge"
            >
              +
            </button>
          </div>
        </div>

        <div className="mx-5 mt-4 border-t border-[#1A1A1A]/10" />

        {/* Menu */}
        <div className="px-5 mt-3">
          <MenuItem
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="10" cy="8" r="3.5" stroke="#1A1A1A" strokeWidth="1.6" />
                <path d="M3 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M19 5v4M17 7h4" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            }
            label="Follow Team & Player"
            onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
          />
          <MenuItem
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="13" rx="2" stroke="#1A1A1A" strokeWidth="1.6" />
                <path d="M3 10h18" stroke="#1A1A1A" strokeWidth="1.6" />
              </svg>
            }
            label="Purchase List"
            onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
          />
          <MenuItem
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="#1A1A1A" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            }
            label="Boost List"
          />

          <div className="mt-3 space-y-3">
            <ExternalRow
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#3A37C0">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              }
              label="dev-app.rorr.club"
            />
            <ExternalRow label="Terms of use" />
            <ExternalRow label="Privacy policy" />
          </div>
        </div>

        <div className="mx-5 mt-6 border-t border-[#1A1A1A]/10" />

        {/* Footer logo */}
        <div className="flex items-center justify-center py-6">
          <div className="flex items-center gap-2 text-[#3A37C0]">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#3A37C0">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="text-[#3A37C0] text-[14px] font-extrabold tracking-wider">RORR</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuItem({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-3 active:opacity-70"
    >
      <span className="flex items-center gap-2.5">
        {icon}
        <span className="text-[#1A1A1A] text-[16px] font-extrabold">{label}</span>
      </span>
      <span className="text-[#1A1A1A] text-base">›</span>
    </button>
  )
}

function ExternalRow({ icon, label }: { icon?: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 py-1">
      {icon}
      <span className="text-[#1A1A1A] text-[15px] font-extrabold">{label}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M14 4h6v6M20 4 10 14M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
