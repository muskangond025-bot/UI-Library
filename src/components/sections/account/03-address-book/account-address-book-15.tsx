import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Plus } from 'lucide-react';

const mockStream = [
  { id: '1', title: 'Primary Residence (Penthouse 14B)', desc: '24/7 Doorman package acceptance authorized. Use front desk chime.', date: 'DEFAULT DESTINATION', icon: MapPin, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
  { id: '2', title: 'Design Studio HQ (Suite 402)', desc: 'Freight elevator access passcode #4902. Business hours delivery 9am-6pm.', date: 'COMMERCIAL DISPATCH', icon: Navigation, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' },
  { id: '3', title: 'East Hampton Villa (Ocean Drive)', desc: 'Leave package at side porch entrance if perimeter gate is unlocked.', date: 'SEASONAL RETREAT', icon: MapPin, color: 'text-rose-400 bg-rose-500/10 border-rose-500/30' },
];

export const AccountAddressBook15: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0d12] text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-neutral-800 mb-8 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">DELIVERY INSTRUCTION STREAM</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Courier Routing Log</h1>
        </div>

        <button className="px-4 py-2 bg-white text-black font-mono text-xs font-bold rounded-full hover:bg-amber-200 transition-colors flex items-center gap-1.5">
          <Plus className="w-4 h-4" /> Add Destination
        </button>
      </div>

      <div className="max-w-3xl mx-auto relative space-y-6">
        {/* Connecting Line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-neutral-800 -z-0"></div>

        {mockStream.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * idx, duration: 0.5 }}
              className="flex items-start gap-6 relative z-10 group"
            >
              <div className={`p-3 rounded-full border ${item.color} shadow-lg shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1 p-5 bg-neutral-900/90 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-all">
                <div className="flex justify-between items-center text-xs mb-1 font-mono">
                  <span className="text-amber-300 font-bold">{item.date}</span>
                  <span className="text-neutral-500">USPS VERIFIED</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">{item.title}</h3>
                <p className="text-xs text-neutral-300 mt-1 font-mono">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
