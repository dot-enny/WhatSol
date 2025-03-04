import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton"
import { Spinner } from "../../components/Spinner";
import { useSendSol } from "../../hooks/useSendSol";
import { useDefaultStore } from "../../lib/DefaultStore";

export const ConfirmTransaction = () => {
    const navigate = useNavigate();
    const { sendSol, isSending } = useSendSol();
    const { recipient_phone, amount } = useDefaultStore();

    return (
        <form onSubmit={sendSol}>
            <div className="text-lg font-bold">Transaction Summary</div>
            <p className="text-sm mt-2 mb-6">
                Review Transaction History, Confirm Recipient <br /> Details
            </p>
            <div className="mb-5 gradient-border">
                <div className="text-sm flex flex-col gap-y-4 p-6 pt-8">
                    <div className="flex gap-x-2 text-start items-end">
                        <span className="inline-block">
                            Recipient's <br /> phone number :
                        </span>
                        <span className="text-[#0DC143] inline-block">
                            { recipient_phone }
                        </span>
                    </div>
                    <Detail detail="Amount of SOL" value={`${amount} SOL`} />
                    <Detail detail="Estimated transaction fees:" value="0.0 SOL" />
                    <div className="w-full h-px bg-gray-400 my-3" />
                    <Detail detail="Total amount" value={`${amount} SOL`} />
                </div>
            </div>
            <ContinueButton disabled={isSending}>
                <span className={`${isSending ? 'invisible' : ''}`}>Send SOL</span>
                <Spinner className={`${!isSending ? 'invisible' : 'size-2'}`} />
            </ContinueButton>
            <button className="mt-5" onClick={() => navigate('/home')}>Cancel Transaction</button>
        </form>
    )
}

const Detail = ({ detail, value }: { detail: string, value: string }) => {
    return (
        <div className="flex gap-x-2">
            <span className="inline-block">{detail}:</span>
            <span className="text-[#0DC143] inline-block">{value}</span>
        </div>
    )
}
