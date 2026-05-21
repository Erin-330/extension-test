import { AppHeader } from '../../features/follow/ui/AppHeader'
import { PAGES } from '../../shared/constants/pages'

const imgHeaderButtonShape = 'https://www.figma.com/api/mcp/asset/788df1bc-cf9f-44c1-a1ae-0cb448762178'
const imgInfoI = 'https://www.figma.com/api/mcp/asset/ceb66caa-0985-40d8-b68b-55a11da6900b'
const imgCloseX = 'https://www.figma.com/api/mcp/asset/5da94b04-12d7-4680-bb5d-096482a0c432'
const imgAvatar = 'https://www.figma.com/api/mcp/asset/8977f940-da46-48d3-bbf9-6a8df2b2427c'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/e8e3e899-21f7-4d06-b287-61cb2079432d'
const imgHighLightStroke = 'https://www.figma.com/api/mcp/asset/2adbedaf-1ce9-41c4-afbb-bb3194302881'
const imgInnerLineStroke = 'https://www.figma.com/api/mcp/asset/7fb4edf6-0c5b-4cb0-b9de-7ae809394cf8'
const imgGradeIcon = 'https://www.figma.com/api/mcp/asset/a52566a4-9881-4aca-a521-89e0b41cf875'
const imgGradeIconPlatinum = 'https://www.figma.com/api/mcp/asset/7d60b278-b0d8-4d3a-a8e0-452403899d73'
const imgVDivider = 'https://www.figma.com/api/mcp/asset/2ae9b333-e419-4835-91f8-013a799aee3c'
const imgChevron = 'https://www.figma.com/api/mcp/asset/b76ec57a-ed4a-4e43-a87c-589c66b4d507'
const imgBar4th = 'https://www.figma.com/api/mcp/asset/7714bd5d-f2fc-4d45-a212-70d671480001'
const imgBarDivider = 'https://www.figma.com/api/mcp/asset/73f93318-51cc-4cf6-ac58-935eca47e3a6'
const imgBar2nd = 'https://www.figma.com/api/mcp/asset/381cafd0-f39b-4542-aff8-006f852f8d19'
const imgBar1st = 'https://www.figma.com/api/mcp/asset/3ae266e7-66a7-4c0a-80eb-711d2dd3a2e7'
const imgBar3rd = 'https://www.figma.com/api/mcp/asset/7d5b67d6-24a6-4b79-88df-014850b793d2'
const imgBar5th = 'https://www.figma.com/api/mcp/asset/0ba84933-8c32-4120-be03-d4b0fef36453'

type NavProp = { onNavigate: (page: string) => void }

function HeaderIconButton({
  icon,
  onClick,
  ariaLabel,
}: {
  icon: string
  onClick?: () => void
  ariaLabel: string
}) {
  return (
    <button onClick={onClick} type="button" aria-label={ariaLabel} className="relative size-[24px] rounded-[28px]">
      <img alt="" src={imgHeaderButtonShape} className="absolute inset-0 block size-full rounded-[30px]" />
      <div className="absolute inset-[8.33%] overflow-clip">
        <div className="absolute inset-[28.59%]">
          <img alt="" src={icon} className="absolute inset-0 block size-full" />
        </div>
      </div>
    </button>
  )
}

function MonthDropdown() {
  return (
    <div className="flex items-center gap-[4px] bg-white border border-[#ced6e6] border-solid rounded-[6px] pl-[4px] pr-[10px] py-[2px] w-[107px]">
      <div className="relative size-[24px] overflow-clip rotate-90 shrink-0">
        <div className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]">
          <img alt="" src={imgChevron} className="absolute inset-0 block size-full" />
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
        Dec. 2025
      </p>
    </div>
  )
}

type BarSpec = {
  name: string
  rankLabel: string
  wins: string
  score: string
  nameColor: string
  bar: string
  ptTop: string
}

const BAR_ORDER: BarSpec[] = [
  { name: 'Alfred', rankLabel: '4th', wins: 'W1', score: '12', nameColor: '#969cd9', bar: imgBar4th, ptTop: 'pt-[153px]' },
  { name: 'bushman', rankLabel: '2nd', wins: 'W1', score: '17', nameColor: '#424cbb', bar: imgBar2nd, ptTop: 'pt-[19px]' },
  { name: 'ddadda', rankLabel: '1st', wins: 'W1', score: '20', nameColor: '#2d39b4', bar: imgBar1st, ptTop: 'pt-0' },
  { name: 'Samantha', rankLabel: '3rd', wins: 'W1', score: '16', nameColor: '#6c74ca', bar: imgBar3rd, ptTop: 'pt-[87px]' },
  { name: 'frifre', rankLabel: '5th', wins: 'W1', score: '8', nameColor: '#c0c3e8', bar: imgBar5th, ptTop: 'pt-[193px]' },
]

