import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", phone: "", checkin: "", checkout: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `नमस्कार! माझे नाव ${form.name}. मला बुकिंग करायचे आहे.\nफोन: ${form.phone}\nचेक-इन: ${form.checkin}\nचेक-आउट: ${form.checkout}\n${form.message}`;
    window.open(`https://wa.me/918378034720?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl px-3 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">{t("contact.tag")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t("contact.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">{t("contact.directContact")}</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+918378034720"
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("contact.phoneWhatsapp")}</p>
                      <p className="font-bold text-foreground">+91 83780 34720</p>
                    </div>
                  </a>
                  <a
                    href="tel:+919561142078"
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("contact.phone")}</p>
                      <p className="font-bold text-foreground">+91 95611 42078</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/918378034720"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t("contact.whatsapp")}</p>
                      <p className="font-bold text-foreground">+91 83780 34720</p>
                    </div>
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                {t("contact.notice")} <br />
                {t("contact.timings")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.form.name")}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.form.phone")}</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder={t("contact.form.phonePlaceholder")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.form.checkin")}</label>
                  <input
                    type="date"
                    required
                    value={form.checkin}
                    onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.form.checkout")}</label>
                  <input
                    type="date"
                    required
                    value={form.checkout}
                    onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.form.message")}</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-all hover:shadow-xl hover:scale-[1.02]"
              >
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {t("contact.form.send")}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
