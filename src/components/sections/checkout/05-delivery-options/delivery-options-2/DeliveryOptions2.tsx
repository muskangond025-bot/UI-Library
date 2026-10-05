import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function DeliveryOptions2({ data }: { data?: any }) {
  const [selectedOption, setSelectedOption] = useState('express');

  const options = [
    { id: 'standard', name: 'Standard Delivery', price: 'Free', eta: 'Thursday, Oct 5' },
    { id: 'express', name: 'Express Air Courier', price: '$14.99', eta: 'Tomorrow, Oct 3' },
    { id: 'sameday', name: 'Same-Day Dispatch', price: '$24.99', eta: 'Today by 7:00 PM' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl">
        {/* Left Side: Dispatch Context */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <Calendar className="w-3.5 h-3.5" />
              <span>Real-Time ETA Dispatch</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Estimated Arrival</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Order prepared at San Francisco Fulfillment Hub #04.
            </p>

            <div className="my-6 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
                <Truck className="w-4 h-4" /> Selected Speed ETA
              </div>
              <div className="text-xl font-bold text-white">
                {options.find(o => o.id === selectedOption)?.eta}
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed Courier Tracking Included</span>
          </div>
        </motion.div>

        {/* Right Side: Speed Selector */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 p-8 bg-slate-900/60 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Choose Shipping Tier</h3>

            <div className="space-y-3">
              {options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedOption(opt.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                      isSelected ? 'bg-indigo-950/40 border-indigo-500' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-white block">{opt.name}</span>
                      <span className="text-[11px] text-slate-400">{opt.eta}</span>
                    </div>
                    <span className={`text-xs font-bold ${isSelected ? 'text-indigo-400' : 'text-slate-300'}`}>{opt.price}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">All options fully insured</span>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition flex items-center gap-2">
              <span>Next: Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DeliveryOptions2;