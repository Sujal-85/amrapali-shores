import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import RoomsSection from "@/components/RoomsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const RoomsPage = () => (
  <main>
    <Navbar />
    <PageHeader subtitle="आमच्या खोल्या" title="आरामदायक निवास व्यवस्था" />
    <RoomsSection />
    <Footer />
    <WhatsAppButton />
  </main>
);

export default RoomsPage;
