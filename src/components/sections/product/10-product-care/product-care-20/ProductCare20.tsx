import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { MotionValue } from 'framer-motion';

export default function ProductCare20({ data }: { data: any }) {
  const content = [
    "STORE FLAT",
    "DO NOT HANG",
    "AVOID MOISTURE",
    "BRUSH GENTLY"
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative top bar */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-400 to-blue-500 origin-left z-50 rounded-t-3xl"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="w-full max-w-4xl px-4 py-20 space-y-20 relative z-10">
        {content.map((text, i) => (
          <motion.div 
            key={i}
            className="flex justify-center"
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            viewport={{ margin: "-10%" }}
          >
            <motion.h2 
              className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-600 tracking-tighter"
              whileHover={{ scale: 1.05, textShadow: "0px 0px 20px rgba(255,255,255,0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {text}
            </motion.h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
