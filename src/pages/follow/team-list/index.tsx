import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowItemCard } from '../../../features/follow/ui/FollowItemCard'
import { useFollowSelectionsStore, type FollowTargetItem } from '../../../features/follow/model/store/followSelectionsStore'

const TEAMS: FollowTargetItem[] = [
  { target_id: 't1',      name: 'T1',                  hasBoost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/4b469219-e0b8-4f1c-9810-8d472d5622fc' },
  { target_id: 'kt',      name: 'KT Rollster',         hasBoost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/92007a16-7431-467f-99d1-7adccecdd44f' },
  { target_id: 'geng',    name: 'GEN G',               hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/c169612f-163d-4586-a6e7-75de4911b463' },
  { target_id: 'hle',     name: 'Hanwha Life Esports', hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/702d5d12-f468-4e6b-a01b-283938b1cb8c' },
  { target_id: 'dk',      name: 'Dplus KIA',           hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/81aaa204-f51f-4d11-b479-c99b16189f86' },
  { target_id: 'wbg',     name: 'Weibo Gaming',        hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/c57ff199-ab80-433e-bd39-b0059702c857' },
  { target_id: 'blg',     name: 'Bilibili Gaming',     hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/c57ff199-ab80-433e-bd39-b0059702c857' },
  { target_id: 'jdg',     name: 'JD Gaming',           hasBoost: false, logoUrl: 'https://www.figma.com/api/mcp/asset/c57ff199-ab80-433e-bd39-b0059702c857' },
  { target_id: 'tes',     name: 'Top Esports',         hasBoost: true,  logoUrl: 'https://www.figma.com/api/mcp/asset/be33c92a-a90d-4fdd-b751-100c976e67c2' },
]

export function TeamListPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const teams = useFollowSelectionsStore((s) => s.teams)
  const toggleTeam = useFollowSelectionsStore((s) => s.toggleTeam)

  const selectedIds = teams.map((t) => t.target_id)
  const selected = teams
  const unselected = TEAMS.filter((t) => !selectedIds.includes(t.target_id))
  const ordered = [...selected, ...unselected]

  return (
    <FollowPageLayout
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      currentStep={1}
      showPrev
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
      onClose={() => onNavigate(PAGES.MAIN)}
    >
      {ordered.map((item) => {
        const idx = selectedIds.indexOf(item.target_id)
        return (
          <FollowItemCard
            key={item.target_id}
            item={item}
            variant="team"
            selected={idx >= 0}
            selectionIndex={idx >= 0 ? idx : null}
            onToggle={() => toggleTeam(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
