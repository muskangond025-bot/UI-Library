import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery4({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
        <motion.div 
          className="lg:col-span-2 rounded-3xl overflow-hidden relative group"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img src={images[0]} className="w-full h-full object-cover" alt="Main" />
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium">Featured</div>
        </motion.div>
        
        <div className="flex flex-col gap-6 h-full">
          {images.slice(1, 3).map((img: string, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex-1 rounded-3xl overflow-hidden relative group"
            >
              <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Secondary" />
              {idx === 1 && images.length > 3 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-black/50 transition-colors">
                  <span className="text-white text-xl font-bold">+{images.length - 3} More</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}