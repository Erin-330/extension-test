import { PAGES } from '../../shared/constants/pages'
import { AppHeader } from '../../shared/ui/AppHeader'

type Props = {
  onNavigate: (page: string) => void
}

const imgHeaderButtonShape = 'https://www.figma.com/api/mcp/asset/fe8cfee0-f730-4cba-a4e5-7d3e4f065bb2'
const imgInfo = 'https://www.figma.com/api/mcp/asset/6c0f3509-eb1c-456a-bbba-56068943771a'
const imgClose = 'https://www.figma.com/api/mcp/asset/35a704ce-b5ce-4558-891d-03ab4d4e5ddf'
const imgUserSilhouette = 'https://www.figma.com/api/mcp/asset/0bec4e19-de00-4f88-90d2-5eafe88d2a43'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/878efc66-3f11-4a4e-beb1-f33176147837'
const imgHighLightStroke = 'https://www.figma.com/api/mcp/asset/e3bab6c5-53cf-478f-bf31-f530c7b11d88'
const imgInnerLineStroke = 'https://www.figma.com/api/mcp/asset/4e9105f8-2c19-4231-99b4-ee167ad42194'
const imgGradeIconDefault = 'https://www.figma.com/api/mcp/asset/a732337b-8b4f-4986-aca7-bb22b4925c73'
const imgGradeIconPlatinum = 'https://www.figma.com/api/mcp/asset/ea615d30-354a-4934-80b4-966558122153'
const imgVerticalDivider = 'https://www.figma.com/api/mcp/asset/6af20481-a9c8-43b0-b3e6-f201c41997da'
const imgChevronDown = 'https://www.figma.com/api/mcp/asset/67bd8aeb-e24c-4d16-b2ae-d3a8f15db1fa'
const imgBar4th = 'https://www.figma.com/api/mcp/asset/b6971ae4-69dc-4643-bbcf-b9dc68a50d39'
const imgBarFrame = 'https://www.figma.com/api/mcp/asset/d728437f-7f5d-4c06-8750-7b4cb7cd98f6'
const imgBar2nd = 'https://www.figma.com/api/mcp/asset/11df96b6-e3ab-482e-ba47-0625075ef5bc'
const imgBar1st = 'https://www.figma.com/api/mcp/asset/e8ff21ed-5c7e-4609-b9ca-de5720255646'
const imgBar3rd = 'https://www.figma.com/api/mcp/asset/b92e5d49-aac9-4b7c-a670-587fe7456f98'
const imgBar5th = 'https://www.figma.com/api/mcp/asset/da8c0528-5286-4c9e-82d7-8a95b283a52b'

function HeaderButton({
  imgSrc,
  onClick,
  ariaLabel,
}: {
  imgSrc: string
  onClick?: () => void
  ariaLabel: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[10px] items-center justify-center relative shrink-0 size-[24px] cursor-pointer"
      aria-label={ariaLabel}
    >
      <div className="flex-1 h-full relative rounded-[30px]">
        <img alt="" className="absolute block inset-0 size-full" src={imgHeaderButtonShape} />
      </div>
      <div className="absolute inset-[8.33%] overflow-clip">
        <div className={ariaLabel === 'Info' ? 'absolute inset-[22.92%_45.83%]' : 'absolute inset-[28.59%]'}>
          <img alt="" className="absolute block inset-0 size-full" src={imgSrc} />
        </div>
      </div>
    </button>
  )
}

function ProfileWithFrame() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
        <div className="absolute inset-[16.67%_6.69%_0_6.69%]">
          <img alt="" className="absolute block inset-0 size-full" src={imgUserSilhouette} />
        </div>
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img alt="" className="absolute block inset-0 size-full" src={imgGradeBorder} />
        <div className="absolute inset-[5%]">
          <img alt="" className="absolute block inset-0 size-full" src={imgHighLightStroke} />
        </div>
        <div className="absolute inset-[6%]">
          <img alt="" className="absolute block inset-0 size-full" src={imgInnerLineStroke} />
        </div>
      </div>
    </div>
  )
}

type GradeKind = 'top5' | 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'participant' | 'my'

