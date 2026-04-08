import { motion } from "framer-motion";
import { Users, Wifi, Wind, Bath } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";

const rooms = [
  {
    image: gallery8,
    title: "डिलक्स फॅमिली रूम",
    price: "₹१,५००",
    capacity: "४ जण",
    features: ["एसी", "अटॅच्ड बाथरूम", "बाल्कनी"],
  },
  {
    image: gallery1,
    title: "स्टँडर्ड रूम",
    price: "₹१,०००",
    capacity: "२ जण",
    features: ["पंखा", "अटॅच्ड बाथरूम", "गार्डन व्ह्यू"],
  },
  {
    image: gallery2,
    title: "ग्रुप डॉर्मिटरी",
    price: "₹५००",
    capacity: "८ जण",
    features: ["पंखा", "कॉमन बाथरूम", "मोठा हॉल"],
  },
];

const iconMap: Record<string, typeof Wifi> = {
  "एसी": Wind,
  "पंखा": Wind,
  "अटॅच्ड बाथरूम": Bath,
  "कॉमन बाथरूम": Bath,
};

const RoomsSection = () => {
  return (
    <section id="rooms" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
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

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card overflow-hidden hover-card-effect group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={room.image}
                  alt={room.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold">
                  {room.price}/रात्र
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{room.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Users className="h-4 w-4" />
                  <span>{room.capacity} पर्यंत</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {room.features.map((f) => (
                    <span key={f} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="block text-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  बुकिंग चौकशी
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
