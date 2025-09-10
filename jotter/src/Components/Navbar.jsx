import {
  FaCalendar,
  FaEdit,
  FaHome,
  FaImage,
  FaPlus,
  FaStar,
  FaUserAlt,
} from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
export default function Navbar() {
  const [plusmenu, setplusmeneu] = useState(false);
  return (
    <div className="fixed mb-1 bg-white pt-7 border-t border-gray-200 shadow bottom-0 left-0 w-screen z-50">
      <RxCross1
        onClick={() => {
          setplusmeneu(!plusmenu);
        }}
        className={`p-3 -top-6 text-5xl bg-white left-[46%] absolute border rounded-full ${plusmenu ? "" : "rotate-45"} flex items-center justify-center`}
      />
      {/* menu */}
      {plusmenu ? <div className="flex absolute bottom-30 left-30 gap-2 flex-col">
        <div className="flex w-[150px] flex-col  items-center justify-center grow gap-2">
          <div className="flex w-full items-center gap-2 rounded grow bg-gray-100 p-2">
            <FaEdit />
            <span>Add Note</span>
          </div>
          <div className="flex w-full items-center gap-2 rounded grow bg-gray-100 p-2">
            <FaEdit />
            <span>Add Note</span>
          </div>
          <div className="flex w-full items-center gap-2 rounded grow bg-gray-100 p-2">
            <FaEdit />
            <span>Add Note</span>
          </div>
          <div className="flex w-full items-center gap-2 rounded bg-gray-100 p-2">
            <FaImage />
            <span>Import Image</span>
          </div>
        </div>
      </div>: ""}
      <div className="flex justify-around">
        <NavLink
          to={"/"}
          className={"flex items-center justify-center flex-col"}
        >
          <FaHome className="text-2xl" />
          <span className="activeT">Home</span>
        </NavLink>
        <NavLink
          to={"/favorite"}
          className={"flex items-center justify-center flex-col"}
        >
          <FaStar className="text-2xl" />
          <span className="activeT">Favorite</span>
        </NavLink>
        <NavLink
          to={"/Calendar"}
          className={"flex items-center justify-center flex-col"}
        >
          <IoMdCalendar className="text-2xl" />
          <span className="activeT">Calendar</span>
        </NavLink>
        <NavLink
          to={"/Profile"}
          className={"flex items-center justify-center flex-col"}
        >
          <FaUserAlt className="text-2xl" />
          <span className="activeT">Profile</span>
        </NavLink>
      </div>
    </div>
  );
}
