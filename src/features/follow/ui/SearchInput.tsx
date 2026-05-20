interface SearchInputProps {
  value: string
  onFocus: () => void
  onChange: (value: string) => void
  onClose: () => void
}

export function SearchInput({ value, onFocus, onChange, onClose }: SearchInputProps) {
  return (
    <div className="flex items-center gap-2 rounded-[8px] bg-white px-3 py-2 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.08)]">
      <svg
        className="h-4 w-4 shrink-0 text-[#969cda]"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <input
        autoFocus
        type="text"
        value={value}
        onFocus={onFocus}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search leagues..."
        className="font-pretendard flex-1 bg-transparent text-[14px] text-[#000000] placeholder-[#b2bac3] outline-none"
      />
      <button type="button" onClick={onClose} className="shrink-0 text-[#757b90]">
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
