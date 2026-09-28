import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase4Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase4({ data }: BrandShowcase4Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black uppercase tracking-widest text-[#00FF41] mb-4"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400"
        >
          &gt; {data.content.description}_
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px]">
        {data.content.brands.slice(0, 5).map((brand, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`border-2 border-[#00FF41]/30 bg-[#111] hover:border-[#00FF41] hover:bg-[#00FF41]/10 flex flex-col items-center justify-center transition-colors ${idx === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
          >
            <div className={`font-black uppercase text-[#00FF41] ${idx === 0 ? 'text-6xl mb-4' : 'text-xl mb-2'}`}>
              {brand.name}
            </div>
            <div className={`text-gray-500 uppercase tracking-widest ${idx === 0 ? 'text-sm' : 'text-xs'}`}>
              [{brand.industry}]
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
