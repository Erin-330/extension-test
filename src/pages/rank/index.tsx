import { PAGES } from '../../shared/constants/pages'
import { FOLLOW_ASSETS } from '../../features/follow/ui/assets'

type Props = { onNavigate: (page: string) => void }

const RANK_ASSETS = {
  closeBtnBg: 'https://www.figma.com/api/mcp/asset/d1d2fa5d-2726-41a7-bc4f-7a0cc0aa6d53',
  closeBtnX: 'https://www.figma.com/api/mcp/asset/f3387d43-cb2f-4f43-9d94-2a39696c290d',
  infoIcon: 'https://www.figma.com/api/mcp/asset/463f236d-7920-4369-b526-eaff0f6e6bb0',
  profileImg: 'https://www.figma.com/api/mcp/asset/c8b9a661-b296-43c7-9413-4235c80a6b9c',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/593e4491-572b-4448-96e8-b88e62d78553',
  highlightStroke: 'https://www.figma.com/api/mcp/asset/f48999f4-981d-48b3-9d9d-42e2d84f3c6b',
  innerLineStroke: 'https://www.figma.com/api/mcp/asset/e3c9a8ce-4822-4268-9bdb-4dc4e3a1a1e9',
  gradeIconRect: 'https://www.figma.com/api/mcp/asset/b06afa8f-2725-4fab-9822-9fc1f8005a0c',
  gradeIconRectPlatinum: 'https://www.figma.com/api/mcp/asset/d5d1ea3e-c5d1-4ce7-be24-abe81419c103',
  divider: 'https://www.figma.com/api/mcp/asset/39625e5d-ad47-4156-a9c4-751830fa9cd4',
  topRightX: 'https://www.figma.com/api/mcp/asset/d7592d12-5b70-4238-8033-b0ad2901d364',
  dropdownChevron: 'https://www.figma.com/api/mcp/asset/b3c331f9-8f50-4843-918a-d1b4cda1f846',
  top5Bar1: 'https://www.figma.com/api/mcp/asset/3edd2d64-f061-4414-8de7-dafbc107d8f4',
  top5Bar2: 'https://www.figma.com/api/mcp/asset/1186c7da-26db-473d-8736-0b48c93ef562',
  top5Bar3: 'https://www.figma.com/api/mcp/asset/5aa35d44-cd5f-423c-b009-890b68e3b388',
  top5Bar4: 'https://www.figma.com/api/mcp/asset/fc438698-0431-4001-a807-d0258ce15858',
  top5Bar5: 'https://www.figma.com/api/mcp/asset/9b59fc84-2f93-4b11-b7cf-bdfc7227c2c4',
  frame2549: 'https://www.figma.com/api/mcp/asset/b97a2125-2b74-4805-9e20-075a1d2c0864',
} as const

type Grade = 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'participant'

const GRADE_GRADIENTS: Record<Grade, string> = {
  diamond: 'from-[#81a0b8] to-[rgba(129,160,184,0)]',
  platinum: 'from-[#afcfe2] to-[rgba(175,207,226,0)]',
  gold: 'from-[#e9d17f] to-[rgba(122,90,31,0)]',
  silver: 'from-[#bccfe3] to-[rgba(107,118,130,0)]',
  bronze: 'from-[#ebc7b3] to-[rgba(63,46,37,0)]',
  participant: 'from-[#8b8e98] to-[rgba(117,123,144,0)]',
}

const GRADE_LABELS: Record<Grade, string> = {
  diamond: 'Diamond',
  platinum: 'Platinum',
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  participant: 'Participant',
}

type RankItem = {
  rank: number | '-'
  name: string
  last: string
  streak: string
  highlight?: boolean
}

const TOP5 = [
  { rank: '4th', name: 'Alfred', wins: 12, color: '#969cd9', bar: RANK_ASSETS.top5Bar1, pt: 153 },
  { rank: '2nd', name: 'bushman', wins: 17, color: '#424cbb', bar: RANK_ASSETS.top5Bar2, pt: 19 },
  { rank: '1st', name: 'ddadda', wins: 20, color: '#2d39b4', bar: RANK_ASSETS.top5Bar3, pt: 0 },
  { rank: '3rd', name: 'Samantha', wins: 16, color: '#6c74ca', bar: RANK_ASSETS.top5Bar4, pt: 87 },
  { rank: '5th', name: 'frifre', wins: 8, color: '#c0c3e8', bar: RANK_ASSETS.top5Bar5, pt: 193 },
] as const

