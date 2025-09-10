import React, { useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePdf, FaFolder, FaImage } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import pdfFile from "/Resume.pdf";

export default function NoteViewer() {
  const param = useParams();
  console.log(param);

  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };


  return (
    <div className="px-2 relative">
      <div className="fixed bottom-10 bg-white rounded-full p-4 border border-gray-200 w-12 h-12 flex items-center justify-center  z-50 right-7 ">
        <input type="file" id="inputFile" className="hidden" accept=".pdf" />
        <label htmlFor="inputFile"> +</label>
      </div>
      <div className=" flex bg-white sticky top-0  z-50 justify-between py-3 pt-5  w-full ">
        <div className="flex gap-1 items-center">
          {" "}
          <IoIosArrowBack
            onClick={() => {
              navigate("/");
            }}
            className=" text-3xl"
          />
          <span className="text-2xl  ">{param.folderName}</span>
        </div>
        <div></div>
      </div>

      {/*  folders showing */}
      <div>
        <input type="text" placeholder="Title" autoFocus  className="w-full p-2  outline-none"/>
        <textarea name="" className="w-full h-screen p-2" placeholder="add note" id=""></textarea>

      </div>
    </div>
  );
}
