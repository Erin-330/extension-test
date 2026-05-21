import { PAGES } from '../../shared/constants/pages'
import { AppHeader } from '../../shared/ui/AppHeader'

const imgHeaderButtonShape = 'https://www.figma.com/api/mcp/asset/f8748d34-1fff-433f-b423-ff82fc6b702a'
const imgInfoBar = 'https://www.figma.com/api/mcp/asset/53b700e1-bf84-46c3-8981-0a8088ca83e1'
const imgClose = 'https://www.figma.com/api/mcp/asset/0a2ab7f5-298d-4e42-a6da-4f674f99705b'
const imgUserImage = 'https://www.figma.com/api/mcp/asset/f0d4cdd1-8902-4750-8374-a2c803befbd7'
const imgGradeBorder = 'https://www.figma.com/api/mcp/asset/a12e8de2-c5e6-44b2-92b1-86c9ab9566b9'
const imgHighLight = 'https://www.figma.com/api/mcp/asset/cbf2e5be-d072-435d-b782-31578a9ea4c2'
const imgInnerLine = 'https://www.figma.com/api/mcp/asset/27eae78b-8a05-4d44-913c-e049c119f5aa'
const imgGradeRect = 'https://www.figma.com/api/mcp/asset/6c1f2265-75b0-4044-be91-0d30b43c03c1'
const imgPlatRect = 'https://www.figma.com/api/mcp/asset/0a73c2e1-2d8a-4d7f-adf3-9e7474b14558'
const imgVDivider = 'https://www.figma.com/api/mcp/asset/d3fa3157-dca8-4208-a5d3-773fbbbc6fc6'
const imgChevron = 'https://www.figma.com/api/mcp/asset/432c2b65-f24b-479b-8a8d-10501d8216d9'
const imgFrameDivider = 'https://www.figma.com/api/mcp/asset/8181dd56-8254-4e01-9796-42c4dccfdc08'
const imgBar4th = 'https://www.figma.com/api/mcp/asset/ae3c212b-149c-4051-b250-5132b4437883'
const imgBar2nd = 'https://www.figma.com/api/mcp/asset/59896e83-0fe3-4079-bb91-90a613bcd5fe'
const imgBar1st = 'https://www.figma.com/api/mcp/asset/0235b5da-a44a-4726-876e-49742cf33fa1'
const imgBar3rd = 'https://www.figma.com/api/mcp/asset/1e159d26-18a6-4fbe-a343-6ddf10206add'
const imgBar5th = 'https://www.figma.com/api/mcp/asset/a4f74006-4e18-4076-b5c8-fc21360fc1f0'

type Props = { onNavigate: (page: string) => void }

type RankItem = {
  rank: number | '-'
  name: string
  leftStat: string
  rightStat: string
  highlight?: boolean
}

