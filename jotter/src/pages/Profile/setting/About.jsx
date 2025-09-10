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

export default function About() {
  const [shoPassword, setShowPass] = useState(true);
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
        <h1 className="text-center mt-10 text-2xl">About US</h1>
      </div>

      <div className="flex flex-col w-full gap-3 mt-4 text-2xl">
        <span></span>
      </div>
      <span className="mt-7">
        Shower Share is an innovative app designed to make sharing bathroom
        resources easier, more convenient, and sustainable. Whether you're a
        college student, a young professional, or anyone with limited access to
        private bathrooms, Shower Share is here to provide a seamless and
        respectful platform for sharing shower spaces. Our mission is to create
        a community-driven platform that connects people in need of shower
        facilities with those who have them available, all while ensuring
        safety, privacy, and convenience. Why Shower Share? Sustainable Living:
        We aim to reduce water waste and promote eco-friendly practices by
        encouraging the efficient use of bathroom resources. Convenience: Never
        struggle to find a shower when you need one again. With Shower Share,
        you can easily locate nearby available showers and book a time slot
        within seconds. Community-Focused: Shower Share isn’t just an app; it's
        a community. We prioritize mutual respect, privacy, and trust among
        users. Privacy & Safety: Our platform ensures that both users and hosts
        are verified and reviews are transparent to guarantee a safe and
        pleasant experience for everyone. Whether you’re traveling, moving
        between homes, or just need a clean, private space to refresh, Shower
        Share is the answer. Join the Shower Share community today, and let’s
        make everyday life a little bit easier and a lot more sustainable.
      </span>
    </div>
  );
}
