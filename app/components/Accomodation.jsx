"use client";
import React, { useState, useEffect } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

function Accommodation() {
  // Data for hotels
  const hotelData = {
    makkah: {
      5: [
        { name: "Swissotel Makkah", src: "/svgfiles/makah.svg" },
        { name: "Pullman ZamZam", src: "/svgfiles/zamzam.svg" },
        { name: "Jabal Omar Hyatt", src: "/svgfiles/jabal.svg" },
        { name: "Anjum Makkah", src: "/svgfiles/anjum.svg" },
      ],
      4: [
        { name: "Al Ebaa Hotel", src: "/svgfiles/zamzam.svg" },
        { name: "Dar Al Eiman Grand", src: "/svgfiles/jabal.svg" },
        { name: "DoubleTree by Hilton", src: "/svgfiles/jabal.svg" },
        { name: "Voco Makkah", src: "/svgfiles/anjum.svg" },
      ],
      3: [
        { name: "Dar Al Eiman Al Andalus", src: "/svgfiles/makah.svg" },
        { name: "Nawazi Ajyad Makkah", src: "/svgfiles/anjum.svg" },
        { name: "Emaar Al Khalil Makkah", src: "/svgfiles/jabal.svg" },
        { name: "Emaar Al Manar Makkah", src: "/svgfiles/anjum.svg" },
      ],
    },
    madina: {
      5: [
        { name: "The Oberoi Madina", src: "/svgfiles/zamzam.svg" },
        { name: "Anwar Al Madinah Mövenpick", src: "/svgfiles/jabal.svg" },
        { name: "Pullman ZamZam Madinah", src: "/svgfiles/jabal.svg" },
        { name: "Sofitel Shahd Al Madinah", src: "/svgfiles/anjum.svg" },
      ],
      4: [
        { name: "Saja Al Madinah", src: "/svgfiles/zamzam.svg" },
        { name: "Golden Tulip Al Mektan", src: "/svgfiles/jabal.svg" },
        { name: "Dar Al Eiman Elite", src: "/svgfiles/anjum.svg" },
        { name: "Zowar International Madinah", src: "/svgfiles/anjum.svg" },
      ],
      3: [
        { name: "Grand Plaza Madinah", src: "/svgfiles/zamzam.svg" },
        { name: "Zaha Al Madinah", src: "/svgfiles/jabal.svg" },
        { name: "Dar Al Eiman Taibah", src: "/svgfiles/anjum.svg" },
        { name: "Odst Hotel Al - Madinah", src: "/svgfiles/anjum.svg" },
      ],
    },
  };

  // State management
  const [city, setCity] = useState("makkah");
  const [star, setStar] = useState("5");
  const [filteredHotels, setFilteredHotels] = useState([]);

  // Update filtered hotels when city or star changes
  useEffect(() => {
    if (hotelData[city] && hotelData[city][star]) {
      setFilteredHotels(hotelData[city][star]);
    } else {
      setFilteredHotels([]);
    }
  }, [city, star]);

  return (
    <>
      <div className="  bg-white py-5 lg:py-20 lg:block scrollbar-hide md:text-center ">
        <div className="border border-gray-200 rounded-lg shadow-lg p-8 max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className=" text-3xl md:text-4xl  lg:text-5xl font-semibold text-[#003C2F]">
            Accommodation
          </h2>
          <p className="text-yellow-600 text-lg  animate-bounce opacity-70 md:text-lg mt-2 mb-6">
            Stay Near the Haram
          </p>

          {/* Tabs */}
          <div className="flex  lg:items-center max-w-5xl mx-auto mb-8  gap-2  md:gap-4">
            {/* City Tabs */}
            <Tabs defaultValue="makkah" onValueChange={(val) => setCity(val)}>
              <TabsList className="rounded-sm lg:ml- border border-yellow-600   shadow-sm text-yellow-600">
                <TabsTrigger value="makkah">Makkah</TabsTrigger>
                <TabsTrigger value="madina">Madina</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Star Tabs */}
            <Tabs defaultValue="5" onValueChange={(val) => setStar(val)}>
              <TabsList className="rounded-sm border border-yellow-600 shadow-sm text-yellow-600">
                <TabsTrigger value="5">5 Star</TabsTrigger>
                <TabsTrigger value="4">4 Star</TabsTrigger>
                <TabsTrigger value="3">3 Star</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Images / Hotels */}
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex justify-center gap-3 lg:gap-8 min-w-max">
              {filteredHotels.map((hotel, index) => (
                <div
                  key={index}
                  className="text-center   border
              border-yellow-600 p-1 py-3 lg:p-3 rounded-4xl"
                >
                  <Image
                    src={hotel.src}
                    alt={hotel.name}
                    width={240}
                    height={240}
                    className="rounded-xl w-52 h-60   object-contain mx-auto mb-2"
                  />
                  <p className="text-yellow-600 lg:text-lg">{hotel.name}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="md:hidden mt-3 text-center text-yellow-600">
            ← Swipe for more →
          </p>
        </div>
      </div>
    </>
  );
}

export default Accommodation;
