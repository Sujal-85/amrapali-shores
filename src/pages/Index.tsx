import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import templeBg from "@/assets/bg.jpeg";

const FloatingSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className={`relative z-10 ${className}`}
  >
    <div className="rounded-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.2)]  overflow-hidden">
      {children}
    </div>
  </motion.div>
);

const Index = () => {
  return (
    <main className="relative">
      {/* Fixed Temple Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${templeBg})` }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero - Full height over background */}
        <div className="h-screen">
          <HeroSection />
        </div>

        {/* Floating Card Sections */}
        <FloatingSection>
          <AboutSection />
        </FloatingSection>

        <FloatingSection>
          <RoomsSection />
        </FloatingSection>

        <FloatingSection>
          <GallerySection />
        </FloatingSection>

        <FloatingSection>
          <ServicesSection />
        </FloatingSection>

        <FloatingSection>
          <WhyChooseSection />
        </FloatingSection>

        <FloatingSection>
          <TestimonialsSection />
        </FloatingSection>

        <FloatingSection>
          <LocationSection />
        </FloatingSection>

        <FloatingSection>
          <ContactSection />
        </FloatingSection>

        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
};

export default Index;
