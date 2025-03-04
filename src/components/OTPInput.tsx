import React, { useRef } from 'react';

// const correctOTP = "123456" // validate from your server

interface OTPInputProps {
  numberOfDigits: number;
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
  otpError: string;
}

function OtpInputWithValidation({ numberOfDigits, otp, setOtp, otpError }: OTPInputProps) {
  // const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  // const [otpError] = useState('');
  const otpBoxReference = useRef<(HTMLInputElement | null)[]>([]);

  function handleChange(value: string, index: number) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if(value && index < numberOfDigits-1){
        otpBoxReference.current[index + 1]?.focus()
    }
  }

  function handleBackspaceAndEnter(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
    const target = e.target as HTMLInputElement;
    if(e.key === "Backspace" && !target.value && index > 0){
      otpBoxReference.current[index - 1]?.focus()
    }
    if(e.key === "Enter" && target.value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1]?.focus()
    }
  }

  // useEffect(() => { 
  //   if(otp.join("") !== "" && otp.join("") !== correctOTP){
  //     setOtpError("❌ Wrong OTP Please Check Again")
  //   }else{
  //     setOtpError('')
  //   } 
  //  }, [otp]);

  return (
    <div className="flex">
     <div className='flex items-center gap-1'>
      {otp.map((digit, index)=>(
        <input key={index} value={digit} maxLength={1}  
        onChange={(e)=> handleChange(e.target.value, index)}
        onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
        ref={(reference) => (otpBoxReference.current[index] = reference)}
        className={`border w-12 h-auto text-white p-3 rounded-md block bg-transparent focus:outline-white appearance-none`}
        />
      ))}

     </div>


      <p className={`text-lg text-white mt-4 ${otpError ? 'error-show' : ''}`}>{otpError}</p>
    </div>
  );
}

export default OtpInputWithValidation;