import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery13({ data }: { data: any }) {
  const images = data?.settings?.images || [];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-zinc-950 rounded-[3rem]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 group/grid">
        {images.slice(0, 4).map((img: string, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-2xl overflow-hidden relative group/item transition-all duration-500 hover:!blur-none hover:!opacity-100 group-hover/grid:blur-[4px] group-hover/grid:opacity-50"
          >
            <img src={img} className="w-full h-full object-cover" alt="Glass Focus" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white/90 text-sm font-medium tracking-widest uppercase">Inspect</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}