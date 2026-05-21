import { PAGES } from '../../shared/constants/pages'

const ASSET_BUTTON_SHAPE =
  'https://www.figma.com/api/mcp/asset/4baaeee2-ee31-469f-b395-e87663f18168'
const ASSET_INFO_ICON =
  'https://www.figma.com/api/mcp/asset/4880b93d-181a-4b4e-a0ed-4c1c540fbc4f'
const ASSET_CLOSE_ICON =
  'https://www.figma.com/api/mcp/asset/18dad6bf-292d-41dc-86e5-152c85020abb'
const ASSET_PROFILE_IMAGE =
  'https://www.figma.com/api/mcp/asset/196f2eb6-8497-41fd-8c4b-92bda5167c7e'
const ASSET_GRADE_BORDER =
  'https://www.figma.com/api/mcp/asset/b7eaa2c3-0c9b-401a-993f-6a4095102d1e'
const ASSET_RANK_DIVIDER =
  'https://www.figma.com/api/mcp/asset/fe31a649-5d83-48a1-8058-787714ed7e1c'
const ASSET_FRAME_DIVIDER =
  'https://www.figma.com/api/mcp/asset/51f55512-f3a3-40b6-8efc-dd3d6a132470'
const ASSET_BAR_4 =
  'https://www.figma.com/api/mcp/asset/f9c76738-81a6-420d-9588-075235e45b70'
const ASSET_BAR_2 =
  'https://www.figma.com/api/mcp/asset/ec255ce5-0454-43d5-8e69-89eb2ea2c11a'
const ASSET_BAR_1 =
  'https://www.figma.com/api/mcp/asset/0096a59a-3796-41b7-bab7-578b6cd89cdf'
const ASSET_BAR_3 =
  'https://www.figma.com/api/mcp/asset/3ea97a9b-eb14-4320-bdb8-e95ef68e2e07'
const ASSET_BAR_5 =
  'https://www.figma.com/api/mcp/asset/45c4ec51-c9b9-497b-9178-03debccb8f71'
const ASSET_DROPDOWN_ARROW =
  'https://www.figma.com/api/mcp/asset/67fe4602-ed04-4a6a-bb7b-16598c98394a'

interface RankPageProps {
  onNavigate: (page: string) => void
}

interface RankEntry {
  rank: number
  name: string
  current: string
  longest: string
}

interface GradeSection {
  grade: 'Diamond' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Participant'
  bg: string
  entries: RankEntry[]
}

const MOCK_TOP5: { rank: number; name: string; current: string; streak: number; barAsset: string; nameColor: string; paddingTop: string }[] = [
  { rank: 4, name: 'Alfred', current: 'W1', streak: 12, barAsset: ASSET_BAR_4, nameColor: '#969cd9', paddingTop: 'pt-[153px]' },
  { rank: 2, name: 'bushman', current: 'W1', streak: 17, barAsset: ASSET_BAR_2, nameColor: '#424cbb', paddingTop: 'pt-[19px]' },
  { rank: 1, name: 'ddadda', current: 'W1', streak: 20, barAsset: ASSET_BAR_1, nameColor: '#2d39b4', paddingTop: 'pt-0' },
  { rank: 3, name: 'Samantha', current: 'W1', streak: 16, barAsset: ASSET_BAR_3, nameColor: '#6c74ca', paddingTop: 'pt-[87px]' },
  { rank: 5, name: 'frifre', current: 'W1', streak: 8, barAsset: ASSET_BAR_5, nameColor: '#c0c3e8', paddingTop: 'pt-[193px]' },
]

const MOCK_MY_RANK: RankEntry = {
  rank: 9,
  name: 'andy13',
  current: 'L4',
  longest: 'W6',
}

