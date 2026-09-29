import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecifications8({ data }: { data: any }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const specs = [
    { title: "Resolution", value: "2556 x 1179" },
    { title: "Refresh Rate", value: "120Hz" },
    { title: "Peak Brightness", value: "2000 nits" },
    { title: "Contrast", value: "2M:1" },
    { title: "Color Gamut", value: "P3 Wide" },
    { title: "Protection", value: "Ceramic Shield" },
  ];

  return (
    <section className="py-24 bg-neutral-950 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 w-full text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-16">Hardware specs.</h2>
        
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 relative group"
        >
          {/* Spotlight overlay effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1), transparent 40%)`
            }}
          />

          {specs.map((spec, i) => (
            <div 
              key={i} 
              className="bg-neutral-900 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square relative overflow-hidden"
            >
              <div className="relative z-10 text-center">
                <p className="text-lg text-neutral-400 mb-2">{spec.title}</p>
                <p className="text-3xl font-bold text-white">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
