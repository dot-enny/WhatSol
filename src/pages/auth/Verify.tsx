import { useState, useEffect } from "react";
import { api } from "../../api/axios";
import { ContinueButton } from "../../components/ContinueButton";
import OtpInputWithValidation from "../../components/OTPInput";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { useDefaultStore } from "../../lib/DefaultStore";

export const Verify = () => {
  const navigate = useNavigate();
  const { phone } = useDefaultStore();

  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpError, setOtpError] = useState("");

  // cooldownSeconds is the number of seconds remaining in the cooldown.
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  // currentCooldownTime can be used to set dynamic cooldown (increases on retries)
  const [currentCooldownTime, setCurrentCooldownTime] = useState(30);

  const handleVerifyOTP = async () => {
    setIsLoading(true);
    const otpStr = otp.join("");
    try {
      setIsLoading(true);
      const body = { phone, otp: otpStr };
      const response = await api.post("/auth/verify-otp", body);
      console.log('verifyOTP', response.data);
      navigate('/signup/create-password')
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            setOtpError(error.message);
        } else {
            setOtpError("An unexpected error occurred.");
        }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(otp.join("").length === 6 && otp.join("") !== "") {
      handleVerifyOTP();
    }
  }, [otp]);

  const handleRequestOTP = async () => {
    setIsLoading(true);
    try {
      const body = { phone };
      const response = await api.post("/auth/request-otp", body);
      console.log("request-otp", response.data);
      // Start the cooldown after a successful request.
      setCooldownSeconds(currentCooldownTime);
      // Increase the cooldown length for subsequent tries (if needed)
      setCurrentCooldownTime((prev) => prev + 15);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger OTP request on mount.
  // useEffect(() => {
  //   let ignore = false;
  //   if(!ignore) {
  //     handleRequestOTP();
  //   }
  //   return () => { ignore = true; };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // Countdown effect for cooldown.
  useEffect(() => {
    if (cooldownSeconds > 0) {
      const timer = setTimeout(() => {
        setCooldownSeconds(cooldownSeconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldownSeconds]);

  useEffect(() => {
    console.log(otp.join(""));
  }, [otp]);

  return (
    <form>
      <div className="text-lg font-bold">Verify its you</div>
      <p className="text-sm mt-2 mb-10">
        Enter the verification code sent to your phone <br /> number.
      </p>
      <OtpInputWithValidation
        numberOfDigits={6}
        otp={otp}
        setOtp={setOtp}
        otpError={otpError}
      />
      <div className="mt-10">
        <ContinueButton
          disabled={isLoading || cooldownSeconds > 0}
          onClick={handleRequestOTP}
        >
          <span className={`${isLoading ? "invisible" : ""}`}>
            {cooldownSeconds > 0
              ? `Retry in ${cooldownSeconds}s`
              : "Resend Code"}
          </span>
          <Spinner className={`${!isLoading ? "invisible" : "size-2"}`} />
        </ContinueButton>
      </div>
      <button className="mt-5" onClick={() => window.history.back()}>
        Change phone number
      </button>
    </form>
  );
};
