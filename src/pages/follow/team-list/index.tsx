import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'
import { FollowPage } from '../../../features/follow/ui/FollowPage'

const MOCK_TEAMS: FollowTargetItem[] = [
  {
    target_id: 't1',
    name: 'T1',
    logoUrl: 'https://www.figma.com/api/mcp/asset/81333916-13af-4e07-9e85-479767ffcc2e',
    logoInsetClass: 'absolute inset-[30%_2.99%_29.57%_2.99%]',
    boost: true,
  },
  {
    target_id: 'kt',
    name: 'KT Rollster',
    logoUrl: 'https://www.figma.com/api/mcp/asset/7d98fc77-9bad-4a7b-a3fd-c18db29e6c5f',
    logoInsetClass: 'absolute inset-[20%_19.17%_16.67%_18.33%]',
    boost: true,
  },
  {
    target_id: 'geng',
    name: 'GEN G',
    logoUrl: 'https://www.figma.com/api/mcp/asset/8acc84f5-a3a0-4e74-92e7-282345f005d0',
    logoInsetClass: 'absolute inset-[15%_9.05%_14.89%_9.17%]',
  },
  {
    target_id: 'hle',
    name: 'Hanwha Life Esports',
    logoUrl: 'https://www.figma.com/api/mcp/asset/01f0daac-7d56-49c7-98fd-f89cacabff7d',
    logoInsetClass: 'absolute inset-[30%_0_29.57%_0]',
  },
  {
    target_id: 'dk',
    name: 'Dplus KIA',
    logoUrl: 'https://www.figma.com/api/mcp/asset/1468a8b6-4fc9-4724-8af6-c83007bf7298',
    logoInsetClass: 'absolute inset-[30%_4.17%_30.28%_4.17%]',
  },
  {
    target_id: 'wbg',
    name: 'Weibo Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/6293c79f-f628-4de0-b76e-98374ccbdd1e',
    logoInsetClass: 'absolute inset-[17.5%_10.75%_18.3%_10%]',
  },
  {
    target_id: 'wbg-2',
    name: 'Weibo Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/6293c79f-f628-4de0-b76e-98374ccbdd1e',
    logoInsetClass: 'absolute inset-[17.5%_10.75%_18.3%_10%]',
  },
  {
    target_id: 'wbg-3',
    name: 'Weibo Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/a53560e4-2ca2-4b5c-a2e5-0a79c4302d9b',
    logoInsetClass: 'absolute inset-[17.5%_10.75%_18.3%_10%]',
  },
  {
    target_id: 'wbg-4',
    name: 'Weibo Gaming',
    logoUrl: 'https://www.figma.com/api/mcp/asset/a53560e4-2ca2-4b5c-a2e5-0a79c4302d9b',
    logoInsetClass: 'absolute inset-[17.5%_10.75%_18.3%_10%]',
    boost: true,
  },
]

type Props = { onNavigate: (page: string) => void }

export function TeamListPage({ onNavigate }: Props) {
  const teams = useFollowSelectionsStore((s) => s.teams)
  const toggleTeam = useFollowSelectionsStore((s) => s.toggleTeam)
  return (
    <FollowPage
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      items={MOCK_TEAMS}
      selected={teams}
      onToggle={toggleTeam}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
      onClose={() => onNavigate(PAGES.MAIN)}
      currentStep={1}
    />
  )
}
