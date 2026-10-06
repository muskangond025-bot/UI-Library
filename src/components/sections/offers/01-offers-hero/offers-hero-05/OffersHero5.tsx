import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Copy, Check, ArrowRight } from 'lucide-react';

export function OffersHero5({ data, section }: { data?: any; section?: any }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('TICKET50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full py-16 px-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl flex items-center justify-center">
      <div className="relative w-full max-w-4xl bg-slate-950 rounded-3xl p-8 md:p-12 border border-amber-500/30 overflow-hidden shadow-2xl group">
        <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-800" />
        <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-800" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl">
          <motion.rect
            x="2" y="2" width="99.5%" height="99.5%" rx="24"
            fill="none"
            stroke="#f59e0b" strokeWidth="2"
            strokeDasharray="400"
            initial={{ strokeDashoffset: 400 }}
            whileHover={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase">
              <Ticket className="w-4 h-4" />
              <span>OFFICIAL VIP VOUCHER</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
              SAVE <span className="text-amber-400">FLAT 50%</span> OFF
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Valid on all new arrivals, luxury apparel, and limited drops. Redeem at checkout before September 30.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
                <span>REDEEM TICKET</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-dashed border-slate-800 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center items-center text-center space-y-3">
            <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">COUPON CODE</div>
            <div className="px-5 py-3 bg-slate-900 rounded-xl border border-slate-700 text-lg font-mono font-bold text-amber-400 tracking-wider">
              TICKET50
            </div>
            <button 
              onClick={handleCopy}
              className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED TO CLIPBOARD' : 'CLICK TO COPY CODE'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero5;
