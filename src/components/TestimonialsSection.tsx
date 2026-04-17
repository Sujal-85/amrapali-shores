import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "सागर ओक, पुणे.",
    text: "मंगळवारी दुपारी खेडहून आम्ही चौघे दापोलीला \"आम्रपाली होमस्टे\" मधे दाखल झालो. अतिशय विशुद्ध असे तिथले वातावरण होते. निसर्गाला कोणत्याही प्रकारे हानी होणार नाही याचा व्यावहारीक दृष्टीने विचार करणारी त्यांची सगळी व्यवस्था होती. स्वतः अस्मिता आणि प्रशांत परांजपे त्यांच्या प्रमोद या मदतनीसाच्या मदतीने जणू आमच्या सेवेतच होते. इथे मुद्दाम नमूद केले पाहिजे की प्रशांत यांना दोनच महिन्यापूर्वी त्यांच्या निसर्ग संवर्धनाच्या कार्याबद्दल श्रीलंकेच्या कोलंबो विद्यापीठाने मानद डॉक्टरेट दिली आहे. अस्मिताने बनवलेले घरगुती चविष्ट जेवण म्हणजे पर्वणीच होती.",
    rating: 5,
  },
  {
    name: "श्री. राजेश पाटील",
    text: "आम्रपाली होमस्टेमध्ये आम्ही कुटुंबासह राहिलो. अत्यंत शांत वातावरण, स्वादिष्ट जेवण आणि मालकांचे अतिशय प्रेमळ वागणे. पुन्हा नक्की येऊ!",
    rating: 5,
  },
  {
    name: "सौ. अनिता देशमुख",
    text: "दापोलीतील सर्वोत्तम होमस्टे! मुलांना खूप आवडले. बैलगाडी सफर आणि शेकोटीचा अनुभव अविस्मरणीय होता.",
    rating: 5,
  },
  {
    name: "श्री. सुहास जोशी",
    text: "शुद्ध शाकाहारी जेवणाची अप्रतिम चव. निसर्गाच्या सानिध्यात विश्रांतीसाठी उत्तम ठिकाण. सर्वांना शिफारस करतो.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl px-3 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">अभिप्राय</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            आमचे पर्यटक म्हणतात...
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <Quote className="h-10 w-10 text-accent/30 mx-auto mb-4" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-devanagari">
                "{testimonials[current].text}"
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-heading font-bold text-foreground">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-muted hover:bg-accent/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-muted hover:bg-accent/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
