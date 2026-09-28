import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard14Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard14({ data }: PromoCard14Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-serif bg-[#064E3B]" style={{ color: data.style.textColor }}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full max-w-2xl"
      >
        <div className="border border-[#D4AF37]/30 p-2 relative">
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#D4AF37]" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4AF37]" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D4AF37]" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D4AF37]" />
          
          <div className="border border-[#D4AF37]/30 p-12 md:p-20 flex flex-col items-center text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-8 font-sans">
              {data.content.badge}
            </span>
            <h2 className="text-5xl md:text-6xl font-light italic text-[#D4AF37] mb-8">
              {data.content.title}
            </h2>
            <p className="text-lg text-[#D4AF37]/70 mb-12 max-w-md mx-auto leading-relaxed font-sans font-light">
              {data.content.description}
            </p>
            <a href={data.content.cta.url} className="px-12 py-3 border border-[#D4AF37] text-[#D4AF37] font-sans text-xs uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-[#064E3B] transition-colors duration-500">
              {data.content.cta.text}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
