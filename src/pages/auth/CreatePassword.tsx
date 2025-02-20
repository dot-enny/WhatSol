import { useNavigate } from "react-router-dom";

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
        <label className="flex flex-col items-start">
          <span>Confirm Password</span>
          <input type="password" placeholder="*******" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
        </label>
        <ContinueButton />
      </form>
    </div>
  )
}

const ContinueButton = () => {
  return (
    <button className="w-full mt-10 bg-[#0DC143] pl-12 pr-1 py-1 max-sm:text-sm rounded-full flex items-center gap-x-4 max-sm:mx-auto">
      <span className="flex-1">Continue</span>
      <img src="/assets/icons/right-arrow.svg" alt="" />
    </button>
  )
}
