import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/home')
  }

  return (
    <div className="">
    <div className="text-lg font-bold">Sign In</div>
    <p className="text-sm mt-2 mb-10">
      Send SOL to anyone on your contact list. Sign In <br /> with your number to get started.
    </p>
    <form className="min-w-[258px] grid gap-y-6" onSubmit={handleSignIn}>
      <label className="flex flex-col items-start">
        <span>Phone Number</span>
        <input type="number" placeholder="+1 (863) 293 2088" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
      </label>
      <label className="flex flex-col items-start mb-10">
        <span>Password</span>
        <input type="password" placeholder="*******" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
      </label>
      <ContinueButton>Continue</ContinueButton>
    </form>
  </div>
  )
}

