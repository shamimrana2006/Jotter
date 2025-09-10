import React from "react";
import { FaHeadphones, FaHelicopter, FaPowerOff, FaUser } from "react-icons/fa";
import {
  IoIosSettings,
  IoMdArrowBack,
  IoMdArrowDropright,
  IoMdHelp,
  IoMdHelpBuoy,
  IoMdHelpCircle,
  IoMdHelpCircleOutline,
  IoMdReturnLeft,
  IoMdReturnRight,
  IoMdSettings,
} from "react-icons/io";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center px-3">
      <div className="rounded-full flex items-center justify-center text-white font-bold mt-10 bg-gray-500 w-24 h-24 p-2">
        profile
      </div>

      <span className="text-2xl">Shamim Rana</span>

      <div className="flex flex-col w-full gap-3 mt-4 text-2xl">
        <Link
          to={"/profile/edit"}
          className="flex !w-full p-2 bg-gray-100 rounded-2xl items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <FaUser />
            <span className="text-">Edit profile</span>
          </div>
          <IoMdArrowDropright />
        </Link>
        <Link
          to={"/profile/setting"}
          className="flex !w-full p-2 bg-gray-100 rounded-2xl items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <IoIosSettings />
            <span>Setting</span>
          </div>
          <IoMdArrowDropright />
        </Link>
        <Link to={"/profile/support"} className="flex !w-full p-2 bg-gray-100 rounded-2xl items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <IoMdHelpCircleOutline />
            <span>Support</span>
          </div>
          <IoMdArrowDropright />
        </Link>
        
      </div>
    </div>
  );
}
