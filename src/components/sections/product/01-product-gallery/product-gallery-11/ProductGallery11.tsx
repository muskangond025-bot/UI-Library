import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery11({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80',
    'https://images.unsplash.com/photo-1546435770-a3e426fa03bd?w=1200&q=80',
    'https://images.unsplash.com/photo-1583394838173-6143b40d6cda?w=1200&q=80'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {images.slice(0, 5).map((img: string, idx: number) => {
          let spanClasses = 'col-span-1 row-span-1';
          if (idx === 0) spanClasses = 'md:col-span-2 md:row-span-2';
          if (idx === 3) spanClasses = 'md:col-span-2 md:row-span-1';
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className={`relative overflow-hidden rounded-3xl group ${spanClasses} bg-gray-100`}
            >
              <img 
                src={img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Bento Item"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}