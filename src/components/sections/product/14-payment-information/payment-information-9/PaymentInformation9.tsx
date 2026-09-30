import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation9({ data }: { data: any }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 0;
        return p + Math.random() * 15;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const clampedProgress = Math.min(progress, 100);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden font-mono">
      
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50" />
      
      <div className="relative z-10 w-full max-w-md border border-emerald-900 bg-black p-6 rounded-lg shadow-[0_0_50px_rgba(52,211,153,0.1)]">
        
        <div className="flex justify-between items-center mb-6 border-b border-emerald-900 pb-2">
          <span className="text-emerald-500 text-sm">&gt; SECURE_PAY_TERM</span>
          <span className="text-emerald-500/50 text-xs">v2.4.1</span>
        </div>

        <div className="space-y-2 text-emerald-400 text-sm mb-8">
          <div>&gt; INITIALIZING HANDSHAKE... OK</div>
          <div>&gt; EXCHANGING KEYS... OK</div>
          <div>&gt; ENCRYPTING PAYLOAD...</div>
          {clampedProgress >= 100 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white font-bold bg-emerald-600 inline-block px-2 mt-2">
              &gt; TRANSACTION SECURED
            </motion.div>
          )}
        </div>

        <div className="w-full h-4 border border-emerald-800 p-[2px]">
          <motion.div 
            className="h-full bg-emerald-500"
            animate={{ width: `${clampedProgress}%` }}
            transition={{ ease: "linear", duration: 0.5 }}
          />
        </div>
        
        <div className="mt-2 text-right text-xs text-emerald-600">
          {clampedProgress.toFixed(1)}% / 100%
        </div>

      </div>
    </div>
  );
}
