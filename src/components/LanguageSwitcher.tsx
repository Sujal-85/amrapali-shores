import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Check } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
];

const LanguageSwitcher = ({ className = "", textColor = "text-slate-700" }: { className?: string, textColor?: string }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Toggle Button */}
      <button
        onClick={toggleOpen}
        className={`flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 rounded-full transition-all font-medium whitespace-nowrap ${textColor}`}
      >
        <Languages className="w-5 h-5 text-amber-600" />
        <span className="hidden lg:inline">{languages.find(l => l.code === i18n.language)?.nativeName || "Language"}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            {/* Centered Popup */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white border border-slate-200 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] overflow-hidden min-w-[300px] max-w-[400px] w-full max-h-[90vh] flex flex-col pointer-events-auto"
              >
                <div className="p-5 border-b border-slate-100 bg-slate-50/50 shrink-0">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                    <Languages className="w-6 h-6 text-amber-600" />
                    {t("langSwitcher.select")}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{t("langSwitcher.choose")}</p>
                </div>
                
                <div className="p-3 space-y-1.5 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all ${
                        i18n.language === lang.code
                          ? "bg-amber-50 text-amber-900 font-semibold border-amber-100 border"
                          : "hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-transparent"
                      }`}
                    >
                      <div className="flex flex-col items-start text-left">
                        <span className="text-base">{lang.nativeName}</span>
                        <span className="text-xs opacity-60 uppercase tracking-widest">{lang.name}</span>
                      </div>
                      {i18n.language === lang.code && (
                        <Check className="w-5 h-5 text-amber-600" />
                      )}
                    </button>
                  ))}
                </div>
                
                <div className="p-3 bg-slate-50 border-t border-slate-100 shrink-0">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {t("langSwitcher.close")}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
