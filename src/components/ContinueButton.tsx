export const ContinueButton = ({ onClick, disabled, children }: { onClick?: () => void, disabled?: boolean, children: React.ReactNode }) => {
    return (
      <button disabled={disabled} onClick={onClick} className="relative cursor-pointer w-full bg-[#0DC143] pl-12 pr-1 py-1 max-sm:text-sm rounded-full flex items-center gap-x-4 max-sm:mx-auto
      disabled:bg-gray-400">
        <span className="flex-1">{children}</span>
        <img src="/assets/icons/right-arrow.svg" alt="" />
      </button>
    )
  }