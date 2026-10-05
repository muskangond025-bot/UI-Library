import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, ArrowRight, Sparkles } from 'lucide-react';

export function DeliveryOptions8({ data }: { data?: any }) {
  const [selected, setSelected] = useState('concierge');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative bg-slate-950 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none"
        />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-500/20 pb-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-mono mb-1">
              <Crown className="w-4 h-4" /> VIP CONCIERGE DISPATCH
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">Delivery Service Tier</h2>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            Priority Air Status
          </span>
        </div>

        <div className="space-y-4">
          <div
            onClick={() => setSelected('concierge')}
            className={`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'concierge' ? 'bg-amber-500/10 border-amber-400 text-amber-50' : 'bg-slate-900/60 border-amber-500/20 text-slate-300'
            }`}
          >
            <div>
              <span className="text-sm font-serif font-bold text-amber-200 block flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" /> Private Concierge Hand-Delivery
              </span>
              <span className="text-xs text-amber-200/60">Dedicated courier with white-glove arrival</span>
            </div>
            <span className="text-sm font-bold text-amber-400">$39.99</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'express' ? 'bg-amber-500/10 border-amber-400 text-amber-50' : 'bg-slate-900/60 border-amber-500/20 text-slate-300'
            }`}
          >
            <div>
              <span className="text-sm font-serif font-bold text-amber-200 block">Priority Express Air</span>
              <span className="text-xs text-amber-200/60">Next-day afternoon arrival</span>
            </div>
            <span className="text-sm font-bold text-amber-400">$14.99</span>
          </div>

          <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" /> Fully insured transit guarantee
            </span>
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2">
              <span>Proceed to Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions8;