import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase8Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase8({ data }: BrandShowcase8Props) {
  return (
    <div className="w-full py-24 font-sans bg-[#111827] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{data.content.heading}</h2>
        <p className="text-gray-400">{data.content.description}</p>
      </div>

      <div className="w-full relative h-[400px] perspective-[1000px] flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ rotateY: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="relative w-64 h-64 preserve-3d"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {data.content.brands.slice(0, 8).map((brand, idx) => {
            const angle = (360 / 8) * idx;
            return (
              <div 
                key={idx} 
                className="absolute top-0 left-0 w-full h-full bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl flex flex-col items-center justify-center shadow-xl"
                style={{ 
                  transform: `rotateY(${angle}deg) translateZ(350px)`,
                  backfaceVisibility: 'hidden'
                }}
              >
                <h3 className="text-2xl font-black text-white">{brand.name}</h3>
                <p className="text-slate-400 text-sm mt-2">{brand.industry}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
