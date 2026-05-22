import { Fragment } from 'react'
import { PAGES } from '../../shared/constants/pages'

interface Props {
  onNavigate: (page: string) => void
}

const ASSETS = {
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/40e20a78-0795-4cc2-b6fe-d4f9ef8226a1',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/b13d45e3-570a-4128-88e6-45ecb441f315',
  closeIconUnion: 'https://www.figma.com/api/mcp/asset/6b95a9e8-9bef-4455-af38-7234b1b6dd37',
  closeButtonShape: 'https://www.figma.com/api/mcp/asset/ed601d2d-8882-499d-b454-f625dc7de432',
  closeButtonX: 'https://www.figma.com/api/mcp/asset/48c9d3e5-cfc1-44de-8411-70c781300cb9',
  infoIconVector: 'https://www.figma.com/api/mcp/asset/82470a76-49f0-4441-93f8-1f4de1a66f74',
  dropdownArrow: 'https://www.figma.com/api/mcp/asset/e5ad4b81-ccdc-4126-b0c2-b88cdfd17c41',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/c9b5430f-6b02-4134-9388-35ce1d562bec',
  highLightStroke: 'https://www.figma.com/api/mcp/asset/085ad24e-ebfd-4ebd-a175-3552c9c4dd16',
  innerLineStroke: 'https://www.figma.com/api/mcp/asset/e12cee00-e82b-4775-ae89-24cea10b5a93',
  avatarSample: 'https://www.figma.com/api/mcp/asset/2f00cdc7-b675-413a-9255-aec8f9ad4301',
  verticalDivider: 'https://www.figma.com/api/mcp/asset/972cc3a2-d844-473a-bff6-b117f83f93a1',
  gradeIconRect: 'https://www.figma.com/api/mcp/asset/68fa7528-07f4-4e9f-8ddb-9623a3260383',
  gradeIconPlatinum: 'https://www.figma.com/api/mcp/asset/592494c7-5ece-4fc0-a9c5-820415291bc1',
  bar4th: 'https://www.figma.com/api/mcp/asset/4d7c2c33-b58f-4392-baf5-97630401cdf9',
  bar2nd: 'https://www.figma.com/api/mcp/asset/5376dbc8-7369-418b-8e23-3d825ff9f576',
  bar1st: 'https://www.figma.com/api/mcp/asset/0492fa27-690d-4048-ae47-480cde2a701c',
  bar3rd: 'https://www.figma.com/api/mcp/asset/576ec59e-4467-462d-ae43-0a6a9bfe553d',
  bar5th: 'https://www.figma.com/api/mcp/asset/cbc91006-aeec-4e5d-b315-01aed4e1c3d0',
  barLineDivider: 'https://www.figma.com/api/mcp/asset/1161dce8-59c0-4cee-aa1c-d81925c774a6',
}

