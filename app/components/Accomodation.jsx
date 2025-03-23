"use client";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
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
        { name: "Makkah 4-Star Hotel 1", src: "/svgfiles/zamzam.svg" },
        { name: "Makkah 4-Star Hotel 2", src: "/svgfiles/jabal.svg" },
      ],
      3: [
        { name: "Makkah 3-Star Hotel 1", src: "/svgfiles/makah.svg" },
        { name: "Makkah 3-Star Hotel 2", src: "/svgfiles/anjum.svg" },
      ],
    },
    madina: {
      5: [
        { name: "Pullman ZamZam", src: "/svgfiles/zamzam.svg" },
        { name: "Jabal Omar Hyatt", src: "/svgfiles/jabal.svg" },
        { name: "Anjum Makkah", src: "/svgfiles/anjum.svg" },
      ],
      4: [ { name: "Pullman ZamZam", src: "/svgfiles/zamzam.svg" },
        { name: "Jabal Omar Hyatt", src: "/svgfiles/jabal.svg" },
        { name: "Anjum Makkah", src: "/svgfiles/anjum.svg" },
        { name: "Anjum Makkah", src: "/svgfiles/anjum.svg" },
      ],
      3: [
        { name: "Pullman ZamZam", src: "/svgfiles/zamzam.svg" },
        { name: "Jabal Omar Hyatt", src: "/svgfiles/jabal.svg" },
        { name: "Anjum Makkah", src: "/svgfiles/anjum.svg" },
        { name: "Anjum Makkah", src: "/svgfiles/anjum.svg" },
      ],
    },
  };

  // State management
  const [city, setCity] = useState("makkah");
  const [star, setStar] = useState("5");
  const [filteredHotels, setFilteredHotels] = useState([]);

  // Mobile view settings
  const [mobileCity, setMobileCity] = useState("makkah");
  const [mobileStars, setMobileStars] = useState("3-star");

  // Data configuration for mobile view
  const mobileData = {
    makkah: {
      "3-star": [
        {
          image: "/alhabibImages/imgalary2.png",
          title: "Makkah 3-Star Hotel 1",
        },
        {
          image: "/alhabibImages/imgalary2.png",
          title: "Makkah 3-Star Hotel 2",
        },
        {
          image: "/alhabibImages/imgalary2.png",
          title: "Makkah 3-Star Hotel 3",
        },
      ],
      "4-star": [
        {
          image: "/placeholder/600/400",
          title: "Makkah 4-Star Hotel 1",
        },
        {
          image: "/placeholder/600/400",
          title: "Makkah 4-Star Hotel 2",
        },
        {
          image: "/placeholder/600/400",
          title: "Makkah 4-Star Hotel 3",
        },
      ],
      "5-star": [
        {
          image: "/placeholder/600/400",
          title: "Makkah 5-Star Hotel 1",
        },
        {
          image: "/placeholder/600/400",
          title: "Makkah 5-Star Hotel 2",
        },
        {
          image: "/alhabibImages/imgalary2.png",
          title: "Makkah 5-Star Hotel 3",
        },
      ],
    },
    madina: {
      "3-star": [
        {
          image: "/alhabibImages/imgalary2.png",
          title: "Madina 3-Star Hotel 1",
        },
        {
          image: "/placeholder/600/400",
          title: "Madina 3-Star Hotel 2",
        },
        {
          image: "/placeholder/600/400",
          title: "Madina 3-Star Hotel 3",
        },
      ],
      "4-star": [
        {
          image: "/placeholder/600/400",
          title: "Madina 4-Star Hotel 1",
        },
        {
          image: "/placeholder/600/400",
          title: "Madina 4-Star Hotel 2",
        },
        {
          image: "/alhabibImages/imgalary2.png",
          title: "Madina 4-Star Hotel 3",
        },
      ],
      "5-star": [
        {
          image: "/placeholder/600/400",
          title: "Madina 5-Star Hotel 1",
        },
        {
          image: "/placeholder/600/400",
          title: "Madina 5-Star Hotel 2",
        },
        {
          image: "/placeholder/600/400",
          title: "Madina 5-Star Hotel 3",
        },
      ],
    },
  };

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
      {/* Mobile View */}
      <div
        className="min-h-[80vh] lg:hidden bg-gradient-to-b 
        pt-20 from-white via-amber-50 to-white
        px-4 py-7 overflow-hidden"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-color mb-2">
            Accommodation
          </h1>
          <p className="text-base md:text-lg text-amber-500">
            Stay Near The Haram
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap md:justify-between w-full max-w-7xl mx-auto px-12 items-center gap-4 mb-5">
          <Select
            onValueChange={(val) => setMobileCity(val)}
            defaultValue={mobileCity}
          >
            <SelectTrigger className="w-[160px] md:w-[180px] rounded-sm lg:rounded-sm border shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-primary-color border-amber-500">
              <SelectValue placeholder="Preferred City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="makkah">Makkah</SelectItem>
              <SelectItem value="madina">Madina</SelectItem>
            </SelectContent>
          </Select>

          <Select
            onValueChange={(val) => setMobileStars(val)}
            defaultValue={mobileStars}
          >
            <SelectTrigger
              className="w-[160px] md:w-[180px] rounded-sm border
              border-amber-500 shadow-sm focus:ring-1 focus:ring-primary focus:border-primary"
            >
              <SelectValue placeholder="Hotel Stars" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3-star">3 Star</SelectItem>
              <SelectItem value="4-star">4 Star</SelectItem>
              <SelectItem value="5-star">5 Star</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Swiper for mobiles */}
        <div className="mx-auto max-w-xs md:hidden md:max-w-lg">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="rounded-2xl overflow-visible"
          >
            {mobileData[mobileCity][mobileStars].map((place, index) => (
              <SwiperSlide key={index} className="relative">
                {/* Image Card for mobiles */}
                <div
                  className="overflow-hidden rounded-2xl
                  w-full aspect-square relative"
                >
                  <Image
                    src={place.image}
                    alt={place.title}
                    width={600}
                    height={600}
                    objectFit="cover"
                    quality={100}
                    priority
                    className="h-[300px] object-cover"
                  />
                  <p
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-lg font-semibold bg-black/50 px-4 py-1 rounded-lg animate-fadeInUp"
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
                  >
                    {place.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Desktop View */}

      
      <div className="hidden bg-white py-20 lg:block text-center mt-1">
        {/* Heading */}
        <h2 className="text-5xl font-semibold text-[#003C2F]">Accommodation</h2>
        <p className="text-yellow-600  opacity-70 text-lg mt-1 mb-6">
          Stay Near the Haram
        </p>

        {/* Tabs */}
        <div className="flex justify-between items-center max-w-5xl mx-auto mb-8 flex-wrap gap-4">
          {/* City Tabs */}
          <Tabs defaultValue="makkah" onValueChange={(val) => setCity(val)}>
            <TabsList className="rounded-sm border border-amber-500 shadow-sm text-primary-color">
              <TabsTrigger value="makkah">Makkah</TabsTrigger>
              <TabsTrigger value="madina">Madina</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Star Tabs */}
          <Tabs defaultValue="5" onValueChange={(val) => setStar(val)}>
            <TabsList className="rounded-sm border border-amber-500 shadow-sm text-primary-color">
              <TabsTrigger value="5">5 Star</TabsTrigger>
              <TabsTrigger value="4">4 Star</TabsTrigger>
              <TabsTrigger value="3">3 Star</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Images / Hotels */}
        <div className="flex justify-center gap-8 flex-wrap">
          {filteredHotels.map((hotel, index) => (
            <div key={index} className="text-center">
              <Image
                src={hotel.src}
                alt={hotel.name}
                width={240}
                height={240}
                className="rounded-xl w-60 h-60 object-contain mx-auto mb-2"
              />
              <p className="text-primary-color">{hotel.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accommodation;
