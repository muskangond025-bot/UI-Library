import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface BrandShowcase7Props {
  data: {
    content: { heading: string; description: string; brands: { name: string; industry: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BrandShowcase7({ data }: BrandShowcase7Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      className="w-full py-24 px-6 md:px-12 font-sans bg-[#fafafa] overflow-hidden relative cursor-default" 
      style={{ color: data.style.textColor }}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.1), transparent 40%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">{data.content.heading}</h2>
        <p className="text-gray-500 max-w-xl mx-auto">{data.content.description}</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {data.content.brands.map((brand, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="p-8 bg-white border border-gray-100 rounded-2xl flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-blue-500 mb-4">
              <span className="font-bold">{brand.name.charAt(0)}</span>
            </div>
            <h3 className="font-bold text-gray-800">{brand.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
