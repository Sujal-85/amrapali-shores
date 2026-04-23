import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Navbar />
      <PageHeader subtitle={t("services.tag")} title={t("services.title")} />
      <ServicesSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default ServicesPage;
