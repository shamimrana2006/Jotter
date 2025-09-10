import { IoIosArrowBack } from "react-icons/io";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full px-5">
      <IoIosArrowBack
        onClick={() => {
          navigate("/signin");
        }}
        className="absolute text-3xl left-5 top-10"
      />
      <div className="">
        <h1 className="text-center text-3xl font-bold mt-40">
          Forgot Your Password
        </h1>
        <h1 className="text-center mx-auto !mt-2 w-[80%]">
          Please enter your email to reset your password.
        </h1>
      </div>

      <div className="flex flex-col gap-4 items-center mt-20 justify-center">
        {/* email */} 
        <div class="w-full max-w-sm min-w-[200px]">
          <div class="relative">
            <input
              type="Email"
              placeholder=" "
              class="peer w-full bg-transparent placeholder-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow"
              id="Email"
            />
            <label
              for="Email"
              class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left
      peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90
      peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:scale-90"
            >
              Email
            </label>
          </div>
        </div>
        <Link to={"/signin/verificationOTP"}  className="btn_signin">Get Verification Code</Link>
      </div>
    </div>
  );
}
