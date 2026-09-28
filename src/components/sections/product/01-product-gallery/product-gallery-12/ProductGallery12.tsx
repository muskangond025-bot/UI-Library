import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery12({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  const marqueeImages = [...images, ...images, ...images];

  return (
    <div className="w-full py-12 overflow-hidden bg-white">
      <div className="flex w-full overflow-hidden">
        <motion.div 
          className="flex gap-6 px-3"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {marqueeImages.map((img: string, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative w-64 h-80 shrink-0 rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all"
            >
              <img src={img} className="w-full h-full object-cover" alt="Marquee Item" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-medium">Quick View</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}