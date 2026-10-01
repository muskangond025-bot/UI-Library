import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag } from 'lucide-react';

export default function ProductBundles19({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          19. ORGANIC ROTATING SVG BLOB ECO WORKSTATION
        </span>
        <h2 className="text-3xl font-black text-white">Eco Bamboo Desktop Bundle</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-6 z-10 backdrop-blur-xl shadow-2xl">
        <img src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80" alt="Bamboo Tripod" className="w-full h-48 object-cover rounded-2xl mb-4" />
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-extrabold text-lg">Eco Tripod + Cable Kit</h3>
            <span className="text-2xl font-black text-emerald-400">$88</span>
          </div>
          <button className="px-5 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={16} /> Buy Eco Pack
          </button>
        </div>
      </div>

    </div>
  );
}
