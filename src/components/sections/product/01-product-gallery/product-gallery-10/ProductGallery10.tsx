import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery10({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#111] py-20 flex flex-col justify-center">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">Visual Identity</h2>
        <div className="h-1 w-24 bg-indigo-500 mx-auto rounded-full" />
      </div>
      
      <div className="w-full overflow-hidden flex flex-col md:flex-row gap-2 px-2 h-[70vh]">
        {images.map((img: string, idx: number) => {
          const isHovered = hoveredIndex === idx;
          const isOtherHovered = hoveredIndex !== null && !isHovered;
          
          return (
            <motion.div
              key={idx}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{ 
                flex: isHovered ? 4 : isOtherHovered ? 0.5 : 1,
                opacity: isOtherHovered ? 0.5 : 1
              }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative rounded-xl overflow-hidden cursor-crosshair min-h-[100px] h-full"
            >
              <img 
                src={img} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={`Gallery ${idx}`} 
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-500" />
              
              <motion.div 
                className="absolute inset-0 border-4 border-white/0 flex items-center justify-center mix-blend-overlay"
                animate={{ borderColor: isHovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0)' }}
              >
                {isHovered && (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-white/80 font-bold text-6xl tracking-widest uppercase rotate-90 md:rotate-0"
                  >
                    0{idx + 1}
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}