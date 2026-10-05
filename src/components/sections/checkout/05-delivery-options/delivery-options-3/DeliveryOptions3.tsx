import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Truck, Zap, Clock } from 'lucide-react';

export function DeliveryOptions3({ data }: { data?: any }) {
  const [selectedOption, setSelectedOption] = useState('express');

  const options = [
    { id: 'standard', name: 'Standard Shipping', price: 'Free', icon: Truck },
    { id: 'express', name: 'Express Air Dispatch', price: '$14.99', icon: Zap },
    { id: 'sameDay', name: 'Same Day Courier', price: '$24.99', icon: Clock },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-xl">
        {/* Stepper Header */}
        <div className="mb-10 relative">
          <div className="flex items-center justify-between relative z-10 max-w-lg mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-xs flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs text-slate-400">Address</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-lg shadow-emerald-500/20"
              >
                3
              </motion.div>
              <span className="text-xs font-semibold text-emerald-400">Delivery Method</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-medium text-xs flex items-center justify-center">
                4
              </div>
              <span className="text-xs text-slate-400">Payment</span>
            </div>
          </div>

          <div className="absolute top-4 left-0 w-full flex justify-center px-24 pointer-events-none">
            <svg className="w-full h-1 overflow-visible">
              <line x1="0" y1="0" x2="100%" y2="0" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
              <motion.line
                x1="0"
                y1="0"
                x2="66%"
                y2="0"
                stroke="#10b981"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedOption === opt.id;
            return (
              <div
                key={opt.id}
                onClick={() => setSelectedOption(opt.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                  isSelected ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-semibold">{opt.name}</span>
                </div>
                <span className="text-xs font-bold">{opt.price}</span>
              </div>
            );
          })}

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
              <Check className="w-4 h-4" /> Shipping method selected
            </span>
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Proceed to Payment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions3;