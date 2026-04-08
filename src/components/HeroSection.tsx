import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="gradient-overlay absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          निसर्गाच्या कुशीत
          <br />
          <span className="text-gold">शांत जीवनाचा अनुभव</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-devanagari"
        >
          दापोलीतील शुद्ध शाकाहारी होमस्टे — खऱ्या गावाकडच्या अनुभवासह
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-all hover:scale-105 hover:shadow-xl"
          >
            आत्ताच बुक करा
          </a>
          <a
            href="#rooms"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary-foreground/50 px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 hover:scale-105"
          >
            खोल्या पहा
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/70" />
        </motion.div>
      </motion.div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919876543210?text=नमस्कार! मला आम्रपाली होमस्टे बद्दल माहिती हवी आहे."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold shadow-2xl transition-transform hover:scale-110 animate-float"
        style={{ color: "#fff" }}
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </section>
  );
};

export default HeroSection;