const DIAMOND: RankItem[] = [
  { rank: 6, name: 'namcheondong', leftStat: 'W3', rightStat: 'W8' },
  { rank: 7, name: 'kkkim', leftStat: 'L2', rightStat: 'W7' },
]
const PLATINUM: RankItem[] = [
  { rank: 8, name: 'OrangeCan', leftStat: 'W1', rightStat: 'W7' },
  { rank: 9, name: 'Andy', leftStat: 'W4', rightStat: 'W6', highlight: true },
  { rank: 10, name: 'Zammin', leftStat: 'W2', rightStat: 'W6' },
]
const GOLD: RankItem[] = [
  { rank: 11, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
  { rank: 12, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
  { rank: 13, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
  { rank: 14, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
]
const SILVER: RankItem[] = [
  { rank: 15, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
  { rank: 16, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
  { rank: 17, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
  { rank: 18, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
]
const BRONZE: RankItem[] = [
  { rank: 19, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
  { rank: 20, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
  { rank: 21, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
  { rank: 22, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
]
const PARTICIPANT: RankItem[] = [
  { rank: '-', name: 'Asde', leftStat: 'L3', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
  { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
]
const MY_RANKING: RankItem = { rank: 9, name: 'andy13', leftStat: 'L4', rightStat: 'W6' }

const TOP5 = [
  { label: '4th', name: 'Alfred', wins: 'W1', score: '12', bar: imgBar4th, nameColor: '#969cd9', pt: 153 },
  { label: '2nd', name: 'bushman', wins: 'W1', score: '17', bar: imgBar2nd, nameColor: '#424cbb', pt: 19 },
  { label: '1st', name: 'ddadda', wins: 'W1', score: '20', bar: imgBar1st, nameColor: '#2d39b4', pt: 0 },
  { label: '3rd', name: 'Samantha', wins: 'W1', score: '16', bar: imgBar3rd, nameColor: '#6c74ca', pt: 87 },
  { label: '5th', name: 'frifre', wins: 'W1', score: '8', bar: imgBar5th, nameColor: '#c0c3e8', pt: 193 },
]

function Avatar() {
  return (
    <div className="relative size-[20px] shrink-0">
      <div className="absolute inset-[3.98%_3.57%_3.16%_3.57%] rounded-full overflow-clip bg-[#eee]">
        <img
          alt=""
          src={imgUserImage}
          className="absolute inset-0 size-full shrink-0"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img alt="" src={imgGradeBorder} className="absolute inset-0 size-full shrink-0" />
        <div className="absolute inset-[5%]">
          <img alt="" src={imgHighLight} className="absolute inset-0 size-full shrink-0" />
        </div>
        <div className="absolute inset-[6%]">
          <img alt="" src={imgInnerLine} className="absolute inset-0 size-full shrink-0" />
        </div>
      </div>
    </div>
  )
}

function RankRow({ item, light }: { item: RankItem; light?: boolean }) {
  if (item.highlight) {
    return (
      <div className="bg-[#9ca3f1] flex flex-col gap-[10px] items-center justify-center px-[4px] py-[8px] w-full shrink-0">
        <div className="flex gap-[8px] items-center w-full">
          <div className="flex gap-[4px] items-center shrink-0">
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white text-center w-[28px]">
              {item.rank}
            </p>
          </div>
          <div className="flex flex-[1_0_0] gap-[4px] items-center min-w-px">
            <Avatar />
            <p className="flex-[1_0_0] font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white overflow-hidden text-ellipsis whitespace-nowrap">
              {item.name}
            </p>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white text-right w-[40px]">
            {item.leftStat}
          </p>
          <div className="self-stretch w-0 relative shrink-0">
            <div className="absolute inset-[-2.5%_-0.5px] h-full">
              <img alt="" src={imgVDivider} className="block size-full shrink-0" />
            </div>
          </div>
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white w-[40px]">
            {item.rightStat}
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full shrink-0">
      <div className="flex gap-[4px] items-center shrink-0">
        <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-center w-[28px] ${light ? 'text-white' : 'text-black'}`}>
          {item.rank}
        </p>
      </div>
      <div className="flex flex-[1_0_0] gap-[4px] items-center min-w-px">
        <Avatar />
        <p className={`flex-[1_0_0] font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap ${light ? 'text-white' : 'text-black'}`}>
          {item.name}
        </p>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-right w-[40px] ${light ? 'text-white' : 'text-black'}`}>
        {item.leftStat}
      </p>
      <div className="self-stretch w-0 relative shrink-0">
        <div className="absolute inset-[-2.5%_-0.5px] h-full">
          <img alt="" src={imgVDivider} className="block size-full shrink-0" />
        </div>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-[40px] ${light ? 'text-white' : 'text-black'}`}>
        {item.rightStat}
      </p>
    </div>
  )
}

function GradeHeader({
  label,
  variant,
}: {
  label: string
  variant: 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'participant'
}) {
  const bg: Record<typeof variant, string> = {
    diamond: 'linear-gradient(to right, #81a0b8 25.013%, rgba(129,160,184,0))',
    platinum: 'linear-gradient(to right, #afcfe2 25.013%, rgba(175,207,226,0))',
    gold: 'linear-gradient(to right, #e9d17f 25.013%, rgba(122,90,31,0))',
    silver: 'linear-gradient(to right, #bccfe3 25.013%, rgba(107,118,130,0))',
    bronze: 'linear-gradient(to right, #ebc7b3 25.013%, rgba(63,46,37,0))',
    participant: 'linear-gradient(to right, #8b8e98 0%, rgba(117,123,144,0))',
  }
  const iconSrc = variant === 'platinum' ? imgPlatRect : imgGradeRect
  return (
    <div
      className="flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full"
      style={{ background: bg[variant] }}
    >
      <div className="relative size-[20px] overflow-clip shrink-0">
        <div className="absolute inset-[14.58%_4.17%] overflow-hidden">
          <img
            alt=""
            src={iconSrc}
            className="absolute shrink-0"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
        {label}
      </p>
    </div>
  )
}

function Top5Bar({ entry }: { entry: (typeof TOP5)[number] }) {
  return (
    <div className="flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" style={{ paddingTop: entry.pt }}>
      <div className="flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-px w-full">
        <p
          className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-center w-full overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ color: entry.nameColor }}
        >
          {entry.name}
        </p>
        <div className="flex flex-[1_0_0] flex-col items-center justify-end min-h-px w-full relative">
          <div className="flex-[1_0_0] min-h-px w-full relative">
            <img alt="" src={entry.bar} className="absolute inset-0 size-full shrink-0" />
          </div>
          <div className="absolute left-0 right-0 top-0 flex flex-col items-center">
            <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white text-center w-[64px] h-[22px] flex items-center justify-center">
              {entry.label}
            </p>
            <div className="h-0 w-full relative">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" src={imgFrameDivider} className="block size-full shrink-0" />
              </div>
            </div>
            <div className="flex items-center w-full">
              <p className="flex-[1_0_0] font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white text-center">
                {entry.wins}
              </p>
              <p className="flex-[1_0_0] font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white text-center h-[22px] flex items-center justify-center">
                {entry.score}
              </p>
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
      <div className="bg-[#f0f2f5] flex-[1_0_0] min-h-px rounded-[16px] w-full relative overflow-hidden">
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] z-10">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="size-[24px] relative flex items-center justify-center"
          >
            <img alt="" src={imgHeaderButtonShape} className="absolute inset-0 size-full shrink-0" />
            <div className="absolute inset-[8.33%] flex items-center justify-center">
              <div className="absolute inset-[28.59%]">
                <img alt="close" src={imgClose} className="absolute inset-0 size-full shrink-0" />
              </div>
            </div>
          </button>
          <button type="button" className="size-[24px] relative rounded-[28px] flex items-center justify-center">
            <img alt="" src={imgHeaderButtonShape} className="absolute inset-0 size-full shrink-0" />
            <div className="absolute inset-[8.33%] flex items-center justify-center">
              <div className="absolute inset-[22.92%_45.83%]">
                <img alt="info" src={imgInfoBar} className="absolute inset-0 size-full shrink-0" />
              </div>
            </div>
          </button>
        </div>

        <div className="flex flex-col gap-[16px] h-full overflow-y-auto px-[16px] py-[48px]">
          <div className="flex flex-col gap-[4px] items-start w-full">
            <div className="bg-white border border-[#ced6e6] flex gap-[4px] items-center pl-[4px] pr-[10px] py-[2px] rounded-[6px] w-[107px]">
              <div className="relative size-[24px] overflow-clip shrink-0 flex items-center justify-center">
                <img alt="" src={imgChevron} className="size-[12px] rotate-90 shrink-0" />
              </div>
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black whitespace-nowrap">
                Dec. 2025
              </p>
            </div>

            <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] w-full mt-[12px]">
              <div
                className="flex gap-[10px] items-center p-[8px] rounded-[4px] w-full"
                style={{ background: 'linear-gradient(to right, #000 25.013%, rgba(0,0,0,0))' }}
              >
                <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                  Top 5
                </p>
              </div>
              <div className="flex h-[280px] items-end w-full">
                {TOP5.map((entry) => (
                  <Top5Bar key={entry.label} entry={entry} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#9ca3f1] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full shrink-0">
            <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] w-full">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                My Ranking
              </p>
            </div>
            <RankRow item={MY_RANKING} />
          </div>

          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full">
              <GradeHeader label="Diamond" variant="diamond" />
              {DIAMOND.map((r, i) => <RankRow key={i} item={r} />)}
            </div>
            <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full">
              <GradeHeader label="Platinum" variant="platinum" />
              {PLATINUM.map((r, i) => <RankRow key={i} item={r} />)}
            </div>
            <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full">
              <GradeHeader label="Gold" variant="gold" />
              {GOLD.map((r, i) => <RankRow key={i} item={r} />)}
            </div>
            <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full">
              <GradeHeader label="Silver" variant="silver" />
              {SILVER.map((r, i) => <RankRow key={i} item={r} />)}
            </div>
            <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full">
              <GradeHeader label="Bronze" variant="bronze" />
              {BRONZE.map((r, i) => <RankRow key={i} item={r} />)}
            </div>
            <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full">
              <GradeHeader label="Participant" variant="participant" />
              {PARTICIPANT.map((r, i) => <RankRow key={i} item={r} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
