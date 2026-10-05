import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Truck } from 'lucide-react';

export function DeliveryOptions13({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-blue-600/15 rounded-full blur-2xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl text-slate-100"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Glassmorphic Courier
            </div>
            <h2 className="text-2xl font-bold text-white">Delivery Method Panel</h2>
          </div>
          <Truck className="w-5 h-5 text-blue-400" />
        </div>

        <div className="space-y-4">
          <div
            onClick={() => setSelected('standard')}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'standard' ? 'bg-slate-950 border-blue-400 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs font-bold">Standard Ground (3-5 Days)</span>
            <span className="text-xs font-bold text-blue-400">Free</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'express' ? 'bg-slate-950 border-blue-400 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs font-bold">Express Air (1-2 Days)</span>
            <span className="text-xs font-bold text-blue-400">$14.99</span>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Confirm Speed</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions13;