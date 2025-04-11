"use client";
import React, { useState, useEffect } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";

function Accommodation() {
  // Data for hotels
  const hotelData = {
    makkah: {
      5: [
        {
          name: "Swissotel Makkah",
          src: "/alhabibImages/MakkahHotels/5STAR/Swissotel Makkah.jpg",
        },
        {
          name: "Pullman ZamZam",
          src: "/alhabibImages/MakkahHotels/5STAR/pullmanzamzam.jpeg",
        },
        {
          name: "Jabal Omar Hyatt",
          src: "/alhabibImages/MakkahHotels/5STAR/Jabal Omar Hyatt.jpg",
        },
        {
          name: "Anjum Makkah",
          src: "/alhabibImages/MakkahHotels/5STAR/Anjum Makkah.jpg",
        },
      ],
      4: [
        {
          name: "Al Ebaa Hotel",
          src: "/alhabibImages/MakkahHotels/4STAR/Al Ebaa Hotel.png",
        },
        {
          name: "Dar Al Eiman Grand",
          src: "/alhabibImages/MakkahHotels/4STAR/Dar Al Eiman Grand.jpg",
        },
        {
          name: "DoubleTree by Hilton",
          src: "/alhabibImages/MakkahHotels/4STAR/DoubleTree by Hilton.jpg",
        },
        {
          name: "Voco Makkah",
          src: "/alhabibImages/MakkahHotels/4STAR/Voco Makkah.jpg",
        },
      ],
      3: [
        {
          name: "Dar Al Eiman Al Andalus",
          src: "/alhabibImages/MakkahHotels/3STAR/Dar Al Eiman Al Andalus.webp",
        },
        {
          name: "Nawazi Ajyad Makkah",
          src: "/alhabibImages/MakkahHotels/3STAR/Nawazi Ajyad Makkah.webp",
        },
        {
          name: "Emaar Al Khalil Makkah",
          src: "/alhabibImages/MakkahHotels/3STAR/Emaar Al Khalil Makkah.jpg",
        },
        {
          name: "Emaar Al Manar Makkah",
          src: "/alhabibImages/MakkahHotels/3STAR/Emaar Al Manar Makkah.jpg",
        },
      ],
    },
    madina: {
      5: [
        {
          name: "The Oberoi Madina",
          src: "/alhabibImages/MadinaHotels/5STAR/The Oberoi Madina.jpg",
        },
        {
          name: "Anwar Al Madinah Mövenpick",
          src: "/alhabibImages/MadinaHotels/5STAR/Anwar Al Madinah Mövenpick.jpg",
        },
        {
          name: "Pullman ZamZam Madinah",
          src: "/alhabibImages/MadinaHotels/5STAR/Pullman ZamZam Madinah.jpg",
        },
        {
          name: "Sofitel Shahd Al Madinah",
          src: "/alhabibImages/MadinaHotels/5STAR/Sofitel Shahd Al Madinah.jpg",
        },
      ],
      4: [
        {
          name: "Saja Al Madinah",
          src: "/alhabibImages/MadinaHotels/4STAR/Saja Al Madinah.jpg",
        },
        {
          name: "Golden Tulip Al Mektan",
          src: "/alhabibImages/MadinaHotels/4STAR/Golden Tulip Al Mektan.jpg",
        },
        {
          name: "Dar Al Eiman Elite",
          src: "/alhabibImages/MadinaHotels/4STAR/Dar Al Eiman Elite.jpg",
        },
        {
          name: "Zowar International Madinah",
          src: "/alhabibImages/MadinaHotels/4STAR/Zowar-International-Hotel-1.png",
        },
      ],
      3: [
        {
          name: "Grand Plaza Madinah",
          src: "/alhabibImages/MadinaHotels/3STAR/Grand Plaza Madinah.jpg",
        },
        {
          name: "Zaha Al Madinah",
          src: "/alhabibImages/MadinaHotels/3STAR/Zaha Al Madinah.jpg",
        },
        {
          name: "Dar Al Eiman Taibah",
          src: "/alhabibImages/MadinaHotels/3STAR/Dar Al Eiman Taibah.jpg",
        },
        {
          name: "Odst Hotel Al - Madinah",
          src: "/alhabibImages/MadinaHotels/3STAR/Odst Hotel Al - Madinah.jpg",
        },
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
          <div className="flex  flex-col  md:flex-row lg:items-center max-w-5xl mx-auto mb-8  gap-2  md:gap-4">
            {/* City Tabs */}
            <Tabs defaultValue="makkah" onValueChange={(val) => setCity(val)}>
              <TabsList className="rounded-none lg:ml- border border-primary-color shadow-sm text-yellow-600">
                <TabsTrigger value="makkah" className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={city === "makkah"}
                    readOnly
                    className="form-radio accent-primary-color text-yellow-600"
                  />
                  Makkah
                </TabsTrigger>

                <TabsTrigger value="madina" className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={city === "madina"}
                    readOnly
                    className="form-radio accent-primary-color text-yellow-600"
                  />
                  Madina
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Star Tabs */}
            <Tabs defaultValue="5" onValueChange={(val) => setStar(val)}>
              <TabsList className="rounded-none border border-primary-color shadow-sm text-yellow-600">
                <TabsTrigger value="5" className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={star === "5"}
                    readOnly
                    className="form-radio  accent-primary-color text-yellow-600"
                  />
                  5 Star
                </TabsTrigger>

                <TabsTrigger value="4" className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={star === "4"}
                    readOnly
                    className="form-radio accent-primary-color text-yellow-600"
                  />
                  4 Star
                </TabsTrigger>

                <TabsTrigger value="3" className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={star === "3"}
                    readOnly
                    className="form-radio accent-primary-color text-yellow-600"
                  />
                  3 Star
                </TabsTrigger>
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
                    className="rounded-4xl w-52 h-60 object-cover px-2 mx-auto mb-2"
                  />
                  <p className="text-yellow-600 lg:text-lg">{hotel.name}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="md:hidden mt-3 text-center text-yellow-600">
            ← More available — keep swiping →
          </p>
        </div>
      </div>
    </>
  );
}

export default Accommodation;
