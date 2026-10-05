import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export function DeliveryOptions5({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 0.4, y: 24, scale: 0.92 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-slate-800 rounded-3xl border border-slate-700 pointer-events-none transform -rotate-2"
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 0.7, y: 12, scale: 0.96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute inset-0 bg-slate-850 rounded-3xl border border-slate-700 pointer-events-none transform rotate-1"
        />

        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl z-10 text-slate-100"
        >
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-5">
            <div>
              <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest block mb-1">
                STACKED SHIPPING OPTIONS
              </span>
              <h2 className="text-xl font-bold text-white">Delivery Speed Stack</h2>
            </div>
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full text-xs font-semibold">
              3 Tier Options
            </span>
          </div>

          <div className="space-y-4">
            <div
              onClick={() => setSelected('standard')}
              className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                selected === 'standard' ? 'bg-sky-500/10 border-sky-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-sky-400" />
                <div>
                  <span className="text-xs font-bold block">Standard Ground</span>
                  <span className="text-[11px] text-slate-400">3-5 Business Days</span>
                </div>
              </div>
              <span className="text-xs font-bold">Free</span>
            </div>

            <div
              onClick={() => setSelected('express')}
              className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                selected === 'express' ? 'bg-sky-500/10 border-sky-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-sky-400" />
                <div>
                  <span className="text-xs font-bold block">Priority Air Courier</span>
                  <span className="text-[11px] text-slate-400">1-2 Business Days</span>
                </div>
              </div>
              <span className="text-xs font-bold">$14.99</span>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> Guaranteed Dispatch
              </span>
              <button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
                <span>Confirm Selection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DeliveryOptions5;