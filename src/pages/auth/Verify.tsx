import OtpInputWithValidation from "../../components/OTPInput"
import { useNavigate } from "react-router-dom";

export const Verify = () => {

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup/create-password')
  }

  return (
    <div className="">
      <div className="text-lg font-bold">Sign Up</div>
      <p className="text-sm mt-2 mb-10">
        Enter the verification code sent to your phone <br /> number.
      </p>
      <OtpInputWithValidation numberOfDigits={6} />
      <ContinueButton onClick={handleSignup} />
      <button className="mt-5" onClick={handleSignup}>Change phone number</button>
    </div>
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
