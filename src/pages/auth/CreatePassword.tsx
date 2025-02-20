import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton";

export const CreatePassword = () => {

  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/signin')
  }

  return (
    <div className="">
      <div className="text-lg font-bold">Create Password</div>
      <p className="text-sm mt-2 mb-10">
        Create a secure password to access your <br /> WhatSOl account.
      </p>
      <form className="min-w-[258px] grid gap-y-6" onSubmit={handleSignup}>
        <label className="flex flex-col items-start">
          <span>Password</span>
          <input type="password" placeholder="Kim3544%" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
        </label>
        <label className="flex flex-col items-start mb-10">
          <span>Confirm Password</span>
          <input type="password" placeholder="*******" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
        </label>
        <ContinueButton>Continue</ContinueButton>
      </form>
    </div>
  )
}