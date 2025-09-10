import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaHeadphones,
  FaHelicopter,
  FaInfoCircle,
  FaLock,
  FaQuestion,
  FaUnlockAlt,
  FaUser,
} from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosSettings,
  IoMdArrowBack,
  IoMdArrowDropright,
  IoMdHelp,
  IoMdHelpBuoy,
  IoMdHelpCircle,
  IoMdHelpCircleOutline,
  IoMdLock,
  IoMdReturnRight,
  IoMdSettings,
  IoMdWarning,
} from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [shoPassword, setShowPass] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 items-center justify-center px-3">
      <IoIosArrowBack
        onClick={() => {
          navigate("/profile/setting");
        }}
        className="fixed text-3xl left-5 top-10"
      />
      <h1 className="text-center mt-10 text-2xl">Change Password</h1>

      <div className="flex flex-col w-full gap-3 mt-4 text-2xl">
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
              id="OLDpassword"
            />
            <label
              for="OLDpassword"
              class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90
                        peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:scale-90"
            >
              Old Password
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
              id="newpassword"
            />
            <label
              for="newpassword"
              class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90
                        peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:scale-90"
            >
              new Password
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
              id="ConfirmPassword"
            />
            <label
              for="ConfirmPassword"
              class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left
                        peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90
                        peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:scale-90"
            >
              Confirm Password
            </label>
          </div>
        </div>
      </div>
      <button className="btn_signin mt-32">
        <div className="flex gap-2 items-center  justify-center">
          <span>Change Password</span>
        </div>
      </button>
    </div>
  );
}
