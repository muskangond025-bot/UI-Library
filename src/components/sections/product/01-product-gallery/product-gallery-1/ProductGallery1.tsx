import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGallery1({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];
  
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <motion.div 
            className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 relative"
            layoutId="main-image"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={selected}
                src={selected}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full object-cover"
                alt="Product"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
        
        <div className="flex md:flex-col gap-4 overflow-x-auto md:w-32 shrink-0 hide-scrollbar pb-2 md:pb-0">
          {images.map((img: string, idx: number) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(img)}
              className={`w-20 h-20 md:w-full md:aspect-square rounded-xl overflow-hidden border-2 transition-colors shrink-0 ${selected === img ? 'border-indigo-600 shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'}`}
            >
              <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx + 1}`} />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}