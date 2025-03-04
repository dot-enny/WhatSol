import { useEffect, useState } from "react";
import { api } from "../api/axios";
import { useDefaultStore } from "../lib/DefaultStore";

export const useGetSolBalance = () => {
    const { accessToken } = useDefaultStore();

    const [solBalance, setSolBalance] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        let ignore = false;

        const getSolBalance = async () => {
            setError('');
            try {
                if (ignore) return;
                setIsFetching(true);
                const response = await api.get('wallet_balanc', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    withCredentials: true
                });
                setSolBalance(response.data.wallet_balance);
            } catch (error) {
                if (error instanceof Error) {
                    console.error('error getting sol balance', error.message);
                    setError(error as unknown as string);
                } else {
                    setError("An unexpected error occurred.");
                }
            } finally {
                setIsFetching(false);
            }
        }

        getSolBalance()

        return () => { ignore = true }
    }, [])

    return { isFetching, solBalance, error }
}