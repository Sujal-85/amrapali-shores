import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AttractionsMap from "@/components/AttractionsMap";

const AttractionsPage = () => {
  return (
    <main>
      <Navbar />
      <AttractionsMap />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default AttractionsPage;
