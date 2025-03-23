import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PackageInclusions from "./components/PackageInclusions";
import PopularPackages from "./components/PopularPackages";
import Accomodation from "./components/Accomodation";
import Zyarat from "./components/Zyarat";
import Footer from "./components/Footer";
import BookingProcess from "./components/BookingProcess";
import AlhabibInNumbers from "./components/AlhabibInNumbers";
import Faqs from "./components/Faqs";
import TravelDetails from "./components/TravelDetails";
import VideoTestimonial from "./components/VideoTestimonial";
import ReviewCard from "./components/ReviewSection";
import ImageGallery from "./components/ImageGallary";
export default function Home() {
  const images = [
    { src: "/alhabibImages/imgalary2.png", alt: "Kaaba in Mecca" },
    { src: "/alhabibImages/imgalary2.png", alt: "Beautiful Mosque" },
    { src: "/alhabibImages/imgalary2.png", alt: "Scenic Beach" },
    { src: "/alhabibImages/imgalary2.png", alt: "City Skyline" },
    { src: "/alhabibImages/imgalary2.png", alt: "City Skyline" },
    { src: "/alhabibImages/imgalary2.png", alt: "City Skyline" },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <TravelDetails />
      <PopularPackages />
      <Accomodation />
      <Zyarat />
      <BookingProcess />
      <AlhabibInNumbers />
      <ReviewCard />
      <PackageInclusions />
      <VideoTestimonial />
      <ImageGallery images={images} />

      <Faqs />
      <Footer />
    </>
  );
}
