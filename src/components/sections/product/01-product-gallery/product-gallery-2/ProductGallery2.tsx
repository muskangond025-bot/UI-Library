import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery2({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
        {images.map((img: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`rounded-2xl overflow-hidden group relative ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
          >
            <img 
              src={img} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt={`Gallery item ${idx}`} 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100">
              <span className="text-white font-medium tracking-wider uppercase text-sm border border-white/50 px-6 py-2 rounded-full">View</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}