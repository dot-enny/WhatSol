import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton"

export const ConfirmTransaction = () => {
    const navigate = useNavigate();

    return (
        <div>
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
                            +1 (340) 290 8800
                        </span>
                    </div>
                    <Detail detail="Amount of SOL" value="3.6 SOL" />
                    <Detail detail="Estimated transaction fees:" value="0.05 SOL" />
                    <div className="w-full h-px bg-gray-400 my-3" />
                    <Detail detail="Total amount" value="3.65 SOL" />
                </div>
            </div>
            <ContinueButton onClick={() => navigate('/transaction-confirmed')}>Confirm</ContinueButton>
            <button className="mt-5" onClick={() => navigate('/home')}>Cancel Transaction</button>
        </div>
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
