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

const images = [
  { src: g1, alt: "बैठक व्यवस्था", caption: "आरामदायी बैठक व्यवस्था", span: "md:col-span-2 md:row-span-2" },
  { src: food3, alt: "आम्रपाली स्पेशल कोकणस्थ थाळी", caption: "आम्रपाली स्पेशल कोकणस्थ थाळी आणि सुरुची शाकाहारी थाळीचा आस्वाद" },
  { src: g4, alt: "प्रवेशद्वार", caption: "सुंदर प्रवेशद्वार" },
  { src: roomBed1, alt: "बेडरूम", caption: "आरामदायी बेडरूम" },
  { src: g5, alt: "बाग", caption: "हिरवीगार बाग", span: "md:col-span-2" },
  { src: food1, alt: "पोपटी पार्टीची तयारी", caption: "" },
  { src: nature1, alt: "निसर्ग", caption: "निसर्गाचे सौंदर्य" },
  { src: g6, alt: "सजावट", caption: "सुंदर सजावट" },
  { src: food2, alt: "दडपे पोहे", caption: "आम्रपाली स्पेशल दडपे पोहे" },
  { src: roomBed2, alt: "फॅमिली रूम", caption: "कुटुंबासाठी फॅमिली रूम" },
  { src: g7, alt: "बाहेरील दृश्य", caption: "बाहेरील सुंदर दृश्य", span: "md:col-span-2 md:row-span-2" },
  { src: food4, alt: "उपवास थाळी", caption: "चवीष्ट उपवास थाळी" },
  { src: roomInterior1, alt: "खोलीचे दृश्य", caption: "सुंदर खोलीचे दृश्य" },
  { src: roomNonac, alt: "नॉन एसी रूम", caption: "आरामदायी नॉन एसी रूम" },
  { src: g8, alt: "आतील दृश्य", caption: "आतील सुंदर दृश्य" },
  { src: roomBed3, alt: "ग्रुप रूम", caption: "मोठ्या गटासाठी ग्रुप रूम" },
  { src: roomJointCottage, alt: "जॉइंट कॉटेज", caption: "कुटुंबासाठी जॉइंट कॉटेज", span: "md:col-span-2" },
  { src: g2, alt: "हॉल", caption: "विशाल हॉल" },
  { src: g3, alt: "परिसर", caption: "शांत परिसर" },
  { src: new1, alt: "कोकणस्थ थाळी", caption: "आम्रपाली स्पेशल कोकणस्थ थाळी – शुद्ध शाकाहारी पारंपरिक भोजन" },
  { src: new2, alt: "सांस्कृतिक कार्यक्रम", caption: "सांस्कृतिक कार्यक्रमाचा आनंद" },
  { src: new5, alt: "कोकणस्थ थाळी", caption: "आम्रपाली स्पेशल कोकणस्थ थाळी – शुद्ध शाकाहारी पारंपरिक भोजन" },
  { src: new6, alt: "आम्रपाली अतिथी", caption: "आम्रपालीचे आनंददायक अतिथी" },
  { 
    src: new3, 
    alt: "गोव्याचे पाहुणे", 
    caption: "डिसेंबरमध्ये गोव्याच्या पाहुण्यांचीही आम्रपालीला पसंती... सात्विक पर्यटनाचा आनंद.",
    span: "md:col-span-2"
  },
  { src: new4, alt: "ग्रुप डायनिंग अनुभव", caption: "ग्रुपसोबत डायनिंगचा आनंद" },
  { src: img1, alt: "पर्यावरणीय साहलीचा आनंद", caption: "आम्रपालीची सुंदर वास्तू" },
  { src: img2, alt: "मिसळ थाळी", caption: "" },
  { src: img3, alt: "मिसळ पार्टी", caption: "कुटुंबासोबत आनंदी क्षण" },
  { src: img4, alt: "मकरंद अनासपुरे त्यांच्याबरोबर भेट", caption: "" },
  { src: img5, alt: "आम्रपाली स्पेशल कोकणस्थ थाळी", caption: "शुद्ध शाकाहारी" },
  { src: img6, alt: "आम्रपालीत अनुभवला युवानंद", caption: "" },
  { src: img7, alt: "सिंधुताई सपकाळ यांची अम्रपाली होम स्टेला भेट", caption: "निसर्गाच्या कुशीत" },
  { src: img8, alt: "कॅम्पफायर (पोपटी)", caption: "शांत आणि शुद्ध वातावरण" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold mb-2 marathi text-sm">गॅलरी</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            आमचा परिसर
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
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
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
