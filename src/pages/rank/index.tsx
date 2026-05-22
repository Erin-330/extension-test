import { Fragment } from 'react'
import { PAGES } from '../../shared/constants/pages'

const imgRorrUnionStroke = 'https://www.figma.com/api/mcp/asset/f4206872-f13a-4dc0-af26-f8d705d5f411'
const imgRorrExclude = 'https://www.figma.com/api/mcp/asset/378b5b78-0c73-476c-b7fb-8f4aacfe4760'
const imgCloseTopRight = 'https://www.figma.com/api/mcp/asset/f915b90e-b352-4b43-9434-a53b94af146b'

const imgCloseBg = 'https://www.figma.com/api/mcp/asset/2d867955-3c07-4a38-88c4-b548085b9a4e'
const imgCloseX = 'https://www.figma.com/api/mcp/asset/7928723c-ebf4-45e1-a9a7-4231e388a29d'
const imgInfoIcon = 'https://www.figma.com/api/mcp/asset/dccde90e-5517-450b-a3fa-0fcbead2f832'

const imgImage302 = 'https://www.figma.com/api/mcp/asset/bab6a49b-d490-49cc-90e4-64144735dff3'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/c5331410-bd10-4960-8705-3975335c3a1c'
const imgGradeHighlight = 'https://www.figma.com/api/mcp/asset/1371fa2f-79b5-4c37-90c8-ccc4fc38b300'
const imgGradeInnerLine = 'https://www.figma.com/api/mcp/asset/dd20a873-c5c3-452b-802a-e3c67c27d670'

const imgDropdownChevron = 'https://www.figma.com/api/mcp/asset/38515da2-9cce-4104-b471-5bd3f586ab0c'
const imgVerticalDivider = 'https://www.figma.com/api/mcp/asset/f920d00d-fa2c-4296-8fe1-e46b97e92938'
const imgBarDivider = 'https://www.figma.com/api/mcp/asset/e32005f8-7eed-4642-aabd-c87761214668'

const imgGradeSpriteDefault = 'https://www.figma.com/api/mcp/asset/31e81855-9540-4615-a7e5-402d59cbce54'
const imgGradeSpritePlatinum = 'https://www.figma.com/api/mcp/asset/eacc723e-9ce9-4cb4-bf34-4911e866d904'

const imgBar4th = 'https://www.figma.com/api/mcp/asset/04ab38f4-f812-4b68-93df-21fb382983c3'
const imgBar2nd = 'https://www.figma.com/api/mcp/asset/90c396ed-3952-4afc-84f9-85ee85e68da6'
const imgBar1st = 'https://www.figma.com/api/mcp/asset/84307884-1955-4ec6-a1de-32b987ddc21b'
const imgBar3rd = 'https://www.figma.com/api/mcp/asset/7f0b982d-fd92-46b1-a04c-bbf5a35b0c6c'
const imgBar5th = 'https://www.figma.com/api/mcp/asset/2c641778-101a-486a-91df-c44b4e6b5a9d'

type Grade = 'Diamond' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Participant'

const GRADE_GRADIENT: Record<Grade, string> = {
  Diamond:     'bg-gradient-to-r from-[#81a0b8] from-[25%] to-[rgba(129,160,184,0)]',
  Platinum:    'bg-gradient-to-r from-[#afcfe2] from-[25%] to-[rgba(175,207,226,0)]',
  Gold:        'bg-gradient-to-r from-[#e9d17f] from-[25%] to-[rgba(122,90,31,0)]',
  Silver:      'bg-gradient-to-r from-[#bccfe3] from-[25%] to-[rgba(107,118,130,0)]',
  Bronze:      'bg-gradient-to-r from-[#ebc7b3] from-[25%] to-[rgba(63,46,37,0)]',
  Participant: 'bg-gradient-to-r from-[#8b8e98] from-[25%] to-[rgba(117,123,144,0)]',
}

const GRADE_ICON_SPRITE: Record<Grade, string> = {
  Diamond:     imgGradeSpriteDefault,
  Platinum:    imgGradeSpritePlatinum,
  Gold:        imgGradeSpriteDefault,
  Silver:      imgGradeSpriteDefault,
  Bronze:      imgGradeSpriteDefault,
  Participant: imgGradeSpriteDefault,
}

function ProfileWithFrame() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-red-500 overflow-hidden rounded-full inset-[3.98%_3.57%_3.16%_3.57%]">
        <img
          src={imgImage302}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img src={imgGradeBorder} className="absolute inset-0 w-full h-full" alt="" />
        <div className="absolute inset-[5%]">
          <img src={imgGradeHighlight} className="absolute inset-0 w-full h-full" alt="" />
        </div>
        <div className="absolute inset-[6%]">
          <img src={imgGradeInnerLine} className="absolute inset-0 w-full h-full" alt="" />
        </div>
      </div>
    </div>
  )
}

