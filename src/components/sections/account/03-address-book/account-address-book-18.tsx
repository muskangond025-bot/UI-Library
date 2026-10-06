import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Plus, ArrowUpRight } from 'lucide-react';

const mockData = {
  user: 'Alex Morgan',
  addresses: [
    { label: 'Primary Penthouse', street: '450 Fashion Ave #14B', city: 'New York, NY 10001', tag: 'Default' },
    { label: 'Design Studio HQ', street: '88 Wythe Ave #402', city: 'Brooklyn, NY 11211', tag: 'Commercial' },
    { label: 'Hamptons Villa', street: '142 Ocean Drive', city: 'East Hampton, NY 11937', tag: 'Seasonal' },
  ]
};

export const AccountAddressBook18: React.FC = () => {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="w-full bg-[#0c0a14] text-white min-h-[750px] p-6 sm:p-10 font-sans border border-purple-900/40 rounded-3xl relative overflow-hidden flex flex-col justify-between"
    >
      {/* Ambient Gradient Background Glow Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Dynamic Cursor Spotlight Beam */}
      <div 
        className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none transition-transform duration-75"
        style={{ transform: `translate(${spotlight.x - 192}px, ${spotlight.y - 192}px)` }}
      ></div>

      {/* Glass Header */}
      <div className="pb-6 border-b border-white/10 relative z-10 flex justify-between items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-300">LIMITED GLASSMORPHISM VARIANT</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Frosted Glass Address Spotlight</h1>
        </div>
        <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-md border border-purple-400/30 text-purple-200 text-xs font-mono rounded-full flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Frosted Glass Active
        </span>
      </div>

      {/* Glass Hero Card */}
      <div className="my-8 p-8 bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl shadow-2xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-xs font-mono rounded-full border border-purple-400/30 font-bold">
            Client: {mockData.user}
          </span>
          <h2 className="text-2xl font-bold text-white mt-3">450 Fashion Avenue, Penthouse 14B</h2>
          <p className="text-xs font-mono text-neutral-300 mt-1">New York, NY 10001 • Primary Default Courier Address</p>
        </div>

        <button className="px-5 py-2.5 bg-white text-black font-mono text-xs font-bold rounded-full hover:bg-purple-200 transition-colors flex items-center gap-1.5 shrink-0">
          <Plus className="w-4 h-4" /> Add Destination
        </button>
      </div>

      {/* 3 Frosted Glass Address Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {mockData.addresses.map((addr, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-purple-400/50 transition-all cursor-pointer group flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
                  {addr.tag}
                </span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white">{addr.label}</h3>
              <p className="text-xs text-neutral-300 font-mono mt-1">{addr.street}</p>
              <p className="text-xs text-neutral-400 font-mono">{addr.city}</p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-purple-300 font-bold">
              Manage Address →
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
