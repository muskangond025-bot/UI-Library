import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation19({ data }: { data: any }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 max-w-md w-full">
        <h3 className="text-xl font-bold text-zinc-800 mb-6">Support PIN</h3>
        <p className="text-zinc-500 mb-6 text-sm">
          Provide this temporary PIN when calling our warranty support line for faster service.
        </p>
        
        <div className="relative">
          <motion.div 
            className="bg-zinc-100 font-mono text-4xl text-center font-bold tracking-widest py-6 rounded-2xl text-zinc-800 cursor-pointer border-2 border-transparent hover:border-zinc-200 transition-colors"
            onClick={handleCopy}
            whileTap={{ scale: 0.98 }}
          >
            4928
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-white px-4 py-2 rounded-lg font-medium text-sm pointer-events-none"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={isCopied ? { opacity: 1, y: -40, scale: 1 } : { opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Copied!
          </motion.div>
        </div>
        
        <div className="mt-6 w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-zinc-300"
            animate={{ width: ["100%", "0%"] }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          />
        </div>
        <p className="text-xs text-center text-zinc-400 mt-2">Expires in 60 seconds</p>
      </div>
    </div>
  );
}
