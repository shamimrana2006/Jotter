import React, { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export function InputOneTimePassword() {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const navigate = useNavigate();
  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/[^0-9]/g, "");
    setOtp(newOtp);

    // next input focus
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (event, index) => {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    alert("Entered OTP: " + otp.join(""));
  };

  return (
    <div className="relative w-full px-3">
      <IoIosArrowBack
        onClick={() => {
          navigate("/signin/forgot");
        }}
        className="absolute text-3xl left-5 top-10"
      />
      <div className="">
        <h1 className="text-center text-3xl font-bold mt-40">
          Enter Verification Code.
        </h1>
        <h1 className="text-center mx-auto !mt-2 w-[80%]">
          Please enter the 6 digit verification code sent to your e-mail
        </h1>
      </div>
      <div className="w-full max-w-sm mx-auto mt-10">
        <h2 className="text-center font-medium mb-4">
          Enter the 6-digit OTP sent to <strong>+1 123-456-7890</strong>
        </h2>

        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <React.Fragment key={index}>
              <input
                type="text"
                maxLength={1}
                className="w-10 h-12 text-center border border-gray-300 rounded text-lg focus:border-blue-500 focus:outline-none"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
              {index === 2 && <span className="text-2xl"></span>}
            </React.Fragment>
          ))}
        </div>

        <button onClick={()=>{
          handleSubmit()
          navigate("/signin/resetPassword")
        }} className="btn_signin">
          Submit OTP
        </button>   

        <p className="text-center mt-4 text-gray-500">
          Did not receive the code? <strong>Resend</strong>
        </p>
      </div>
    </div>
  );
}
