import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const RORR_LOGO_STROKE = 'https://www.figma.com/api/mcp/asset/b149141a-4f21-460d-a736-5ab152df1ce2'
const RORR_LOGO_EXCLUDE = 'https://www.figma.com/api/mcp/asset/4b27cdfb-8aca-46cc-94b7-4afbee6c5372'
const HEADER_X_TOP = 'https://www.figma.com/api/mcp/asset/b7f1d61e-e015-4aeb-9919-6b9d5f26c0ec'
const HEADER_BTN_BG = 'https://www.figma.com/api/mcp/asset/e37184dd-c6d0-4d88-bab2-ea2f4285c7c7'
const X_GLYPH = 'https://www.figma.com/api/mcp/asset/862645c4-9edb-4a62-bb1c-e489c7954b27'
const INFO_GLYPH = 'https://www.figma.com/api/mcp/asset/7c116470-78a4-484c-9125-ec57602a86de'
const DROPDOWN_CHEVRON = 'https://www.figma.com/api/mcp/asset/e96e01e6-f9e0-402a-89df-45a182b4c45a'
const AVATAR_PHOTO = 'https://www.figma.com/api/mcp/asset/5aaaa93d-4ad7-45ea-8fc0-8ce96f6cd4f8'
const GRADE_BORDER = 'https://www.figma.com/api/mcp/asset/e463833b-813a-4723-84ab-14d7c9ed5865'
const HIGHLIGHT_STROKE = 'https://www.figma.com/api/mcp/asset/0919a88f-c732-4565-9586-633f5b214b0a'
const INNERLINE_STROKE = 'https://www.figma.com/api/mcp/asset/445fbd59-055b-4f69-a56a-8d4b90cc0be4'
const GRADE_ICON_SPRITE = 'https://www.figma.com/api/mcp/asset/5197ae52-33c7-499f-a734-3d782cf46d2d'
const PLATINUM_ICON_SPRITE = 'https://www.figma.com/api/mcp/asset/ed69b485-9100-4c2b-8a0d-5f64245e3741'
const V_DIVIDER = 'https://www.figma.com/api/mcp/asset/6fc2a259-a249-42fb-8c16-3ae2553f6ea6'
const BAR_4TH = 'https://www.figma.com/api/mcp/asset/2b967ba4-1111-48f8-85e8-7a677725c8e4'
const BAR_2ND = 'https://www.figma.com/api/mcp/asset/3b2d0698-873b-46a6-bb09-e2b4a76b6400'
const BAR_1ST = 'https://www.figma.com/api/mcp/asset/23708c4a-62da-4bc7-8783-87e51c327368'
const BAR_3RD = 'https://www.figma.com/api/mcp/asset/2f932d03-6a4b-4921-8c80-6d8c8095a35d'
const BAR_5TH = 'https://www.figma.com/api/mcp/asset/cf51d77c-8563-4998-ab88-fa9e8e55e3cd'
const BAR_DIVIDER = 'https://www.figma.com/api/mcp/asset/3a0f814b-5981-4738-bf91-3f054426a705'

interface TopFiveBar {
  rankLabel: string
  name: string
  nameColor: string
  leftStat: string
  rightStat: string
  asset: string
  paddingTop: string
}

const TOP_FIVE: TopFiveBar[] = [
  { rankLabel: '4th', name: 'Alfred', nameColor: '#969cd9', leftStat: 'W1', rightStat: '12', asset: BAR_4TH, paddingTop: 'pt-[153px]' },
  { rankLabel: '2nd', name: 'bushman', nameColor: '#424cbb', leftStat: 'W1', rightStat: '17', asset: BAR_2ND, paddingTop: 'pt-[19px]' },
  { rankLabel: '1st', name: 'ddadda', nameColor: '#2d39b4', leftStat: 'W1', rightStat: '20', asset: BAR_1ST, paddingTop: 'pt-0' },
  { rankLabel: '3rd', name: 'Samantha', nameColor: '#6c74ca', leftStat: 'W1', rightStat: '16', asset: BAR_3RD, paddingTop: 'pt-[87px]' },
  { rankLabel: '5th', name: 'frifre', nameColor: '#c0c3e8', leftStat: 'W1', rightStat: '8', asset: BAR_5TH, paddingTop: 'pt-[193px]' },
]

interface RankRow {
  rank: string
  name: string
  leftStat: string
  rightStat: string
  highlight?: boolean
}

interface GradeSection {
  label: string
  gradientFrom: string
  gradientToTransparent: string
  iconSprite: string
  rows: RankRow[]
}

