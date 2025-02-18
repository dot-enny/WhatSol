import { AuthLayout } from "../layouts/AuthLayout"

export const SignUp = () => {
  return (
    <AuthLayout>
      <div className="mt-12">
        <div className="text-lg font-bold">SignUp</div>
        <p className="text-sm">Send SOL to anyone on your contact list. Sign <br /> up with your number to get started.</p>
        <label className="flex flex-col items-start mt-8">
          <span>Phone Number</span>
          <input type="number" placeholder="+234 810 665 0778" className="border border-[#D9D9D9] w-full p-3 rounded-lg" />
        </label>
        <button className="w-full mt-14 bg-[#0DC143] pl-12 pr-1 py-1 max-sm:text-sm rounded-full flex items-center gap-x-4 max-sm:mx-auto">
          <span className="flex-1">Continue</span>
          <img src="/assets/icons/right-arrow.svg" alt="" />
        </button>
      </div>
    </AuthLayout>
  )
}
