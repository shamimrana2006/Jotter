import React, { useEffect } from "react";
import Logo1 from "../../assets/logo.png";
import { Navigate, useNavigate } from "react-router-dom";
export default function Start() {
  const navigate = useNavigate();
  const isLogin = true;
  useEffect(() => {
    setTimeout(() => {
      {
        isLogin ? navigate("/signin/start") : navigate("/");
      }
    }, 2000);
  }, []);

  return (
    <div className="w-screen container h-screen flex justify-center items-center flex-col gap-3">
      <img src={Logo1} alt="image not found" />
      <span className="text-center text-5xl font-bold ">Jotter</span>
    </div>
  );
}
