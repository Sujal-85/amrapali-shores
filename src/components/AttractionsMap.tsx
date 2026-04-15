import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Trees, Waves, Mountain, Flame, Anchor, Home, Landmark, Footprints, Tent, ArrowLeft, X } from "lucide-react";

const attractions = [
  { id: 1, name: "भारतरत्न पां.वा.काणे स्मारक", icon: Landmark, distance: "0 km", type: "heritage", color: "#D97706", mapUrl: "https://maps.google.com/?q=Govind+Kane+Smarak+Dapoli" },
  { id: 2, name: "डॉ.प्रशांत परांजपे पुराण वस्तू दालन", icon: Home, distance: "0 km", type: "museum", color: "#7C3AED", mapUrl: "https://maps.google.com/?q=Dr+Prashant+Paranjpe+Museum+Dapoli" },
  { id: 3, name: "श्री केशवराज मंदिर, आसूद", icon: Mountain, distance: "6 km", type: "trek", color: "#DC2626", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.0991385959965!2d73.14899513969343!3d17.787037239907093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c6cde1312b95%3A0x817b55bf1a32c73e!2sShree%20Keshavraj%20Mandir%20%2C%20Asud!5e0!3m2!1sen!2sin!4v1776156857092!5m2!1sen!2sin" },
  { id: 4, name: "कड्यावरिल श्री गणपती मंदिर, आंजर्ले", icon: Landmark, distance: "29 km", type: "temple", color: "#EA580C", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.723666150789!2d73.08970950998483!3d17.85158438304648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c7f73d74177f%3A0xa714453ff5813db7!2sKadyawaril%20Shri%20Ganapati%20temple%2C%20Anjarle!5e0!3m2!1sen!2sin!4v1776156177807!5m2!1sen!2sin" },
  { id: 5, name: "हर्णे सुवर्णदुर्ग (पाण्यातील किल्ला)", icon: Anchor, distance: "14 km", type: "fort", color: "#0369A1", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.483503349149!2d73.08184870998383!3d17.815955283075798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9b880fbffffff%3A0x76371152d5c66d1b!2sSuvarnadurga%20Fort!5e0!3m2!1sen!2sin!4v1776158413628!5m2!1sen!2sin" },
  { id: 6, name: "मुरुड बीच", icon: Waves, distance: "6 km", type: "beach", color: "#0891B2", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.3761061083037!2d73.11162050998253!3d17.774012483110404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c1df7e5aac11%3A0x866e434c6e0094ed!2sMurud%20Beach%2C%20Dapoli!5e0!3m2!1sen!2sin!4v1776158381293!5m2!1sen!2sin" },
  { id: 7, name: "लाडघर तामस तीर्थ", icon: Waves, distance: "10 km", type: "beach", color: "#0891B2", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30403.32291776484!2d73.12754585256017!3d17.725057421625717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c1af4f6114b3%3A0xfc889af396a93dd9!2sLadghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1776158453668!5m2!1sen!2sin" },
  { id: 8, name: "भगवान परशुराम स्टॅचू, बुरोंडी", icon: Mountain, distance: "18 km", type: "view", color: "#7C3AED", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.0372089845628!2d73.13734989999999!3d17.6957023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c1e98c14917b%3A0xb48922debe0c5ac1!2sBhagwan%20Parshuram%20Statue%20Burondi!5e0!3m2!1sen!2sin!4v1776156259342!5m2!1sen!2sin" },
  { id: 9, name: "उन्हवरे गरम पाण्याचे झरे", icon: Flame, distance: "22 km", type: "springs", color: "#DC2626", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.9961462268398!2d73.31700160997786!3d17.602917883251898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9e5d394e329fd%3A0x11b4230b744b3555!2sUnhavare%20Hot%20Water%20Spring!5e0!3m2!1sen!2sin!4v1776156390054!5m2!1sen!2sin" },
  { id: 10, name: "पन्हाळेकाजी लेणी", icon: Mountain, distance: "18 km", type: "caves", color: "#4B5563", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30416.436349590946!2d73.22300545242258!3d17.647575525726108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9e8f69026ad25%3A0xd352295423719563!2sPanhalakaji%20Caves!5e0!3m2!1sen!2sin!4v1776156813904!5m2!1sen!2sin" },
  { id: 11, name: "रिझर्व फॉरेस्ट देवराई जंगल", icon: Trees, distance: "18 km", type: "forest", color: "#047857", mapUrl: "https://maps.google.com/?q=Devrai+Forest+Dapoli" },
  { id: 12, name: "चंडिका देवी मंदिर", icon: Landmark, distance: "24 km", type: "temple", color: "#EA580C", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.14112595511!2d73.17651583965811!3d17.59603214046857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ed50bd709d73%3A0x4e55c6ff5496b72c!2sChandika%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1776156648373!5m2!1sen!2sin" },
  { id: 13, name: "पूज्य साने गुरुजी निवासस्थान", icon: Home, distance: "24 km", type: "heritage", color: "#D97706", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944666.5000735894!2d70.88663015624999!3d17.83034700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9db7254c922bb%3A0x8bc8e9e2686f9ccb!2sSANE%20GURUJI%20MSCIT%20CENTER%20PALGAD!5e0!3m2!1sen!2sin!4v1776156503068!5m2!1sen!2sin" },
];

const amrapaliMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.8958586207555!2d73.18800160998191!3d17.749545483130593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9c32149d63c3b%3A0x26be74d109a6d719!2sAmrpali%20Home%20stay!5e0!3m2!1sen!2sin!4v1776155965869!5m2!1sen!2sin";

const GoogleMapEmbed = ({ src, title, onReset, isAttraction }: { src: string; title: string; onReset?: () => void; isAttraction?: boolean }) => (
  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
    <AnimatePresence mode="wait">
      <motion.iframe
        key={src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="absolute inset-0"
      />
    </AnimatePresence>

    {/* Overlay with location marker */}
    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
      <div className="flex items-center gap-2">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isAttraction ? 'bg-gradient-to-br from-blue-100 to-indigo-100' : 'bg-gradient-to-br from-amber-100 to-orange-100'}`}>
          {isAttraction ? <MapPin className="w-5 h-5 text-blue-700" /> : <Home className="w-5 h-5 text-amber-700" />}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800">{title}</p>
          {isAttraction && <p className="text-xs text-gray-500">पर्यटन स्थळ</p>}
          {!isAttraction && <p className="text-xs text-gray-500">७०० फूट उंचावर</p>}
        </div>
      </div>
    </div>

    {/* Reset button - only show when viewing attraction */}
    {isAttraction && onReset && (
      <button
        onClick={onReset}
        className="absolute top-4 right-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">आम्रपालीकडे परत जा</span>
      </button>
    )}

    {/* Directions button */}
    <a
      href={isAttraction ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(title)}` : "https://www.google.com/maps/dir/?api=1&destination=17.749545483130593,73.18800160998191"}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105"
    >
      <Navigation className="w-4 h-4" />
      <span className="text-sm font-medium">दिशा मिळवा</span>
    </a>
  </div>
);

const AttractionsMap = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedMapUrl, setSelectedMapUrl] = useState<string>(amrapaliMapUrl);
  const [selectedTitle, setSelectedTitle] = useState<string>("आम्रपाली होम स्टे");
  const [isAttractionView, setIsAttractionView] = useState<boolean>(false);

  const handleAttractionClick = (attraction: typeof attractions[0]) => {
    setSelectedMapUrl(attraction.mapUrl);
    setSelectedTitle(attraction.name);
    setIsAttractionView(true);
  };

  const handleReset = () => {
    setSelectedMapUrl(amrapaliMapUrl);
    setSelectedTitle("आम्रपाली होम स्टे");
    setIsAttractionView(false);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 via-amber-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-gray-700">समुद्रसपाटीपासून ७०० फूट उंचावर</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-800 mb-3">
            आम्रपाली होम स्टे - दापोली
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            १३० वर्षांपूर्वीचे घर आणि आमराईतील कॉटेजेस - इको व्हिलेज पर्यटनाचा अनुभव
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative h-[500px] lg:h-[600px]"
          >
            <GoogleMapEmbed
              src={selectedMapUrl}
              title={selectedTitle}
              onReset={handleReset}
              isAttraction={isAttractionView}
            />
          </motion.div>

          {/* Side Panel - Attractions List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 max-h-[600px] overflow-y-auto"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Footprints className="w-5 h-5 text-amber-600" />
              साईड सीन्स अराउंड आम्रपाली
            </h3>

            <div className="space-y-3">
              {attractions.map((attraction, index) => {
                const Icon = attraction.icon;
                return (
                  <motion.button
                    key={attraction.id}
                    onClick={() => handleAttractionClick(attraction)}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredId(attraction.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer group text-left ${
                      selectedTitle === attraction.name
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg border-l-4 border-blue-500'
                        : hoveredId === attraction.id
                        ? 'bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg scale-105'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                      style={{ backgroundColor: `${attraction.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: attraction.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold truncate transition-colors ${selectedTitle === attraction.name ? 'text-blue-700' : 'text-gray-800 group-hover:text-amber-700'}`}>{attraction.name}</p>
                      <p className="text-xs text-gray-500">{attraction.distance}</p>
                    </div>
                    {selectedTitle === attraction.name && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Footer Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100/80 backdrop-blur-sm rounded-full">
            <Trees className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">महाराष्ट्रात सर्वप्रथम कचरा मुक्त पर्यटन</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full">
            <Tent className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">इको व्हिलेज टुरिझम</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-orange-100/80 backdrop-blur-sm rounded-full">
            <Home className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">१३० वर्षांपूर्वीचे वारसागत घर</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AttractionsMap;
