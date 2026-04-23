import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import RoomsSection from "@/components/RoomsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const RoomsPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Navbar />
      <PageHeader subtitle={t("rooms.tag")} title={t("rooms.title")} />
      <RoomsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default RoomsPage;
