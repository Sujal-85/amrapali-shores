import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Navbar />
      <PageHeader subtitle={t("about.tag")} title={t("about.title")} />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default AboutPage;
