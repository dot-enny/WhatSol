import { Link, useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton";
import React, { useState } from "react";
import { api } from "../../api/axios";
import { useDefaultStore } from "../../lib/DefaultStore";
import { Spinner } from "../../components/Spinner";

export const SignIn = () => {
  const navigate = useNavigate();
  const { setAccessToken, previousRoute } = useDefaultStore();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement);
    const { phone, password } = Object.fromEntries(formData) as { phone: string, password: string };
    console.log({ phone, password });
    const trimmedPhone = phone.replace(/\s+/g, '');
    const body = { phone: trimmedPhone, password };
    try {
      setError('');
      setIsLoading(true);
      const response = await api.post('/auth/login', body);
      setAccessToken(response.data.access_token);
      console.log(response);
      if (previousRoute) {
        navigate(previousRoute);
        // setPreviousRoute('');
      } else {
        navigate('/home');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('error signing in', error.message);
        setError(error.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  

  return (
    <div className="">
      <div className="text-lg font-bold">Sign In</div>
      <p className="text-sm mt-2 mb-10">
        Sign In with your number to get started.
      </p>
      <form className="min-w-[258px] grid gap-y-6" onSubmit={handleSignIn}>
        <label className="flex flex-col items-start">
          <span>Phone Number</span>
          <input type="text" name="phone" placeholder="+1 (863) 293 2088" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
        </label>
        <label className="flex flex-col items-start mb-10">
          <span>Password</span>
          <input type="password" name="password" placeholder="*******" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
        </label>
        {
          error &&
          <div className="text-red-400">{error}</div>
        }
        <ContinueButton disabled={isLoading}>
          <span className={`${isLoading ? 'invisible' : ''}`}>Continue</span>
          <Spinner className={`${!isLoading ? 'invisible' : 'size-2'}`} />
        </ContinueButton>
        <div className="flex justify-between">
          <span>Don't have an account yet ?</span>
          <Link to="/signup" className="text-[#0DC143]">Register</Link>
        </div>
      </form>
    </div>
  )
}

