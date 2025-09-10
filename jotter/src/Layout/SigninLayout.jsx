import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function SigninLayout() {
  return (
    <div className="flex items-center justify-center">
      
      <Outlet />
    </div>
  );
}
