import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function PaymentInformation14({ data }: { data: any }) {
  const [scratched, setScratched] = useState(false);

  // Auto-scratch for demo if user doesn't interact
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!scratched) setScratched(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [scratched]);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Animated beams background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ background: 'conic-gradient(from 0deg at 50% 50%, #f43f5e, #fbbf24, #f43f5e)' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-3xl" />

      <div className="text-center mb-12 z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest drop-shadow-lg">Promo Reveal</h2>
        <p className="text-rose-400 font-bold mt-2 text-sm tracking-widest uppercase flex items-center justify-center gap-2">
          <Sparkles size={16} /> Scratch to win <Sparkles size={16} />
        </p>
      </div>

      <motion.div 
        className="w-full max-w-sm h-48 rounded-2xl relative cursor-crosshair overflow-hidden group border-4 border-rose-500/50 shadow-[0_0_50px_rgba(244,63,94,0.3)] z-10"
        onClick={() => setScratched(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Hidden Code */}
        <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center text-center p-6">
          <span className="text-rose-500 font-bold mb-2 uppercase tracking-[0.3em] text-xs">Winning Code:</span>
          <motion.span 
            className="text-5xl font-black text-white tracking-widest font-mono drop-shadow-[0_0_20px_rgba(244,63,94,0.8)]"
            animate={scratched ? { scale: [1, 1.1, 1], opacity: [0, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            SAVE20
          </motion.span>
        </div>

        {/* Scratch Layer */}
        <AnimatePresence>
          {!scratched && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-100 to-neutral-400 flex items-center justify-center flex-wrap gap-1 p-2"
              exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)", rotate: 10 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
               {/* Holographic sweep */}
               <motion.div 
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[200%]"
                 animate={{ x: ["-100%", "100%"] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               />
               <span className="absolute text-neutral-800 font-black text-3xl uppercase tracking-widest drop-shadow-xl z-10 flex items-center gap-2">
                 SCRATCH
               </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {scratched && (
        <motion.button 
          className="mt-12 z-10 text-xs font-bold text-neutral-500 uppercase tracking-widest hover:text-white border border-neutral-700 px-6 py-2 rounded-full"
          onClick={() => setScratched(false)}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          Reset Card
        </motion.button>
      )}
    </div>
  );
}
