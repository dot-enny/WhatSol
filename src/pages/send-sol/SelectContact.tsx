import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton"

export const SelectContact = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="text-lg font-bold">Send Sol</div>
            <p className="text-sm mt-2 mb-10">
                Fill in the recipients phone number or select <br/> from your contact list
            </p>
            <label className="flex flex-col items-start mb-24">
                <span>Phone Number</span>
                <input type="number" placeholder="+234 810 665 0778" className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0" />
            </label>
            <ContinueButton onClick={() => navigate('/send-sol/enter-sol-amount')}>Next</ContinueButton>
        </div>
    )
}
