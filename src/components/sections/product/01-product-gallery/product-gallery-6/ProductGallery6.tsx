import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery6({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
  ];

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 flex flex-col justify-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Design in the Details.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500"
          >
            Discover the intricate craftsmanship and premium materials that make our product stand out from the rest.
          </motion.p>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-2 gap-4">
          {images.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`rounded-2xl overflow-hidden ${idx % 3 === 0 ? 'col-span-2 aspect-[21/9]' : 'aspect-square'}`}
            >
              <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery detail" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}