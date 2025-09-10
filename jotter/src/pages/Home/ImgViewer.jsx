import React, { useState } from "react";
import img from "../../assets/image.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaLink, FaRecycle, FaShare, FaShareAlt } from "react-icons/fa";
import {
  IoMdEasel,
  IoMdRemoveCircle,
  IoMdShare,
  IoMdShareAlt,
  IoMdStarOutline,
} from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function ImgViewer() {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <div>
      <div className="bg-[#cecece49] py-2 z-50 fixed top-0 left-0 w-full flex justify-end">
        <button
          onClick={() => {
            setshowmenu(!showmenu);
          }}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <BsThreeDotsVertical />
        </button>
        <div
          className={` bg-gray-200  p-2 rounded ${!showmenu ? "hidden" : ""} fixed top-5 right-5 flex gap-2 flex-col`}
        >
          <span>Copy</span>
          <span>Rename</span>
          <span>Info</span>
        </div>
      </div>
      <div className="flex h-screen w-screen items-center justify-center">
        <img src={img} className=" " alt="" />
      </div>
      <div className="flex fixed bottom-0 left-0 w-screen justify-around">
        <div className="flex flex-col items-center justify-center gap-2">
          <IoMdShare className="text-2xl" />
          <span>Share</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <IoMdStarOutline className="text-2xl"  />
          <span>Favorite</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <RiDeleteBin6Line className="text-2xl"  />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
}
