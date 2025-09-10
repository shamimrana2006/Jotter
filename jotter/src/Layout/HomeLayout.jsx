import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo1 from "../assets/logo.png";
import Navbar from "../Components/Navbar";

export default function HomeLayout() {
  const navigate = useNavigate();
  const [islogin, setIslogin] = useState(false);
  const location = useLocation();
  if (islogin) {
    return <Navigate to={"/signin/intro"}></Navigate>;
  }
  console.log(location.pathname === "/");

  return (
    <>
      <div>
        {location.pathname === "/" ? <Navbar /> : ""}

       <div className="!h-[90vh] overflow-auto">
         <Outlet />
       </div>
      </div>
    </>
  );
}
