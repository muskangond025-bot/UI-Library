import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase14Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase14({ data }: BrandShowcase14Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#1e293b] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-700/50 pb-8 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-white max-w-xl"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-slate-400 max-w-md md:text-right"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.content.brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-[1px] rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-slate-900 rounded-[23px] p-8 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-slate-200 group-hover:text-white transition-colors text-center">{brand.name}</span>
                <span className="text-xs text-slate-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  {brand.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
