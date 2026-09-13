import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, Clock } from "lucide-react";
import { WEST, MEDIA } from "./data";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-dark shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-xl bg-white p-1 shadow-lg shadow-teal-400/20 overflow-hidden flex-shrink-0">
                <img src={MEDIA.logo} alt="West Odonto" className="w-full h-full object-cover object-top" />
              </div>
              <div className="leading-none">
                <div className="font-heading font-extrabold tracking-[0.08em] text-white text-lg sm:text-xl">
                  WEST ODONTO
                </div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#64FFDA] uppercase mt-1">
                  Atendimento Humanizado • 24h
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-[#64FFDA] transition-colors group"
                >
                  {item.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-[#64FFDA] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WEST.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#64FFDA] text-[#0A192F] font-semibold text-sm overflow-hidden hover:shadow-lg hover:shadow-teal-400/40 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar Agora
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-white"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0A192F]/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-[82%] max-w-sm bg-[#0A192F] border-l border-[#64FFDA]/20 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <span className="font-heading font-extrabold text-white text-xl">Menu</span>
                <button onClick={() => setOpen(false)} className="p-2 text-white/70 hover:text-[#64FFDA]">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center justify-between py-4 px-4 rounded-xl text-white/85 hover:bg-white/5 hover:text-[#64FFDA] text-lg font-medium transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto space-y-3 pt-8 border-t border-white/10">
                <a
                  href={WEST.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#64FFDA] text-[#0A192F] font-semibold"
                >
                  <MessageCircle className="w-5 h-5" /> Agendar pelo WhatsApp
                </a>
                <a href={`tel:+55${WEST.phoneRaw}`} className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-white/20 text-white font-medium">
                  <Phone className="w-5 h-5" /> {WEST.phone}
                </a>
                <div className="flex items-center justify-center gap-2 text-[#64FFDA] text-sm font-medium pt-2">
                  <Clock className="w-4 h-4" /> {WEST.hours}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}