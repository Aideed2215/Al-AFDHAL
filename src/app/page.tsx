import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/hero/Hero";
import TrustBar from "@/app/components/TrustBar";
import ServicesGrid from "@/app/components/ServicesGrid";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import DoctorSpotlight from "@/app/components/DoctorSpotlight";
import FAQ from "@/app/components/FAQ";
import TestimonialsCarousel from "@/app/components/TestimonialsCarousel";
import StoryGallery from "@/app/components/StoryGallery";
import LocationContact from "@/app/components/LocationContact";
import FinalCTA from "@/app/components/FinalCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main id="content">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <DoctorSpotlight />
      <FAQ />
      <TestimonialsCarousel />
      <StoryGallery />
      <LocationContact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
