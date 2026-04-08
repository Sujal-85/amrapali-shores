import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutPage = () => (
  <main>
    <Navbar />
    <PageHeader subtitle="आमच्याबद्दल" title="आम्रपाली होमस्टे, दापोली" />
    <AboutSection />
    <WhyChooseSection />
    <TestimonialsSection />
    <Footer />
    <WhatsAppButton />
  </main>
);

export default AboutPage;
