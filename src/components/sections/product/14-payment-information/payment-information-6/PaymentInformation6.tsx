import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, CheckCircle2 } from 'lucide-react';

export default function PaymentInformation6({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => setSuccess(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setSuccess(false);
    }
  }, [isHovered]);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-emerald-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Tap to Pay</h2>
        <p className="text-emerald-300 font-bold">Hover phone over terminal.</p>
      </div>

      <div 
        className="relative flex flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Terminal */}
        <div className="w-32 h-16 bg-emerald-900 rounded-t-xl border-t border-x border-emerald-700 flex flex-col items-center justify-center relative z-0 mt-32">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-75" />
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-150" />
          </div>
          
          {/* NFC Waves */}
          {isHovered && !success && (
            <motion.div 
              className="absolute -top-16 w-32 h-32 rounded-full border-2 border-emerald-400"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </div>

        {/* Phone */}
        <motion.div
          className="absolute z-10 w-24 h-48 bg-black rounded-3xl border-4 border-neutral-700 shadow-2xl flex items-center justify-center overflow-hidden"
          animate={{ y: isHovered ? 40 : -40, rotateX: isHovered ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          style={{ transformOrigin: "bottom" }}
        >
          <div className="absolute inset-x-2 top-2 bottom-2 bg-neutral-900 rounded-2xl flex items-center justify-center">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div 
                  key="success"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-emerald-500 flex flex-col items-center"
                >
                  <CheckCircle2 size={40} />
                  <span className="text-xs font-bold mt-2">DONE</span>
                </motion.div>
              ) : (
                <motion.div key="ready" className="text-neutral-500">
                  <Smartphone size={32} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
