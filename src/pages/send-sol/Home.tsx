import { ContinueButton } from "../../components/ContinueButton"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/send-sol/enter-sol-amount');
    }
    
    return (
        <div className="auth-layout-bg h-screen text-white flex flex-col justify-center items-center lg:pt-10 text-center">
            <img src="/assets/logo.svg" alt="" className="max-lg:hidden fixed top-12 left-16" />
            <Container>
                <div>
                    <img src="/assets/logo-alt.svg" alt="" className="mx-auto" />
                    <div className="my-10">
                        <div className="text-lg font-bold">Send SOL</div>
                        <p className="text-sm mt-2 mb-10">
                            Click to Send SOL to any number or anyone on  <br /> your contact list
                        </p>
                    </div>
                </div>
                <ContinueButton onClick={handleNextStep}>
                    Send SOL!
                </ContinueButton>
            </Container>
        </div>
    )
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:bg-[#262626] lg:px-24 lg:rounded-2xl lg:min-w-[500px] h-[500px] overflow-y-auto no-scrollbar grid place-items-center">
      { children }
    </div>
  )
}
