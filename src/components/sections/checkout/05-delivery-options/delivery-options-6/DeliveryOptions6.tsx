import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, ArrowRight, Calendar, Leaf } from 'lucide-react';

export function DeliveryOptions6({ data }: { data?: any }) {
  const [selectedSpeed, setSelectedSpeed] = useState('express');
  const [ecoOffset, setEcoOffset] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const colVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <motion.div variants={colVariants} className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest block">
              ASYMMETRIC COURIER GRID
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              SHIPPING SPEED & DISPATCH SLOTS
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Select your preferred delivery speed tier and carbon offset options.
            </p>
          </motion.div>

          <motion.div variants={colVariants} className="md:col-span-5 space-y-4">
            <div
              onClick={() => setSelectedSpeed('standard')}
              className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                selectedSpeed === 'standard' ? 'bg-zinc-950 border-rose-500' : 'bg-zinc-950/50 border-zinc-800'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-zinc-100 block">Ground Delivery</span>
                <span className="text-[11px] text-zinc-400">3 - 5 Days</span>
              </div>
              <span className="text-xs font-bold text-rose-400">Free</span>
            </div>

            <div
              onClick={() => setSelectedSpeed('express')}
              className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                selectedSpeed === 'express' ? 'bg-zinc-950 border-rose-500' : 'bg-zinc-950/50 border-zinc-800'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-zinc-100 block">Express Air</span>
                <span className="text-[11px] text-zinc-400">1 - 2 Days</span>
              </div>
              <span className="text-xs font-bold text-rose-400">$14.99</span>
            </div>
          </motion.div>

          <motion.div variants={colVariants} className="md:col-span-3 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between h-full space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase text-zinc-400 mb-3">Eco Offset</h3>
              <label className="flex items-center gap-2 cursor-pointer text-xs text-zinc-300">
                <input
                  type="checkbox"
                  checked={ecoOffset}
                  onChange={(e) => setEcoOffset(e.target.checked)}
                  className="accent-rose-500 rounded"
                />
                <span className="flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" /> Carbon Neutral (+$1.00)
                </span>
              </label>
            </div>

            <button className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20">
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions6;