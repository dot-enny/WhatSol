import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup/verify')
  }

  return (
    <div className="">
      <div className="text-lg font-bold">Sign Up</div>
      <p className="text-sm mt-2 mb-10">
        Send SOL to anyone on your contact list. Sign <br /> up with your number to get started.
      </p>
      <EnterPhoneNumber />
      <ContinueButton onClick={handleSignup} />
    </div>
  )
}

const EnterPhoneNumber = () => {
  return (
    <label className="flex flex-col items-start">
      <span>Phone Number</span>
      <input type="number" placeholder="+234 810 665 0778" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
    </label>
  )
}

const ContinueButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="w-full mt-16 bg-[#0DC143] pl-12 pr-1 py-1 max-sm:text-sm rounded-full flex items-center gap-x-4 max-sm:mx-auto">
      <span className="flex-1">Continue</span>
      <img src="/assets/icons/right-arrow.svg" alt="" />
    </button>
  )
}
