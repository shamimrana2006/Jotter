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

export default function Privacy() {
  
  const navigate = useNavigate();
  return (
    <div className="flex  bg-white z-50 flex-col gap-2 items-center justify-center px-3">
      <div className="fixed top-0 bg-white pb-2 w-full mb-5">
        <IoIosArrowBack
          onClick={() => {
            navigate("/profile/setting");
          }}
          className="fixed text-3xl left-5  top-10"
        />
        <h1 className="text-center mt-10 text-2xl">Privacy Policy</h1>
      </div>

      <div className="flex flex-col w-full gap-3 mt-4 text-2xl">
        <span></span>
      </div>
      <span className="mt-7">
        At Shower Share, we respect and protect your privacy. This Privacy
        Policy explains how we collect, use, store, and share information when
        you use our mobile application ("App") and related services
        ("Services"). By using the Shower Share App, you agree to the practices
        described in this Privacy Policy. If you do not agree with the terms of
        this Privacy Policy, please do not use the App We may collect the
        following types of information: Personal Information: When you create an
        account, we may collect your name, email address, phone number, and
        other details. Usage Data: Information on how you use the App, including
        IP address, device information, and usage patterns. Location Data: If
        you enable location services, we may collect location data to help you
        find available showers near you.
      </span>
    </div>
  );
}
