import { Fragment } from 'react'
import { PAGES } from '../../shared/constants/pages'
import { AppHeader } from '../../shared/ui/AppHeader'

const imgHeaderShape = 'https://www.figma.com/api/mcp/asset/92233d3b-cbaf-4ba7-8225-91c4422a0c11'
const imgInfo = 'https://www.figma.com/api/mcp/asset/f020d37a-6ac6-4c50-ad02-1ffac5e3139c'
const imgCloseStroke = 'https://www.figma.com/api/mcp/asset/216bc722-e519-4cba-9753-8a34d344c976'
const imgAvatar = 'https://www.figma.com/api/mcp/asset/870a18ba-c0c8-41af-a26b-db160eb52fce'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/da382fcd-5c16-483a-a6f8-247e5fb6a8c6'
const imgHighLightStroke = 'https://www.figma.com/api/mcp/asset/d3ce5b0a-c949-4f77-a59a-6b720d839d0b'
const imgInnerLineStroke = 'https://www.figma.com/api/mcp/asset/7d3ee23f-dbc8-4b46-9650-15e52b87c3ce'
const imgGradeRect = 'https://www.figma.com/api/mcp/asset/34e0fac9-9f29-4bae-ad3d-a8ff360c2c29'
const imgGradeRectPlatinum = 'https://www.figma.com/api/mcp/asset/9db5f943-a2b5-4172-be0a-2177d7b2c133'
const imgVDivider = 'https://www.figma.com/api/mcp/asset/68942207-60b0-4461-b95f-93d4d5519c2b'
const imgChevron = 'https://www.figma.com/api/mcp/asset/c6d5371d-3485-49f7-ac3b-d8a171e77a6b'
const imgBar1 = 'https://www.figma.com/api/mcp/asset/121aea2c-645c-454f-bacb-5d4b5daf8710'
const imgBarSeparator = 'https://www.figma.com/api/mcp/asset/e35fecce-e019-4662-9ec0-df4e71a22239'
const imgBar2 = 'https://www.figma.com/api/mcp/asset/4d4e3373-e10f-4f38-9fc2-80f7a1911937'
const imgBar3 = 'https://www.figma.com/api/mcp/asset/3d44ca5f-ed94-4939-9822-8bc7efd912ff'
const imgBar4 = 'https://www.figma.com/api/mcp/asset/8c8708b4-5657-4db9-a6ec-4df90addd1f1'
const imgBar5 = 'https://www.figma.com/api/mcp/asset/6d88696c-8c59-4db8-bb76-6dd8841a88aa'

type Props = { onNavigate: (page: string) => void }

function HeaderButton({
  imgSrc,
  insetInner,
  onClick,
  ariaLabel,
}: {
  imgSrc: string
  insetInner: string
  onClick?: () => void
  ariaLabel: string
}) {
  return (
    <button onClick={onClick} className="relative size-[24px]" aria-label={ariaLabel}>
      <img
        src={imgHeaderShape}
        alt=""
        className="absolute block inset-0 max-w-none size-full rounded-[30px]"
      />
      <span className="absolute overflow-clip" style={{ inset: '8.33%' }}>
        <span className="absolute block" style={{ inset: insetInner }}>
          <img src={imgSrc} alt="" className="absolute block inset-0 max-w-none size-full" />
        </span>
      </span>
    </button>
  )
}

function ProfileAvatar() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div
        className="absolute bg-red-500 overflow-clip rounded-full"
        style={{ inset: '3.98% 3.57% 3.16% 3.57%' }}
      >
        <div className="absolute" style={{ inset: '-2.4% -1.2% -7.6% -1.6%' }}>
          <img src={imgAvatar} alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" />
        </div>
      </div>
      <div className="absolute" style={{ inset: '0.41% 0 -0.41% 0' }}>
        <img src={imgGradeBorder} alt="" className="absolute block inset-0 max-w-none size-full" />
        <div className="absolute" style={{ inset: '5%' }}>
          <img src={imgHighLightStroke} alt="" className="absolute block inset-0 max-w-none size-full" />
        </div>
        <div className="absolute" style={{ inset: '6%' }}>
          <img src={imgInnerLineStroke} alt="" className="absolute block inset-0 max-w-none size-full" />
        </div>
      </div>
    </div>
  )
}

