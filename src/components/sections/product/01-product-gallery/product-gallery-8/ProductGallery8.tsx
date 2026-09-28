import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGallery8({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
  ];
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col lg:flex-row gap-4 h-[600px]">
        {images.map((img: string, idx: number) => {
          const isActive = active === idx;
          return (
            <motion.div
              key={idx}
              onHoverStart={() => setActive(idx)}
              onHoverEnd={() => setActive(null)}
              animate={{ flex: isActive ? 3 : 1 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="relative rounded-3xl overflow-hidden cursor-pointer min-h-[100px] h-full"
            >
              <img 
                src={img} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt={`Accordion ${idx}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-8 left-8 right-8"
                  >
                    <h3 className="text-white text-2xl font-bold mb-2">View Angle {idx + 1}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">Experience the fine materials and build quality from this perspective, highlighting the core design philosophy.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}