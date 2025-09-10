import React, { useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilePdf, FaFolder, FaImage } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import pdfFile from "/Resume.pdf";

export default function PDFViewer() {
  const param = useParams();
  console.log(param);

  const navigate = useNavigate();
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const files = [
    { type: "pdf", name: "pdf.png", modifyAT: "Jan 18,2025", id: 1 },
    { type: "pdf", name: "project", modifyAT: "Jan 18,2025", id: 2 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 3 },
    { type: "pdf", name: "project", modifyAT: "Jan 18,2025", id: 4 },
    { type: "pdf", name: "project", modifyAT: "Jan 18,2025", id: 5 },
    { type: "pdf", name: "project", modifyAT: "Jan 18,2025", id: 6 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 7 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 8 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 9 },
    { type: "pdf", name: "project", modifyAT: "Jan 18,2025", id: 10 },
    { type: "pdf", name: "document.pdf", modifyAT: "Jan 18,2025", id: 11 },
    { type: "pdf", name: "project", modifyAT: "Jan 18,2025", id: 12 },
    { type: "pdf", name: "project", modifyAT: "Jan 18,2025", id: 13 },
  ];
  return (
    <div className="px-2 relative">
      
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
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          src="https://drive.google.com/file/d/1TTewNw6fB1_9wdOpCAW6WcdUrxdk7jJ6/preview"
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="PDF Viewer"
        />
      </div>
    </div>
  );
}
