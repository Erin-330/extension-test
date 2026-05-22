import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const ASSETS = {
  rorrLogoStroke: 'https://www.figma.com/api/mcp/asset/5d5134bc-8765-47c9-879c-c0f68a9ac503',
  rorrLogoExclude: 'https://www.figma.com/api/mcp/asset/af41e791-3c4d-4ef0-badf-1317f6d93a6e',
  headerCloseX: 'https://www.figma.com/api/mcp/asset/b272bb9b-cc25-4ebe-8ebe-b179ea2f691e',
  buttonShape: 'https://www.figma.com/api/mcp/asset/8fc51d1f-bbce-4b1d-a023-24d7938b2280',
  closeIcon: 'https://www.figma.com/api/mcp/asset/b65bd165-70e0-41cd-8eab-4afac2108e67',
  infoIcon: 'https://www.figma.com/api/mcp/asset/37b69882-9d84-4755-a58e-ac51db6739a8',
  chevron: 'https://www.figma.com/api/mcp/asset/f84e15bd-a17f-477a-9f92-532b2d5d1409',
  avatar: 'https://www.figma.com/api/mcp/asset/660257a9-83b2-4a0b-af67-72f968ab6e1e',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/987e0118-00a9-46b9-a491-759a7847e539',
  vDivider: 'https://www.figma.com/api/mcp/asset/4bca65d0-ba67-4841-882d-0dcbdcbc326b',
  bar1: 'https://www.figma.com/api/mcp/asset/a977665a-f832-4111-9025-28dd51b6f9b7',
  bar2: 'https://www.figma.com/api/mcp/asset/16e63cbb-007d-45fc-a650-af62eac50e6c',
  bar3: 'https://www.figma.com/api/mcp/asset/f6581d87-d2b8-44c0-8adb-fe22c2c5971e',
  bar4: 'https://www.figma.com/api/mcp/asset/fb09ecf0-b73f-485a-a023-34d1a51e5a16',
  bar5: 'https://www.figma.com/api/mcp/asset/641338e9-7eec-44a2-a4df-1447edca9d8c',
  barSeparator: 'https://www.figma.com/api/mcp/asset/d0b99941-1a6e-49b6-bae3-09637ea4784e',
  tierDiamond: 'https://www.figma.com/api/mcp/asset/8e11eff2-8a08-4fbc-9382-183b65911312',
  tierPlatinum: 'https://www.figma.com/api/mcp/asset/8926ad73-fc43-4873-a8cf-62b3bc51b200',
  tierGold: 'https://www.figma.com/api/mcp/asset/b17a27af-804a-4d07-bfe0-f3f412732e90',
  tierSilver: 'https://www.figma.com/api/mcp/asset/da77a040-d920-463d-b331-bce9aefaba71',
  tierBronze: 'https://www.figma.com/api/mcp/asset/d5c2a8bc-d439-49b2-a916-5cdf3e6e1d24',
  tierParticipant: 'https://www.figma.com/api/mcp/asset/cf8b6cb2-83fa-4c5e-9be7-d4c439e9d2ec',
}

type Tier = 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'participant'

const TIER_META: Record<Tier, { label: string; gradientFrom: string; gradientTo: string; icon: string; cropInset: string; imgPos: { h: string; left: string; top: string; w: string } }> = {
  diamond: {
    label: 'Diamond',
    gradientFrom: '#81a0b8',
    gradientTo: 'rgba(129,160,184,0)',
    icon: ASSETS.tierDiamond,
    cropInset: 'inset-[20.83%_12.5%]',
    imgPos: { h: '538.24%', left: '-231.21%', top: '-154.94%', w: '415.91%' },
  },
  platinum: {
    label: 'Platinum',
    gradientFrom: '#afcfe2',
    gradientTo: 'rgba(175,207,226,0)',
    icon: ASSETS.tierPlatinum,
    cropInset: 'inset-[14.58%_2.08%]',
    imgPos: { h: '496.3%', left: '-131.08%', top: '-170.37%', w: '362.16%' },
  },
  gold: {
    label: 'Gold',
    gradientFrom: '#e9d17f',
    gradientTo: 'rgba(122,90,31,0)',
    icon: ASSETS.tierGold,
    cropInset: 'inset-[14.58%_4.17%]',
    imgPos: { h: '538.24%', left: '-304.38%', top: '-9.85%', w: '415.91%' },
  },
  silver: {
    label: 'Silver',
    gradientFrom: '#bccfe3',
    gradientTo: 'rgba(107,118,130,0)',
    icon: ASSETS.tierSilver,
    cropInset: 'inset-[14.58%_4.17%]',
    imgPos: { h: '538.24%', left: '-206.38%', top: '-9.85%', w: '415.91%' },
  },
  bronze: {
    label: 'Bronze',
    gradientFrom: '#ebc7b3',
    gradientTo: 'rgba(63,46,37,0)',
    icon: ASSETS.tierBronze,
    cropInset: 'inset-[14.58%_4.17%]',
    imgPos: { h: '538.24%', left: '-111.01%', top: '-9.85%', w: '415.91%' },
  },
  participant: {
    label: 'Participant',
    gradientFrom: '#8b8e98',
    gradientTo: 'rgba(117,123,144,0)',
    icon: ASSETS.tierParticipant,
    cropInset: 'inset-[14.58%_4.17%]',
    imgPos: { h: '538.24%', left: '-12.9%', top: '-9.85%', w: '415.91%' },
  },
}

