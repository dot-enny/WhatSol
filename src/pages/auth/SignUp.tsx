import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton";

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
      <ContinueButton onClick={handleSignup}>Continue</ContinueButton>
    </div>
  )
}

const EnterPhoneNumber = () => {
  return (
    <label className="flex flex-col items-start mb-10">
      <span>Phone Number</span>
      <input type="number" placeholder="+234 810 665 0778" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
    </label>
  )
}

