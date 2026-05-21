import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const RANK_ASSET = {
  headerBtnBg: 'https://www.figma.com/api/mcp/asset/ad0aeacc-24b6-4c1a-b84c-895acf056a2d',
  infoI: 'https://www.figma.com/api/mcp/asset/e6619948-1d10-4854-938a-f107652f9031',
  closeX: 'https://www.figma.com/api/mcp/asset/c0a1b376-f476-4da6-a505-32a7b8455fd6',
  avatar: 'https://www.figma.com/api/mcp/asset/23f553ce-1ff9-4e14-b254-035724e95041',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/eac0e0f5-9bee-4aaa-a24f-7251df1d89c2',
  highLight: 'https://www.figma.com/api/mcp/asset/5d03386e-068b-4fc1-adf1-a3941805b201',
  innerLine: 'https://www.figma.com/api/mcp/asset/1369f2f6-8520-478d-a47a-9a73199f6bf4',
  gradeIcon: 'https://www.figma.com/api/mcp/asset/2c729d93-2ba1-45fa-a066-9be1442b306c',
  platinumIcon: 'https://www.figma.com/api/mcp/asset/aeb74894-0e73-4efc-854f-5b4c5faecb9a',
  vDivider: 'https://www.figma.com/api/mcp/asset/1dd4f3a3-6334-4231-9a61-2475299102c1',
  rorrStroke: 'https://www.figma.com/api/mcp/asset/92d3d584-1e6e-4c3f-8889-f311221d9437',
  rorrExclude: 'https://www.figma.com/api/mcp/asset/e3996bc1-ffec-44ab-9f6c-a381f7632d48',
  topCloseX: 'https://www.figma.com/api/mcp/asset/e0d2c736-07c3-4d26-95b5-53a5e5b8c44d',
  chevron: 'https://www.figma.com/api/mcp/asset/97d1669e-f2bb-481b-b0b7-28f8225ffbae',
  bar4: 'https://www.figma.com/api/mcp/asset/fb80b182-c28f-4ea6-8069-cc7b819c0a1d',
  barDivider: 'https://www.figma.com/api/mcp/asset/5e54ff78-e784-42b4-8179-110dbb7a8329',
  bar2: 'https://www.figma.com/api/mcp/asset/cfc6720b-a514-48e7-bd6d-68e5fbcc3350',
  bar1: 'https://www.figma.com/api/mcp/asset/af3669d2-1fbd-415a-827d-90e1486456eb',
  bar3: 'https://www.figma.com/api/mcp/asset/ccbfed43-e677-4321-88c1-0d97903e1ab2',
  bar5: 'https://www.figma.com/api/mcp/asset/a5438576-9739-44ed-9a70-a2af627d4a5c',
}

interface TopBar {
  rank: string
  name: string
  nameColor: string
  barUrl: string
  topPx: number
  leftStat: string
  rightStat: string
}

const TOP5: TopBar[] = [
  { rank: '4th', name: 'Alfred',   nameColor: '#969cd9', barUrl: RANK_ASSET.bar4, topPx: 153, leftStat: 'W1', rightStat: '12' },
  { rank: '2nd', name: 'bushman',  nameColor: '#424cbb', barUrl: RANK_ASSET.bar2, topPx: 19,  leftStat: 'W1', rightStat: '17' },
  { rank: '1st', name: 'ddadda',   nameColor: '#2d39b4', barUrl: RANK_ASSET.bar1, topPx: 0,   leftStat: 'W1', rightStat: '20' },
  { rank: '3rd', name: 'Samantha', nameColor: '#6c74ca', barUrl: RANK_ASSET.bar3, topPx: 87,  leftStat: 'W1', rightStat: '16' },
  { rank: '5th', name: 'frifre',   nameColor: '#c0c3e8', barUrl: RANK_ASSET.bar5, topPx: 193, leftStat: 'W1', rightStat: '8'  },
]

interface RankRow {
  rank: string
  name: string
  leftStat: string
  rightStat: string
  highlight?: boolean
}

interface GradeSection {
  name: string
  gradient: string
  rows: RankRow[]
}

