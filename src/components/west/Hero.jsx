import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, MapPin, Star, ChevronDown } from "lucide-react";
import { WEST, MEDIA } from "./data";
import { Image } from "@/components/ui/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#0A192F]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={MEDIA.reception}
          alt="Recepção da clínica West Odonto"
          className="w-full h-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/85 via-[#0A192F]/75 to-[#0A192F]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-transparent to-transparent" />
      </div>

      {/* Giant 24H background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute right-[-4vw] top-1/2 -translate-y-1/2 font-heading font-extrabold text-white pointer-events-none select-none"
        style={{ fontSize: "clamp(14rem, 32vw, 36rem)", lineHeight: 0.8 }}
      >
        24H
      </motion.div>

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#64FFDA]/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#64FFDA]/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* 24h pulse badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-dark border border-[#64FFDA]/30 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#64FFDA] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#64FFDA]" />
            </span>
            <span className="text-[#64FFDA] text-sm font-semibold tracking-wide uppercase">Aberto 24 horas • Plantão de Emergência</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-heading font-extrabold text-white text-balance leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            A arquitetura do
            <span className="block shimmer-text mt-2">seu sorriso</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-7 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl font-light"
          >
            Odontologia humanizada no Rio de Janeiro. Todas as especialidades em um só lugar,
            com tecnologia de ponta e cuidado que vai além do tratamento — disponível
            <span className="text-[#64FFDA] font-medium"> a qualquer hora do dia ou da noite.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WEST.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#64FFDA] text-[#0A192F] font-semibold text-base hover:scale-[1.03] transition-transform glow-teal"
            >
              <MessageCircle className="w-5 h-5" />
              Agende pelo WhatsApp
            </a>
            <a
              href={`tel:+55${WEST.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/25 text-white font-medium text-base hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {WEST.phone}
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl"
          >
            <Stat value={WEST.reviewsCount} label="Avaliações no Google" icon={<Star className="w-4 h-4 text-[#64FFDA] fill-[#64FFDA]" />} />
            <Stat value="24h" label="Disponibilidade" icon={<Clock className="w-4 h-4 text-[#64FFDA]" />} />
            <Stat value="100%" label="Humanizado" icon={<MapPin className="w-4 h-4 text-[#64FFDA]" />} />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-[0.3em] uppercase">Role</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stat({ value, label, icon }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-heading font-bold text-white text-2xl sm:text-3xl">{value}</span>
      </div>
      <span className="text-white/55 text-xs sm:text-sm leading-tight">{label}</span>
    </div>
  );
}