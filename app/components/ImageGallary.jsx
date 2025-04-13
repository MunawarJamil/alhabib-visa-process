"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles/gallaryStyles.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

export default function ImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="text-center h-[100%]  border-t-4  pb-10  mb-28">
        <p className="font-semibold text-3xl  md:text-4xl mb-6 pt-10">
          {" "}
          Image <span className="text-yellow-600  ">Gallery</span>{" "}
        </p>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="/alhabibImages/wa1.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/wa2.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/wa3.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/wa4.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/img5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/img6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/img7.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/alhabibImages/wa1.jpeg" className="object-contain" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/wa2.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/wa3.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/wa4.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/img5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/img6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/alhabibImages/img7.jpg" />
          </SwiperSlide>
        </Swiper>

        <p className="text-yellow-600 py-3 md:hidden "> - swipe for more - </p>
      </div>
    </>
  );
}
