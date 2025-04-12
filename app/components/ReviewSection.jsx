// ImprovedTestimonialSlider.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const testimonials = [
    {
      date: "Mar 05, 2024",
      text: "Amazing support! The entire process was handled professionally and without delays.",
      author: "Ahmed Khan",
      avatar: null,
    },
    {
      date: "Apr 18, 2024",
      text: "Very cooperative team. They answered all my queries and made the transaction easy.",
      author: "Fatima Zahra",
      avatar: null,
    },
    {
      date: "Feb 22, 2024",
      text: "I was really impressed with the speed and clarity of the service. Highly recommended!",
      author: "Omar Siddiqui",
      avatar: null,
    },
    {
      date: "Jan 30, 2024",
      text: "Smooth experience from start to finish. Thank you for the reliable support.",
      author: "Ayesha Malik",
      avatar: null,
    },
    {
      date: "Mar 10, 2024",
      text: "Great communication and fast service. I’ll definitely use this platform again.",
      author: "Zainab Ali",
      avatar: null,
    },
  ];
  
  

  const scrollToIndex = (index) => {
    if (index < 0) index = testimonials.length - 1;
    if (index >= testimonials.length) index = 0;

    setActiveIndex(index);
    if (sliderRef.current) {
      const scrollAmount = index * 320; // Card width + gap
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = 320; // Card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      return () => slider.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex]);

 

  return ( <div className="bg-white py-4   "> 
    <div className="w-full   max-w-6xl mb-10 lg:mt-10 mx-auto px-4 relative">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-none  border-primary-color  w-[21rem] snap-start mr-5 transition-all duration-300 transform hover:scale-105"
          >
            <div
              className="bg-gradient-to-br bg-[#E5F9FB] rounded-xl p-6 h-full border
              border-blue-100 relative shadow-lg hover:shadow-xl
               transition-shadow duration-300"
            >
              {/* Quote icon */}
<div className="flex justify-between mb-4">
  <img src="/svgfiles/star.svg" alt="" className="w-36 " />
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                {testimonial.date}
              </div>

               
</div>

              <div className="text-gray-700 mb-5 italic">
                "{testimonial.text}"
              </div>

              <div className="flex items-center mt-auto pt-3 border-t border-gray-100">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-primary-color   flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                )}
                <div className="font-semibold text-gray-800">
                  {testimonial.author}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-center mt-6 gap-6">
        <button
          onClick={() => scrollToIndex(activeIndex - 1)}
          className="bg-white p-2 rounded-full shadow-md text-gray-700
           hover:text-yellow-500 transition-colors duration-300 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full focus:outline-none transition-all
                 duration-300 ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-teal-400 to-primary-color"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollToIndex(activeIndex + 1)}
          className="bg-white p-2 rounded-full shadow-md text-gray-700
           hover:text-yellow-500 transition-colors duration-300 focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
    </div>
  );
  
}; 
export default ReviewSection;
