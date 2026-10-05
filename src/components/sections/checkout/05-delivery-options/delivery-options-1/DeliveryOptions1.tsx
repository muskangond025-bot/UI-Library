import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, ShieldCheck, ArrowRight, Clock, Check } from 'lucide-react';

export function DeliveryOptions1({ data }: { data?: any }) {
  const [selectedOption, setSelectedOption] = useState('express');

  const options = [
    { id: 'standard', name: 'Standard Ground', time: '3 - 5 Business Days', price: 'Free', icon: Truck },
    { id: 'express', name: 'Priority Express Air', time: '1 - 2 Business Days', price: '$14.99', icon: Zap },
    { id: 'overnight', name: 'VIP Overnight Courier', time: 'Next Day by 10:30 AM', price: '$29.99', icon: Clock },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 text-stone-100 shadow-2xl relative overflow-hidden"
      >
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-stone-800">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold block mb-1">
              04 — SHIPPING SPEED MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 tracking-tight">
              Select Delivery Method
            </h2>
          </div>
          <span className="px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-mono rounded-full">
            FREE RETURNS INCLUDED
          </span>
        </motion.div>

        <div className="mt-8 space-y-4">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedOption === opt.id;
            return (
              <motion.div
                key={opt.id}
                variants={itemVariants}
                onClick={() => setSelectedOption(opt.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                  isSelected ? 'bg-stone-950 border-amber-400/80 shadow-lg shadow-amber-400/5' : 'bg-stone-950/50 border-stone-800 hover:border-stone-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition ${
                    isSelected ? 'bg-amber-400 text-stone-950 border-amber-400' : 'bg-stone-800 text-stone-400 border-stone-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      {opt.name}
                      {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5">{opt.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-bold ${isSelected ? 'text-amber-400' : 'text-stone-200'}`}>{opt.price}</span>
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={itemVariants} className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> On-time delivery guarantee active
            </span>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-mono uppercase font-bold tracking-wider rounded-xl transition flex items-center justify-center gap-2">
              <span>Continue to Payment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions1;