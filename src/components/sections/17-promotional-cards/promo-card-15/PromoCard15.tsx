import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard15Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard15({ data }: PromoCard15Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans bg-[#F3F4F6]" style={{ color: data.style.textColor }}>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl"
      >
        <div className="bg-white border-4 border-black p-10 md:p-16 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
          <span className="inline-block px-4 py-1 border-2 border-black bg-[#FF3366] text-white text-sm font-black uppercase tracking-widest mb-8">
            {data.content.badge}
          </span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-black leading-none">
            {data.content.title}
          </h2>
          <p className="text-xl md:text-2xl text-black font-bold mb-10 border-l-4 border-black pl-6">
            {data.content.description}
          </p>
          <a href={data.content.cta.url} className="inline-block px-10 py-4 border-4 border-black bg-[#00E5FF] text-black font-black uppercase tracking-widest text-lg hover:bg-[#FF3366] hover:text-white transition-colors">
            {data.content.cta.text}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
