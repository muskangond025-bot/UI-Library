import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard2({ data }: { data?: any }) {
  const [selected, setSelected] = useState('GC-100');
  const cards = [
    { id: 'GC-100', balance: '$100.00', number: 'GC-••••-8842', bg: 'from-amber-600 to-amber-800' },
    { id: 'GC-150', balance: '$150.00', number: 'GC-••••-3190', bg: 'from-indigo-600 to-slate-900' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">DIGITAL WALLET</span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Wallet className="w-5 h-5 text-amber-400" /> Stored Gift Cards ({cards.length})
          </h3>
        </div>
        <span className="text-xs text-slate-400">Select card to redeem</span>
      </div>

      <div className="space-y-3 mb-6">
        {cards.map((c, idx) => {
          const isSelected = selected === c.id;
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => setSelected(c.id)}
              className={`p-4 rounded-2xl border cursor-pointer flex justify-between items-center bg-gradient-to-r ${c.bg} ${isSelected ? 'ring-2 ring-amber-400 border-amber-400 shadow-xl' : 'border-slate-800 opacity-80'}`}
            >
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-amber-200" />
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">{c.number}</h4>
                  <p className="text-[11px] text-amber-200/80">Store Balance Available</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-mono font-extrabold text-white block">{c.balance}</span>
                <span className="text-xs text-amber-300 font-bold">{isSelected ? 'Active ✓' : 'Select'}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default CheckoutGiftCard2;
