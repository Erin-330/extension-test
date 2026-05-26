import { useState } from 'react'
import { PAGES } from '../../../shared/constants/pages'

type Props = {
  onNavigate: (page: string) => void
}

type League = {
  id: string
  acronym: string
  name: string
  boost: boolean
}

const MOCK_LEAGUES: League[] = [
  { id: 'lck', acronym: 'LCK', name: 'League of Legends Champions Kor…', boost: true },
  { id: 'lpl', acronym: 'LPL', name: 'League of Legends Pro League', boost: true },
  { id: 'vcs', acronym: 'VCS', name: 'Vietnam Championship Series', boost: true },
  { id: 'msi', acronym: 'MSI', name: 'Mid-Season Invitational', boost: true },
  { id: 'lec', acronym: 'LEC', name: 'League of Legends EMEA Champio…', boost: false },
  { id: 'cblol', acronym: 'CBLOL', name: 'Circuit Brazilian League of Legends', boost: false },
  { id: 'lla1', acronym: 'LEC', name: 'League of Legends in Hispanic Am…', boost: false },
  { id: 'lla2', acronym: 'LEC', name: 'League of Legends in Hispanic Am…', boost: false },
  { id: 'lla3', acronym: 'LEC', name: 'League of Legends in Hispanic Am…', boost: false },
]

export function FollowLeaguePage({ onNavigate }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else if (next.size < 5) next.add(id)
      return next
    })
  }

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

      {/* Content card */}
      <div className="flex-1 bg-[#EEEEF0] rounded-t-[16px] flex flex-col overflow-hidden relative">
        {/* Title bar */}
        <div className="px-5 pt-5 pb-3 flex items-start justify-between shrink-0">
          <div>
            <h1 className="text-[#1A1A1A] text-[22px] font-extrabold leading-tight">Back Your League</h1>
            <p className="text-[#1A1A1A] text-[13px] mt-1">Follow your favorite Leagues</p>
          </div>
          <button className="w-9 h-9 rounded-full bg-[#C9CBE8] flex items-center justify-center shrink-0" aria-label="search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#46383a" strokeWidth="2" />
              <path d="m20 20-3-3" stroke="#46383a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* List */}
        <div className="flex-1 px-3 pb-24 overflow-y-auto space-y-2">
          {MOCK_LEAGUES.map((league) => {
            const isSelected = selected.has(league.id)
            return (
              <div
                key={league.id}
                className="bg-white rounded-[12px] px-3 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center shrink-0">
                  <span className="text-[#1A1A1A] text-[10px] font-extrabold">{league.acronym}</span>
                </div>
                <div className="flex-1 min-w-0">
                  {league.boost && (
                    <span className="inline-block bg-[#E9E2FF] text-[#6E5BFF] text-[9px] font-bold px-1.5 py-0.5 rounded mb-1">
                      ⚡ BOOST
                    </span>
                  )}
                  <div className="text-[#1A1A1A] text-[15px] font-extrabold leading-tight">
                    {league.acronym}
                  </div>
                  <div className="text-[#1A1A1A]/70 text-[11px] truncate">{league.name}</div>
                </div>
                <button
                  onClick={() => toggle(league.id)}
                  className={`w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? 'bg-[#6E5BFF] border-[#6E5BFF]'
                      : 'bg-[#F4F2FE] border-[#D8D2F5]'
                  }`}
                  aria-label="follow"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="8"
                      r="3.5"
                      stroke={isSelected ? '#fff' : '#6E5BFF'}
                      strokeWidth="1.6"
                    />
                    <path
                      d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
                      stroke={isSelected ? '#fff' : '#6E5BFF'}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 5v4M16 7h4"
                      stroke={isSelected ? '#fff' : '#6E5BFF'}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            )
          })}
        </div>

        {/* Bottom: step indicator + next */}
        <div className="absolute left-0 right-0 bottom-0 px-5 pb-5 pt-3 bg-gradient-to-t from-[#EEEEF0] via-[#EEEEF0] to-transparent flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-2 rounded-full bg-[#3A37C0]" />
            <div className="w-2 h-2 rounded-full bg-[#CFCFD6]" />
            <div className="w-2 h-2 rounded-full bg-[#CFCFD6]" />
          </div>
          <button
            onClick={() => onNavigate(PAGES.MAIN)}
            className="w-[72px] h-11 rounded-full bg-[#9189D9] flex items-center justify-center text-white text-xl active:opacity-80"
            aria-label="next"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
