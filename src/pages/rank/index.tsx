import { PAGES } from '../../shared/constants/pages'

interface RankPageProps {
  onNavigate: (page: string) => void
}

const IMG_HEADER_BUTTON_SHAPE = 'https://www.figma.com/api/mcp/asset/1889495f-9050-46b2-8868-36d72c0e0b38'
const IMG_INFO_I = 'https://www.figma.com/api/mcp/asset/f6214cc3-793f-4673-9dec-6393abffd842'
const IMG_X_STROKE = 'https://www.figma.com/api/mcp/asset/feccf769-1dec-4cc8-99da-8fed86507dbd'
const IMG_USER_IMG = 'https://www.figma.com/api/mcp/asset/4ac92ff2-d453-4ed3-a9de-62da0eaca06c'
const IMG_GRADE_BORDER = 'https://www.figma.com/api/mcp/asset/513d62b9-0773-4df1-86e6-96536cb1192c'
const IMG_HIGHLIGHT = 'https://www.figma.com/api/mcp/asset/94044b05-5455-411c-b030-21a6cbdad02e'
const IMG_INNER_LINE = 'https://www.figma.com/api/mcp/asset/9771bb16-167a-43b8-a6bf-32a316d6ce3c'
const IMG_GRADE_RECT = 'https://www.figma.com/api/mcp/asset/bfdff373-734e-4c2e-9ed2-7181ed0c75cb'
const IMG_GRADE_RECT_PLAT = 'https://www.figma.com/api/mcp/asset/74f0b490-ffa9-4cdc-9038-7a9170b57239'
const IMG_VERT_DIVIDER = 'https://www.figma.com/api/mcp/asset/3d56d97a-a4d5-461a-a68d-fdfd0b8f6772'
const IMG_RORR_UNION_STROKE = 'https://www.figma.com/api/mcp/asset/0944ddae-b278-4d5a-ab5d-f685315c71ac'
const IMG_RORR_EXCLUDE = 'https://www.figma.com/api/mcp/asset/72511772-8d86-4cff-af19-9bbb9dbcc9f4'
const IMG_HEADER_CLOSE = 'https://www.figma.com/api/mcp/asset/b782ab4a-7042-46e1-a41a-50313a8c0904'
const IMG_CHEVRON_STROKE = 'https://www.figma.com/api/mcp/asset/3b0d4da2-c187-42b2-bf39-662085b760d8'
const IMG_BAR_4TH = 'https://www.figma.com/api/mcp/asset/35798ca1-4931-4bb5-8723-78197f448828'
const IMG_BAR_SEP = 'https://www.figma.com/api/mcp/asset/b5a0c63f-59f1-4448-823f-df51e6ce3061'
const IMG_BAR_2ND = 'https://www.figma.com/api/mcp/asset/f6f8bd7c-1e14-41fe-9d50-0c5a409a8d2e'
const IMG_BAR_1ST = 'https://www.figma.com/api/mcp/asset/af425546-2760-4abb-a001-e205a4c39189'
const IMG_BAR_3RD = 'https://www.figma.com/api/mcp/asset/3462442f-e7e5-401d-ae77-986634ee4c1b'
const IMG_BAR_5TH = 'https://www.figma.com/api/mcp/asset/dfa6e87b-c24e-437a-aa97-6a79545e2935'

type GradeKey = 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'participant'

const GRADE_GRADIENT: Record<GradeKey, string> = {
  diamond: 'from-[#81a0b8] from-[25.013%] to-[rgba(129,160,184,0)]',
  platinum: 'from-[#afcfe2] from-[25.013%] to-[rgba(175,207,226,0)]',
  gold: 'from-[#e9d17f] from-[25.013%] to-[rgba(122,90,31,0)]',
  silver: 'from-[#bccfe3] from-[25.013%] to-[rgba(107,118,130,0)]',
  bronze: 'from-[#ebc7b3] from-[25.013%] to-[rgba(63,46,37,0)]',
  participant: 'from-[#8b8e98] to-[rgba(117,123,144,0)]',
}
const GRADE_LABEL: Record<GradeKey, string> = {
  diamond: 'Diamond',
  platinum: 'Platinum',
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  participant: 'Participant',
}

