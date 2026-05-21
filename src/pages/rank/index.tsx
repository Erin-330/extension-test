import { PAGES } from '../../shared/constants/pages'

type Props = { onNavigate: (page: string) => void }

const A = {
  headerBg: 'https://www.figma.com/api/mcp/asset/195b68c8-5852-44a9-adaa-a66499ed1236',
  infoIcon: 'https://www.figma.com/api/mcp/asset/b14f703c-13b0-4391-9ab9-83a90b4776c1',
  closeX: 'https://www.figma.com/api/mcp/asset/662e896b-5ca4-4323-844c-6bab1bc1f75b',
  avatar: 'https://www.figma.com/api/mcp/asset/a0b8e2c8-4f31-428a-a2dd-20f0717bd4c5',
  gradeBorder: 'https://www.figma.com/api/mcp/asset/be602976-5813-47f2-97ba-136f800bd2f2',
  highLight: 'https://www.figma.com/api/mcp/asset/62cac6c2-3515-49aa-9f17-6e2220a26d3f',
  innerLine: 'https://www.figma.com/api/mcp/asset/9657125f-75f1-439a-bfa3-2d282fd51034',
  gradeRect: 'https://www.figma.com/api/mcp/asset/5e10191d-8ef1-4ed4-ae09-ac14375d0f8f',
  gradeRectPlat: 'https://www.figma.com/api/mcp/asset/c49d1626-e867-4720-ac15-0ec5fcfa0ca2',
  vDivider: 'https://www.figma.com/api/mcp/asset/36af2570-6ec5-4674-834c-b802a04c4878',
  rorrUnionStroke: 'https://www.figma.com/api/mcp/asset/5f0ff133-310d-4ac8-95ca-91b17d4e4388',
  rorrExclude: 'https://www.figma.com/api/mcp/asset/11388336-fffa-4072-92d4-9c3aaafc6527',
  rorrCloseX: 'https://www.figma.com/api/mcp/asset/0ca8fe16-29a2-4d45-9c2c-c85ee1837939',
  dropdownArrow: 'https://www.figma.com/api/mcp/asset/a097ff9e-562c-4f5e-8ab3-f70fc2f27009',
  bar4th: 'https://www.figma.com/api/mcp/asset/4f65bc11-7931-47fc-a134-77c074d90dfe',
  bar2nd: 'https://www.figma.com/api/mcp/asset/9908f9c7-6501-4eea-ab42-573a7b31097a',
  bar1st: 'https://www.figma.com/api/mcp/asset/9cde0a0f-7b03-4533-bcef-ba2002f607c7',
  bar3rd: 'https://www.figma.com/api/mcp/asset/007c0100-e153-4ed2-b6ca-7d17b839cda0',
  bar5th: 'https://www.figma.com/api/mcp/asset/9f048c8f-f216-4916-a7fc-4de9994facdd',
  barDivider: 'https://www.figma.com/api/mcp/asset/7a652b2c-ca20-4001-a116-0c8709e0c08f',
}

function AppHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-[48px] items-center justify-between opacity-[0.66] px-[4px] w-full shrink-0">
      <div className="flex gap-[4px] items-center justify-center shrink-0">
        <div className="-scale-y-100 rotate-180 flex items-center justify-center shrink-0">
          <div className="h-[18px] w-[22px] relative overflow-hidden">
            <img src={A.rorrUnionStroke} className="absolute block max-w-none size-full inset-[0.03%_19.61%_-0.09%_19.66%] shrink-0" alt="" />
            <img src={A.rorrExclude} className="absolute block max-w-none size-full inset-[2.93%_22.01%_2.81%_22.06%] shrink-0" alt="" />
          </div>
        </div>
        <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-white whitespace-nowrap shrink-0">
          RORR
        </p>
      </div>
      <button type="button" onClick={onClose} className="relative size-[12.414px] shrink-0" aria-label="Close">
        <img src={A.rorrCloseX} className="absolute block max-w-none size-full shrink-0" alt="" />
      </button>
    </div>
  )
}

function CloseModButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex gap-[10px] items-center justify-center relative size-[24px]" aria-label="Close">
      <div className="flex-1 h-full min-w-px relative rounded-[30px]">
        <img src={A.headerBg} className="absolute block max-w-none size-full shrink-0" alt="" />
      </div>
      <div className="absolute inset-[8.33%] overflow-hidden">
        <div className="absolute inset-[28.59%]">
          <img src={A.closeX} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
      </div>
    </button>
  )
}

