import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">स्थान</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            आम्हाला कसे पोहोचायचे
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">पत्ता</h3>
                  <p className="text-muted-foreground font-devanagari">
                    आम्रपाली होमस्टे, दापोली,<br />
                    रत्नागिरी जिल्हा, महाराष्ट्र - ४१५७१२
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Navigation className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">मार्ग</h3>
                  <ul className="text-muted-foreground space-y-1 text-sm font-devanagari">
                    <li>• मुंबई - दापोली: ≈ २२० कि.मी. (५ तास)</li>
                    <li>• पुणे - दापोली: ≈ १९० कि.मी. (४.५ तास)</li>
                    <li>• दापोली एसटी स्टँड: ≈ २ कि.मी.</li>
                    <li>• जवळचे रेल्वे स्टेशन: खेड (४५ कि.मी.)</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/7GgEWEBnWkt3xUcdA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                <Navigation className="h-4 w-4" />
                Google Maps वर पहा
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30575.77!2d73.1!3d17.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8f6fa22222222%3A0x3333333333333333!2sDapoli%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="आम्रपाली होमस्टे, दापोली"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
