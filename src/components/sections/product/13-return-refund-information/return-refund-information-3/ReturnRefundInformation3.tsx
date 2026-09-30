import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnRefundInformation3({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-[500px] rounded-3xl bg-neutral-900 flex items-center justify-center relative overflow-hidden">
      
      {/* Hidden Content (Revealed when portal opens) */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 z-0">
        <h2 className="text-4xl font-bold text-neutral-900 mb-6">Return Initiated.</h2>
        <p className="text-neutral-500 max-w-md text-center mb-8">
          Please check your email for the return shipping label. Print it out and attach it to your package.
        </p>
        <button 
          className="px-8 py-4 bg-neutral-900 text-white rounded-full font-bold hover:bg-neutral-800 transition"
          onClick={() => setIsOpen(false)}
        >
          Cancel Return
        </button>
      </div>

      {/* Left Door */}
      <motion.div 
        className="absolute top-0 left-0 w-1/2 h-full bg-neutral-900 z-10 border-r border-neutral-800 flex items-center justify-end pr-4 shadow-2xl origin-left"
        initial={false}
        animate={{ x: isOpen ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className="w-1 h-32 bg-neutral-800 rounded-full" />
      </motion.div>

      {/* Right Door */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-neutral-900 z-10 border-l border-neutral-800 flex items-center justify-start pl-4 shadow-2xl origin-right"
        initial={false}
        animate={{ x: isOpen ? "100%" : "0%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className="w-1 h-32 bg-neutral-800 rounded-full" />
      </motion.div>

      {/* Trigger Button (Sits on top until clicked) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="absolute z-20 px-8 py-4 bg-white text-neutral-900 rounded-full font-black text-xl tracking-widest uppercase hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            onClick={() => setIsOpen(true)}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            Start Return
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
