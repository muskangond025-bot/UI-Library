import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard6Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard6({ data }: PromoCard6Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans relative overflow-hidden bg-black" style={{ color: data.style.textColor }}>
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-3xl"
      >
        <div className="relative rounded-2xl bg-black border border-white/10 p-10 md:p-16 flex flex-col items-center text-center overflow-visible group">
          {/* Neon Glow Effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-black rounded-2xl z-0 border border-white/5" />

          <div className="relative z-10 flex flex-col items-center w-full">
            <span className="px-6 py-2 rounded-full border border-pink-500/50 text-pink-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              {data.content.badge}
            </span>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">
              {data.content.title}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              {data.content.description}
            </p>
            
            <a href={data.content.cta.url} className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all">
              {data.content.cta.text}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
