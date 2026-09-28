import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase15Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase15({ data }: BrandShowcase15Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#ecfdf5] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full text-center">
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black tracking-tight text-[#064e3b] mb-6"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-[#047857] mb-20 max-w-3xl mx-auto font-medium"
        >
          {data.content.description}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
          {data.content.brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-3xl md:text-5xl font-black text-[#059669]">{brand.name}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
