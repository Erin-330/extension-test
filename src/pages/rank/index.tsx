import { PAGES } from '../../shared/constants/pages'
import { AppHeader } from '../../shared/ui/AppHeader'

const imgBtnShape = 'https://www.figma.com/api/mcp/asset/966b5f1f-2a6f-4563-9edf-43654a9b109a'
const imgInfoIcon = 'https://www.figma.com/api/mcp/asset/0955296b-bdf4-41d6-9aca-2b22f5773f45'
const imgXIcon = 'https://www.figma.com/api/mcp/asset/a1ae80cc-3d22-4881-87ff-8111e92f8524'
const imgAvatarImage = 'https://www.figma.com/api/mcp/asset/160e81c5-eab7-40bd-bb17-ea02eda3fc4f'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/d4f91441-199c-44da-8666-db1be4e7d42e'
const imgHighlight = 'https://www.figma.com/api/mcp/asset/b55cb8f7-2681-4d6f-9526-e986f9e74463'
const imgInnerLine = 'https://www.figma.com/api/mcp/asset/dccf08a0-6c9d-44da-9890-6eb602bb5f87'
const imgGradeSprite = 'https://www.figma.com/api/mcp/asset/5312bd54-e786-4ad5-aee4-a9688fb8e548'
const imgGradeSpritePlatinum = 'https://www.figma.com/api/mcp/asset/fa1dd577-fb16-42d5-b8f6-12739e04432d'
const imgVerticalSep = 'https://www.figma.com/api/mcp/asset/3b1ba2d1-03d1-471b-916e-34746235b099'
const imgChevronRight = 'https://www.figma.com/api/mcp/asset/b091f3bb-76be-4255-9710-e2cfbd275846'
const imgBar4th = 'https://www.figma.com/api/mcp/asset/09bac489-0a8d-4d3b-a878-47bdf6f91b54'
const imgBarSep = 'https://www.figma.com/api/mcp/asset/b9bc1e93-0ca7-4a74-9efa-5e5404c01abd'
const imgBar2nd = 'https://www.figma.com/api/mcp/asset/aca6cbfe-d1ef-4433-8214-d49608e8f57b'
const imgBar1st = 'https://www.figma.com/api/mcp/asset/b3359a6e-6510-4ea9-a050-b31b835f9ff8'
const imgBar3rd = 'https://www.figma.com/api/mcp/asset/98034b54-0107-48e3-926a-7cda88a7bbca'
const imgBar5th = 'https://www.figma.com/api/mcp/asset/95a42396-ce78-40f3-88e7-640b4c0ae922'

interface Props {
  onNavigate: (page: string) => void
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative shrink-0 size-[24px] rounded-[30px]"
      aria-label="close"
    >
      <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgBtnShape} />
      <div className="absolute inset-[8.33%] overflow-clip">
        <div className="absolute inset-[28.59%]">
          <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgXIcon} />
        </div>
      </div>
    </button>
  )
}

function InfoButton() {
  return (
    <div className="relative shrink-0 size-[24px] rounded-[28px]">
      <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgBtnShape} />
      <div className="absolute inset-[8.33%] overflow-clip">
        <div className="absolute inset-[22.92%_45.83%]">
          <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgInfoIcon} />
        </div>
      </div>
    </div>
  )
}

function MonthDropdown() {
  return (
    <div className="bg-white border border-[#ced6e6] border-solid flex gap-[4px] items-center overflow-clip pl-[4px] pr-[10px] py-[2px] rounded-[6px] shrink-0 w-[107px]">
      <div className="shrink-0 size-[24px] overflow-clip relative">
        <div className="absolute inset-[33.33%_22.92%_32.83%_21.19%] flex items-center justify-center rotate-90">
          <img alt="" className="shrink-0 w-[8px] h-[8px]" src={imgChevronRight} />
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black leading-[20px] whitespace-nowrap">
        Dec. 2025
      </p>
    </div>
  )
}

interface GradeIconProps {
  variant: 'top5' | 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'participant'
}

