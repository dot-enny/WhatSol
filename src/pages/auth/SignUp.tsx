import { Link, useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton";
import { api } from "../../api/axios";
import { useState } from "react";
import { Spinner } from "../../components/Spinner";
import { useDefaultStore } from "../../lib/DefaultStore";
import React from "react";

export const SignUp = () => {
  const navigate = useNavigate();
  const { setPhone, phone } = useDefaultStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { phone } = Object.fromEntries(formData) as { phone: string };
    const trimmedPhone = phone.replace(/\s+/g, '');
    console.log(trimmedPhone);
    if (phone.trim() === "") return;
    setPhone(trimmedPhone);
    const body = { phone: trimmedPhone };
    try {
      setIsLoading(true);
      const signUpResponse = await api.post('/auth/signup', body)
      await handleRequestOTP();
      console.log('signup', signUpResponse.data);
      navigate('/signup/verify')
    } catch (error) {
      console.error(error);
      if ((error as any).response?.status === 400) {
        if ((error as any).response?.data.detail === 'Username already registered') {
          alert('Phone number already exists, you will be redirected to the signin page')
          navigate('/signin')
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleRequestOTP = async () => {
    const body = { phone };
    try {
      const requestOTPResponse = await api.post("/auth/request-otp", body);
      console.log('requestOTP', requestOTPResponse.data);
    } catch (error) {
      console.error('error requesting otp')
      throw error;
    }
  }

  return (
    <form onSubmit={handleSignup}>
      <div className="text-lg font-bold">Sign Up</div>
      <p className="text-sm mt-2 mb-10">
        Send SOL to anyone on your contact list. Sign <br /> up with your number to get started.
      </p>
      <EnterPhoneNumber />
      <ContinueButton disabled={isLoading}>
        <span className={`${isLoading ? 'invisible' : ''}`}>Continue</span>
        <Spinner className={`${!isLoading ? 'invisible' : 'size-2'}`} />
      </ContinueButton>
      <div className="flex justify-between mt-4">
        <span>Already have an account ?</span>
        <Link to="/signin" className="text-[#0DC143]">Login</Link>
      </div>
    </form>
  )
}

const EnterPhoneNumber = () => {
  return (
    <label className="flex flex-col items-start mb-10">
      <span>Phone Number</span>
      <input type="text" name="phone" placeholder="+234 810 665 0778" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
    </label>
  )
}

