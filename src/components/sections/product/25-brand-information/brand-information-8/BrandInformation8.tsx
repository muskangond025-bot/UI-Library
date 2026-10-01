import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation8({ data }: { data: any }) {
  const lines = data?.manifestoLines || [];

  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{data?.eyebrow || 'BRAND MANIFESTO'}</span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{data?.heading || 'What We Believe'}</h2>
        
        <div className="space-y-6 pt-8">
          {lines.map((line: string, idx: number) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="text-xl sm:text-3xl font-serif italic text-neutral-200 hover:text-amber-300 transition-colors"
            >
              "{line}"
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
