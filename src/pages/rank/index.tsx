import { PAGES } from '../../shared/constants/pages'
import { AppHeader } from '../../shared/ui/AppHeader'

interface RankPageProps {
  onNavigate: (page: string) => void
}

const ICON_HEADER_BTN = 'https://www.figma.com/api/mcp/asset/58ebf2a6-a406-49b5-8ff0-d723c0564685'
const ICON_INFO = 'https://www.figma.com/api/mcp/asset/8bb272e4-2f9d-4bb5-a6db-0c0dead631a7'
const ICON_CLOSE_X = 'https://www.figma.com/api/mcp/asset/6bb710bf-4996-4106-b2ca-61e7abe699b1'
const ICON_AVATAR_PHOTO = 'https://www.figma.com/api/mcp/asset/decf3bfc-b0ad-41f5-b484-12ae3c6ee486'
const ICON_GRADE_BORDER = 'https://www.figma.com/api/mcp/asset/0d4986dc-f7b4-4318-a7c3-e919bf585196'
const ICON_HIGHLIGHT_STROKE = 'https://www.figma.com/api/mcp/asset/9c20622d-29b3-4dbe-bfad-a5438cdaadd4'
const ICON_INNERLINE_STROKE = 'https://www.figma.com/api/mcp/asset/78af9a26-1ad7-4ed9-8ee0-2021ed0b245c'
const ICON_GRADE_SPRITE = 'https://www.figma.com/api/mcp/asset/e1ab4a9d-41af-4b31-920a-ca965de45bc4'
const ICON_GRADE_SPRITE_PLATINUM = 'https://www.figma.com/api/mcp/asset/bf8555da-3edc-4321-99a1-fc4f63cc0681'
const ICON_VERTICAL_DIV = 'https://www.figma.com/api/mcp/asset/8f279866-7de2-45da-9419-8c71ef70b65b'
const ICON_DROPDOWN_CARET = 'https://www.figma.com/api/mcp/asset/6f7fabca-8725-40f9-9d6c-39553a095a0a'
const ICON_BAR_4TH = 'https://www.figma.com/api/mcp/asset/f0634770-98cc-4626-9fe0-7dc463e570c5'
const ICON_BAR_DIVIDER = 'https://www.figma.com/api/mcp/asset/90f5f9e0-b2d6-4919-9eef-ccc9712bfc0d'
const ICON_BAR_2ND = 'https://www.figma.com/api/mcp/asset/e1cecd19-c902-4ca0-ba23-5b257c1c6f0e'
const ICON_BAR_1ST = 'https://www.figma.com/api/mcp/asset/35382f4a-b35d-4f41-9018-e413ad86e8ab'
const ICON_BAR_3RD = 'https://www.figma.com/api/mcp/asset/443314e0-f278-4b36-b180-19484df3bbc0'
const ICON_BAR_5TH = 'https://www.figma.com/api/mcp/asset/f4b4f8f8-07f6-4f4a-a3b8-fa341a91efbe'

function Avatar({ size = 20 }: { size?: 20 | 28 }) {
  return (
    <div className={`relative shrink-0 ${size === 20 ? 'size-[20px]' : 'size-[28px]'}`}>
      <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[3.98%_3.57%_3.16%_3.57%]">
        <img src={ICON_AVATAR_PHOTO} alt="" className="absolute inset-0 max-w-none object-cover size-full" />
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_GRADE_BORDER} />
        <div className="absolute inset-[5%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_HIGHLIGHT_STROKE} />
        </div>
        <div className="absolute inset-[6%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_INNERLINE_STROKE} />
        </div>
      </div>
    </div>
  )
}

interface BarColumnProps {
  paddingTop: string
  barUrl: string
  nameColor: string
  label: string
  name: string
  leftStat: string
  rightStat: string
}

function BarColumn({ paddingTop, barUrl, nameColor, label, name, leftStat, rightStat }: BarColumnProps) {
  return (
    <div className={`flex flex-1 flex-col h-full items-start min-w-px relative ${paddingTop}`}>
      <p
        className={`font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-center whitespace-nowrap overflow-hidden text-ellipsis w-full ${nameColor}`}
      >
        {name}
      </p>
      <div className="flex-1 min-h-px relative w-full">
        <img src={barUrl} alt="" className="absolute inset-0 max-w-none object-fill size-full block" />
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center px-[2px]">
          <p className="font-['Pretendard',sans-serif] font-bold h-[22px] text-[16px] text-center text-white leading-[20px] w-full">
            {label}
          </p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]">
              <img alt="" className="block max-w-none size-full" src={ICON_BAR_DIVIDER} />
            </div>
          </div>
          <div className="flex items-center text-center text-white w-full">
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] flex-1 leading-[20px]">{leftStat}</p>
            <p className="font-['Pretendard',sans-serif] font-bold h-[22px] text-[16px] flex-1 leading-[20px]">
              {rightStat}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface RankRow {
  rank: number | '-'
  name: string
  leftStat: string
  rightStat: string
  highlight?: boolean
}

