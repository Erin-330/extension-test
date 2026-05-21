import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const imgHeaderButtonShape =
  'https://www.figma.com/api/mcp/asset/b1ee7f18-7ef6-4c9f-9733-540f2ddb1c2a'
const imgInfoVector =
  'https://www.figma.com/api/mcp/asset/4d3a1dea-c0c0-4bde-8c99-b344a0bd2462'
const imgCloseX =
  'https://www.figma.com/api/mcp/asset/0ceedd51-c755-44c9-af41-f1fb8134de05'
const imgPlayerAvatar =
  'https://www.figma.com/api/mcp/asset/2060a411-18b2-42cc-ada9-14ed10dfb44f'
const imgGradeBorder =
  'https://www.figma.com/api/mcp/asset/4a7557c4-7e54-4e23-a83a-8d86276b6f9e'
const imgHighLight =
  'https://www.figma.com/api/mcp/asset/28d6946b-c3c2-4bab-a774-c08713fa863f'
const imgInnerLine =
  'https://www.figma.com/api/mcp/asset/b06bff43-6284-4bdf-87e5-4a57dd8a1652'
const imgGradeIcon =
  'https://www.figma.com/api/mcp/asset/64d18570-cfcb-427d-b106-6df5bbd16e34'
const imgGradeIconPlatinum =
  'https://www.figma.com/api/mcp/asset/526603ec-3a5f-4058-8130-412ac965781f'
const imgVerticalDivider =
  'https://www.figma.com/api/mcp/asset/db4953b6-8b86-464b-8c8a-a340809e0827'
const imgUnionStroke =
  'https://www.figma.com/api/mcp/asset/170491cc-c8b8-4f3d-bd37-9d55bbfe213c'
const imgExclude =
  'https://www.figma.com/api/mcp/asset/661d9af3-bc32-498f-b54a-1ae466f4974b'
const imgClose =
  'https://www.figma.com/api/mcp/asset/6709355d-ccf6-4c4e-adad-7fa84fd541ba'
const imgChevron =
  'https://www.figma.com/api/mcp/asset/24b4d20c-ad8a-4c47-950c-eb6d36f894ec'
const imgBar4th =
  'https://www.figma.com/api/mcp/asset/dd4b3955-ea12-4f62-9980-ae32f1505ddc'
const imgBarSeparator =
  'https://www.figma.com/api/mcp/asset/c02e5e70-12ce-49b9-accf-a487b2495146'
const imgBar2nd =
  'https://www.figma.com/api/mcp/asset/9c2988f9-8440-409f-998e-4bd20cd568bc'
const imgBar1st =
  'https://www.figma.com/api/mcp/asset/dc3b87c4-170f-407a-8337-0d174234880a'
const imgBar3rd =
  'https://www.figma.com/api/mcp/asset/254e743b-32d5-49d8-8e06-8943322ca725'
const imgBar5th =
  'https://www.figma.com/api/mcp/asset/9d371f32-9b90-4ef5-bbe7-8dff3edb8278'

type RankItem = {
  rank: string
  name: string
  left: string
  right: string
  highlight?: boolean
}

const ProfileAvatar = () => (
  <div className="relative shrink-0 size-[20px]">
    <div className="absolute bg-red-500 overflow-hidden rounded-full inset-[3.98%_3.57%_3.16%_3.57%]">
      <img
        src={imgPlayerAvatar}
        className="absolute inset-0 size-full shrink-0 object-cover"
        alt=""
      />
    </div>
    <div className="absolute inset-[0.41%_0_-0.41%_0]">
      <img src={imgGradeBorder} className="absolute inset-0 size-full shrink-0" alt="" />
      <div className="absolute inset-[5%]">
        <img src={imgHighLight} className="absolute inset-0 size-full shrink-0" alt="" />
      </div>
      <div className="absolute inset-[6%]">
        <img src={imgInnerLine} className="absolute inset-0 size-full shrink-0" alt="" />
      </div>
    </div>
  </div>
)

const RankRow = ({ item }: { item: RankItem }) => {
  const textCls = item.highlight ? 'text-white' : 'text-black'
  return (
    <div
      className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full shrink-0 ${item.highlight ? 'bg-[#9ca3f1] rounded' : ''}`}
    >
      <p
        className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-center w-[28px] ${textCls}`}
      >
        {item.rank}
      </p>
      <div className="flex flex-[1_0_0] gap-[4px] items-center min-w-px">
        <ProfileAvatar />
        <p
          className={`flex-[1_0_0] font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap ${textCls}`}
        >
          {item.name}
        </p>
      </div>
      <p
        className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-right w-[40px] ${textCls}`}
      >
        {item.left}
      </p>
      <img src={imgVerticalDivider} className="h-[20px] w-px shrink-0" alt="" />
      <p
        className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-[40px] ${textCls}`}
      >
        {item.right}
      </p>
    </div>
  )
}

