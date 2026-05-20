export function SearchResultsEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-2">
      <svg
        className="h-10 w-10 text-[#ced6e6]"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="18" cy="18" r="11" stroke="currentColor" strokeWidth="2" />
        <path d="M27 27L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <p className="font-pretendard text-[14px] text-[#757b90]">No results found</p>
    </div>
  )
}
