import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReturnRefundInformation9({ data }: { data: any }) {
  const [isShredding, setIsShredding] = useState(false);

  const startShredding = () => {
    if(isShredding) return;
    setIsShredding(true);
    setTimeout(() => setIsShredding(false), 3000);
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-orange-50 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-900">Cancel Anytime</h2>
        <p className="text-orange-600/70">Click the receipt to void your order instantly.</p>
      </div>

      <div className="relative w-full max-w-xs h-80 flex flex-col items-center">
        
        {/* Receipt Container */}
        <div className="absolute top-0 w-48 h-64 overflow-hidden z-10 cursor-pointer" onClick={startShredding}>
          <motion.div 
            className="w-full h-full bg-white shadow-md border-t-8 border-dashed border-neutral-200 p-4 font-mono text-xs flex flex-col"
            animate={{ y: isShredding ? 200 : 0 }}
            transition={{ duration: 1.5, ease: "linear" }}
          >
            <div className="text-center font-bold text-lg mb-4 border-b pb-2">RECEIPT</div>
            <div className="flex justify-between mb-2"><span>ITEM A</span><span>$49.99</span></div>
            <div className="flex justify-between mb-2"><span>ITEM B</span><span>$29.99</span></div>
            <div className="mt-auto border-t pt-2 flex justify-between font-bold"><span>TOTAL</span><span>$79.98</span></div>
            
            {/* Red Void Stamp */}
            <AnimatePresence>
              {isShredding && (
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ scale: 3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, rotate: -15 }}
                >
                  <span className="text-red-500 font-black text-4xl border-4 border-red-500 p-2 opacity-80">VOID</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Shredder Machine */}
        <div className="absolute bottom-0 w-64 h-32 bg-neutral-800 rounded-t-2xl z-20 shadow-2xl flex flex-col items-center border-t-4 border-neutral-700">
           {/* Shredder Slot */}
           <div className="w-48 h-2 bg-black rounded-full mt-4 shadow-inner" />
           <div className="mt-4 px-4 py-1 bg-red-500/20 text-red-400 font-mono text-xs rounded uppercase tracking-widest flex items-center gap-2">
             <div className={`w-2 h-2 rounded-full ${isShredding ? 'bg-red-500 animate-pulse' : 'bg-neutral-600'}`} />
             Destroy
           </div>
        </div>

        {/* Shredded Pieces falling out bottom */}
        {isShredding && (
          <div className="absolute -bottom-16 w-48 flex justify-between z-30">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-16 bg-white shadow-sm"
                initial={{ y: -50, opacity: 0, rotate: 0 }}
                animate={{ y: 150, opacity: [0, 1, 0], rotate: (Math.random() - 0.5) * 45 }}
                transition={{ duration: 1.5, delay: 1 + (i * 0.1), ease: "easeOut" }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
