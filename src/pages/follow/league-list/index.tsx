import { useMemo, useState } from 'react'
import { PAGES } from '../../../shared/constants/pages'

interface LeagueListPageProps {
  onNavigate: (page: string) => void
}

const IMG_RORR_UNION_STROKE = 'https://www.figma.com/api/mcp/asset/fd5271c5-e7e0-4884-a312-b73691a9bb6a'
const IMG_RORR_EXCLUDE = 'https://www.figma.com/api/mcp/asset/a3555e91-61b2-4c2f-896f-c40d32bc8b5c'
const IMG_HEADER_CLOSE = 'https://www.figma.com/api/mcp/asset/75f9398f-153f-4875-8903-1105382a3f41'
const IMG_SEARCH = 'https://www.figma.com/api/mcp/asset/478b4f4d-5856-4c28-8252-b033241e70c0'
const IMG_BOOST_LIGHTNING = 'https://www.figma.com/api/mcp/asset/9a8b7650-ea1c-44b2-af51-ec96ee6670e6'
const IMG_SELECT_NUM_ICON = 'https://www.figma.com/api/mcp/asset/93bdd0ba-73dc-4737-9123-2c0623c4cb39'
const IMG_STEP_BTN_ARROW = 'https://www.figma.com/api/mcp/asset/fd5271c5-e7e0-4884-a312-b73691a9bb6a'
const IMG_HEADER_SHAPE = 'https://www.figma.com/api/mcp/asset/dea5633e-438c-4202-bfa3-211014db4f00'

const IMG_LCK = 'https://www.figma.com/api/mcp/asset/b2bc80ed-d1ac-4b91-8aee-dcea7f3fe704'
const IMG_LPL = 'https://www.figma.com/api/mcp/asset/6bb06bcb-41a9-4a5a-88ab-14562afc0f0f'
const IMG_VCS = 'https://www.figma.com/api/mcp/asset/b4703c75-9a42-4782-848b-863f936a7274'
const IMG_MSI = 'https://www.figma.com/api/mcp/asset/2fee501c-f4fe-4169-8eba-1a9fdc5ceab8'
const IMG_LEC = 'https://www.figma.com/api/mcp/asset/37882432-da07-49c3-ab78-9f69d37164d1'
const IMG_CBLOL = 'https://www.figma.com/api/mcp/asset/da4dfba7-42d9-4d7c-9760-dbb32709d315'
const IMG_LLA = 'https://www.figma.com/api/mcp/asset/059a9723-365e-4772-b5fa-5ac4c3dcab8c'

type League = {
  id: string
  name: string
  desc: string
  logo: string
  boost: boolean
  logoInset?: string
  logoCover?: boolean
}

const MOCK_LEAGUES: League[] = [
  { id: 'lck', name: 'LCK', desc: 'League of Legends Champions Korea', logo: IMG_LCK, boost: true, logoInset: 'inset-[15%_0_14.65%_0]' },
  { id: 'lpl', name: 'LPL', desc: 'League of Legends Pro League', logo: IMG_LPL, boost: true, logoInset: 'inset-[19.65%_0_20.29%_0]' },
  { id: 'vcs', name: 'VCS', desc: 'Vietnam Championship Series', logo: IMG_VCS, boost: true, logoInset: 'inset-[0_-180.85%_0_1%]', logoCover: true },
  { id: 'msi', name: 'MSI', desc: 'Mid-Season Invitational', logo: IMG_MSI, boost: true, logoInset: 'inset-[6.31%_9%_5.69%_9%]', logoCover: true },
  { id: 'lec', name: 'LEC', desc: 'League of Legends EMEA Championship', logo: IMG_LEC, boost: false, logoInset: 'inset-[1%]', logoCover: true },
  { id: 'cblol', name: 'CBLOL', desc: 'Circuit Brazilian League of Legends', logo: IMG_CBLOL, boost: false, logoInset: 'inset-[1%]', logoCover: true },
  { id: 'lla1', name: 'LLA', desc: 'League of Legends in Hispanic America', logo: IMG_LLA, boost: false, logoInset: 'inset-[17%_0_17.48%_0]', logoCover: true },
  { id: 'lla2', name: 'LLA', desc: 'League of Legends in Hispanic America', logo: IMG_LLA, boost: false, logoInset: 'inset-[17%_0_17.48%_0]', logoCover: true },
  { id: 'lla3', name: 'LLA', desc: 'League of Legends in Hispanic America', logo: IMG_LLA, boost: false, logoInset: 'inset-[17%_0_17.48%_0]', logoCover: true },
  { id: 'lla4', name: 'LLA', desc: 'League of Legends in Hispanic America', logo: IMG_LLA, boost: true, logoInset: 'inset-[17%_0_17.48%_0]', logoCover: true },
]

