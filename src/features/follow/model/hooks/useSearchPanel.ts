import { useState } from 'react'

export interface SearchPanel {
  isOpen: boolean
  query: string
  open: () => void
  close: () => void
  setQuery: (q: string) => void
}

export function useSearchPanel(): SearchPanel {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQueryState] = useState('')

  const open = () => setIsOpen(true)
  const close = () => {
    setIsOpen(false)
    setQueryState('')
  }
  const setQuery = (q: string) => setQueryState(q)

  return { isOpen, query, open, close, setQuery }
}
