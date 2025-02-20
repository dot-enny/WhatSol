export const ContinueButton = ({ onClick, children }: { onClick?: () => void, children: React.ReactNode }) => {
    return (
      <button onClick={onClick} className="cursor-pointer w-full bg-[#0DC143] pl-12 pr-1 py-1 max-sm:text-sm rounded-full flex items-center gap-x-4 max-sm:mx-auto">
        <span className="flex-1">{children}</span>
        <img src="/assets/icons/right-arrow.svg" alt="" />
      </button>
    )
  }