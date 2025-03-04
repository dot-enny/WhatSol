import React, { useState } from "react";
import { api } from "../api/axios";
import { useDefaultStore } from "../lib/DefaultStore";
import { useNavigate } from "react-router-dom";

export const useSendSol = () => {
    const navigate = useNavigate();
    const { accessToken, recipient_phone, amount } = useDefaultStore();

    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState('');

    const sendSol = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // const formData = new FormData(e.target as HTMLFormElement);
        // const { recipient_phone, amount } = Object.fromEntries(formData) as { recipient_phone: string, amount: string };
        // console.log({ recipient_phone, amount });

        const body = { recipient_phone, amount: Number(amount) };
        try {
            setError('');
            setIsSending(true);
            const response = await api.post('send',
                body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            console.log(response);
            navigate('/transaction-confirmed');
        } catch (error) {
            if (error instanceof Error) {
                console.error('error sending sol', error);
                setError(error.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setIsSending(false);
        }
    }

    return { isSending, sendSol, error }
}