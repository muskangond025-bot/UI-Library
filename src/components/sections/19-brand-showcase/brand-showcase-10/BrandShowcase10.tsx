import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase10Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase10({ data }: BrandShowcase10Props) {
  const marqueeBrands = [...data.content.brands, ...data.content.brands];

  return (
    <div className="w-full py-32 font-sans bg-[#020617] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#020617] to-[#020617]" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-6"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 font-light max-w-2xl mx-auto"
        >
          {data.content.description}
        </motion.p>
      </div>

      <div className="w-full relative z-10 before:absolute before:left-0 before:w-64 before:h-full before:bg-gradient-to-r before:from-[#020617] before:to-transparent before:z-20 after:absolute after:right-0 after:w-64 after:h-full after:bg-gradient-to-l after:from-[#020617] after:to-transparent after:z-20">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap items-center px-12"
        >
          {marqueeBrands.map((brand, idx) => (
            <div 
              key={idx} 
              className="px-12 py-8 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500"
            >
              <span className="text-4xl font-bold text-white tracking-widest uppercase">{brand.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
