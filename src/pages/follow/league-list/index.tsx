import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowCard } from '../../../features/follow/ui/FollowCard'

const imgLckUnion = 'https://www.figma.com/api/mcp/asset/b296b340-e902-47cc-8f82-e038dbd6137e'
const imgLplUnion = 'https://www.figma.com/api/mcp/asset/ac07ceaa-ec65-4282-ad33-8bbb868cfe28'
const imgVcs = 'https://www.figma.com/api/mcp/asset/d5b8598b-c194-4886-b2ed-d0317767a08a'
const imgMsi = 'https://www.figma.com/api/mcp/asset/bf8a80c0-25bb-4d4d-a7c9-35a528f65f3a'
const imgLec = 'https://www.figma.com/api/mcp/asset/e91e153f-c020-4052-b56c-c61a7aa75469'
const imgCblol = 'https://www.figma.com/api/mcp/asset/ad8e9bd6-b829-4b66-8d11-889ced1d4e70'
const imgLla = 'https://www.figma.com/api/mcp/asset/c560f80a-8278-47ef-b3e3-2872f3df20aa'

const MOCK_LEAGUES: (FollowTargetItem & { logoInset?: string })[] = [
  { target_id: 'lck', name: 'LCK', subtitle: 'League of Legends Champions Korea', logoUrl: imgLckUnion, logoInset: '15% 0 14.65% 0', hasBoost: true },
  { target_id: 'lpl', name: 'LPL', subtitle: 'League of Legends Pro League', logoUrl: imgLplUnion, logoInset: '19.65% 0 20.29% 0', hasBoost: true },
  { target_id: 'vcs', name: 'VCS', subtitle: 'Vietnam Championship Series', logoUrl: imgVcs, logoInset: '0 -180.85% 0 1%', hasBoost: true },
  { target_id: 'msi', name: 'MSI', subtitle: 'Mid-Season Invitational', logoUrl: imgMsi, logoInset: '6.31% 9% 5.69% 9%', hasBoost: true },
  { target_id: 'lec', name: 'LEC', subtitle: 'League of Legends EMEA Championship', logoUrl: imgLec, logoInset: '1%' },
  { target_id: 'cblol', name: 'CBLOL', subtitle: 'Circuit Brazilian League of Legends', logoUrl: imgCblol, logoInset: '1%' },
  { target_id: 'lla', name: 'LLA', subtitle: 'League of Legends in Hispanic America', logoUrl: imgLla, logoInset: '17% 0 17.48% 0' },
  { target_id: 'lcs', name: 'LCS', subtitle: 'League of Legends Championship Series', logoUrl: imgLla, logoInset: '17% 0 17.48% 0' },
  { target_id: 'pcs', name: 'PCS', subtitle: 'Pacific Championship Series', logoUrl: imgLla, logoInset: '17% 0 17.48% 0' },
  { target_id: 'ljl', name: 'LJL', subtitle: 'League of Legends Japan League', logoUrl: imgLla, logoInset: '17% 0 17.48% 0', hasBoost: true },
]

type Props = { onNavigate: (page: string) => void }

export function LeagueListPage({ onNavigate }: Props) {
  const { leagues, toggleLeague } = useFollowSelectionsStore()
  const selectedIds = leagues.map((l) => l.target_id)
  const selected = selectedIds
    .map((id) => MOCK_LEAGUES.find((i) => i.target_id === id))
    .filter((i): i is (typeof MOCK_LEAGUES)[number] => i !== undefined)
  const unselected = MOCK_LEAGUES.filter((i) => !selectedIds.includes(i.target_id))
  const ordered = [...selected, ...unselected]

  return (
    <FollowPageLayout
      title="Back Your League"
      subtitle="Follow your favorite Leagues"
      currentStep={0}
      showPrev={false}
      onPrev={() => onNavigate(PAGES.MAIN)}
      onNext={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onClose={() => onNavigate(PAGES.MAIN)}
    >
      {ordered.map((item) => {
        const idx = selectedIds.indexOf(item.target_id)
        return (
          <FollowCard
            key={item.target_id}
            variant="league"
            logoUrl={item.logoUrl}
            logoInset={item.logoInset}
            name={item.name}
            subtitle={item.subtitle}
            hasBoost={item.hasBoost}
            selected={idx >= 0}
            selectedIndex={idx >= 0 ? idx + 1 : undefined}
            onClick={() => toggleLeague(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
