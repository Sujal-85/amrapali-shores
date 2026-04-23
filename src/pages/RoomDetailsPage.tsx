import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, ArrowLeft, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import whatsappIcon from "@/assets/whatsapp-icon.svg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import roomBed3 from "@/assets/room-bed-3.jpeg";
import roomBed2 from "@/assets/room-bed-2.jpeg";
import roomAc from "@/assets/room-ac.jpeg";
import roomNonac from "@/assets/room-nonac.jpeg";
import roomJointCottage from "@/assets/room-joint-cottage.jpeg";
import roomCoupleCottage from "@/assets/room-couple-cottage.jpeg";

const RoomDetailsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const rooms = [
    {
      id: "family-cottage-fan",
      image: roomBed3,
      title: t("rooms.types.family-cottage-fan"),
      price: "₹3,500",
      capacity: `5 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.fan"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.cottage"), t("rooms.amenities.private-entry"), t("rooms.amenities.garden-view")],
      description: t("rooms.descriptions.family-cottage-fan"),
    },
    {
      id: "family-cottage-ac",
      image: roomBed2,
      title: t("rooms.types.family-cottage-ac"),
      price: "₹3,500",
      capacity: `5 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.ac"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.private"), t("rooms.amenities.garden-view"), t("rooms.amenities.free-wifi")],
      description: t("rooms.descriptions.family-cottage-ac"),
    },
    {
      id: "ac-room",
      image: roomAc,
      title: t("rooms.types.ac-room"),
      price: "₹2,500",
      capacity: `1 - 3 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.ac"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.tv"), t("rooms.amenities.free-wifi"), t("rooms.amenities.garden-view")],
      description: t("rooms.descriptions.ac-room"),
    },
    {
      id: "non-ac-room",
      image: roomNonac,
      title: t("rooms.types.non-ac-room"),
      price: "₹1,500",
      capacity: `2 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.fan"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.tv"), t("rooms.amenities.garden-view"), t("rooms.amenities.economic")],
      description: t("rooms.descriptions.non-ac-room"),
    },
    {
      id: "joint-cottage",
      image: roomJointCottage,
      title: t("rooms.types.joint-cottage"),
      price: "₹6,000",
      capacity: `8 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.fan"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.big-cottage"), t("rooms.amenities.great-for-groups"), t("rooms.amenities.garden-view"), t("rooms.amenities.free-wifi")],
      description: t("rooms.descriptions.joint-cottage"),
    },
    {
      id: "couple-cottage",
      image: roomCoupleCottage,
      title: t("rooms.types.couple-cottage"),
      price: "₹2,500",
      capacity: `2 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.fan"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.private"), t("rooms.amenities.garden-view"), t("rooms.amenities.cooler")],
      description: t("rooms.descriptions.couple-cottage"),
    },
  ];

  const room = rooms.find((r) => r.id === id);

  if (!room) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
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
      <section className="section-padding bg-secondary/30 pt-24">
        <div className="container mx-auto px-3 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("rooms.backToAll")}
            </Link>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {room.title}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5" />
                    <span>{room.capacity}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-accent">{room.price}</span>
                  <span className="text-muted-foreground">{t("rooms.perNight")}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{room.description}</p>

                <div>
                  <h3 className="font-semibold mb-3">{t("rooms.amenitiesLabel")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        <Check className="h-3 w-3" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={`https://wa.me/918378034720?text=नमस्कार`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg"
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
