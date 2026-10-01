import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Truck, Zap, CheckCircle2 } from 'lucide-react';

export default function ShippingDeliveryInformation18({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  const options = [
    { id: "std", name: "Standard Ground", SLA: "3–5 Business Days", rate: "₹99 Flat", desc: "Reliable ground courier transit across India." },
    { id: "exp", name: "Express Air", SLA: "1–2 Business Days", rate: "₹199 Flat", desc: "Priority air dispatch for urgent packages." },
    { id: "int", name: "Global Priority", SLA: "4–7 Business Days", rate: "₹1,499 Flat", desc: "International customs-cleared air freight." }
  ];

  const [selectedId, setSelectedId] = useState("std");
  const selectedOption = options.find(o => o.id === selectedId) || options[0];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'INTERACTIVE TABS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Custom Shipping Explorer'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Toggle between standard ground, express air, and global priority options.'}
          </p>
        </div>

        {/* Tab Buttons Row */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedId(opt.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedId === opt.id
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {opt.name}
            </button>
          ))}
        </div>

        {/* Morphing Content Display Box */}
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl relative overflow-hidden min-h-[220px] shadow-2xl flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">SELECTED SERVICE TIER</span>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedOption.name}</h3>
                <p className="text-slate-400 text-sm max-w-md">{selectedOption.desc}</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-right shrink-0">
                <span className="text-xs text-slate-400 block mb-1">Transit SLA: {selectedOption.SLA}</span>
                <span className="text-3xl font-extrabold text-emerald-400">{selectedOption.rate}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
