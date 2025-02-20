import { useNavigate } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton"

export const TransactionConfirmed = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-layout-bg h-screen text-white flex flex-col justify-center items-center lg:pt-10 text-center">
            <img src="/assets/logo.svg" alt="" className="max-lg:hidden fixed top-12 left-16" />
            <Container>
                <div>
                    <img src="/assets/logo.svg" alt="" className="mx-auto" />
                    <div className="p-6 max-lg:gradient-border">
                        <img src="/assets/illustrations/success.svg" alt="" className="mx-auto mb-6" />
                        <div className="font-semibold">Success!</div>
                        <p className="text-sm mt-2 mb-10">
                            You have succesfully  sent 3.65 SOL to <br /> <span className="text-[#0DC143]">+1(360) 530 6657</span>
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
