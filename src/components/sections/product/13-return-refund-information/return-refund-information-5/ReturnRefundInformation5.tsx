import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function ReturnRefundInformation5({ data }: { data: any }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const x = useMotionValue(0);
  
  const background = useTransform(
    x,
    [0, 250],
    ["#27272a", "#10b981"] // zinc-800 to emerald-500
  );

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x > 200) {
      setIsSuccess(true);
      x.set(280);
    } else {
      x.set(0);
    }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-zinc-950 flex flex-col items-center justify-center relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Instant Refunds</h2>
        <p className="text-zinc-400">Swipe below to simulate our 1-click refund process.</p>
      </div>

      <motion.div 
        className="relative w-full max-w-sm h-20 rounded-full flex items-center p-2 shadow-inner border border-zinc-800"
        style={{ background }}
      >
        {/* Success Text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl tracking-wide z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSuccess ? 1 : 0 }}
        >
          <Check className="mr-2" /> Refund Issued
        </motion.div>

        {/* Swipe Text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-zinc-500 font-bold uppercase tracking-widest z-0 pointer-events-none pl-12"
          animate={{ opacity: isSuccess ? 0 : 1 }}
        >
          Swipe to refund
        </motion.div>

        {/* Knob */}
        {!isSuccess && (
          <motion.div
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing z-10"
            drag="x"
            dragConstraints={{ left: 0, right: 280 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{ x }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="text-zinc-900" size={24} />
          </motion.div>
        )}
      </motion.div>

      {isSuccess && (
        <button 
          onClick={() => { setIsSuccess(false); x.set(0); }}
          className="mt-8 text-zinc-500 hover:text-white transition-colors text-sm underline underline-offset-4"
        >
          Reset Simulation
        </button>
      )}
    </div>
  );
}
