import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, ArrowLeft, Check, Calendar, Sparkles, Utensils, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import whatsappIcon from "@/assets/whatsapp-icon.svg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getRoomById, SPECIAL_PACKAGE } from "@/data/roomsData";

const RoomDetailsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const room = getRoomById(id);

  if (!room) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{t("rooms.notFound")}</h1>
            <Link to="/rooms" className="text-primary hover:underline">
              {t("rooms.backToAll")}
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <section className="section-padding bg-secondary/30 pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("rooms.backToAll")}
            </Link>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Room Image Container */}
              <div className="space-y-6">
                <div className="overflow-hidden rounded-3xl shadow-xl relative border border-border">
                  <img
                    src={room.image}
                    alt={t(room.titleKey)}
                    className="w-full h-72 md:h-[420px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {room.isAC ? "AC Room" : "Non-AC Room"}
                  </div>
                </div>

                {/* All-inclusive package card banner inside details page */}
                <div className="bg-gradient-to-br from-emerald-950 to-teal-900 text-white p-6 rounded-2xl border border-emerald-500/30 shadow-lg">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider mb-2">
                    <Sparkles className="h-4 w-4" />
                    <span>{t("rooms.packageTitle")}</span>
                  </div>
                  <p className="text-lg font-bold text-amber-100 mb-3">
                    {SPECIAL_PACKAGE.pricePerPerson} {t("rooms.perPersonPerDay")}
                  </p>
                  <p className="text-xs text-emerald-200 mb-3 font-medium flex items-center gap-1.5">
                    <Utensils className="h-3.5 w-3.5 text-amber-400" />
                    <span>{t("rooms.packageIncludesTitle")}</span>
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-emerald-100 mb-4">
                    {SPECIAL_PACKAGE.inclusionsKeys.map((key) => (
                      <div key={key} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                        <span>{t(key)}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/918378034720?text=${encodeURIComponent("नमस्कार! मी ऑल-इनक्लुसिव्ह पॅकेज (₹२०००/- प्रती व्यक्ती प्रती दिन) बद्दल चौकशी करू इच्छितो/इच्छिते.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow"
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
                    <span>{t("rooms.bookOnWhatsapp")}</span>
                  </a>
                </div>
              </div>

              {/* Room Details & Pricing Info */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    <span>{t("rooms.effectiveFrom")}</span>
                  </div>
                  
                  <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                    {t(room.titleKey)}
                  </h1>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                    <Users className="h-5 w-5 text-accent" />
                    <span>{t(room.capacityKey)}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-secondary/50 border border-border flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-accent">{room.price}</span>
                  <span className="text-muted-foreground font-medium">{t("rooms.perNight")}</span>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wider">{t("rooms.info")}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">{t(room.descriptionKey)}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">{t("rooms.amenitiesLabel")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {room.featuresKeys.map((fKey) => (
                      <span
                        key={fKey}
                        className="flex items-center gap-1.5 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold"
                      >
                        <Check className="h-3.5 w-3.5" />
                        {t(fKey)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={`https://wa.me/918378034720?text=${encodeURIComponent(`नमस्कार! मी ${t(room.titleKey)} (${room.price}) च्या बुकिंगबद्दल चौकशी करू इच्छितो/इच्छिते.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 rounded-2xl bg-green-600 hover:bg-green-700 px-6 py-4 font-bold text-white text-base transition-all shadow-xl hover:shadow-green-600/30"
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
                    {t("rooms.bookOnWhatsapp")}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default RoomDetailsPage;
