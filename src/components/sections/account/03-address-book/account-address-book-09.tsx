import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const mockRows = [
  { id: 'ROUT-101', type: 'RESIDENTIAL', label: 'Primary Penthouse', recipient: 'Alex Morgan', address: '450 Fashion Ave, PH 14B', zip: 'NY 10001', status: 'DEFAULT' },
  { id: 'ROUT-102', type: 'COMMERCIAL', label: 'Design Studio HQ', recipient: 'Alex Morgan // Studio', address: '88 Wythe Ave, Suite 402', zip: 'NY 11211', status: 'ACTIVE' },
  { id: 'ROUT-103', type: 'SEASONAL', label: 'Hamptons Villa', recipient: 'Alex Morgan', address: '142 Ocean Drive', zip: 'NY 11937', status: 'ACTIVE' },
];

export const AccountAddressBook9: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 3;
    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCounter(end);
        clearInterval(timer);
      } else {
        setCounter(start);
      }
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#080b0e] text-[#4af626] min-h-[750px] p-6 sm:p-10 font-mono border border-[#4af626]/30 rounded-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-[#4af626]/30 mb-8 gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#4af626]/70">ROUTING DIRECTORY // TERMINAL v3</span>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider">SAVED ROUTING DIRECTORY</h1>
        </div>

        <button className="px-4 py-2 bg-[#4af626]/10 border border-[#4af626]/40 text-xs text-[#4af626] font-bold rounded-md hover:bg-[#4af626] hover:text-black transition-colors flex items-center gap-1.5">
          <Plus className="w-3.5 h-3.5" /> ADD NEW ROUTING NODE
        </button>
      </div>

      {/* Counter Stat Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-neutral-950 border border-[#4af626]/30 rounded-2xl">
          <div className="text-xs text-neutral-400">REGISTERED DESTINATIONS</div>
          <div className="text-4xl font-bold text-[#4af626] mt-2 tracking-tight">
            0{counter} <span className="text-xs text-neutral-400 font-normal">NODES</span>
          </div>
          <div className="text-[11px] text-neutral-400 mt-2">All destinations 100% USPS verified</div>
        </div>

        <div className="p-6 bg-neutral-950 border border-[#4af626]/30 rounded-2xl">
          <div className="text-xs text-neutral-400">PRIMARY DISPATCH DESTINATION</div>
          <div className="text-lg font-bold text-white mt-2 tracking-tight">
            450 Fashion Ave #14B
          </div>
          <div className="text-[11px] text-emerald-400 mt-1">Default priority express shipping</div>
        </div>

        <div className="p-6 bg-neutral-950 border border-[#4af626]/30 rounded-2xl">
          <div className="text-xs text-neutral-400">COURIER GATE PASSKEYS</div>
          <div className="text-lg font-bold text-amber-300 mt-2 tracking-tight">
            2 ACTIVE PASSKEYS
          </div>
          <div className="text-[11px] text-neutral-400 mt-1">24/7 Doorman authorization active</div>
        </div>
      </div>

      {/* Structured Directory Table */}
      <div className="bg-neutral-950 border border-[#4af626]/30 rounded-2xl overflow-hidden">
        <div className="p-4 bg-neutral-900 border-b border-[#4af626]/30 flex justify-between items-center text-xs font-bold text-neutral-300">
          <span>COURIER ROUTING DIRECTORY LOG</span>
          <span>3 RECORDS SHOWN</span>
        </div>

        <div className="divide-y divide-neutral-900">
          {mockRows.map((row) => (
            <motion.div 
              key={row.id}
              whileHover={{ backgroundColor: 'rgba(74,246,38,0.05)' }}
              className="p-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-neutral-500 font-bold">{row.id}</span>
                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded text-[10px]">
                  {row.type}
                </span>
                <span className="text-white font-bold">{row.label}</span>
                <span className="text-neutral-400">{row.address}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-neutral-400">{row.zip}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] ${row.status === 'DEFAULT' ? 'bg-[#4af626]/20 text-[#4af626] border border-[#4af626]/40' : 'bg-neutral-900 text-neutral-400'}`}>
                  {row.status}
                </span>
                <button className="text-neutral-400 hover:text-white">Edit Node →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
