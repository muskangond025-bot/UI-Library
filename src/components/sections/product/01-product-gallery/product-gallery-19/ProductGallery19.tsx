import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery19({ data }: { data: any }) {
  const images = data?.settings?.images || [];

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.slice(0, 4).map((img: string, idx: number) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="aspect-square relative flex items-center justify-center bg-gray-50 rounded-full group overflow-hidden transition-all duration-500 hover:rounded-2xl"
        >
          <img 
            src={img} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100" 
            alt="Circle Reveal" 
          />
        </motion.div>
      ))}
    </div>
  );
}