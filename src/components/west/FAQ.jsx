import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./Services";

const FAQS = [
  { q: "A West Odonto atende 24 horas?", a: "Sim! Funcionamos 24 horas por dia, todos os dias, inclusive finais de semana e feriados. Temos plantão de emergência odontológica para dor, trauma e urgências a qualquer hora." },
  { q: "Como faço para agendar uma consulta?", a: "O jeito mais rápido é pelo WhatsApp. Clique em qualquer botão 'Agendar' do site e você será direcionado direto para a nossa equipe, que vai encontrar o melhor horário para você." },
  { q: "Vocês atendem todas as especialidades?", a: "Sim. Atendemos todas as especialidades odontológicas: estética, implantes, ortodontia, endodontia, próteses, prevenção e emergência, tudo no mesmo local." },
  { q: "Onde fica a clínica?", a: "Estamos na Estrada do Mendanha, 600 — sobreloja 201, em Campo Grande, Rio de Janeiro, bem em frente ao West Shopping." },
  { q: "Vocês aceitam convênios ou fazem parcelamento?", a: "Trabalhamos com diversas formas de pagamento, incluindo Pix. Para informações sobre convênios e parcelamento, fale com a nossa recepção pelo WhatsApp." },
  { q: "Atendem emergência de domingo à noite?", a: "Atendemos sim. Nosso plantão 24h funciona todos os dias da semana. Em caso de emergência, entre em contato imediato pelo WhatsApp ou telefone." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 marble-texture">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          subtitle="Reunimos as dúvidas mais comuns dos nossos pacientes. Não encontrou a sua? Fale com a gente no WhatsApp."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? "bg-white border-[#64FFDA]/40 shadow-lg shadow-slate-200/50" : "bg-white/60 border-slate-200"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex items-center justify-between w-full p-5 sm:p-6 text-left"
                >
                  <span className="font-heading font-bold text-[#0A192F] text-lg pr-4">{f.q}</span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 ${isOpen ? "text-[#64FFDA]" : "text-slate-400"}`} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 sm:px-6 pb-6 text-slate-500 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}