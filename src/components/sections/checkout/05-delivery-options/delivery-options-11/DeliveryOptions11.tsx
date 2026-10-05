import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Clock, ArrowRight } from 'lucide-react';

export function DeliveryOptions11({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Vertical Shipping Speed Timeline
        </h2>

        <div className="relative pl-6 sm:pl-10 space-y-6">
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-4 w-0.5 bg-slate-800">
            <motion.div
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full bg-teal-400"
            />
          </div>

          <div
            onClick={() => setSelected('standard')}
            className="relative cursor-pointer"
          >
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <Truck className="w-3 h-3 text-teal-400" />
            </div>
            <div className={`p-4 rounded-xl border transition ${
              selected === 'standard' ? 'bg-slate-950 border-teal-400 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }`}>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold">01. Standard Ground (3-5 Days)</span>
                <span className="text-xs font-bold text-teal-400">Free</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => setSelected('express')}
            className="relative cursor-pointer"
          >
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <Zap className="w-3 h-3 text-teal-400" />
            </div>
            <div className={`p-4 rounded-xl border transition ${
              selected === 'express' ? 'bg-slate-950 border-teal-400 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
            }`}>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold">02. Priority Express Air (1-2 Days)</span>
                <span className="text-xs font-bold text-teal-400">$14.99</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
          <button className="px-6 py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Proceed <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions11;