import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WarrantyInformation2({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div ref={containerRef} className="p-8 min-h-[600px] rounded-3xl bg-orange-50 flex items-center justify-center relative overflow-hidden">
      {/* Background numbers that parallax on scroll */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute left-4 md:left-20 top-[15%] text-[12rem] md:text-[20rem] font-black text-orange-900/10 leading-none select-none"
      >
        2
      </motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute right-4 md:right-20 bottom-[15%] text-[10rem] md:text-[15rem] font-black text-orange-900/10 leading-none select-none"
      >
        YEARS
      </motion.div>

      {/* Main Content Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-lg bg-white/60 backdrop-blur-xl p-10 rounded-3xl border border-white shadow-2xl text-center"
      >
        <h3 className="text-3xl font-bold text-orange-900 mb-6">Standard Warranty</h3>
        <p className="text-orange-950/70 text-lg leading-relaxed mb-8">
          Every purchase includes a 2-year limited warranty protecting against material and workmanship defects under normal use.
        </p>
        <div className="w-full h-2 bg-orange-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-orange-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </div>
  );
}
