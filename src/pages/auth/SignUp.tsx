import { Link } from "react-router-dom";
import { ContinueButton } from "../../components/ContinueButton";
import { Spinner } from "../../components/Spinner";
import { useSignup } from "../../hooks/useSignup";

export const SignUp = () => {
  const { signUp, isLoading, error } = useSignup();

  return (
    <form onSubmit={signUp}>
      <div className="text-lg font-bold">Sign Up</div>
      <p className="text-sm mt-2 mb-10">
        Sign up with your number to get started.
      </p>
      <EnterPhoneNumber />
      {
        error &&
        <div className="text-red-400 max-w-[280px] text-xs mb-4">{error}</div>
      }
      <ContinueButton disabled={isLoading}>
        <span className={`${isLoading ? 'invisible' : ''}`}>Continue</span>
        <Spinner className={`${!isLoading ? 'invisible' : 'size-2'}`} />
      </ContinueButton>
      <div className="flex justify-between mt-4">
        <span>Already have an account ?</span>
        <Link to="/signin" className="text-[#0DC143]">Login</Link>
      </div>
    </form>
  )
}

const EnterPhoneNumber = () => {
  return (
    <label className="flex flex-col items-start mb-10">
      <span>Phone Number</span>
      <input type="text" name="phone" placeholder="+234 810 665 0778"
        pattern="^\+[\d\s]+$" 
        title="Phone number must start with a '+' and be followed by digits and optional spaces" 
        className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0"
        required
      />
    </label>
  )
}

