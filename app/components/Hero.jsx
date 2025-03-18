import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="w-full lg:hidden   mx-auto  ">
        <Image
          src="/alhabibImages/hermobile.png"
          width={1400}
          height={1200}
          alt="hero"
          className="rounded-b-3xl shadow-lg shadow-gray-600 "
        />
      </div>
    </>
  );
}
