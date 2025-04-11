import React from "react";
import Image from "next/image";
function Partners() {
  const partners = [
    {
      name: "British Airways",
      logo: "/partners/British Airways LOGO.png",
      maxHeight: "150px",
    },
   
    {
      name: "Emirates Airlines",
      logo: "/partners/Emirates Airlines LOGO.png",
      maxHeight: "120px",
    },
    {
      name: "Egypt Air",
      logo: "/partners/Egyptair-Logo-2010.svg.png",
      maxHeight: "25px",
    },
    {
      name: "Etihad Airways",
      logo: "/partners/Etihad Airways logo.png",
      maxHeight: "40px",
    },
   
    {
      name: "Gulf Air",
      logo: "/partners/Gulf Air LOGO.png",
      maxHeight: "90px",
    },
    {
      name: "Oman Airways",
      logo: "/partners/Oman Airways LOGO.png",
      maxHeight: "130px",
    },
    {
        name: "Aegean Airlines",
        logo: "/partners/Agean Airlines LOGO-Photoroom.png",
        maxHeight: "90px",
      },
    {
      name: "Pegasus Airlines",
      logo: "/partners/pegasus logo.png",
      maxHeight: "100px",
    },
    {
      name: "Qatar Airways",
      logo: "/partners/Qatar Airways LOGO.png",
      maxHeight: "40px",
    },
    {
      name: "Royal Jordanian",
      logo: "/partners/Royal Jordanian LOGO.png",
      maxHeight: "110px",
    },
    {
      name: "Saudi Airlines",
      logo: "/partners/Saudi Airline LOGO.png",
      maxHeight: "40px",
    },
    {
      name: "Turkish Airlines",
      logo: "/partners/Turkish_Airlines_logo.png",
      maxHeight: "80px",
    },
  ];

  return (
    <section className="w-full py-16 px-4 flex flex-col items-center bg-white">
      <h2 className="text-4xl md:text-3xl font-semibold text-emerald-900 mb-12">
        Our <span className="text-yellow-600">Partners</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg flex items-center justify-center h-24 transition-transform duration-300 hover:scale-105"
            style={{ boxShadow: "10px 10px 30px rgba(0,0,0,0.1)" }} >
            <img
              src={partner.logo}
              alt={partner.name}
              className="object-contain"
              style={{ maxHeight: partner.maxHeight }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
