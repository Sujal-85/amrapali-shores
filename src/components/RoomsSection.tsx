import { motion } from "framer-motion";
import { Users, Info, Calendar, Utensils, CheckCircle2, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import whatsappIcon from "@/assets/whatsapp-icon.svg";
import { ROOMS_DATA, SPECIAL_PACKAGE } from "@/data/roomsData";

const RoomsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section id="rooms" className="section-padding bg-secondary/20 relative">
      <div className="container mx-auto px-3 md:px-6">
        {/* Header with Sept 1st Rate Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 shadow-sm">
            <Calendar className="h-4 w-4 text-accent" />
            <span>{t("rooms.effectiveFrom")}</span>
          </div>

          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">
            {t("rooms.tag")}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t("rooms.title")}
          </h2>
        </motion.div>

        {/* Special Package Card (₹2,000/person/day) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-3xl bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 text-white p-6 md:p-10 shadow-2xl relative overflow-hidden border border-emerald-500/30"
        >
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{t("rooms.packageTitle")}</span>
              </div>

              <h3 className="font-heading text-2xl md:text-4xl font-extrabold text-amber-100">
                {t("rooms.packageSubtitle")}
              </h3>

              <div className="pt-2">
                <p className="text-sm font-semibold text-emerald-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-amber-300" />
                  <span>{t("rooms.packageIncludesTitle")}</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SPECIAL_PACKAGE.inclusionsKeys.map((key) => (
                    <div key={key} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-xs md:text-sm font-medium border border-white/10">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>{t(key)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-emerald-300/80 pt-1 italic">{t("rooms.packageNote")}</p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4 bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-md shrink-0">
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-extrabold text-amber-300">{SPECIAL_PACKAGE.pricePerPerson}</span>
                <span className="text-xs text-emerald-100 block">{t("rooms.perPersonPerDay")}</span>
              </div>
              <a
                href={`https://wa.me/918378034720?text=${encodeURIComponent("नमस्कार! मी ऑल-इनक्लुसिव्ह पॅकेज (₹२०००/- प्रती व्यक्ती प्रती दिन) बद्दल चौकशी करू इच्छितो/इच्छिते.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 text-sm whitespace-nowrap"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
                <span>{t("rooms.bookOnWhatsapp")}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Room Cards Grid (4 Updated September 1st Rooms) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {ROOMS_DATA.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card overflow-hidden hover-card-effect group cursor-pointer flex flex-col justify-between"
              onClick={() => navigate(`/rooms/${room.id}`)}
            >
              <div>
                <div className="relative overflow-hidden h-48 md:h-52">
                  <img
                    src={room.image}
                    alt={t(room.titleKey)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-md">
                    {room.price}
                    <span className="text-[10px] font-normal block text-center leading-tight">
                      {t("rooms.perNight")}
                    </span>
                  </div>
                  {room.isAC ? (
                    <div className="absolute top-3 left-3 bg-blue-600/90 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow">
                      AC
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 bg-amber-600/90 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow">
                      Non-AC
                    </div>
                  )}
                </div>

                <div className="p-4 md:p-5">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 line-clamp-1">
                    {t(room.titleKey)}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm mb-3">
                    <Users className="h-4 w-4 text-accent shrink-0" />
                    <span>{t(room.capacityKey)}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {room.featuresKeys.map((fKey) => (
                      <span
                        key={fKey}
                        className="bg-primary/10 text-primary text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                      >
                        {t(fKey)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0 flex gap-2">
                <Link
                  to={`/rooms/${room.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-2.5 text-xs font-semibold transition-all"
                >
                  <Info className="h-3.5 w-3.5" />
                  <span>{t("rooms.info")}</span>
                </Link>
                <a
                  href={`https://wa.me/918378034720?text=${encodeURIComponent(`नमस्कार! मी ${t(room.titleKey)} (${room.price}) च्या बुकिंगबद्दल चौकशी करू इच्छितो/इच्छिते.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-green-600 hover:bg-green-700 text-white px-3 py-2.5 text-xs font-semibold transition-all shadow"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="h-3.5 w-3.5" />
                  <span>{t("rooms.book")}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
