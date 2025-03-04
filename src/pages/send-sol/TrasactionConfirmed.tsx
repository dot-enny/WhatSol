import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton"
import React from "react";
import { useDefaultStore } from "../../lib/DefaultStore";

export const TransactionConfirmed = () => {
    const navigate = useNavigate();
    const { recipient_phone, amount } = useDefaultStore();

    return (
        <div className="auth-layout-bg h-screen text-white flex flex-col justify-center items-center lg:pt-10 text-center">
            <img src="/assets/logo.svg" alt="" className="max-lg:hidden fixed top-12 left-16" />
            <Container>
                <div>
                    <img src="/assets/logo.svg" alt="" className="mx-auto mb-10" />
                    <div className="p-6 gradient-border">
                        <img src="/assets/illustrations/success.svg" alt="" className="mx-auto mb-6" />
                        <div className="font-semibold">Success!</div>
                        <p className="text-sm mt-2 mb-10">
                            You have succesfully  sent {amount} SOL to <br /> <span className="text-[#0DC143]">{recipient_phone}</span>
                        </p>
                    </div>
                </div>
                <ContinueButton onClick={() => navigate('/home')}>Done</ContinueButton>
            </Container>
        </div>
    )
}

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="lg:bg-[#262626] lg:px-24 lg:rounded-2xl lg:min-w-[500px] h-[500px] overflow-y-auto no-scrollbar grid place-items-center py-4">
        { children }
      </div>
    )
  }
