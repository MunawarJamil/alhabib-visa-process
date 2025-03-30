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
      className="flex my-6    w-full overflow-hidden rounded-xl   md:hidden"
      style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
    >
      <div className="relative ml-4 w-2/5">
        <img
          src={pkg.image}
          className="h-full w-full object-cover"
          alt={pkg.title}
        />
       
      </div>

      <div className="w-3/5 p-3">
        <div className="mb-2 inline-block rounded border border-primary-color px-2 py-1">
          <h1 className="text-sm font-semibold text-primary-color">
            5 Star Umrah Package
          </h1>
        </div>

        <p className="mb-1 text-xs">
          <span className="text-sm font-medium text-[#D4A10F]">Makkah: </span>
          Hilton Makkah (3Night)
        </p>
        <p className="border-b pb-2 text-xs">
          <span className="text-sm font-medium text-[#D4A10F]">Madinah: </span>
          Pullman Zam Zam (4Night)
        </p>

        <p className="mt-2 text-sm font-medium text-[#D4A10F]">
          Package Includes:
        </p>
        <p className="text-xs">Flight | Visa | Transport | Accomodation</p>

        <button className="mt-3 w-full bg-[#D4A10F] py-2 text-center font-semibold text-white">
          Book Now
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div
        className="bg-white w-full"
         style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
      >
        <div className="w-full md:max-w-7xl md:px-7 md:mx-auto">
          {/* Top area */}
          <div className="flex justify-between items-center px-4 text-primary-color pt-10">
            <h1 className="text-xl font-bold">
              Popular <span className="text-yellow-600">Packages</span>
            </h1>
            <div>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[160px]">
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
          <div className="mt-5 px-3">
            <Tabs
              defaultValue="account"
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <TabsList>
                <TabsTrigger value="account">Luxury</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
                <TabsTrigger value="econimic">Economic</TabsTrigger>
              </TabsList>

              {Object.keys(categoryMap).map((category) => (
                <TabsContent key={category} value={category}>
                  {getCurrentPackages().map((pkg, index) => (
                    <PackageCard key={index} pkg={pkg} />
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPackages;
