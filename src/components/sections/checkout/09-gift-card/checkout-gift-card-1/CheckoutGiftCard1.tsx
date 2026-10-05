import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, CreditCard, Lock, Wallet, Check, Copy, X, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Sparkles, RefreshCw, Key, Layers, Info
} from 'lucide-react';

export function CheckoutGiftCard1({ data }: { data?: any }) {
  const [code, setCode] = useState('GC-8842-9901');
  const [pin, setPin] = useState('4829');
  const [applied, setApplied] = useState(true);

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">STORED VALUE REDEMPTION</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Gift className="w-6 h-6 text-amber-400" /> Apply Digital Gift Card
          </h2>
        </div>
        <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold rounded-full">
          Gift Card
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Gift Card Visual Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="md:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-slate-950 shadow-xl relative overflow-hidden flex flex-col justify-between h-48 border border-amber-400/40"
        >
          <div className="flex justify-between items-start">
            <Gift className="w-7 h-7 text-slate-950" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-slate-950/20 px-2.5 py-0.5 rounded text-slate-950">
              VALUED $250.00
            </span>
          </div>

          <div>
            <div className="w-9 h-7 rounded bg-amber-200/80 border border-amber-900/30 mb-3 flex items-center justify-center text-[10px] font-mono font-bold">CHIP</div>
            <p className="font-mono font-bold text-sm tracking-widest text-slate-950">GC-8842-9901-2026</p>
            <p className="text-[10px] font-semibold text-slate-900/80 mt-1 uppercase">Store Gift Voucher • Active</p>
          </div>
        </motion.div>

        {/* Input Form */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <label className="text-xs text-slate-300 block mb-1">Gift Card Code</label>
            <input 
              type="text" 
              value={code} 
              onChange={(e) => setCode(e.target.value)} 
              className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase focus:outline-none focus:border-amber-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-300 block mb-1">PIN / Security Code</label>
              <input 
                type="password" 
                value={pin} 
                onChange={(e) => setPin(e.target.value)} 
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div className="flex items-end">
              <button 
                onClick={() => setApplied(!applied)}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-lg shadow-amber-500/20"
              >
                {applied ? 'Applied ✓' : 'Apply Balance'}
              </button>
            </div>
          </div>

          {applied && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-300 flex justify-between items-center"
            >
              <span>Applied $100.00 from Gift Card Balance ($150.00 Remaining)</span>
              <button onClick={() => setApplied(false)} className="text-slate-400 hover:text-white underline">Remove</button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
export default CheckoutGiftCard1;
