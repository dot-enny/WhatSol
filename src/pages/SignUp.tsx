import { useState } from "react";
import OtpInputWithValidation from "../components/OTPInput"
import { AuthLayout } from "../layouts/AuthLayout"

export const SignUp = () => {

  const [isVerifying, setIsVerifying] = useState(false);

  const handleSignup = () => {
    setIsVerifying(!isVerifying);
  }

  return (
    <AuthLayout>
      <div className="">
        <FormStateCopy isVerifying={isVerifying} />
        <FormInput isVerifying={isVerifying} />
        <ContinueButton onClick={handleSignup} />
        {  isVerifying && <button className="mt-5" onClick={handleSignup}>Change phone number</button> }
      </div>
    </AuthLayout>
  )
}

const FormStateCopy = ({ isVerifying }: { isVerifying: boolean }) => {
  return (
    <>
      <div className="text-lg font-bold">{isVerifying ? 'Verify its you' : 'SignUp'}</div>
      {
        isVerifying ?
          <p className="text-sm mt-2 mb-10">
            Enter the verification code sent to your phone <br /> number.
          </p> :
          <p className="text-sm mt-2 mb-10">
            Send SOL to anyone on your contact list. Sign <br /> up with your number to get started.
          </p>
      }
    </>
  )
}

const FormInput = ({ isVerifying }: { isVerifying: boolean }) => {
  return (
    <>
      {isVerifying ? <VerifyPhoneNumber /> : <EnterPhoneNumber />}
    </>
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

const VerifyPhoneNumber = () => {
  return (
    <>
      <OtpInputWithValidation numberOfDigits={6} />
    </>
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
