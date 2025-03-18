"use client";

import {
  FaStar,
  FaHiking,
  FaPlay,
  FaPassport,
  FaUserTie,
} from "react-icons/fa";

const TravelStats = () => {
  const stats = [
    {
      icon: <FaStar className="text-3xl text-teal-700" />,
      title: "Rated 4.8/5 on Trustpilot",
      description: "Based on hundreds of customer reviews.",
    },
    {
      icon: <FaHiking className="text-3xl text-teal-700" />,
      title: "5000+ Pilgrims Served",
      description: "Helping Muslims fulfill their Hajj & Umrah journey.",
    },
    {
      icon: <FaPlay className="text-3xl text-teal-700" />,
      title: "10,000+ YouTube Viewers Monthly",
      description: "Guiding travelers with expert content.",
    },
    {
      icon: <FaPassport className="text-3xl text-teal-700" />,
      title: "10K+ Visas Approved",
      description: "Umrah, Tourist & Waiver visas for Saudi travel.",
    },
    {
      icon: <FaUserTie className="text-3xl text-teal-700" />,
      title: "Years of Experience",
      description: "Trusted for Umrah & Hajj.",
    },
  ];

  return (
    <div className="bg-teal-900 text-white py-10 px-6 flex justify-center">
      <div className="bg-white text-gray-800 rounded-xl p-6 max-w-md w-full shadow-lg">
        <h2 className="text-center text-xl font-semibold mb-4">
          Al Habib Travel in Numbers
        </h2>
        <div className="space-y-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="bg-teal-100 p-3 rounded-full mb-2">
                {stat.icon}
              </div>
              <h3 className="font-semibold text-lg">{stat.title}</h3>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelStats;
