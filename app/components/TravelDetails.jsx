"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function TravelDetails() {
  // State to track which popup is open
  const [openPopup, setOpenPopup] = useState(null);
  const popupRefs = useRef([]);
  const triggerRefs = useRef([]);

  // Data for inclusions
  const inclusionData = [
    {
      title: "Flights for Umrah",
      content:
        "To ensure a comfortable journey, we provide round-trip flights to Jeddah or Madinah, with options for direct routes or convenient connections based on your location.",
      icon: "✈️",
    },
    {
      title: "Visa Processing",
      content:
        "Our team handles the complete visa application process, ensuring all documentation is properly prepared and submitted for a smooth approval experience.",
      icon: "🪪",
    },
    {
      title: "Accommodation",
      content:
        "Enjoy comfortable stays in carefully selected hotels close to the holy sites in both Makkah and Madinah, with options ranging from standard to luxury accommodations.",
      icon: "🏢",
    },
    {
      title: "Visa Processing",
      content:
        "Our team handles the complete visa application process, ensuring all documentation is properly prepared and submitted for a smooth approval experience.",
      icon: "🚗",
    },
  ];

  // Handle click outside to close popup
  useEffect(() => {
    function handleClickOutside(event) {
      if (openPopup !== null) {
        const popupEl = popupRefs.current[openPopup];
        const triggerEl = triggerRefs.current[openPopup];

        if (
          popupEl &&
          triggerEl &&
          !popupEl.contains(event.target) &&
          !triggerEl.contains(event.target)
        ) {
          setOpenPopup(null);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openPopup]);

  // Toggle popup function
  const togglePopup = (index) => {
    setOpenPopup(openPopup === index ? null : index);
  };

  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-6 lg:px-8 py-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          <span className="text-teal-800">What's </span>
          <span className="text-yellow-500">Included </span>
          <span className="text-teal-800">in Your </span>
          <span className="text-yellow-500">Package?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {inclusionData.map((item, index) => (
            <div key={`inclusion-${index}`} className="relative">
              {/* Custom accordion trigger */}
              <div
                ref={(el) => (triggerRefs.current[index] = el)}
                className="flex items-center p-4 text-lg font-medium text-teal-800 bg-[#E1F4F5] hover:bg-teal-700 hover:text-white transition-colors duration-200 cursor-pointer rounded-md"
                onClick={() => togglePopup(index)}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                {item.title}
                <span className="ml-auto">
                  {openPopup === index ? "▲" : "▼"}
                </span>
              </div>

              {/* Popup content with animation */}
              {openPopup === index && (
                <div
                  ref={(el) => (popupRefs.current[index] = el)}
                  className="absolute mt-1 left-0 right-0 p-4 bg-white border border-gray-200 rounded-md shadow-lg z-50 animate-fadeIn"
                  style={{
                    width: "100%",
                    opacity: 1,
                    transform: "translateY(0)",
                    transition:
                      "opacity 300ms ease-in-out, transform 300ms ease-in-out",
                  }}
                >
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

 
export default TravelDetails;