function InfoButton() {
  return (
    <button type="button" className="flex gap-[10px] items-center justify-center relative rounded-[28px] size-[24px]">
      <div className="flex-1 h-full min-w-px relative rounded-[30px]">
        <img src={A.headerBg} className="absolute block max-w-none size-full shrink-0" alt="" />
      </div>
      <div className="absolute inset-[8.33%] overflow-hidden">
        <div className="absolute inset-[22.92%_45.83%]">
          <img src={A.infoIcon} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
      </div>
    </button>
  )
}

function GradeIcon({ variant }: { variant: 'diamond' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'participant' }) {
  const isPlat = variant === 'platinum'
  return (
    <div className="overflow-hidden relative shrink-0 size-[20px]">
      <div className={`absolute ${isPlat ? 'inset-[14.58%_2.08%]' : variant === 'diamond' ? 'inset-[20.83%_12.5%]' : 'inset-[14.58%_4.17%]'} overflow-hidden`}>
        <img
          src={isPlat ? A.gradeRectPlat : A.gradeRect}
          className="absolute max-w-none shrink-0"
          style={
            variant === 'bronze' ? { height: '538.24%', left: '-111.01%', top: '-9.85%', width: '415.91%' }
            : variant === 'silver' ? { height: '538.24%', left: '-206.38%', top: '-9.85%', width: '415.91%' }
            : variant === 'gold' ? { height: '538.24%', left: '-304.38%', top: '-9.85%', width: '415.91%' }
            : variant === 'platinum' ? { height: '496.3%', left: '-131.08%', top: '-170.37%', width: '362.16%' }
            : variant === 'diamond' ? { height: '538.24%', left: '-231.21%', top: '-154.94%', width: '415.91%' }
            : { height: '538.24%', left: '-12.9%', top: '-9.85%', width: '415.91%' }
          }
          alt=""
        />
      </div>
    </div>
  )
}

function Avatar20() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bg-[red] inset-[3.98%_3.57%_3.16%_3.57%] overflow-hidden rounded-[50px]">
        <div className="absolute inset-[-2.4%_-1.2%_-7.6%_-1.6%]">
          <img src={A.avatar} className="absolute max-w-none object-cover pointer-events-none size-full shrink-0 inset-0" alt="" />
        </div>
      </div>
      <div className="absolute inset-[0.41%_0_-0.41%_0]">
        <img src={A.gradeBorder} className="absolute block max-w-none size-full shrink-0" alt="" />
        <div className="absolute inset-[5%]">
          <img src={A.highLight} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
        <div className="absolute inset-[6%]">
          <img src={A.innerLine} className="absolute block max-w-none size-full shrink-0" alt="" />
        </div>
      </div>
    </div>
  )
}

type RankRow = { rank: string | number; name: string; leftStat: string; rightStat: string; highlight?: boolean }

