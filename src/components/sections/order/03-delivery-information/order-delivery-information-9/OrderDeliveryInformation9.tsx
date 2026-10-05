import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Check } from 'lucide-react';

export function OrderDeliveryInformation9() {
  const [selected, setSelected] = useState('standard');

  const options = [
    { id: 'standard', name: 'Standard Delivery', speed: '3–5 Business Days', eta: '12–15 Oct', price: 'Free', carrier: 'DripExpress Ground' },
    { id: 'express', name: 'Express Air', speed: '2 Business Days', eta: '13–14 Oct', price: '$12.00', carrier: 'DripExpress Air' },
    { id: 'nextday', name: 'Overnight Priority', speed: 'Next Day Morning', eta: '13 Oct', price: '$24.00', carrier: 'DripExpress Priority' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Method Overview</span>
          <h2 className="text-2xl font-bold text-white">Delivery Information & Method</h2>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((opt) => (
            <motion.div
              key={opt.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(opt.id)}
              className={`cursor-pointer p-5 rounded-2xl border transition-all relative overflow-hidden ${
                selected === opt.id
                  ? 'bg-indigo-950/60 border-indigo-500 ring-2 ring-indigo-500/20 shadow-xl'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              {selected === opt.id && (
                <span className="absolute top-3 right-3 p-1 bg-indigo-500 text-slate-950 rounded-full">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
              )}
              <span className="text-xs font-mono text-slate-400 uppercase block mb-1">{opt.speed}</span>
              <h3 className="text-lg font-bold text-white">{opt.name}</h3>
              <p className="text-xl font-extrabold text-indigo-400 mt-2">{opt.eta}</p>
              <p className="text-xs text-slate-400 mt-2">{opt.carrier}</p>
            </motion.div>
          ))}
        </div>

        {/* Active Selection Details */}
        <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Tracking Reference</p>
              <p className="font-mono text-sm font-bold text-white">DH-TRK-28491</p>
            </div>
          </div>
          <div className="text-xs text-slate-400">
            Selected Option: <strong className="text-white uppercase font-mono">{selected}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation9;
