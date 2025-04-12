"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import EnquiryComponent from "./VisaForm";

// Package data structure with months and categories
import { packageData } from "./data/popularPackage";

const PopularPackages = () => {
  const [selectedMonth, setSelectedMonth] = useState("april");
  const [selectedCategory, setSelectedCategory] = useState("account");

  // Map between tab values and category keys
  const categoryMap = {
    account: "luxury",
    premium: "premium",
    econimic: "economic",
  };

  // Get current packages based on selected month and category
  const getCurrentPackages = () => {
    const category = categoryMap[selectedCategory];
    return packageData[selectedMonth][category] || [];
  };

  // Available months for selection
  const months = [
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  // Package card component to reduce repetition
  const PackageCard = ({ pkg }) => (
    <div
      className="flex my-6  lg:h-96 w-full overflow-hidden rounded-xl "
      style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
    >
      <div className="relative  ml-4 w-2/5  ">
        <img
          src={pkg.image}
          className="h-full w-full  object-cover"
          alt={pkg.title}
        />
       
      </div>

      <div className="w-3/5 p-3  ">
        <div className="mb-2 inline-block md:my-3 rounded border border-primary-color px-2 py-1">
          <h1 className="text-sm  md:text-lg  font-semibold text-primary-color">
            5 Star Umrah Package
          </h1>
        </div>

        <p className="mb-1 text-xs lg:text-sm md:my-2">
          <span className="text-sm font-medium text-[#D4A10F] md:text-lg">Makkah: </span>
          Hilton Makkah (3Night)
        </p>
        <p className="border-b pb-2 md:my-3 text-xs md:text-sm">
          <span className="text-sm font-medium
           text-[#D4A10F] md:text-lg ">Madinah: </span>
          Pullman Zam Zam (4Night)
        </p>

        <p className="mt-2 text-sm md:my-3 font-medium text-[#D4A10F] md:text-lg">
          Package Includes:
        </p>
        <p className="text-xs md:text-sm">Flight | Visa | Transport | Accomodation</p>

        <button 
         onClick={handleFormSubmit}
        className=" w-full bg-[#D4A10F] py-2 text-center md:mt-7 lg:text-lg   font-semibold text-white">
          Book Now
        </button>
      </div>
    </div>
  );
  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility
  const handleFormSubmit = () => {
    setShowPopup(!showPopup); // Close the popup after form submission
  };
  return (
    <>
      <div
        className="bg-white flex   w-full shadow-2xl "
         style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
      >
        <div className="w-full  lg:border-t border-l border-r border-b-0  md:max-w-[85rem] lg:py-10
        my-10    h-auto md:px-7 md:mx-auto">
          {/* Top area */}
          <div className="flex   justify-between items-center px-4 text-primary-color md:pt-10">
            <h1 className="text-xl md:text-4xl font-bold">
              Popular <span className="text-yellow-600">Packages</span>
            </h1>
            <div className="">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[160px] rounded-none md:border-primary-color ">
                  <SelectValue placeholder="Preferred Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month.charAt(0).toUpperCase() + month.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Below content */}
          <div className="mt-5 px-3 ">
            <Tabs
              defaultValue="account"
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
             <TabsList className="flex gap-4">
  {[
    { label: "Luxury", value: "account" },
    { label: "Premium", value: "premium" },
    { label: "Economic", value: "econimic" },
  ].map((tab) => (
    <TabsTrigger
      key={tab.value}
      value={tab.value}
      className="flex md:items-center md:gap-2 md:border px-3 py-2 md:border-primary-color rounded-none text-primary-color hover:bg-primary-color hover:text-white transition duration-300"
    >
      <input
        type="radio"
        name="packageCategory"
          className="accent-primary-color"
        checked={selectedCategory === tab.value}
        onChange={() => setSelectedCategory(tab.value)}
      />
      
      {tab.label}
    </TabsTrigger>
  ))}
</TabsList>


              {Object.keys(categoryMap).map((category) => (
               <TabsContent key={category} value={category}>
               <div className="flex 
                 flex-col lg:gap-6 lg:flex-row lg:flex-wrap">
                 {getCurrentPackages().map((pkg, index) => (
                   <div className="lg:w-[48%]
                   lg:h-80   xl:w-[32%]"> {/* Optional width control */}
                     <PackageCard key={index} pkg={pkg} />
                   </div>
                 ))}
               </div>
             </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>



       {/*   render the InquiryForm as a popup */}
       {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center popup-container justify-center z-50">
          <EnquiryComponent closePopup={handleFormSubmit} />
        </div>
      )}
    </>
  );
};

export default PopularPackages;
