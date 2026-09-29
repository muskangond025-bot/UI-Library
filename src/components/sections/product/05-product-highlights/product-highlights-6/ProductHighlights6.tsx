import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Pro Display XDR", desc: "Extreme Dynamic Range with 1,000,000:1 contrast ratio.", span: "col-span-12 md:col-span-8", img: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=800" },
  { title: "M3 Max", desc: "Mind-blowing performance.", span: "col-span-12 md:col-span-4", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600" },
  { title: "MagSafe 3", desc: "Quick release magnetic charging.", span: "col-span-12 md:col-span-4", img: "https://images.unsplash.com/photo-1626218174358-7769486c4b79?q=80&w=600" },
  { title: "Spatial Audio", desc: "Six-speaker sound system.", span: "col-span-12 md:col-span-8", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800" }
];

export default function ProductHighlights6({ data }: { data: any }) {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/10 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Everything you need.</h2>
          <p className="text-xl text-neutral-400">Packed into a beautiful bento grid.</p>
        </motion.div>
        
        <div className="grid grid-cols-12 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl overflow-hidden group bg-neutral-900 border border-white/10 ${f.span} min-h-[300px]`}
            >
              <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h3 className="text-3xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-neutral-300">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
