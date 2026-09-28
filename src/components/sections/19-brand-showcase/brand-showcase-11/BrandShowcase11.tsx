import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase11Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase11({ data }: BrandShowcase11Props) {
  const scrollBrands = [...data.content.brands, ...data.content.brands, ...data.content.brands];

  return (
    <div className="w-full h-screen font-sans bg-[#f8fafc] overflow-hidden flex flex-col md:flex-row relative" style={{ color: data.style.textColor }}>
      
      <div className="w-full md:w-1/2 h-1/3 md:h-full flex flex-col justify-center px-6 md:px-16 z-10 bg-[#f8fafc]">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-slate-900"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500 max-w-md"
        >
          {data.content.description}
        </motion.p>
      </div>

      <div className="w-full md:w-1/2 h-2/3 md:h-full relative overflow-hidden bg-slate-100 border-l border-slate-200">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f1f5f9] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f1f5f9] to-transparent z-10" />

        <div className="flex h-full w-full overflow-hidden">
          {/* Column 1 */}
          <motion.div 
            animate={{ y: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="w-1/2 flex flex-col gap-8 py-8 px-4"
          >
            {scrollBrands.map((brand, idx) => (
              <div key={`col1-${idx}`} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center min-h-[200px]">
                <h3 className="text-2xl font-black text-slate-800 tracking-tight text-center">{brand.name}</h3>
              </div>
            ))}
          </motion.div>

          {/* Column 2 (reverse scroll) */}
          <motion.div 
            animate={{ y: [-2000, 0] }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
            className="w-1/2 flex flex-col gap-8 py-8 px-4"
          >
            {scrollBrands.map((brand, idx) => (
              <div key={`col2-${idx}`} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center min-h-[200px]">
                <h3 className="text-xl font-bold text-slate-400 tracking-widest uppercase text-center">{brand.name}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
}
