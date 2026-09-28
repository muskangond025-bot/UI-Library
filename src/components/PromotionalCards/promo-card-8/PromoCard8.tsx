import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard8Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard8({ data }: PromoCard8Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-fuchsia-600/40 blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[20%] w-[80%] h-[80%] rounded-full bg-cyan-600/40 blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-blue-600/40 blur-[90px]" 
        />
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 md:p-16 text-center shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6 shadow-inner">
          {data.content.badge}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-md">
          {data.content.title}
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-md mx-auto font-light">
          {data.content.description}
        </p>
        <a href={data.content.cta.url} className="px-10 py-4 bg-white text-slate-900 font-bold uppercase tracking-widest rounded-full hover:bg-gray-100 hover:shadow-lg transition-all inline-block">
          {data.content.cta.text}
        </a>
      </motion.div>

    </div>
  );
}
