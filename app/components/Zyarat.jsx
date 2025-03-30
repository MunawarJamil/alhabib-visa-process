"use client";
import React, { useState, useEffect } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";

function Zyarat() {
 
  const zyaratdata = {
    makkah: [
      { name: "Jabal al-Thawr", src: "/svgfiles/makah.svg" },
      { name: "Jabal-e-Rehmat", src: "/svgfiles/zamzam.svg" },
      { name: "Mina and Muzdalifah", src: "/svgfiles/jabal.svg" },
      { name: "Masjid Shajra", src: "/svgfiles/anjum.svg" },
      { name: "Maidan-e-Arafat", src: "/svgfiles/anjum.svg" },
      { name: "Canal of Zubeidah", src: "/svgfiles/anjum.svg" },
      { name: "Cave of Hira", src: "/svgfiles/anjum.svg" },
      { name: "Masjid Jinn", src: "/svgfiles/anjum.svg" },
    ],
    madina: [
      { name: "Jabal Uhud", src: "/svgfiles/zamzam.svg" },
      { name: "Saba'a Masjid", src: "/svgfiles/jabal.svg" },
      { name: "Masjid Quba", src: "/svgfiles/jabal.svg" },
      { name: "Masjid Juma", src: "/svgfiles/anjum.svg" },

      { name: "Masjid Qiblatain", src: "/svgfiles/anjum.svg" },
      { name: "Garden of dates", src: "/svgfiles/anjum.svg" },
    ],
  };

  // State management
  const [city, setCity] = useState("makkah");
  const [filteredHotels, setFilteredHotels] = useState([]);

  // Update filtered hotels when city changes
  useEffect(() => {
    if (zyaratdata[city]) {
      setFilteredHotels(zyaratdata[city]);
    } else {
      setFilteredHotels([]);
    }
  }, [city]);

  return (
    <>
      {/* Desktop View */}

      <div className="bg-white py-5 lg:py-20 lg:block md:text-center ">
        <div className="border border-gray-200 rounded-lg shadow-lg p-8 max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl my-5 lg:text-5xl font-semibold text-[#003C2F]">
            What <span className="text-yellow-600">Zyarats We</span>  Provide
          </h2>

          {/* Tabs */}
          <div className="flex lg:items-center max-w-5xl mx-auto mb-8 gap-2 md:gap-4">
            {/* City Tabs */}
            <Tabs defaultValue="makkah" onValueChange={(val) => setCity(val)}>
              <TabsList className="rounded-sm lg:ml- border border-yellow-600 shadow-sm text-yellow-600">
                <TabsTrigger value="makkah">Makkah</TabsTrigger>
                <TabsTrigger value="madina">Madina</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Images / Hotels */}
          <div className="w-full overflow-x-auto scrollbar-hide ">
            <div className="flex justify-center gap-3 lg:gap-8 min-w-max">
              {filteredHotels.map((hotel, index) => (
                <div
                  key={index}
                  className="text-center border border-yellow-600 p-1 py-3 lg:p-3 rounded-4xl"
                >
                  <Image
                    src={hotel.src}
                    alt={hotel.name}
                    width={240}
                    height={240}
                    className="rounded-xl w-52 h-60 object-contain mx-auto mb-2"
                  />
                  <p className="text-yellow-600 lg:text-lg">{hotel.name}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="  mt-3 text-center text-yellow-600">
            ← Swipe for more →
          </p>
        </div>
      </div>
    </>
  );
}

export default Zyarat;
