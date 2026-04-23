import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Navbar />
      <PageHeader subtitle={t("contact.tag")} title={t("contact.title")} />
      <ContactSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default ContactPage;
