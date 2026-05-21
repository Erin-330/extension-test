import { PAGES } from '../../shared/constants/pages'

interface RankPageProps {
  onNavigate: (page: string) => void
}

const IMG_HEADER_BUTTON_SHAPE =
  'https://www.figma.com/api/mcp/asset/ae99a398-601f-493b-bea8-45252d62efb4'
const IMG_INFO_ICON =
  'https://www.figma.com/api/mcp/asset/21c8b516-4885-4ed4-9b6b-077fc6b87d47'
const IMG_CLOSE_ICON =
  'https://www.figma.com/api/mcp/asset/698f4013-d8c6-4e01-a329-deb791308516'
const IMG_AVATAR =
  'https://www.figma.com/api/mcp/asset/f9b25780-d822-4f86-a347-1e5ea891c148'
const IMG_GRADE_BORDER =
  'https://www.figma.com/api/mcp/asset/cf1d7b08-d4db-4c3b-aa66-5ca0b67f32ec'
const IMG_GRADE_ICON_DEFAULT =
  'https://www.figma.com/api/mcp/asset/ea95d7d4-b87a-47c6-b2c9-3dd1524aa57e'
const IMG_BAR_4TH =
  'https://www.figma.com/api/mcp/asset/f4e7260b-43ca-4f36-aa4f-5dc0e5eb544d'
const IMG_BAR_2ND =
  'https://www.figma.com/api/mcp/asset/b669692e-0cf8-40ac-90b1-5132217f6025'
const IMG_BAR_1ST =
  'https://www.figma.com/api/mcp/asset/07057654-719e-4700-990a-eedaff682b33'
const IMG_BAR_3RD =
  'https://www.figma.com/api/mcp/asset/d9b6a0e9-f0fd-4d8e-83a5-653e38512265'
const IMG_BAR_5TH =
  'https://www.figma.com/api/mcp/asset/196b6311-a31b-4d31-8a5b-574a532b337f'
const IMG_DIVIDER =
  'https://www.figma.com/api/mcp/asset/aae3e02c-3ce7-426e-ae0d-5c36b7ae383a'
const IMG_DROPDOWN_ARROW =
  'https://www.figma.com/api/mcp/asset/3972623c-1445-4e5b-b889-b8d48636cdec'

interface Top5Entry {
  rank: number
  name: string
  streak: string
  score: number
  nameColor: string
  bar: string
  paddingTop: number
}

const MOCK_TOP5: Top5Entry[] = [
  { rank: 4, name: 'Alfred', streak: 'W1', score: 12, nameColor: '#969cd9', bar: IMG_BAR_4TH, paddingTop: 153 },
  { rank: 2, name: 'bushman', streak: 'W1', score: 17, nameColor: '#424cbb', bar: IMG_BAR_2ND, paddingTop: 19 },
  { rank: 1, name: 'ddadda', streak: 'W1', score: 20, nameColor: '#2d39b4', bar: IMG_BAR_1ST, paddingTop: 0 },
  { rank: 3, name: 'Samantha', streak: 'W1', score: 16, nameColor: '#6c74ca', bar: IMG_BAR_3RD, paddingTop: 87 },
  { rank: 5, name: 'frifre', streak: 'W1', score: 8, nameColor: '#c0c3e8', bar: IMG_BAR_5TH, paddingTop: 193 },
]

interface RankEntry {
  rank: number
  name: string
  current: string
  longest: string
}

interface GradeSection {
  grade: string
  bgFrom: string
  bgTo: string
  entries: RankEntry[]
}

