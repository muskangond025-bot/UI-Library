import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGallery15({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto aspect-[21/9] min-h-[500px] relative rounded-[2rem] overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={active}
          src={images[active]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
        {images.slice(0, 5).map((img: string, idx: number) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden transition-all duration-300 ${active === idx ? 'ring-2 ring-white scale-110 shadow-lg' : 'opacity-60 hover:opacity-100'}`}
          >
            <img src={img} className="w-full h-full object-cover" alt="Thumb" />
          </button>
        ))}
      </div>
    </div>
  );
}