function GradeHeader({ grade }: { grade: Grade }) {
  return (
    <div className={`flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full ${GRADE_GRADIENT[grade]}`}>
      <div className="overflow-hidden relative shrink-0 size-[20px]">
        <img
          src={GRADE_ICON_SPRITE[grade]}
          alt=""
          className="absolute inset-[14.58%_4.17%] w-[75%] h-[70.84%] object-cover"
        />
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
        {grade}
      </p>
    </div>
  )
}

type RankRow = {
  rank: string
  name: string
  leftStat: string
  rightStat: string
  highlight?: boolean
}

function RankListItem({ row }: { row: RankRow }) {
  const bg = row.highlight ? 'bg-[#9ca3f1]' : ''
  const textColor = row.highlight ? 'text-white' : 'text-black'
  return (
    <div className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] shrink-0 w-full ${bg}`}>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-center w-[28px] ${textColor}`}>
        {row.rank}
      </p>
      <div className="flex flex-1 gap-[4px] items-center min-w-px">
        <ProfileWithFrame />
        <p className={`flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap min-w-px ${textColor}`}>
          {row.name}
        </p>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-right w-[40px] ${textColor}`}>
        {row.leftStat}
      </p>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-px">
          <img src={imgVerticalDivider} alt="" className="absolute inset-0 w-full h-full" />
        </div>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-[40px] ${textColor}`}>
        {row.rightStat}
      </p>
    </div>
  )
}

function GradeSection({ grade, rows }: { grade: Grade; rows: RankRow[] }) {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
      <GradeHeader grade={grade} />
      {rows.map((r, i) => (
        <RankListItem key={i} row={r} />
      ))}
    </div>
  )
}

const TOP5_BARS: { rank: string; name: string; nameColor: string; score: string; barImg: string; topPadding: string }[] = [
  { rank: '4th', name: 'Alfred',   nameColor: '#969cd9', score: '12', barImg: imgBar4th, topPadding: 'pt-[153px]' },
  { rank: '2nd', name: 'bushman',  nameColor: '#424cbb', score: '17', barImg: imgBar2nd, topPadding: 'pt-[19px]' },
  { rank: '1st', name: 'ddadda',   nameColor: '#2d39b4', score: '20', barImg: imgBar1st, topPadding: 'pt-0' },
  { rank: '3rd', name: 'Samantha', nameColor: '#6c74ca', score: '16', barImg: imgBar3rd, topPadding: 'pt-[87px]' },
  { rank: '5th', name: 'frifre',   nameColor: '#c0c3e8', score: '8',  barImg: imgBar5th, topPadding: 'pt-[193px]' },
]

const MY_RANKING: RankRow = { rank: '9', name: 'andy13', leftStat: 'L4', rightStat: 'W6' }

