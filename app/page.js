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
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularPackages />
      <Accomodation />
      <Zyarat />
      <BookingProcess />
      <AlhabibInNumbers />

      <PackageInclusions />

      <VideoTestimonial />
      <Faqs />
      <Footer />
    </>
  );
}
