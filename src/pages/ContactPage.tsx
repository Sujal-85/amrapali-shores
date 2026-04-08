import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactPage = () => (
  <main>
    <Navbar />
    <PageHeader subtitle="संपर्क" title="बुकिंग चौकशी करा" />
    <ContactSection />
    <LocationSection />
    <Footer />
    <WhatsAppButton />
  </main>
);

export default ContactPage;
