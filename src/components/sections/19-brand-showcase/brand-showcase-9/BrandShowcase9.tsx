import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase9Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase9({ data }: BrandShowcase9Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full text-center">
        
        <h2 className="text-3xl font-black uppercase tracking-[0.3em] text-gray-300 mb-16">
          {data.content.heading}
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
          {data.content.brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className="group flex flex-col items-center"
            >
              <div className="text-3xl font-black text-gray-800 group-hover:text-blue-600 transition-colors duration-300 tracking-tighter">
                {brand.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
