import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function EnterPin() {
  const navigate = useNavigate();
  return (
    <div className="px-2">
      <div className="  bg-white sticky top-0  z-50 justify-between py-3 pt-5  w-full ">
        <div className="fixed gap-1 items-center">
          {" "}
          <IoIosArrowBack
            onClick={() => {
              navigate("/");
            }}
            className=" text-3xl"
          />
        </div>
        <div></div>
      </div>
      <h1 className="text-center  mt-14 text-2xl">Enter Your Pin</h1>
      <div className="w-full flex items-center justify-center">
        <input
          type="Password"
          maxLength={4}
          placeholder="* * * *"
          className="outline-none  text-center text-4xl mt-3"
        />
      </div>
      <div></div>
    </div>
  );
}