const FOLLOW_SELECTION_LIMIT_LEAGUE = 5

function BoostTag() {
  return (
    <div className="bg-gradient-to-b from-[#c0b1ff] via-[#a28cff] via-[4.808%] to-[#6f4cff] flex gap-[2px] items-center justify-center overflow-hidden px-[2px] py-px relative rounded-[2px] shrink-0">
      <div className="overflow-hidden relative shrink-0 size-[6px]">
        <div className="absolute inset-[0_20.83%_0_22.92%]">
          <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_BOOST_LIGHTNING} />
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold leading-[normal] text-[8px] text-white whitespace-nowrap">
        BOOST
      </p>
    </div>
  )
}

function SelectNum({ order }: { order: number | null }) {
  const isSelected = order !== null
  return (
    <div className="flex h-full items-center justify-center overflow-hidden px-[12px] relative rounded-tr-[8px] rounded-br-[8px] shrink-0">
      <div
        className={`border-[0.4px] border-solid relative rounded-[6px] shrink-0 size-[32px] flex items-center justify-center ${
          isSelected ? 'bg-[#969cda] border-[#969cda]' : 'border-[#969cda]'
        }`}
      >
        {isSelected ? (
          <span className="font-['Pretendard',sans-serif] font-bold text-white text-[14px] leading-none">
            {order}
          </span>
        ) : (
          <div className="absolute inset-[16.67%_12.5%_12.5%_12.5%]">
            <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_SELECT_NUM_ICON} />
          </div>
        )}
      </div>
    </div>
  )
}

function LeagueLogo({ logo, inset, cover }: { logo: string; inset?: string; cover?: boolean }) {
  return (
    <div className="flex items-center p-[2px] relative rounded-[6px] shrink-0">
      <div className="overflow-hidden relative shrink-0 size-[28px]">
        <div className={`absolute ${inset ?? 'inset-0'}`}>
          <img
            alt=""
            className={`absolute inset-0 max-w-none size-full ${cover ? 'object-cover' : ''}`}
            src={logo}
          />
        </div>
      </div>
    </div>
  )
}

