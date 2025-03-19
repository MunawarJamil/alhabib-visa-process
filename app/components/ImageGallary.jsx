"use client";
import { useState } from "react";
import Image from "next/image";

const ImageGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="relative w-full border-t   py-2 mb-6">
        <h1 className="text-center">
          <span className="text-[#00454A] text-3xl md:text-3xl lg:text-4xl font-semibold">
            Image{" "}
          </span>
          <span className="text-[#D4A10F] text-3xl md:text-3xl lg:text-4xl font-semibold">
            Gallery
          </span>
        </h1>
      </div>

      {/* Gallery */}
      <div className="relative w-full flex items-center justify-start gap-2  md:gap-0 py-4 overflow-x-auto  scroll-smooth">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative transition-all mx-auto duration-300 ease-in-out cursor-pointer flex-shrink-0 rounded-xl overflow-hidden ${
              activeIndex === index
                ? "w-52 h-40 sm:w-64 sm:h-52 md:w-80 md:h-64 lg:w-[28rem] lg:h-[20rem] xl:w-[36rem] xl:h-[24rem] z-10"
                : "w-12 h-40 sm:w-14 sm:h-52 md:w-16 md:h-64 lg:w-20 lg:h-[20rem] xl:w-24 xl:h-[24rem]  "
            }`}
            onClick={() => handleImageClick(index)}
          >
            {/* Image */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-300"
            />

            {/* Badge */}
            <div className="absolute top-2 left-2 w-7 h-7 md:w-8 md:h-8  opacity-50 bg-teal-700 rounded-full flex items-center justify-center z-20 shadow-md">
              <span className="text-white text-sm md:text-base font-medium">
                {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
