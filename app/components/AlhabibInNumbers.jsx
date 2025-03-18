// components/AlHabibTravelStats.tsx
import Image from "next/image";

const AlhabibInNumbers = () => {
  return (
    <>
      <section className="relative bg-[#004D4F] py-14 px-4 md:px-16 overflow-hidden">
        {/* Background Vector */}
        <Image
          src="/alhabibImages/Vector35.png"
          alt="Vector Background"
          fill
          className="object-contain z-0 md:hidden"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-12 text-center">
            Al Habib Travel <span className="text-yellow-400">in Numbers</span>
          </h2>

          {/* Cards wrapper */}
          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-4">
            {/* Card 1 */}
            <div className="bg-white border-amber-500 border-4 relative rounded-xl shadow-md p-5 w-full max-w-[300px] md:mx-0">
              <h3 className="text-[#004D4F] font-semibold text-base mb-1">
                Rate 4.8 on Trustpilot
              </h3>
              <p className="text-xs text-gray-600 mb-8">
                Based on hundreds of customer reviews.
              </p>
              <Image
                src="/svgfiles/verified.svg"
                alt="Trustpilot Badge"
                width={120}
                height={100}
                className="absolute bottom-4 right-4"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white border-amber-500 border-4 relative rounded-xl shadow-md p-5 w-full max-w-[300px] mx-auto md:ml-0 md:mx-0 md:mt-0 mt-0 sm:mt-5">
              <h3 className="text-[#004D4F] font-semibold text-base mb-1">
                5000+ Pilgrims Served
              </h3>
              <p className="text-xs text-gray-600 mb-8">
                Helping Muslims fulfill their Hajj & Umrah journey.
              </p>
              <Image
                src="/svgfiles/kabasmall.svg"
                alt="Kaaba Icon"
                width={30}
                height={50}
                className="absolute bottom-4 right-4"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white relative rounded-xl border-amber-500 border-4 shadow-md p-5 w-full max-w-[300px] md:mx-0 md:mt-0 sm:-mt-5">
              <h3 className="text-[#004D4F] font-semibold text-base mb-1">
                10K+ YouTube Viewers Monthly
              </h3>
              <p className="text-xs text-gray-600 mb-8">
                Guiding travelers with expert content.
              </p>
              <Image
                src="/svgfiles/youtube.svg"
                alt="YouTube Icon"
                width={20}
                height={40}
                className="absolute bottom-4 right-4"
              />
            </div>

            {/* Card 4 */}
            <div className="bg-white border-amber-500 border-4 relative rounded-xl shadow-md p-5 w-full max-w-[300px] mx-auto md:mx-0 md:mt-0 mt-5 sm:mt-0">
              <h3 className="text-[#004D4F] font-semibold text-base mb-1">
                70+ Exclusive Hotel Partnerships
              </h3>
              <p className="text-xs text-gray-600 mb-8">
                From budget to 5-star stays near Haram
              </p>
              <Image
                src="/svgfiles/hotel.svg"
                alt="Hotel Icon"
                width={20}
                height={40}
                className="absolute bottom-4 right-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlhabibInNumbers;