type RankRow = { rank: number | '-'; name: string; left: string; right: string }

const RANK_DATA: Record<Tier, RankRow[]> = {
  diamond: [
    { rank: 6, name: 'namcheondong', left: 'W3', right: 'W8' },
    { rank: 7, name: 'kkkim', left: 'L2', right: 'W7' },
  ],
  platinum: [
    { rank: 8, name: 'OrangeCan', left: 'W1', right: 'W7' },
    { rank: 9, name: 'Andy', left: 'W4', right: 'W6' },
    { rank: 10, name: 'Zammin', left: 'W2', right: 'W6' },
  ],
  gold: [
    { rank: 11, name: 'TrumpKing', left: 'L4', right: 'W6' },
    { rank: 12, name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
    { rank: 13, name: 'Greatman', left: 'L4', right: 'W5' },
    { rank: 14, name: 'MadeinChina', left: 'L5', right: 'W5' },
  ],
  silver: [
    { rank: 15, name: 'TrumpKing', left: 'L4', right: 'W6' },
    { rank: 16, name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
    { rank: 17, name: 'Greatman', left: 'L4', right: 'W5' },
    { rank: 18, name: 'MadeinChina', left: 'L5', right: 'W5' },
  ],
  bronze: [
    { rank: 19, name: 'TrumpKing', left: 'L4', right: 'W6' },
    { rank: 20, name: 'wwifjdksi5439', left: 'L2', right: 'W6' },
    { rank: 21, name: 'Greatman', left: 'L4', right: 'W5' },
    { rank: 22, name: 'MadeinChina', left: 'L5', right: 'W5' },
  ],
  participant: [
    { rank: '-', name: 'Asde', left: 'L3', right: 'W1' },
    { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
    { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
    { rank: '-', name: 'rodkdufs', left: 'L2', right: 'W1' },
  ],
}

const MY_RANK: RankRow = { rank: 9, name: 'andy13', left: 'L4', right: 'W6' }

const TOP5 = [
  { place: '4th', name: 'Alfred',  textColor: '#969cd9', barImg: ASSETS.bar4, height: 127 },
  { place: '2nd', name: 'bushman', textColor: '#424cbb', barImg: ASSETS.bar2, height: 261 },
  { place: '1st', name: 'ddadda',  textColor: '#2d39b4', barImg: ASSETS.bar1, height: 280 },
  { place: '3rd', name: 'Samantha',textColor: '#6c74ca', barImg: ASSETS.bar3, height: 193 },
  { place: '5th', name: 'frifre',  textColor: '#c0c3e8', barImg: ASSETS.bar5, height: 87 },
]

function Avatar({ size = 20 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full overflow-hidden bg-[red]">
        <img src={ASSETS.avatar} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <img src={ASSETS.gradeBorder} className="absolute inset-0 w-full h-full" />
    </div>
  )
}

function TierIcon({ tier }: { tier: Tier }) {
  const meta = TIER_META[tier]
  return (
    <div className="relative shrink-0 w-[20px] h-[20px]">
      <div className={`absolute ${meta.cropInset} overflow-hidden`}>
        <img
          src={meta.icon}
          alt=""
          className="absolute max-w-none"
          style={{
            height: meta.imgPos.h,
            left: meta.imgPos.left,
            top: meta.imgPos.top,
            width: meta.imgPos.w,
          }}
        />
      </div>
    </div>
  )
}

function RankRowView({ row, highlight }: { row: RankRow; highlight?: boolean }) {
  const txt = highlight ? 'text-white' : 'text-black'
  return (
    <div
      className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] w-full rounded-[4px] ${
        highlight ? 'bg-[#9ca3f1]' : ''
      }`}
    >
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] w-[28px] text-center shrink-0 ${txt}`}>
        {row.rank}
      </p>
      <div className="flex gap-[4px] items-center flex-1 min-w-0">
        <Avatar size={20} />
        <p
          className={`font-['Pretendard',sans-serif] font-bold text-[16px] leading-[20px] flex-1 overflow-hidden text-ellipsis whitespace-nowrap ${txt}`}
        >
          {row.name}
        </p>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] w-[40px] text-right shrink-0 ${txt}`}>
        {row.left}
      </p>
      <img src={ASSETS.vDivider} className="shrink-0 w-[1px] h-[16px]" />
      <p className={`font-['Pretendard',sans-serif] font-light text-[14px] w-[40px] text-right shrink-0 ${txt}`}>
        {row.right}
      </p>
    </div>
  )
}

function TierSection({ tier, isMyRankingTier }: { tier: Tier; isMyRankingTier?: boolean }) {
  const meta = TIER_META[tier]
  const rows = RANK_DATA[tier]
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] rounded-[8px] w-full">
      <div
        className="flex gap-[4px] items-center p-[8px] rounded-[4px] w-full"
        style={{
          background: `linear-gradient(to right, ${meta.gradientFrom} 25%, ${meta.gradientTo})`,
        }}
      >
        <TierIcon tier={tier} />
        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white whitespace-nowrap">
          {meta.label}
        </p>
      </div>
      {rows.map((r, i) => (
        <RankRowView
          key={`${tier}-${i}`}
          row={r}
          highlight={isMyRankingTier && r.rank === 9 && r.name === 'Andy'}
        />
      ))}
    </div>
  )
}

function Top5BarChart() {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[8px] p-[4px] rounded-[8px] w-full">
      <div
        className="flex items-center gap-[10px] p-[8px] rounded-[4px] w-full"
        style={{ background: 'linear-gradient(to right, #000 25%, rgba(0,0,0,0))' }}
      >
        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white whitespace-nowrap">
          Top 5
        </p>
      </div>
      <div className="flex flex-col gap-[4px] w-full">
        <div className="flex items-end justify-center gap-[5px] h-[280px] w-full">
          {TOP5.map((b, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-end w-[48px]"
              style={{ height: b.height }}
            >
              <img src={b.barImg} className="absolute inset-0 w-full h-full" alt="" />
              <div className="relative flex flex-col items-center gap-[4px] py-[8px] w-full">
                <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white text-center w-full">
                  {b.place}
                </p>
                <img src={ASSETS.barSeparator} className="shrink-0 w-[24px] h-[1px]" />
                <p className="font-['Pretendard',sans-serif] font-light text-[12px] text-white">
                  W1
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-start justify-center gap-[5px] w-full">
          {TOP5.map((b, i) => (
            <p
              key={i}
              className="font-['Pretendard',sans-serif] font-normal text-[12px] leading-[1.2] text-center w-[48px] overflow-hidden text-ellipsis whitespace-nowrap"
              style={{ color: b.textColor }}
            >
              {b.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

function MyRankingCard() {
  return (
    <div className="bg-white border border-[#9ca3f1] rounded-[8px] p-[4px] w-full flex flex-col gap-[4px]">
      <div className="bg-[#9ca3f1] flex p-[8px] rounded-[4px] w-full">
        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white whitespace-nowrap">
          My Ranking
        </p>
      </div>
      <RankRowView row={MY_RANK} />
    </div>
  )
}

export function RankPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full">
        <div className="flex gap-[4px] items-center">
          <img src={ASSETS.rorrLogoStroke} className="shrink-0 w-[22px] h-[18px]" />
          <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-white whitespace-nowrap">
            RORR
          </p>
        </div>
        <img src={ASSETS.headerCloseX} className="shrink-0 w-[12.414px] h-[12.414px]" />
      </div>

      <div className="bg-[#f0f2f5] flex flex-1 min-h-0 overflow-hidden rounded-[16px] w-full relative">
        <div className="flex flex-1 flex-col gap-[16px] items-center min-w-0 overflow-y-auto pb-[20px] pt-[60px] px-[16px] w-full">
          <div className="flex items-center gap-[4px] bg-white border border-[#ced6e6] rounded-[6px] pl-[10px] pr-[4px] py-[2px] w-[107px]">
            <p className="font-['Pretendard',sans-serif] font-light text-[14px] leading-[20px] text-black flex-1">
              Dec. 2025
            </p>
            <div className="relative shrink-0 w-[24px] h-[24px] flex items-center justify-center">
              <img src={ASSETS.chevron} className="shrink-0 w-[8px] h-[16px] rotate-90" />
            </div>
          </div>

          <Top5BarChart />
          <MyRankingCard />
          <TierSection tier="diamond" />
          <TierSection tier="platinum" isMyRankingTier />
          <TierSection tier="gold" />
          <TierSection tier="silver" />
          <TierSection tier="bronze" />
          <TierSection tier="participant" />
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-[12px]">
          <button
            type="button"
            onClick={() => onNavigate(PAGES.MAIN)}
            className="relative shrink-0 w-[24px] h-[24px] flex items-center justify-center"
            aria-label="Close"
          >
            <img src={ASSETS.buttonShape} className="absolute inset-0 shrink-0 w-[24px] h-[24px]" />
            <img src={ASSETS.closeIcon} className="relative shrink-0 w-[8px] h-[8px]" />
          </button>
          <button
            type="button"
            className="relative shrink-0 w-[24px] h-[24px] flex items-center justify-center"
            aria-label="Info"
          >
            <img src={ASSETS.buttonShape} className="absolute inset-0 shrink-0 w-[24px] h-[24px]" />
            <img src={ASSETS.infoIcon} className="relative shrink-0 w-[2px] h-[12px]" />
          </button>
        </div>
      </div>
    </div>
  )
}
