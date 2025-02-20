import { ContinueButton } from "../../components/ContinueButton";
import OtpInputWithValidation from "../../components/OTPInput"
import { useNavigate } from "react-router-dom";

export const Verify = () => {

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup/create-password')
  }

  return (
    <div className="">
      <div className="text-lg font-bold">Verify its you</div>
      <p className="text-sm mt-2 mb-10">
        Enter the verification code sent to your phone <br /> number.
      </p>
      <OtpInputWithValidation numberOfDigits={6} />
      <div className="mt-10">
        <ContinueButton onClick={handleSignup}>Continue</ContinueButton>
      </div>
      <button className="mt-5" onClick={handleSignup}>Change phone number</button>
    </div>
  )
}

