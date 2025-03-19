"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

function Accomodation() {
  const [city, setCity] = useState("makkah");
  const [stars, setStars] = useState("3-star");

  // Data configuration
  const data = {
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
          image: "https://picsum.photos/id/1019/600/400",
          title: "Makkah 4-Star Hotel 1",
        },
        {
          image: "https://picsum.photos/id/1020/600/400",
          title: "Makkah 4-Star Hotel 2",
        },
        {
          image: "https://picsum.photos/id/1021/600/400",
          title: "Makkah 4-Star Hotel 3",
        },
      ],
      "5-star": [
        {
          image: "https://picsum.photos/id/1022/600/400",
          title: "Makkah 5-Star Hotel 1",
        },
        {
          image: "https://picsum.photos/id/1023/600/400",
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
          image: "https://picsum.photos/id/1026/600/400",
          title: "Madina 3-Star Hotel 2",
        },
        {
          image: "https://picsum.photos/id/1027/600/400",
          title: "Madina 3-Star Hotel 3",
        },
      ],
      "4-star": [
        {
          image: "https://picsum.photos/id/1028/600/400",
          title: "Madina 4-Star Hotel 1",
        },
        {
          image: "https://picsum.photos/id/1029/600/400",
          title: "Madina 4-Star Hotel 2",
        },
        {
          image: "/alhabibImages/imgalary2.png",
          title: "Madina 4-Star Hotel 3",
        },
      ],
      "5-star": [
        {
          image: "https://picsum.photos/id/1031/600/400",
          title: "Madina 5-Star Hotel 1",
        },
        {
          image: "https://picsum.photos/id/1032/600/400",
          title: "Madina 5-Star Hotel 2",
        },
        {
          image: "https://picsum.photos/id/1033/600/400",
          title: "Madina 5-Star Hotel 3",
        },
      ],
    },
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-white via-amber-50 to-white
     px-4 py-7 overflow-hidden">
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
      <div className="flex flex-wrap justify-center items-center gap-4 mb-5">
        <Select onValueChange={(val) => setCity(val)} defaultValue={city}>
          <SelectTrigger className="w-[160px] md:w-[180px] rounded-xl border  shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-primary-color border-amber-500">
            <SelectValue placeholder="Preferred City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="makkah">Makkah</SelectItem>
            <SelectItem value="madina">Madina</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(val) => setStars(val)} defaultValue={stars}>
          <SelectTrigger
            className="w-[160px] md:w-[180px] rounded-xl border
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

      {/* Swiper */}
      <div className="mx-auto max-w-xs  md:max-w-lg">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="rounded-2xl overflow-visible"
        >
          {data[city][stars].map((place, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Image Card */}
              <div className="overflow-hidden rounded-2xl   w-full aspect-square relative">
                <Image
                  src={place.image}
                  alt={place.title}
                  width={1200}
                  height={1200}
                  objectFit="cover"
                  quality={100}
                  priority
                  className="h-[300px] object-cover"
                />
                <p
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-lg font-semibold bg-black/50 px-4 py-1 rounded-lg animate-fadeInUp"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
                >
                  {/* {place.title} */}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Accomodation;
