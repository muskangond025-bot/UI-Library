import React, { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, name: "Device" },
  { id: 2, name: "Cable" },
  { id: 3, name: "Adapter" },
  { id: 4, name: "Documentation" }
];

export default function WhatsInTheBox10({ data }: { data: any }) {
  const [rotation, setRotation] = useState(0);

  const rotateCarousel = (direction: 'left' | 'right') => {
    setRotation(prev => direction === 'left' ? prev + 90 : prev - 90);
  };

  return (
    <section className="py-24 bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-5xl font-black text-white">Unbox the future.</h2>
        <p className="text-neutral-400 mt-4">Spin to view contents.</p>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative w-full max-w-md aspect-square perspective-[1000px] flex items-center justify-center">
        
        <motion.div 
          animate={{ rotateY: rotation }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-64 h-64 relative"
        >
          {items.map((item, i) => {
            const rotateY = i * 90;
            return (
              <div 
                key={item.id}
                className="absolute inset-0 bg-neutral-900 border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                style={{ 
                  transform: `rotateY(${rotateY}deg) translateZ(200px)`,
                  backfaceVisibility: "hidden"
                }}
              >
                <div className="w-24 h-24 bg-white/10 rounded-full mb-6" />
                <h3 className="text-2xl font-bold text-white text-center">{item.name}</h3>
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Controls */}
      <div className="flex gap-8 mt-16 relative z-20">
        <button onClick={() => rotateCarousel('left')} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
          &larr;
        </button>
        <button onClick={() => rotateCarousel('right')} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
          &rarr;
        </button>
      </div>

    </section>
  );
}
