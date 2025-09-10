import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Button, IconButton } from "@material-tailwind/react";

export default function ResetPassword() {
  const [shoPassword, setShowPass] = useState(true);
  return (
    <div className="flex !px-10 items-center w-full justify-center flex-col h-screen gap-20">
      <div className="">
        <h1 className="text-center text-3xl font-bold mt-40">
          Reset Your Password?
        </h1>
        <h1 className="text-center mx-auto !mt-2 w-[80%]">
          Please enter your email to reset your password.
        </h1>
      </div>
      <div className="w-full">
        <form className="w-full flex flex-col gap-3">
          {/* Password */}
          <div class="w-full max-w-sm min-w-[200px]">
            <div class="relative">
              <div
                onClick={() => {
                  setShowPass(!shoPassword);
                }}
                className="flex items-center  right-3 top-3 absolute"
              >
                {shoPassword ? <FaEye /> : <FaEyeSlash />}
              </div>

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
                New Password
              </label>
            </div>
          </div>
          {/* Confirm Password */}
          <div class="w-full max-w-sm min-w-[200px]">
            <div class="relative">
              <div
                onClick={() => {
                  setShowPass(!shoPassword);
                }}
                className="flex items-center  right-3 top-3 absolute"
              >
                {shoPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
              <input
                type={shoPassword ? "password" : "text"}
                placeholder=" "
                class="peer w-full bg-transparent placeholder-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow"
                id="Cpassword"
              />
              <label
                for="Cpassword"
                class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left
                peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90
                peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:scale-90"
              >
                Confirm Password
              </label>
            </div>
          </div>

          <button className="btn_signin !mt-10">Reset Password</button>
        </form>
      </div>
    </div>
  );
}
