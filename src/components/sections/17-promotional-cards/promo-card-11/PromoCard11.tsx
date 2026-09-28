import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard11Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard11({ data }: PromoCard11Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans bg-[#E5E5E5]" style={{ color: data.style.textColor }}>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl flex flex-col md:flex-row bg-white overflow-hidden shadow-2xl rounded-3xl"
      >
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-black text-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black to-zinc-800" />
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.2em] font-bold mb-4 block text-zinc-400">
              {data.content.badge}
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white">
              {data.content.title}
            </h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-white relative">
          <p className="text-lg text-zinc-600 font-medium mb-10 leading-relaxed">
            {data.content.description}
          </p>
          <a href={data.content.cta.url} className="px-10 py-4 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:bg-zinc-800 transition-colors w-max">
            {data.content.cta.text}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
