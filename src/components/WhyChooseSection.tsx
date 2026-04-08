import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "दापोलीतील सर्वोत्तम कौटुंबिक होमस्टे",
  "संपूर्ण शुद्ध शाकाहारी जेवण",
  "मद्यपान व धूम्रपान मुक्त परिसर",
  "निसर्गरम्य शांत वातावरण",
  "खऱ्या गावाकडच्या जीवनाचा अनुभव",
  "बीच आणि किल्ल्यांच्या जवळ",
  "स्वच्छ आणि आरामदायक खोल्या",
  "परवडणारे दर",
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-semibold mb-2 tracking-wider uppercase text-sm">आम्हीच का?</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            आम्रपाली होमस्टे का निवडावे?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl px-5 py-4 backdrop-blur-sm"
            >
              <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
              <span className="font-medium">{r}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
