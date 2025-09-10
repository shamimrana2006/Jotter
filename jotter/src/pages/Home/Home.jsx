import React, { useState, useEffect, useRef } from "react";
import {
  FaBook,
  FaDatabase,
  FaFilePdf,
  FaFolder,
  FaImage,
  FaNotEqual,
  FaNotesMedical,
  FaTextHeight,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiLock2Line } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Home() {
  const recentfile = [
    { type: "image", name: "image.png", modifyAT: "Jan 18,2025", id: 1 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 2 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 3 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 4 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 5 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 6 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 7 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 8 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 9 },
    { type: "Note", name: "project", modifyAT: "Jan 18,2025", id: 10 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 11 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 12 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 13 },
  ];

  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="px-3">
      {/* Top bar */}
      <div className="flex justify-between sticky top-0 bg-white z-50 py-4 items-center text-4xl pt-3 ">
        <span className="font-bold">Jotter</span>
       <Link to={"/pin"}> <RiLock2Line /></Link>
      </div>

      {/* Search bar */}
      <div className="w-full mt-4 max-w-sm min-w-[200px]">
        <div className="relative flex items-center">
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  focus:shadow"
            placeholder="Search here"
          />
          <HiOutlineMenuAlt3 className="text-4xl ml-3" />
        </div>
      </div>

      {/* Storage card */}
      <div className="grid grid-cols-3 mt-3 gap-3">
        <div
          to={"/storage"}
          className="col-span-2 flex flex-col rounded bg-gray-100 p-3"
        >
          <span className="flex gap-1 items-center">
            <div className="flex text-3xl font-bold">
              <FaDatabase />
            </div>
            <span className="font-bold">Your storage: 15.00 GB</span>
          </span>
          <div className="grow"></div>
          <div className="text-sm flex flex-col">
            <span>usages storage: 5.00GB</span>
            <span>Available storage: 5.3GB</span>
          </div>
        </div>
        <Link
          to={"/folders"}
          className="col-span-1 rounded bg-gray-100 font-bold p-3"
        >
          <h1 className="flex items-center gap-2">
            <FaFolder className="text-yellow-400 text-3xl" />
            <span>Folder</span>
          </h1>
          <div className="text-[12px] flex flex-col font-normal mt-2">
            <span>Total Item:15</span>
            <span>Storage:5.3GB</span>
          </div>
        </Link>
        <Link
          to={"/images"}
          className="col-span-1 rounded bg-gray-100 font-bold p-3"
        >
          <h1 className="flex items-center gap-2">
            <FaImage className="text-green-400 text-3xl" />
            <span>Images</span>
          </h1>
          <div className="text-[12px] flex flex-col font-normal mt-2">
            <span>Total Item:15</span>
            <span>Storage:5.3GB</span>
          </div>
        </Link>
        <Link
          to={"/pdfs"}
          className="col-span-1 rounded bg-gray-100 font-bold p-3"
        >
          <h1 className="flex items-center gap-2">
            <FaFilePdf className="text-red-400 text-3xl" />
            <span>PDF</span>
          </h1>
          <div className="text-[12px] flex flex-col font-normal mt-2">
            <span>Total Item:15</span>
            <span>Storage:5.3GB</span>
          </div>
        </Link>
        <Link
          to={"/notes"}
          className="col-span-1 rounded bg-gray-100 font-bold p-3"
        >
          <h1 className="flex items-center gap-2">
            <FaBook className="text-yellow-400 text-3xl" />
            <span>Note</span>
          </h1>
          <div className="text-[12px] flex flex-col font-normal mt-2">
            <span>Total Item:15</span>
            <span>Storage:5.3GB</span>
          </div>
        </Link>
      </div>

      {/* Recent files */}
      <div>
        <h1 className="mt-4 text-2xl">Recent</h1>
        <div className="flex flex-col gap-2 items-center justify-around">
          {recentfile.map((item) => (
            <Link
              to={
                item.type == "image"
                  ? "/imageViewer"
                  : item.type == "pdf"
                    ? `/pdf/${item.name}`
                    : item.type == "folder"
                      ? `Folder/${item.name}`
                      : item.type == "Note"
                        ? `note/${item.name}`
                        : ""
              }
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
                ) : item.type == "Note" ? (
                  <FaBook />
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
