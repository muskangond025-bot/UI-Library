import React, { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Adapter", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Documentation", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded10({ data }: { data: any }) {
  const [rotation, setRotation] = useState(0);

  const rotateCarousel = (direction: 'left' | 'right') => {
    setRotation(prev => direction === 'left' ? prev + 90 : prev - 90);
  };

  return (
    <section className="py-32 bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[800px] h-[800px] bg-blue-600 rounded-full blur-[150px]" />
      </div>

      <div className="text-center mb-24 relative z-20">
        <h2 className="text-6xl font-black text-white tracking-tighter">Unbox the future.</h2>
        <p className="text-neutral-400 mt-4 text-xl">Spin the carousel to explore contents.</p>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative w-full max-w-sm md:max-w-md aspect-square perspective-[1200px] flex items-center justify-center">
        
        <motion.div 
          animate={{ rotateY: rotation }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70, damping: 15 }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-72 h-[400px] relative"
        >
          {items.map((item, i) => {
            const rotateY = i * 90;
            return (
              <div 
                key={item.id}
                className="absolute inset-0 bg-neutral-900 border border-white/10 rounded-[3rem] p-6 flex flex-col items-center overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                style={{ 
                  transform: `rotateY(${rotateY}deg) translateZ(280px)`,
                  backfaceVisibility: "hidden"
                }}
              >
                <div className="absolute inset-0 z-0">
                  <img src={item.img} className="w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/80 to-neutral-900" />
                </div>
                
                <h3 className="text-3xl font-black text-white text-center relative z-10 mt-auto mb-4">{item.name}</h3>
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Controls */}
      <div className="flex gap-8 mt-24 relative z-20">
        <button onClick={() => rotateCarousel('left')} className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/10 backdrop-blur-md text-2xl">
          &larr;
        </button>
        <button onClick={() => rotateCarousel('right')} className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/10 backdrop-blur-md text-2xl">
          &rarr;
        </button>
      </div>

    </section>
  );
}
