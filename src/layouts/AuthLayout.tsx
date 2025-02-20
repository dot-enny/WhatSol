import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (
    <div className="auth-layout-bg h-screen text-white flex flex-col items-center lg:items-start lg:pl-24 lg:pt-10 text-center">
      <div className="grid grid-cols-6 items-center my-12 w-full max-w-[300px]">
        <button className="cursor-pointer" onClick={() => window.history.back()}>
          <img src="/assets/icons/chevron-left.svg" alt="" className="justify-self-end" />
        </button>
        <img src="/assets/logo.svg" alt="" className="col-start-3 col-end-5" />
      </div>
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:bg-[#262626] lg:pt-16 lg:pb-24 lg:px-24 lg:rounded-2xl lg:min-w-[500px]">
      { children }
    </div>
  )
}