const MOCK_GRADES: GradeSection[] = [
  {
    grade: 'Diamond',
    bgFrom: '#81a0b8',
    bgTo: 'rgba(129,160,184,0)',
    entries: [
      { rank: 6, name: 'namcheondong', current: 'W3', longest: 'W8' },
      { rank: 7, name: 'kkkim', current: 'L2', longest: 'W7' },
    ],
  },
  {
    grade: 'Platinum',
    bgFrom: '#afcfe2',
    bgTo: 'rgba(175,207,226,0)',
    entries: [
      { rank: 8, name: 'OrangeCan', current: 'W1', longest: 'W7' },
      { rank: 9, name: 'Andy', current: 'W4', longest: 'W6' },
      { rank: 10, name: 'Zammin', current: 'W2', longest: 'W6' },
    ],
  },
  {
    grade: 'Gold',
    bgFrom: '#e9d17f',
    bgTo: 'rgba(122,90,31,0)',
    entries: [
      { rank: 11, name: 'TrumpKing', current: 'L4', longest: 'W6' },
      { rank: 12, name: 'wwifjdksi5439', current: 'L2', longest: 'W6' },
      { rank: 13, name: 'Greatman', current: 'L4', longest: 'W5' },
      { rank: 14, name: 'MadeinChina', current: 'L5', longest: 'W5' },
    ],
  },
  {
    grade: 'Silver',
    bgFrom: '#bccfe3',
    bgTo: 'rgba(107,118,130,0)',
    entries: [
      { rank: 15, name: 'TrumpKing', current: 'L4', longest: 'W6' },
      { rank: 16, name: 'wwifjdksi5439', current: 'L2', longest: 'W6' },
      { rank: 17, name: 'Greatman', current: 'L4', longest: 'W5' },
      { rank: 18, name: 'MadeinChina', current: 'L5', longest: 'W5' },
    ],
  },
  {
    grade: 'Bronze',
    bgFrom: '#ebc7b3',
    bgTo: 'rgba(63,46,37,0)',
    entries: [
      { rank: 19, name: 'TrumpKing', current: 'L4', longest: 'W6' },
      { rank: 20, name: 'wwifjdksi5439', current: 'L2', longest: 'W6' },
      { rank: 21, name: 'Greatman', current: 'L4', longest: 'W5' },
      { rank: 22, name: 'MadeinChina', current: 'L5', longest: 'W5' },
    ],
  },
  {
    grade: 'Participant',
    bgFrom: '#8b8e98',
    bgTo: 'rgba(117,123,144,0)',
    entries: [
      { rank: 23, name: 'Asde', current: 'L3', longest: 'W1' },
      { rank: 24, name: 'rodkdufs', current: 'L2', longest: 'W1' },
    ],
  },
]

const MY_RANKING: RankEntry = { rank: 9, name: 'andy13', current: 'L4', longest: 'W6' }

function ProfileWithFrame({ size = 20 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <img
        src={IMG_AVATAR}
        alt=""
        className="absolute inset-[3.57%] block size-[92.86%] rounded-full object-cover"
      />
      <img src={IMG_GRADE_BORDER} alt="" className="absolute inset-0 block size-full" />
    </div>
  )
}

function GradeTag({
  label,
  bgFrom,
  bgTo,
}: {
  label: string
  bgFrom: string
  bgTo: string
}) {
  return (
    <div
      className="flex w-full items-center gap-1 rounded-[4px] p-2"
      style={{ background: `linear-gradient(to right, ${bgFrom} 25%, ${bgTo})` }}
    >
      <div className="relative size-5 shrink-0 overflow-hidden">
        <img
          src={IMG_GRADE_ICON_DEFAULT}
          alt=""
          className="absolute block size-full object-cover"
        />
      </div>
      <p className="text-[16px] font-bold leading-5 text-white">{label}</p>
    </div>
  )
}

function RankListItem({
  entry,
  highlighted = false,
}: {
  entry: RankEntry
  highlighted?: boolean
}) {
  const textColor = highlighted ? 'text-white' : 'text-black'
  return (
    <div
      className={`flex w-full items-center justify-center gap-2 px-1 py-2 ${
        highlighted ? 'rounded-[4px] bg-[#9ca3f1]' : ''
      }`}
    >
      <p
        className={`w-7 shrink-0 text-center text-[14px] font-light leading-5 ${textColor}`}
      >
        {entry.rank}
      </p>
      <div className="flex min-w-0 flex-1 items-center gap-1">
        <ProfileWithFrame size={20} />
        <p
          className={`min-w-0 flex-1 truncate text-[16px] font-bold leading-5 ${textColor}`}
        >
          {entry.name}
        </p>
      </div>
      <p
        className={`w-10 shrink-0 text-right text-[14px] font-light leading-5 ${textColor}`}
      >
        {entry.current}
      </p>
      <div className="self-stretch">
        <img src={IMG_DIVIDER} alt="" className="block h-full w-px" />
      </div>
      <p className={`w-10 shrink-0 text-[14px] font-light leading-5 ${textColor}`}>
        {entry.longest}
      </p>
    </div>
  )
}

function HeaderIconButton({
  icon,
  onClick,
  ariaLabel,
}: {
  icon: string
  onClick: () => void
  ariaLabel: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="relative flex size-6 shrink-0 items-center justify-center"
    >
      <img
        src={IMG_HEADER_BUTTON_SHAPE}
        alt=""
        className="absolute inset-0 block size-full rounded-[30px]"
      />
      <img
        src={icon}
        alt=""
        className="relative block size-[58%]"
      />
    </button>
  )
}

