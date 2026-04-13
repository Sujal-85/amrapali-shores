import { motion } from "framer-motion";
import { Flame, Tractor, UtensilsCrossed, Car, Map, TreePine } from "lucide-react";

const services = [
  { icon: UtensilsCrossed, title: "घरगुती शाकाहारी जेवण", desc: "शुद्ध कोकणी शाकाहारी स्वयंपाक" },
  { icon: Flame, title: "शेकोटी (कॅम्पफायर)", desc: "संध्याकाळी कुटुंबासह शेकोटीचा आनंद" },
  { icon: Tractor, title: "बैलगाडी सफर", desc: "पारंपरिक बैलगाडीतून गावाची सफर" },
  { icon: Car, title: "पिकअप/ड्रॉप", desc: "दापोली बस स्टँडवरून सोय" },
  { icon: Map, title: "पर्यटन स्थळे भेटी", desc: "आसपासच्या बीच आणि किल्ल्यांना भेट" },
  { icon: TreePine, title: "निसर्ग शेती भेट", desc: "आंबा, काजू बागांना भेट द्या" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-3 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">सेवा व अनुभव</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            विशेष अनुभव
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center hover-card-effect group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-accent/20">
                <s.icon className="h-7 w-7 text-accent transition-transform group-hover:scale-110" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