const SECTIONS: GradeSection[] = [
  {
    label: 'Diamond',
    gradientFrom: '#81a0b8',
    gradientToTransparent: 'rgba(129,160,184,0)',
    iconSprite: GRADE_ICON_SPRITE,
    rows: [
      { rank: '6', name: 'namcheondong', leftStat: 'W3', rightStat: 'W8' },
      { rank: '7', name: 'kkkim', leftStat: 'L2', rightStat: 'W7' },
    ],
  },
  {
    label: 'Platinum',
    gradientFrom: '#afcfe2',
    gradientToTransparent: 'rgba(175,207,226,0)',
    iconSprite: PLATINUM_ICON_SPRITE,
    rows: [
      { rank: '8', name: 'OrangeCan', leftStat: 'W1', rightStat: 'W7' },
      { rank: '9', name: 'Andy', leftStat: 'W4', rightStat: 'W6', highlight: true },
      { rank: '10', name: 'Zammin', leftStat: 'W2', rightStat: 'W6' },
    ],
  },
  {
    label: 'Gold',
    gradientFrom: '#e9d17f',
    gradientToTransparent: 'rgba(122,90,31,0)',
    iconSprite: GRADE_ICON_SPRITE,
    rows: [
      { rank: '11', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
      { rank: '12', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '13', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
      { rank: '14', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    label: 'Silver',
    gradientFrom: '#bccfe3',
    gradientToTransparent: 'rgba(107,118,130,0)',
    iconSprite: GRADE_ICON_SPRITE,
    rows: [
      { rank: '15', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
      { rank: '16', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '17', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
      { rank: '18', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    label: 'Bronze',
    gradientFrom: '#ebc7b3',
    gradientToTransparent: 'rgba(63,46,37,0)',
    iconSprite: GRADE_ICON_SPRITE,
    rows: [
      { rank: '19', name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
      { rank: '20', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '21', name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
      { rank: '22', name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    label: 'Participant',
    gradientFrom: '#8b8e98',
    gradientToTransparent: 'rgba(117,123,144,0)',
    iconSprite: GRADE_ICON_SPRITE,
    rows: [
      { rank: '-', name: 'Asde', leftStat: 'L3', rightStat: 'W1' },
      { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
      { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
      { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
    ],
  },
]

function AppHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] shrink-0 w-full">
      <div className="flex gap-[4px] items-center">
        <div className="relative h-[18px] w-[22px] overflow-hidden">
          <img src={RORR_LOGO_STROKE} alt="" className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]" />
          <img src={RORR_LOGO_EXCLUDE} alt="" className="absolute inset-[2.93%_22.01%_2.81%_22.06%]" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px]">
          RORR
        </p>
      </div>
      <button onClick={onClose} className="relative size-[12.414px] cursor-pointer">
        <img src={HEADER_X_TOP} alt="close" className="block size-full" />
      </button>
    </div>
  )
}

function HeaderButton({ glyph, alt, onClick, hidden }: { glyph: string; alt: string; onClick?: () => void; hidden?: boolean }) {
  return (
    <button onClick={onClick} className={`relative size-[24px] rounded-[28px] cursor-pointer ${hidden ? 'opacity-0' : ''}`}>
      <img src={HEADER_BTN_BG} alt="" className="absolute inset-0 size-full rounded-[30px]" />
      <div className="absolute inset-[8.33%] overflow-hidden">
        <img src={glyph} alt={alt} className="absolute inset-[22.92%_45.83%]" />
      </div>
    </button>
  )
}

function MiniAvatar() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-[#bbbfd0] overflow-hidden rounded-full inset-[0.41%_0_-0.41%_0]">
        <img src={AVATAR_PHOTO} alt="" className="absolute inset-0 size-full object-cover" />
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img src={GRADE_BORDER} alt="" className="absolute block inset-0 size-full" />
        <div className="absolute inset-[5%]">
          <img src={HIGHLIGHT_STROKE} alt="" className="absolute block inset-0 size-full" />
        </div>
        <div className="absolute inset-[6%]">
          <img src={INNERLINE_STROKE} alt="" className="absolute block inset-0 size-full" />
        </div>
      </div>
    </div>
  )
}

function RankRowComponent({ row }: { row: RankRow }) {
  const textColor = row.highlight ? 'text-white' : 'text-black'
  const wrapperClass = row.highlight
    ? 'bg-[#9ca3f1] flex gap-[10px] items-center px-[4px] py-[8px] w-full justify-center'
    : 'flex gap-[8px] items-center px-[4px] py-[8px] w-full justify-center'
  return (
    <div className={wrapperClass}>
      <p className={`w-[28px] text-center font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] ${textColor}`}>
        {row.rank}
      </p>
      <div className="flex flex-1 gap-[4px] items-center min-w-px">
        <MiniAvatar />
        <p className={`flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] ${textColor} overflow-hidden text-ellipsis whitespace-nowrap`}>
          {row.name}
        </p>
      </div>
      <p className={`w-[40px] text-right font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] ${textColor}`}>
        {row.leftStat}
      </p>
      <div className="relative h-[20px] w-0 shrink-0">
        <img src={V_DIVIDER} alt="" className="absolute inset-[-2.5%_-0.5px] block h-full" />
      </div>
      <p className={`w-[40px] font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] ${textColor}`}>
        {row.rightStat}
      </p>
    </div>
  )
}

function GradeTag({ label, gradientFrom, gradientToTransparent, iconSprite }: { label: string; gradientFrom: string; gradientToTransparent: string; iconSprite: string }) {
  return (
    <div
      className="flex gap-[4px] items-center p-[8px] rounded-[4px] w-full"
      style={{ background: `linear-gradient(to right, ${gradientFrom} 25.013%, ${gradientToTransparent})` }}
    >
      <div className="relative size-[20px] overflow-hidden shrink-0">
        <img src={iconSprite} alt="" className="absolute inset-0 size-full object-contain" />
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px]">
        {label}
      </p>
    </div>
  )
}

function GradeSectionView({ section }: { section: GradeSection }) {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[10px] p-[4px] rounded-[8px] w-full">
      <GradeTag
        label={section.label}
        gradientFrom={section.gradientFrom}
        gradientToTransparent={section.gradientToTransparent}
        iconSprite={section.iconSprite}
      />
      <div className="flex flex-col w-full">
        {section.rows.map((row, i) => (
          <RankRowComponent key={`${section.label}-${i}`} row={row} />
        ))}
      </div>
    </div>
  )
}

function MonthDropdown() {
  return (
    <button className="bg-white border border-[#ced6e6] rounded-[6px] flex items-center gap-[4px] pl-[4px] pr-[10px] py-[2px] w-[107px] overflow-hidden">
      <div className="relative size-[24px] overflow-hidden shrink-0 rotate-90">
        <img src={DROPDOWN_CHEVRON} alt="" className="absolute bottom-[22.92%] left-[41.67%] right-1/4 top-[22.92%]" />
      </div>
      <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black leading-[20px]">
        Dec. 2025
      </p>
    </button>
  )
}

function TopFiveBarComponent({ bar }: { bar: TopFiveBar }) {
  return (
    <div className="flex flex-1 flex-col gap-[4px] items-center h-full">
      <p
        className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] mt-auto"
        style={{ color: bar.nameColor }}
      >
        {bar.name}
      </p>
      <div className={`relative w-full ${bar.paddingTop} flex-1`}>
        <img src={bar.asset} alt="" className="absolute inset-0 size-full" />
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center px-[4px] pt-[8px] gap-[4px]">
          <p className="w-[64px] h-[22px] text-center font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px]">
            {bar.rankLabel}
          </p>
          <div className="relative h-0 w-full">
            <img src={BAR_DIVIDER} alt="" className="absolute inset-[-0.5px_0] block w-full" />
          </div>
          <div className="flex w-full items-center">
            <p className="flex-1 text-center font-['Pretendard',sans-serif] font-light text-[14px] text-white leading-[20px]">
              {bar.leftStat}
            </p>
            <p className="flex-1 text-center font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px]">
              {bar.rightStat}
            </p>
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
      <div className="bg-[#f0f2f5] flex flex-1 min-h-px rounded-[16px] w-full relative overflow-hidden backdrop-blur-[3px]">
        <div className="flex flex-1 flex-col gap-[16px] items-center min-w-px overflow-y-auto pt-[48px] pb-[48px] px-[16px]">
          <div className="flex flex-col gap-[4px] items-start w-full max-w-[328px]">
            <MonthDropdown />
            <div className="bg-[#dce2eb] flex flex-col gap-[8px] p-[4px] rounded-[8px] w-full">
              <div
                className="flex gap-[4px] items-center p-[8px] rounded-[4px] w-full"
                style={{ background: 'linear-gradient(to right, #000000 25.013%, rgba(0,0,0,0))' }}
              >
                <div className="relative size-[20px] overflow-hidden shrink-0">
                  <img src={GRADE_ICON_SPRITE} alt="" className="absolute inset-0 size-full object-contain" />
                </div>
                <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px]">
                  Top 5
                </p>
              </div>
              <div className="flex h-[280px] items-end gap-[5px] w-full">
                {TOP_FIVE.map((bar, i) => (
                  <TopFiveBarComponent key={i} bar={bar} />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#9ca3f1] rounded-[8px] p-[4px] flex flex-col gap-[10px] w-full max-w-[328px]">
            <div className="bg-[#9ca3f1] flex items-center gap-[4px] p-[8px] rounded-[4px] w-full">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px]">
                My Ranking
              </p>
            </div>
            <RankRowComponent row={{ rank: '9', name: 'andy13', leftStat: 'L4', rightStat: 'W6' }} />
          </div>
          <div className="flex flex-col gap-[16px] w-full max-w-[328px]">
            {SECTIONS.map((s) => (
              <GradeSectionView key={s.label} section={s} />
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[12px] overflow-hidden">
          <HeaderButton glyph={X_GLYPH} alt="close" onClick={() => onNavigate(PAGES.MAIN)} />
          <HeaderButton glyph={INFO_GLYPH} alt="info" />
        </div>
      </div>
    </div>
  )
}
