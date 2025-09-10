import React from "react";
import { FaHeadphones, FaHelicopter, FaInfoCircle, FaLock, FaQuestion, FaUnlockAlt, FaUser } from "react-icons/fa";
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
  IoMdSettings,
  IoMdWarning,
} from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

export default function Setting() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-2 items-center justify-center px-3">
 <IoIosArrowBack
         onClick={() => {
           navigate("/profile");
         }}
         className="fixed text-3xl left-5 top-10"
       />
       <h1 className="text-center mt-10 text-2xl">Settings</h1>

      <div className="flex flex-col w-full gap-3 mt-4 text-2xl">
        <Link to={"/profile/ChangePassword"} className="flex !w-full p-2 bg-gray-100 rounded-2xl items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <IoMdLock />
            <span className="text-">Change Password</span>
          </div>
          <IoMdArrowDropright />
        </Link>
        <Link to={"/profile/Terms"} className="flex !w-full p-2 bg-gray-100 rounded-2xl items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FaQuestion />
            <span>Terms & Conditions</span>
          </div>
          <IoMdArrowDropright />
        </Link>
        <Link to={"/profile/privacy"} className="flex !w-full p-2 bg-gray-100 rounded-2xl items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <IoMdWarning />
            <span>Privacy Policy</span>
          </div>
          <IoMdArrowDropright />
        </Link>
        <Link to={"/profile/about"} className="flex !w-full p-2 bg-gray-100 rounded-2xl items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FaInfoCircle />
            <span>About us</span>
          </div>
          <IoMdArrowDropright />
        </Link>
      </div>
    </div>
  );
}
