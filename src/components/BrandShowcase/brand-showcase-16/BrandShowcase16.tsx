import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase16Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase16({ data }: BrandShowcase16Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Dynamic Background dots */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#334155 2px, transparent 2px)', backgroundSize: '30px 30px', opacity: 0.2 }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 md:p-16 rounded-[3rem] text-center w-full shadow-2xl mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{data.content.heading}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{data.content.description}</p>
        </motion.div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.content.brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 p-6 rounded-3xl flex items-center justify-center hover:bg-white hover:border-white transition-colors duration-300 group"
            >
              <h3 className="text-xl font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{brand.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
