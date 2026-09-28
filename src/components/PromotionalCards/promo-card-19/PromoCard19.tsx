import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard19Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard19({ data }: PromoCard19Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-mono bg-[#000000]" style={{ color: data.style.textColor }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl border border-red-600/30 bg-black p-2 relative group"
      >
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />

        <div className="border border-red-600/20 bg-[#050000] p-8 md:p-16 flex flex-col items-start relative overflow-hidden">
          <div className="absolute top-0 right-10 w-[2px] h-full bg-red-600/10 pointer-events-none" />
          <div className="absolute top-10 left-0 w-full h-[2px] bg-red-600/10 pointer-events-none" />

          <span className="text-red-500 text-xs font-bold uppercase tracking-[0.3em] mb-6 block animate-pulse">
            • {data.content.badge}
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 relative z-10 group-hover:translate-x-2 transition-transform">
            {data.content.title}
          </h2>
          <p className="text-gray-400 max-w-xl mb-12 text-sm md:text-base leading-relaxed">
            {data.content.description}
          </p>
          
          <div className="flex gap-4">
            <a href={data.content.cta.url} className="px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors">
              {data.content.cta.text}
            </a>
            <div className="px-8 py-3 border border-red-600/50 text-red-500 font-bold uppercase tracking-widest text-sm">
              Lvl. 99
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
