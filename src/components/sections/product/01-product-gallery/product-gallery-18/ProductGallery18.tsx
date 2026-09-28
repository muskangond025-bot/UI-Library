import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery18({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto h-[500px] flex gap-2 overflow-hidden rounded-[2rem]">
      {images.slice(0, 5).map((img: string, idx: number) => (
        <motion.div
          key={idx}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            flex: hovered === idx ? 4 : hovered === null ? 1 : 0.5
          }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="relative h-full overflow-hidden cursor-pointer rounded-2xl"
        >
          <img 
            src={img} 
            className="absolute inset-0 w-full h-full object-cover min-w-[200px]"
            style={{ objectPosition: 'center' }}
            alt="Accordion Item"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      ))}
    </div>
  );
}