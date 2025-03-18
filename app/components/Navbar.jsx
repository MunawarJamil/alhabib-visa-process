import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex h-20 sticky top-0 z-50 bg-white px-6  w-full max-w-6xl mx-auto justify-between   items-center    ">
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
    </>
  );
}
