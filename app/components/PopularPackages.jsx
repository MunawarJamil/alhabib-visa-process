"use client";
// import { FaLocationDot } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PopularPackages = () => {
  return (
    <>
      <div
        className="    bg-white-50  w-full  mt-10  "
        style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
      >
        {/* top area */}
        <div className="flex justify-between items-center px-4 text-primary-color pt-10">
          <h1 className="text-xl font-bold">Poplar Packages</h1>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]  ">
                <SelectValue placeholder="Preferred Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="april">April</SelectItem>
                <SelectItem value="may">May</SelectItem>
                <SelectItem value="june">June</SelectItem>
                <SelectItem value="july">July</SelectItem>
                <SelectItem value="august">August</SelectItem>
                <SelectItem value="september">September</SelectItem>
                <SelectItem value="october">October</SelectItem>
                <SelectItem value="november">November</SelectItem>
                <SelectItem value="december">December</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* below content  */}

        <div className="mt-5 px-3  ">
          <Tabs defaultValue="account">
            <TabsList className=" ">
              <TabsTrigger value="account">Luxury</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
              <TabsTrigger value="econimic">Econimic</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <div
                className=" w-full rounded-lg border md:hidden flex justify-evenly gap-2 mt-5 shadow"
                style={{ boxShadow: "20px 20px 50px rgba(0,0,0,0.1)" }}
              >
                <img
                  src="/images/papular/kaaba1.png "
                  className="w-40"
                  alt="kaba1"
                />

                <div className="mt-2 ">
                  <h1 className="text-primary-color  mr-1 border p-0.5 px-1 rounded-lg font-bold mb-1 ">
                    5 Star Umrah Package
                  </h1>
                  <p className="text-xs  ">
                    {" "}
                    <span className="text-[#D4A10F] text-sm">
                      Makkah:{" "}
                    </span>{" "}
                    Hilton Makkah (3N)
                  </p>
                  <p className="text-xs border-b pb-1 ">
                    <span className="text-[#D4A10F] text-sm ">Madinah: </span>{" "}
                    Pullman Zam Zam (4)
                  </p>
                  <p className="  text-[#D4A10F] text-sm">Package Includes:</p>
                  <p className="text-xs my-1 ">
                    Flight l Visa l Transport l Accomodation
                  </p>
                  <button className="border bg-[#D4A10F] py-0.5 font-bold text-sm px-12 flex items-center mt-1 text-white ">
                    Book Now
                  </button>
                </div>
              </div>

              <div
                className=" w-full rounded-lg border md:hidden flex justify-evenly gap-2 mt-5 shadow"
                style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
              >
                <img
                  src="/images/papular/kaaba1.png "
                  className="w-40"
                  alt="kaba1"
                />

                <div className="mt-2 ">
                  <h1 className="text-primary-color  mr-1 border p-0.5 px-1 rounded-lg font-bold mb-1 ">
                    5 Star Umrah Package
                  </h1>
                  <p className="text-xs  ">
                    {" "}
                    <span className="text-[#D4A10F] text-sm">
                      Makkah:{" "}
                    </span>{" "}
                    Hilton Makkah (3N)
                  </p>
                  <p className="text-xs border-b pb-1 ">
                    <span className="text-[#D4A10F] text-sm ">Madinah: </span>{" "}
                    Pullman Zam Zam (4)
                  </p>
                  <p className="  text-[#D4A10F] text-sm">Package Includes:</p>
                  <p className="text-xs my-1 ">
                    Flight l Visa l Transport l Accomodation
                  </p>
                  <button className="border bg-[#D4A10F] py-0.5 font-bold text-sm px-12 flex items-center mt-1 text-white ">
                    Book Now
                  </button>
                </div>
              </div>

              <div
                className=" w-full rounded-lg border md:hidden flex justify-evenly gap-2 mt-5 shadow"
                style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
              >
                <img
                  src="/images/papular/kaaba1.png "
                  className="w-40"
                  alt="kaba1"
                />

                <div className="mt-2 ">
                  <h1 className="text-primary-color  mr-1 border p-0.5 px-1 rounded-lg font-bold mb-1 ">
                    5 Star Umrah Package
                  </h1>
                  <p className="text-xs  ">
                    {" "}
                    <span className="text-[#D4A10F] text-sm">
                      Makkah:{" "}
                    </span>{" "}
                    Hilton Makkah (3N)
                  </p>
                  <p className="text-xs border-b pb-1 ">
                    <span className="text-[#D4A10F] text-sm ">Madinah: </span>{" "}
                    Pullman Zam Zam (4)
                  </p>
                  <p className="  text-[#D4A10F] text-sm">Package Includes:</p>
                  <p className="text-xs my-1 ">
                    Flight l Visa l Transport l Accomodation
                  </p>
                  <button className="border bg-[#D4A10F] py-0.5 font-bold text-sm px-12 flex items-center mt-1 text-white ">
                    Book Now
                  </button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="premium">
              <div
                className=" w-full rounded-lg border md:hidden flex justify-evenly gap-2 mt-5 shadow"
                style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
              >
                <img
                  src="/images/papular/kaaba1.png "
                  className="w-40"
                  alt="kaba1"
                />

                <div className="mt-2 ">
                  <h1 className="text-primary-color  mr-1 border p-0.5 px-1 rounded-lg font-bold mb-1 ">
                    5 Star Umrah Package
                  </h1>
                  <p className="text-xs  ">
                    {" "}
                    <span className="text-[#D4A10F] text-sm">
                      Makkah:{" "}
                    </span>{" "}
                    Hilton Makkah (3N)
                  </p>
                  <p className="text-xs border-b pb-1 ">
                    <span className="text-[#D4A10F] text-sm ">Madinah: </span>{" "}
                    Pullman Zam Zam (4)
                  </p>
                  <p className="  text-[#D4A10F] text-sm">Package Includes:</p>
                  <p className="text-xs my-1 ">
                    Flight l Visa l Transport l Accomodation
                  </p>
                  <button className="border bg-[#D4A10F] py-0.5 font-bold text-sm px-12 flex items-center mt-1 text-white ">
                    Book Now
                  </button>
                </div>
              </div>

              <div
                className=" w-full rounded-lg border md:hidden flex justify-evenly gap-2 mt-5 shadow"
                style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
              >
                <img
                  src="/images/papular/kaaba1.png "
                  className="w-40"
                  alt="kaba1"
                />

                <div className="mt-2 ">
                  <h1 className="text-primary-color  mr-1 border p-0.5 px-1 rounded-lg font-bold mb-1 ">
                    5 Star Umrah Package
                  </h1>
                  <p className="text-xs  ">
                    {" "}
                    <span className="text-[#D4A10F] text-sm">
                      Makkah:{" "}
                    </span>{" "}
                    Hilton Makkah (3N)
                  </p>
                  <p className="text-xs border-b pb-1 ">
                    <span className="text-[#D4A10F] text-sm ">Madinah: </span>{" "}
                    Pullman Zam Zam (4)
                  </p>
                  <p className="  text-[#D4A10F] text-sm">Package Includes:</p>
                  <p className="text-xs my-1 ">
                    Flight l Visa l Transport l Accomodation
                  </p>
                  <button className="border bg-[#D4A10F] py-0.5 font-bold text-sm px-12 flex items-center mt-1 text-white ">
                    Book Now
                  </button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="econimic">
              <div
                className=" w-full rounded-lg border md:hidden flex justify-evenly gap-2 mt-5 shadow"
                style={{ boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
              >
                <img
                  src="/images/papular/kaaba1.png "
                  className="w-40"
                  alt="kaba1"
                />

                <div className="mt-2 ">
                  <h1 className="text-primary-color  mr-1 border p-0.5 px-1 rounded-lg font-bold mb-1 ">
                    5 Star Umrah Package
                  </h1>
                  <p className="text-xs  ">
                    {" "}
                    <span className="text-[#D4A10F] text-sm">
                      Makkah:{" "}
                    </span>{" "}
                    Hilton Makkah (3N)
                  </p>
                  <p className="text-xs border-b pb-1 ">
                    <span className="text-[#D4A10F] text-sm ">Madinah: </span>{" "}
                    Pullman Zam Zam (4)
                  </p>
                  <p className="  text-[#D4A10F] text-sm">Package Includes:</p>
                  <p className="text-xs my-1 ">
                    Flight l Visa l Transport l Accomodation
                  </p>
                  <button className="border bg-[#D4A10F] py-0.5 font-bold text-sm px-12 flex items-center mt-1 text-white ">
                    Book Now
                  </button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default PopularPackages;
