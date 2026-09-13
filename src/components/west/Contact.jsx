import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Instagram, Navigation } from "lucide-react";
import { WEST } from "./data";
import { SectionHeading } from "./Services";

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 sm:py-32 bg-[#0A192F] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#64FFDA]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          dark
          eyebrow="Contato"
          title="Estamos prontos para te receber"
          subtitle="Venha nos visitar em Campo Grande ou fale com a gente agora mesmo. Atendimento 24 horas, todos os dias."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {/* Info cards */}
          <div className="space-y-4">
            <ContactCard
              icon={<MapPin className="w-6 h-6" />}
              title="Endereço"
              lines={[WEST.address, WEST.reference]}
              action={{ label: "Ver no mapa / Traçar rota", href: WEST.maps, icon: <Navigation className="w-4 h-4" /> }}
            />
            <ContactCard
              icon={<Phone className="w-6 h-6" />}
              title="Telefone"
              lines={[WEST.phone, "Ligações e WhatsApp"]}
              action={{ label: "Ligar agora", href: `tel:+55${WEST.phoneRaw}`, icon: <Phone className="w-4 h-4" /> }}
            />
            <ContactCard
              icon={<Clock className="w-6 h-6" />}
              title="Horário de funcionamento"
              lines={[WEST.hours, "Plantão de emergência todos os dias"]}
            />
            <ContactCard
              icon={<Instagram className="w-6 h-6" />}
              title="Instagram"
              lines={[WEST.instagramHandle, "Acompanhe nosso trabalho"]}
              action={{ label: "Seguir no Instagram", href: WEST.instagram, icon: <Instagram className="w-4 h-4" /> }}
            />

            {/* Quick action buttons */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <a
                href={WEST.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#64FFDA] text-[#0A192F] font-semibold hover:scale-[1.02] transition-transform glow-teal"
              >
                <MessageCircle className="w-5 h-5" /> Agendar pelo WhatsApp
              </a>
              <a
                href={WEST.whatsappEmergency}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-2xl border border-[#64FFDA]/40 text-[#64FFDA] font-semibold hover:bg-[#64FFDA]/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Emergência 24h
              </a>
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[420px] lg:min-h-full"
          >
            <iframe
              title="Mapa West Odonto"
              src={WEST.mapsEmbed}
              className="w-full h-full absolute inset-0"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.6) brightness(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 glass-dark rounded-2xl p-4 border border-[#64FFDA]/30 pointer-events-none">
              <div className="flex items-center gap-2 text-[#64FFDA] text-xs tracking-[0.2em] uppercase font-semibold">
                <MapPin className="w-4 h-4" /> Localização
              </div>
              <p className="text-white font-medium mt-1 text-sm">{WEST.addressShort}</p>
              <p className="text-white/55 text-xs mt-0.5">{WEST.reference}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, lines, action }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#64FFDA]/40 hover:bg-white/[0.07] transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#64FFDA]/15 text-[#64FFDA] flex items-center justify-center flex-shrink-0 group-hover:bg-[#64FFDA] group-hover:text-[#0A192F] transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="font-heading font-bold text-white text-lg">{title}</h4>
          {lines.map((l, i) => (
            <p key={i} className={`text-sm mt-1 ${i === 0 ? "text-white/80" : "text-white/45"}`}>{l}</p>
          ))}
          {action && (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#64FFDA] hover:underline"
            >
              {action.icon} {action.label}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}