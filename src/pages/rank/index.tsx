import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const ASSETS = {
  headerBtnBg: 'https://www.figma.com/api/mcp/asset/cb8a7b97-4aa1-42e0-b929-4dc3ffb9bbfb',
  infoIcon: 'https://www.figma.com/api/mcp/asset/f1a440b4-2c31-489d-932e-88f4c553ebcf',
  closeX: 'https://www.figma.com/api/mcp/asset/675d0735-5efb-4a3d-8834-517cd1d1548c',
  userImage: 'https://www.figma.com/api/mcp/asset/7356d67a-7161-4a9d-95d0-6f5f95ae501f',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/9a84c644-1ad8-4784-aa97-f1137a2f1c6b',
  highLightStroke: 'https://www.figma.com/api/mcp/asset/cfb8a9a8-0bef-4558-a794-c28c8e7343f3',
  innerLineStroke: 'https://www.figma.com/api/mcp/asset/29c2b311-5638-4aab-8796-e397dba36f21',
  gradeRect: 'https://www.figma.com/api/mcp/asset/2df110a4-69c5-44e7-9b98-f163fbaa0a30',
  gradeRectPlatinum: 'https://www.figma.com/api/mcp/asset/b2ee3aca-b9e0-4a02-b750-987c32d9fa03',
  vDivider: 'https://www.figma.com/api/mcp/asset/eff3cc1d-15c5-4cd4-8de7-389cd60d7d37',
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/4b5d8201-6991-4fe7-9e27-8bf0fe7777b1',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/0d90829b-d68f-4936-a08b-029e61c7aec2',
  closeHeaderIcon: 'https://www.figma.com/api/mcp/asset/1742aa52-5425-49b7-80fe-edea30c9288b',
  chevronDown: 'https://www.figma.com/api/mcp/asset/9def7a37-5146-4851-b593-8e829ed2aa73',
  bar4: 'https://www.figma.com/api/mcp/asset/201a4592-183f-4f2a-a5b6-bb84f22ee874',
  barDivider: 'https://www.figma.com/api/mcp/asset/2ea50704-7ced-4751-ae03-036d70b21e3a',
  bar2: 'https://www.figma.com/api/mcp/asset/b720f67e-6c61-49c5-b85d-5db49769a78f',
  bar1: 'https://www.figma.com/api/mcp/asset/7831e6c5-87c5-4468-a297-66841deb90ac',
  bar3: 'https://www.figma.com/api/mcp/asset/cbebc1c6-83a5-404e-a440-5cd24348dbc2',
  bar5: 'https://www.figma.com/api/mcp/asset/67f549b2-ad65-43fc-8ca0-32a0aeb377ba',
}

interface RankItem {
  rank: number | string
  name: string
  left: string
  right: string
  highlight?: boolean
}

const MY_RANKING: RankItem = { rank: 9, name: 'andy13', left: 'L4', right: 'W6' }

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
]

const TOP5 = [
  { place: '4th', name: 'Alfred', score: '12', record: 'W1', barImg: ASSETS.bar4, ptOffset: 153, color: '#969cd9' },
  { place: '2nd', name: 'bushman', score: '17', record: 'W1', barImg: ASSETS.bar2, ptOffset: 19, color: '#424cbb' },
  { place: '1st', name: 'ddadda', score: '20', record: 'W1', barImg: ASSETS.bar1, ptOffset: 0, color: '#2d39b4' },
  { place: '3rd', name: 'Samantha', score: '16', record: 'W1', barImg: ASSETS.bar3, ptOffset: 87, color: '#6c74ca' },
  { place: '5th', name: 'frifre', score: '8', record: 'W1', barImg: ASSETS.bar5, ptOffset: 193, color: '#c0c3e8' },
]

function Avatar20() {
  return (
    <div className="relative size-[20px] shrink-0">
      <div className="absolute bg-[#bbbfd0] overflow-clip rounded-full inset-[0.41%_0_-0.41%_0]">
        <img src={ASSETS.userImage} className="absolute inset-[-2.4%_-1.2%_-7.6%_-1.6%] block max-w-none size-full object-cover shrink-0" alt="" />
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img src={ASSETS.gradeBorder} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
        <div className="absolute inset-[5%]">
          <img src={ASSETS.highLightStroke} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
        </div>
        <div className="absolute inset-[6%]">
          <img src={ASSETS.innerLineStroke} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
        </div>
      </div>
    </div>
  )
}

