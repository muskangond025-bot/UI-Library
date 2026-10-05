import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export function DeliveryOptions4({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  const tiers = [
    { id: 'standard', title: 'Economy Ground', price: 'Free', desc: '3-5 Days' },
    { id: 'express', title: 'Priority Air', price: '$14.99', desc: '1-2 Days' },
    { id: 'overnight', title: 'VIP Overnight', price: '$29.99', desc: 'Next Morning' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 text-neutral-100 shadow-2xl"
      >
        <div className="mb-8 flex justify-between items-center border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest block mb-1">
              FLOATING BADGE TIERS
            </span>
            <h2 className="text-2xl font-bold text-neutral-50">Choose Delivery Speed</h2>
          </div>
          <span className="text-xs text-neutral-500 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-violet-400" /> Instant Dispatch
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {tiers.map((t) => {
            const isSelected = selected === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setSelected(t.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition flex flex-col justify-between h-36 ${
                  isSelected ? 'bg-violet-950/50 border-violet-500 text-white shadow-lg shadow-violet-600/10' : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                }`}
              >
                <div>
                  <span className="text-xs font-bold block">{t.title}</span>
                  <span className="text-[11px] text-neutral-500">{t.desc}</span>
                </div>
                <span className={`text-base font-extrabold ${isSelected ? 'text-violet-400' : 'text-neutral-300'}`}>{t.price}</span>
              </div>
            );
          })}
        </div>

        <div className="pt-4 flex justify-end">
          <button className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25">
            <span>Confirm Speed & Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions4;