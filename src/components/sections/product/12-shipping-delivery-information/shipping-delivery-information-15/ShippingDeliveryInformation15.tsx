import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

export default function ShippingDeliveryInformation15({ data }: { data: any }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, 200], [1, 0]);
  const background = useTransform(x, [0, 250], ["#f1f5f9", "#10b981"]);
  const color = useTransform(x, [0, 250], ["#0f172a", "#ffffff"]);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 200) {
      setIsConfirmed(true);
    }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-slate-900 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Secure Reception</h2>
        <p className="text-slate-400">Swipe to simulate confirming delivery receipt.</p>
      </div>

      <div className="relative w-full max-w-sm h-20 rounded-full bg-slate-800 shadow-inner overflow-hidden border border-slate-700 p-2">
        {/* Success State */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center font-bold text-lg text-emerald-400 z-0 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: isConfirmed ? 1 : 0 }}
        >
          <Check className="mr-2" /> Delivery Confirmed
        </motion.div>

        {/* Draggable Button */}
        {!isConfirmed && (
          <motion.div
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing relative z-20"
            drag="x"
            dragConstraints={{ left: 0, right: 280 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            style={{ x }}
          >
            <ChevronRight className="text-slate-900" size={28} />
          </motion.div>
        )}
        
        {/* Swipe Text */}
        {!isConfirmed && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 font-medium text-slate-400 tracking-wider pl-8"
            style={{ opacity }}
          >
            SWIPE TO CONFIRM
          </motion.div>
        )}
      </div>
      
      {isConfirmed && (
        <button 
          onClick={() => { setIsConfirmed(false); x.set(0); }}
          className="mt-8 text-sm text-slate-500 hover:text-white transition-colors"
        >
          Reset Simulation
        </button>
      )}
    </div>
  );
}
