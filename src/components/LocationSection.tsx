import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LocationSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const routes = t("location.routes", { returnObjects: true }) as string[];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-3 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">{t("location.tag")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t("location.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div 
              className="glass-card p-8 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              onClick={() => navigate('/location')}
            >
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{t("location.address")}</h3>
                  <p className="text-muted-foreground">
                    {t("location.fullAddress")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Navigation className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{t("location.route")}</h3>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    {routes.map((r, i) => (
                      <li key={i}>• {r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=17.749545483130593,73.18800160998191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                <Navigation className="h-4 w-4" />
                {t("location.viewOnMaps")}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl h-80 md:h-96"
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
      </div>
    </section>
  );
};

export default LocationSection;
