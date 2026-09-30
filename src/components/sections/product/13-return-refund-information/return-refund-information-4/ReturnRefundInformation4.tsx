import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnRefundInformation4({ data }: { data: any }) {
  const words = ["FREE", "FAST", "SIMPLE", "FAIR"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[#f4f4f0] flex flex-col items-center justify-center relative overflow-hidden">
      <p className="absolute top-12 left-12 font-mono text-sm uppercase tracking-widest text-neutral-400">Our Policy</p>
      
      <div className="text-center">
        <h2 className="text-[120px] font-black text-neutral-900 leading-none tracking-tighter">
          RETURNS<br />MADE
        </h2>
        
        <div className="h-[120px] relative overflow-hidden mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: -80, opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full flex justify-center origin-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-[120px] font-black text-blue-600 leading-none tracking-tighter italic">
                {words[index]}.
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
