import { PAGES } from '../../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

interface LeagueItem {
  code: string
  name: string
  description: string
  boost: boolean
}

const MOCK_LEAGUES: LeagueItem[] = [
  { code: 'LCK', name: 'LCK', description: 'League of Legends Champions Kor...', boost: true },
  { code: 'LPL', name: 'LPL', description: 'League of Legends Pro League', boost: true },
  { code: 'VCS', name: 'VCS', description: 'Vietnam Championship Series', boost: true },
  { code: 'MSI', name: 'MSI', description: 'Mid-Season Invitational', boost: true },
  { code: 'LEC', name: 'LEC', description: 'League of Legends EMEA Champio...', boost: false },
  { code: 'CBLOL', name: 'CBLOL', description: 'Circuit Brazilian League of Legends', boost: false },
  { code: 'LLA1', name: 'LEC', description: 'League of Legends in Hispanic Am...', boost: false },
  { code: 'LLA2', name: 'LEC', description: 'League of Legends in Hispanic Am...', boost: false },
  { code: 'LLA3', name: 'LEC', description: 'League of Legends in Hispanic Am...', boost: false },
  { code: 'LLA4', name: 'LEC', description: 'League of Legends in Hispanic Am...', boost: false },
]

export function FollowLeaguePage({ onNavigate }: Props) {
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
        <div className="px-5 pt-5 pb-3 flex items-start justify-between shrink-0">
          <div>
            <h1 className="text-[#1a1a1a] text-[22px] font-extrabold leading-tight">Back Your League</h1>
            <p className="text-[#5b5b5b] text-[13px] mt-1">Follow your favorite Leagues</p>
          </div>
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-[#bcb5e6] flex items-center justify-center"
            aria-label="search"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="1.5" />
              <path d="M11 11L14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-3 pb-3 space-y-2">
          {MOCK_LEAGUES.map((league) => (
            <li
              key={league.code}
              className="flex items-center gap-3 bg-white rounded-2xl px-3 py-3 shadow-sm"
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-[#f4f4f4]">
                <span className="text-[10px] font-bold text-[#1a1a1a]">{league.code.slice(0, 3)}</span>
              </div>
              <div className="flex-1 min-w-0">
                {league.boost && (
                  <span className="inline-block px-1.5 py-0.5 bg-[#7b6ad4] rounded text-white text-[9px] font-bold mb-0.5">
                    ⚡BOOST
                  </span>
                )}
                <p className="text-[#1a1a1a] text-[16px] font-extrabold leading-tight">{league.name}</p>
                <p className="text-[#7b7b7b] text-[12px] mt-0.5 truncate">{league.description}</p>
              </div>
              <button
                type="button"
                className="w-10 h-10 rounded-xl bg-[#ecebf6] flex items-center justify-center shrink-0"
                aria-label="follow"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="7.5" cy="5.5" r="2.5" stroke="#7b6ad4" strokeWidth="1.5" />
                  <path
                    d="M2.5 14.5C2.5 11.7386 4.73858 9.5 7.5 9.5C8.7 9.5 9.8 9.9 10.7 10.5"
                    stroke="#7b6ad4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path d="M13 11V15M11 13H15" stroke="#7b6ad4" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between px-5 py-3 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-1.5 rounded-full bg-[#3a2cb3]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8c8c8]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8c8c8]" />
          </div>
          <button
            type="button"
            className="w-[72px] h-11 rounded-full bg-[#9b91d8] flex items-center justify-center"
            aria-label="next"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path
                d="M1 7H17M17 7L11 1M17 7L11 13"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
