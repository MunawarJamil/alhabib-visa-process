"use client";

import React, { useState } from "react";

const VisaForm = () => {
  const [privacyChecked, setPrivacyChecked] = useState(false);

  return (
    <div className="bg-teal-900 w-full max-w-[69rem] mt-5 px-6 mx-auto min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-teal-900 text-2xl font-bold text-center mb-6">
          Apply Your Saudi Visa!
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name:</label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Contact No:
            </label>
            <input
              type="text"
              placeholder="Your Contact Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Nationality:
            </label>
            <input
              type="text"
              placeholder="British, European, Asian or African"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Traveling In:
            </label>
            <input
              type="text"
              placeholder="Mar, Apr or any other"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Total Passengers:
            </label>
            <input
              type="text"
              placeholder="We Are Total 4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <label className="text-gray-700 font-semibold">
              Add privacy policy button check in
            </label>
            <input
              type="checkbox"
              className="toggle-checkbox cursor-pointer"
              checked={privacyChecked}
              onChange={() => setPrivacyChecked(!privacyChecked)}
            />
          </div>
          <button className="w-full bg-yellow-500 text-white text-lg font-semibold py-3 rounded-lg mt-4 hover:bg-yellow-600 transition duration-300">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default VisaForm;