function RankRow({ row }: { row: RankRow }) {
  const textColor = row.highlight ? 'text-white' : 'text-black'
  const Wrapper = row.highlight
    ? 'bg-[#9ca3f1] flex flex-col gap-[10px] items-center justify-center px-[4px] py-[8px] shrink-0 w-full'
    : 'flex gap-[8px] items-center justify-center px-[4px] py-[8px] shrink-0 w-full'

  const inner = (
    <>
      <div className="flex gap-[4px] items-center shrink-0">
        <p
          className={`font-['Pretendard',sans-serif] font-light leading-[20px] not-italic shrink-0 text-[14px] text-center w-[28px] ${textColor}`}
        >
          {row.rank}
        </p>
      </div>
      <div className="flex flex-1 gap-[4px] items-center min-w-px">
        <Avatar size={20} />
        <p
          className={`flex-1 font-['Pretendard',sans-serif] font-bold leading-[20px] min-w-px not-italic overflow-hidden text-[16px] text-ellipsis whitespace-nowrap ${textColor}`}
        >
          {row.name}
        </p>
      </div>
      <p
        className={`font-['Pretendard',sans-serif] font-light leading-[20px] not-italic shrink-0 text-[14px] text-right w-[40px] ${textColor}`}
      >
        {row.leftStat}
      </p>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-0">
          <div className="absolute inset-[-2.5%_-0.5px]">
            <img src={ICON_VERTICAL_DIV} alt="" className="block max-w-none size-full" />
          </div>
        </div>
      </div>
      <p
        className={`font-['Pretendard',sans-serif] font-light leading-[20px] not-italic shrink-0 text-[14px] w-[40px] ${textColor}`}
      >
        {row.rightStat}
      </p>
    </>
  )

  if (row.highlight) {
    return (
      <div className={Wrapper}>
        <div className="flex gap-[8px] items-center w-full">{inner}</div>
      </div>
    )
  }
  return <div className={Wrapper}>{inner}</div>
}

interface GradeSectionProps {
  gradient: string
  gradeName: string
  iconUrl: string
  iconInset: string
  iconSpriteDims: string
  rows: RankRow[]
}

function GradeSection({ gradient, gradeName, iconUrl, iconInset, iconSpriteDims, rows }: GradeSectionProps) {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
      <div className={`flex from-[25.013%] gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full bg-gradient-to-r ${gradient}`}>
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className={`absolute ${iconInset} overflow-clip`}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img src={iconUrl} alt="" className={`absolute block max-w-none ${iconSpriteDims}`} />
            </div>
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] not-italic shrink-0 text-[16px] text-white whitespace-nowrap">
          {gradeName}
        </p>
      </div>
      {rows.map((row, i) => (
        <RankRow key={i} row={row} />
      ))}
    </div>
  )
}

const PARTICIPANT_NAMES = ['Asde', 'rodkdufs', 'rodkdufs', 'rodkdufs', 'rodkdufs', 'rodkdufs', 'rodkdufs']

