import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard20Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard20({ data }: PromoCard20Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans bg-[#000000] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black" />
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-5xl rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-3xl p-12 md:p-24 text-center shadow-[0_0_100px_rgba(79,70,229,0.2)] overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-50" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-50" />

        <div className="relative z-10 flex flex-col items-center">
          <span className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-[0.3em] mb-10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            {data.content.badge}
          </span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-br from-white via-white to-white/40 text-transparent bg-clip-text">
            {data.content.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl font-light">
            {data.content.description}
          </p>
          <a href={data.content.cta.url} className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            {data.content.cta.text}
          </a>
        </div>
      </motion.div>

    </div>
  );
}
