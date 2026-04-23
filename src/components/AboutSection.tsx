import { motion } from "framer-motion";
import { Leaf, Heart, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import ownerImg from "@/assets/owner.png";

const iconMap: Record<string, any> = {
  "Pure Nature": Leaf,
  "Family Atmosphere": Heart,
  "Pure Vegetarian": ShieldCheck,
  "शुद्ध निसर्ग": Leaf,
  "कौटुंबिक वातावरण": Heart,
  "शुद्ध शाकाहारी": ShieldCheck,
};

const AboutSection = () => {
  const { t } = useTranslation();
  
  const features = t('about.features', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-3 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 text-sm uppercase tracking-widest">{t('about.tag')}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t('about.title')}
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
              <div className="bg-white border border-slate-100 rounded-[2rem] shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src={ownerImg} alt={t('about.owner.name')} className="w-20 h-20 rounded-full object-cover object-top border-4 border-amber-100" />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{t('about.owner.name')}</h3>
                    <p className="text-muted-foreground text-sm">{t('about.owner.role')}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {t('about.owner.p1')}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {t('about.owner.p2')}
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
            {features.map((f, i) => {
              const Icon = iconMap[f.title] || Leaf;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1">{f.title}</h3>
                    <p className="text-muted-foreground text-sm">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
