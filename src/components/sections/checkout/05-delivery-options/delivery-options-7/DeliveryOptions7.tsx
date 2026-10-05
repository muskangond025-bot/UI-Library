import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Zap, Clock } from 'lucide-react';

export function DeliveryOptions7({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  const options = [
    { id: 'standard', name: 'Standard Ground', time: '3-5 Days', price: 'Free', icon: Truck },
    { id: 'express', name: 'Express Air', time: '1-2 Days', price: '$14.99', icon: Zap },
    { id: 'sameday', name: 'Same-Day Courier', time: 'Today', price: '$24.99', icon: Clock },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Compact Delivery Tiers</h3>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">Quick Selection</span>
        </div>

        <div className="space-y-3">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selected === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                  isSelected ? 'bg-slate-950 border-cyan-400 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span className="text-xs font-semibold">{opt.name} ({opt.time})</span>
                </div>
                <span className={`text-xs font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-300'}`}>{opt.price}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">CARRIER: FEDEX / UPS</span>
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition flex items-center gap-1.5">
            Proceed <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions7;