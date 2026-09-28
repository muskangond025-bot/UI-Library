import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase18Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase18({ data }: BrandShowcase18Props) {
  return (
    <div className="w-full font-sans overflow-hidden" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      
      <div className="py-24 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{data.content.heading}</h2>
        <p className="text-slate-400">{data.content.description}</p>
      </div>

      <div className="w-full flex flex-col">
        {/* Row 1 */}
        <div className="w-full flex">
          {data.content.brands.slice(0, 4).map((brand, idx) => (
            <motion.div 
              key={`r1-${idx}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`w-1/4 h-48 flex items-center justify-center border-t border-r border-slate-800 ${idx % 2 === 0 ? 'bg-slate-900' : 'bg-[#111827]'} hover:bg-slate-800 transition-colors`}
            >
              <h3 className="text-xl font-bold text-slate-300">{brand.name}</h3>
            </motion.div>
          ))}
        </div>
        {/* Row 2 */}
        <div className="w-full flex">
          {data.content.brands.slice(4, 8).map((brand, idx) => (
            <motion.div 
              key={`r2-${idx}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`w-1/4 h-48 flex items-center justify-center border-t border-r border-slate-800 ${idx % 2 !== 0 ? 'bg-slate-900' : 'bg-[#111827]'} hover:bg-slate-800 transition-colors`}
            >
              <h3 className="text-xl font-bold text-slate-300">{brand.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
