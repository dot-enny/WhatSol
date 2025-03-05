import { useNavigate } from "react-router-dom";
import { useDefaultStore } from "../lib/DefaultStore";
import { useState } from "react";
import { api } from "../api/axios";

export const useSignin = () => {
    const navigate = useNavigate();
    const { setAccessToken, previousRoute } = useDefaultStore();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        const { phone, password } = Object.fromEntries(formData) as { phone: string, password: string };
        console.log({ phone, password });
        const trimmedPhone = phone.replace(/\s+/g, '');
        const body = { phone: trimmedPhone, password };
        const isValidPhone = /^\+\d{1,3}\d{6,14}$/.test(trimmedPhone);
        if (!isValidPhone) {
            setError("Invalid phone number format. Use country code followed by phone number.");
            return;
        }
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
                console.error('error signing in', error);
                setError(error.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    }

    return { signIn, isLoading, error }
}