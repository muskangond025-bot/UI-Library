const fs = require('fs');
const path = require('path');

const code20 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function FreeShippingProgress20({ data }: { data?: any }) {
  const settings = data?.section?.settings || { 
    currency: "₹", 
    currentValue: 2400, 
    threshold: 3000, 
    remainingMessage: "Add ₹600 more to unlock FREE shipping",
    unlockedMessage: "🎉 Free Shipping Unlocked!",
    achieved: false 
  };

  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-slate-100 via-emerald-50/50 to-teal-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-2xl border border-white/80 rounded-3xl p-8 md:p-12 shadow-2xl shadow-emerald-500/10 relative overflow-hidden">
        {/* Ambient Glass Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex justify-between items-center mb-8 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            20 / EXPERIMENTAL AWARD-LEVEL GLASSMORTIC
          </span>
          <button 
            onClick={() => setIsUnlocked(!isUnlocked)}
            className="text-xs font-bold px-4 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-md"
          >
            Click to Toggle State ({isUnlocked ? "100%" : "80%"})
          </button>
        </div>

        <div className="text-center relative z-10 my-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3 border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>DIMENSIONAL PROGRESS WAVE</span>
          </div>

          <motion.h2 
            key={current}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-2"
          >
            {isUnlocked ? "FREE SHIPPING UNLOCKED" : \`\${settings.currency}\${remaining} AWAY\`}
          </motion.h2>

          <p className="text-sm md:text-base text-slate-600 max-w-md mx-auto mb-8">
            {isUnlocked 
              ? "Zero delivery fees applied across your order cart." 
              : \`You have completed \${pct}% of the threshold. Add \${settings.currency}\${remaining} more items.\`}
          </p>
        </div>

        {/* Liquid Glass Wave Progress Container */}
        <div className="relative w-full h-6 bg-slate-200/50 backdrop-blur-md rounded-full overflow-hidden border border-white/60 p-1 mb-8 relative z-10">
          <motion.div 
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 rounded-full relative shadow-inner"
            initial={{ width: '0%' }}
            animate={{ width: \`\${pct}%\` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.25)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.25)_75%,transparent_75%)] bg-[length:1rem_1rem] animate-[stripe_2s_linear_infinite]" />
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>Cart Status: <strong className="text-slate-900">{pct}% Reached</strong></span>
          </div>
          <a href="/shop" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-600/20">
            <span>{isUnlocked ? "Continue Shopping" : \`Add \${settings.currency}\${remaining} Items\`}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
`;

const targetFile = path.join(__dirname, '../src/components/sections/cart/05-free-shipping-progress/free-shipping-progress-20/FreeShippingProgress20.tsx');
fs.writeFileSync(targetFile, code20, 'utf8');
console.log("Variant 20 enhanced!");
