import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase2Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase2({ data }: BrandShowcase2Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {data.content.brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 p-8 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:scale-110 transition-transform mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{brand.name}</h3>
              <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{brand.industry}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
