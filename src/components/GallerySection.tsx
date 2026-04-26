import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
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
import roomNonac from "@/assets/room-nonac.jpeg";
import roomJointCottage from "@/assets/room-joint-cottage.jpeg";
import new1 from "@/assets/gallery-new-1.jpeg";
import new2 from "@/assets/gallery-new-2.jpeg";
import new3 from "@/assets/gallery-new-3.jpeg";
import new4 from "@/assets/gallery-new-4.jpeg";
import new5 from "@/assets/gallery-new-5.jpeg";
import new6 from "@/assets/gallery-new-6.jpg";
import img1 from "@/assets/img1.jpeg";
import img2 from "@/assets/img2.jpeg";
import img3 from "@/assets/img3.jpeg";
import img4 from "@/assets/img4.jpeg";
import img5 from "@/assets/img5.jpeg";
import img6 from "@/assets/img6.jpeg";
import img7 from "@/assets/img7.jpeg";
import img8 from "@/assets/img8.jpeg";
import natureFlower1 from "@/assets/nature-flower-1.jpeg";
import natureFlower2 from "@/assets/nature-flower-2.jpeg";
import natureTree1 from "@/assets/nature-tree-1.jpeg";
import natureTree2 from "@/assets/nature-tree-2.jpeg";

const initialImages = [
  { src: g1, span: "md:col-span-2 md:row-span-2" },
  { src: food3 },
  { src: g4 },
  { src: roomBed1 },
  { src: g5, span: "md:col-span-2" },
  { src: food1 },
  { src: nature1 },
  { src: g6 },
  { src: food2 },
  { src: roomBed2 },
  { src: g7, span: "md:col-span-2 md:row-span-2" },
  { src: food4 },
  { src: roomInterior1 },
  { src: roomNonac },
  { src: g8 },
  { src: roomBed3 },
  { src: roomJointCottage, span: "md:col-span-2" },
  { src: g2 },
  { src: g3 },
  { src: new1 },
  { src: new2 },
  { src: new5 },
  { src: new6 },
  { 
    src: new3, 
    span: "md:col-span-2"
  },
  { src: new4 },
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: natureFlower1, span: "md:col-span-2" },
  { src: natureFlower2 },
  { src: natureTree1 },
  { src: natureTree2, span: "md:col-span-2" },
  { src: natureTree1 },
];

const GallerySection = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number | null>(null);

  const galleryData = t('gallery.items', { returnObjects: true }) as Array<{ alt: string; caption: string }>;
  const images = initialImages.map((img, i) => ({
    ...img,
    alt: galleryData[i]?.alt || "",
    caption: galleryData[i]?.caption || ""
  }));

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selected === null) return;
    setSelected(selected === 0 ? images.length - 1 : selected - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selected === null) return;
    setSelected(selected === images.length - 1 ? 0 : selected + 1);
  };

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 text-sm">{t("gallery.tag")}</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            {t("gallery.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 grid-flow-dense">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.02 }}
              className={`relative overflow-hidden cursor-pointer group m-1 md:m-1 rounded-2xl shadow-lg ${img.span || ""}`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3 md:p-4 text-white">
                <p className="text-xs md:text-sm font-semibold">{img.alt}</p>
                {img.caption && (
                  <p className="text-[10px] md:text-xs mt-1 opacity-90 leading-relaxed">{img.caption}</p>
                )}
              </div>
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
              className="absolute top-4 right-4 p-2 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={handlePrevious}
              className="absolute left-2 md:left-4 p-3 md:p-4 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 md:right-4 p-3 md:p-4 rounded-full bg-background/20 text-primary-foreground hover:bg-background/40 transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            </button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              key={selected}
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
