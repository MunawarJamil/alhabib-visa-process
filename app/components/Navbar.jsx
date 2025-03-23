import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex lg:hidden h-20 sticky top-0 z-50 bg-white px-6  w-full max-w-6xl mx-auto justify-between   items-center    ">
        <div className="left w-6 h-3   ">
          <img src="alhabibImages/icon2.png" alt="logo" className=" " />
        </div>

        <div className="logo    ">
          <img
            src="alhabibImages/logoimage.png"
            alt=""
            className=" w-14 h-12"
          />
          <p className="text-xs mt-1 text-[#00454A]     ">Al habib travel</p>
        </div>
      </div>

      {/* for desktop */}

      <div className="hidden lg:flex w-full bg-white">
        <div className=" flex px-12 justify-between w-full max-w-7xl   lg:hidded h-20 sticky top-0 z-50 bg-white        mx-auto     items-center    ">
          <div className="left flex  items-center gap-20 w-6 h-3   ">
            <img src="alhabibImages/icon2.png" alt="logo" className=" " />
            <button className="bg-[#D4A10F] py-1 text-white  px-9 font-bold animate-pulse ">
              Contact
            </button>
          </div>

          <div className="logo    ">
            <img
              src="alhabibImages/logoimage.png"
              alt=""
              className=" w-14 h-12"
            />
            <p className="text-xs mt-1 text-[#00454A]     ">Al habib travel</p>
          </div>
        </div>
      </div>
    </>
  );
}
