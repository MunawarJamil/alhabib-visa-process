// ModernTravelDetails.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, X } from "lucide-react";

const inclusionData = [
  {
    title: "Return Flight",
    desc: "Round-trip airfare included in the package.",
    icon: "✈️",
  },
  {
    title: "Accomodation",
    desc: "Comfortable hotel stays near the Haram.",
    icon: "🏨",
  },
  {
    title: "Visa Processing",
    desc: "Full assistance with Umrah visa application.",
    icon: "📄",
  },
  {
    title: "Ground Transport",
    desc: "Airport to hotel transfers and local transport.",
    icon: "🚌",
  },
  {
    title: "Rawdah Permit",
    desc: "Permit for visiting the Rawdah area.",
    icon: "🔖",
  },
  {
    title: "Umrah kit",
    desc: "Includes Ihram, prayer mat, and other essentials.",
    icon: "🧳",
  },
  {
    title: "Rawdah Permit",
    desc: "Permit for visiting the Rawdah area.",
    icon: "🔖",
  },
];

const exclusionData = [
  {
    title: "Meal",
    desc: "Meals are not included in this package.",
    icon: "🍽️",
  },
  {
    title: "Laundry",
    desc: "Laundry services are available at extra cost.",
    icon: "👕",
  },
  {
    title: "GST & TCS",
    desc: "Government taxes applicable separately.",
    icon: "💰",
  },
  {
    title: "Ziyarat's Trans port",
    desc: "Transport for Ziyarat not part of the package.",
    icon: "🚐",
  },
  {
    title: "Checked Baggage",
    desc: "Baggage beyond allowance will incur extra fees.",
    icon: "🧳",
  },
  {
    title: "Room Service",
    desc: "Room service charges are not included.",
    icon: "🛎️",
  },
  {
    title: "Room Service",
    desc: "Room service charges are not included.",
    icon: "🛎️",
  },
];

export default function TravelDetails() {
  const [activeInclusions, setActiveInclusions] = useState({});
  const [activeExclusions, setActiveExclusions] = useState({});

  const toggleInclusion = (index) => {
    setActiveInclusions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleExclusion = (index) => {
    setActiveExclusions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="w-full max-w-7xl px-4 mx-auto">
        {/* Heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold relative inline-block">
            Umrah <span className="text-[#D4A10F]">Package</span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-[#D4A10F]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Discover our comprehensive Umrah packages designed for a spiritually
            fulfilling journey
          </p>
        </motion.div>

        {/* Includes & Exclusive Sections */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Includes */}
          <motion.div
            className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#D4A10F] text-white py-4 px-6">
              <div className="flex items-center">
                <Check className="mr-2" size={20} />
                <h2 className="text-xl font-bold">Includes</h2>
              </div>
            </div>
            <div className="p-4">
              {inclusionData.map((item, index) => (
                <motion.div
                  key={`inclusion-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="mb-3"
                >
                  <div
                    onClick={() => toggleInclusion(index)}
                    className={`flex items-center 
                      justify-between p-4 rounded-lg cursor-pointer
                       transition-all duration-300 ${
                         activeInclusions[index]
                           ? "bg-amber-50 border-l-4 border-[#D4A10F]"
                           : "bg-gray-50 hover:bg-gray-200"
                       }`}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{item.icon}</span>
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: activeInclusions[index] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} className="text-gray-500" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeInclusions[index] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pl-12 text-gray-600 border-l border-r border-b rounded-b-lg">
                          {item.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Exclusive */}
          <motion.div
            className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#D4A10F] text-white py-4 px-6">
              <div className="flex items-center">
                <X className="mr-2" size={20} />
                <h2 className="text-xl font-bold">Exclusive</h2>
              </div>
            </div>
            <div className="p-4">
              {exclusionData.map((item, index) => (
                <motion.div
                  key={`exclusion-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="mb-3"
                >
                  <div
                    onClick={() => toggleExclusion(index)}
                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeExclusions[index]
                        ? "bg-gray-100 border-l-4 border-[#D4A10F]"
                        : "bg-gray-50 hover:bg-gray-200"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{item.icon}</span>
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: activeExclusions[index] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} className="text-gray-500" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeExclusions[index] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pl-12 text-gray-600 border-l border-r border-b rounded-b-lg">
                          {item.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
