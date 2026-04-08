import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", checkin: "", checkout: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `नमस्कार! माझे नाव ${form.name}. मला बुकिंग करायचे आहे.\nचेक-इन: ${form.checkin}\nचेक-आउट: ${form.checkout}\n${form.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">संपर्क</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            बुकिंग चौकशी करा
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
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">थेट संपर्क</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">फोन</p>
                      <p className="font-bold text-foreground">+91 98765 43210</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-bold text-foreground">+91 98765 43210</p>
                    </div>
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 font-devanagari">
                बुकिंगसाठी कृपया किमान ३ दिवस आधी संपर्क करा. <br />
                चेक-इन: दुपारी १२:०० | चेक-आउट: सकाळी ११:००
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
                <label className="block text-sm font-medium text-foreground mb-1.5">तुमचे नाव</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="पूर्ण नाव"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">फोन नंबर</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">चेक-इन</label>
                  <input
                    type="date"
                    required
                    value={form.checkin}
                    onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">चेक-आउट</label>
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
                <label className="block text-sm font-medium text-foreground mb-1.5">संदेश (ऐच्छिक)</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="काही विशेष सूचना..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-all hover:shadow-xl hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                WhatsApp वर पाठवा
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