function GradeIcon({ variant }: GradeIconProps) {
  // Per Figma, these icons are sprite crops. Use displayed positions from get_design_context.
  const config: Record<GradeIconProps['variant'], { img: string; cls: string }> = {
    top5: { img: imgGradeSprite, cls: 'absolute h-[538.24%] left-[-268.18%] top-[-400%] w-[415.91%]' },
    diamond: { img: imgGradeSprite, cls: 'absolute h-[538.24%] left-[-231.21%] top-[-154.94%] w-[415.91%]' },
    platinum: { img: imgGradeSpritePlatinum, cls: 'absolute h-[496.3%] left-[-131.08%] top-[-170.37%] w-[362.16%]' },
    gold: { img: imgGradeSprite, cls: 'absolute h-[538.24%] left-[-304.38%] top-[-9.85%] w-[415.91%]' },
    silver: { img: imgGradeSprite, cls: 'absolute h-[538.24%] left-[-206.38%] top-[-9.85%] w-[415.91%]' },
    bronze: { img: imgGradeSprite, cls: 'absolute h-[538.24%] left-[-111.01%] top-[-9.85%] w-[415.91%]' },
    participant: { img: imgGradeSprite, cls: 'absolute h-[538.24%] left-[-12.9%] top-[-9.85%] w-[415.91%]' },
  }
  const c = config[variant]
  const inset = variant === 'platinum' ? 'inset-[14.58%_2.08%]' : variant === 'diamond' ? 'inset-[20.83%_12.5%]' : 'inset-[14.58%_4.17%]'
  return (
    <div className="shrink-0 size-[20px] overflow-clip relative">
      <div className={`absolute ${inset}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className={c.cls} src={c.img} />
        </div>
      </div>
    </div>
  )
}

interface GradeTagProps {
  variant: GradeIconProps['variant']
  label: string
}

const GRADE_BG: Record<GradeIconProps['variant'], string> = {
  top5: 'bg-gradient-to-r from-black from-[25.013%] to-transparent',
  diamond: 'bg-gradient-to-r from-[#81a0b8] from-[25.013%] to-[rgba(129,160,184,0)]',
  platinum: 'bg-gradient-to-r from-[#afcfe2] from-[25.013%] to-[rgba(175,207,226,0)]',
  gold: 'bg-gradient-to-r from-[#e9d17f] from-[25.013%] to-[rgba(122,90,31,0)]',
  silver: 'bg-gradient-to-r from-[#bccfe3] from-[25.013%] to-[rgba(107,118,130,0)]',
  bronze: 'bg-gradient-to-r from-[#ebc7b3] from-[25.013%] to-[rgba(63,46,37,0)]',
  participant: 'bg-gradient-to-r from-[#8b8e98] to-[rgba(117,123,144,0)]',
}

function GradeTag({ variant, label }: GradeTagProps) {
  return (
    <div className={`flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full ${GRADE_BG[variant]}`}>
      <GradeIcon variant={variant} />
      <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px] whitespace-nowrap">
        {label}
      </p>
    </div>
  )
}

function ProfileWithFrame() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-red-500 inset-[3.98%_3.57%_3.16%_3.57%] overflow-clip rounded-full">
        <div className="absolute inset-[-2.4%_-1.2%_-7.6%_-1.6%]">
          <img alt="" className="absolute inset-0 size-full object-cover" src={imgAvatarImage} />
        </div>
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgGradeBorder} />
        <div className="absolute inset-[5%]">
          <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgHighlight} />
        </div>
        <div className="absolute inset-[6%]">
          <img alt="" className="absolute inset-0 block max-w-none size-full" src={imgInnerLine} />
        </div>
      </div>
    </div>
  )
}

interface RankItem {
  rank: number | '-'
  name: string
  left: string
  right: string
  highlight?: boolean
}

function RankRow({ item }: { item: RankItem }) {
  const textColor = item.highlight ? 'text-white' : 'text-black'
  const wrap = item.highlight
    ? 'bg-[#9ca3f1] flex gap-[10px] items-center justify-center px-[4px] py-[8px] w-full'
    : 'flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full'
  return (
    <div className={wrap}>
      <div className={item.highlight ? 'flex gap-[8px] items-center w-full' : 'flex gap-[8px] items-center w-full'}>
        <p className={`font-['Pretendard',sans-serif] font-light text-[14px] ${textColor} text-center w-[28px] leading-[20px]`}>
          {item.rank}
        </p>
        <div className="flex flex-1 gap-[4px] items-center min-w-px">
          <ProfileWithFrame />
          <p className={`flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] ${textColor} truncate leading-[20px]`}>
            {item.name}
          </p>
        </div>
        <p className={`font-['Pretendard',sans-serif] font-light text-[14px] ${textColor} text-right w-[40px] leading-[20px]`}>
          {item.left}
        </p>
        <div className="flex flex-row items-center self-stretch">
          <div className="h-full shrink-0 w-0 relative">
            <div className="absolute inset-[-2.5%_-0.5px]">
              <img alt="" className="block max-w-none size-full" src={imgVerticalSep} />
            </div>
          </div>
        </div>
        <p className={`font-['Pretendard',sans-serif] font-light text-[14px] ${textColor} w-[40px] leading-[20px]`}>
          {item.right}
        </p>
      </div>
    </div>
  )
}

interface SectionProps {
  variant: GradeIconProps['variant']
  label: string
  items: RankItem[]
}

function GradeSection({ variant, label, items }: SectionProps) {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
      <GradeTag variant={variant} label={label} />
      {items.map((item, i) => (
        <RankRow key={i} item={item} />
      ))}
    </div>
  )
}

const DIAMOND: RankItem[] = [
  { rank: 6, name: 'namcheondong', left: 'W3', right: 'W8' },
  { rank: 7, name: 'kkkim', left: 'L2', right: 'W7' },
]
const PLATINUM: RankItem[] = [
  { rank: 8, name: 'OrangeCan', left: 'W1', right: 'W7' },
  { rank: 9, name: 'Andy', left: 'W4', right: 'W6', highlight: true },
  { rank: 10, name: 'Zammin', left: 'W2', right: 'W6' },
]
const GOLD: RankItem[] = [
  { rank: 11, name: 'TrumpKing', left: 'L4', right: 'W6' },
  { rank: 12, name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
  { rank: 13, name: 'Greatman', left: 'L4', right: 'W5' },
  { rank: 14, name: 'MadeinChina', left: 'L5', right: 'W5' },
]
const SILVER: RankItem[] = [
  { rank: 15, name: 'TrumpKing', left: 'L4', right: 'W6' },
  { rank: 16, name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
  { rank: 17, name: 'Greatman', left: 'L4', right: 'W5' },
  { rank: 18, name: 'MadeinChina', left: 'L5', right: 'W5' },
]
const BRONZE: RankItem[] = [
  { rank: 19, name: 'TrumpKing', left: 'L4', right: 'W6' },
  { rank: 20, name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
  { rank: 21, name: 'Greatman', left: 'L4', right: 'W5' },
  { rank: 22, name: 'MadeinChina', left: 'L5', right: 'W5' },
]
const PARTICIPANT: RankItem[] = [
  { rank: '-', name: 'Asde', left: 'L3', right: 'W1' },
  { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
  { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
  { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
  { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
  { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
]

interface BarColumnProps {
  name: string
  rank: string
  score: string
  result: string
  nameColor: string
  pt: number
  barImg: string
}

function BarColumn({ name, rank, score, result, nameColor, pt, barImg }: BarColumnProps) {
  return (
    <div className="flex flex-1 flex-col h-full items-start min-w-px relative" style={{ paddingTop: pt }}>
      <div className="flex flex-1 flex-col gap-[4px] items-center min-h-px w-full">
        <div className="flex flex-col gap-[4px] items-center justify-end shrink-0 w-full">
          <p className={`font-['Pretendard',sans-serif] font-normal text-[12px] text-center truncate w-full leading-[1.2] ${nameColor}`}>
            {name}
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-end min-h-px relative w-full">
          <div className="flex-1 min-h-px relative w-full">
            <img alt="" className="absolute inset-0 block max-w-none size-full" src={barImg} />
          </div>
          <div className="absolute flex flex-col items-center left-0 right-0 top-0">
            <div className="font-['Pretendard',sans-serif] font-bold text-[16px] text-center text-white h-[22px] flex items-center justify-center w-[64px] leading-[20px]">
              {rank}
            </div>
            <div className="h-0 shrink-0 w-full relative">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgBarSep} />
              </div>
            </div>
            <div className="flex items-center text-center text-white w-full">
              <div className="flex-1 font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px]">{result}</div>
              <div className="flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] h-[22px] flex items-center justify-center leading-[20px]">
                {score}
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
      <div className="bg-[#f0f2f5] flex flex-1 items-start min-h-px overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] h-full items-center min-w-px overflow-y-auto px-[16px] py-[48px]">
          {/* Month + Top5 chart */}
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
            <MonthDropdown />
            <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
              <GradeTag variant="top5" label="Top 5" />
              <div className="flex h-[280px] items-end shrink-0 w-full">
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                <BarColumn name="Alfred" rank="4th" result="W1" score="12" nameColor="text-[#969cd9]" pt={153} barImg={imgBar4th} />
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                <BarColumn name="bushman" rank="2nd" result="W1" score="17" nameColor="text-[#424cbb]" pt={19} barImg={imgBar2nd} />
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                <BarColumn name="ddadda" rank="1st" result="W1" score="20" nameColor="text-[#2d39b4]" pt={0} barImg={imgBar1st} />
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                <BarColumn name="Samantha" rank="3rd" result="W1" score="16" nameColor="text-[#6c74ca]" pt={87} barImg={imgBar3rd} />
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                <BarColumn name="frifre" rank="5th" result="W1" score="8" nameColor="text-[#c0c3e8]" pt={193} barImg={imgBar5th} />
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
              </div>
            </div>
          </div>

          {/* My Ranking */}
          <div className="bg-white border border-[#9ca3f1] border-solid flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
            <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px] whitespace-nowrap">
                My Ranking
              </p>
            </div>
            <RankRow item={{ rank: 9, name: 'andy13', left: 'L4', right: 'W6' }} />
          </div>

          {/* Grade sections */}
          <div className="flex flex-col gap-[16px] items-start shrink-0 w-full">
            <GradeSection variant="diamond" label="Diamond" items={DIAMOND} />
            <GradeSection variant="platinum" label="Platinum" items={PLATINUM} />
            <GradeSection variant="gold" label="Gold" items={GOLD} />
            <GradeSection variant="silver" label="Silver" items={SILVER} />
            <GradeSection variant="bronze" label="Bronze" items={BRONZE} />
            <GradeSection variant="participant" label="Participant" items={PARTICIPANT} />
          </div>
        </div>

        {/* UI Header */}
        <div className="absolute flex items-center justify-between left-0 overflow-clip p-[12px] right-0 top-0">
          <CloseButton onClick={() => onNavigate(PAGES.MAIN)} />
          <InfoButton />
        </div>
      </div>
    </div>
  )
}
