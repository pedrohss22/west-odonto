import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { WEST } from "./data";
import { SectionHeading } from "./Services";

const REVIEWS = [
  { name: "Mariana Costa", text: "Atendimento impecável! Cheguei com dor de madrugada e fui prontamente atendida. Equipe super atenciosa e profissional.", rating: 5, time: "há 2 semanas" },
  { name: "Rafael Oliveira", text: "Fiz meu implante na West Odonto e o resultado superou as expectativas. Clínica limpa, moderna e os dentistas são excelentes.", rating: 5, time: "há 1 mês" },
  { name: "Juliana Mendes", text: "O atendimento humanizado é real mesmo. Me sinto acolhida em cada visita. Recomendo demais!", rating: 5, time: "há 3 semanas" },
  { name: "Carlos Eduardo", text: "Melhor clínica de Campo Grande. Plantão 24h salvou minha vida numa emergência de domingo. Gratidão!", rating: 5, time: "há 5 dias" },
  { name: "Patrícia Souza", text: "Fiz clareamento e lentes de contato. Fiquei apaixonada pelo meu sorriso! Profissionais que entendem do assunto.", rating: 5, time: "há 2 meses" },
  { name: "Bruno Almeida", text: "Atendimento de qualidade, pontualidade e preço justo. A localização em frente ao West Shopping é muito prática.", rating: 5, time: "há 1 semana" },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="relative py-24 sm:py-32 marble-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Avaliações"
            title="Mais de 4.700 pessoas confiam no nosso sorriso"
            subtitle="A reputação da West Odonto é construída dia após dia, em cada atendimento. Veja o que nossos pacientes dizem."
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-[#0A192F]">
              <span className="text-white text-2xl font-heading font-extrabold leading-none">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <div className="mt-1 text-[#0A192F] font-semibold">
                <span className="font-heading font-bold text-xl">{WEST.reviewsRating}</span> de 5
              </div>
              <div className="text-slate-500 text-sm">{WEST.reviewsCount} avaliações no Google</div>
            </div>
          </motion.div>
        </div>

        {/* Reviews grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group relative p-7 rounded-3xl bg-white border border-slate-100 hover:border-[#64FFDA]/40 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
            >
              <Quote className="w-8 h-8 text-[#64FFDA]/40 mb-4" />
              <p className="text-slate-600 leading-relaxed text-[15px]">{r.text}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A192F] to-[#1d4e6b] flex items-center justify-center text-white font-heading font-bold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A192F] text-sm">{r.name}</div>
                    <div className="text-slate-400 text-xs">{r.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-amber-400" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee of trust */}
        <div className="mt-16 overflow-hidden relative" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex gap-4 animate-marquee w-max">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-100 whitespace-nowrap">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm text-slate-600 font-medium">{r.name}</span>
                <span className="text-slate-300">•</span>
                <span className="text-sm text-slate-400">Recomenda a West Odonto</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}