type RankRow = {
  rank: string
  name: string
  left: string
  right: string
  highlight?: boolean
}

const SECTIONS: { grade: GradeKey; rows: RankRow[] }[] = [
  {
    grade: 'diamond',
    rows: [
      { rank: '6', name: 'namcheondong', left: 'W3', right: 'W8' },
      { rank: '7', name: 'kkkim', left: 'L2', right: 'W7' },
    ],
  },
  {
    grade: 'platinum',
    rows: [
      { rank: '8', name: 'OrangeCan', left: 'W1', right: 'W7' },
      { rank: '9', name: 'Andy', left: 'W4', right: 'W6', highlight: true },
      { rank: '10', name: 'Zammin', left: 'W2', right: 'W6' },
    ],
  },
  {
    grade: 'gold',
    rows: [
      { rank: '11', name: 'TrumpKing', left: 'L4', right: 'W6' },
      { rank: '12', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
      { rank: '13', name: 'Greatman', left: 'L4', right: 'W5' },
      { rank: '14', name: 'MadeinChina', left: 'L5', right: 'W5' },
    ],
  },
  {
    grade: 'silver',
    rows: [
      { rank: '15', name: 'TrumpKing', left: 'L4', right: 'W6' },
      { rank: '16', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
      { rank: '17', name: 'Greatman', left: 'L4', right: 'W5' },
      { rank: '18', name: 'MadeinChina', left: 'L5', right: 'W5' },
    ],
  },
  {
    grade: 'bronze',
    rows: [
      { rank: '19', name: 'TrumpKing', left: 'L4', right: 'W6' },
      { rank: '20', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
      { rank: '21', name: 'Greatman', left: 'L4', right: 'W5' },
      { rank: '22', name: 'MadeinChina', left: 'L5', right: 'W5' },
    ],
  },
  {
    grade: 'participant',
    rows: [
      { rank: '-', name: 'Asde', left: 'L3', right: 'W1' },
      { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
    ],
  },
]

function AvatarSmall() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-[red] inset-[3.98%_3.57%_3.16%_3.57%] overflow-hidden rounded-full">
        <div className="absolute inset-[-2.4%_-1.2%_-7.6%_-1.6%]">
          <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={IMG_USER_IMG} />
        </div>
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_GRADE_BORDER} />
        <div className="absolute inset-[5%]">
          <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_HIGHLIGHT} />
        </div>
        <div className="absolute inset-[6%]">
          <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_INNER_LINE} />
        </div>
      </div>
    </div>
  )
}