export function LeagueListPage({ onNavigate }: LeagueListPageProps) {
  const [orderedIds, setOrderedIds] = useState<string[]>([])

  const toggle = (id: string) => {
    setOrderedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= FOLLOW_SELECTION_LIMIT_LEAGUE) return prev
      return [...prev, id]
    })
  }

  const sortedLeagues = useMemo(() => {
    const selected = orderedIds
      .map((id) => MOCK_LEAGUES.find((l) => l.id === id))
      .filter((l): l is League => l !== undefined)
    const unselected = MOCK_LEAGUES.filter((l) => !orderedIds.includes(l.id))
    return [...selected, ...unselected]
  }, [orderedIds])

  const handleNext = () => onNavigate(PAGES.MAIN)
  const handleClose = () => onNavigate(PAGES.MAIN)

  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      {/* Top RORR header */}
      <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] shrink-0 w-full">
        <div className="flex gap-[6px] items-center">
          <div className="-scale-y-100 rotate-180">
            <div className="h-[18px] overflow-hidden relative w-[22px]">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_RORR_UNION_STROKE} />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_RORR_EXCLUDE} />
              </div>
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <button onClick={handleClose} className="relative shrink-0 size-[12.414px]">
          <img alt="close" className="absolute inset-0 max-w-none size-full" src={IMG_HEADER_CLOSE} />
        </button>
      </div>

      {/* Inner UI panel */}
      <div className="flex-1 min-h-0 bg-[#f0f2f5] rounded-[16px] relative overflow-hidden w-full">
        <div className="absolute inset-0 flex flex-col gap-[16px] pb-[70px] pt-[12px] px-[16px] overflow-y-auto">
          {/* Header Title */}
          <div className="flex flex-col gap-[4px] h-[68px] items-start shrink-0 w-[215px]">
            <p className="font-['Pretendard',sans-serif] font-semibold leading-[1.5] text-[24px] text-black w-full">
              Back Your League
            </p>
            <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black w-full">
              Follow your favorite Leagues
            </p>
          </div>

          {/* List items */}
          {sortedLeagues.map((league) => {
            const idx = orderedIds.indexOf(league.id)
            const order = idx === -1 ? null : idx + 1
            return (
              <button
                key={league.id}
                onClick={() => toggle(league.id)}
                className="bg-white flex gap-[4px] h-[68px] items-stretch rounded-[8px] shrink-0 w-full drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)] text-left"
              >
                <div className="flex flex-1 min-w-0 gap-[12px] items-center px-[12px]">
                  <LeagueLogo logo={league.logo} inset={league.logoInset} cover={league.logoCover} />
                  <div className="flex flex-1 min-w-0 flex-col gap-[4px] items-start justify-center">
                    {league.boost && <BoostTag />}
                    <p className="font-['Pretendard',sans-serif] font-bold leading-[normal] text-[20px] text-black overflow-hidden text-ellipsis whitespace-nowrap min-w-full">
                      {league.name}
                    </p>
                    <p className="font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-[#757b90] overflow-hidden text-ellipsis whitespace-nowrap min-w-full">
                      {league.desc}
                    </p>
                  </div>
                </div>
                <SelectNum order={order} />
              </button>
            )
          })}
        </div>

        {/* Search button (top right inside UI) */}
        <div className="absolute right-0 top-0 flex flex-col gap-[4px] items-start p-[10px]">
          <div className="flex gap-[10px] items-center w-full">
            <button className="flex flex-col items-start relative rounded-[28px] size-[24px]">
              <div className="relative rounded-[30px] size-[24px]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_HEADER_SHAPE} />
              </div>
              <div className="absolute inset-[8.33%] overflow-hidden">
                <div className="absolute inset-[14.58%_15.4%_15.4%_14.58%]">
                  <img alt="search" className="absolute inset-0 max-w-none size-full" src={IMG_SEARCH} />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom step indicator + buttons */}
        <div className="absolute backdrop-blur-[3px] bg-[rgba(255,255,255,0.01)] bottom-0 left-0 right-0 flex gap-[10px] items-center justify-center px-[16px] py-[8px]">
          {/* Prev (invisible at step 0) */}
          <div className="flex-1 max-w-[96px] min-w-[80px] h-[48px] opacity-0 pointer-events-none">
            <div className="h-[48px] rounded-[30px] bg-[#969cda] w-full" />
          </div>
          {/* Dots */}
          <div className="flex flex-1 gap-[4px] items-center max-w-[190px] min-w-0 px-[5px] py-[10px]">
            <div className="flex flex-1 flex-col items-center justify-center min-w-0">
              <div className="bg-[#2d39b4] h-[8px] rounded-[4px] w-full" />
            </div>
            <div className="flex flex-1 items-center justify-center min-w-0">
              <div className="bg-[#b2bac3] rounded-[4px] size-[8px]" />
            </div>
            <div className="flex flex-1 items-center justify-center min-w-0">
              <div className="bg-[#b2bac3] rounded-[4px] size-[8px]" />
            </div>
          </div>
          {/* Next button */}
          <button
            onClick={handleNext}
            className="flex-1 max-w-[96px] min-w-[80px] h-[48px] relative rounded-[30px] bg-[#969cda] hover:bg-[#afb5ea] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15)] transition-colors"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden size-[36px]">
              <div className="absolute inset-[30.21%_22.66%_30.21%_23.96%]">
                <img alt="next" className="absolute inset-0 max-w-none size-full" src={IMG_STEP_BTN_ARROW} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
