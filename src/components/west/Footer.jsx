import React from "react";
import { MessageCircle, Instagram, Phone, MapPin, Clock, Heart } from "lucide-react";
import { WEST, MEDIA } from "./data";

export default function Footer() {
  return (
    <footer className="relative bg-[#070f1d] border-t border-white/10 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60rem] h-40 bg-[#64FFDA]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-xl bg-white p-1.5 overflow-hidden flex-shrink-0">
                <img src={MEDIA.logo} alt="West Odonto" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-heading font-extrabold tracking-[0.08em] text-white text-lg">WEST ODONTO</div>
                <div className="text-[10px] tracking-[0.2em] text-[#64FFDA] uppercase">{WEST.cro}</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {WEST.tagline}. Odontologia 24 horas no Rio de Janeiro, com tecnologia e cuidado em cada detalhe.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase mb-4">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Especialidades", href: "#especialidades" },
                { label: "Sobre nós", href: "#sobre" },
                { label: "Avaliações", href: "#avaliacoes" },
                { label: "Galeria", href: "#galeria" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/50 hover:text-[#64FFDA] text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase mb-4">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/55">
                <MapPin className="w-4 h-4 text-[#64FFDA] mt-0.5 flex-shrink-0" />
                <span>{WEST.address}</span>
              </li>
              <li>
                <a href={`tel:+55${WEST.phoneRaw}`} className="flex items-center gap-3 text-white/55 hover:text-[#64FFDA] transition-colors">
                  <Phone className="w-4 h-4 text-[#64FFDA] flex-shrink-0" />
                  {WEST.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/55">
                <Clock className="w-4 h-4 text-[#64FFDA] flex-shrink-0" />
                {WEST.hours}
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wide uppercase mb-4">Fale conosco</h4>
            <div className="space-y-3">
              <a
                href={WEST.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#64FFDA] text-[#0A192F] font-semibold text-sm hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a
                href={WEST.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-white/15 text-white font-medium text-sm hover:bg-white/5 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#64FFDA]" /> {WEST.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} West Odonto. Todos os direitos reservados. {WEST.cro}
          </p>
          <p className="flex items-center gap-1.5 text-white/40 text-xs">
            Feito com <Heart className="w-3 h-3 text-[#64FFDA] fill-[#64FFDA]" /> no Rio de Janeiro
          </p>
        </div>
      </div>
    </footer>
  );
}