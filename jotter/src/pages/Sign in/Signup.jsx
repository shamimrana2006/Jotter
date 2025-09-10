import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import googleLogo from "../../../public/g.png";
import { Button, IconButton } from "@material-tailwind/react";

export default function SignUP() {
  const [shoPassword, setShowPass] = useState(true);
  return (
    <div className="flex !px-10 items-center w-full justify-center flex-col h-screen gap-20">
      <h1 className="text-2xl text-gray-600 text-center font-bold">
        Create Your Account
      </h1>
      <div className="w-full">
        <form className="w-full flex flex-col gap-3">
          {/* username */}
          <div class="w-full max-w-sm min-w-[200px]">
            <div class="relative">
              <input
                type="Username"
                placeholder=" " 
                class="peer w-full bg-transparent placeholder-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow"
                id="Username"
              />
              <label
                for="Username"
                class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left
      peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90
      peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:scale-90"
              >
                User Name
              </label>
            </div>
          </div>
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
                Password
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
          {/* aggrement check box  */}
          <div class="inline-flex items-center">
            <label
              class="flex items-center cursor-pointer relative"
              for="check-with-link"
            >
              <input
                type="checkbox"
                class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                id="check-with-link"
              />
              <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              class="cursor-pointer ml-2 text-slate-600 text-sm"
              for="check-with-link"
            >
              <p>
                I agree with the
                <a href="#" class="font-medium hover:text-slate-800 underline">
                  terms and conditions
                </a>
              </p>
            </label>
          </div>

          <button className="btn_signin !mt-10">Sign up</button>
          <span className="text-center">
            Don’t have any account ?{" "}
            <Link className=" font-bold hover:underline" to={"/signin"}>
              {" "}
              Log in
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
