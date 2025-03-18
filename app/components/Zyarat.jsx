"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./zyarat.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function Zyarat() {
  return (
    <>
      <div
        className="bg-white py-3" 
        style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
      >
        <div className="lg:flex lg:justify-center  lg:items-center ">
          <div className="py-10 pl-6  bg-white">
            <div className="  mx-auto ">
              <h1 className="text-3xl font-bold text-primary-color mb-4">
                What Ziyarat’s We Provide?
              </h1>

              {/* ===================================== */}

              <div className="flex flex-wrap  items-center gap-4 mb-8">
                <Select>
                  <SelectTrigger className="w-[160px] md:w-[180px] rounded-xl border  shadow-sm focus:ring-1 focus:ring-primary   text-primary-color border-amber-500">
                    <SelectValue placeholder="Makkah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="makkah">Makkah</SelectItem>
                    <SelectItem value="madina">Madina</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* //============================ */}
              <div className="flex pr-4 gap-5 text-primary-color">
                {/* Column 1 */}
                <div className="space-y-3">
                  <p className="text-primary-color text-lg  hover:text-primary transition">
                    1.Jabal al-Thawr
                  </p>
                  <p className="text-primary-color text-lg  hover:text-primary transition">
                    2.Jabal-e-Rehmat
                  </p>
                  <p className="text-primary-color text-lg  hover:text-primary transition">
                    3.Canal of Zubeidah
                  </p>
                  <p className="text-primary-color text-lg  hover:text-primary transition">
                    4.Mina and Muzdalifah
                  </p>
                </div>

                {/* Column 2 */}
                <div className="space-y-3">
                  <p className="text-primary-color text-lg hover:text-primary transition">
                    5.Cave of Hira
                  </p>
                  <p className="text-primary-color text-lg hover:text-primary transition">
                    6.Janat Al-Moula
                  </p>
                  <p className="text-primary-color text-lg hover:text-primary transition">
                    7.Masjid Jinn
                  </p>
                  <p className="text-primary-color text-lg hover:text-primary transition">
                    8.Masjid Shajra
                  </p>
                </div>
              </div>
            </div>
          </div>
<div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper bg-white"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
        {/* below banner */}
        <div className="w-full   my-10 max-w-md mx-auto bg-gradient-to-r from-teal-900 to-teal-700 rounded-2xl px-6 py-4 shadow-2xl">
          <p className="text-white text-center text-sm md:text-base font-medium">
            We are proud to be an authorized partner{" "}
            <br className="md:hidden" />
            of the{" "}
            <span className="text-green-400 font-semibold">Saudi Visa</span> for
            Processing.
          </p>
        </div>
      </div>
    </>
  );
}

export default Zyarat;
