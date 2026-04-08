import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpeg";
import g2 from "@/assets/gallery-2.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import g5 from "@/assets/gallery-5.jpeg";
import g6 from "@/assets/gallery-6.jpeg";
import g7 from "@/assets/gallery-7.jpeg";
import g8 from "@/assets/gallery-8.jpeg";
import food1 from "@/assets/food-1.jpeg";
import food2 from "@/assets/food-2.jpeg";
import food3 from "@/assets/food-3.jpeg";
import food4 from "@/assets/food-4.jpeg";
import nature1 from "@/assets/nature-1.jpeg";
import roomBed1 from "@/assets/room-bed-1.jpeg";
import roomBed2 from "@/assets/room-bed-2.jpeg";
import roomBed3 from "@/assets/room-bed-3.jpeg";
import roomInterior1 from "@/assets/room-interior-1.jpeg";

const images = [
  { src: g1, alt: "बैठक व्यवस्था" },
  { src: food3, alt: "कोकणी जेवण" },
  { src: g4, alt: "प्रवेशद्वार" },
  { src: roomBed1, alt: "बेडरूम" },
  { src: g5, alt: "बाग" },
  { src: food1, alt: "पारंपरिक स्वयंपाक" },
  { src: nature1, alt: "निसर्ग" },
  { src: g6, alt: "सजावट" },
  { src: food2, alt: "भाकरी थाळी" },
  { src: roomBed2, alt: "फॅमिली रूम" },
  { src: g7, alt: "बाहेरील दृश्य" },
  { src: food4, alt: "उपवास थाळी" },
  { src: roomInterior1, alt: "खोलीचे दृश्य" },
  { src: g8, alt: "आतील दृश्य" },
  { src: roomBed3, alt: "ग्रुप रूम" },
  { src: g2, alt: "हॉल" },
  { src: g3, alt: "परिसर" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">गॅलरी</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            आमचा परिसर
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                i === 0 || i === 6 || i === 12 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
