import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground rounded-t-[3rem] text-primary-foreground py-12 px-4">
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="आम्रपाली होमस्टे" className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-heading font-bold text-lg">आम्रपाली होमस्टे</p>
              <p className="text-primary-foreground/60 text-sm">दापोली, महाराष्ट्र</p>
            </div>
          </Link>
          <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/70">
            <Link to="/about" className="hover:text-primary-foreground transition-colors">आमच्याबद्दल</Link>
            <Link to="/rooms" className="hover:text-primary-foreground transition-colors">खोल्या</Link>
            <Link to="/gallery" className="hover:text-primary-foreground transition-colors">गॅलरी</Link>
            <Link to="/services" className="hover:text-primary-foreground transition-colors">सेवा</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">संपर्क</Link>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} आम्रपाली होमस्टे, दापोली. सर्व हक्क राखीव.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
