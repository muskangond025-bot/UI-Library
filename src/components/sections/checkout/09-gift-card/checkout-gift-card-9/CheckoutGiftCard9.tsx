import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard9({ data }: { data?: any }) {
  const [selected, setSelected] = useState(1);
  const cards = [
    { title: '$50 CARD', code: 'GC-50-2026', bg: 'from-slate-800 to-slate-900' },
    { title: '$100 CARD', code: 'GC-100-2026', bg: 'from-amber-700 to-slate-900' },
    { title: '$250 CARD', code: 'GC-250-2026', bg: 'from-indigo-800 to-slate-900' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-amber-400" /> Gift Card Carousel
        </h3>
        <span className="text-xs text-slate-400">Select stored gift card</span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {cards.map((c, idx) => {
          const isActive = selected === idx;
          return (
            <motion.div
              key={idx}
              onClick={() => setSelected(idx)}
              className={`flex-shrink-0 w-60 p-5 rounded-2xl border cursor-pointer transition-all bg-gradient-to-b ${c.bg} ${isActive ? 'border-amber-400 shadow-xl ring-2 ring-amber-400' : 'border-slate-800 opacity-70'}`}
            >
              <Gift className="w-6 h-6 text-amber-300 mb-3" />
              <h4 className="text-lg font-extrabold text-white mb-1">{c.title}</h4>
              <p className="text-xs font-mono text-amber-200/80 mb-3">{c.code}</p>
              <span className="text-xs font-bold text-amber-400">{isActive ? '✓ Selected' : 'Tap to Select'}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default CheckoutGiftCard9;
