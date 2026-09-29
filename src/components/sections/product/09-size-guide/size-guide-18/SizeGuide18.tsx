import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SizeGuide18({ data }: { data: any }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-[150%] object-cover object-top opacity-30"
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl w-full px-6 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black text-white leading-none mix-blend-overlay"
          >
            PERFECT<br/>FIT.
          </motion.h2>
        </div>

        <div className="md:w-1/2 w-full space-y-4">
          {['SMALL 36"', 'MEDIUM 38"', 'LARGE 40"', 'X-LARGE 42"'].map((size, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, type: "spring" }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white font-bold text-2xl tracking-widest uppercase hover:bg-white/20 transition-colors cursor-pointer"
            >
              {size}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
