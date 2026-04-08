import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const GalleryPage = () => (
  <main>
    <Navbar />
    <PageHeader subtitle="गॅलरी" title="आमचा परिसर पहा" />
    <GallerySection />
    <Footer />
    <WhatsAppButton />
  </main>
);

export default GalleryPage;
