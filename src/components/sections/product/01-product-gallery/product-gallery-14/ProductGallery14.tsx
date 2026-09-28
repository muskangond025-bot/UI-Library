import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery14({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  
  return (
    <div className="w-full max-w-5xl mx-auto h-[600px] overflow-hidden rounded-[3rem] bg-gray-50 flex gap-4 p-4">
      <motion.div 
        className="flex-1 flex flex-col gap-4"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...images, ...images].map((img: string, idx: number) => (
          <div key={idx} className="w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
            <img src={img} className="w-full h-full object-cover" alt="Col 1" />
          </div>
        ))}
      </motion.div>
      <motion.div 
        className="flex-1 flex flex-col gap-4"
        animate={{ y: ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...images, ...images].reverse().map((img: string, idx: number) => (
          <div key={idx} className="w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
            <img src={img} className="w-full h-full object-cover" alt="Col 2" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}