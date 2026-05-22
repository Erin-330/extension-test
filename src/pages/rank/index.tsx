import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ASSETS = {
  headerButtonShape: 'https://www.figma.com/api/mcp/asset/0cd25407-3987-4d73-a8d0-014f2b52286f',
  infoVector: 'https://www.figma.com/api/mcp/asset/32da3517-e30f-43d1-90df-232b4ec10d85',
  closeStroke: 'https://www.figma.com/api/mcp/asset/53cb05d1-7e3b-4b57-aa78-2a61068abc12',
  avatar: 'https://www.figma.com/api/mcp/asset/fe9b0f50-4fbc-4f93-8859-e352ed104b87',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/21e7c221-f469-4e88-af10-0f77031c2535',
  highLight: 'https://www.figma.com/api/mcp/asset/f957f168-7d13-4014-b2d3-f072a7c0e3c0',
  innerLine: 'https://www.figma.com/api/mcp/asset/45e25596-7fd1-4109-8d25-356a8228d6cd',
  gradeRectangle: 'https://www.figma.com/api/mcp/asset/c0c0683d-c845-43e4-b093-54929393a258',
  gradeRectangle1: 'https://www.figma.com/api/mcp/asset/d87c293a-a53e-424f-ab9c-79b2f4f240c9',
  vSeparator: 'https://www.figma.com/api/mcp/asset/0edc06d1-1af4-47fb-85c3-d2895fdc745e',
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/92308f01-2cc4-43a2-bf86-872f0d771dfb',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/aed05ca5-b4c7-4236-aa35-1dbe2b8fa455',
  headerCloseUnion: 'https://www.figma.com/api/mcp/asset/0ef68d9e-5d0a-4446-b484-6c068d47bc45',
  chevron: 'https://www.figma.com/api/mcp/asset/2e612e4a-a27d-4f6a-b48c-53e95c11e605',
  bar997: 'https://www.figma.com/api/mcp/asset/b8587de0-ae85-43ee-9ad3-23eb87dbf0fb',
  barFrame: 'https://www.figma.com/api/mcp/asset/2bd6c9cf-cd5e-44a4-a744-e1015a371f97',
  bar998: 'https://www.figma.com/api/mcp/asset/0feafcfa-cc6f-43ed-8188-ea3fda30b8cd',
  bar999: 'https://www.figma.com/api/mcp/asset/911ab821-5339-49dc-b3c8-01bc80f86d39',
  bar1000: 'https://www.figma.com/api/mcp/asset/f609af0c-2d46-412a-915f-b172af7f4e75',
  bar1001: 'https://www.figma.com/api/mcp/asset/12daa5e2-795a-4614-b290-caee113b5a37',
}

type RankItem = { rank: number | string; name: string; leftStat: string; rightStat: string; highlighted?: boolean }
type RankSection = { title: string; gradient: string; iconSpriteUrl?: string; iconInset?: string; items: RankItem[] }

const MY_RANK: RankItem = { rank: 9, name: 'andy13', leftStat: 'L4', rightStat: 'W6' }

