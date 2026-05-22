import { useState } from 'react'
import { PAGES, type Page } from './shared/constants/pages'
import { MainPage } from './pages/main'
import { MyPicksPage } from './pages/mypicks'

export default function App() {
  const [page, setPage] = useState<Page>(PAGES.MAIN)

  if (page === PAGES.MY_PICKS) {
    return <MyPicksPage onNavigate={setPage} />
  }

  return <MainPage onNavigate={setPage} />
}
