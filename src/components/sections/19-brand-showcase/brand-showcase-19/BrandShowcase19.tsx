import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase19Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase19({ data }: BrandShowcase19Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#fafafa]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 uppercase tracking-widest text-sm"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {data.content.brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400 hover:from-slate-900 hover:to-slate-900 transition-all duration-300 cursor-pointer"
            >
              {brand.name}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
