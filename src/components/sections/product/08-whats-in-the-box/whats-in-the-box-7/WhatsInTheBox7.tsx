import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", col: "md:col-span-2", row: "md:row-span-2" },
  { name: "Cable", col: "md:col-span-1", row: "md:row-span-1" },
  { name: "Adapter", col: "md:col-span-1", row: "md:row-span-1" },
  { name: "Manual", col: "md:col-span-2", row: "md:row-span-1" },
];

export default function WhatsInTheBox7({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="py-24 bg-[#030303] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <h2 className="text-5xl font-black text-white text-center mb-16">The complete package.</h2>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[600px] relative group"
        >
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`${item.col} ${item.row} bg-neutral-900 rounded-[2rem] border border-white/5 relative overflow-hidden group/card`}
            >
              {/* Spotlight Effect */}
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                animate={{
                  background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.15), transparent 40%)`
                }}
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-full h-full bg-black/20 rounded-2xl mb-4 border border-white/5 flex items-center justify-center">
                  <span className="text-neutral-600 font-bold uppercase tracking-widest text-xs">Image</span>
                </div>
                <h3 className="text-xl font-bold text-white w-full text-center">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
