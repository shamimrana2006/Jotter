import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaEye, FaGoogle } from "react-icons/fa";
import googleLogo from "../../../public/g.png";
import { Button, IconButton } from "@material-tailwind/react";

export default function Signin() {
  const [shoPassword, setShowPass] = useState(true);
  return (
    <div className="flex !px-10 items-center justify-center flex-col h-screen gap-20">
      <h1 className="text-2xl text-gray-600 text-center font-bold">
        Continue Your Journey Let’s Sign In
      </h1>
      <div className="w-full">
        <form className="w-full flex flex-col gap-3">
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
          {/* Password */}
          <div class="w-full max-w-sm min-w-[200px]">
            <div class="relative">
              <FaEye
                onClick={() => {
                  setShowPass(!shoPassword);
                }}
                className="absolute right-3 top-3"
              />
              <input
                type={shoPassword ? "password" : "text"}
                placeholder=" "
                class="peer w-full bg-transparent placeholder-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow"
                id="password"
              />
              <label
                for="password"
                class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left
      peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90
      peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:scale-90"
              >
                Password
              </label>
            </div>
          </div>

          <div>
            <Link to={"/signin/forgot"} className="underline float-end">
              Forgot Password
            </Link>
          </div>

          <button className="btn_signin !mt-10">Log In</button>
          <span className="text-center">
            Don’t have any account ?{" "}
            <Link className=" font-bold hover:underline" to={"/signin/signup"}>
              {" "}
              Sign Up
            </Link>
          </span>
        </form>

        <div className="flex flex-col items-center gap-3 w-full">
          <div>or</div>

          <Link className="border w-full text-center flex items-center justify-center gap-2 border-gray-500 rounded-2xl !p-4 ">
            <img src={googleLogo} alt="" /> Sign Up With Google
          </Link>
        </div>
      </div>
    </div>
  );
}
