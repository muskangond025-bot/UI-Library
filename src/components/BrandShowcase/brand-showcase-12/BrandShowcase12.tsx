import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase12Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase12({ data }: BrandShowcase12Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="border-b-4 border-yellow-400 pb-8 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black uppercase text-yellow-400 tracking-tighter w-full md:w-2/3"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-white w-full md:w-1/3 bg-zinc-900 p-4 border border-zinc-700 text-sm"
          >
            &gt; SYSTEM MESSAGE: {data.content.description}_
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data.content.brands.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-zinc-900 h-40 border-2 border-zinc-800 hover:border-yellow-400 hover:-translate-y-2 hover:translate-x-2 transition-all shadow-[0_0_0_0_rgba(250,204,21,0)] hover:shadow-[-8px_8px_0_0_rgba(250,204,21,1)]"
            >
              <div className="absolute top-2 left-2 text-xs text-zinc-600 font-bold">0{idx + 1}</div>
              <div className="absolute bottom-2 right-2 text-[10px] text-zinc-500 uppercase">[{brand.industry}]</div>
              <div className="w-full h-full flex items-center justify-center p-6">
                <span className="text-2xl font-black text-white group-hover:text-yellow-400 transition-colors text-center uppercase tracking-widest break-all">
                  {brand.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
