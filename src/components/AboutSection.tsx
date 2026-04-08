import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck } from "lucide-react";
import ownerImg from "@/assets/owner.png";

const features = [
  { icon: Leaf, title: "शुद्ध निसर्ग", desc: "हिरव्यागार झाडांनी वेढलेले शांत वातावरण" },
  { icon: Heart, title: "कौटुंबिक वातावरण", desc: "सर्व वयोगटांसाठी सुरक्षित आणि आनंददायी" },
  { icon: ShieldCheck, title: "शुद्ध शाकाहारी", desc: "मद्यपान व धूम्रपान मुक्त परिसर" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">आमच्याबद्दल</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            आम्रपाली होमस्टे, दापोली
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src={ownerImg} alt="डॉ. प्रशांत परांजपे" className="w-20 h-20 rounded-full object-cover object-top border-4 border-accent/30" />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">डॉ. प्रशांत परांजपे</h3>
                    <p className="text-muted-foreground text-sm">संस्थापक, आम्रपाली होमस्टे</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 font-devanagari">
                  कोकणातील दापोली तालुक्यात वसलेले आम्रपाली होमस्टे हे निसर्गप्रेमींसाठी एक आदर्श ठिकाण आहे.
                  आमच्या होमस्टेमध्ये तुम्हाला खऱ्या गावाकडच्या जीवनाचा अनुभव मिळतो — शुद्ध हवा, हिरवीगार
                  झाडे, पक्ष्यांचे किलबिलाट आणि घरगुती शुद्ध शाकाहारी जेवण.
                </p>
                <p className="text-muted-foreground leading-relaxed font-devanagari">
                  कुटुंबासह आनंददायी सुट्टी घालवण्यासाठी, निसर्गाच्या सानिध्यात विश्रांती घेण्यासाठी
                  आम्रपाली होमस्टे हे सर्वोत्तम ठिकाण आहे.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-6 flex items-start gap-4 hover-card-effect"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
