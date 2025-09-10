import { Link } from "react-router-dom";
import Logo from "../../assets/logo (1) 2.png";

export default function Aggrement() {
  return (
    <div className="container h-screen !px-10 flex items-center justify-center">
      <div className="flex flex-col items-center gap-24">
        <img className="mb-5 pb-5" src={Logo} alt="logo not found" />

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl text-center">
            Your Notes, Organized Automatically
          </h1>
          <span className="text-center  ">
            Save your screenshots, PDFs, and notes in one place. Search
            effortlessly and find what you need in seconds.
          </span>
        </div>
        <Link to={"/signin"} className="btn_signin">
          Get Stared for free
        </Link>
        <button className="underline font-bold">Watch How it Works </button>
      </div>
    </div>
  );
}
