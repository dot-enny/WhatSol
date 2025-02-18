export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth-layout-bg h-screen text-white flex flex-col items-center text-center">
        <img src="/assets/logo.svg" alt="" />
        {children}
    </div>
  )
}