const MOCK_GRADE_SECTIONS: GradeSection[] = [
  {
    grade: 'Diamond',
    bg: 'bg-gradient-to-r from-[#81a0b8] from-[25.013%] to-[rgba(129,160,184,0)]',
    entries: [
      { rank: 6, name: 'namcheondong', current: 'W3', longest: 'W8' },
      { rank: 7, name: 'kkkim', current: 'L2', longest: 'W7' },
    ],
  },
  {
    grade: 'Platinum',
    bg: 'bg-gradient-to-r from-[#afcfe2] from-[25.013%] to-[rgba(175,207,226,0)]',
    entries: [
      { rank: 8, name: 'OrangeCan', current: 'W1', longest: 'W7' },
      { rank: 10, name: 'Zammin', current: 'W2', longest: 'W6' },
    ],
  },
  {
    grade: 'Gold',
    bg: 'bg-gradient-to-r from-[#e9d17f] from-[25.013%] to-[rgba(122,90,31,0)]',
    entries: [
      { rank: 11, name: 'TrumpKing', current: 'L4', longest: 'W6' },
      { rank: 12, name: 'wwifjdksi5439', current: 'L2', longest: 'W6' },
      { rank: 13, name: 'Greatman', current: 'L4', longest: 'W5' },
      { rank: 14, name: 'MadeinChina', current: 'L5', longest: 'W5' },
    ],
  },
  {
    grade: 'Silver',
    bg: 'bg-gradient-to-r from-[#bccfe3] from-[25.013%] to-[rgba(107,118,130,0)]',
    entries: [
      { rank: 15, name: 'TrumpKing', current: 'L4', longest: 'W6' },
      { rank: 16, name: 'wwifjdksi5439', current: 'L2', longest: 'W6' },
      { rank: 17, name: 'Greatman', current: 'L4', longest: 'W5' },
      { rank: 18, name: 'MadeinChina', current: 'L5', longest: 'W5' },
    ],
  },
  {
    grade: 'Bronze',
    bg: 'bg-gradient-to-r from-[#ebc7b3] from-[25.013%] to-[rgba(63,46,37,0)]',
    entries: [
      { rank: 19, name: 'TrumpKing', current: 'L4', longest: 'W6' },
      { rank: 20, name: 'wwifjdksi5439', current: 'L2', longest: 'W6' },
      { rank: 21, name: 'Greatman', current: 'L4', longest: 'W5' },
      { rank: 22, name: 'MadeinChina', current: 'L5', longest: 'W5' },
    ],
  },
]

function ProfileWithFrame({ size = 20 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <img
        src={ASSET_PROFILE_IMAGE}
        alt=""
        className="absolute inset-[3.57%] rounded-full object-cover"
        style={{ width: '93%', height: '93%' }}
      />
      <img src={ASSET_GRADE_BORDER} alt="" className="absolute inset-0 h-full w-full" />
    </div>
  )
}

function CircleButton({
  onClick,
  iconSrc,
  ariaLabel,
}: {
  onClick: () => void
  iconSrc: string
  ariaLabel: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="relative flex h-6 w-6 items-center justify-center rounded-full"
    >
      <img src={ASSET_BUTTON_SHAPE} alt="" className="absolute inset-0 h-full w-full" />
      <img src={iconSrc} alt="" className="relative h-[10px] w-[10px]" />
    </button>
  )
}

function GradeTag({ grade, bg }: { grade: string; bg: string }) {
  return (
    <div className={`flex w-full items-center gap-[4px] rounded-[4px] p-[8px] ${bg}`}>
      <p className="text-[16px] font-bold leading-[20px] text-white">{grade}</p>
    </div>
  )
}

function RankListItem({ entry, highlighted = false }: { entry: RankEntry; highlighted?: boolean }) {
  const textColor = highlighted ? 'text-white' : 'text-black'
  return (
    <div
      className={`flex w-full items-center justify-center gap-[8px] px-[4px] py-[8px] ${
        highlighted ? 'bg-[#9ca3f1]' : ''
      }`}
    >
      <p className={`w-[28px] text-center text-[14px] font-light leading-[20px] ${textColor}`}>
        {entry.rank}
      </p>
      <div className="flex min-w-0 flex-1 items-center gap-[4px]">
        <ProfileWithFrame size={20} />
        <p
          className={`flex-1 truncate text-[16px] font-bold leading-[20px] ${textColor}`}
        >
          {entry.name}
        </p>
      </div>
      <p className={`w-[40px] text-right text-[14px] font-light leading-[20px] ${textColor}`}>
        {entry.current}
      </p>
      <img src={ASSET_RANK_DIVIDER} alt="" className="h-5 w-px shrink-0" />
      <p className={`w-[40px] text-[14px] font-light leading-[20px] ${textColor}`}>
        {entry.longest}
      </p>
    </div>
  )
}

