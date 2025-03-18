import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const inclusionData = [
  {
    title: "Return Flight",
    desc: "Round-trip airfare included in the package.",
  },
  { title: "Accomodation", desc: "Comfortable hotel stays near the Haram." },
  {
    title: "Visa Processing",
    desc: "Full assistance with Umrah visa application.",
  },
  {
    title: "Ground Transport",
    desc: "Airport to hotel transfers and local transport.",
  },
  { title: "Rawdah Permit", desc: "Permit for visiting the Rawdah area." },
  {
    title: "Umrah kit",
    desc: "Includes Ihram, prayer mat, and other essentials.",
  },
];

const exclusionData = [
  { title: "Meal", desc: "Meals are not included in this package." },
  { title: "Laundry", desc: "Laundry services are available at extra cost." },
  { title: "GST & TCS", desc: "Government taxes applicable separately." },
  {
    title: "Ziyarat's Trans port",
    desc: "Transport for Ziyarat not part of the package.",
  },
  {
    title: "Checked Baggage",
    desc: "Baggage beyond allowance will incur extra fees.",
  },
  { title: "Room Service", desc: "Room service charges are not included." },
];

export default function TravelDetails() {
  return (
    <div className="w-full md:w-[90%] px-4 mx-auto py-10">
      {/* Heading */}
      <div className="text-center text-3xl px-4 font-bold mb-8">
        Umrah <span className="text-[#D4A10F]">Package</span>
      </div>

      {/* Includes & Exclusive */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Includes */}
        <div className="flex-1">
          <h2 className="bg-[#D4A10F] text-white py-2 px-4 rounded-t-md text-center font-bold">
            Includes
          </h2>
          {inclusionData.map((item, index) => (
            <Accordion
              key={`inclusion-${index}`}
              type="single"
              collapsible
              className="mb-2"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-sm font-medium py-3 px-4 text-black border rounded-md flex justify-between items-center">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-sm text-gray-600">
                  {item.desc}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Exclusive */}
        <div className="flex-1">
          <h2 className="bg-[#D4A10F] text-white py-2 px-4 rounded-t-md text-center font-bold">
            Exclusive
          </h2>
          {exclusionData.map((item, index) => (
            <Accordion
              key={`exclusion-${index}`}
              type="single"
              collapsible
              className="mb-2"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-sm font-medium py-3 px-4 text-black border rounded-md flex justify-between items-center">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-sm text-gray-600">
                  {item.desc}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
