import { useNavigate } from "react-router-dom";
import { useDefaultStore } from "../lib/DefaultStore";
import { useState } from "react";
import { api } from "../api/axios";

export const useSignup = () => {
    const navigate = useNavigate();
    const { setPhone, phone } = useDefaultStore();
  
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
  
    const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const { phone } = Object.fromEntries(formData) as { phone: string };
      const trimmedPhone = phone.replace(/\s+/g, '');
      console.log(trimmedPhone);
      if (phone.trim() === "") return;
      setPhone(trimmedPhone);
      const body = { phone: trimmedPhone };
      try {
        setError('');
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
        if (error instanceof Error) {
          console.error('error signing up', error.message);
          setError(error.message);
        } else {
          setError("An unexpected error occurred.");
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
  
    return { signUp, isLoading, error }
}