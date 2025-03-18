import React from "react";

const VisaProcess = () => {
  return (
    <div className="bg-gray-100 p-6 max-w-2xl mx-auto rounded">
      <h2 className="text-teal-800 text-xl font-bold mb-6">
        Our Visa Process:
      </h2>

      <div className="space-y-6">
        {/* Step 1 */}
        <div className="flex items-center">
          <div className="bg-teal-800 text-white py-2 px-3 rounded text-sm font-medium w-40 text-center">
            Contact Us
          </div>
          <div className="w-4 h-0.5 bg-teal-800 mx-2"></div>
          <div className="flex-1">
            <p className="text-sm">
              Reach out via form or call to connect with our visa expert.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center flex-row-reverse">
          <div className="bg-teal-800 text-white py-2 px-3 rounded text-sm font-medium w-40 text-center">
            Expert Consultation
          </div>
          <div className="w-4 h-0.5 bg-teal-800 mx-2"></div>
          <div className="flex-1 text-right">
            <p className="text-sm">
              Get details and guidance from our visa specialist.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-center">
          <div className="bg-teal-800 text-white py-2 px-3 rounded text-sm font-medium w-40 text-center">
            Document Submission
          </div>
          <div className="w-4 h-0.5 bg-teal-800 mx-2"></div>
          <div className="flex-1">
            <p className="text-sm">
              Reach out via form or call to connect with our visa expert.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-center flex-row-reverse">
          <div className="bg-teal-800 text-white py-2 px-3 rounded text-sm font-medium w-40 text-center">
            Application Processing
          </div>
          <div className="w-4 h-0.5 bg-teal-800 mx-2"></div>
          <div className="flex-1 text-right">
            <p className="text-sm">
              Our team submits your visa directly to the Saudi embassy.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex items-center">
          <div className="bg-teal-800 text-white py-2 px-3 rounded text-sm font-medium w-40 text-center">
            Approval & Delivery
          </div>
          <div className="w-4 h-0.5 bg-teal-800 mx-2"></div>
          <div className="flex-1">
            <p className="text-sm">
              Receive your approved visa via email within the processing time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaProcess;
