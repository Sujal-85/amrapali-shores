import whatsappIcon from "@/assets/whatsapp-icon.svg";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918378034720?text=नमस्कार"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold shadow-2xl transition-transform hover:scale-110 animate-float"
    style={{ color: "#fff" }}
  >
    <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
    WhatsApp
  </a>
);

export default WhatsAppButton;
