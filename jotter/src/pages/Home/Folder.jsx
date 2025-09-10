import React, { useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePdf, FaFolder, FaImage } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

export default function Folder() {
  const param = useParams();
  console.log(param);

  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const files = [
    { type: "folder", name: "folder.png", modifyAT: "Jan 18,2025", id: 1 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 2 },
    { type: "image", name: "document.pdf", modifyAT: "Jan 18,2025", id: 3 },
    { type: "pdf", name: "project", modifyAT: "Jan 18,2025", id: 4 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 5 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 6 },
    { type: "folder", name: "document.pdf", modifyAT: "Jan 18,2025", id: 7 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 8 },
    { type: "image", name: "document.pdf", modifyAT: "Jan 18,2025", id: 9 },
    { type: "pdf", name: "project", modifyAT: "Jan 18,2025", id: 10 },
    { type: "folder", name: "document.pdf", modifyAT: "Jan 18,2025", id: 11 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 12 },
    { type: "folder", name: "project", modifyAT: "Jan 18,2025", id: 13 },
  ];
  return (
    <div className="px-2 relative">
      <div className="fixed bottom-10 bg-white rounded-full p-4 border border-gray-200 w-12 h-12 flex items-center justify-center  z-50 right-7 ">
        <input type="file" id="inputFile" className="hidden" accept="image/*,.pdf,.text" />
        <label htmlFor="inputFile"> +</label>
      </div>
      <div className=" flex bg-white sticky top-0  z-50 justify-between py-3 pt-5  w-full ">
       <div className="flex gap-1 items-center"> <IoIosArrowBack
          onClick={() => {
            navigate("/");
          }}
          className=" text-3xl "
        />
        <span className="text-2xl  ">{param.folderName}</span></div>
        <div></div>
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
