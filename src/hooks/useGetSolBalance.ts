import { useEffect, useState } from "react";
import { api } from "../api/axios";
import { useDefaultStore } from "../lib/DefaultStore";

export const useGetSolBalance = () => {
    const { accessToken } = useDefaultStore();

    const [solBalance, setSolBalance] = useState(false);
    const [isFetching, setIsFetching] = useState(false);


    useEffect(() => {
        let ignore = false;

        const getSolBalance = async () => {
            try {
                if (ignore) return;
                setIsFetching(true);
                const response = await api.get('wallet_balance', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    withCredentials: true
                });
                setSolBalance(response.data.wallet_balance);
            } catch (error) {
                console.error('error sending sol', error);
            } finally {
                setIsFetching(false);
            }
        }

        getSolBalance()

        return () => { ignore = true }
    }, [])

    return { isFetching, solBalance }
}