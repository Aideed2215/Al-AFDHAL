import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/hero/Hero";
import TrustBar from "@/app/components/TrustBar";
import ServicesGrid from "@/app/components/ServicesGrid";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import DoctorSpotlight from "@/app/components/DoctorSpotlight";
import FAQ from "@/app/components/FAQ";
import TestimonialsCarousel from "@/app/components/TestimonialsCarousel";
import StoryGallery from "@/app/components/StoryGallery";
import FinalCTA from "@/app/components/FinalCTA";
import LocationContact from "@/app/components/LocationContact";
import FloatingCTA from "@/app/components/FloatingCTA";
import ScrollDownIndicator from "@/app/components/ScrollDownIndicator";
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
      <FinalCTA />
      <LocationContact />
      <FloatingCTA />
      <ScrollDownIndicator />
      <Footer />
    </main>
  );
}
