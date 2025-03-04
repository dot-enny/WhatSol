import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface DefaultStore {
    phone: string;
    setPhone: (phone: string) => void;
    accessToken: string;
    setAccessToken: (accessToken: string) => void;
    recipient_phone: string;
    setRecipientPhone: (recipient_phone: string) => void;
    amount: string;
    setSolAmount: (amount: string) => void;
    previousRoute: string,
    setPreviousRoute: (previousRoute: string) => void;
}

export const useDefaultStore = create<DefaultStore>()(
    persist(
        (set) => ({
            phone: '',
            setPhone: (phone: string) => set({ phone }),
            recipient_phone: '',
            setRecipientPhone: (recipient_phone: string) => set({ recipient_phone }),
            accessToken: '',
            setAccessToken: (accessToken: string) => set({ accessToken }),
            amount: '',
            setSolAmount: (amount: string) => set({ amount }),
            previousRoute: '',
            setPreviousRoute: (previousRoute: string) => set({ previousRoute })
        }),
        {
            name: 'default-store',
            partialize: (state) => ({ accessToken: state.accessToken, phone: state.phone, recipient_phone: state.recipient_phone, amount: state.amount }),
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)