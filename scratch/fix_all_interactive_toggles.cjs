const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/cart/05-free-shipping-progress');

// 19: VISUAL ROUTE PATH
const code19 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle2, MapPin, Store } from 'lucide-react';

export default function FreeShippingProgress19({ data }: { data?: any }) {
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
    <div className="w-full py-16 px-4 bg-slate-50 flex flex-col items-center font-sans">
      <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden">
        {/* Toggle Button */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            19 / VISUAL ROUTE PATH
          </span>
          <button 
            onClick={() => setIsUnlocked(!isUnlocked)}
            className="text-xs font-semibold px-4 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-md"
          >
            Click to Toggle State: {isUnlocked ? "Unlocked (100%)" : "In-Progress (80%)"}
          </button>
        </div>

        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="text-2xl font-black text-slate-900 mb-2">
            {isUnlocked ? settings.unlockedMessage : settings.remainingMessage}
          </h3>
          <p className="text-sm text-slate-500">
            {isUnlocked 
              ? "Your cart delivery vehicle has arrived at 100% Free Shipping status!" 
              : \`Vehicle is currently at \${pct}% distance (\${settings.currency}\${current} of \${settings.currency}\${settings.threshold}).\`}
          </p>
        </div>

        {/* Visual Route Path Canvas */}
        <div className="relative py-12 px-6 bg-slate-50 rounded-2xl border border-slate-200/80 my-4">
          <div className="relative flex items-center justify-between z-10">
            {/* Start Node */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-slate-300 flex items-center justify-center text-slate-700 shadow-sm">
                <Store className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-700 mt-2">YOUR CART</span>
              <span className="text-[11px] font-mono text-slate-400">{settings.currency}0</span>
            </div>

            {/* Destination Node */}
            <div className="flex flex-col items-center">
              <div className={\`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 \${
                isUnlocked ? 'bg-emerald-500 text-white shadow-emerald-500/30 rotate-12 scale-110' : 'bg-white border-2 border-slate-300 text-slate-400'
              }\`}>
                {isUnlocked ? <CheckCircle2 className="w-6 h-6" /> : <MapPin className="w-6 h-6" />}
              </div>
              <span className={\`text-xs font-bold mt-2 \${isUnlocked ? 'text-emerald-700' : 'text-slate-500'}\`}>
                FREE SHIPPING
              </span>
              <span className="text-[11px] font-mono text-slate-400">{settings.currency}{settings.threshold}</span>
            </div>
          </div>

          {/* Dotted Route Track */}
          <div className="absolute top-1/2 left-16 right-16 h-1.5 bg-slate-200 -translate-y-1/2 rounded-full z-0 overflow-hidden">
            <motion.div 
              className="h-full bg-emerald-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: \`\${pct}%\` }}
              transition={{ duration: 1 }}
            />
          </div>

          {/* Animated Delivery Truck traveling on path */}
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 z-20"
            initial={{ left: '15%' }}
            animate={{ left: isUnlocked ? '82%' : '65%' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center shadow-xl border border-slate-700 -translate-x-1/2">
              <Truck className="w-5 h-5" />
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mt-4 px-2">
          <span>Current: {settings.currency}{current}</span>
          <span>Target: {settings.currency}{settings.threshold}</span>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(
  path.join(baseDir, 'free-shipping-progress-19', 'FreeShippingProgress19.tsx'),
  code19,
  'utf8'
);

console.log("Variant 19 updated with interactive visual route path!");
