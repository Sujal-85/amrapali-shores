import { motion } from "framer-motion";
import { Users, Info } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import whatsappIcon from "@/assets/whatsapp-icon.svg";
import roomBed3 from "@/assets/room-bed-3.jpeg";
import roomBed2 from "@/assets/room-bed-2.jpeg";
import roomAc from "@/assets/room-ac.jpeg";
import roomNonac from "@/assets/room-nonac.jpeg";
import roomJointCottage from "@/assets/room-joint-cottage.jpeg";
import roomCoupleCottage from "@/assets/room-couple-cottage.jpeg";

const RoomsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const rooms = [
    {
      id: "family-cottage-fan",
      image: roomBed3,
      title: t("rooms.types.family-cottage-fan"),
      price: "₹3,500",
      capacity: `5 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.fan"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.cottage")],
    },
    {
      id: "family-cottage-ac",
      image: roomBed2,
      title: t("rooms.types.family-cottage-ac"),
      price: "₹3,500",
      capacity: `5 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.ac"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.private")],
    },
    {
      id: "ac-room",
      image: roomAc,
      title: t("rooms.types.ac-room"),
      price: "₹2,000",
      capacity: `1 - 3 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.ac"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.private")],
    },
    {
      id: "non-ac-room",
      image: roomNonac,
      title: t("rooms.types.non-ac-room"),
      price: "₹1,500",
      capacity: `2 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.fan"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.private")],
    },
    {
      id: "joint-cottage",
      image: roomJointCottage,
      title: t("rooms.types.joint-cottage"),
      price: "₹6,000",
      capacity: `8 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.fan"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.big-cottage")],
    },
    {
      id: "couple-cottage",
      image: roomCoupleCottage,
      title: t("rooms.types.couple-cottage"),
      price: "₹2,500",
      capacity: `2 ${t("rooms.upTo")}`,
      features: [t("rooms.amenities.fan"), t("rooms.amenities.ac"), t("rooms.amenities.attached-bathroom"), t("rooms.amenities.private")],
    },
  ];

  return (
    <section id="rooms" className=" section-padding bg-secondary/20">
      <div className="container mx-auto px-3 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">{t("rooms.tag")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t("rooms.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card overflow-hidden hover-card-effect group cursor-pointer"
              onClick={() => navigate(`/rooms/${room.id}`)}
            >
              <div className="relative overflow-hidden h-40 md:h-56">
                <img
                  src={room.image}
                  alt={room.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-accent text-accent-foreground px-2 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold">
                  {room.price}{t("rooms.perNight")}
                </div>
              </div>
              <div className="p-3 md:p-6">
                <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mb-2 md:mb-3">{room.title}</h3>
                <div className="flex items-center gap-1 md:gap-2 text-muted-foreground text-xs md:text-sm mb-2 md:mb-4">
                  <Users className="h-3 w-3 md:h-4 md:w-4" />
                  <span>{room.capacity}</span>
                </div>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-5">
                  {room.features.map((f) => (
                    <span key={f} className="bg-primary/10 text-primary text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/rooms/${room.id}`}
                    className="flex-1 flex items-center justify-center gap-1 rounded-lg bg-primary px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                  >
                    <Info className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden md:inline">{t("rooms.info")}</span>
                  </Link>
                  <a
                    href={`https://wa.me/918378034720?text=नमस्कार`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 rounded-lg bg-green-600 px-2 py-2 md:px-3 md:py-3 text-xs md:text-sm font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg"
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="h-3 w-3 md:h-4 md:w-4" />
                    <span className="hidden md:inline">{t("rooms.book")}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