const gradeStyles: Record<
  string,
  { bg: string; rectImg: string; rectStyle: React.CSSProperties; insetClass: string }
> = {
  diamond: {
    bg: 'linear-gradient(to right, #81a0b8 25.013%, rgba(129,160,184,0))',
    rectImg: imgGradeRect,
    rectStyle: { height: '538.24%', left: '-231.21%', top: '-154.94%', width: '415.91%' },
    insetClass: '20.83% 12.5%',
  },
  platinum: {
    bg: 'linear-gradient(to right, #afcfe2 25.013%, rgba(175,207,226,0))',
    rectImg: imgGradeRectPlatinum,
    rectStyle: { height: '496.3%', left: '-131.08%', top: '-170.37%', width: '362.16%' },
    insetClass: '14.58% 2.08%',
  },
  gold: {
    bg: 'linear-gradient(to right, #e9d17f 25.013%, rgba(122,90,31,0))',
    rectImg: imgGradeRect,
    rectStyle: { height: '538.24%', left: '-304.38%', top: '-9.85%', width: '415.91%' },
    insetClass: '14.58% 4.17%',
  },
  silver: {
    bg: 'linear-gradient(to right, #bccfe3 25.013%, rgba(107,118,130,0))',
    rectImg: imgGradeRect,
    rectStyle: { height: '538.24%', left: '-206.38%', top: '-9.85%', width: '415.91%' },
    insetClass: '14.58% 4.17%',
  },
  bronze: {
    bg: 'linear-gradient(to right, #ebc7b3 25.013%, rgba(63,46,37,0))',
    rectImg: imgGradeRect,
    rectStyle: { height: '538.24%', left: '-111.01%', top: '-9.85%', width: '415.91%' },
    insetClass: '14.58% 4.17%',
  },
  participant: {
    bg: 'linear-gradient(to right, #8b8e98, rgba(117,123,144,0))',
    rectImg: imgGradeRect,
    rectStyle: { height: '538.24%', left: '-12.9%', top: '-9.85%', width: '415.91%' },
    insetClass: '14.58% 4.17%',
  },
  top5: {
    bg: 'linear-gradient(to right, #000 25.013%, rgba(0,0,0,0))',
    rectImg: imgGradeRect,
    rectStyle: { height: '538.24%', left: '-268.18%', top: '-400%', width: '415.91%' },
    insetClass: '14.58% 4.17%',
  },
}

function GradeTag({ grade, label }: { grade: keyof typeof gradeStyles; label: string }) {
  const g = gradeStyles[grade]
  return (
    <div
      className={`flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full ${grade === 'top5' ? 'gap-[10px]' : ''}`}
      style={{ background: g.bg }}
    >
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute" style={{ inset: g.insetClass.replace(/(\S+)/g, '$1') }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img src={g.rectImg} alt="" className="absolute max-w-none" style={g.rectStyle} />
          </div>
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] shrink-0 text-[16px] text-white whitespace-nowrap">
        {label}
      </p>
    </div>
  )
}

type RankRow = { rank: string; name: string; left: string; right: string; highlight?: boolean }

