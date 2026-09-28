import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase3Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase3({ data }: BrandShowcase3Props) {
  const row1 = [...data.content.brands.slice(0, 4), ...data.content.brands.slice(0, 4), ...data.content.brands.slice(0, 4)];
  const row2 = [...data.content.brands.slice(4, 8), ...data.content.brands.slice(4, 8), ...data.content.brands.slice(4, 8)];

  return (
    <div className="w-full py-24 font-sans bg-[#f3f4f6] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-gray-900">{data.content.heading}</h2>
        <p className="text-lg text-gray-500">{data.content.description}</p>
      </div>

      <div className="flex flex-col gap-8 relative w-full overflow-hidden before:absolute before:left-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#f3f4f6] before:to-transparent before:z-10 after:absolute after:right-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#f3f4f6] after:to-transparent after:z-10">
        
        {/* Row 1 moving left */}
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap items-center px-4"
        >
          {row1.map((brand, idx) => (
            <div key={`r1-${idx}`} className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">
                {brand.name.charAt(0)}
              </div>
              <span className="text-xl font-bold text-gray-800">{brand.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Row 2 moving right */}
        <motion.div 
          animate={{ x: [-1500, 0] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap items-center px-4"
        >
          {row2.map((brand, idx) => (
            <div key={`r2-${idx}`} className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold">
                {brand.name.charAt(0)}
              </div>
              <span className="text-xl font-bold text-gray-800">{brand.name}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