export function RankPage({ onNavigate }: RankPageProps) {
  return (
    <div className="flex h-dvh w-full flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-12 w-full shrink-0 items-center justify-between px-1 opacity-[0.66]">
        <div className="flex items-center gap-1">
          <span className="text-[14px] font-light leading-[20px] text-white">RORR</span>
        </div>
      </div>

      <div className="relative flex w-full flex-1 flex-col overflow-hidden rounded-[16px] bg-[#f0f2f5]">
        <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-[12px]">
          <CircleButton
            onClick={() => onNavigate(PAGES.MAIN)}
            iconSrc={ASSET_CLOSE_ICON}
            ariaLabel="닫기"
          />
          <CircleButton
            onClick={() => onNavigate(PAGES.MAIN)}
            iconSrc={ASSET_INFO_ICON}
            ariaLabel="랭킹 기준 안내"
          />
        </div>

        <div className="flex flex-1 flex-col items-center gap-[16px] overflow-y-auto px-[16px] pb-[48px] pt-[48px]">
          <div className="flex w-full flex-col items-start gap-[4px]">
            <div className="flex w-[107px] items-center gap-[4px] rounded-[6px] border border-[#ced6e6] bg-white py-[2px] pl-[4px] pr-[10px]">
              <img
                src={ASSET_DROPDOWN_ARROW}
                alt=""
                className="h-6 w-6"
                style={{ transform: 'rotate(90deg)' }}
              />
              <span className="text-[14px] font-light leading-[20px] text-black">Dec. 2025</span>
            </div>

            <div className="flex w-full flex-col gap-[8px] rounded-[8px] bg-[#dce2eb] p-[4px]">
              <div className="flex w-full items-center gap-[10px] rounded-[4px] bg-gradient-to-r from-black from-[25.013%] to-[rgba(0,0,0,0)] p-[8px]">
                <p className="text-[16px] font-bold leading-[20px] text-white">Top 5</p>
              </div>
              <div className="flex h-[280px] w-full items-end">
                {MOCK_TOP5.map((item) => (
                  <div
                    key={item.rank}
                    className={`flex h-full flex-1 flex-col items-start ${item.paddingTop}`}
                  >
                    <div className="flex w-full flex-1 flex-col items-center gap-[4px]">
                      <p
                        className="w-full truncate text-center text-[12px] leading-[1.2]"
                        style={{ color: item.nameColor }}
                      >
                        {item.name}
                      </p>
                      <div className="relative flex w-full flex-1 flex-col items-center justify-end">
                        <img
                          src={item.barAsset}
                          alt=""
                          className="absolute inset-0 h-full w-full"
                        />
                        <div className="absolute left-0 right-0 top-0 flex flex-col items-center">
                          <p className="h-[22px] w-full text-center text-[16px] font-bold leading-[20px] text-white">
                            {ordinal(item.rank)}
                          </p>
                          <img src={ASSET_FRAME_DIVIDER} alt="" className="h-px w-full" />
                          <div className="flex w-full items-center text-center text-white">
                            <p className="flex-1 text-[14px] font-light leading-[20px]">
                              {item.current}
                            </p>
                            <p className="flex-1 text-[16px] font-bold leading-[20px]">
                              {item.streak}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[10px] rounded-[8px] border border-[#9ca3f1] bg-white p-[4px]">
            <div className="flex w-full items-center gap-[4px] rounded-[4px] bg-[#9ca3f1] p-[8px]">
              <p className="text-[16px] font-bold leading-[20px] text-white">My Ranking</p>
            </div>
            <RankListItem entry={MOCK_MY_RANK} />
          </div>

          {MOCK_GRADE_SECTIONS.map((section) => (
            <div
              key={section.grade}
              className="flex w-full flex-col gap-[10px] rounded-[8px] bg-[#dce2eb] p-[4px]"
            >
              <GradeTag grade={section.grade} bg={section.bg} />
              {section.entries.map((entry) => (
                <RankListItem
                  key={`${section.grade}-${entry.rank}`}
                  entry={entry}
                  highlighted={entry.rank === MOCK_MY_RANK.rank}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}