function RankRowItem({ row }: { row: RankRow }) {
  return (
    <div className={`flex gap-[8px] items-center justify-center px-[4px] py-[8px] relative shrink-0 w-full ${row.highlight ? 'bg-[#9ca3f1]' : ''}`}>
      <div className="flex gap-[4px] items-center shrink-0">
        <p className={`font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-center w-[28px] ${row.highlight ? 'text-white' : 'text-black'}`}>
          {row.rank}
        </p>
      </div>
      <div className="flex flex-1 gap-[4px] items-center min-w-px">
        <Avatar20 />
        <p className={`flex-1 font-['Pretendard',sans-serif] font-bold leading-[20px] min-w-px overflow-hidden text-[16px] text-ellipsis whitespace-nowrap ${row.highlight ? 'text-white' : 'text-black'}`}>
          {row.name}
        </p>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-right w-[40px] ${row.highlight ? 'text-white' : 'text-black'}`}>
        {row.leftStat}
      </p>
      <div className="flex items-center self-stretch">
        <div className="h-full relative w-0 shrink-0">
          <div className="absolute inset-[-2.5%_-0.5px]">
            <img src={A.vDivider} className="block max-w-none size-full shrink-0" alt="" />
          </div>
        </div>
      </div>
      <p className={`font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] w-[40px] ${row.highlight ? 'text-white' : 'text-black'}`}>
        {row.rightStat}
      </p>
    </div>
  )
}

function GradeTag({ label, gradient, icon }: { label: string; gradient: string; icon?: React.ReactNode }) {
  return (
    <div className={`flex gap-[4px] items-center p-[8px] relative rounded-[4px] shrink-0 w-full ${gradient}`}>
      {icon}
      <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white whitespace-nowrap shrink-0">
        {label}
      </p>
    </div>
  )
}

function RankList({ tag, rows }: { tag: React.ReactNode; rows: RankRow[] }) {
  return (
    <div className="bg-[#dce2eb] flex flex-col gap-[10px] items-start p-[4px] relative rounded-[8px] shrink-0 w-full">
      {tag}
      {rows.map((r, i) => <RankRowItem key={i} row={r} />)}
    </div>
  )
}

const BAR_DATA = [
  { rank: '4th', score: '12', name: 'Alfred', stat: 'W1', bar: A.bar4th, pt: 153, color: '#969cd9' },
  { rank: '2nd', score: '17', name: 'bushman', stat: 'W1', bar: A.bar2nd, pt: 19, color: '#424cbb' },
  { rank: '1st', score: '20', name: 'ddadda', stat: 'W1', bar: A.bar1st, pt: 0, color: '#2d39b4' },
  { rank: '3rd', score: '16', name: 'Samantha', stat: 'W1', bar: A.bar3rd, pt: 87, color: '#6c74ca' },
  { rank: '5th', score: '8', name: 'frifre', stat: 'W1', bar: A.bar5th, pt: 193, color: '#c0c3e8' },
]

export function RankPage({ onNavigate }: Props) {
  return (
    <div className="h-dvh w-full flex flex-col bg-[#46383a] px-[11px] pb-[11px]">
      <AppHeader onClose={() => onNavigate(PAGES.MAIN)} />
      <div className="backdrop-blur-[3px] bg-[#f0f2f5] flex flex-1 items-start min-w-[288px] overflow-hidden relative rounded-[16px] w-full">
        <div className="flex flex-1 flex-col gap-[16px] items-center min-w-px px-[16px] py-[48px] relative self-stretch overflow-y-auto">
          <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
            <div className="bg-white border border-[#ced6e6] border-solid flex gap-[4px] items-center overflow-hidden pl-[4px] pr-[10px] py-[2px] rounded-[6px] shrink-0 w-[107px]">
              <div className="overflow-hidden relative shrink-0 size-[24px]">
                <div className="absolute inset-[33.33%_22.92%_32.83%_21.19%] flex items-center justify-center rotate-90">
                  <img src={A.dropdownArrow} className="block max-w-none size-full shrink-0" alt="" />
                </div>
              </div>
              <p className="font-['Pretendard',sans-serif] font-light leading-[20px] text-[14px] text-black whitespace-nowrap">
                Dec. 2025
              </p>
            </div>

            <div className="bg-[#dce2eb] flex flex-col gap-[8px] items-start p-[4px] relative rounded-[8px] shrink-0 w-full">
              <GradeTag
                label="Top 5"
                gradient="bg-gradient-to-r from-black from-[25.013%] to-[rgba(0,0,0,0)]"
              />
              <div className="flex h-[280px] items-end relative shrink-0 w-full">
                {BAR_DATA.map((b) => (
                  <div key={b.rank} className="flex flex-1 flex-col h-full items-start min-w-px relative" style={{ paddingTop: b.pt }}>
                    <div className="flex flex-1 flex-col gap-[4px] items-center min-h-px relative w-full">
                      <div className="flex flex-col gap-[4px] items-center justify-end shrink-0 w-full">
                        <p
                          className="font-['Pretendard',sans-serif] font-normal leading-[1.2] overflow-hidden shrink-0 text-[12px] text-center text-ellipsis w-full whitespace-nowrap"
                          style={{ color: b.color }}
                        >
                          {b.name}
                        </p>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-end min-h-px relative w-full">
                        <div className="flex-1 min-h-px relative w-full">
                          <img src={b.bar} className="absolute block max-w-none size-full inset-0 shrink-0" alt="" />
                        </div>
                        <div className="absolute flex flex-col items-center left-0 right-0 top-0">
                          <p className="font-['Pretendard',sans-serif] font-bold h-[22px] leading-[20px] text-[16px] text-center text-white w-[64px] flex items-center justify-center">
                            {b.rank}
                          </p>
                          <div className="h-0 relative shrink-0 w-full">
                            <div className="absolute inset-[-0.5px_0]">
                              <img src={A.barDivider} className="block max-w-none size-full shrink-0" alt="" />
                            </div>
                          </div>
                          <div className="flex items-center text-center text-white w-full">
                            <p className="flex-1 font-['Pretendard',sans-serif] font-light leading-[20px] min-w-px text-[14px]">
                              {b.stat}
                            </p>
                            <p className="flex-1 font-['Pretendard',sans-serif] font-bold leading-[20px] min-w-px text-[16px]">
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

          <div className="bg-white border border-[#9ca3f1] border-solid flex flex-col gap-[10px] items-start p-[4px] relative rounded-[8px] shrink-0 w-full">
            <div className="bg-[#9ca3f1] flex gap-[4px] items-center p-[8px] rounded-[4px] shrink-0 w-full">
              <p className="font-['Pretendard',sans-serif] font-bold leading-[20px] text-[16px] text-white whitespace-nowrap">
                My Ranking
              </p>
            </div>
            <RankRowItem row={{ rank: 9, name: 'andy13', leftStat: 'L4', rightStat: 'W6' }} />
          </div>

          <div className="flex flex-col gap-[16px] items-start shrink-0 w-full">
            <RankList
              tag={
                <GradeTag
                  label="Diamond"
                  gradient="bg-gradient-to-r from-[#81a0b8] from-[25.013%] to-[rgba(129,160,184,0)]"
                  icon={<GradeIcon variant="diamond" />}
                />
              }
              rows={[
                { rank: 6, name: 'namcheondong', leftStat: 'W3', rightStat: 'W8' },
                { rank: 7, name: 'kkkim', leftStat: 'L2', rightStat: 'W7' },
              ]}
            />
            <RankList
              tag={
                <GradeTag
                  label="Platinum"
                  gradient="bg-gradient-to-r from-[#afcfe2] from-[25.013%] to-[rgba(175,207,226,0)]"
                  icon={<GradeIcon variant="platinum" />}
                />
              }
              rows={[
                { rank: 8, name: 'OrangeCan', leftStat: 'W1', rightStat: 'W7' },
                { rank: 9, name: 'Andy', leftStat: 'W4', rightStat: 'W6', highlight: true },
                { rank: 10, name: 'Zammin', leftStat: 'W2', rightStat: 'W6' },
              ]}
            />
            <RankList
              tag={
                <GradeTag
                  label="Gold"
                  gradient="bg-gradient-to-r from-[#e9d17f] from-[25.013%] to-[rgba(122,90,31,0)]"
                  icon={<GradeIcon variant="gold" />}
                />
              }
              rows={[
                { rank: 11, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
                { rank: 12, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
                { rank: 13, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
                { rank: 14, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
              ]}
            />
            <RankList
              tag={
                <GradeTag
                  label="Silver"
                  gradient="bg-gradient-to-r from-[#bccfe3] from-[25.013%] to-[rgba(107,118,130,0)]"
                  icon={<GradeIcon variant="silver" />}
                />
              }
              rows={[
                { rank: 15, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
                { rank: 16, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
                { rank: 17, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
                { rank: 18, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
              ]}
            />
            <RankList
              tag={
                <GradeTag
                  label="Bronze"
                  gradient="bg-gradient-to-r from-[#ebc7b3] from-[25.013%] to-[rgba(63,46,37,0)]"
                  icon={<GradeIcon variant="bronze" />}
                />
              }
              rows={[
                { rank: 19, name: 'TrumpKing', leftStat: 'L4', rightStat: 'W6' },
                { rank: 20, name: 'wwifjdksi5439', leftStat: 'L2', rightStat: 'W6' },
                { rank: 21, name: 'Greatman', leftStat: 'L4', rightStat: 'W5' },
                { rank: 22, name: 'MadeinChina', leftStat: 'L5', rightStat: 'W5' },
              ]}
            />
            <RankList
              tag={
                <GradeTag
                  label="Participant"
                  gradient="bg-gradient-to-r from-[#8b8e98] to-[rgba(117,123,144,0)]"
                  icon={<GradeIcon variant="participant" />}
                />
              }
              rows={[
                { rank: '-', name: 'Asde', leftStat: 'L3', rightStat: 'W1' },
                { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
                { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
                { rank: '-', name: 'rodkdufs', leftStat: 'L2', rightStat: 'W1' },
              ]}
            />
          </div>
        </div>

        <div className="absolute left-0 right-0 top-0 flex items-center justify-between overflow-hidden p-[12px]">
          <CloseModButton onClick={() => onNavigate(PAGES.MAIN)} />
          <InfoButton />
        </div>
      </div>
    </div>
  )
}
