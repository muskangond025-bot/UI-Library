import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase13Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase13({ data }: BrandShowcase13Props) {
  return (
    <div className="w-full py-32 font-sans bg-white overflow-hidden relative" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter">{data.content.heading}</h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">{data.content.description}</p>
      </div>

      <div className="w-full relative h-[600px] flex items-center justify-center">
        
        {/* Isometric Grid Container */}
        <div 
          className="absolute inset-0 grid grid-cols-4 gap-8 px-24 py-12"
          style={{ transform: 'rotateX(60deg) rotateZ(-45deg) scale(1.5)', transformOrigin: 'center center' }}
        >
          {data.content.brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, z: -100 }}
              whileInView={{ opacity: 1, z: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.5 }}
              className="bg-slate-50 border border-slate-200 shadow-2xl rounded-2xl flex items-center justify-center h-48 group hover:bg-blue-600 transition-colors duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="text-2xl font-bold text-slate-800 group-hover:text-white transition-colors"
                style={{ transform: 'translateZ(30px)' }}
              >
                {brand.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
