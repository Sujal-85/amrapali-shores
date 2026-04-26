import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-foreground rounded-t-[3rem] text-primary-foreground py-12 px-4">
      <div className="container mx-auto px-3 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt={t("nav.brand")} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-heading font-bold text-lg">{t("nav.brand")}</p>
              <p className="text-primary-foreground/70 text-[13px] leading-relaxed">{t("footer.location")}</p>
            </div>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/70">
            <Link to="/about" className="hover:text-primary-foreground transition-colors">{t("nav.about")}</Link>
            <Link to="/rooms" className="hover:text-primary-foreground transition-colors">{t("nav.rooms")}</Link>
            <Link to="/gallery" className="hover:text-primary-foreground transition-colors">{t("nav.gallery")}</Link>
            <Link to="/services" className="hover:text-primary-foreground transition-colors">{t("nav.services")}</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">{t("nav.contact")}</Link>
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/70">
            <a 
              href="https://instagram.com/amrapali_dapoli?igshid=MzRlODBiNWFlZA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors p-2 rounded-full hover:bg-primary-foreground/10"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://www.facebook.com/AmrapaliDapoli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] transition-colors p-2 rounded-full hover:bg-primary-foreground/10"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} {t("nav.brand")}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
