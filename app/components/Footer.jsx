"use client";

import React, { useState } from "react";
import EnquiryComponent from "./VisaForm"; // Import the inquiry form component
const Footer = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility
  const handleFormSubmit = () => {
    setShowPopup(!showPopup); // Close the popup after form submission
  };
  return (
    <>
      <footer
        className="bg-[#0E3B3F] mt-10 text-white py-10 px-6 md:px-16 lg:px-32 relative"
        style={{
          backgroundImage: "var(--grid-bg)",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-3xl font-semibold text-white">
            Let's <span className="text-yellow-400">Connect</span>
          </h2>
          <button
            onClick={handleFormSubmit}
            className="bg-yellow-500
         hover:bg-yellow-600 text-white font-bold py-3 text-nowrap animate-pulse
          px-6 rounded-lg shadow-md"
          >
            Connect Now
          </button>
        </div>
        <hr className="border-gray-600 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden lg:block">
            <h3 className="text-lg font-bold text-yellow-400">About us</h3>
            <p className="text-sm text-gray-300 mt-2">
              Al Habib Travel is the most trusted & reliable agency among UK
              Muslims. We provide bespoke Umrah travel solutions & package
              designing services to meet budget range and facilities
              requirements of pilgrims.
            </p>
            <img
              src="/alhabibImages/AL habib Travel Logo/logo-AL-HAbib-Travel.gif"
              alt="Mosque Logo"
              className="mt-4 w-24"
            />
            <p className="text-xs text-gray-400 mt-2">
              <span className="text-yellow-400 font-bold">Note:</span> All fares
              advertised are subject to availability and start from the prices
              we have mentioned. Fares are only guaranteed until ticketed.
              Offers may be withdrawn without any prior notice.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-yellow-400">Travel</h3>
            <ul className="text-sm text-gray-300 mt-2 space-y-1">
              <li>Home</li>
              <li>Umrah Package</li>
              <li>Ramadan Umrah Package</li>
              <li>Contact</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-yellow-400">Our Terms</h3>
            <ul className="text-sm text-gray-300 mt-2 space-y-1">
              <li>Travel Insurance</li>
              <li>Term & Condition</li>
              <li>Safi Assurance</li>
              <li>Privacy Policy Statement</li>
              <li>Payment Security</li>
              <li>Our Responsibility</li>
              <li>Download</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-yellow-400">Contact Us</h3>

            <p className="text-sm text-gray-300 mt-2 font-bold">
              0203 504 2344
            </p>
            <p className="text-sm text-gray-300 mt-1 underline">
              info@alhabibtravel.co.uk
            </p>
            <h3 className="text-lg font-bold text-yellow-400 mt-4">Office</h3>
            <p className="text-sm text-gray-300 mt-2">
              Office 10378 182-184 High Street
              <br /> North East Ham London
              <br /> England E6 2JA
            </p>
          </div>
        </div>

        <div className="lg:hidden">
          <h3 className="text-lg font-bold text-yellow-400">About us</h3>
          <p className="text-sm text-gray-300 mt-2">
            Al Habib Travel is the most trusted & reliable agency among UK
            Muslims. We provide bespoke Umrah travel solutions & package
            designing services to meet budget range and facilities requirements
            of pilgrims.
          </p>
          <img
            src="/alhabibImages/AL habib Travel Logo/logo-AL-HAbib-Travel.gif"
            alt="Mosque Logo"
            className="mt-4 w-24"
          />
          <p className="text-xs text-gray-400 mt-2">
            <span className="text-yellow-400 font-bold">Note:</span> All fares
            advertised are subject to availability and start from the prices we
            have mentioned. Fares are only guaranteed until ticketed. Offers may
            be withdrawn without any prior notice.
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Copyright &copy; 2025 | Al Habib Travel Ltd.
        </p>
      </footer>

      {/*   render the InquiryForm as a popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center popup-container justify-center z-50">
          <EnquiryComponent closePopup={handleFormSubmit} />
        </div>
      )}
    </>
  );
};

export default Footer;
