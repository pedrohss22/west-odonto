import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope, Sparkles, Activity, Smile, Bone, Wrench, ShieldCheck, HeartPulse, ArrowRight, MessageCircle,
} from "lucide-react";
import { WEST } from "./data";

const SERVICES = [
  { icon: Sparkles, title: "Estética Dental", desc: "Clareamento, facetas e lentes de contato para um sorriso harmonioso e natural.", tag: "Harmonização" },
  { icon: Bone, title: "Implantodontia", desc: "Reabilitação completa com implantes modernos que devolvem função e autoestima.", tag: "Reabilitação" },
  { icon: Activity, title: "Endodontia", desc: "Tratamento de canal com tecnologia que elimina a dor e preserva o dente natural.", tag: "Canal" },
  { icon: Smile, title: "Ortodontia", desc: "Aparelhos fixos e alinhadores invisíveis para alinhar mordida e sorriso.", tag: "Alinhamento" },
  { icon: HeartPulse, title: "Emergência 24h", desc: "Plantão odontológico disponível a qualquer hora para dor, trauma e urgências.", tag: "Plantão" },
  { icon: ShieldCheck, title: "Prevenção", desc: "Limpeza, profilaxia e check-ups que mantêm sua saúde bucal em dia.", tag: "Manutenção" },
  { icon: Wrench, title: "Próteses", desc: "Próteses fixas e removíveis confeccionadas com materiais de alta resistência.", tag: "Reposição" },
  { icon: Stethoscope, title: "Diagnóstico", desc: "Avaliação clínica e radiológica completa para um plano de tratamento preciso.", tag: "Exames" },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="especialidades" className="relative py-24 sm:py-32 marble-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Especialidades"
          title="Tudo o que seu sorriso precisa, em um só lugar"
          subtitle="Atendemos todas as especialidades odontológicas com tecnologia de ponta e uma equipe multidisciplinar dedicada ao seu bem-estar."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`group relative rounded-3xl p-7 border transition-all duration-500 cursor-pointer overflow-hidden ${
                  isActive
                    ? "bg-[#0A192F] border-[#64FFDA]/40 shadow-2xl shadow-[#0A192F]/20 -translate-y-1"
                    : "bg-white/70 border-slate-200/80 hover:border-[#64FFDA]/30"
                }`}
              >
                {/* glow on hover */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl transition-opacity duration-500 ${
                  isActive ? "bg-[#64FFDA]/20 opacity-100" : "opacity-0"
                }`} />

                <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  isActive ? "bg-[#64FFDA] text-[#0A192F]" : "bg-[#0A192F]/5 text-[#0A192F]"
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                <div className="relative">
                  <span className={`text-[10px] tracking-[0.2em] uppercase font-semibold ${isActive ? "text-[#64FFDA]" : "text-slate-400"}`}>
                    {s.tag}
                  </span>
                  <h3 className={`font-heading font-bold text-xl mt-2 mb-3 transition-colors ${isActive ? "text-white" : "text-[#0A192F]"}`}>
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors ${isActive ? "text-white/70" : "text-slate-500"}`}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-3xl bg-[#0A192F] relative overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 w-60 h-60 bg-[#64FFDA]/10 rounded-full blur-3xl" />
          <div className="relative text-center sm:text-left">
            <h3 className="font-heading font-bold text-white text-2xl sm:text-3xl">Não encontrou sua especialidade?</h3>
            <p className="text-white/60 mt-2">Atendemos todas as áreas da odontologia. Fale com a gente e tire suas dúvidas.</p>
          </div>
          <a
            href={WEST.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#64FFDA] text-[#0A192F] font-semibold whitespace-nowrap hover:scale-105 transition-transform glow-teal"
          >
            <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, dark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl"
    >
      <span className="inline-flex items-center gap-2 text-[#64FFDA] text-sm font-semibold tracking-[0.2em] uppercase">
        <span className="w-8 h-px bg-[#64FFDA]" />
        {eyebrow}
      </span>
      <h2 className={`font-heading font-extrabold text-4xl sm:text-5xl mt-4 leading-[1.05] text-balance ${dark ? "text-white" : "text-[#0A192F]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/65" : "text-slate-500"}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}