const GRADES: GradeSection[] = [
  {
    name: 'Diamond',
    gradient: 'from-[#81a0b8] from-[25%] to-[rgba(129,160,184,0)]',
    rows: [
      { rank: '6', name: 'namcheondong', leftStat: 'W3', rightStat: 'W8' },
      { rank: '7', name: 'kkkim',        leftStat: 'L2', rightStat: 'W7' },
    ],
  },
  {
    name: 'Platinum',
    gradient: 'from-[#afcfe2] from-[25%] to-[rgba(175,207,226,0)]',
    rows: [
      { rank: '8',  name: 'OrangeCan', leftStat: 'W1', rightStat: 'W7' },
      { rank: '9',  name: 'Andy',      leftStat: 'W4', rightStat: 'W6', highlight: true },
      { rank: '10', name: 'Zammin',    leftStat: 'W2', rightStat: 'W6' },
    ],
  },
  {
    name: 'Gold',
    gradient: 'from-[#e9d17f] from-[25%] to-[rgba(122,90,31,0)]',
    rows: [
      { rank: '11', name: 'TrumpKing',     leftStat: 'L4', rightStat: 'W6' },
      { rank: '12', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '13', name: 'Greatman',      leftStat: 'L4', rightStat: 'W5' },
      { rank: '14', name: 'MadeinChina',   leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    name: 'Silver',
    gradient: 'from-[#bccfe3] from-[25%] to-[rgba(107,118,130,0)]',
    rows: [
      { rank: '15', name: 'TrumpKing',     leftStat: 'L4', rightStat: 'W6' },
      { rank: '16', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '17', name: 'Greatman',      leftStat: 'L4', rightStat: 'W5' },
      { rank: '18', name: 'MadeinChina',   leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    name: 'Bronze',
    gradient: 'from-[#ebc7b3] from-[25%] to-[rgba(63,46,37,0)]',
    rows: [
      { rank: '19', name: 'TrumpKing',     leftStat: 'L4', rightStat: 'W6' },
      { rank: '20', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '21', name: 'Greatman',      leftStat: 'L4', rightStat: 'W5' },
      { rank: '22', name: 'MadeinChina',   leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    name: 'Participant',
    gradient: 'from-[#8b8e98] from-[25%] to-[rgba(117,123,144,0)]',
    rows: [
      { rank: '-', name: 'Asde',     leftStat: 'L3', rightStat: 'W1' },
      { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
      { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
      { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
    ],
  },
]

function MiniAvatar({ size = 20 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
        <div className="absolute inset-0">
          <img alt="" className="absolute inset-0 size-full object-cover" src={RANK_ASSET.avatar} />
        </div>
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img alt="" className="absolute inset-0 size-full" src={RANK_ASSET.gradeBorder} />
        <div className="absolute inset-[5%]">
          <img alt="" className="block w-full h-full" src={RANK_ASSET.highLight} />
        </div>
        <div className="absolute inset-[6%]">
          <img alt="" className="block w-full h-full" src={RANK_ASSET.innerLine} />
        </div>
      </div>
    </div>
  )
}

function VerticalDivider() {
  return (
    <div className="self-stretch w-0 relative shrink-0">
      <div className="absolute inset-[-2.5%_-0.5px]">
        <img alt="" className="block w-full h-full" src={RANK_ASSET.vDivider} />
      </div>
    </div>
  )
}

function HeaderButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex gap-[10px] items-center justify-center relative size-[24px] shrink-0"
    >
      <img alt="" className="absolute inset-0 size-full rounded-[30px]" src={RANK_ASSET.headerBtnBg} />
      <div className="absolute inset-[8.33%] overflow-clip">{children}</div>
    </button>
  )
}

function GradeIcon({ src, inset }: { src: string; inset: string }) {
  return (
    <div className="relative size-[20px] overflow-clip shrink-0">
      <div className="absolute" style={{ inset }}>
        <img alt="" className="block w-full h-full" src={src} />
      </div>
    </div>
  )
}

function RankListItem({ row }: { row: RankRow }) {
  const textColor = row.highlight ? 'text-white' : 'text-black'
  return (
    <div
      className={`w-full flex items-center justify-center gap-[8px] px-[4px] py-[8px] rounded-[4px] ${
        row.highlight ? 'bg-[#9ca3f1]' : ''
      }`}
    >
      <p
        className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-center w-[28px] shrink-0 ${textColor}`}
      >
        {row.rank}
      </p>
      <MiniAvatar size={20} />
      <p
        className={`flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] truncate ${textColor}`}
      >
        {row.name}
      </p>
      <p
        className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-right w-[40px] shrink-0 ${textColor}`}
      >
        {row.leftStat}
      </p>
      <VerticalDivider />
      <p
        className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-[40px] shrink-0 ${textColor}`}
      >
        {row.rightStat}
      </p>
    </div>
  )
}

export function RankPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] w-full shrink-0">
        <div className="flex gap-[6px] items-center justify-center">
          <div className="-scale-y-100 rotate-180 flex items-center justify-center">
            <div className="h-[18px] overflow-clip relative w-[22px]">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" className="block w-full h-full" src={RANK_ASSET.rorrStroke} />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" className="block w-full h-full" src={RANK_ASSET.rorrExclude} />
              </div>
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <div className="size-[12.414px] relative shrink-0">
          <img alt="" className="block w-full h-full" src={RANK_ASSET.topCloseX} />
        </div>
      </div>
      <div className="flex-1 min-h-0 bg-[#f0f2f5] backdrop-blur-[3px] rounded-[16px] relative overflow-hidden w-full">
        <div className="flex flex-col gap-[16px] h-full items-center px-[16px] pt-[60px] pb-[16px] overflow-y-auto w-full">
          <div className="flex items-center justify-start w-full">
            <button
              type="button"
              className="bg-white border border-[#ced6e6] border-solid rounded-[6px] w-[107px] pl-[4px] pr-[10px] py-[2px] flex items-center gap-[4px] overflow-clip"
            >
              <div className="relative size-[24px] shrink-0 overflow-clip">
                <div className="absolute inset-[22.92%_25%_22.92%_41.67%] rotate-90 origin-center">
                  <img alt="" className="block w-full h-full" src={RANK_ASSET.chevron} />
                </div>
              </div>
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black">
                Dec. 2025
              </p>
            </button>
          </div>

          <div className="bg-[#dce2eb] rounded-[8px] w-full p-[4px] flex flex-col gap-[8px]">
            <div className="bg-gradient-to-r from-black from-[25%] to-[rgba(0,0,0,0)] p-[8px] rounded-[4px] gap-[10px] flex items-center w-full">
              <GradeIcon src={RANK_ASSET.gradeIcon} inset="20.83% 12.5%" />
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                Top 5
              </p>
            </div>
            <div className="flex items-end h-[280px] w-full justify-center gap-[4px] px-[4px]">
              {TOP5.map((bar, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center min-w-0 relative"
                  style={{ paddingTop: bar.topPx }}
                >
                  <p
                    className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] truncate w-full text-center mb-[4px]"
                    style={{ color: bar.nameColor }}
                  >
                    {bar.name}
                  </p>
                  <div className="relative w-full flex-1 min-h-[60px]">
                    <img
                      alt=""
                      className="absolute inset-0 size-full object-cover rounded-t-[4px]"
                      src={bar.barUrl}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-start pt-[12px] gap-[4px] px-[4px]">
                      <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white text-center w-full">
                        {bar.rank}
                      </p>
                      <div className="h-px w-full relative">
                        <img alt="" className="block w-full h-full" src={RANK_ASSET.barDivider} />
                      </div>
                      <div className="flex w-full justify-between items-center">
                        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
                          {bar.leftStat}
                        </p>
                        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                          {bar.rightStat}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#9ca3f1] border-solid rounded-[8px] w-full p-[4px] flex flex-col gap-[10px]">
            <div className="bg-[#9ca3f1] p-[8px] rounded-[4px] gap-[4px] flex items-center w-full">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                My Ranking
              </p>
            </div>
            <div className="w-full flex items-center justify-center gap-[8px] px-[4px] py-[8px]">
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black text-center w-[28px] shrink-0">
                9
              </p>
              <MiniAvatar size={20} />
              <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-black truncate">
                andy13
              </p>
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-right w-[40px] shrink-0 text-black">
                L4
              </p>
              <VerticalDivider />
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-[40px] shrink-0 text-black">
                W6
              </p>
            </div>
          </div>

          {GRADES.map((grade) => (
            <div
              key={grade.name}
              className="bg-[#dce2eb] rounded-[8px] w-full p-[4px] flex flex-col gap-[10px]"
            >
              <div
                className={`bg-gradient-to-r ${grade.gradient} p-[8px] rounded-[4px] gap-[4px] flex items-center w-full`}
              >
                <GradeIcon
                  src={grade.name === 'Platinum' ? RANK_ASSET.platinumIcon : RANK_ASSET.gradeIcon}
                  inset={grade.name === 'Diamond' ? '20.83% 12.5%' : '14.58% 4.17%'}
                />
                <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                  {grade.name}
                </p>
              </div>
              {grade.rows.map((row, i) => (
                <RankListItem key={`${grade.name}-${i}`} row={row} />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[12px] overflow-clip">
          <HeaderButton onClick={() => onNavigate(PAGES.MAIN)}>
            <div className="absolute inset-[28.59%]">
              <img alt="" className="block w-full h-full" src={RANK_ASSET.closeX} />
            </div>
          </HeaderButton>
          <HeaderButton>
            <div className="absolute inset-0 flex items-center justify-center">
              <img alt="" className="block w-full h-full" src={RANK_ASSET.infoI} />
            </div>
          </HeaderButton>
        </div>
      </div>
    </div>
  )
}
