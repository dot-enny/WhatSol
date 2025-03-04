import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton";
import React, { useState } from "react";
import { api } from "../../api/axios";
import { useDefaultStore } from "../../lib/DefaultStore";
import { Spinner } from "../../components/Spinner";

export const SignIn = () => {
  const navigate = useNavigate();
  const { setPhone, setAccessToken, previousRoute, setPreviousRoute } = useDefaultStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement);
    const { phone, password } = Object.fromEntries(formData) as { phone: string, password: string };
    console.log({ phone, password });

    const body = { phone: `+${phone}`, password };
    try {
      setIsLoading(true);
      const response = await api.post('/auth/login', body);
      setPhone(`+${phone}`);
      setAccessToken(response.data.access_token);
      console.log(response);
      if(previousRoute) {
        navigate(previousRoute);
        setPreviousRoute('');
      } else {
        navigate('/home');
      }
    } catch (error) {
      console.error('error signing in', error);
    } finally {
      setIsLoading(false);
    }
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
          <input type="number" name="phone" placeholder="+1 (863) 293 2088" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
        </label>
        <label className="flex flex-col items-start mb-10">
          <span>Password</span>
          <input type="password" name="password" placeholder="*******" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
        </label>
        <ContinueButton>
          <span className={`${isLoading ? 'invisible' : ''}`}>Continue</span>
          <Spinner className={`${!isLoading ? 'invisible' : 'size-2'}`} />
        </ContinueButton>
      </form>
    </div>
  )
}

