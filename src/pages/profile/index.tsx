import { PAGES } from '../../shared/constants/pages'

interface Props {
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
        <div className="flex items-center justify-between px-4 pt-4 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="w-9 h-9 rounded-full bg-[#bcb5e6] flex items-center justify-center"
            aria-label="close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 3L11 11M11 3L3 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            className="relative w-9 h-9 flex items-center justify-center"
            aria-label="messages"
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
              <rect x="1.5" y="2.5" width="19" height="13" rx="2" stroke="#1a1a1a" strokeWidth="1.5" />
              <path d="M2 4L11 11L20 4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#ff6a1f] flex items-center justify-center text-white text-[10px] font-bold">
              2
            </span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          <div className="mt-4 flex justify-start">
            <div className="w-[110px] h-[110px] rounded-full bg-[#bdbdbd] border-[3px] border-[#3a3a3a] flex items-center justify-center overflow-hidden">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="24" r="12" fill="white" />
                <path d="M8 56C8 42 18 36 32 36C46 36 56 42 56 56" fill="white" />
              </svg>
            </div>
          </div>

          <p className="mt-3 text-[#1a1a1a] text-[14px]">{MOCK_PROFILE.email}</p>
          <h1 className="text-[#1a1a1a] text-[40px] font-extrabold leading-tight">{MOCK_PROFILE.displayname}</h1>

          <div className="mt-2 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[#a070ff] text-base">✨</span>
              <span className="text-[#a070ff] font-bold text-[15px]">{MOCK_PROFILE.exp}</span>
            </div>
            <span className="text-[#c8c8c8]">|</span>
            <span className="text-[#1a1a1a] text-[13px] font-extrabold tracking-wide">
              {MOCK_PROFILE.gradeName}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-[#1ed27d] text-base">⚡</span>
            <span className="text-[#1ed27d] font-bold text-[15px]">{MOCK_PROFILE.cash}</span>
            <button
              type="button"
              className="w-6 h-6 rounded bg-[#bcb5e6] flex items-center justify-center"
              aria-label="charge"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2V10M2 6H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="my-4 h-px bg-[#d8d8dc]" />

          <ul className="space-y-4">
            <li>
              <button
                type="button"
                onClick={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
                className="w-full flex items-center justify-between"
              >
                <span className="flex items-center gap-2.5 text-[#1a1a1a] text-[17px] font-extrabold">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="8" cy="7" r="3" stroke="#1a1a1a" strokeWidth="1.5" />
                    <path
                      d="M2 17C2 13.6863 4.68629 11 8 11C9.5 11 10.9 11.5 12 12.5"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path d="M15 13V19M12 16H18" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Follow Team &amp; Player
                </span>
                <ChevronRight />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onNavigate(PAGES.PURCHASE_LIST)}
                className="w-full flex items-center justify-between"
              >
                <span className="flex items-center gap-2.5 text-[#1a1a1a] text-[17px] font-extrabold">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="5" width="16" height="11" rx="1.5" stroke="#1a1a1a" strokeWidth="1.5" />
                    <path d="M2 9H18" stroke="#1a1a1a" strokeWidth="1.5" />
                    <path d="M5 13H8" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Purchase List
                </span>
                <ChevronRight />
              </button>
            </li>
            <li>
              <button type="button" className="w-full flex items-center justify-between">
                <span className="flex items-center gap-2.5 text-[#1a1a1a] text-[17px] font-extrabold">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M11 2L4 11H9L8 18L15 9H10L11 2Z"
                      stroke="#1a1a1a"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Boost List
                </span>
                <ChevronRight />
              </button>
            </li>
            <li>
              <button type="button" className="w-full flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-md bg-[#7b6ad4] flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">R</span>
                </div>
                <span className="text-[#1a1a1a] text-[17px] font-extrabold">dev-app.rorr.club</span>
                <ExternalIcon />
              </button>
            </li>
            <li>
              <button type="button" className="w-full flex items-center gap-2.5">
                <span className="text-[#1a1a1a] text-[17px] font-extrabold">Terms of use</span>
                <ExternalIcon />
              </button>
            </li>
            <li>
              <button type="button" className="w-full flex items-center gap-2.5">
                <span className="text-[#1a1a1a] text-[17px] font-extrabold">Privacy policy</span>
                <ExternalIcon />
              </button>
            </li>
          </ul>

          <div className="my-4 h-px bg-[#d8d8dc]" />

          <div className="flex justify-center py-4">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-md bg-[#2c1c91] flex items-center justify-center">
                <span className="text-white text-xs font-bold">R</span>
              </div>
              <span className="text-[#2c1c91] text-lg font-extrabold tracking-wide">RORR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 3L11 8L6 13" stroke="#7b7b7b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M5 3H3V11H11V9M8 2H12V6M6 8L12 2"
        stroke="#1a1a1a"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
