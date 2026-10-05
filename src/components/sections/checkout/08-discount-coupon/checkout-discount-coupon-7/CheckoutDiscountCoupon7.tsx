import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle, Layers
} from 'lucide-react';

export function CheckoutDiscountCoupon7({ data }: { data?: any }) {
  const [unstacked, setUnstacked] = useState(false);
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const cards = [
    { code: 'SPRING2026', title: '$100 OFF SPRING PROMO', desc: 'Valid on orders over $500', bg: 'bg-indigo-900/90 border-indigo-500/50 hover:border-indigo-400' },
    { code: 'FREESHIP', title: 'FREE EXPRESS SHIPPING', desc: 'Complimentary air delivery', bg: 'bg-teal-900/90 border-teal-500/50 hover:border-teal-400' },
    { code: 'VIP20', title: '20% EXTRA DISCOUNTS', desc: 'Exclusive member reward', bg: 'bg-purple-900/90 border-purple-500/50 hover:border-purple-400' }
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="mb-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">INTERACTIVE STACK</span>
        <h3 className="text-xl font-bold text-white">Coupon Card Stack</h3>
        <button 
          onClick={() => setUnstacked(!unstacked)} 
          className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold mt-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 transition-colors"
        >
          {unstacked ? <><ChevronUp className="w-3.5 h-3.5" /> Collapse Card Stack</> : <><Layers className="w-3.5 h-3.5" /> Click Card Stack to Unstack ({cards.length})</>}
        </button>
      </div>

      <motion.div 
        layout
        onClick={() => setUnstacked(!unstacked)}
        className={`relative cursor-pointer transition-all duration-300 ${unstacked ? 'space-y-4 pb-2' : 'min-h-[160px] sm:min-h-[180px] flex justify-center items-center'}`}
      >
        {cards.map((c, idx) => {
          const isApplied = appliedCode === c.code;
          return (
            <motion.div
              key={idx}
              layout
              initial={false}
              animate={{ 
                y: unstacked ? 0 : idx * 12, 
                rotate: unstacked ? 0 : (idx - 1) * -4,
                scale: unstacked ? 1 : 1 - idx * 0.03,
                opacity: 1 
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => {
                e.stopPropagation();
                if (unstacked) {
                  setAppliedCode(isApplied ? null : c.code);
                } else {
                  setUnstacked(true);
                }
              }}
              className={`p-5 rounded-2xl border text-left shadow-xl transition-all ${c.bg} ${unstacked ? 'relative w-full' : 'absolute w-full max-w-md'} ${isApplied ? 'ring-2 ring-emerald-400 border-emerald-400' : ''}`}
              style={{ zIndex: unstacked ? 1 : 10 - idx }}
            >
              <div className="flex justify-between items-center text-xs text-white mb-1">
                <span className="font-mono font-bold bg-black/40 px-2.5 py-1 rounded-lg text-amber-300 border border-amber-500/30">{c.code}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isApplied ? 'bg-emerald-500 text-black' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'}`}>
                  {isApplied ? '✓ APPLIED' : 'AVAILABLE'}
                </span>
              </div>
              <h4 className="text-base font-extrabold text-white mt-2">{c.title}</h4>
              <p className="text-xs text-slate-300 mt-0.5">{c.desc}</p>
              
              {unstacked && (
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-slate-300 text-[11px]">Click card to apply discount</span>
                  <span className={`font-bold ${isApplied ? 'text-emerald-400' : 'text-amber-300 hover:underline'}`}>
                    {isApplied ? 'Applied ✓' : 'Apply Code →'}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {appliedCode && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-3 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-xs flex justify-between items-center text-emerald-300"
        >
          <span>Active Discount Code: <strong className="font-mono text-white">{appliedCode}</strong></span>
          <button onClick={() => setAppliedCode(null)} className="text-slate-400 hover:text-white underline">Remove</button>
        </motion.div>
      )}
    </div>
  );
}
export default CheckoutDiscountCoupon7;
