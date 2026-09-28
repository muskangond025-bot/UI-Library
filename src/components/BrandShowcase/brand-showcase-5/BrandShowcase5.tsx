import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase5Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase5({ data }: BrandShowcase5Props) {
  const marqueeBrands = [...data.content.brands, ...data.content.brands, ...data.content.brands];

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Background glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-300 rounded-full blur-[100px] opacity-40 -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-[100px] opacity-40 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-slate-800">{data.content.heading}</h2>
          <p className="text-lg text-slate-600 font-medium">{data.content.description}</p>
        </div>

        {/* Glassmorphism Marquee track */}
        <div className="w-full overflow-hidden relative rounded-3xl bg-white/30 backdrop-blur-xl border border-white/60 p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-16 whitespace-nowrap items-center"
          >
            {marqueeBrands.map((brand, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-600 font-bold text-xl">
                  {brand.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{brand.name}</h3>
                  <p className="text-sm text-slate-500">{brand.industry}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