export function RankPage({ onNavigate }: RankPageProps) {
  const handleClose = () => onNavigate(PAGES.MAIN)

  return (
    <div className="flex h-dvh w-full flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-12 w-full shrink-0 items-center justify-between px-1 opacity-[0.66]">
        <p className="text-[14px] font-light leading-5 text-white">RORR</p>
        <button
          type="button"
          onClick={handleClose}
          aria-label="닫기"
          className="flex size-[12.4px] items-center justify-center"
        >
          <img src={IMG_CLOSE_ICON} alt="" className="block size-full" />
        </button>
      </div>

      <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[16px] bg-[#f0f2f5]">
        <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-3">
          <HeaderIconButton
            icon={IMG_CLOSE_ICON}
            onClick={handleClose}
            ariaLabel="뒤로"
          />
          <HeaderIconButton
            icon={IMG_INFO_ICON}
            onClick={() => undefined}
            ariaLabel="랭킹 기준 안내"
          />
        </div>

        <div className="flex flex-1 flex-col items-center gap-4 overflow-y-auto px-4 pb-4 pt-12">
          <div className="flex w-full max-w-[328px] flex-col items-start gap-1">
            <div className="flex h-7 w-[107px] items-center gap-1 rounded-[6px] border border-[#ced6e6] bg-white py-[2px] pl-1 pr-[10px]">
              <img
                src={IMG_DROPDOWN_ARROW}
                alt=""
                className="block size-4 shrink-0 rotate-90"
              />
              <p className="text-[14px] font-light leading-5 text-black">Dec. 2025</p>
            </div>
          </div>

          <div className="flex w-full max-w-[328px] flex-col gap-2 rounded-[8px] bg-[#dce2eb] p-1">
            <div
              className="flex w-full items-center gap-[10px] rounded-[4px] p-2"
              style={{ background: 'linear-gradient(to right, #000 25%, rgba(0,0,0,0))' }}
            >
              <p className="text-[16px] font-bold leading-5 text-white">Top 5</p>
            </div>
            <div className="flex h-[280px] w-full items-end">
              {MOCK_TOP5.map((entry) => (
                <div
                  key={entry.rank}
                  className="flex h-full min-w-0 flex-1 flex-col items-start"
                  style={{ paddingTop: entry.paddingTop }}
                >
                  <div className="flex min-h-0 w-full flex-1 flex-col items-center gap-1">
                    <p
                      className="w-full truncate text-center text-[12px] font-normal leading-[1.2]"
                      style={{ color: entry.nameColor }}
                    >
                      {entry.name}
                    </p>
                    <div className="relative w-full flex-1 min-h-0">
                      <img
                        src={entry.bar}
                        alt=""
                        className="absolute inset-0 block size-full"
                      />
                      <div className="absolute left-0 right-0 top-0 flex flex-col items-center px-1 pt-1">
                        <p className="h-[22px] text-[16px] font-bold leading-5 text-white">
                          {entry.rank === 1
                            ? '1st'
                            : entry.rank === 2
                              ? '2nd'
                              : entry.rank === 3
                                ? '3rd'
                                : `${entry.rank}th`}
                        </p>
                        <div className="h-px w-full bg-white/40" />
                        <div className="flex w-full items-center">
                          <p className="flex-1 text-center text-[14px] font-light leading-5 text-white">
                            {entry.streak}
                          </p>
                          <p className="flex-1 text-center text-[16px] font-bold leading-5 text-white">
                            {entry.score}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full max-w-[328px] flex-col gap-[10px] rounded-[8px] border border-[#9ca3f1] bg-white p-1">
            <div className="flex w-full items-center gap-1 rounded-[4px] bg-[#9ca3f1] p-2">
              <p className="text-[16px] font-bold leading-5 text-white">My Ranking</p>
            </div>
            <RankListItem entry={MY_RANKING} />
          </div>

          <div className="flex w-full max-w-[328px] flex-col gap-4">
            {MOCK_GRADES.map((section) => (
              <div
                key={section.grade}
                className="flex w-full flex-col gap-[10px] rounded-[8px] bg-[#dce2eb] p-1"
              >
                <GradeTag
                  label={section.grade}
                  bgFrom={section.bgFrom}
                  bgTo={section.bgTo}
                />
                {section.entries.map((entry) => (
                  <RankListItem
                    key={`${section.grade}-${entry.rank}`}
                    entry={entry}
                    highlighted={entry.rank === MY_RANKING.rank}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
