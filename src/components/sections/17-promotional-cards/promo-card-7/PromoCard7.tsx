import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard7Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard7({ data }: PromoCard7Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans bg-white relative overflow-hidden" style={{ color: data.style.textColor }}>
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl border-[0.5px] border-black/20 p-2 relative"
      >
        <div className="border-[0.5px] border-black/20 p-12 md:p-24 flex flex-col items-center text-center bg-gray-50/50">
          <span className="text-xs uppercase tracking-[0.3em] font-light mb-8 text-black/60 block">
            — {data.content.badge} —
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic font-light tracking-tight mb-8 text-black">
            {data.content.title}
          </h2>
          <p className="text-lg text-black/70 font-light max-w-lg mx-auto mb-12 leading-relaxed">
            {data.content.description}
          </p>
          <a href={data.content.cta.url} className="px-12 py-4 border border-black text-black font-light uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-500">
            {data.content.cta.text}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
