import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const GalleryPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Navbar />
      <PageHeader subtitle={t("gallery.tag")} title={t("gallery.title")} />
      <GallerySection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default GalleryPage;