function Avatar({ size }: { size: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-[3.98%_3.57%_3.16%_3.57%] overflow-hidden rounded-full bg-[#bbbfd0]">
        <img src={ASSETS.avatarSample} className="absolute inset-0 w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img src={ASSETS.gradeBorder} className="absolute inset-0 w-full h-full" alt="" />
        <div className="absolute inset-[5%]">
          <img src={ASSETS.highLightStroke} className="absolute inset-0 w-full h-full" alt="" />
        </div>
        <div className="absolute inset-[6%]">
          <img src={ASSETS.innerLineStroke} className="absolute inset-0 w-full h-full" alt="" />
        </div>
      </div>
    </div>
  )
}

interface BarProps {
  name: string
  nameColor: string
  rankLabel: string
  stat: string
  score: string
  topPx: number
  barUrl: string
}

function Bar({ name, nameColor, rankLabel, stat, score, topPx, barUrl }: BarProps) {
  return (
    <div className="flex flex-1 flex-col h-full items-stretch" style={{ paddingTop: topPx }}>
      <p
        className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full"
        style={{ color: nameColor }}
      >
        {name}
      </p>
      <div className="flex-1 relative w-full">
        <img src={barUrl} className="absolute inset-0 w-full h-full" alt="" />
        <div className="absolute left-0 right-0 top-0 flex flex-col items-center">
          <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-center text-white w-[64px] h-[22px] flex items-center justify-center">
            {rankLabel}
          </p>
          <img src={ASSETS.barLineDivider} className="w-full h-[1px]" alt="" />
          <div className="flex items-center w-full text-white">
            <p className="flex-1 font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-center">
              {stat}
            </p>
            <p className="flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-center">
              {score}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface GradeSectionProps {
  gradient: string
  iconUrl: string | null
  name: string
  rows: { rank: string; name: string; left: string; right: string; highlight?: boolean }[]
}

function GradeSection({ gradient, iconUrl, name, rows }: GradeSectionProps) {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[10px] p-[4px] rounded-[8px] w-full shrink-0">
      <div className={`flex items-center gap-[4px] p-[8px] rounded-[4px] w-full ${gradient}`}>
        {iconUrl && <img src={iconUrl} className="shrink-0 w-[20px] h-[20px]" alt="" />}
        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">
          {name}
        </p>
      </div>
      {rows.map((row, idx) => (
        <div
          key={idx}
          className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full ${row.highlight ? 'bg-[#9ca3f1]' : ''}`}
        >
          <p
            className={`shrink-0 font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-center w-[28px] ${row.highlight ? 'text-white' : 'text-black'}`}
          >
            {row.rank}
          </p>
          <div className="flex flex-1 min-w-0 gap-[4px] items-center">
            <Avatar size={20} />
            <p
              className={`flex-1 font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap ${row.highlight ? 'text-white' : 'text-black'}`}
            >
              {row.name}
            </p>
          </div>
          <p
            className={`shrink-0 font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-right w-[40px] ${row.highlight ? 'text-white' : 'text-black'}`}
          >
            {row.left}
          </p>
          <img src={ASSETS.verticalDivider} className="shrink-0 w-[1px] h-[20px]" alt="" />
          <p
            className={`shrink-0 font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] w-[40px] ${row.highlight ? 'text-white' : 'text-black'}`}
          >
            {row.right}
          </p>
        </div>
      ))}
    </div>
  )
}

const TOP5 = [
  { name: 'Alfred', nameColor: '#969cd9', rankLabel: '4th', stat: 'W1', score: '12', topPx: 153, barUrl: ASSETS.bar4th },
  { name: 'bushman', nameColor: '#424cbb', rankLabel: '2nd', stat: 'W1', score: '17', topPx: 19, barUrl: ASSETS.bar2nd },
  { name: 'ddadda', nameColor: '#2d39b4', rankLabel: '1st', stat: 'W1', score: '20', topPx: 0, barUrl: ASSETS.bar1st },
  { name: 'Samantha', nameColor: '#6c74ca', rankLabel: '3rd', stat: 'W1', score: '16', topPx: 87, barUrl: ASSETS.bar3rd },
  { name: 'frifre', nameColor: '#c0c3e8', rankLabel: '5th', stat: 'W1', score: '8', topPx: 193, barUrl: ASSETS.bar5th },
]

export function RankPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px] font-['Pretendard',sans-serif]">
      {/* Outer RORR header */}
      <div className="flex h-[48px] items-center justify-between opacity-60 px-[4px] w-full shrink-0">
        <div className="flex gap-[4px] items-center">
          <div className="relative w-[22px] h-[18px] shrink-0">
            <img src={ASSETS.rorrLogoStroke} className="absolute inset-0 w-full h-full" alt="" />
            <img src={ASSETS.rorrLogoExclude} className="absolute inset-0 w-full h-full" alt="" />
          </div>
          <p className="font-light text-[14px] leading-[20px] text-white">RORR</p>
        </div>
        <button onClick={() => onNavigate(PAGES.MAIN)} className="shrink-0">
          <img src={ASSETS.closeIconUnion} className="shrink-0 w-[12px] h-[12px]" alt="close" />
        </button>
      </div>

      <div className="relative flex-1 min-h-0 w-full bg-[#f0f2f5] rounded-[16px] overflow-hidden">
        {/* UI Header */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[12px] z-10">
          <button onClick={() => onNavigate(PAGES.MAIN)} className="relative w-[24px] h-[24px] flex items-center justify-center shrink-0">
            <img src={ASSETS.closeButtonShape} className="absolute inset-0 w-full h-full" alt="" />
            <img src={ASSETS.closeButtonX} className="shrink-0 w-[10px] h-[10px] relative" alt="close" />
          </button>
          <div className="relative w-[24px] h-[24px] shrink-0">
            <img src={ASSETS.closeButtonShape} className="absolute inset-0 w-full h-full" alt="" />
            <img src={ASSETS.infoIconVector} className="shrink-0 w-[2px] h-[10px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" alt="info" />
          </div>
        </div>

        <div className="h-full overflow-y-auto px-[16px] py-[48px] flex flex-col gap-[16px] items-center">
          {/* Month dropdown */}
          <div className="w-full">
            <div className="bg-white border border-[#ced6e6] flex gap-[4px] items-center rounded-[6px] w-[107px] pl-[4px] pr-[10px] py-[2px] overflow-hidden">
              <div className="relative w-[24px] h-[24px] shrink-0 flex items-center justify-center">
                <img src={ASSETS.dropdownArrow} className="shrink-0 w-[10px] h-[6px] rotate-90" alt="" />
              </div>
              <p className="font-light text-[14px] leading-[20px] text-black whitespace-nowrap">Dec. 2025</p>
            </div>
          </div>

          {/* Top 5 chart */}
          <div className="bg-[#dce2eb] flex flex-col gap-[8px] p-[4px] rounded-[8px] w-full shrink-0">
            <div className="flex items-center gap-[10px] p-[8px] rounded-[4px] w-full bg-gradient-to-r from-black from-[25%] to-transparent">
              <div className="relative w-[20px] h-[20px] shrink-0 overflow-hidden">
                <img src={ASSETS.gradeIconRect} className="absolute inset-[14.58%_4.17%]" alt="" />
              </div>
              <p className="font-bold text-[16px] leading-[20px] text-white whitespace-nowrap">Top 5</p>
            </div>
            <div className="flex h-[280px] items-end w-full">
              <div className="w-[5px] h-[27px] shrink-0 opacity-0" />
              {TOP5.map((b, i) => (
                <Fragment key={i}>
                  <Bar {...b} />
                  <div className="w-[5px] h-[27px] shrink-0 opacity-0" />
                </Fragment>
              ))}
            </div>
          </div>

          {/* My Ranking */}
          <div className="bg-white border border-[#9ca3f1] flex flex-col gap-[10px] p-[4px] rounded-[8px] w-full shrink-0">
            <div className="bg-[#9ca3f1] flex items-center gap-[4px] p-[8px] rounded-[4px] w-full">
              <p className="font-bold text-[16px] leading-[20px] text-white">My Ranking</p>
            </div>
            <div className="flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full">
              <p className="shrink-0 font-light text-[14px] leading-[20px] text-black text-center w-[28px]">9</p>
              <div className="flex flex-1 min-w-0 gap-[4px] items-center">
                <Avatar size={20} />
                <p className="flex-1 font-bold text-[16px] leading-[20px] text-black overflow-hidden text-ellipsis whitespace-nowrap">
                  andy13
                </p>
              </div>
              <p className="shrink-0 font-light text-[14px] leading-[20px] text-black text-right w-[40px]">L4</p>
              <img src={ASSETS.verticalDivider} className="shrink-0 w-[1px] h-[20px]" alt="" />
              <p className="shrink-0 font-light text-[14px] leading-[20px] text-black w-[40px]">W6</p>
            </div>
          </div>

          {/* Grade sections */}
          <GradeSection
            gradient="bg-gradient-to-r from-[#81a0b8] from-[25%] to-transparent"
            iconUrl={ASSETS.gradeIconRect}
            name="Diamond"
            rows={[
              { rank: '6', name: 'namcheondong', left: 'W3', right: 'W8' },
              { rank: '7', name: 'kkkim', left: 'L2', right: 'W7' },
            ]}
          />
          <GradeSection
            gradient="bg-gradient-to-r from-[#afcfe2] from-[25%] to-transparent"
            iconUrl={ASSETS.gradeIconPlatinum}
            name="Platinum"
            rows={[
              { rank: '8', name: 'OrangeCan', left: 'W1', right: 'W7' },
              { rank: '9', name: 'Andy', left: 'W4', right: 'W6', highlight: true },
              { rank: '10', name: 'Zammin', left: 'W2', right: 'W6' },
            ]}
          />
          <GradeSection
            gradient="bg-gradient-to-r from-[#e9d17f] from-[25%] to-transparent"
            iconUrl={ASSETS.gradeIconRect}
            name="Gold"
            rows={[
              { rank: '11', name: 'TrumpKing', left: 'L4', right: 'W6' },
              { rank: '12', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
              { rank: '13', name: 'Greatman', left: 'L4', right: 'W5' },
              { rank: '14', name: 'MadeinChina', left: 'L5', right: 'W5' },
            ]}
          />
          <GradeSection
            gradient="bg-gradient-to-r from-[#bccfe3] from-[25%] to-transparent"
            iconUrl={ASSETS.gradeIconRect}
            name="Silver"
            rows={[
              { rank: '15', name: 'TrumpKing', left: 'L4', right: 'W6' },
              { rank: '16', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
              { rank: '17', name: 'Greatman', left: 'L4', right: 'W5' },
              { rank: '18', name: 'MadeinChina', left: 'L5', right: 'W5' },
            ]}
          />
          <GradeSection
            gradient="bg-gradient-to-r from-[#ebc7b3] from-[25%] to-transparent"
            iconUrl={ASSETS.gradeIconRect}
            name="Bronze"
            rows={[
              { rank: '19', name: 'TrumpKing', left: 'L4', right: 'W6' },
              { rank: '20', name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
              { rank: '21', name: 'Greatman', left: 'L4', right: 'W5' },
              { rank: '22', name: 'MadeinChina', left: 'L5', right: 'W5' },
            ]}
          />
          <GradeSection
            gradient="bg-gradient-to-r from-[#8b8e98] to-transparent"
            iconUrl={ASSETS.gradeIconRect}
            name="Participant"
            rows={[
              { rank: '-', name: 'Asde', left: 'L3', right: 'W1' },
              { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
