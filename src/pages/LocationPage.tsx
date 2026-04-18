import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LocationPage = () => {
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
            <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">स्थान</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              आम्रपाली होमस्टे स्थान
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
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">पत्ता</h3>
                  <p className="text-muted-foreground marathi text-lg">
                    आम्रपाली होमस्टे, दापोली,<br />
                    रत्नागिरी जिल्हा, महाराष्ट्र ४१५७१२
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">संपर्क क्रमांक</h3>
                  <p className="text-muted-foreground text-lg">
                    +91 ९८७६५ ४३२१०
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">ईमेल</h3>
                  <p className="text-muted-foreground text-lg">
                    info@amrapali-homestay.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">चेक-इन/चेक-आउट</h3>
                  <p className="text-muted-foreground text-lg">
                    चेक-इन: दुपारी १२:०० वाजता<br />
                    चेक-आउट: सकाळी ११:०० वाजता
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
                Google Maps वर पहा
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
                title="आम्रपाली होमस्टे, दापोली"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              मार्ग मार्गदर्शन
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-accent">मुंबई ते दापोली</h3>
                <ul className="text-muted-foreground space-y-2 text-base font-devanagari">
                  <li>• अंतर: ≈ २२० कि.मी.</li>
                  <li>• वेळ: ≈ ५ तास</li>
                  <li>• मार्ग: NH48 वरून NH66</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-accent">पुणे ते दापोली</h3>
                <ul className="text-muted-foreground space-y-2 text-base font-devanagari">
                  <li>• अंतर: ≈ १९० कि.मी.</li>
                  <li>• वेळ: ≈ ४.५ तास</li>
                  <li>• मार्ग: NH60 वरून NH66</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-accent">दापोली एसटी स्टँड</h3>
                <ul className="text-muted-foreground space-y-2 text-base font-devanagari">
                  <li>• अंतर: ≈ २ कि.मी.</li>
                  <li>• रिक्षा/टॅक्सी उपलब्ध</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-accent">जवळचे रेल्वे स्टेशन</h3>
                <ul className="text-muted-foreground space-y-2 text-base font-devanagari">
                  <li>• खेड: २९ कि.मी.</li>
                  <li>• रत्नागिरी: ६० कि.मी.</li>
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