function gradeGradient(kind: GradeKind): string {
  switch (kind) {
    case 'top5':
      return 'bg-gradient-to-r from-[25.013%] from-black to-[rgba(0,0,0,0)]'
    case 'diamond':
      return 'bg-gradient-to-r from-[#81a0b8] from-[25.013%] to-[rgba(129,160,184,0)]'
    case 'platinum':
      return 'bg-gradient-to-r from-[#afcfe2] from-[25.013%] to-[rgba(175,207,226,0)]'
    case 'gold':
      return 'bg-gradient-to-r from-[#e9d17f] from-[25.013%] to-[rgba(122,90,31,0)]'
    case 'silver':
      return 'bg-gradient-to-r from-[#bccfe3] from-[25.013%] to-[rgba(107,118,130,0)]'
    case 'bronze':
      return 'bg-gradient-to-r from-[#ebc7b3] from-[25.013%] to-[rgba(63,46,37,0)]'
    case 'my':
      return 'bg-[#9ca3f1]'
    default:
      return 'bg-gradient-to-r from-[#8b8e98] to-[rgba(117,123,144,0)]'
  }
}

function GradeIcon({ kind }: { kind: Exclude<GradeKind, 'my'> }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <img
        alt=""
        className="absolute block inset-0 size-full"
        src={kind === 'platinum' ? imgGradeIconPlatinum : imgGradeIconDefault}
      />
    </div>
  )
}

function GradeTag({ kind, label }: { kind: GradeKind; label: string }) {
  return (
    <div
      className={`${gradeGradient(kind)} flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full`}
    >
      {kind !== 'my' && <GradeIcon kind={kind as Exclude<GradeKind, 'my'>} />}
      <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px] whitespace-nowrap">
        {label}
      </p>
    </div>
  )
}

