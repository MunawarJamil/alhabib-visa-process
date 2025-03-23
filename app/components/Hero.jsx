"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Example images - using placeholders since we can't use external images
  const slides = [
    { id: 1, src: "/svgfiles/Stone.svg", alt: "Decorative stone image 1" },
    {
      id: 2,
      src: "/images/papular/kaaba1.png",
      alt: "Decorative stone image 2",
    },
    { id: 3, src: "/svgfiles/Stone.svg", alt: "Decorative stone image 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigation functions
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <>
      <div className="w-full lg:hidden   mx-auto  ">
        <Image
          src="/alhabibImages/hermobile.png"
          width={1400}
          height={1200}
          alt="hero"
          className="rounded-b-3xl shadow-lg shadow-gray-600 "
        />
      </div>

      {/* hero for desktop */}
      <div className=" hidden lg:flex w-full bg-[#E1F4F5] py-16 shado-2xl">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 px-4 md:px-8 lg:px-12 pt-8 md:pt-12 max-w-7xl mx-auto">
          <div className="md:w-1/2 text-gray-700 leading-relaxed">
            <h2 className="text-[#005151] text-4xl font-bold leading-tight mb-6">
              All Inclusive Umrah
              <br />
              Package with Guided Tour.
            </h2>
            <p className="text-[#005151] text-lg mb-10 leading-relaxed">
              All packages include flights, visa processing,
              <br />
              accommodation near Haram, ground transport,
              <br />
              and a guided tour. Meals are optional.
            </p>

            <div className="flex  border items-center">
              <img src="/svgfiles/arrow.svg" alt="arrow svg" />

              <Link
                href="/quote"
                className="mt-5 border-primary-color border shadow-2xl bg-[#D4A10F] py-3 rounded-2xl   px-5
                text-xl font-bold text-white"
              >
                Get quote - it&apos;s free
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 rounded-lg overflow-hidden relative">
            {/* Image Slider */}
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute w-full h-full transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Controls - positioned at bottom */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 z-10">
              {/* Slide Indicators (dashes) */}
              <div className="flex items-center justify-center gap-2 mr-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1 w-12 ${
                      index === currentSlide ? "bg-white" : "bg-gray-400"
                    } transition-all duration-300`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Controls */}
              <button
                onClick={goToPrevSlide}
                className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNextSlide}
                className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
