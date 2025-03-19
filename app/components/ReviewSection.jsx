// TestimonialSlider.jsx
"use client";
import { useState, useRef, useEffect } from "react";

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const testimonials = [
    {
      date: "Jul 12, 2024",
      rating: 5,
      text: "Excellent service. Spoke to Momina about my transaction with Iqbd. She helped me and my transaction was successful within no time. Highly recommended. Great staff. Very polite and skill full.",
      author: "Imran Sohail",
    },
    {
      date: "Jul 12, 2024",
      rating: 5,
      text: "Excellent service. Spoke to Momina about my transaction with Iqbd. She helped me and my transaction was successful within no time. Highly recommended. Great staff. Very polite and skill full.",
      author: "Imran Sohail",
    },
    {
      date: "Jul 12, 2024",
      rating: 5,
      text: "Excellent service. Spoke to Momina about my transaction with Iqbd. She helped me and my transaction was successful within no time. Highly recommended. Great staff. Very polite and skill full.",
      author: "Imran Sohail",
    },
    {
      date: "Jul 12, 2024",
      rating: 5,
      text: "Excellent service. Spoke to Momina about my transaction with Iqbd. She helped me and my transaction was successful within no time. Highly recommended. Great staff. Very polite and skill full.",
      author: "Imran Sohail",
    },
    {
      date: "Jul 12, 2024",
      rating: 5,
      text: "Excellent service. Spoke to Momina about my transaction with Iqbd. She helped me and my transaction was successful within no time. Highly recommended. Great staff. Very polite and skill full.",
      author: "Imran Sohail",
    },
  ];

  const scrollToIndex = (index) => {
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

  return (
    <div className="w-full max-w-6xl mt-10 mx-auto px-4">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-none w-[21rem] snap-start mr-5"
            style={{
              boxShadow: "0 0 30px rgba(0,0,0,0.1)",
            }}
          >
            <div
              className="bg-white rounded-lg shadow-md p-5 border
             border-gray-100 h-full"
            >
              <div className="text-sm text-gray-500 mb-1">
                {testimonial.date}
              </div>
              <div className="text-green-600 font-semibold mb-3">
                {"★".repeat(testimonial.rating)} {testimonial.rating}/5
              </div>
              <div className="text-sm text-gray-700 mb-4">
                {testimonial.text}
              </div>
              <div className="font-bold text-gray-800">
                {testimonial.author}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation indicators */}
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`mx-1 text-2xl focus:outline-none ${
              index === activeIndex ? "text-green-600" : "text-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            _
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
