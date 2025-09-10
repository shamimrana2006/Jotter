import React, { useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePdf, FaFolder, FaImage } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Images() {
  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const files = [
    { type: "image", name: "image.png", modifyAT: "Jan 18,2025", id: 1 },
    { type: "image", name: "project", modifyAT: "Jan 18,2025", id: 2 },
    { type: "image", name: "document.pdf", modifyAT: "Jan 18,2025", id: 3 },
    { type: "image", name: "project", modifyAT: "Jan 18,2025", id: 4 },
    { type: "image", name: "project", modifyAT: "Jan 18,2025", id: 5 },
    { type: "image", name: "project", modifyAT: "Jan 18,2025", id: 6 },
    { type: "image", name: "document.pdf", modifyAT: "Jan 18,2025", id: 7 },
    { type: "image", name: "document.pdf", modifyAT: "Jan 18,2025", id: 8 },
    { type: "image", name: "document.pdf", modifyAT: "Jan 18,2025", id: 9 },
    { type: "image", name: "project", modifyAT: "Jan 18,2025", id: 10 },
    { type: "image", name: "document.pdf", modifyAT: "Jan 18,2025", id: 11 },
    { type: "image", name: "project", modifyAT: "Jan 18,2025", id: 12 },
    { type: "image", name: "project", modifyAT: "Jan 18,2025", id: 13 },
  ];
  return (
    <div className="px-2 relative">
      <div className="fixed bottom-10 bg-white rounded-full p-4 border border-gray-200 w-12 h-12 flex items-center justify-center  z-50 right-7 ">
        <input type="file" id="inputFile" className="hidden" accept="image/*"/>
        <label htmlFor="inputFile"> +</label>
      </div>
      <div className=" flex bg-white sticky top-0  z-50 justify-between py-3 pt-5  w-full ">
        <IoIosArrowBack
          onClick={() => {
            navigate("/");
          }}
          className=" text-3xl "
        />
        <span className="text-2xl font-bold">Images</span>
        <div></div>
      </div>
      {/* Search bar */}
      <div class="w-full max-w-sm min-w-[200px]">
        <div class="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>

          <input
            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Search here"
          />
        </div>
      </div>

      {/*  folders showing */}
      {files.map((item) => (
        <div
          key={item.id}
          className="flex w-full mt-2 justify-between items-center relative"
        >
          <div className="flex gap-2 items-center">
            {item.type === "image" ? (
              <FaImage className="text-2xl text-green-500" />
            ) : item.type === "folder" ? (
              <FaFolder className="text-2xl text-yellow-400" />
            ) : item.type === "pdf" ? (
              <FaFilePdf className="text-2xl text-red-700" />
            ) : (
              ""
            )}
            <div>
              <div>{item.name}</div>
              <div className="text-sm font-thin">{item.modifyAT}</div>
            </div>
          </div>

          {/* 3 dot button + popup */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => toggleMenu(item.id)}
              className="p-2 rounded-full hover:bg-gray-200"
            >
              <BsThreeDotsVertical />
            </button>

            {openMenuId === item.id && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-100 shadow-md rounded-lg flex flex-col p-2 z-50">
                <span className="p-1 hover:bg-gray-200 cursor-pointer">
                  Favorite
                </span>
                <span className="p-1 hover:bg-gray-200 cursor-pointer">
                  Copy
                </span>
                <span className="p-1 hover:bg-gray-200 cursor-pointer">
                  Rename
                </span>
                <span className="p-1 hover:bg-gray-200 cursor-pointer">
                  Duplicate
                </span>
                <span className="p-1 hover:bg-gray-200 cursor-pointer">
                  Delete
                </span>
                <span className="p-1 hover:bg-gray-200 cursor-pointer">
                  Share
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
