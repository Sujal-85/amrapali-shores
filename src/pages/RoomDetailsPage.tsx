import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, ArrowLeft, Check } from "lucide-react";
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

const rooms = [
  {
    id: "family-cottage-fan",
    image: roomBed3,
    title: "फॅमिली कॉटेज (पंखा)",
    price: "₹३,५००",
    capacity: "५ जण",
    features: ["पंखा", "अटॅच्ड बाथरूम", "कॉटेज", "प्रायव्हेट एंट्री", "गार्डन व्ह्यू"],
    description: "हा कॉटेज कुटुंबासाठी उत्तम आहे. यात पंखा, अटॅच्ड बाथरूम आणि सुंदर गार्डन व्ह्यू आहे.",
  },
  {
    id: "family-cottage-ac",
    image: roomBed2,
    title: "फॅमिली कॉटेज (एसी)",
    price: "₹३,५००",
    capacity: "५ जण",
    features: ["एसी", "अटॅच्ड बाथरूम", "प्रायव्हेट", "गार्डन व्ह्यू", "फ्री WiFi"],
    description: "एसी असलेला हा कॉटेज उन्हाळ्यातही आरामदायी आहे. प्रायव्हेट एंट्री आणि moderamenities सोबत.",
  },
  {
    id: "ac-room",
    image: roomAc,
    title: "एसी रूम",
    price: "₹२,५००",
    capacity: "१ - ३ जण",
    features: ["एसी", "अटॅच्ड बाथरूम", "टीव्ही", "फ्री WiFi", "गार्डन व्ह्यू"],
    description: "१ ते ३ जणांसाठी उत्तम एसी रूम. सर्व moderamenities सोबत आरामदायी राहणी.",
  },
  {
    id: "non-ac-room",
    image: roomNonac,
    title: "नॉन एसी रूम",
    price: "₹१,५००",
    capacity: "२ जण",
    features: ["पंखा", "अटॅच्ड बाथरूम", "टीव्ही", "गार्डन व्ह्यू", "इकॉनॉमिक"],
    description: "बजेटमध्ये उत्तम निवास पर्याय. २ जणांसाठी पुरेसा आरामदायी रूम.",
  },
  {
    id: "joint-cottage",
    image: roomJointCottage,
    title: "जॉइंट कॉटेज",
    price: "₹६,०००",
    capacity: "८ जण",
    features: ["पंखा", "अटॅच्ड बाथरूम", "मोठा कॉटेज", "ग्रुपांसाठी उत्तम", "गार्डन व्ह्यू", "फ्री WiFi"],
    description: "मोठ्या गटांसाठी विशेष कॉटेज. ८ जणांसाठी पुरेसी जागा आणि सर्व सोयी.",
  },
  {
    id: "couple-cottage",
    image: roomCoupleCottage,
    title: "कपल कॉटेज",
    price: "₹२,५००",
    capacity: "२ जण",
    features: ["पंखा", "अटॅच्ड बाथरूम", "प्रायव्हेट", "गार्डन व्ह्यू", "कूलर"],
    description: "जोडप्यांसाठी आदर्श कॉटेज. प्रायव्हेट, आरामदायी आणि स्वच्छ.",
  },
];

const RoomDetailsPage = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);

  if (!room) {
    return (
      <main>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">खोली सापडली नाही</h1>
            <Link to="/rooms" className="text-primary hover:underline">
              सर्व खोल्यांकडे परत जा
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
              सर्व खोल्यांकडे परत जा
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
                    <span>{room.capacity} पर्यंत</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-accent">{room.price}</span>
                  <span className="text-muted-foreground">/रात्र</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{room.description}</p>

                <div>
                  <h3 className="font-semibold mb-3">सुविधा:</h3>
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
                    WhatsApp वर बुक करा
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
