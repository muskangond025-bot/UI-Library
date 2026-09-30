import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation11({ data }: { data: any }) {
  const [isSplitting, setIsSplitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSplitting(s => !s);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-neutral-950 to-neutral-950 pointer-events-none" />

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Split Pay</h2>
        <p className="text-indigo-400 font-bold tracking-widest text-sm mt-2">INTEREST-FREE INSTALLMENTS</p>
      </div>

      <div className="w-full max-w-md h-40 bg-neutral-900/50 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(79,70,229,0.15)] border border-white/10 flex items-center justify-center relative z-10">
        <motion.div 
          className="text-5xl font-black text-white absolute tracking-tighter"
          animate={{ opacity: isSplitting ? 0 : 1, scale: isSplitting ? 0.8 : 1, filter: isSplitting ? "blur(10px)" : "blur(0px)" }}
          transition={{ duration: 0.5 }}
        >
          $100.00
        </motion.div>

        <div className="flex gap-4 absolute">
          {[1, 2, 3, 4].map((num) => (
            <motion.div
              key={num}
              className="w-20 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center font-bold text-white shadow-2xl border border-white/20"
              initial={{ scale: 0, opacity: 0, x: 0, rotateY: 90 }}
              animate={isSplitting ? { scale: 1, opacity: 1, x: (num - 2.5) * 24, rotateY: 0 } : { scale: 0.5, opacity: 0, x: 0, rotateY: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: isSplitting ? num * 0.1 : 0 }}
            >
              <span className="text-xs opacity-60 mb-1">Pay {num}</span>
              <span className="text-xl">$25</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-indigo-500 blur-[1px]"
          animate={{
            y: [-20, -100],
            x: Math.sin(i) * 50,
            opacity: [0, 1, 0],
            scale: [0, 2, 0]
          }}
          transition={{ repeat: Infinity, duration: 2 + i, delay: i * 0.5 }}
          style={{ left: `${20 + i * 15}%`, bottom: "20%" }}
        />
      ))}
    </div>
  );
}
