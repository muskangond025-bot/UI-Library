import React from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecifications10({ data }: { data: any }) {
  const specs = [
    { label: "Material", value: "Aerospace Titanium" },
    { label: "Display", value: "Super Retina XDR" },
    { label: "Glass", value: "Ceramic Shield" },
    { label: "Weight", value: "187 grams" }
  ];

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-light text-neutral-400 mb-16 leading-relaxed"
        >
          Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.
        </motion.h2>

        <div className="space-y-0">
          {specs.map((spec, i) => (
            <div key={i} className="flex justify-between items-end border-b-2 border-black py-6 overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight"
              >
                {spec.label}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                className="text-lg md:text-xl text-neutral-500 font-mono"
              >
                {spec.value}
              </motion.span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
