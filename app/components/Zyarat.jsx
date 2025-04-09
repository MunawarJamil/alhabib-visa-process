"use client";
import React, { useState, useEffect } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";

function Zyarat() {
  const zyaratdata = {
    makkah: [
      {
        name: "Jabal al-Thawr",
        src: "/alhabibImages/MakkahZiyaarat/JabalAlThawr.jpg",
      },
      {
        name: "Jabal-e-Rehmat",
        src: "/alhabibImages/MakkahZiyaarat/JabalRehmat.webp",
      },
      {
        name: "Mina and Muzdalifah",
        src: "/alhabibImages/MakkahZiyaarat/MinaandMuzdalifah.webp",
      },
      {
        name: "Masjid Shajra",
        src: "/alhabibImages/MakkahZiyaarat/MasjidShajra.webp",
      },
      {
        name: "Maidan-e-Arafat",
        src: "/alhabibImages/MakkahZiyaarat/MaidaneArafat.webp",
      },
      {
        name: "Canal of Zubeidah",
        src: "/alhabibImages/MakkahZiyaarat/CanalZubeidah.jpg",
      },
      {
        name: "Cave of Hira",
        src: "/alhabibImages/MakkahZiyaarat/CaveofHira.jpg",
      },
      {
        name: "Masjid Jinn",
        src: "/alhabibImages/MakkahZiyaarat/MasjidJinn.jpg",
      },
    ],
    madina: [
      {
        name: "Jabal Uhud",
        src: "/alhabibImages/MadinahZiyaarat/JabalUhud.webp",
      },
      {
        name: "Saba'a Masjid",
        src: "/alhabibImages/MadinahZiyaarat/SabaMasjid.jpg",
      },
      {
        name: "Masjid Quba",
        src: "/alhabibImages/MadinahZiyaarat/MasjidQuba.jpg",
      },
      {
        name: "Masjid Juma",
        src: "/alhabibImages/MadinahZiyaarat/MasjidJuma.jpg",
      },

      {
        name: "Masjid Qiblatain",
        src: "/alhabibImages/MadinahZiyaarat/MasjidQiblatian.jpg",
      },
      {
        name: "Garden of dates",
        src: "/alhabibImages/MadinahZiyaarat/Garden.webp",
      },
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
            What <span className="text-yellow-600">Zyarats We</span> Provide
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
                    className="rounded-4xl w-52 h-60 object-cover px-2 mx-auto mb-2"
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
