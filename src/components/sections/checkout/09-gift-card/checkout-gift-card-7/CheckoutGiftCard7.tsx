import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard7({ data }: { data?: any }) {
  const [unstacked, setUnstacked] = useState(false);
  const cards = [
    { code: 'GC-GOLD-250', balance: '$250.00', bg: 'bg-amber-900 border-amber-700' },
    { code: 'GC-SILVER-100', balance: '$100.00', bg: 'bg-slate-800 border-slate-700' }
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="mb-6">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">FAN-OUT STACK</span>
        <h3 className="text-xl font-bold text-white">Stored Gift Cards</h3>
        <button onClick={() => setUnstacked(!unstacked)} className="text-xs text-amber-400 hover:underline mt-1">
          {unstacked ? 'Collapse Stack' : 'Click to Fan Out Cards'}
        </button>
      </div>

      <div className="relative min-h-[160px] flex justify-center items-center">
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            animate={{ 
              y: unstacked ? idx * 60 : idx * 10, 
              rotate: unstacked ? 0 : (idx - 0.5) * -5,
              opacity: 1 
            }}
            className={`absolute w-full max-w-md p-4 rounded-2xl border text-left shadow-xl ${c.bg}`}
            style={{ zIndex: 10 - idx }}
          >
            <div className="flex justify-between items-center text-xs text-white">
              <span className="font-mono font-bold">{c.code}</span>
              <span className="text-amber-300 font-extrabold font-mono">{c.balance}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default CheckoutGiftCard7;
