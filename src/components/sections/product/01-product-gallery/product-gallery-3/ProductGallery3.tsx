import React from 'react';
import { motion } from 'framer-motion';

// Infinite Marquee Gallery inspired by the PDF & Infinite Menu requirements
export default function ProductGallery3({ data }: { data: any }) {
  const baseImages = data?.settings?.images || [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];
  const images = [...baseImages, ...baseImages, ...baseImages];

  return (
    <div className="w-full py-16 overflow-hidden bg-gray-50 flex flex-col gap-8">
      <div className="text-center px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Immersive Views</h3>
        <p className="text-gray-500">Explore our product from every angle in high definition.</p>
      </div>
      
      <div className="relative w-full overflow-hidden flex" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <motion.div 
          className="flex gap-6 px-3"
          animate={{ x: [0, -1920] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {images.map((img: string, idx: number) => (
            <div key={idx} className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] shrink-0 rounded-3xl overflow-hidden relative group">
              <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Marquee item" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">Zoom In</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}