import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
// FAQ data for the homepage
const accordionData = [
  {
    title: "What is the baggage allowance for my flight?",
    content:
      "The first checked baggage is included in all our packages. You’re allowed 28kg per person, which includes 20kg for your main luggage and 8kg for your hand carry. This ensures you can comfortably pack everything you need for your journey.",
  },
  {
    title: "What is your refund policy in case of cancellation?",
    content:
      "Our refund policy is designed to be as fair and straightforward as possible. If you need to cancel, the amount refunded will depend on how close the cancellation is to your travel date, as airline tickets and hotel reservations have specific terms. We'll guide you through the process and do our best to minimize any inconvenience. Feel free to contact us for detailed terms when booking.",
  },
  {
    title: "Will you provide assistance if I face any issues during my trip?",
    content:
      "Absolutely, we’re here to support you every step of the way. We provide free assistance throughout your journey and will stay in touch until your trip concludes. If needed, we can even offer in-person assistance to ensure a smooth and worry-free experience for you.",
  },
  {
    title: "Will I be traveling with a group, or is it an individual package?",
    content:
      "We offer both options! You can choose a private package if you prefer a personalized experience or join a group package, which is a great way to connect with other pilgrims. Group packages depend on availability, so let us know your preference, and we’ll arrange accordingly.",
  },
  {
    title: "Are there any discounts for families or groups?",
    content:
      "Yes, we’re pleased to offer special discounted rates for families and groups. This makes it more affordable to share this spiritual journey with your loved ones. Let us know the number of people traveling, and we’ll provide a customized package for you.",
  },
  {
    title: "Do you offer installment plans or flexible payment options?",
    content:
      "Yes, we provide flexible installment plans to make it easier for you to manage the cost of your trip. You can secure your package with an initial deposit, and the remaining balance can be paid in installments. Let us know what works best for you, and we’ll guide you through the process.",
  },
];

// FAQ Section Component
function Faqs() {
  return (
    <>
      {/* FAQ Accordion */}
      <div className="w-full md:w-[90%] mx-auto py-10">
        {/* Heading */}
        <div className="text-center text-3xl px-4 font-bold mb-8">
          Frequently Asked Questions{" "}
          <span className="text-[#D4A10F]">(FAQs)</span>
        </div>

        {/* FAQ Accordion */}
        <div className="w-[80%] mx-auto space-y-4">
          {[
            "What is the baggage allowance for my flight?",
            "What is your refund policy in case of cancellation?",
            "Will you provide assistance if I face any issues during my trip?",
            "Will I be traveling with a group, or is it an individual package?",
            "Are there any discounts for families or groups?",
            "Do you offer installment plans or flexible payment options?",
          ].map((item, index) => (
            <Accordion key={`accordion-${index}`} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-base font-normal py-4 px-4 text-[#0C3E3E] border rounded-md flex justify-between items-center">
                  {item}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-6 p-4 text-[#676060] bg-white">
                  {/* Placeholder content */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      {/* call now button */}
      <div className="bg-[#00484A] rounded-xl p-8 text-center text-white max-w-sm mx-auto">
        {/* Phone Icon Circle */}
        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone size={24} className="text-[#00484A]" />
        </div>

        {/* Heading */}
        <h3 className="font-bold text-lg mb-2">You Have Different Question?</h3>

        {/* Subtext */}
        <p className="text-sm leading-relaxed mb-6">
          Our team will answer all your question. <br /> We ensure a quick
          response.
        </p>

        {/* Call Now Button */}
        <button className="bg-[#D69E00] animate-pulse w-full py-3 rounded-full text-white font-bold text-xl hover:bg-[#c58c00] transition">
          Call Now
        </button>
      </div>
    </>
  );
}

export default Faqs;
