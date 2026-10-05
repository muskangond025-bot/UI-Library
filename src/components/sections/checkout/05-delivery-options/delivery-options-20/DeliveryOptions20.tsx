import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export function DeliveryOptions20({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-slate-100 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-indigo-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Award Delivery Showcase
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Delivery Speed Options</h2>
          </div>
          <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Carrier Insurance Active
          </span>
        </div>

        <div className="relative z-10 mt-8 space-y-4">
          <div
            onClick={() => setSelected('standard')}
            className={`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'standard' ? 'bg-slate-950/90 border-indigo-500 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-indigo-400" />
              <div>
                <span className="text-xs font-bold block">Standard Ground Courier</span>
                <span className="text-[11px] text-slate-400">3-5 Business Days</span>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-400">Free</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'express' ? 'bg-slate-950/90 border-indigo-500 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }`}
          >
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-indigo-400" />
              <div>
                <span className="text-xs font-bold block">Priority Express Air</span>
                <span className="text-[11px] text-slate-400">1-2 Business Days</span>
              </div>
            </div>
            <span className="text-xs font-bold text-indigo-400">$14.99</span>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Tracking code generated immediately after checkout</span>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
            >
              <span>Proceed to Payment</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions20;