const SECTIONS: { grade: Grade; items: RankItem[] }[] = [
  {
    grade: 'diamond',
    items: [
      { rank: 6, name: 'namcheondong', last: 'W3', streak: 'W8' },
      { rank: 7, name: 'kkkim', last: 'L2', streak: 'W7' },
    ],
  },
  {
    grade: 'platinum',
    items: [
      { rank: 8, name: 'OrangeCan', last: 'W1', streak: 'W7' },
      { rank: 9, name: 'Andy', last: 'W4', streak: 'W6', highlight: true },
      { rank: 10, name: 'Zammin', last: 'W2', streak: 'W6' },
    ],
  },
  {
    grade: 'gold',
    items: [
      { rank: 11, name: 'TrumpKing', last: 'L4', streak: 'W6' },
      { rank: 12, name: 'wwifjdksi5439', last: 'L2', streak: 'W6' },
      { rank: 13, name: 'Greatman', last: 'L4', streak: 'W5' },
      { rank: 14, name: 'MadeinChina', last: 'L5', streak: 'W5' },
    ],
  },
  {
    grade: 'silver',
    items: [
      { rank: 15, name: 'TrumpKing', last: 'L4', streak: 'W6' },
      { rank: 16, name: 'wwifjdksi5439', last: 'L2', streak: 'W6' },
      { rank: 17, name: 'Greatman', last: 'L4', streak: 'W5' },
      { rank: 18, name: 'MadeinChina', last: 'L5', streak: 'W5' },
    ],
  },
  {
    grade: 'bronze',
    items: [
      { rank: 19, name: 'TrumpKing', last: 'L4', streak: 'W6' },
      { rank: 20, name: 'wwifjdksi5439', last: 'L2', streak: 'W6' },
      { rank: 21, name: 'Greatman', last: 'L4', streak: 'W5' },
      { rank: 22, name: 'MadeinChina', last: 'L5', streak: 'W5' },
    ],
  },
  {
    grade: 'participant',
    items: [
      { rank: '-', name: 'Asde', last: 'L3', streak: 'W1' },
      { rank: '-', name: 'rodkdufs', last: 'L2', streak: 'W1' },
    ],
  },
]

function AppTopBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] shrink-0 w-full">
      <div className="flex gap-[4px] items-center justify-center">
        <div className="relative h-[18px] w-[22px]">
          <img alt="" src={FOLLOW_ASSETS.rorrLogoStroke} className="absolute inset-0 size-full" />
          <img alt="" src={FOLLOW_ASSETS.rorrLogoExclude} className="absolute inset-0 size-full" />
        </div>
        <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white">
          RORR
        </p>
      </div>
      <button type="button" onClick={onClose} className="size-[12.414px] flex items-center justify-center">
        <img alt="close" src={RANK_ASSETS.topRightX} className="block size-full" />
      </button>
    </div>
  )
}

function ProfileAvatar({ size = 20 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-[3.98%_3.57%_3.16%_3.57%] rounded-full overflow-hidden bg-[#bbbfd0]">
        <img alt="" src={RANK_ASSETS.profileImg} className="block size-full object-cover" />
      </div>
      <img alt="" src={RANK_ASSETS.gradeBorder} className="absolute inset-0 size-full" />
    </div>
  )
}

function GradeIcon({ grade }: { grade: Grade }) {
  if (grade === 'participant') return null
  const isPlatinum = grade === 'platinum'
  return (
    <div className="relative size-[20px] overflow-hidden shrink-0">
      <img
        alt=""
        src={isPlatinum ? RANK_ASSETS.gradeIconRectPlatinum : RANK_ASSETS.gradeIconRect}
        className="absolute inset-[14.58%_4.17%] size-[80%]"
      />
    </div>
  )
}

function GradeTag({ grade }: { grade: Grade }) {
  const gradient = GRADE_GRADIENTS[grade]
  return (
    <div className={`bg-gradient-to-r ${gradient} from-[25.013%] flex gap-[4px] items-center p-[8px] rounded-[4px] w-full`}>
      <GradeIcon grade={grade} />
      <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
        {GRADE_LABELS[grade]}
      </p>
    </div>
  )
}

function RankListItem({ item }: { item: RankItem }) {
  const textCls = item.highlight ? 'text-white' : 'text-black'
  return (
    <div
      className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full ${item.highlight ? 'bg-[#9ca3f1] rounded-[4px]' : ''}`}
    >
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-center w-[28px] ${textCls}`}>
        {item.rank}
      </p>
      <div className="flex flex-1 gap-[4px] items-center min-w-0">
        <ProfileAvatar />
        <p className={`flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap ${textCls}`}>
          {item.name}
        </p>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-right w-[40px] ${textCls}`}>
        {item.last}
      </p>
      <div className="self-stretch w-[1px] bg-[#ced6e6]" />
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-[40px] ${textCls}`}>
        {item.streak}
      </p>
    </div>
  )
}