function Top5Bars() {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] w-full">
      <div className="bg-gradient-to-r from-black from-[25.013%] to-[rgba(0,0,0,0)] flex gap-[10px] items-center p-[8px] rounded-[4px] w-full">
        <div className="relative size-[20px] overflow-clip shrink-0">
          <img alt="" src={imgGradeIcon} className="absolute inset-0 block size-full object-cover" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
          Top 5
        </p>
      </div>
      <div className="h-[280px] flex items-end w-full">
        {BAR_ORDER.map((b, idx) => (
          <div key={idx} className={`flex-1 flex flex-col h-full ${b.ptTop}`}>
            <div className="flex flex-col gap-[4px] items-center flex-1">
              <p
                className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-center"
                style={{ color: b.nameColor }}
              >
                {b.name}
              </p>
              <div className="flex-1 relative w-full">
                <img alt="" src={b.bar} className="absolute inset-0 block size-full" />
                <div className="absolute top-0 left-0 right-0 flex flex-col items-center">
                  <p className="h-[22px] w-[64px] font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white text-center">
                    {b.rankLabel}
                  </p>
                  <div className="relative h-0 w-full">
                    <div className="absolute inset-[-0.5px_0]">
                      <img alt="" src={imgBarDivider} className="block size-full" />
                    </div>
                  </div>
                  <div className="flex items-center w-full text-white text-center">
                    <p className="flex-1 font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px]">
                      {b.wins}
                    </p>
                    <p className="flex-1 h-[22px] font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px]">
                      {b.score}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MiniAvatar() {
  return (
    <div className="relative size-[20px] shrink-0">
      <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
        <div className="absolute inset-0">
          <img alt="" src={imgAvatar} className="absolute inset-0 block size-full object-cover" />
        </div>
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img alt="" src={imgGradeBorder} className="absolute inset-0 block size-full" />
        <div className="absolute inset-[5%]">
          <img alt="" src={imgHighLightStroke} className="absolute inset-0 block size-full" />
        </div>
        <div className="absolute inset-[6%]">
          <img alt="" src={imgInnerLineStroke} className="absolute inset-0 block size-full" />
        </div>
      </div>
    </div>
  )
}

type RankRowProps = {
  rank: string
  name: string
  leftStat: string
  rightStat: string
  highlighted?: boolean
}

function RankRow({ rank, name, leftStat, rightStat, highlighted }: RankRowProps) {
  const textColor = highlighted ? 'text-white' : 'text-black'
  return (
    <div
      className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full ${
        highlighted ? 'bg-[#9ca3f1]' : ''
      }`}
    >
      <p
        className={`w-[28px] font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-center ${textColor}`}
      >
        {rank}
      </p>
      <div className="flex flex-1 min-w-px gap-[4px] items-center">
        <MiniAvatar />
        <p
          className={`flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap ${textColor}`}
        >
          {name}
        </p>
      </div>
      <p
        className={`w-[40px] font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-right ${textColor}`}
      >
        {leftStat}
      </p>
      <div className="self-stretch flex items-center w-0">
        <div className="relative h-full w-0">
          <div className="absolute inset-[-2.5%_-0.5px]">
            <img alt="" src={imgVDivider} className="block size-full" />
          </div>
        </div>
      </div>
      <p
        className={`w-[40px] font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] ${textColor}`}
      >
        {rightStat}
      </p>
    </div>
  )
}

type GradeSpec = {
  name: string
  gradient: string
  icon: string
}

const GRADE_GRADIENTS: Record<string, GradeSpec> = {
  diamond: {
    name: 'Diamond',
    gradient: 'bg-gradient-to-r from-[#81a0b8] from-[25.013%] to-[rgba(129,160,184,0)]',
    icon: imgGradeIcon,
  },
  platinum: {
    name: 'Platinum',
    gradient: 'bg-gradient-to-r from-[#afcfe2] from-[25.013%] to-[rgba(175,207,226,0)]',
    icon: imgGradeIconPlatinum,
  },
  gold: {
    name: 'Gold',
    gradient: 'bg-gradient-to-r from-[#e9d17f] from-[25.013%] to-[rgba(122,90,31,0)]',
    icon: imgGradeIcon,
  },
  silver: {
    name: 'Silver',
    gradient: 'bg-gradient-to-r from-[#bccfe3] from-[25.013%] to-[rgba(107,118,130,0)]',
    icon: imgGradeIcon,
  },
  bronze: {
    name: 'Bronze',
    gradient: 'bg-gradient-to-r from-[#ebc7b3] from-[25.013%] to-[rgba(63,46,37,0)]',
    icon: imgGradeIcon,
  },
  participant: {
    name: 'Participant',
    gradient: 'bg-gradient-to-r from-[#8b8e98] to-[rgba(117,123,144,0)]',
    icon: imgGradeIcon,
  },
}

function GradeSection({
  gradeKey,
  rows,
}: {
  gradeKey: keyof typeof GRADE_GRADIENTS
  rows: RankRowProps[]
}) {
  const spec = GRADE_GRADIENTS[gradeKey]
  return (
    <div className="bg-[#dce2eb] rounded-[8px] p-[4px] gap-[10px] flex flex-col items-start w-full">
      <div className={`${spec.gradient} flex gap-[4px] items-center p-[8px] rounded-[4px] w-full`}>
        <div className="relative size-[20px] overflow-clip shrink-0">
          <img alt="" src={spec.icon} className="absolute inset-0 block size-full object-cover" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
          {spec.name}
        </p>
      </div>
      {rows.map((row, idx) => (
        <RankRow key={idx} {...row} />
      ))}
    </div>
  )
}

const DIAMOND_ROWS: RankRowProps[] = [
  { rank: '6', name: 'namcheondong', leftStat: 'W3', rightStat: 'W8' },
  { rank: '7', name: 'kkkim', leftStat: 'L2', rightStat: 'W7' },
]

const PLATINUM_ROWS: RankRowProps[] = [
  { rank: '8', name: 'OrangeCan', leftStat: 'W1', rightStat: 'W7' },
  { rank: '9', name: 'Andy', leftStat: 'W4', rightStat: 'W6', highlighted: true },
  { rank: '10', name: 'Zammin', leftStat: 'W2', rightStat: 'W6' },
]

const GOLD_ROWS: RankRowProps[] = [
  { rank: '11', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
  { rank: '12', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
  { rank: '13', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
  { rank: '14', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
]

const SILVER_ROWS: RankRowProps[] = [
  { rank: '15', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
  { rank: '16', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
  { rank: '17', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
  { rank: '18', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
]

const BRONZE_ROWS: RankRowProps[] = [
  { rank: '19', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
  { rank: '20', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
  { rank: '21', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
  { rank: '22', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
]

const PARTICIPANT_ROWS: RankRowProps[] = [
  { rank: '-', name: 'Asde', leftStat: 'L3', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
]

export function RankPage({ onNavigate }: NavProp) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="relative flex-1 min-h-px w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden">
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] z-10">
          <HeaderIconButton icon={imgCloseX} ariaLabel="close" onClick={() => onNavigate(PAGES.MAIN)} />
          <HeaderIconButton icon={imgInfoI} ariaLabel="info" />
        </div>
        <div className="flex flex-1 flex-col gap-[16px] items-center px-[16px] py-[48px] w-full h-full overflow-y-auto">
          <div className="flex flex-col gap-[4px] items-start w-full">
            <MonthDropdown />
            <Top5Bars />
          </div>

          {/* My Ranking */}
          <div className="bg-white border border-[#9ca3f1] border-solid rounded-[8px] p-[4px] gap-[10px] flex flex-col w-full">
            <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] w-full">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
                My Ranking
              </p>
            </div>
            <RankRow rank="9" name="andy13" leftStat="L4" rightStat="W6" />
          </div>

          <GradeSection gradeKey="diamond" rows={DIAMOND_ROWS} />
          <GradeSection gradeKey="platinum" rows={PLATINUM_ROWS} />
          <GradeSection gradeKey="gold" rows={GOLD_ROWS} />
          <GradeSection gradeKey="silver" rows={SILVER_ROWS} />
          <GradeSection gradeKey="bronze" rows={BRONZE_ROWS} />
          <GradeSection gradeKey="participant" rows={PARTICIPANT_ROWS} />
        </div>
      </div>
    </div>
  )
}
