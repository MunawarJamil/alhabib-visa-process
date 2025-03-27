import React from "react";

// Sample data for video testimonials
const videoData = [
  {
    videoLink: "/videoFiles/WhatsApp Video 2025-01-24 at 18.04.45.mp4", // Replace with actual video link
  },

  {
    videoLink: "/videoFiles/LP-Review.mp4",
  },
];

// Video Testimonial Component
function VideoTestimonial() {
  return (
    <>
      {" "}
      <div className="bg-white   w-full ">
        <div className="w-full lg:max-w-7xl mx-auto lg:text-center  md:px-6 lg:px-8 py-8">
       
        <div className=" w-[95%]  md:w-[70%]  mx-auto  ">
          <div className="lg:text-center text-3xl px-4 font-bold text-nowrap">
            Watch <span className="text-[#D4A10F]"> Real Stories </span> 
           !
          </div>
        </div>

        <div className="flex justify-center   items-center w-[90%] md:w-[60%] lg:w-[45%] mx-auto gap-3 my-5 flex-col md:flex-row ">
          {videoData.map((item, index) => (
            <video
              key={index} // Add a unique key for each video
              className="w-full   p-1  md:w-[52%] h-[23rem] lg:h-[29rem] object-contain rounded-lg"
              src={item.videoLink} // Correctly use item.videoLink
              controls
            ></video>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default VideoTestimonial;
