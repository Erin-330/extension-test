import { PAGES } from '../../../shared/constants/pages'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowItemCard } from '../../../features/follow/ui/FollowItemCard'
import { useFollowSelectionsStore, type FollowTargetItem } from '../../../features/follow/model/store/followSelectionsStore'

const PLAYER_AVATAR = 'https://www.figma.com/api/mcp/asset/d476767f-8a32-44c2-9df5-fbe998356352'
const T1_LOGO = 'https://www.figma.com/api/mcp/asset/8b1bfadd-7df4-4432-b088-76a43e534819'
const KT_LOGO = 'https://www.figma.com/api/mcp/asset/26646f16-ca09-4472-8c37-79136e36527c'
const GENG_LOGO = 'https://www.figma.com/api/mcp/asset/74d7012b-7ac2-412d-bb5b-86967ad3f681'

const PLAYERS: FollowTargetItem[] = [
  { target_id: 'doran',   name: 'Doran',   subtitle: 'fullName', hasBoost: true,  logoUrl: PLAYER_AVATAR, teamLogoUrl: T1_LOGO },
  { target_id: 'faker',   name: 'Faker',   subtitle: 'fullName', hasBoost: true,  logoUrl: PLAYER_AVATAR, teamLogoUrl: T1_LOGO },
  { target_id: 'keria',   name: 'Keria',   subtitle: 'fullName', hasBoost: true,  logoUrl: PLAYER_AVATAR, teamLogoUrl: T1_LOGO },
  { target_id: 'oner',    name: 'Oner',    subtitle: 'fullName', hasBoost: true,  logoUrl: PLAYER_AVATAR, teamLogoUrl: T1_LOGO },
  { target_id: 'perfect', name: 'PerfecT', subtitle: 'fullName', hasBoost: false, logoUrl: PLAYER_AVATAR, teamLogoUrl: KT_LOGO },
  { target_id: 'bdd',     name: 'Bdd',     subtitle: 'fullName', hasBoost: false, logoUrl: PLAYER_AVATAR, teamLogoUrl: KT_LOGO },
  { target_id: 'cuzz',    name: 'Cuzz',    subtitle: 'fullName', hasBoost: false, logoUrl: PLAYER_AVATAR, teamLogoUrl: KT_LOGO },
  { target_id: 'aiming',  name: 'Aiming',  subtitle: 'fullName', hasBoost: false, logoUrl: PLAYER_AVATAR, teamLogoUrl: KT_LOGO },
  { target_id: 'ghost',   name: 'Ghost',   subtitle: 'fullName', hasBoost: false, logoUrl: PLAYER_AVATAR, teamLogoUrl: KT_LOGO },
  { target_id: 'canyon',  name: 'Canyon',  subtitle: 'fullName', hasBoost: true,  logoUrl: PLAYER_AVATAR, teamLogoUrl: GENG_LOGO },
  { target_id: 'raiad',   name: 'Raiad',   subtitle: 'fullName', hasBoost: true,  logoUrl: PLAYER_AVATAR, teamLogoUrl: GENG_LOGO },
]

export function PlayerListPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const players = useFollowSelectionsStore((s) => s.players)
  const togglePlayer = useFollowSelectionsStore((s) => s.togglePlayer)
  const reset = useFollowSelectionsStore((s) => s.reset)

  const selectedIds = players.map((p) => p.target_id)
  const selected = players
  const unselected = PLAYERS.filter((p) => !selectedIds.includes(p.target_id))
  const ordered = [...selected, ...unselected]

  const handleDone = () => {
    reset()
    onNavigate(PAGES.MAIN)
  }

  return (
    <FollowPageLayout
      title="Follow Players"
      subtitle="Select players to follow"
      currentStep={2}
      showPrev
      onPrev={() => onNavigate(PAGES.FOLLOW_TEAM)}
      onNext={handleDone}
      onClose={() => onNavigate(PAGES.MAIN)}
      nextLabel="Done"
    >
      {ordered.map((item) => {
        const idx = selectedIds.indexOf(item.target_id)
        return (
          <FollowItemCard
            key={item.target_id}
            item={item}
            variant="player"
            selected={idx >= 0}
            selectionIndex={idx >= 0 ? idx : null}
            onToggle={() => togglePlayer(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
