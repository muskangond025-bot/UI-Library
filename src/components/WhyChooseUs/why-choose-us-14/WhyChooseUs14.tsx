import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs14Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs14({ data }: WhyChooseUs14Props) {
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
      className="w-full min-h-screen py-24 px-6 md:px-12 font-sans bg-black overflow-hidden relative cursor-crosshair" 
      style={{ color: data.style.textColor }}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* Global Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-500 max-w-2xl mx-auto"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <div className="bg-zinc-900 border border-zinc-800 p-8 h-full hover:border-zinc-600 transition-colors duration-300 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-zinc-600 text-xs font-mono mb-4 block">0{idx + 1} //</span>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-8 w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
