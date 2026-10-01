import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreeShippingProgress18({ data }: { data?: any }) {
  const settings = data?.section?.settings || { currency: "₹", currentValue: 2400, threshold: 3000, achieved: false };
  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);

  return (
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <motion.div 
        animate={{ scale: isUnlocked ? 1.03 : 1 }}
        className={`w-full max-w-xl rounded-3xl p-8 shadow-2xl transition-all border text-center relative ${
          isUnlocked ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-400' : 'bg-white text-slate-900 border-slate-200'
        }`}
      >
        <button onClick={() => setIsUnlocked(!isUnlocked)} className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-800">
          Toggle State
        </button>
        <span className="text-xs font-mono font-bold uppercase block mb-4">18 / ACHIEVEMENT TRANSFORMATION</span>
        <h2 className="text-3xl font-black mb-2">{isUnlocked ? "🎉 FREE SHIPPING UNLOCKED!" : "Add ₹600 to Unlock"}</h2>
      </motion.div>
    </div>
  );
}