const SECTIONS: RankSection[] = [
  {
    title: 'Diamond',
    gradient: 'bg-gradient-to-r from-[#81a0b8] from-[25.013%] to-[rgba(129,160,184,0)]',
    iconSpriteUrl: ASSETS.gradeRectangle,
    iconInset: 'inset-[20.83%_12.5%]',
    items: [
      { rank: 6, name: 'namcheondong', leftStat: 'W3', rightStat: 'W8' },
      { rank: 7, name: 'kkkim', leftStat: 'L2', rightStat: 'W7' },
    ],
  },
  {
    title: 'Platinum',
    gradient: 'bg-gradient-to-r from-[#afcfe2] from-[25.013%] to-[rgba(175,207,226,0)]',
    iconSpriteUrl: ASSETS.gradeRectangle1,
    iconInset: 'inset-[14.58%_2.08%]',
    items: [
      { rank: 8, name: 'OrangeCan', leftStat: 'W1', rightStat: 'W7' },
      { rank: 9, name: 'Andy', leftStat: 'W4', rightStat: 'W6', highlighted: true },
      { rank: 10, name: 'Zammin', leftStat: 'W2', rightStat: 'W6' },
    ],
  },
  {
    title: 'Gold',
    gradient: 'bg-gradient-to-r from-[#e9d17f] from-[25.013%] to-[rgba(122,90,31,0)]',
    iconSpriteUrl: ASSETS.gradeRectangle,
    iconInset: 'inset-[14.58%_4.17%]',
    items: [
      { rank: 11, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
      { rank: 12, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: 13, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
      { rank: 14, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    title: 'Silver',
    gradient: 'bg-gradient-to-r from-[#bccfe3] from-[25.013%] to-[rgba(107,118,130,0)]',
    iconSpriteUrl: ASSETS.gradeRectangle,
    iconInset: 'inset-[14.58%_4.17%]',
    items: [
      { rank: 15, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
      { rank: 16, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: 17, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
      { rank: 18, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    title: 'Bronze',
    gradient: 'bg-gradient-to-r from-[#ebc7b3] from-[25.013%] to-[rgba(63,46,37,0)]',
    iconSpriteUrl: ASSETS.gradeRectangle,
    iconInset: 'inset-[14.58%_4.17%]',
    items: [
      { rank: 19, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
      { rank: 20, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
      { rank: 21, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
      { rank: 22, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
    ],
  },
  {
    title: 'Participant',
    gradient: 'bg-gradient-to-r from-[#8b8e98] to-[rgba(117,123,144,0)]',
    iconSpriteUrl: ASSETS.gradeRectangle,
    iconInset: 'inset-[14.58%_4.17%]',
    items: [
      { rank: '-', name: 'Asde', leftStat: 'L3', rightStat: 'W1' },
      { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
      { rank: '-', name: 'kim33', leftStat: 'L2', rightStat: 'W1' },
      { rank: '-', name: 'noobking', leftStat: 'L2', rightStat: 'W1' },
    ],
  },
]

const TOP5_BARS = [
  { place: '4th', name: 'Alfred', score: 12, pt: 153, bar: ASSETS.bar997, nameColor: 'text-[#969cd9]' },
  { place: '2nd', name: 'bushman', score: 17, pt: 19, bar: ASSETS.bar998, nameColor: 'text-[#424cbb]' },
  { place: '1st', name: 'ddadda', score: 20, pt: 0, bar: ASSETS.bar999, nameColor: 'text-[#2d39b4]' },
  { place: '3rd', name: 'Samantha', score: 16, pt: 87, bar: ASSETS.bar1000, nameColor: 'text-[#6c74ca]' },
  { place: '5th', name: 'frifre', score: 8, pt: 193, bar: ASSETS.bar1001, nameColor: 'text-[#c0c3e8]' },
]

function ProfileWithFrame() {
  return (
    <div className="relative shrink-0 w-[20px] h-[20px]">
      <div className="absolute inset-[3.98%_3.57%_3.16%_3.57%] overflow-clip rounded-full bg-[#bbbfd0]">
        <img alt="" src={ASSETS.avatar} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img alt="" src={ASSETS.gradeBorder} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-[5%]"><img alt="" src={ASSETS.highLight} className="absolute inset-0 w-full h-full" /></div>
        <div className="absolute inset-[6%]"><img alt="" src={ASSETS.innerLine} className="absolute inset-0 w-full h-full" /></div>
      </div>
    </div>
  )
}

function RankRow({ item, highlightedSection }: { item: RankItem; highlightedSection?: boolean }) {
  const hi = item.highlighted
  return (
    <div className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full shrink-0 ${hi ? 'bg-[#9ca3f1] rounded-[4px]' : ''} ${highlightedSection ? '' : ''}`}>
      <p className={`font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-center w-[28px] shrink-0 ${hi ? 'text-white' : 'text-black'}`}>
        {item.rank}
      </p>
      <div className="flex flex-[1_0_0] gap-[4px] items-center min-w-px">
        <ProfileWithFrame />
        <p className={`font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] overflow-hidden text-ellipsis whitespace-nowrap flex-1 ${hi ? 'text-white' : 'text-black'}`}>
          {item.name}
        </p>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-right w-[40px] shrink-0 ${hi ? 'text-white' : 'text-black'}`}>
        {item.leftStat}
      </p>
      <div className="shrink-0 self-stretch w-px bg-[#ced6e6]" />
      <p className={`font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] w-[40px] shrink-0 ${hi ? 'text-white' : 'text-black'}`}>
        {item.rightStat}
      </p>
    </div>
  )
}

export function RankPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] shrink-0 w-full">
        <div className="flex gap-[4px] items-center justify-center">
          <div className="relative w-[22px] h-[18px] overflow-hidden">
            <img alt="" src={ASSETS.rorrLogoStroke} className="absolute inset-[0.03%_19.61%_-0.09%_19.66%] w-auto h-auto" />
            <img alt="" src={ASSETS.rorrLogoExclude} className="absolute inset-[2.93%_22.01%_2.81%_22.06%] w-auto h-auto" />
          </div>
          <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white">RORR</p>
        </div>
        <button type="button" onClick={() => onNavigate(PAGES.MAIN)} className="shrink-0 w-[12.414px] h-[12.414px]" aria-label="close">
          <img alt="close" src={ASSETS.headerCloseUnion} className="shrink-0 w-[12.414px] h-[12.414px]" />
        </button>
      </div>
      <div className="bg-[#f0f2f5] flex flex-[1_0_0] items-start min-w-[288px] overflow-y-auto relative rounded-[16px] w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[16px] items-center min-w-px px-[16px] py-[48px] relative w-full">
          <div className="flex flex-col gap-[4px] items-start w-full">
            <div className="bg-white border border-[#ced6e6] border-solid flex gap-[4px] items-center overflow-clip pl-[4px] pr-[10px] py-[2px] rounded-[6px] shrink-0 w-[107px]">
              <div className="overflow-clip relative shrink-0 w-[24px] h-[24px]">
                <div className="absolute inset-[33.33%_22.92%_32.83%_21.19%] rotate-90">
                  <img alt="" src={ASSETS.chevron} className="absolute inset-0 w-full h-full" />
                </div>
              </div>
              <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black whitespace-nowrap">
                Dec. 2025
              </p>
            </div>
            <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
              <div className="bg-gradient-to-r from-[25.013%] from-black gap-[10px] flex items-center p-[8px] rounded-[4px] w-full to-[rgba(0,0,0,0)]">
                <div className="overflow-clip relative shrink-0 w-[20px] h-[20px]">
                  <div className="absolute inset-[14.58%_4.17%] overflow-hidden">
                    <img alt="" src={ASSETS.gradeRectangle} className="absolute h-[538.24%] left-[-268.18%] top-[-400%] w-[415.91%] max-w-none" />
                  </div>
                </div>
                <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white whitespace-nowrap">
                  Top 5
                </p>
              </div>
              <div className="flex h-[280px] items-end w-full">
                {TOP5_BARS.map((b) => (
                  <div key={b.place} className="flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" style={{ paddingTop: `${b.pt}px` }}>
                    <div className="flex flex-1 flex-col gap-[4px] items-center min-h-px relative w-full">
                      <p className={`font-['Pretendard',sans-serif] font-normal leading-[1.2] text-[12px] text-center overflow-hidden text-ellipsis w-full whitespace-nowrap ${b.nameColor}`}>
                        {b.name}
                      </p>
                      <div className="flex flex-1 flex-col items-center justify-end min-h-px relative w-full">
                        <div className="flex-1 min-h-px relative w-full">
                          <img alt="" src={b.bar} className="absolute inset-0 w-full h-full" />
                        </div>
                        <div className="absolute flex flex-col items-center left-0 right-0 top-0">
                          <p className="font-['Pretendard',sans-serif] font-bold h-[22px] leading-[20px] text-[16px] text-center text-white w-[64px]">
                            {b.place}
                          </p>
                          <div className="h-px w-full">
                            <img alt="" src={ASSETS.barFrame} className="block w-full h-full" />
                          </div>
                          <div className="flex items-center text-center text-white w-full">
                            <p className="flex-[1_0_0] font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] min-w-px">W1</p>
                            <p className="flex-[1_0_0] font-['Pretendard',sans-serif] font-bold h-[22px] text-[16px] leading-[20px] min-w-px">
                              {b.score}
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
          <div className="bg-white border border-[#9ca3f1] border-solid flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
            <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] w-full shrink-0">
              <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white whitespace-nowrap">
                My Ranking
              </p>
            </div>
            <RankRow item={MY_RANK} />
          </div>
          <div className="flex flex-col gap-[16px] items-start w-full">
            {SECTIONS.map((section) => (
              <div key={section.title} className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] shrink-0 w-full">
                <div className={`flex items-center gap-[4px] p-[8px] rounded-[4px] w-full shrink-0 ${section.gradient}`}>
                  {section.iconSpriteUrl && (
                    <div className="overflow-clip relative shrink-0 w-[20px] h-[20px]">
                      <div className={`absolute ${section.iconInset ?? 'inset-0'} overflow-hidden`}>
                        <img alt="" src={section.iconSpriteUrl} className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                    </div>
                  )}
                  <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white whitespace-nowrap">
                    {section.title}
                  </p>
                </div>
                {section.items.map((item, idx) => (
                  <RankRow key={`${section.title}-${idx}`} item={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute flex items-center justify-between left-0 right-0 top-0 p-[12px] overflow-clip">
          <button type="button" onClick={() => onNavigate(PAGES.MAIN)} className="relative shrink-0 w-[24px] h-[24px]" aria-label="close">
            <img alt="" src={ASSETS.headerButtonShape} className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[28.59%]">
                <img alt="" src={ASSETS.closeStroke} className="absolute inset-0 w-full h-full" />
              </div>
            </div>
          </button>
          <button type="button" className="relative shrink-0 w-[24px] h-[24px] rounded-[28px]" aria-label="info">
            <img alt="" src={ASSETS.headerButtonShape} className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-[8.33%] overflow-clip">
              <div className="absolute inset-[22.92%_45.83%]">
                <img alt="" src={ASSETS.infoVector} className="absolute inset-0 w-full h-full" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
