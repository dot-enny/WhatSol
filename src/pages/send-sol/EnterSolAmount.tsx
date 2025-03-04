import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton"
import { useGetSolBalance } from "../../hooks/useGetSolBalance";
import React from "react";
import { useDefaultStore } from "../../lib/DefaultStore";
import { classNames } from "../../utils/helpers";

export const EnterSolAmount = () => {
    const navigate = useNavigate();
    const { isFetching, solBalance, error } = useGetSolBalance();
    const { setRecipientPhone, setSolAmount } = useDefaultStore();

    const handleFormState = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const { recipient_phone, amount } = Object.fromEntries(formData) as { recipient_phone: string, amount: string };
        const trimmedRecipientPhone = recipient_phone.replace(/\s+/g, '');
        const trimmedAmount = amount.replace(/\s+/g, '');
        setRecipientPhone(trimmedRecipientPhone);
        setSolAmount(trimmedAmount);
        navigate('/send-sol/confirm-transaction')
    };

    return (
        <form onSubmit={handleFormState}>
            <div className="text-lg font-bold">Send SOL</div>
            <p className="text-sm mt-2 mb-10">
                Fill in the recipients phone number
            </p>
            <div className="mb-14">
                <label className="flex flex-col items-start my-4">
                    <span>Phone Number</span>
                    <input type="text" name="recipient_phone" placeholder="+234 810 665 0778" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
                </label>
                <label className="flex flex-col items-start my-4">
                    <span>Amount of SOL</span>
                    <input type="text" name="amount" placeholder="e.g 2.5" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
                </label>
                <div className={classNames('text-[#0DC143] text-xs text-start text-wrap', error && 'text-red-400')}>Current Balance : { error ? error : isFetching ? 'loading...' : `${solBalance} SOL` }</div>
            </div>
            <ContinueButton>Send SOL</ContinueButton>
        </form>
    )
}