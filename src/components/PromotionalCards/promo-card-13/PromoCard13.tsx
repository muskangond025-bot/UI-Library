import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard13Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard13({ data }: PromoCard13Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-mono bg-[#000000]" style={{ color: data.style.textColor }}>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full max-w-4xl relative"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }} />
        
        <div 
          className="bg-[#111] text-yellow-400 p-10 md:p-16 border-l-4 border-b-4 border-yellow-400 relative"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)' }}
        >
          <div className="absolute top-4 right-4 text-xs opacity-50">SYS.OP.409</div>
          
          <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold uppercase tracking-widest mb-8">
            [ {data.content.badge} ]
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 break-words">
            {data.content.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
            &gt; {data.content.description}
          </p>
          <a href={data.content.cta.url} className="inline-block px-10 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-colors">
            {data.content.cta.text} _
          </a>
        </div>
      </motion.div>
    </div>
  );
}
