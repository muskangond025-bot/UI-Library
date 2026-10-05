import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard11({ data }: { data?: any }) {
  const totalBalance = 250;
  const [appliedAmount, setAppliedAmount] = useState(100);
  const [code, setCode] = useState('GC-8842-9901');
  const [isApplied, setIsApplied] = useState(true);

  const remainingBalance = isApplied ? totalBalance - appliedAmount : totalBalance;
  const progressPercent = isApplied ? (appliedAmount / totalBalance) * 100 : 0;

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">BALANCE BREAKDOWN & TRACKER</span>
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Gift className="w-5 h-5 text-amber-400" /> Gift Card Balance Progress
          </h3>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
          ${remainingBalance.toFixed(2)} REMAINING
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="relative mb-6">
        <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
          <span>Used: ${isApplied ? appliedAmount.toFixed(2) : '0.00'}</span>
          <span>Total Card Value: ${totalBalance.toFixed(2)}</span>
        </div>
        <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-amber-500 via-emerald-400 to-teal-400 rounded-full"
          />
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 mb-4">
        <div className="flex items-center gap-3">
          <input 
            type="text" 
            value={code} 
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase focus:outline-none focus:border-amber-500"
            placeholder="GC CODE"
          />
          <button 
            onClick={() => setIsApplied(!isApplied)}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-colors ${isApplied ? 'bg-emerald-600 text-white hover:bg-emerald-500' : 'bg-amber-500 text-slate-950 hover:bg-amber-400'}`}
          >
            {isApplied ? 'Applied ✓' : 'Apply Card'}
          </button>
        </div>

        {isApplied && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-2 pt-2 border-t border-slate-800"
          >
            <div className="flex justify-between text-xs text-slate-300">
              <label htmlFor="balance-slider" className="font-semibold">Adjust Amount to Deduct:</label>
              <span className="font-mono text-amber-400 font-bold">${appliedAmount}.00</span>
            </div>
            <input 
              id="balance-slider"
              type="range" 
              min="10" 
              max={totalBalance} 
              step="10" 
              value={appliedAmount}
              onChange={(e) => setAppliedAmount(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer"
            />
          </motion.div>
        )}
      </div>

      <div className="flex justify-between items-center text-xs text-slate-400">
        <span>Status: <strong className="text-emerald-400 font-mono">{isApplied ? 'ACTIVE REDEMPTION' : 'INACTIVE'}</strong></span>
        {isApplied && (
          <button onClick={() => setIsApplied(false)} className="text-rose-400 hover:underline">
            Remove Gift Card
          </button>
        )}
      </div>
    </div>
  );
}
export default CheckoutGiftCard11;