function RankListItem({ row }: { row: RankRow }) {
  const textColor = row.highlight ? 'text-white' : 'text-black'
  return (
    <div
      className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] shrink-0 w-full ${row.highlight ? 'bg-[#9ca3f1]' : ''}`}
    >
      <div className="flex gap-[4px] items-center shrink-0">
        <p
          className={`font-['Pretendard',sans-serif] font-light leading-[20px] shrink-0 text-[14px] ${textColor} text-center w-[28px]`}
        >
          {row.rank}
        </p>
      </div>
      <div className="flex flex-1 gap-[4px] items-center min-w-px">
        <ProfileAvatar />
        <p
          className={`flex-1 font-['Pretendard',sans-serif] font-bold leading-[20px] min-w-px overflow-hidden text-[16px] ${textColor} text-ellipsis whitespace-nowrap`}
        >
          {row.name}
        </p>
      </div>
      <p
        className={`font-['Pretendard',sans-serif] font-light leading-[20px] shrink-0 text-[14px] ${textColor} text-right w-[40px]`}
      >
        {row.left}
      </p>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-0">
          <div className="absolute" style={{ inset: '-2.5% -0.5px' }}>
            <img src={imgVDivider} alt="" className="block max-w-none size-full" />
          </div>
        </div>
      </div>
      <p
        className={`font-['Pretendard',sans-serif] font-light leading-[20px] shrink-0 text-[14px] ${textColor} w-[40px]`}
      >
        {row.right}
      </p>
    </div>
  )
}

function RankList({
  grade,
  label,
  rows,
}: {
  grade: keyof typeof gradeStyles
  label: string
  rows: RankRow[]
}) {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
      <GradeTag grade={grade} label={label} />
      {rows.map((row, idx) => (
        <RankListItem key={idx} row={row} />
      ))}
    </div>
  )
}

type BarItem = { name: string; rank: string; score: string; nameColor: string; pt: number; img: string }

function TopFiveBar({ item }: { item: BarItem }) {
  return (
    <div
      className="flex flex-1 flex-col h-full items-start min-w-px relative"
      style={{ paddingTop: `${item.pt}px` }}
    >
      <div className="flex flex-1 flex-col gap-[4px] items-center min-h-px w-full">
        <div className="flex flex-col gap-[4px] items-center justify-end shrink-0 w-full">
          <p
            className="font-['Pretendard',sans-serif] font-normal leading-[1.2] overflow-hidden shrink-0 text-[12px] text-center text-ellipsis w-full whitespace-nowrap"
            style={{ color: item.nameColor }}
          >
            {item.name}
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-end min-h-px relative w-full">
          <div className="flex-1 min-h-px relative w-full">
            <img src={item.img} alt="" className="absolute block inset-0 max-w-none size-full" />
          </div>
          <div className="absolute flex flex-col items-center left-0 right-0 top-0">
            <p className="font-['Pretendard',sans-serif] font-bold h-[22px] leading-[20px] shrink-0 text-[16px] text-center text-white w-[64px]">
              {item.rank}
            </p>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute" style={{ inset: '-0.5px 0' }}>
                <img src={imgBarSeparator} alt="" className="block max-w-none size-full" />
              </div>
            </div>
            <div className="flex items-center text-center text-white w-full">
              <div className="flex flex-1 flex-col font-['Pretendard',sans-serif] font-light justify-center min-w-px text-[14px]">
                <p className="leading-[20px]">W1</p>
              </div>
              <div className="flex flex-1 flex-col font-['Pretendard',sans-serif] font-bold h-[22px] justify-center min-w-px text-[16px]">
                <p className="leading-[20px]">{item.score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TOP_FIVE: BarItem[] = [
  { name: 'Alfred', rank: '4th', score: '12', nameColor: '#969cd9', pt: 153, img: imgBar1 },
  { name: 'bushman', rank: '2nd', score: '17', nameColor: '#424cbb', pt: 19, img: imgBar2 },
  { name: 'ddadda', rank: '1st', score: '20', nameColor: '#2d39b4', pt: 0, img: imgBar3 },
  { name: 'Samantha', rank: '3rd', score: '16', nameColor: '#6c74ca', pt: 87, img: imgBar4 },
  { name: 'frifre', rank: '5th', score: '8', nameColor: '#c0c3e8', pt: 193, img: imgBar5 },
]

const DIAMOND_ROWS: RankRow[] = [
  { rank: '6', name: 'namcheondong', left: 'W3', right: 'W8' },
  { rank: '7', name: 'kkkim', left: 'L2', right: 'W7' },
]
const PLATINUM_ROWS: RankRow[] = [
  { rank: '8', name: 'OrangeCan', left: 'W1', right: 'W7' },
  { rank: '9', name: 'Andy', left: 'W4', right: 'W6', highlight: true },
  { rank: '10', name: 'Zammin', left: 'W2', right: 'W6' },
]
const GOLD_ROWS: RankRow[] = [
  { rank: '11', name: 'TrumpKing', left: 'L4', right: 'W6' },
  { rank: '12', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
  { rank: '13', name: 'Greatman', left: 'L4', right: 'W5' },
  { rank: '14', name: 'MadeinChina', left: 'L5', right: 'W5' },
]
const SILVER_ROWS: RankRow[] = [
  { rank: '15', name: 'TrumpKing', left: 'L4', right: 'W6' },
  { rank: '16', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
  { rank: '17', name: 'Greatman', left: 'L4', right: 'W5' },
  { rank: '18', name: 'MadeinChina', left: 'L5', right: 'W5' },
]
const BRONZE_ROWS: RankRow[] = [
  { rank: '19', name: 'TrumpKing', left: 'L4', right: 'W6' },
  { rank: '20', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
  { rank: '21', name: 'Greatman', left: 'L4', right: 'W5' },
  { rank: '22', name: 'MadeinChina', left: 'L5', right: 'W5' },
]
const PARTICIPANT_ROWS: RankRow[] = [
  { rank: '-', name: 'Asde', left: 'L3', right: 'W1' },
  { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
  { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
]

export function RankPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="bg-[#f0f2f5] backdrop-blur-[3px] flex-1 min-h-px min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full items-center overflow-y-auto pb-[20px] pt-[48px] px-[16px]">
          {/* Month dropdown + Top 5 chart */}
          <div className="flex flex-col gap-[4px] items-start w-full">
            <div className="bg-white border border-[#ced6e6] flex gap-[4px] items-center overflow-clip pl-[4px] pr-[10px] py-[2px] rounded-[6px] shrink-0 w-[107px]">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div
                  className="absolute flex items-center justify-center"
                  style={{ inset: '33.33% 22.92% 32.83% 21.19%' }}
                >
                  <div className="flex-none rotate-90 size-full">
                    <img src={imgChevron} alt="" className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
              <p className="font-['Pretendard',sans-serif] font-light leading-[20px] shrink-0 text-[14px] text-black whitespace-nowrap">
                Dec. 2025
              </p>
            </div>

            <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
              <GradeTag grade="top5" label="Top 5" />
              <div className="flex h-[280px] items-end w-full">
                <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                {TOP_FIVE.map((item, idx) => (
                  <Fragment key={idx}>
                    <TopFiveBar item={item} />
                    <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* My Ranking */}
          <div className="bg-white border border-[#9ca3f1] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
            <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full">
              <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] shrink-0 text-[16px] text-white whitespace-nowrap">
                My Ranking
              </p>
            </div>
            <RankListItem row={{ rank: '9', name: 'andy13', left: 'L4', right: 'W6' }} />
          </div>

          <div className="flex flex-col gap-[16px] items-start w-full">
            <RankList grade="diamond" label="Diamond" rows={DIAMOND_ROWS} />
            <RankList grade="platinum" label="Platinum" rows={PLATINUM_ROWS} />
            <RankList grade="gold" label="Gold" rows={GOLD_ROWS} />
            <RankList grade="silver" label="Silver" rows={SILVER_ROWS} />
            <RankList grade="bronze" label="Bronze" rows={BRONZE_ROWS} />
            <RankList grade="participant" label="Participant" rows={PARTICIPANT_ROWS} />
          </div>
        </div>

        <div className="absolute flex items-center justify-between left-0 right-0 top-0 overflow-clip p-[12px]">
          <HeaderButton
            imgSrc={imgCloseStroke}
            insetInner="28.59%"
            onClick={() => onNavigate(PAGES.MAIN)}
            ariaLabel="close"
          />
          <HeaderButton imgSrc={imgInfo} insetInner="22.92% 45.83%" ariaLabel="info" />
        </div>
      </div>
    </div>
  )
}