function GradeIcon({ grade }: { grade: GradeKey }) {
  if (grade === 'participant') return null
  const isPlatinum = grade === 'platinum'
  const inset =
    grade === 'diamond' ? 'inset-[20.83%_12.5%]' : isPlatinum ? 'inset-[14.58%_2.08%]' : 'inset-[14.58%_4.17%]'
  return (
    <div className="overflow-hidden relative shrink-0 size-[20px]">
      <div className={`absolute ${inset}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute max-w-none h-[500%] w-[400%] left-[-150%] top-[-150%]"
            src={isPlatinum ? IMG_GRADE_RECT_PLAT : IMG_GRADE_RECT}
          />
        </div>
      </div>
    </div>
  )
}

function GradeHeader({ grade }: { grade: GradeKey }) {
  return (
    <div
      className={`bg-gradient-to-r flex gap-[4px] items-center p-[8px] rounded-[4px] w-full shrink-0 ${GRADE_GRADIENT[grade]}`}
    >
      <GradeIcon grade={grade} />
      <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white whitespace-nowrap">
        {GRADE_LABEL[grade]}
      </p>
    </div>
  )
}

function RankRowItem({ row }: { row: RankRow }) {
  const textColor = row.highlight ? 'text-white' : 'text-black'
  const nameWeight = 'font-bold'
  return (
    <div
      className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full shrink-0 ${
        row.highlight ? 'bg-[#9ca3f1]' : ''
      }`}
    >
      <p
        className={`font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-center w-[28px] shrink-0 ${textColor}`}
      >
        {row.rank}
      </p>
      <div className="flex flex-1 min-w-0 gap-[4px] items-center">
        <AvatarSmall />
        <p
          className={`flex-1 min-w-0 font-['Pretendard',sans-serif] ${nameWeight} leading-[20px] text-[16px] overflow-hidden text-ellipsis whitespace-nowrap ${textColor}`}
        >
          {row.name}
        </p>
      </div>
      <p
        className={`font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-right w-[40px] shrink-0 ${textColor}`}
      >
        {row.left}
      </p>
      <div className="self-stretch flex items-center">
        <div className="h-full relative shrink-0 w-0">
          <div className="absolute inset-[-2.5%_-0.5px]">
            <img alt="" className="block max-w-none size-full" src={IMG_VERT_DIVIDER} />
          </div>
        </div>
      </div>
      <p
        className={`font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] w-[40px] shrink-0 ${textColor}`}
      >
        {row.right}
      </p>
    </div>
  )
}

