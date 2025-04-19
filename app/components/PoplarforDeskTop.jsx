import React from "react";
import { FaLocationPinLock } from "react-icons/fa6";
import { LuPackageOpen } from "react-icons/lu";

const packagesData = [
  {
    id: 1,
    image: "/images/papular/card-img.png",
    nights: "7 Nights Umrah Package",
    makkahHotel: "Hillton Makkah",
    makkahNights: "3N",
    madinahHotel: "Pullman Zam Zam",
    madinahNights: "4N",
    includes: ["Flight", "Visa", "Transport", "Accomodation"],
  },
  
];

function UmraPackages() {
  return (
    <div className="w-full px-4 my-10 flex flex-col lg:flex-row gap-10 border   max-w-7xl mx-auto p-10 justify-center items-center">
      {packagesData.map((pkg) => (
        <div
          key={pkg.id}
          className="pb-10 bg-white rounded-xl shadow-2xl md:w-[370px]"
        >
          <div className="flex justify-center mt-1">
            <img src={pkg.image} alt="card-img" className="w-full p-4" />
          </div>

          <div>
            <div className="flex">
              <div className="w-10 h-10 ml-2 bg-gradient-to-r from-[#f4f4f4] to-[#bdb59f] opacity-25 rounded-full"></div>
              <h1 className="text-2xl flex items-center font-bold text-[#00454A]">
                {pkg.nights}
              </h1>
            </div>
            <div className="my-3 w-56 mx-auto bg-yellow-500 h-0.5"></div>
          </div>

          <div className="flex items-center ml-4 gap-3 px-4 my-7">
            <FaLocationPinLock className="text-[#00454A]" />
            <div>
              <span className="text-yellow-600">Makkah :</span>{" "}
              <span className="text-[#00454A] font-semibold">
                {pkg.makkahHotel} ({pkg.makkahNights})
              </span>
              <br />
              <span className="text-yellow-600">Madina :</span>{" "}
              <span className="text-[#00454A] font-semibold">
                {pkg.madinahHotel} ({pkg.madinahNights})
              </span>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-end mr-6">
            <div className="bg-yellow-200 opacity-90 rounded-lg text-white flex gap-2 items-center px-2 py-1">
              <LuPackageOpen className="text-[#00454A]" />
              <p className="text-[#00454A]">All inclusive packages</p>
            </div>
          </div>

          <div className="flex justify-between my-3">
            <div className="pl-4 ml-4">
              <h1 className="bg-gray-100 w-36 font-semibold text-center mt-1 text-nowrap rounded-4xl shadow-2xl text-primary-color px-1">
                Package Includes:
              </h1>
              <p className="pl-2 mt-1 text-sm text-primary-color">
                {pkg.includes.join(" l ")}
              </p>
            </div>
            <div className="w-10 h-10 ml-2 bg-gradient-to-l from-[#96d1d5] to-[#1cd5e2] opacity-25 rounded-full"></div>
          </div>

          <div className="flex gap-3 mt-6 justify-center items-center">
            <button className="bg-[#D4A10F] py-2 px-6 flex rounded-lg text-white text-lg hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105">
              View Price
            </button>

            <button className="bg-primary-color py-2 px-4 flex rounded-lg text-white text-lg hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105">
              Talk to Agent
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UmraPackages;
