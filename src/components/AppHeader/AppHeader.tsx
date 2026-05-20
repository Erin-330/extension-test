import type { ReactNode } from 'react'

export interface AppHeaderProps {
  title?: ReactNode
  onClose?: () => void
  right?: ReactNode
}

export function AppHeader({ title, onClose, right }: AppHeaderProps) {
  return (
    <header className="h-14 px-3 flex items-center justify-between border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="w-10 flex items-center justify-start">
        {onClose && (
          <button
            type="button"
            aria-label="닫기"
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      <h1 className="text-base font-semibold text-gray-900 truncate">{title}</h1>

      <div className="w-10 flex items-center justify-end">{right}</div>
    </header>
  )
}
