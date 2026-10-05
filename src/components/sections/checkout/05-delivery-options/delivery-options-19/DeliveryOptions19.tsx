import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function DeliveryOptions19({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-mono text-zinc-100">
      <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 rounded-none space-y-8 shadow-2xl">
        <div className="flex justify-between items-end border-b border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">[DISPATCH_SPEED: EXP_01]</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-zinc-100">DELIVERY_TIERS</h2>
          </div>
          <span className="text-xs text-zinc-500 font-normal">ARCHITECTURAL</span>
        </div>

        <div className="relative w-full h-px bg-zinc-900 overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-full bg-zinc-200"
          />
        </div>

        <div className="space-y-4">
          <div
            onClick={() => setSelected('standard')}
            className={`p-4 border cursor-pointer transition flex justify-between items-center ${
              selected === 'standard' ? 'border-zinc-200 bg-zinc-900 text-zinc-100' : 'border-zinc-800 text-zinc-400'
            }`}
          >
            <span className="text-xs uppercase">01 // GROUND_DELIVERY (3-5 DAYS)</span>
            <span className="text-xs font-bold">FREE</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={`p-4 border cursor-pointer transition flex justify-between items-center ${
              selected === 'express' ? 'border-zinc-200 bg-zinc-900 text-zinc-100' : 'border-zinc-800 text-zinc-400'
            }`}
          >
            <span className="text-xs uppercase">02 // EXPRESS_AIR (1-2 DAYS)</span>
            <span className="text-xs font-bold">$14.99</span>
          </div>

          <div className="pt-6 border-t border-zinc-800 flex justify-end">
            <button className="px-8 py-4 bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-widest transition flex items-center gap-2">
              <span>PROCEED</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions19;