function Top5Bar({
  rank,
  name,
  left,
  right,
  pt,
  barImg,
  nameColor,
}: {
  rank: string
  name: string
  left: string
  right: string
  pt: number
  barImg: string
  nameColor: string
}) {
  return (
    <div className="flex flex-1 min-w-0 flex-col h-full items-start" style={{ paddingTop: `${pt}px` }}>
      <div className="flex flex-1 min-h-0 flex-col gap-[4px] items-center w-full">
        <div className="flex flex-col gap-[4px] items-center justify-end shrink-0 w-full">
          <p
            className={`font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full ${nameColor}`}
          >
            {name}
          </p>
        </div>
        <div className="flex flex-1 min-h-0 flex-col items-center justify-end w-full relative">
          <div className="flex-1 min-h-0 w-full relative">
            <img alt="" className="absolute inset-0 max-w-none size-full" src={barImg} />
          </div>
          <div className="absolute flex flex-col items-center left-0 right-0 top-0">
            <div className="flex items-center justify-center h-[22px] w-[64px]">
              <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-center text-white">
                {rank}
              </p>
            </div>
            <div className="h-0 w-full relative">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={IMG_BAR_SEP} />
              </div>
            </div>
            <div className="flex items-center w-full text-center text-white">
              <p className="flex-1 min-w-0 font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px]">
                {left}
              </p>
              <p className="flex-1 min-w-0 font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] h-[22px]">
                {right}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function RankPage({ onNavigate }: RankPageProps) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      {/* Outer RORR header */}
      <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center">
          <div className="-scale-y-100 rotate-180">
            <div className="h-[18px] overflow-hidden relative w-[22px]">
              <div className="absolute inset-[0.03%_19.61%_-0.09%_19.66%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_RORR_UNION_STROKE} />
              </div>
              <div className="absolute inset-[2.93%_22.01%_2.81%_22.06%]">
                <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_RORR_EXCLUDE} />
              </div>
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <button onClick={() => onNavigate(PAGES.MAIN)} className="relative shrink-0 size-[12.414px]">
          <img alt="close" className="absolute inset-0 max-w-none size-full" src={IMG_HEADER_CLOSE} />
        </button>
      </div>

      {/* Inner UI panel */}
      <div className="flex-1 min-h-0 bg-[#f0f2f5] rounded-[16px] relative overflow-hidden w-full">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="flex flex-col gap-[16px] items-center px-[16px] py-[48px] w-full">
            {/* Month dropdown + Top 5 graph */}
            <div className="flex flex-col gap-[4px] items-start w-full">
              <button className="bg-white border border-[#ced6e6] border-solid flex gap-[4px] items-center overflow-hidden pl-[4px] pr-[10px] py-[2px] rounded-[6px] w-[107px]">
                <div className="overflow-hidden relative shrink-0 size-[24px]">
                  <div className="absolute inset-[33.33%_22.92%_32.83%_21.19%] rotate-90">
                    <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_CHEVRON_STROKE} />
                  </div>
                </div>
                <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black whitespace-nowrap">
                  Dec. 2025
                </p>
              </button>

              <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] w-full">
                {/* Top 5 header */}
                <div className="bg-gradient-to-r from-black from-[25.013%] to-[rgba(0,0,0,0)] flex gap-[10px] items-center p-[8px] rounded-[4px] w-full">
                  <div className="overflow-hidden relative shrink-0 size-[20px]">
                    <div className="absolute inset-[14.58%_4.17%]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute max-w-none h-[538.24%] left-[-268.18%] top-[-400%] w-[415.91%]"
                          src={IMG_GRADE_RECT}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white whitespace-nowrap">
                    Top 5
                  </p>
                </div>

                {/* Bars */}
                <div className="flex h-[280px] items-end w-full">
                  <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                  <Top5Bar rank="4th" name="Alfred" left="W1" right="12" pt={153} barImg={IMG_BAR_4TH} nameColor="text-[#969cd9]" />
                  <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                  <Top5Bar rank="2nd" name="bushman" left="W1" right="17" pt={19} barImg={IMG_BAR_2ND} nameColor="text-[#424cbb]" />
                  <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                  <Top5Bar rank="1st" name="ddadda" left="W1" right="20" pt={0} barImg={IMG_BAR_1ST} nameColor="text-[#2d39b4]" />
                  <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                  <Top5Bar rank="3rd" name="Samantha" left="W1" right="16" pt={87} barImg={IMG_BAR_3RD} nameColor="text-[#6c74ca]" />
                  <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                  <Top5Bar rank="5th" name="frifre" left="W1" right="8" pt={193} barImg={IMG_BAR_5TH} nameColor="text-[#c0c3e8]" />
                  <div className="bg-[#d9d9d9] h-[27px] opacity-0 shrink-0 w-[5px]" />
                </div>
              </div>
            </div>

            {/* My Ranking card */}
            <div className="bg-white border border-[#9ca3f1] border-solid flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full shrink-0">
              <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] w-full">
                <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white whitespace-nowrap">
                  My Ranking
                </p>
              </div>
              <RankRowItem row={{ rank: '9', name: 'andy13', left: 'L4', right: 'W6' }} />
            </div>

            {/* Grade sections */}
            <div className="flex flex-col gap-[16px] items-start w-full">
              {SECTIONS.map((section) => (
                <div
                  key={section.grade}
                  className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full shrink-0"
                >
                  <GradeHeader grade={section.grade} />
                  {section.rows.map((row, i) => (
                    <RankRowItem key={`${section.grade}-${i}`} row={row} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* UI Header (Close + Info) - absolute */}
        <div className="absolute flex items-center justify-between left-0 right-0 top-0 overflow-hidden p-[12px]">
          <button
            onClick={() => onNavigate(PAGES.MAIN)}
            className="flex items-center justify-center relative size-[24px]"
          >
            <div className="absolute inset-0 rounded-[30px]">
              <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_HEADER_BUTTON_SHAPE} />
            </div>
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute inset-[28.59%]">
                <img alt="close" className="absolute inset-0 max-w-none size-full" src={IMG_X_STROKE} />
              </div>
            </div>
          </button>
          <button className="flex items-center justify-center relative rounded-[28px] size-[24px]">
            <div className="absolute inset-0 rounded-[30px]">
              <img alt="" className="absolute inset-0 max-w-none size-full" src={IMG_HEADER_BUTTON_SHAPE} />
            </div>
            <div className="absolute inset-[8.33%] overflow-hidden">
              <div className="absolute inset-[22.92%_45.83%]">
                <img alt="info" className="absolute inset-0 max-w-none size-full" src={IMG_INFO_I} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
