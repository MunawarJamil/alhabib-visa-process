import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";

// FAQ data with real content
const accordionData = [
  {
    title: "What is the baggage allowance for my flight?",
    content:
      "The first checked baggage is included in all our packages. You're allowed 28kg per person, which includes 20kg for your main luggage and 8kg for your hand carry. This ensures you can comfortably pack everything you need for your journey.",
  },
  {
    title: "What is your refund policy in case of cancellation?",
    content:
      "Our refund policy is designed to be as fair and straightforward as possible. If you need to cancel, the amount refunded will depend on how close the cancellation is to your travel date, as airline tickets and hotel reservations have specific terms. We'll guide you through the process and do our best to minimize any inconvenience. Feel free to contact us for detailed terms when booking.",
  },
  {
    title: "Will you provide assistance if I face any issues during my trip?",
    content:
      "Absolutely, we're here to support you every step of the way. We provide free assistance throughout your journey and will stay in touch until your trip concludes. If needed, we can even offer in-person assistance to ensure a smooth and worry-free experience for you.",
  },
  {
    title: "Will I be traveling with a group, or is it an individual package?",
    content:
      "We offer both options! You can choose a private package if you prefer a personalized experience or join a group package, which is a great way to connect with other pilgrims. Group packages depend on availability, so let us know your preference, and we'll arrange accordingly.",
  },
  {
    title: "Are there any discounts for families or groups?",
    content:
      "Yes, we're pleased to offer special discounted rates for families and groups. This makes it more affordable to share this spiritual journey with your loved ones. Let us know the number of people traveling, and we'll provide a customized package for you.",
  },
  {
    title: "Do you offer installment plans or flexible payment options?",
    content:
      "Yes, we provide flexible installment plans to make it easier for you to manage the cost of your trip. You can secure your package with an initial deposit, and the remaining balance can be paid in installments. Let us know what works best for you, and we'll guide you through the process.",
  },
];

// FAQ Section Component
function Faqs() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C3E3E]">
            Frequently Asked Questions{" "}
            <span className="text-[#D4A10F]">(FAQs)</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4A10F] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQ Accordion - takes more space */}
          <div className="lg:col-span-7 w-full">
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <Accordion key={`accordion-${index}`} type="single" collapsible>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <AccordionTrigger className="text-base font-medium py-5 px-6 text-[#0C3E3E] bg-white flex justify-between items-center hover:bg-gray-50">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed p-6 text-gray-600 bg-white border-t border-gray-100">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>

          {/* Call now section - takes less space */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-gradient-to-br from-[#00484A] to-[#003638] rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white"></div>
                <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-white"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Phone Icon Circle */}
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Phone size={28} className="text-[#00484A]" />
                </div>

                {/* Heading */}
                <h3 className="font-bold text-xl md:text-2xl mb-4 text-center">
                  You Have Different Question?
                </h3>

                {/* Divider */}
                <div className="w-16 h-1 bg-[#D4A10F] mx-auto mb-6 rounded-full"></div>

                {/* Subtext */}
                <p className="text-center text-gray-100 mb-8 leading-relaxed">
                  Our team will answer all your questions.
                  <br />
                  We ensure a quick response.
                </p>

                {/* Call Now Button */}
                <button className="relative bg-[#D69E00] w-full py-4 px-6 rounded-full
                 text-white font-bold text-lg hover:bg-[#c58c00] transition-colors duration-300 shadow-lg flex items-center justify-center group">
                  <span className="absolute inset-0 w-full h-full rounded-full
                   bg-white opacity-25 animate-ping"></span>
                  <Phone
                    size={20}
                    className="mr-2 group-hover:rotate-12
                     transition-transform duration-300"
                  />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
