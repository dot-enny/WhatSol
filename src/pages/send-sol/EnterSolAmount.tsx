import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton"

export const EnterSolAmount = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="text-lg font-bold">Send SOL</div>
            <p className="text-sm mt-2 mb-10">
                Fill in the recipients phone number or select <br/> from your contact list
            </p>
            <div className="mb-14">
                <label className="flex flex-col items-start my-4">
                    <span>Phone Number</span>
                    <input type="number" placeholder="+234 810 665 0778" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
                </label>
                <label className="flex flex-col items-start my-4">
                    <span>Amount of SOL</span>
                    <input type="number" placeholder="e.g 2.5" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
                </label>
                <div className="text-[#0DC143] text-xs text-start">Current Balance : 5.23 SOL</div>
            </div>
            <ContinueButton onClick={() => navigate('/send-sol/confirm-transaction')}>Send SOL</ContinueButton>
        </div>
    )
}