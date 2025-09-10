import React from "react";
import {
  FaHeadphones,
  FaHelicopter,
  FaInfoCircle,
  FaLock,
  FaPhone,
  FaQuestion,
  FaUnlockAlt,
  FaUser,
  FaVoicemail,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
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
import supportLogo from "/support.png";

export default function Support() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 items-center justify-center px-3">
      <IoIosArrowBack
        onClick={() => {
          navigate("/profile");
        }}
        className="fixed text-3xl left-5 top-10"
      />
      <h1 className="text-center mt-10 text-2xl">Support</h1>

      <div className="flex flex-col w-full gap-3 mt-4 text-2xl">
        <div className="w-full flex-col flex items-center justify-center">
          <img src={supportLogo} alt="" />
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <span className="text-center text-sm py-5">
              If you face any kind of problem with our service feel free to
              contact us.
            </span>
            <span className="flex textsm items-center text-sm justify-center gap-2">
              <FaPhone />
              <span>+880 1976 4744 21</span>
            </span>
            <span className="flex  items-center text-sm justify-center gap-2">
              <HiOutlineMail className="text-[20px]" />
              <span>shamimrana345@gmail.com</span>
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
