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

const PopularforDeskTop = () => {
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

  // Package card component matching the reference image
  const PackageCard = ({ pkg }) => (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white text-sm font-medium">
            7 Nights 4 Star, Umrah Package
          </h3>
          <p className="text-white text-xs opacity-90">
            • Makkah: 4N, Madinah: 3N
          </p>
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="flex items-center rounded-full bg-gray-100 px-2 py-1">
          <span className="text-xs text-gray-700">Starting from December</span>
        </div>
        <div className="flex items-center rounded-full bg-blue-100 px-2 py-1">
          <span className="text-xs text-blue-700">All Inclusive Package</span>
        </div>
      </div>
      <div className="p-3 pt-0">
        <button className="w-full bg-[#D4A10F] py-3 text-center text-white font-medium rounded-md">
          View Price
        </button>
      </div>
    </div>
  );

  // Alternative mobile card design based on your first implementation
  const MobilePackageCard = ({ pkg }) => (
    <div
      className="flex my-6 w-full overflow-hidden rounded-xl md:hidden"
      style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
    >
      <div className="relative w-2/5">
        <img
          src={pkg.image}
          className="h-full w-full object-cover"
          alt={pkg.title}
        />
        <div className="absolute left-2 top-2 rounded-md bg-white px-2 py-1 text-xs font-medium">
          <span className="flex items-center gap-1">
            <span>7</span> Night
          </span>
        </div>
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
        className="bg-white w-full pb-8"
        style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
      >
        <div className="w-full md:max-w-7xl md:px-7 md:mx-auto">
          {/* Top area */}
          <div className="flex justify-between items-center px-4 text-primary-color pt-6 pb-4">
            <h2 className="text-xl font-bold text-primary-800">
              Popular package
            </h2>
            <div>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[160px] rounded-full border border-gray-300 px-4 py-1 text-sm">
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
          <div className="px-4">
            <Tabs
              defaultValue="account"
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <TabsList className="mb-6 flex gap-3 bg-transparent p-0">
                <TabsTrigger
                  value="account"
                  className="rounded-full px-6 py-1.5 text-sm font-medium data-[state=active]:bg-amber-500 data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-500"
                >
                  Luxury
                </TabsTrigger>
                <TabsTrigger
                  value="premium"
                  className="rounded-full px-6 py-1.5 text-sm font-medium data-[state=active]:bg-amber-500 data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-500"
                >
                  Premium
                </TabsTrigger>
                <TabsTrigger
                  value="econimic"
                  className="rounded-full px-6 py-1.5 text-sm font-medium data-[state=active]:bg-amber-500 data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-500"
                >
                  Economic
                </TabsTrigger>
              </TabsList>

              {Object.keys(categoryMap).map((category) => (
                <TabsContent key={category} value={category}>
                  {/* Desktop/Tablet View */}
                  <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {getCurrentPackages().map((pkg, index) => (
                      <PackageCard key={index} pkg={pkg} />
                    ))}
                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden">
                    {getCurrentPackages().map((pkg, index) => (
                      <MobilePackageCard key={index} pkg={pkg} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularforDeskTop;
