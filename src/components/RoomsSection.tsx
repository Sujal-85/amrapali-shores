import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import roomBed3 from "@/assets/room-bed-3.jpeg";
import roomBed2 from "@/assets/room-bed-2.jpeg";
import roomAc from "@/assets/room-ac.jpeg";
import roomNonac from "@/assets/room-nonac.jpeg";
import roomJointCottage from "@/assets/room-joint-cottage.jpeg";

const rooms = [
  {
    image: roomBed3,
    title: "फॅमिली कॉटेज",
    price: "₹३,५००",
    capacity: "५ जण",
    features: ["पंखा", "अटॅच्ड बाथरूम", "कॉटेज"],
  },
  {
    image: roomBed2,
    title: "कपल कॉटेज",
    price: "₹२,५००",
    capacity: "२ जण",
    features: ["एसी", "अटॅच्ड बाथरूम", "प्रायव्हेट"],
  },
  {
    image: roomAc,
    title: "एसी रूम",
    price: "₹२,०००",
    capacity: "२ जण",
    features: ["एसी", "अटॅच्ड बाथरूम"],
  },
  {
    image: roomNonac,
    title: "नॉन एसी रूम",
    price: "₹१,५००",
    capacity: "२ जण",
    features: ["पंखा", "अटॅच्ड बाथरूम"],
  },
  {
    image: roomJointCottage,
    title: "जॉइंट कॉटेज",
    price: "₹६,०००",
    capacity: "८ जण",
    features: ["पंखा", "अटॅच्ड बाथरूम", "मोठा कॉटेज"],
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-3 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">आमच्या खोल्या</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            आरामदायक निवास व्यवस्था
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card overflow-hidden hover-card-effect group"
            >
              <div className="relative overflow-hidden h-40 md:h-56">
                <img
                  src={room.image}
                  alt={room.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-accent text-accent-foreground px-2 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold">
                  {room.price}/रात्र
                </div>
              </div>
              <div className="p-3 md:p-6">
                <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mb-2 md:mb-3">{room.title}</h3>
                <div className="flex items-center gap-1 md:gap-2 text-muted-foreground text-xs md:text-sm mb-2 md:mb-4">
                  <Users className="h-3 w-3 md:h-4 md:w-4" />
                  <span>{room.capacity} पर्यंत</span>
                </div>
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-5">
                  {room.features.map((f) => (
                    <span key={f} className="bg-primary/10 text-primary text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="block text-center rounded-lg bg-primary px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  बुकिंग चौकशी
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
