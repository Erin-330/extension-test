import { PAGES } from '../../../shared/constants/pages'
import {
  useFollowSelectionsStore,
  type FollowTargetItem,
} from '../../../features/follow/model/store/followSelectionsStore'
import { FollowPageLayout } from '../../../features/follow/ui/FollowPageLayout'
import { FollowCard } from '../../../features/follow/ui/FollowCard'

const imgT1 = 'https://www.figma.com/api/mcp/asset/a8bdb06d-3c8d-4398-b812-285a821567e4'
const imgKt = 'https://www.figma.com/api/mcp/asset/83ec45d9-3dc9-4ede-8a45-91454cdda4e8'
const imgGenG = 'https://www.figma.com/api/mcp/asset/70744cff-bf68-4692-9c7b-d8c312d86e5d'
const imgHanwha = 'https://www.figma.com/api/mcp/asset/24ce8c2a-5b78-41fa-b676-c3c9c691a337'
const imgDplus = 'https://www.figma.com/api/mcp/asset/ce5acc67-37aa-4f03-8a38-c45e3a740be3'
const imgWeibo = 'https://www.figma.com/api/mcp/asset/ec12b859-e4db-4c2c-b5e6-a1e78c6bf986'
const imgWeibo2 = 'https://www.figma.com/api/mcp/asset/52ed3403-dfd0-4183-ba95-7d37ef9a4689'

const MOCK_TEAMS: (FollowTargetItem & { logoInset?: string })[] = [
  { target_id: 't1', name: 'T1', logoUrl: imgT1, logoInset: '5% 5% 5% 5%', hasBoost: true },
  { target_id: 'kt', name: 'KT Rolster', logoUrl: imgKt, logoInset: '20% 19.17% 16.67% 18.33%', hasBoost: true },
  { target_id: 'geng', name: 'GEN G', logoUrl: imgGenG, logoInset: '15% 9.05% 14.89% 9.17%' },
  { target_id: 'hle', name: 'Hanwha Life Esports', logoUrl: imgHanwha, logoInset: '15.38% 0 14.88% 0.13%' },
  { target_id: 'dk', name: 'Dplus KIA', logoUrl: imgDplus, logoInset: '30% 4.17% 30.28% 4.17%' },
  { target_id: 'wbg', name: 'Weibo Gaming', logoUrl: imgWeibo, logoInset: '17.5% 10.75% 18.3% 10%' },
  { target_id: 'tes', name: 'TES', logoUrl: imgWeibo, logoInset: '17.5% 10.75% 18.3% 10%' },
  { target_id: 'jdg', name: 'JDG', logoUrl: imgWeibo, logoInset: '17.5% 10.75% 18.3% 10%' },
  { target_id: 'blg', name: 'BLG', logoUrl: imgWeibo2, logoInset: '17.5% 10.75% 18.3% 10%' },
  { target_id: 'ig', name: 'Invictus Gaming', logoUrl: imgWeibo2, logoInset: '17.5% 10.75% 18.3% 10%', hasBoost: true },
]

type Props = { onNavigate: (page: string) => void }

export function TeamListPage({ onNavigate }: Props) {
  const { teams, toggleTeam } = useFollowSelectionsStore()
  const selectedIds = teams.map((t) => t.target_id)
  const selected = selectedIds
    .map((id) => MOCK_TEAMS.find((i) => i.target_id === id))
    .filter((i): i is (typeof MOCK_TEAMS)[number] => i !== undefined)
  const unselected = MOCK_TEAMS.filter((i) => !selectedIds.includes(i.target_id))
  const ordered = [...selected, ...unselected]

  return (
    <FollowPageLayout
      title="Back Your Team"
      subtitle="Follow your favorite Teams"
      currentStep={1}
      showPrev={true}
      onPrev={() => onNavigate(PAGES.FOLLOW_LEAGUE)}
      onNext={() => onNavigate(PAGES.FOLLOW_PLAYER)}
      onClose={() => onNavigate(PAGES.MAIN)}
    >
      {ordered.map((item) => {
        const idx = selectedIds.indexOf(item.target_id)
        return (
          <FollowCard
            key={item.target_id}
            variant="team"
            logoUrl={item.logoUrl}
            logoInset={item.logoInset}
            name={item.name}
            hasBoost={item.hasBoost}
            selected={idx >= 0}
            selectedIndex={idx >= 0 ? idx + 1 : undefined}
            onClick={() => toggleTeam(item)}
          />
        )
      })}
    </FollowPageLayout>
  )
}
