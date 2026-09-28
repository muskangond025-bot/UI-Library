import React from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase1Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase1({ data }: BrandShowcase1Props) {
  // Duplicate array for infinite scroll effect
  const marqueeBrands = [...data.content.brands, ...data.content.brands, ...data.content.brands];

  return (
    <div className="w-full py-24 font-sans overflow-hidden bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{data.content.heading}</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">{data.content.description}</p>
      </div>

      <div className="w-full relative flex items-center h-32 before:absolute before:left-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap px-8 items-center"
        >
          {marqueeBrands.map((brand, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              {/* Abstract SVG logo */}
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
              </svg>
              <span className="text-2xl font-black uppercase tracking-widest">{brand.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