function RankRow({
  rank,
  name,
  leftStat,
  rightStat,
  highlight,
}: {
  rank: string
  name: string
  leftStat: string
  rightStat: string
  highlight?: boolean
}) {
  const textColor = highlight ? 'text-white' : 'text-black'
  return (
    <div
      className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] shrink-0 w-full ${highlight ? 'bg-[#9ca3f1]' : ''}`}
    >
      <div className="flex gap-[4px] items-center shrink-0">
        <p
          className={`font-['Pretendard',sans-serif] font-light text-[14px] text-center w-[28px] leading-[20px] ${textColor}`}
        >
          {rank}
        </p>
      </div>
      <div className="flex flex-1 gap-[4px] items-center min-w-px">
        <ProfileWithFrame />
        <p
          className={`flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap ${textColor}`}
        >
          {name}
        </p>
      </div>
      <p
        className={`font-['Pretendard',sans-serif] font-light text-[14px] text-right w-[40px] leading-[20px] ${textColor}`}
      >
        {leftStat}
      </p>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-0">
          <div className="absolute inset-[-2.5%_-0.5px]">
            <img alt="" className="block size-full" src={imgVerticalDivider} />
          </div>
        </div>
      </div>
      <p
        className={`font-['Pretendard',sans-serif] font-light text-[14px] w-[40px] leading-[20px] ${textColor}`}
      >
        {rightStat}
      </p>
    </div>
  )
}

type RankSection = {
  kind: GradeKind
  label: string
  rows: { rank: string; name: string; leftStat: string; rightStat: string; highlight?: boolean }[]
}

const SECTIONS: RankSection[] = [
  {
    kind: 'diamond',
    label: 'Diamond',
    rows: [
      { rank: '6', name: 'namcheondong', leftStat: 'W3', rightStat: 'W8' },
      { rank: '7', name: 'kkkim', leftStat: 'L2', rightStat: 'W7' },
    ],
  },
  {
    kind: 'platinum',
    label: 'Platinum',
    rows: [
      { rank: '8', name: 'OrangeCan', leftStat: 'W1', rightStat: 'W7' },
      { rank: '9', name: 'Andy', leftStat: 'W4', rightStat: 'W6', highlight: true },
      { rank: '10', name: 'Zammin', leftStat: 'W2', rightStat: 'W6' },
    ],
  },
  {
    kind: 'gold',
    label: 'Gold',
    rows: [
      { rank: '11', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
      { rank: '12', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '13', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
      { rank: '14', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    kind: 'silver',
    label: 'Silver',
    rows: [
      { rank: '15', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
      { rank: '16', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '17', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
      { rank: '18', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    kind: 'bronze',
    label: 'Bronze',
    rows: [
      { rank: '19', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
      { rank: '20', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '21', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
      { rank: '22', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    kind: 'participant',
    label: 'Participant',
    rows: [
      { rank: '-', name: 'Asde', leftStat: 'L3', rightStat: 'W1' },
      { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
      { rank: '-', name: 'jamie01', leftStat: 'L2', rightStat: 'W1' },
      { rank: '-', name: 'pinky', leftStat: 'L2', rightStat: 'W1' },
    ],
  },
]

function Top5Bar({
  src,
  pad,
  place,
  stat,
  score,
  nameColor,
  nameText,
}: {
  src: string
  pad: number
  place: string
  stat: string
  score: string
  nameColor: string
  nameText: string
}) {
  return (
    <div
      className="flex flex-1 flex-col h-full items-start min-w-px relative"
      style={{ paddingTop: pad }}
    >
      <div className="flex flex-1 flex-col gap-[4px] items-center min-h-px relative w-full">
        <div className="flex flex-col gap-[4px] items-center justify-end shrink-0 w-full">
          <p
            className={`font-['Pretendard',sans-serif] font-normal text-[12px] text-center leading-[1.2] overflow-hidden text-ellipsis w-full whitespace-nowrap ${nameColor}`}
          >
            {nameText}
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-end min-h-px relative w-full">
          <div className="flex-1 min-h-px relative w-full">
            <img alt="" className="absolute block inset-0 size-full" src={src} />
          </div>
          <div className="absolute flex flex-col items-center left-0 right-0 top-0">
            <div className="h-[22px] flex flex-col items-center justify-center relative shrink-0 w-[64px]">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-center text-white leading-[20px]">
                {place}
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block size-full" src={imgBarFrame} />
              </div>
            </div>
            <div className="flex items-center text-center text-white w-full">
              <div className="flex flex-1 flex-col font-['Pretendard',sans-serif] font-light justify-center min-w-px text-[14px]">
                <p className="leading-[20px]">{stat}</p>
              </div>
              <div className="flex flex-1 flex-col font-['Pretendard',sans-serif] font-bold h-[22px] justify-center min-w-px text-[16px]">
                <p className="leading-[20px]">{score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function RankPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="backdrop-blur-[3px] bg-[#f0f2f5] flex-1 min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full items-center overflow-y-auto px-[16px] py-[48px]">
          {/* Month Dropdown */}
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
            <div className="bg-white border border-[#ced6e6] border-solid flex gap-[4px] items-center overflow-clip pl-[4px] pr-[10px] py-[2px] rounded-[6px] shrink-0 w-[107px]">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[33.33%_22.92%_32.83%_21.19%]">
                  <img alt="" className="block size-full" src={imgChevronDown} />
                </div>
              </div>
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black leading-[20px] whitespace-nowrap">
                Dec. 2025
              </p>
            </div>

            {/* Top 5 Bar Chart */}
            <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
              <GradeTag kind="top5" label="Top 5" />
              <div className="flex h-[280px] items-end shrink-0 w-full">
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                <Top5Bar
                  src={imgBar4th}
                  pad={153}
                  place="4th"
                  stat="W1"
                  score="12"
                  nameColor="text-[#969cd9]"
                  nameText="Alfred"
                />
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                <Top5Bar
                  src={imgBar2nd}
                  pad={19}
                  place="2nd"
                  stat="W1"
                  score="17"
                  nameColor="text-[#424cbb]"
                  nameText="bushman"
                />
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                <Top5Bar
                  src={imgBar1st}
                  pad={0}
                  place="1st"
                  stat="W1"
                  score="20"
                  nameColor="text-[#2d39b4]"
                  nameText="ddadda"
                />
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                <Top5Bar
                  src={imgBar3rd}
                  pad={87}
                  place="3rd"
                  stat="W1"
                  score="16"
                  nameColor="text-[#6c74ca]"
                  nameText="Samantha"
                />
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                <Top5Bar
                  src={imgBar5th}
                  pad={193}
                  place="5th"
                  stat="W1"
                  score="8"
                  nameColor="text-[#c0c3e8]"
                  nameText="frifre"
                />
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
              </div>
            </div>
          </div>

          {/* My Ranking */}
          <div className="bg-white border border-[#9ca3f1] border-solid flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
            <GradeTag kind="my" label="My Ranking" />
            <RankRow rank="9" name="andy13" leftStat="L4" rightStat="W6" />
          </div>

          {/* Grade Sections */}
          <div className="flex flex-col gap-[16px] items-start shrink-0 w-full">
            {SECTIONS.map((section) => (
              <div
                key={section.label}
                className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full"
              >
                <GradeTag kind={section.kind} label={section.label} />
                {section.rows.map((row, i) => (
                  <RankRow key={`${section.label}-${i}`} {...row} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute flex items-center justify-between left-0 overflow-clip p-[12px] right-0 top-0">
          <HeaderButton
            imgSrc={imgClose}
            onClick={() => onNavigate(PAGES.MAIN)}
            ariaLabel="Close"
          />
          <HeaderButton imgSrc={imgInfo} ariaLabel="Info" />
        </div>
      </div>
    </div>
  )
}