function RankRow({ item }: { item: RankItem }) {
  const textColor = item.highlight ? 'text-white' : 'text-black'
  return (
    <div
      className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full shrink-0 rounded-[4px] ${
        item.highlight ? 'bg-[#9ca3f1]' : ''
      }`}
    >
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] ${textColor} text-center leading-[20px] w-[28px] shrink-0`}>
        {item.rank}
      </p>
      <div className="flex flex-[1_0_0] gap-[4px] items-center min-w-0">
        <Avatar20 />
        <p className={`flex-[1_0_0] font-['Pretendard',sans-serif] font-bold text-[16px] ${textColor} leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap min-w-0`}>
          {item.name}
        </p>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] ${textColor} text-right leading-[20px] w-[40px] shrink-0`}>
        {item.left}
      </p>
      <div className="self-stretch w-px bg-[#ced6e6] shrink-0" />
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] ${textColor} leading-[20px] w-[40px] shrink-0`}>
        {item.right}
      </p>
    </div>
  )
}

interface GradeIconProps {
  variant: 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'participant'
}

function GradeIcon({ variant }: GradeIconProps) {
  const img = variant === 'platinum' ? ASSETS.gradeRectPlatinum : ASSETS.gradeRect
  return (
    <div className="size-[20px] relative overflow-clip shrink-0">
      <img src={img} className="absolute inset-[14.58%_4.17%] block max-w-none size-full shrink-0" alt="" />
    </div>
  )
}

interface GradeTagProps {
  variant: 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'participant'
  label: string
}

function GradeTag({ variant, label }: GradeTagProps) {
  const gradients: Record<string, string> = {
    diamond: 'bg-gradient-to-r from-[#81a0b8] from-[25.013%] to-[rgba(129,160,184,0)]',
    platinum: 'bg-gradient-to-r from-[#afcfe2] from-[25.013%] to-[rgba(175,207,226,0)]',
    gold: 'bg-gradient-to-r from-[#e9d17f] from-[25.013%] to-[rgba(122,90,31,0)]',
    silver: 'bg-gradient-to-r from-[#bccfe3] from-[25.013%] to-[rgba(107,118,130,0)]',
    bronze: 'bg-gradient-to-r from-[#ebc7b3] from-[25.013%] to-[rgba(63,46,37,0)]',
    participant: 'bg-gradient-to-r from-[#8b8e98] to-[rgba(117,123,144,0)]',
  }
  return (
    <div className={`flex gap-[4px] items-center p-[8px] rounded-[4px] w-full shrink-0 ${gradients[variant]}`}>
      <GradeIcon variant={variant} />
      <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px] whitespace-nowrap">
        {label}
      </p>
    </div>
  )
}

function RankSection({ variant, label, items }: { variant: GradeTagProps['variant']; label: string; items: RankItem[] }) {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full shrink-0">
      <GradeTag variant={variant} label={label} />
      {items.map((item, idx) => (
        <RankRow key={`${item.rank}-${idx}`} item={item} />
      ))}
    </div>
  )
}

