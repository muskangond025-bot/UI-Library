import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Testimonial14Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial14({ data }: Testimonial14Props) {
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
      className="w-full py-24 px-6 md:px-12 font-sans bg-black overflow-hidden relative" 
      style={{ color: data.style.textColor }}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-zinc-500">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.content.testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-500 transition-colors duration-500 flex flex-col justify-between"
            >
              <div className="text-zinc-400 mb-8 leading-relaxed">
                "{testimonial.content}"
              </div>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover grayscale opacity-80" />
                <div>
                  <h4 className="font-bold text-zinc-200">{testimonial.name}</h4>
                  <p className="text-xs text-zinc-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
