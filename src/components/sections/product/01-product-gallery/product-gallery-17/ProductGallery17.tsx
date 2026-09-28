import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductGallery17({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -150]);

  return (
    <div ref={containerRef} className="w-full h-[600px] relative bg-white overflow-hidden rounded-[3rem]">
      {images[0] && (
        <motion.div style={{ y: y1 }} className="absolute top-10 left-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl">
          <img src={images[0]} className="w-full h-full object-cover" alt="Float 1" />
        </motion.div>
      )}
      {images[1] && (
        <motion.div style={{ y: y2 }} className="absolute top-40 right-20 w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
          <img src={images[1]} className="w-full h-full object-cover" alt="Float 2" />
        </motion.div>
      )}
      {images[2] && (
        <motion.div style={{ y: y3 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 w-72 h-64 rounded-[2rem] overflow-hidden shadow-2xl">
          <img src={images[2]} className="w-full h-full object-cover" alt="Float 3" />
        </motion.div>
      )}
    </div>
  );
}