function Top5Bar({ data }: { data: typeof TOP5[number] }) {
  return (
    <div className="flex flex-1 flex-col items-start h-full" style={{ paddingTop: data.pt }}>
      <div className="flex flex-1 flex-col gap-[4px] items-center w-full min-h-0">
        <div className="flex flex-col items-center justify-end w-full">
          <p
            className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-center w-full overflow-hidden text-ellipsis whitespace-nowrap"
            style={{ color: data.color }}
          >
            {data.name}
          </p>
        </div>
        <div className="flex-1 relative w-full min-h-0">
          <img alt="" src={data.bar} className="absolute inset-0 size-full" />
          <div className="absolute left-0 right-0 top-0 flex flex-col items-center">
            <div className="h-[22px] flex items-center justify-center w-[64px]">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-center text-white">
                {data.rank}
              </p>
            </div>
            <div className="h-[1px] w-full bg-white/30" />
            <div className="flex items-center w-full text-white">
              <p className="flex-1 font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-center">
                W1
              </p>
              <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-center">
                {data.wins}
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
      <AppTopBar onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="relative backdrop-blur-[3px] bg-[#f0f2f5] flex-1 min-h-0 overflow-hidden rounded-[16px] w-full">
        <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-[12px]">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="relative size-[24px] rounded-full overflow-hidden flex items-center justify-center"
            aria-label="close"
          >
            <img alt="" src={RANK_ASSETS.closeBtnBg} className="absolute inset-0 size-full" />
            <img alt="" src={RANK_ASSETS.closeBtnX} className="relative w-[8px] h-[8px]" />
          </button>
          <button
            type="button"
            className="relative size-[24px] rounded-full overflow-hidden flex items-center justify-center"
            aria-label="info"
          >
            <img alt="" src={RANK_ASSETS.closeBtnBg} className="absolute inset-0 size-full" />
            <img alt="" src={RANK_ASSETS.infoIcon} className="relative w-[1.7px] h-[10.7px]" />
          </button>
        </div>

        <div className="flex flex-col gap-[16px] items-center h-full overflow-y-auto px-[16px] py-[48px]">
          <div className="flex flex-col gap-[4px] items-start w-full">
            <button
              type="button"
              className="bg-white border border-[#ced6e6] border-solid flex gap-[4px] items-center overflow-hidden pl-[4px] pr-[10px] py-[2px] rounded-[6px] w-[107px]"
            >
              <div className="size-[24px] flex items-center justify-center">
                <img alt="" src={RANK_ASSETS.dropdownChevron} className="block w-[10.7px] h-[5.6px]" />
              </div>
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] text-black leading-[20px]">
                Dec. 2025
              </p>
            </button>

            <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] w-full">
              <div className="bg-gradient-to-r from-black from-[25.013%] to-[rgba(0,0,0,0)] flex gap-[10px] items-center p-[8px] rounded-[4px] w-full">
                <div className="size-[20px] flex items-center justify-center text-yellow-400">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-[16px] h-[16px]">
                    <path d="M3 6l4 4 3-6 3 6 4-4-2 10H5z" />
                  </svg>
                </div>
                <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                  Top 5
                </p>
              </div>
              <div className="flex h-[280px] items-end w-full">
                {TOP5.map((bar) => (
                  <Top5Bar key={bar.name} data={bar} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#9ca3f1] border-solid flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full">
            <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] w-full">
              <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white">
                My Ranking
              </p>
            </div>
            <RankListItem item={{ rank: 9, name: 'andy13', last: 'L4', streak: 'W6' }} />
          </div>

          <div className="flex flex-col gap-[16px] items-start w-full">
            {SECTIONS.map((section) => (
              <div
                key={section.grade}
                className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full"
              >
                <GradeTag grade={section.grade} />
                {section.items.map((item) => (
                  <RankListItem key={`${section.grade}-${item.rank}-${item.name}`} item={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
