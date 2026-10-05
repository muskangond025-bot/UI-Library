import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, ArrowRight, Calendar } from 'lucide-react';

export function DeliveryOptions18({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 text-slate-100">
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="md:col-span-5 bg-gradient-to-br from-cyan-950/60 to-slate-950 p-6 rounded-2xl border border-cyan-500/20 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Arrival Preview</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Arriving by <strong className="text-white">Thursday, Oct 5th</strong> via Express.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cyan-400 font-semibold">
            Real-time courier dispatch enabled
          </div>
        </motion.div>

        <div className="md:col-span-7 space-y-4">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-3">Shipping Method</h2>

          <div
            onClick={() => setSelected('standard')}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'standard' ? 'bg-slate-950 border-cyan-400 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs font-bold">Standard Ground (3-5 Days)</span>
            <span className="text-xs font-bold text-cyan-400">Free</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'express' ? 'bg-slate-950 border-cyan-400 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs font-bold">Express Air (1-2 Days)</span>
            <span className="text-xs font-bold text-cyan-400">$14.99</span>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Proceed <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions18;