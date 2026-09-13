import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Camera, Video } from "lucide-react";
import { MEDIA } from "./data";
import { Image } from "@/components/ui/image";
import { SectionHeading } from "./Services";

// Organized gallery: uniform cards, grouped by theme
const GROUPS = [
  {
    label: "Atendimento & Procedimentos",
    items: [
      { type: "image", src: MEDIA.procedimento1, label: "Procedimento clínico" },
      { type: "video", src: MEDIA.video1, label: "Atendimento em ação" },
      { type: "image", src: MEDIA.procedimento2, label: "Precisão & cuidado" },
      { type: "image", src: MEDIA.procedimento3, label: "Atendimento humanizado" },
      { type: "video", src: MEDIA.video2, label: "Tecnologia a serviço do sorriso" },
    ],
  },
  {
    label: "Estrutura & Ambiente",
    items: [
      { type: "image", src: MEDIA.reception, label: "Recepção principal" },
      { type: "image", src: MEDIA.consultorio, label: "Consultório Dr. Silvio Malek" },
      { type: "image", src: MEDIA.admin, label: "Recepção & administração" },
      { type: "image", src: MEDIA.entrada, label: "Entrada da clínica" },
      { type: "image", src: MEDIA.equipe, label: "Dr. Silvio Malek & equipe" },
    ],
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="galeria" className="relative py-24 sm:py-32 bg-[#0A192F] overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#64FFDA]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          dark
          eyebrow="Galeria"
          title="O sorriso em movimento"
          subtitle="Um olhar por dentro da West Odonto — da recepção ao centro do procedimento. Toque em qualquer item para ampliar."
        />

        <div className="mt-14 space-y-14">
          {GROUPS.map((group, gi) => (
            <div key={gi}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-6 rounded-full bg-[#64FFDA]" />
                <h3 className="font-heading font-bold text-white text-xl sm:text-2xl">{group.label}</h3>
                <span className="text-white/30 text-sm font-medium">({group.items.length})</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {group.items.map((item, i) => (
                  <motion.button
                    key={`${gi}-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: (i % 4) * 0.08 }}
                    onClick={() => setLightbox(item)}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#64FFDA]/50 transition-all aspect-[4/3]"
                  >
                    {item.type === "video" ? (
                      <>
                        <video src={item.src} className="w-full h-full object-cover" muted loop autoPlay playsInline />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 via-transparent to-transparent" />
                        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#64FFDA] flex items-center justify-center shadow-lg">
                          <Play className="w-4 h-4 text-[#0A192F] fill-[#0A192F]" />
                        </div>
                      </>
                    ) : (
                      <>
                        <Image src={item.src} alt={item.label} className="w-full h-full" fittingType="fill" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 via-transparent to-transparent opacity-50 group-hover:opacity-90 transition-opacity" />
                      </>
                    )}
                    <div className="absolute bottom-0 inset-x-0 p-3 text-left">
                      <div className="flex items-center gap-1.5 text-[#64FFDA] text-[9px] tracking-[0.2em] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.type === "video" ? <Video className="w-3 h-3" /> : <Camera className="w-3 h-3" />}
                        {item.type === "video" ? "Vídeo" : "Foto"}
                      </div>
                      <div className="text-white text-sm font-medium translate-y-1 group-hover:translate-y-0 transition-transform">
                        {item.label}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
          >
            <button className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors" onClick={() => setLightbox(null)}>
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === "video" ? (
                <video src={lightbox.src} className="w-full h-full object-contain max-h-[85vh]" controls autoPlay playsInline />
              ) : (
                <Image src={lightbox.src} alt={lightbox.label} className="w-full h-full object-contain max-h-[85vh]" />
              )}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">{lightbox.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}