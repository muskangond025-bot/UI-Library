import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase17Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase17({ data }: BrandShowcase17Props) {
  return (
    <div className="w-full min-h-[600px] py-24 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-1/3">
          <div className="w-16 h-2 bg-blue-600 mb-8" />
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {data.content.brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-bold text-2xl mb-4">
                {brand.name.substring(0, 1)}
              </div>
              <h3 className="font-bold text-slate-800">{brand.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