export function RankPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between px-[4px] w-full opacity-[0.66] shrink-0">
        <div className="flex gap-[4px] items-center justify-center shrink-0">
          <div className="relative h-[18px] w-[22px] overflow-hidden -scale-y-100 rotate-180">
            <img src={ASSETS.rorrLogoStroke} className="absolute inset-0 w-full h-full shrink-0" alt="" />
            <img src={ASSETS.rorrLogoExclude} className="absolute inset-0 w-full h-full shrink-0" alt="" />
          </div>
          <p className="text-white text-[14px] font-['Pretendard',sans-serif] font-light leading-[20px] whitespace-nowrap">RORR</p>
        </div>
        <button onClick={() => onNavigate(PAGES.MAIN)} className="size-[12.414px] shrink-0">
          <img src={ASSETS.closeHeaderIcon} className="w-full h-full shrink-0" alt="" />
        </button>
      </div>

      <div className="bg-[#f0f2f5] flex flex-[1_0_0] items-start min-h-0 min-w-[288px] overflow-hidden rounded-[16px] w-full relative">
        <div className="flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-0 px-[16px] py-[48px] overflow-y-auto">

          <div className="flex flex-col gap-[4px] items-start w-full shrink-0">
            <div className="bg-white border border-[#ced6e6] border-solid flex gap-[4px] items-center overflow-clip pl-[4px] pr-[10px] py-[2px] rounded-[6px] w-[107px] shrink-0">
              <div className="size-[24px] relative overflow-clip shrink-0">
                <img src={ASSETS.chevronDown} className="absolute inset-[33.33%_22.92%_32.83%_21.19%] block max-w-none shrink-0" alt="" />
              </div>
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black leading-[20px] whitespace-nowrap">Dec. 2025</p>
            </div>

            <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] w-full shrink-0">
              <div className="bg-gradient-to-r from-[25.013%] from-black gap-[10px] to-[rgba(0,0,0,0)] flex items-center p-[8px] rounded-[4px] w-full shrink-0">
                <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px] whitespace-nowrap">Top 5</p>
              </div>
              <div className="flex h-[280px] items-end w-full shrink-0">
                {TOP5.map((t) => (
                  <div key={t.place} className="flex flex-[1_0_0] flex-col h-full items-start min-w-0" style={{ paddingTop: `${t.ptOffset}px` }}>
                    <div className="flex flex-[1_0_0] flex-col gap-[4px] items-center min-h-0 w-full">
                      <div className="flex flex-col gap-[4px] items-center justify-end w-full shrink-0">
                        <p
                          className="font-['Pretendard',sans-serif] font-normal text-[12px] text-center leading-[1.2] w-full overflow-hidden text-ellipsis whitespace-nowrap"
                          style={{ color: t.color }}
                        >
                          {t.name}
                        </p>
                      </div>
                      <div className="flex flex-[1_0_0] flex-col items-center justify-end min-h-0 w-full relative">
                        <img src={t.barImg} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
                        <div className="absolute left-0 right-0 top-0 flex flex-col items-center">
                          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white text-center leading-[20px] w-[64px] h-[22px] flex items-center justify-center">
                            {t.place}
                          </p>
                          <div className="w-full h-px bg-white/30" />
                          <div className="flex items-center w-full">
                            <p className="flex-[1_0_0] font-['Pretendard',sans-serif] font-light text-[14px] text-white text-center leading-[20px]">
                              {t.record}
                            </p>
                            <p className="flex-[1_0_0] font-['Pretendard',sans-serif] font-bold text-[16px] text-white text-center leading-[20px] h-[22px]">
                              {t.score}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#9ca3f1] border-solid flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full shrink-0">
            <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] w-full shrink-0">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white leading-[20px] whitespace-nowrap">My Ranking</p>
            </div>
            <RankRow item={MY_RANKING} />
          </div>

          <div className="flex flex-col gap-[16px] items-start w-full shrink-0">
            <RankSection variant="diamond" label="Diamond" items={DIAMOND} />
            <RankSection variant="platinum" label="Platinum" items={PLATINUM} />
            <RankSection variant="gold" label="Gold" items={GOLD} />
            <RankSection variant="silver" label="Silver" items={SILVER} />
            <RankSection variant="bronze" label="Bronze" items={BRONZE} />
            <RankSection variant="participant" label="Participant" items={PARTICIPANT} />
          </div>
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px] overflow-clip">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="size-[24px] relative shrink-0"
            aria-label="close"
          >
            <img src={ASSETS.headerBtnBg} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
            <div className="absolute inset-[8.33%] overflow-clip">
              <img src={ASSETS.closeX} className="absolute inset-[28.59%] block max-w-none shrink-0" alt="" />
            </div>
          </button>
          <button type="button" className="size-[24px] relative rounded-[28px] shrink-0" aria-label="info">
            <img src={ASSETS.headerBtnBg} className="absolute inset-0 block max-w-none size-full shrink-0" alt="" />
            <div className="absolute inset-[8.33%] overflow-clip">
              <img src={ASSETS.infoIcon} className="absolute inset-[22.92%_45.83%] block max-w-none shrink-0" alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
