import dynamic from "next/dynamic";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/hero/Hero";
import TrustBar from "@/app/components/TrustBar";
import ServicesGrid from "@/app/components/ServicesGrid";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import FAQ from "@/app/components/FAQ";
import FinalCTA from "@/app/components/FinalCTA";
import LocationContact from "@/app/components/LocationContact";
import Footer from "@/app/components/Footer";

const DoctorSpotlight = dynamic(() => import("@/app/components/DoctorSpotlight"), { ssr: true });
const TestimonialsCarousel = dynamic(() => import("@/app/components/TestimonialsCarousel"), { ssr: true });
const StoryGallery = dynamic(() => import("@/app/components/StoryGallery"), { ssr: true });
const ScrollDownIndicator = dynamic(() => import("@/app/components/ScrollDownIndicator"), { ssr: true });

export default function Home() {
  return (
    <main id="content">
      <Navbar />
      <Hero />
      <ScrollDownIndicator />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <DoctorSpotlight />
      <FAQ />
      <TestimonialsCarousel />
      <StoryGallery />
      <FinalCTA />
      <LocationContact />
      <Footer />
    </main>
  );
}
