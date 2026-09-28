import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductGallery7({ data }: { data: any }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#0a0a0a] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">A Closer Look</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Parallax scrolling gallery that reveals every stunning detail.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div style={{ y: y1 }} className="space-y-8 md:space-y-16">
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img src={images[0]} className="w-full h-full object-cover" alt="Image 1" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src={images[2]} className="w-full h-full object-cover" alt="Image 3" />
            </div>
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="space-y-8 md:space-y-16 md:mt-32">
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src={images[1]} className="w-full h-full object-cover" alt="Image 2" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img src={images[3]} className="w-full h-full object-cover" alt="Image 4" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}