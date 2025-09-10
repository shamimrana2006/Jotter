import { FaCamera, FaPencilAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full px-5">
      <IoIosArrowBack
        onClick={() => {
          navigate("/profile");
        }}
        className="fixed text-3xl left-5 top-10"
      />
      <h1 className="text-center mt-10 text-2xl">Edit Your Profile</h1>
      <div className="flex relative w-full justify-center items-center mt-15">
        <div className="rounded-full flex items-center justify-center relative text-white font-bold mt-10 bg-gray-500 w-24 h-24 p-2">
          profile
          <div className="p-2 border border-gray-200 flex items-center justify-center absolute z-50 -bottom-3 right-0 bg-gray-100 rounded-full text-black ">
            <FaCamera className="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center mt-20 justify-between h-[30vh]">
        {/* email */}
        <div class="w-full max-w-sm min-w-[200px]">
          <div class="relative">
            <input
              type="Email"
              placeholder=" "
              class="peer w-full bg-transparent placeholder-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow"
              id="UserName"
              defaultValue={"shamim"}
            />
            <label
              for="UserName"
              class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left
      peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90
      peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:scale-90"
            >
              UserName
            </label>
          </div>
        </div>
        <Link to={"/signin/verificationOTP"} className="btn_signin">
          Save and change
        </Link>
      </div>
    </div>
  );
}
