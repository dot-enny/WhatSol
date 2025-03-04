import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton";
import React, { useState } from "react";
import { Spinner } from "../../components/Spinner";
import { useDefaultStore } from "../../lib/DefaultStore";
import { api } from "../../api/axios";

export const CreatePassword = () => {
  const navigate = useNavigate();
  const { phone, setAccessToken } = useDefaultStore();

  const [isLoading, setIsLoading] = useState(false);

  const handleCreatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement);
    const { password, confirmPassword } = Object.fromEntries(formData) as { password: string, confirmPassword: string };
    console.log({ password, confirmPassword });
    if (password.trim() === "" || confirmPassword.trim() === "") {
      alert('Password cannot be empty');
      return;
    };

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const body = { phone, password };
    try {
      setIsLoading(true);
      const response = await api.post('/auth/create-password', body);
      console.log(response);
      setAccessToken(response.data.accessToken);
      navigate('/signin');
    } catch (error) {
      console.error('error creating password', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className="text-lg font-bold">Create Password</div>
      <p className="text-sm mt-2 mb-10">
        Create a secure password to access your <br /> WhatSOl account.
      </p>
      <form className="min-w-[258px] grid gap-y-6" onSubmit={handleCreatePassword}>
        <label className="flex flex-col items-start">
          <span>Password</span>
          <input name="password" type="password" placeholder="Kim3544%" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
        </label>
        <label className="flex flex-col items-start mb-10">
          <span>Confirm Password</span>
          <input name="confirmPassword" type="password" placeholder="*******" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
        </label>
        <ContinueButton>
          <span className={`${isLoading ? 'invisible' : ''}`}>Continue</span>
          <Spinner className={`${!isLoading ? 'invisible' : 'size-2'}`} />
        </ContinueButton>
      </form>
    </div>
  )
}