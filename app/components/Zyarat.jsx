"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./zyarat.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Zyarat() {
  const [city, setCity] = useState("makkah");

  return (
    <>
      <div
        className="bg-white m-0 pb-7 "
        style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
      >
        <div className="  w-full">
          <div className="py-5 pl-4 bg-white">
            <div className="mx-auto  border border-b-0  rounded-t-2xl  py-10 w-full max-w-7xl px-12">
              <h1
                className="text-3xl pt-10 lg:text-center lg:text-4xl
               font-bold text-primary-color mb-4"
              >
                What <span className="text-yellow-500"> Ziyarat’s We</span>{" "}
                Provide?
              </h1>

              {/* Dropdown */}
              <div className="flex flex-wrap items-center gap-4 pl-7 mb-8">
                <Select onValueChange={(value) => setCity(value)}>
                  <SelectTrigger
                    className="w-[160px] md:w-[180px] 
                  rounded-sm border shadow-sm focus:ring-1  focus:ring-primary
                   text-yellow-600  "
                  >
                    <SelectValue placeholder="Makkah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="makkah">Makkah</SelectItem>
                    <SelectItem value="madina">Madina</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Makkah */}
              {city === "makkah" && (
                <>
                  <div className="block md:hidden">
                    <div className="flex pr-4 gap-5 text-primary-color">
                      <div className="space-y-3">
                        <p className="text-yellow-600 text-lg hover:text-primary transition">
                          1. Quba Mosque
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          2. Uhud Mountain
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          3. Masjid Qiblatain
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          4. Baqi Cemetery
                        </p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          5. Seven Mosques
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          6. Masjid Ghamama
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          7. Masjid Nabawi
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          8. Well of Uthman
                        </p>
                      </div>
                    </div>

                    {/* Swiper */}
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
                      className="mySwiper bg-white md:hidden mt-6"
                    >
                      <SwiperSlide>
                        <img
                          src="/alhabibImages/imgalary2.png"
                          className="object-cover h-full rounded-2xl"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="/alhabibImages/imgalary2.png"
                          className="object-cover h-full rounded-2xl"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="/svgfiles/stone.svg"
                          className="object-cover h-full rounded-2xl"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  {/* // desktop view */}
                  <div className="    gap-20   w-full max-w-7xl mx-auto justify-evenly hidden lg:flex">
                    {/* left div */}
                    <div>
                      <ol className="grid grid-cols-2 text-xl mt-5 gap-x-20 gap-y-5 text-yellow-600">
                        <li>Jabal al-Thawr</li>
                        <li>Jabal-e-Rehmat</li>
                        <li>Mina and Muzdalifah</li>
                        <li>Janat al-Moula</li>
                        <li>Masjid Shajra</li>
                        <li>Maidan-e-Arafat</li>
                        <li>Canal of Zubeidah</li>
                        <li>Cave of Hira</li>
                        <li>Masjid Jinn</li>
                      </ol>
                      <button
                        className="mt-5 bg-yellow-500 text-white text-2xl shadow-2xl cursor-pointer animate-pulse
                     rounded-lg py-3 px-9 w-full"
                      >
                        Call Now
                      </button>
                    </div>

                    {/* right div */}
                    <div>
                      <img
                        src="svgfiles/stone.svg"
                        alt="stone"
                        className="w-[550px]"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Madina */}
              {city === "madina" && (
                <>
                  {/* mobile view */}
                  <div className="block md:hidden">
                    <div className="flex pr-4 gap-5 text-primary-color">
                      <div className="space-y-3">
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          1. Quba Mosque
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          2. Uhud Mountain
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          3. Masjid Qiblatain
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          4. Baqi Cemetery
                        </p>
                      </div>
                      <div className="space-y-3">
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          5. Seven Mosques
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          6. Masjid Ghamama
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          7. Masjid Nabawi
                        </p>
                        <p className="text-primary-color text-lg hover:text-primary transition">
                          8. Well of Uthman
                        </p>
                      </div>
                    </div>

                    {/* Swiper */}
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
                      className="mySwiper bg-white md:hidden mt-6"
                    >
                      <SwiperSlide>
                        <img
                          src="/alhabibImages/imgalary2.png"
                          className="object-cover h-full rounded-2xl"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="/alhabibImages/imgalary2.png"
                          className="object-cover h-full rounded-2xl"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="/svgfiles/stone.svg"
                          className="object-cover h-full rounded-2xl"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  {/* // desktop view */}
                  <div className="    gap-20   w-full max-w-7xl mx-auto justify-evenly hidden lg:flex">
                    {/* left div */}
                    <div>
                      <ol className="grid grid-cols-2 text-lg mt-5 gap-x-20 gap-y-5 text-yellow-600">
                        <li>Jabal Uhud</li>
                        <li>Saba'a Masjid</li>
                        <li>Masjid Quba</li>
                        <li>Garden of Dates</li>
                        <li>Masjid Qiblatain</li>
                        <li>Masjid Juma</li>
                        <li>Janat al-Moula</li>
                        <li>Masjid Shajra</li>
                        <li>Maidan-e-Arafat</li>
                        <li>Canal of Zubeidah</li>
                        <li>Cave of Hira</li>
                        <li>Masjid Jinn</li>
                      </ol>
                      <button
                        className="mt-5 bg-yellow-500 text-white text-2xl shadow-2xl cursor-pointer animate-pulse
                       rounded-lg py-3 px-9 w-full"
                      >
                        Call Now
                      </button>
                    </div>

                    {/* right div */}
                    <div>
                      <img
                        src="svgfiles/stone.svg"
                        alt="stone"
                        className="w-[550px]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Banner */}
        <div
          className="w-full my-10 max-w-6xl px-8 mx-auto bg-gradient-to-r py-8  
         from-teal-900 to-teal-700 rounded-2xl  shadow-2xl"
        >
          <p className="text-white text-center text-2xl  font-medium">
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
