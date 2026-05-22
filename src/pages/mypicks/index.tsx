import { useState } from 'react'
import { type Page, PAGES } from '../../shared/constants/pages'
import { MatchPickCard, type Team } from '../../features/quiz/ui/MatchPickCard'

interface MyPicksPageProps {
  onNavigate: (page: Page) => void
}

// Figma 에셋 URL — get_design_context(7259:125496) 확인값
const KT_LOGO = 'https://www.figma.com/api/mcp/asset/24101fba-8109-4a10-a23e-ecaa3d485b24'

const KT_TEAM: Team = { teamId: 'kt', teamInitial: 'KT', teamLogo: KT_LOGO }
const T1_TEAM: Team = { teamId: 't1', teamInitial: 'T1', teamLogo: KT_LOGO }

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-['Pretendard',sans-serif] font-bold text-[11px] text-[#ffffff80] uppercase tracking-wider mb-[6px]">
      {text}
    </p>
  )
}

export function MyPicksPage({ onNavigate }: MyPicksPageProps) {
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>('kt')

  return (
    <div className="h-dvh w-full flex flex-col bg-[#f0f2f5] overflow-hidden">
      {/* 헤더 */}
      <div className="flex items-center px-[16px] pt-[16px] pb-[8px] bg-[#46383a]">
        <button
          className="font-['Pretendard',sans-serif] font-bold text-[14px] text-[#209fee] active:opacity-70"
          onClick={() => onNavigate(PAGES.MAIN)}
        >
          ← 메인
        </button>
        <p className="font-['Pretendard',sans-serif] font-bold text-[16px] text-white flex-1 text-center">
          픽 카드
        </p>
        <div className="w-[40px]" />
      </div>

      {/* 카드 목록 */}
      <div className="flex-1 overflow-y-auto px-[16px] py-[16px] flex flex-col gap-[20px]">

        {/* 1. 인터랙티브 카드 — 팀 클릭해서 픽 선택/취소 가능 */}
        <div>
          <SectionLabel text="픽 선택 (팀 클릭 → 선택, X 클릭 → 취소)" />
          <MatchPickCard
            gameLabel="LOL"
            leagueLabel="league"
            gameNumber="Game 0"
            time="17:00"
            status="upcoming"
            leftTeam={KT_TEAM}
            rightTeam={T1_TEAM}
            selectedTeamId={selectedTeamId}
            onPickTeam={(teamId) => setSelectedTeamId(teamId)}
            onCancelPick={() => setSelectedTeamId(null)}
          />
        </div>

        {/* 2. YOUR PICK — 잠금 상태 (경기 시작 후) */}
        <div>
          <SectionLabel text="픽 잠금 (경기 시작 후 — 파란 체크)" />
          <MatchPickCard
            gameLabel="LOL"
            leagueLabel="league"
            gameNumber="Game 1"
            time="LIVE"
            status="running"
            leftTeam={KT_TEAM}
            rightTeam={T1_TEAM}
            selectedTeamId="kt"
          />
        </div>

        {/* 3. 정답 */}
        <div>
          <SectionLabel text="정답 (초록 프레임)" />
          <MatchPickCard
            gameLabel="LOL"
            leagueLabel="league"
            gameNumber="Game 2"
            time="Finished"
            status="completed"
            leftTeam={KT_TEAM}
            rightTeam={T1_TEAM}
            selectedTeamId="kt"
            isCorrect={true}
            verified={true}
            leftScore={2}
            rightScore={0}
          />
        </div>

        {/* 4. 오답 */}
        <div>
          <SectionLabel text="오답 (빨간 프레임)" />
          <MatchPickCard
            gameLabel="LOL"
            leagueLabel="league"
            gameNumber="Game 3"
            time="Finished"
            status="completed"
            leftTeam={KT_TEAM}
            rightTeam={T1_TEAM}
            selectedTeamId="kt"
            isCorrect={false}
            verified={true}
            leftScore={0}
            rightScore={2}
          />
        </div>

      </div>
    </div>
  )
}
