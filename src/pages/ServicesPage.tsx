import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServicesPage = () => (
  <main>
    <Navbar />
    <PageHeader subtitle="सेवा व अनुभव" title="विशेष अनुभव" />
    <ServicesSection />
    <Footer />
    <WhatsAppButton />
  </main>
);

export default ServicesPage;