type GradeHeaderProps = {
  label: string
  gradient: string
  iconSrc?: string
}

const GradeHeader = ({ label, gradient, iconSrc }: GradeHeaderProps) => (
  <div
    className="flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full"
    style={{ background: gradient }}
  >
    {iconSrc && (
      <div className="overflow-hidden shrink-0 size-[20px] relative">
        <img src={iconSrc} className="absolute inset-0 size-full shrink-0 object-contain" alt="" />
      </div>
    )}
    <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
      {label}
    </p>
  </div>
)

type SectionProps = {
  label: string
  gradient: string
  iconSrc?: string
  items: RankItem[]
}

const RankSection = ({ label, gradient, iconSrc, items }: SectionProps) => (
  <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
    <GradeHeader label={label} gradient={gradient} iconSrc={iconSrc} />
    {items.map((item, i) => (
      <RankRow key={i} item={item} />
    ))}
  </div>
)

const DIAMOND_ITEMS: RankItem[] = [
  { rank: '6', name: 'namcheondong', left: 'W3', right: 'W8' },
  { rank: '7', name: 'kkkim', left: 'L2', right: 'W7' },
]

const PLATINUM_ITEMS: RankItem[] = [
  { rank: '8', name: 'OrangeCan', left: 'W1', right: 'W7' },
  { rank: '9', name: 'Andy', left: 'W4', right: 'W6', highlight: true },
  { rank: '10', name: 'Zammin', left: 'W2', right: 'W6' },
]

