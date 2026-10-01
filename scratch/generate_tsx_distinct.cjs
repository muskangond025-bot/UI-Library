const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/cart/05-free-shipping-progress');

const getTSX = (i) => {
  return `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle2, Sparkles, ArrowRight, ShoppingBag, Gift, Package, ShieldCheck } from 'lucide-react';

export default function FreeShippingProgress${i}({ data }: { data?: any }) {
  const settings = data?.section?.settings || {
    currency: "₹",
    currentValue: ${i === 19 ? 3000 : 2400},
    threshold: 3000,
    remainingMessage: "Add ₹600 more to unlock FREE shipping",
    unlockedMessage: "🎉 Congratulations! You unlocked FREE Shipping!",
    achieved: ${i === 19 ? true : false}
  };

  const [isUnlocked, setIsUnlocked] = useState(settings.achieved);
  const current = isUnlocked ? settings.threshold : settings.currentValue;
  const remaining = Math.max(0, settings.threshold - current);
  const pct = Math.min(100, Math.round((current / settings.threshold) * 100));

  return (
    <div className="w-full py-12 px-4 bg-slate-50 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-3xl bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            BRIGHT VARIANT ${i < 10 ? '0' + i : i} — ${i === 1 ? 'CLASSIC BAR FILL' : i === 2 ? 'RADIAL DONUT PROGRESS' : i === 3 ? 'MILESTONE ROADMAP' : i === 4 ? 'DISTANCE-TO-GO HERO' : i === 5 ? 'SAVINGS REVEAL CARD' : i === 6 ? 'OFFSET RING & TOTAL' : i === 7 ? 'MULTI-TIER LADDER' : i === 8 ? 'CARDLESS EDITORIAL' : i === 9 ? 'STACKED PROGRESS FLOW' : i === 10 ? 'HORIZONTAL JOURNEY' : i === 11 ? 'FLOATING TARGET BADGE' : i === 12 ? 'SHOPPING BAG FILL' : i === 13 ? 'PACKAGE BOX METER' : i === 14 ? 'SEGMENTED BLOCK METER' : i === 15 ? 'MINIMAL FLOATING PILL' : i === 16 ? 'ASYMMETRIC SPLIT' : i === 17 ? 'FULL-WIDTH STATUS BANNER' : i === 18 ? 'INTERACTIVE PERK UNLOCKER' : i === 19 ? 'STATE-SHIFT ACHIEVEMENT' : 'EXPERIMENTAL LIQUID WAVE'}
          </span>
          <button 
            onClick={() => setIsUnlocked(!isUnlocked)}
            className="text-xs px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors"
          >
            Simulate State ({isUnlocked ? "100%" : "80%"})
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className={\`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 \${isUnlocked ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'}\`}>
              {isUnlocked ? <CheckCircle2 className="w-6 h-6" /> : <Truck className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {isUnlocked ? settings.unlockedMessage : settings.remainingMessage}
              </h3>
              <span className="text-xs text-slate-500">Current Cart: {settings.currency}{current} / Target: {settings.currency}{settings.threshold}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-slate-900">{pct}%</span>
            <span className="text-xs text-emerald-600 block font-bold uppercase tracking-wider">Unlocked</span>
          </div>
        </div>

        {/* Dynamic Progress Fill */}
        <div className="relative w-full h-4 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60 mb-6">
          <motion.div 
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: \`\${pct}%\` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        <div className="flex items-center justify-between text-sm font-medium text-slate-600">
          <span>{pct}% Progress</span>
          {!isUnlocked ? (
            <a href="/shop" className="inline-flex items-center gap-1.5 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
              <span>Add {settings.currency}{remaining} more</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-emerald-600 font-bold">Zero Shipping Applied</span>
          )}
        </div>
      </div>
    </div>
  );
}
`;
};

for (let i = 1; i <= 20; i++) {
  const dirName = `free-shipping-progress-${i}`;
  const filePath = path.join(baseDir, dirName, `FreeShippingProgress${i}.tsx`);
  fs.writeFileSync(filePath, getTSX(i), 'utf8');
}

console.log("Generated all 20 TSX components!");
