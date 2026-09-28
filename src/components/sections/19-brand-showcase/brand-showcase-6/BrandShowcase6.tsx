import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase6Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase6({ data }: BrandShowcase6Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#1e1b4b] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        
        <div className="w-full md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-indigo-200 text-lg"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-6">
          {data.content.brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 border border-indigo-500/20 rounded-2xl bg-indigo-900/20 hover:bg-indigo-500 transition-colors duration-500"
            >
              <h3 className="text-2xl font-black tracking-widest uppercase text-indigo-300/50 group-hover:text-white transition-colors">{brand.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