const GOLD_ITEMS: RankItem[] = [
  { rank: '11', name: 'TrumpKing', left: 'L4', right: 'W6' },
  { rank: '12', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
  { rank: '13', name: 'Greatman', left: 'L4', right: 'W5' },
  { rank: '14', name: 'MadeinChina', left: 'L5', right: 'W5' },
]

const SILVER_ITEMS: RankItem[] = [
  { rank: '15', name: 'TrumpKing', left: 'L4', right: 'W6' },
  { rank: '16', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
  { rank: '17', name: 'Greatman', left: 'L4', right: 'W5' },
  { rank: '18', name: 'MadeinChina', left: 'L5', right: 'W5' },
]

const BRONZE_ITEMS: RankItem[] = [
  { rank: '19', name: 'TrumpKing', left: 'L4', right: 'W6' },
  { rank: '20', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
  { rank: '21', name: 'Greatman', left: 'L4', right: 'W5' },
  { rank: '22', name: 'MadeinChina', left: 'L5', right: 'W5' },
]

const PARTICIPANT_ITEMS: RankItem[] = [
  { rank: '-', name: 'Asde', left: 'L3', right: 'W1' },
  { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
]

type BarProps = {
  name: string
  nameColor: string
  rank: string
  win: string
  score: string
  paddingTop: number
  barSrc: string
}

const Bar = ({ name, nameColor, rank, win, score, paddingTop, barSrc }: BarProps) => (
  <div className="flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" style={{ paddingTop }}>
    <div className="flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px w-full">
      <p
        className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-center overflow-hidden text-ellipsis w-full whitespace-nowrap"
        style={{ color: nameColor }}
      >
        {name}
      </p>
      <div className="flex flex-[1_0_0] flex-col items-center justify-end min-h-px w-full relative">
        <img
          src={barSrc}
          className="absolute inset-0 size-full shrink-0 object-cover"
          alt=""
        />
        <div className="absolute flex flex-col items-center left-0 right-0 top-0">
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-center text-white h-[22px] w-[64px] flex items-center justify-center">
            {rank}
          </p>
          <img src={imgBarSeparator} className="w-full h-px shrink-0" alt="" />
          <div className="flex items-center w-full text-white">
            <span className="flex-[1_0_0] font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-center">
              {win}
            </span>
            <span className="flex-[1_0_0] font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-center">
              {score}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const RankPage = ({ onNavigate }: Props) => {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-65 px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center">
          <div className="h-[18px] relative w-[22px] overflow-hidden">
            <img src={imgUnionStroke} className="absolute inset-0 size-full shrink-0" alt="" />
            <img src={imgExclude} className="absolute inset-0 size-full shrink-0" alt="" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <img src={imgClose} className="size-[12.414px] shrink-0" alt="" />
      </div>
      <div className="bg-[#f0f2f5] flex-[1_0_0] min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-col gap-[16px] h-full items-center overflow-y-auto px-[16px] py-[48px] relative w-full">
          <div className="flex flex-col gap-[4px] items-start w-full shrink-0">
            <div className="bg-white border border-[#ced6e6] flex gap-[4px] items-center pl-[4px] pr-[10px] py-[2px] rounded-[6px] shrink-0 w-[107px] overflow-hidden">
              <div className="size-[24px] shrink-0 relative">
                <img
                  src={imgChevron}
                  className="absolute inset-[33%_22%_33%_21%] rotate-90 size-[44%] shrink-0"
                  alt=""
                />
              </div>
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black whitespace-nowrap">
                Dec. 2025
              </p>
            </div>
            <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
              <div
                className="flex gap-[10px] items-center p-[8px] rounded-[4px] w-full shrink-0"
                style={{
                  background:
                    'linear-gradient(to right, #000 25.013%, rgba(0,0,0,0) 100%)',
                }}
              >
                <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
                  Top 5
                </p>
              </div>
              <div className="flex h-[280px] items-end w-full shrink-0">
                <Bar
                  name="Alfred"
                  nameColor="#969cd9"
                  rank="4th"
                  win="W1"
                  score="12"
                  paddingTop={153}
                  barSrc={imgBar4th}
                />
                <Bar
                  name="bushman"
                  nameColor="#424cbb"
                  rank="2nd"
                  win="W1"
                  score="17"
                  paddingTop={19}
                  barSrc={imgBar2nd}
                />
                <Bar
                  name="ddadda"
                  nameColor="#2d39b4"
                  rank="1st"
                  win="W1"
                  score="20"
                  paddingTop={0}
                  barSrc={imgBar1st}
                />
                <Bar
                  name="Samantha"
                  nameColor="#6c74ca"
                  rank="3rd"
                  win="W1"
                  score="16"
                  paddingTop={87}
                  barSrc={imgBar3rd}
                />
                <Bar
                  name="frifre"
                  nameColor="#c0c3e8"
                  rank="5th"
                  win="W1"
                  score="8"
                  paddingTop={193}
                  barSrc={imgBar5th}
                />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#9ca3f1] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full shrink-0">
            <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] w-full shrink-0">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
                My Ranking
              </p>
            </div>
            <RankRow item={{ rank: '9', name: 'andy13', left: 'L4', right: 'W6' }} />
          </div>
          <div className="flex flex-col gap-[16px] items-start w-full shrink-0">
            <RankSection
              label="Diamond"
              gradient="linear-gradient(to right, #81a0b8 25.013%, rgba(129,160,184,0) 100%)"
              iconSrc={imgGradeIcon}
              items={DIAMOND_ITEMS}
            />
            <RankSection
              label="Platinum"
              gradient="linear-gradient(to right, #afcfe2 25.013%, rgba(175,207,226,0) 100%)"
              iconSrc={imgGradeIconPlatinum}
              items={PLATINUM_ITEMS}
            />
            <RankSection
              label="Gold"
              gradient="linear-gradient(to right, #e9d17f 25.013%, rgba(122,90,31,0) 100%)"
              iconSrc={imgGradeIcon}
              items={GOLD_ITEMS}
            />
            <RankSection
              label="Silver"
              gradient="linear-gradient(to right, #bccfe3 25.013%, rgba(107,118,130,0) 100%)"
              iconSrc={imgGradeIcon}
              items={SILVER_ITEMS}
            />
            <RankSection
              label="Bronze"
              gradient="linear-gradient(to right, #ebc7b3 25.013%, rgba(63,46,37,0) 100%)"
              iconSrc={imgGradeIcon}
              items={BRONZE_ITEMS}
            />
            <RankSection
              label="Participant"
              gradient="linear-gradient(to right, #8b8e98 0%, rgba(117,123,144,0) 100%)"
              iconSrc={imgGradeIcon}
              items={PARTICIPANT_ITEMS}
            />
          </div>
        </div>
        <div className="absolute flex items-center justify-between left-0 right-0 top-0 p-[12px]">
          <button
            onClick={() => onNavigate(PAGES.MAIN)}
            className="flex items-center justify-center shrink-0 size-[24px] relative rounded-full"
            aria-label="close"
          >
            <img src={imgHeaderButtonShape} className="absolute inset-0 size-full shrink-0" alt="" />
            <img src={imgCloseX} className="absolute inset-[28%] size-[44%] shrink-0" alt="" />
          </button>
          <button
            className="flex items-center justify-center shrink-0 size-[24px] relative rounded-full"
            aria-label="info"
          >
            <img src={imgHeaderButtonShape} className="absolute inset-0 size-full shrink-0" alt="" />
            <img src={imgInfoVector} className="absolute inset-[22%_45%] shrink-0" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
