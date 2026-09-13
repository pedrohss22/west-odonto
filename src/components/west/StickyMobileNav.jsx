import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { WEST } from "./data";

export default function StickyMobileNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 24, stiffness: 280 }}
          className="lg:hidden fixed bottom-0 inset-x-0 z-50 px-4 pb-4"
        >
          <div className="glass-dark rounded-2xl border border-[#64FFDA]/30 shadow-2xl shadow-black/40 p-2">
            <div className="grid grid-cols-3 gap-2">
              <a
                href={WEST.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col items-center justify-center gap-1 py-3 rounded-xl bg-[#64FFDA] text-[#0A192F] font-semibold text-xs"
              >
                <span className="absolute inset-0 rounded-xl border-2 border-[#64FFDA] animate-pulse-ring text-[#64FFDA]" />
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href={`tel:+55${WEST.phoneRaw}`}
                className="flex flex-col items-center justify-center gap-1 py-3 rounded-xl text-white font-medium text-xs hover:bg-white/5"
              >
                <Phone className="w-5 h-5 text-[#64FFDA]" />
                Ligar
              </a>
              <a
                href={WEST.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1 py-3 rounded-xl text-white font-medium text-xs hover:bg-white/5"
              >
                <MapPin className="w-5 h-5 text-[#64FFDA]" />
                Rota
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}