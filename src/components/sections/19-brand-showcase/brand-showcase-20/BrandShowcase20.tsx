import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase20Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase20({ data }: BrandShowcase20Props) {
  // Multiply for the wall effect
  const wallBrands = [...data.content.brands, ...data.content.brands, ...data.content.brands, ...data.content.brands];

  return (
    <div className="w-full py-24 font-sans bg-black overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-20 mb-20">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto"
        >
          {data.content.description}
        </motion.p>
      </div>

      <div className="w-full relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-24 before:bg-gradient-to-b before:from-black before:to-transparent before:z-20 after:absolute after:bottom-0 after:left-0 after:w-full after:h-24 after:bg-gradient-to-t after:from-black after:to-transparent after:z-20">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 opacity-40 hover:opacity-80 transition-opacity duration-700">
          {wallBrands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: (idx % 8) * 0.05 }}
              className="aspect-square bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-white transition-all flex items-center justify-center p-4 cursor-crosshair group"
            >
              <span className="font-bold text-zinc-500 group-hover:text-white transition-colors text-center uppercase tracking-widest text-xs sm:text-sm">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
