import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LocationPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="section-padding">
        <div className="container mx-auto px-3 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">{t("location.tag")}</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              {t("nav.brand")} {t("location.tag")}
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{t("location.address")}</h3>
                  <p className="text-muted-foreground text-lg">
                    {t("location.fullAddress")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{t("location.contactNumber")}</h3>
                  <p className="text-muted-foreground text-lg">
                    +91 83780 34720
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{t("location.email")}</h3>
                  <p className="text-muted-foreground text-lg">
                    info@amrapali-homestay.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{t("contact.form.checkin")}/{t("contact.form.checkout")}</h3>
                  <p className="text-muted-foreground text-lg">
                    {t("contact.timings")}
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=17.749545483130593,73.18800160998191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                <Navigation className="h-5 w-5" />
                {t("location.viewOnMaps")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-xl overflow-hidden shadow-xl h-96 md:h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.8958586207555!2d73.18800160998191!3d17.749545483130593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c32149d63c3b%3A0x26be74d109a6d719!2sAmrpali%20Home%20stay!5e0!3m2!1sen!2sin!4v1776155965869!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("nav.brand")}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t("location.routeGuide")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-accent">{t("location.mumbaiToDapoli")}</h3>
                <ul className="text-muted-foreground space-y-2 text-base">
                  <li>• {t("location.distance")} ≈ 220 km</li>
                  <li>• {t("location.time")} ≈ 5 hours</li>
                  <li>• {t("location.path")} NH48 to NH66</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-accent">{t("location.puneToDapoli")}</h3>
                <ul className="text-muted-foreground space-y-2 text-base">
                  <li>• {t("location.distance")} ≈ 190 km</li>
                  <li>• {t("location.time")} ≈ 4.5 hours</li>
                  <li>• {t("location.path")} NH60 to NH66</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-accent">{t("location.dapoliStStand")}</h3>
                <ul className="text-muted-foreground space-y-2 text-base">
                  <li>• {t("location.distance")} ≈ 2 km</li>
                  <li>• {t("location.autoAvailable")}</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-accent">{t("location.nearestRailway")}</h3>
                <ul className="text-muted-foreground space-y-2 text-base">
                  <li>• Khed: 29 km</li>
                  <li>• Ratnagiri: 60 km</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationPage;
