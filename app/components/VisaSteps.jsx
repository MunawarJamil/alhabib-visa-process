"use client";

import React from "react";

const VisaSteps = () => {
  const steps = [
    "Fill Out the form Below",
    "Talk to our Visa Expert",
    "Submit your application with ease",
    "Get Your Approved Saudi Visa",
  ];

  return (
    <div className=" w-full max-w-[69rem] mt-10 px-12 mx-auto bg-gradient-to-b from-teal-800 to-teal-900 text-center  min-h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-yellow-400 text-3xl md:text-5xl font-extrabold mb-10 uppercase tracking-wide">
        Get Your Saudi Visa in 4 Easy Steps
      </h2>
      <div className="w-full max-w-lg space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 bg-white text-gray-800 rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-yellow-400 text-teal-900 text-2xl font-extrabold rounded-full shadow-md">
              {index + 1}
            </div>
            <p className="text-lg font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaSteps;