const SECTIONS: { grade: Grade; rows: RankRow[] }[] = [
  {
    grade: 'Diamond',
    rows: [
      { rank: '6', name: 'namcheondong', leftStat: 'W3', rightStat: 'W8' },
      { rank: '7', name: 'kkkim',        leftStat: 'L2', rightStat: 'W7' },
    ],
  },
  {
    grade: 'Platinum',
    rows: [
      { rank: '8',  name: 'OrangeCan', leftStat: 'W1', rightStat: 'W7' },
      { rank: '9',  name: 'Andy',      leftStat: 'W4', rightStat: 'W6', highlight: true },
      { rank: '10', name: 'Zammin',    leftStat: 'W2', rightStat: 'W6' },
    ],
  },
  {
    grade: 'Gold',
    rows: [
      { rank: '11', name: 'TrumpKing',    leftStat: 'L4', rightStat: 'W6' },
      { rank: '12', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '13', name: 'Greatman',     leftStat: 'L4', rightStat: 'W5' },
      { rank: '14', name: 'MadeinChina',  leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    grade: 'Silver',
    rows: [
      { rank: '15', name: 'TrumpKing',    leftStat: 'L4', rightStat: 'W6' },
      { rank: '16', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '17', name: 'Greatman',     leftStat: 'L4', rightStat: 'W5' },
      { rank: '18', name: 'MadeinChina',  leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    grade: 'Bronze',
    rows: [
      { rank: '19', name: 'TrumpKing',    leftStat: 'L4', rightStat: 'W6' },
      { rank: '20', name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: '21', name: 'Greatman',     leftStat: 'L4', rightStat: 'W5' },
      { rank: '22', name: 'MadeinChina',  leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    grade: 'Participant',
    rows: [
      { rank: '-', name: 'Asde',     leftStat: 'L3', rightStat: 'W1' },
      { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
    ],
  },
]

export function RankPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="h-dvh w-full flex flex-col items-start bg-[#46383a] pb-[11px] px-[11px]">
      {/* App header */}
      <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center justify-center shrink-0">
          <div className="relative shrink-0 w-[22px] h-[18px] overflow-hidden">
            <img src={imgRorrUnionStroke} className="absolute inset-0 w-full h-full" alt="" />
            <img src={imgRorrExclude} className="absolute inset-0 w-full h-full" alt="" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">RORR</p>
        </div>
        <button
          onClick={() => onNavigate(PAGES.MAIN)}
          aria-label="close"
          className="shrink-0 w-[12.414px] h-[12.414px] relative"
        >
          <img src={imgCloseTopRight} className="absolute inset-0 w-full h-full" alt="" />
        </button>
      </div>

      {/* UI panel */}
      <div className="bg-[#f0f2f5] flex-1 min-h-0 min-w-[288px] relative rounded-[16px] w-full overflow-hidden">
        <div className="absolute inset-0 overflow-y-auto px-[16px] pt-[48px] pb-[48px]">
          <div className="flex flex-col gap-[16px] items-center w-full">

            {/* Top section: Month dropdown + Top5 bar chart */}
            <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
              <div className="bg-white border border-[#ced6e6] border-solid flex gap-[4px] items-center pl-[4px] pr-[10px] py-[2px] rounded-[6px] shrink-0 w-[107px]">
                <div className="overflow-hidden relative shrink-0 size-[24px]">
                  <div className="absolute inset-[33.33%_22.92%_32.83%_21.19%] rotate-90 flex items-center justify-center">
                    <img src={imgDropdownChevron} alt="" className="block w-full h-full" />
                  </div>
                </div>
                <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black whitespace-nowrap">
                  Dec. 2025
                </p>
              </div>

              {/* Top 5 graph card */}
              <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
                <div className="bg-gradient-to-r from-[25%] from-black to-[rgba(0,0,0,0)] flex gap-[10px] items-center p-[8px] rounded-[4px] shrink-0 w-full">
                  <div className="overflow-hidden relative shrink-0 size-[20px]">
                    <img
                      src={imgGradeSpriteDefault}
                      alt=""
                      className="absolute inset-[14.58%_4.17%] w-[75%] h-[70.84%] object-cover"
                    />
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
                    Top 5
                  </p>
                </div>

                {/* Bar chart */}
                <div className="flex h-[280px] items-end shrink-0 w-full">
                  <div className="h-[27px] opacity-0 shrink-0 w-[5px]" />
                  {TOP5_BARS.map((bar, i) => (
                    <Fragment key={i}>
                      <div className={`flex flex-1 flex-col h-full items-start min-w-px relative ${bar.topPadding}`}>
                        <div className="flex flex-1 flex-col gap-[4px] items-center min-h-px w-full">
                          <div className="flex flex-col gap-[4px] items-center justify-end shrink-0 w-full">
                            <p
                              className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full"
                              style={{ color: bar.nameColor }}
                            >
                              {bar.name}
                            </p>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-end min-h-px relative w-full">
                            <div className="flex-1 min-h-px relative w-full">
                              <img
                                src={bar.barImg}
                                alt=""
                                className="absolute inset-0 w-full h-full"
                              />
                            </div>
                            <div className="absolute flex flex-col items-center left-0 right-0 top-0">
                              <p className="font-['Pretendard',sans-serif] font-bold h-[22px] leading-[20px] text-[16px] text-center text-white w-[64px]">
                                {bar.rank}
                              </p>
                              <div className="h-px relative shrink-0 w-full">
                                <img src={imgBarDivider} alt="" className="absolute inset-0 w-full h-full" />
                              </div>
                              <div className="flex items-center text-center text-white w-full">
                                <p className="flex-1 font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] min-w-px">
                                  W1
                                </p>
                                <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] h-[22px] min-w-px">
                                  {bar.score}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[27px] opacity-0 shrink-0 w-[5px]" />
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* My Ranking */}
            <div className="bg-white border border-[#9ca3f1] border-solid flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
              <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full">
                <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
                  My Ranking
                </p>
              </div>
              <RankListItem row={MY_RANKING} />
            </div>

            {/* Grade sections */}
            <div className="flex flex-col gap-[16px] items-start shrink-0 w-full">
              {SECTIONS.map((section, i) => (
                <GradeSection key={i} grade={section.grade} rows={section.rows} />
              ))}
            </div>
          </div>
        </div>

        {/* UI Header (top, absolute) */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between overflow-hidden p-[12px]">
          <button
            onClick={() => onNavigate(PAGES.MAIN)}
            aria-label="close"
            className="flex gap-[10px] items-center justify-center shrink-0 size-[24px] relative"
          >
            <div className="absolute inset-0">
              <img src={imgCloseBg} className="absolute inset-0 w-full h-full" alt="" />
            </div>
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute inset-[28.59%]">
                <img src={imgCloseX} className="absolute inset-0 w-full h-full" alt="" />
              </div>
            </div>
          </button>
          <button
            aria-label="info"
            className="flex gap-[10px] items-center justify-center shrink-0 size-[24px] relative rounded-[28px]"
          >
            <div className="absolute inset-0">
              <img src={imgCloseBg} className="absolute inset-0 w-full h-full" alt="" />
            </div>
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute inset-[22.92%_45.83%]">
                <img src={imgInfoIcon} className="absolute inset-0 w-full h-full" alt="" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
