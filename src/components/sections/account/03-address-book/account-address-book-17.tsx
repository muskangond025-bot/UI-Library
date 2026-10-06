import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Sparkles, ArrowUpRight, Plus, Building } from 'lucide-react';

const mockModules = [
  { id: '1', title: 'Primary Residence', street: '450 Fashion Ave #14B', city: 'New York, NY 10001', icon: MapPin, color: 'bg-indigo-900 border-indigo-700 text-indigo-100', float: [0, -10, 0] },
  { id: '2', title: 'Design Studio HQ', street: '88 Wythe Ave #402', city: 'Brooklyn, NY 11211', icon: Building, color: 'bg-emerald-900 border-emerald-700 text-emerald-100', float: [0, 8, 0] },
  { id: '3', title: 'East Hampton Villa', street: '142 Ocean Drive', city: 'East Hampton, NY 11937', icon: Navigation, color: 'bg-rose-900 border-rose-700 text-rose-100', float: [0, -8, 0] },
  { id: '4', title: 'Add New Location', street: 'Register Destination', city: 'Add Courier Address', icon: Plus, color: 'bg-amber-900 border-amber-700 text-amber-100', float: [0, 10, 0] },
];

export const AccountAddressBook17: React.FC = () => {
  return (
    <div className="w-full bg-[#0d0d12] text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl relative overflow-hidden flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center pb-6 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">FLOATING MODULE CANVAS</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Levitating Address Modules</h1>
        </div>
        <div className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono rounded-full flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Levitation Physics Active
        </div>
      </div>

      {/* Anchored Primary Card */}
      <div className="my-6 max-w-xl mx-auto p-6 bg-neutral-900 border-2 border-indigo-500/40 rounded-3xl text-center shadow-2xl relative z-10">
        <div className="p-3 bg-indigo-500/20 text-indigo-300 rounded-2xl w-max mx-auto mb-3">
          <MapPin className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-white">Alex Morgan</h2>
        <p className="text-xs font-mono text-neutral-300 mt-1">450 Fashion Avenue, Penthouse 14B • New York, NY 10001</p>
        <span className="inline-block mt-3 px-3 py-1 bg-amber-400/20 text-amber-300 text-xs font-mono rounded-full border border-amber-400/30 font-bold">
          Primary Default Shipping Address
        </span>
      </div>

      {/* 4 Floating Modules levitating with sine-wave animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
        {mockModules.map((mod, idx) => {
          const Icon = mod.icon;
          return (
            <motion.div
              key={mod.id}
              animate={{ y: mod.float }}
              transition={{ repeat: Infinity, duration: 4 + idx * 0.8, ease: 'easeInOut' }}
              className={`p-6 border-2 rounded-3xl shadow-xl ${mod.color} hover:border-white transition-colors cursor-pointer group`}
            >
              <div className="flex justify-between items-center mb-4">
                <Icon className="w-6 h-6" />
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <h3 className="text-base font-bold text-white">{mod.title}</h3>
              <div className="text-xs font-bold font-mono text-white mt-1">{mod.street}</div>
              <p className="text-xs text-neutral-300 mt-1 font-mono">{mod.city}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
