import React from "react";
import { motion } from "framer-motion";
import { Clock, HeartHandshake, Award, Users, Quote } from "lucide-react";
import { WEST, MEDIA } from "./data";
import { Image } from "@/components/ui/image";
import { SectionHeading } from "./Services";

const PILLARS = [
  { icon: Clock, title: "Disponível 24h", desc: "Plantão de emergência odontológica a qualquer hora, todos os dias." },
  { icon: HeartHandshake, title: "Atendimento Humanizado", desc: "Cuidado que acolhe, escuta e respeita cada paciente individualmente." },
  { icon: Award, title: "Tecnologia de Ponta", desc: "Equipamentos modernos e protocolos clínicos atualizados." },
  { icon: Users, title: "Equipe Especializada", desc: "Profissionais com ampla experiência em todas as especialidades." },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-[#0A192F] overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-[#64FFDA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#64FFDA]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <Image src={MEDIA.consultorio} alt="Consultório da West Odonto" className="w-full h-full" fittingType="fill" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 to-transparent" />
            </div>

            {/* floating team card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 sm:right-6 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0A192F]"
            >
              <Image src={MEDIA.equipe} alt="Dr. Silvio Malek e equipe West Odonto" className="w-full aspect-square" fittingType="fill" />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent">
                <div className="font-heading font-bold text-white text-sm leading-tight">Dr. Silvio Malek</div>
                <div className="text-[#64FFDA] text-[11px] mt-0.5">e equipe de atendimento</div>
              </div>
            </motion.div>

            {/* floating review chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="absolute -top-5 -left-4 sm:left-6 glass-dark rounded-2xl px-5 py-4 border border-[#64FFDA]/30"
            >
              <div className="flex items-center gap-1 text-[#64FFDA]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <div className="font-heading font-bold text-white text-2xl mt-1">{WEST.reviewsCount}</div>
              <div className="text-white/60 text-xs">avaliações no Google</div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <div>
            <SectionHeading
              dark
              eyebrow="Sobre a West Odonto"
              title="Onde a precisão clínica encontra o acolhimento humano"
              subtitle="Localizada em Campo Grande, em frente ao West Shopping, a West Odonto nasceu para redefinir a experiência odontológica. Unimos tecnologia, especialidade e um cuidado genuinamente humanizado — disponível 24 horas para quando você mais precisar."
            />

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#64FFDA]/40 hover:bg-white/[0.07] transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#64FFDA]/15 text-[#64FFDA] flex items-center justify-center mb-4 group-hover:bg-[#64FFDA] group-hover:text-[#0A192F] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-white text-lg">{p.title}</h4>
                    <p className="text-white/55 text-sm mt-1.5 leading-relaxed">{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl border-l-2 border-[#64FFDA] bg-white/[0.03]"
            >
              <Quote className="w-6 h-6 text-[#64FFDA] mb-3" />
              <p className="text-white/80 italic leading-relaxed">
                "Acreditamos que cada sorriso tem uma história. Nosso compromisso é cuidar dela com
                excelência técnica e muito carinho — em qualquer hora do dia ou da noite."
              </p>
              <footer className="mt-3 text-sm text-[#64FFDA] font-semibold">Equipe West Odonto • {WEST.cro}</footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}