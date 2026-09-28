import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard16Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard16({ data }: PromoCard16Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans bg-[#4C1D95] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Morphing Blob Background */}
      <motion.div 
        animate={{ 
          borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '50% 50% 20% 80% / 25% 80% 20% 75%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30"
      />

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-12 md:p-20 text-center"
      >
        <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-8">
          {data.content.badge}
        </span>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
          {data.content.title}
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-md mx-auto">
          {data.content.description}
        </p>
        <a href={data.content.cta.url} className="px-10 py-4 bg-white text-purple-900 font-bold uppercase tracking-widest rounded-full hover:bg-purple-100 transition-colors inline-block shadow-xl">
          {data.content.cta.text}
        </a>
      </motion.div>
    </div>
  );
}
