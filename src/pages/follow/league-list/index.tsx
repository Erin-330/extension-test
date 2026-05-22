import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowItemCard } from '../../../features/follow/ui/FollowItemCard'
import { useFollowSelectionsStore, type FollowTargetItem } from '../../../features/follow/model/store/followSelectionsStore'

const LEAGUES: FollowTargetItem[] = [
  { target_id: 'lck',   name: 'LCK',   subtitle: 'League of Legends Champions Korea', hasBoost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/c1920d9b-bade-4ebd-956e-b8e5ca112ace' },
  { target_id: 'lpl',   name: 'LPL',   subtitle: 'League of Legends Pro League',      hasBoost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/714f6907-dc62-4f79-ba06-f3de4f3f28ac' },
  { target_id: 'vcs',   name: 'VCS',   subtitle: 'Vietnam Championship Series',       hasBoost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/a54041c3-a601-4830-894d-b4577b258fc4' },
  { target_id: 'msi',   name: 'MSI',   subtitle: 'Mid-Season Invitational',           hasBoost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/4816b0c7-51d7-44bc-9681-4fe004266e3f' },
  { target_id: 'lec',   name: 'LEC',   subtitle: 'League of Legends EMEA Championship', hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/c073279e-8a22-47a8-b1a7-9c4c65b4765f' },
  { target_id: 'cblol', name: 'CBLOL', subtitle: 'Circuit Brazilian League of Legends', hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/9665c92d-1fe6-4722-bffe-0f45dc706aeb' },
  { target_id: 'lla',   name: 'LLA',   subtitle: 'League of Legends in Hispanic America', hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/b76ce492-791a-440a-bbe4-93cac16bb278' },
  { target_id: 'pcs',   name: 'PCS',   subtitle: 'Pacific Championship Series',         hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/b76ce492-791a-440a-bbe4-93cac16bb278' },
  { target_id: 'ljl',   name: 'LJL',   subtitle: 'League of Legends Japan League',      hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/b76ce492-791a-440a-bbe4-93cac16bb278' },
  { target_id: 'lcs',   name: 'LCS',   subtitle: 'League of Legends Championship Series', hasBoost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/b76ce492-791a-440a-bbe4-93cac16bb278' },
]

export function LeagueListPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const leagues = useFollowSelectionsStore((s) => s.leagues)
  const toggleLeague = useFollowSelectionsStore((s) => s.toggleLeague)

  const selectedIds = leagues.map((l) => l.target_id)
  const selected = leagues
  const unselected = LEAGUES.filter((l) => !selectedIds.includes(l.target_id))
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
          <FollowItemCard
            key={item.target_id}
            item={item}
            variant="league"
            selected={idx >= 0}
            selectionIndex={idx >= 0 ? idx : null}
            onToggle={() => toggleLeague(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
