import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, RefreshCw, Stamp, Lock, CheckCircle2 } from 'lucide-react';

export function CheckoutSecurityTrust13({ data }: { data?: any }) {
  const [stampKey, setStampKey] = useState(0);
  const [stamping, setStamping] = useState(false);

  const handleReStamp = () => {
    setStamping(true);
    setStampKey((prev) => prev + 1);
    setTimeout(() => setStamping(false), 500);
  };

  return (
    <div className="w-full max-w-md mx-auto my-6 p-8 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 font-mono shadow-2xl relative overflow-hidden text-center">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-dashed border-stone-700 mb-6">
        <div className="text-left">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">AUTHENTICATION RECEIPT</span>
          <h4 className="text-sm font-bold text-stone-200">CHECKOUT SECURITY GUARANTEE</h4>
        </div>
        <button
          onClick={handleReStamp}
          className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-emerald-400 text-xs font-semibold border border-stone-700 transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${stamping ? 'animate-spin' : ''}`} />
          Re-Stamp
        </button>
      </div>

      {/* Interactive Stamp Container */}
      <div 
        onClick={handleReStamp}
        className="cursor-pointer py-4 relative my-2 min-h-[100px] flex items-center justify-center group"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={stampKey}
            initial={{ scale: 2.5, opacity: 0, rotate: -18, filter: 'blur(4px)' }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotate: -5, 
              filter: 'blur(0px)',
              x: [0, -3, 3, -2, 2, 0]
            }}
            transition={{
              type: 'spring',
              stiffness: 450,
              damping: 20,
              mass: 0.8
            }}
            className="p-5 rounded-2xl border-4 border-emerald-500 bg-emerald-950/40 text-emerald-400 font-extrabold tracking-widest shadow-[0_0_25px_rgba(16,185,129,0.3)] relative text-center select-none"
          >
            {/* Rubber Stamp Texture Border Overlay */}
            <div className="absolute inset-0 rounded-xl border border-emerald-400/40 m-1 pointer-events-none" />
            
            <div className="flex items-center justify-center gap-2 text-base uppercase">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 stroke-[3]" />
              <span>100% SECURE CHECKOUT VERIFIED</span>
            </div>

            <div className="mt-1 flex items-center justify-center gap-3 text-[10px] text-emerald-300 font-bold tracking-widest border-t border-emerald-500/30 pt-1.5">
              <span>REF: SEC-9982-X</span>
              <span>•</span>
              <span>AES-256 ENCRYPTED</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-4 border-t border-dashed border-stone-800 flex justify-between items-center text-[11px] text-stone-400">
        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" /> Buyer Guarantee Active
        </span>
        <span className="font-mono text-[10px] opacity-70">Click stamp to re-apply</span>
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust13;