export function RankPage({ onNavigate }: RankPageProps) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="backdrop-blur-[3px] bg-[#f0f2f5] flex flex-1 items-start min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] items-center min-w-px px-[16px] py-[48px] overflow-y-auto h-full">
          {/* Month dropdown */}
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
            <div className="bg-white border border-[#ced6e6] border-solid flex gap-[4px] items-center overflow-clip pl-[4px] pr-[10px] py-[2px] rounded-[6px] shrink-0 w-[107px]">
              <div className="overflow-clip relative shrink-0 size-[24px] rotate-90">
                <img src={ICON_DROPDOWN_CARET} alt="" className="absolute inset-0 max-w-none size-full" />
              </div>
              <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black whitespace-nowrap">
                Dec. 2025
              </p>
            </div>
          </div>

          {/* Top 5 bar chart */}
          <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] shrink-0 w-full max-w-[328px]">
            <div className="bg-gradient-to-r flex from-[25.013%] from-black gap-[10px] items-center p-[8px] rounded-[4px] shrink-0 to-[rgba(0,0,0,0)] w-full">
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <div className="absolute inset-[14.58%_4.17%] overflow-clip">
                  <img src={ICON_GRADE_SPRITE} alt="" className="absolute block max-w-none h-[538.24%] left-[-268.18%] top-[-400%] w-[415.91%]" />
                </div>
              </div>
              <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white">Top 5</p>
            </div>
            <div className="flex h-[280px] items-end shrink-0 w-full">
              <BarColumn paddingTop="pt-[153px]" barUrl={ICON_BAR_4TH} nameColor="text-[#969cd9]" label="4th" name="Alfred" leftStat="W1" rightStat="12" />
              <div className="w-[5px] shrink-0" />
              <BarColumn paddingTop="pt-[19px]" barUrl={ICON_BAR_2ND} nameColor="text-[#424cbb]" label="2nd" name="bushman" leftStat="W1" rightStat="17" />
              <div className="w-[5px] shrink-0" />
              <BarColumn paddingTop="pt-0" barUrl={ICON_BAR_1ST} nameColor="text-[#2d39b4]" label="1st" name="ddadda" leftStat="W1" rightStat="20" />
              <div className="w-[5px] shrink-0" />
              <BarColumn paddingTop="pt-[87px]" barUrl={ICON_BAR_3RD} nameColor="text-[#6c74ca]" label="3rd" name="Samantha" leftStat="W1" rightStat="16" />
              <div className="w-[5px] shrink-0" />
              <BarColumn paddingTop="pt-[193px]" barUrl={ICON_BAR_5TH} nameColor="text-[#c0c3e8]" label="5th" name="frifre" leftStat="W1" rightStat="8" />
            </div>
          </div>

          {/* My Ranking */}
          <div className="bg-white border border-[#9ca3f1] border-solid flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
            <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full">
              <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white whitespace-nowrap">
                My Ranking
              </p>
            </div>
            <RankRow row={{ rank: 9, name: 'andy13', leftStat: 'L4', rightStat: 'W6' }} />
          </div>

          {/* Grade sections */}
          <GradeSection
            gradient="from-[#81a0b8] to-[rgba(129,160,184,0)]"
            gradeName="Diamond"
            iconUrl={ICON_GRADE_SPRITE}
            iconInset="inset-[20.83%_12.5%]"
            iconSpriteDims="h-[538.24%] left-[-231.21%] top-[-154.94%] w-[415.91%]"
            rows={[
              { rank: 6, name: 'namcheondong', leftStat: 'W3', rightStat: 'W8' },
              { rank: 7, name: 'kkkim', leftStat: 'L2', rightStat: 'W7' },
            ]}
          />
          <GradeSection
            gradient="from-[#afcfe2] to-[rgba(175,207,226,0)]"
            gradeName="Platinum"
            iconUrl={ICON_GRADE_SPRITE_PLATINUM}
            iconInset="inset-[14.58%_2.08%]"
            iconSpriteDims="h-[496.3%] left-[-131.08%] top-[-170.37%] w-[362.16%]"
            rows={[
              { rank: 8, name: 'OrangeCan', leftStat: 'W1', rightStat: 'W7' },
              { rank: 9, name: 'Andy', leftStat: 'W4', rightStat: 'W6', highlight: true },
              { rank: 10, name: 'Zammin', leftStat: 'W2', rightStat: 'W6' },
            ]}
          />
          <GradeSection
            gradient="from-[#e9d17f] to-[rgba(122,90,31,0)]"
            gradeName="Gold"
            iconUrl={ICON_GRADE_SPRITE}
            iconInset="inset-[14.58%_4.17%]"
            iconSpriteDims="h-[538.24%] left-[-304.38%] top-[-9.85%] w-[415.91%]"
            rows={[
              { rank: 11, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
              { rank: 12, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
              { rank: 13, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
              { rank: 14, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
            ]}
          />
          <GradeSection
            gradient="from-[#bccfe3] to-[rgba(107,118,130,0)]"
            gradeName="Silver"
            iconUrl={ICON_GRADE_SPRITE}
            iconInset="inset-[14.58%_4.17%]"
            iconSpriteDims="h-[538.24%] left-[-206.38%] top-[-9.85%] w-[415.91%]"
            rows={[
              { rank: 15, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
              { rank: 16, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
              { rank: 17, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
              { rank: 18, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
            ]}
          />
          <GradeSection
            gradient="from-[#ebc7b3] to-[rgba(63,46,37,0)]"
            gradeName="Bronze"
            iconUrl={ICON_GRADE_SPRITE}
            iconInset="inset-[14.58%_4.17%]"
            iconSpriteDims="h-[538.24%] left-[-111.01%] top-[-9.85%] w-[415.91%]"
            rows={[
              { rank: 19, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
              { rank: 20, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
              { rank: 21, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
              { rank: 22, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
            ]}
          />
          <GradeSection
            gradient="from-[#8b8e98] to-[rgba(117,123,144,0)]"
            gradeName="Participant"
            iconUrl={ICON_GRADE_SPRITE}
            iconInset="inset-[14.58%_4.17%]"
            iconSpriteDims="h-[538.24%] left-[-12.9%] top-[-9.85%] w-[415.91%]"
            rows={PARTICIPANT_NAMES.map((name, i) => ({
              rank: '-' as const,
              name,
              leftStat: i === 0 ? 'L3' : 'L2',
              rightStat: 'W1',
            }))}
          />
        </div>

        <div className="absolute flex items-center justify-between left-0 overflow-clip p-[12px] right-0 top-0">
          <button onClick={() => onNavigate(PAGES.MAIN)} className="flex gap-[10px] items-center justify-center relative shrink-0 size-[24px]" aria-label="close">
            <div className="flex-1 h-full min-w-px relative rounded-[30px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_HEADER_BTN} />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[28.59%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_CLOSE_X} />
              </div>
            </div>
          </button>
          <button className="flex gap-[10px] items-center justify-center relative rounded-[28px] shrink-0 size-[24px]" aria-label="info">
            <div className="flex-1 h-full min-w-px relative rounded-[30px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_HEADER_BTN} />
            </div>
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[22.92%_45.83%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={ICON_INFO} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
