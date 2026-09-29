import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const features = [
  "Aerospace Grade Titanium", "48MP Main Camera", "A17 Pro Chip", "USB-C Connectivity", "Action Button", "All-day Battery Life"
];

export default function ProductHighlights8({ data }: { data: any }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-32 bg-neutral-950 relative overflow-hidden"
    >
      <motion.div 
        className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
        animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">Spotlight Features</h2>
          <p className="text-neutral-400 text-lg">Hover over the grid to reveal details.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="relative p-[1px] rounded-3xl overflow-hidden group bg-neutral-800">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-neutral-900 rounded-3xl p-8 h-full relative z-10 flex items-center justify-center text-center">
                <h3 className="text-xl font-bold text-white group-hover:scale-110 transition-transform duration-500">{f}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
