import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, ShoppingBag, Sparkles } from 'lucide-react';

export default function ProductBundles15({ data }: { data?: any }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute w-[500px] h-[350px] bg-rose-600/20 blur-[170px] rounded-full pointer-events-none"
      />

      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          15. PULSATING SOUND AURA MUSIC SUITE
        </span>
        <h2 className="text-3xl font-black text-white">Music Production Ecosystem</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-rose-500/30 rounded-3xl p-6 z-10 shadow-2xl">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-rose-400 font-bold">Studio Setup</span>
          <button 
            onClick={() => setPlaying(!playing)}
            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
              playing ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-400'
            }`}
          >
            <Volume2 size={14} className={playing ? 'animate-bounce' : ''} /> {playing ? 'Playing Sample' : 'Test Sound'}
          </button>
        </div>

        <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80" alt="Monitors" className="w-full h-52 object-cover rounded-2xl mb-4" />

        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-extrabold text-lg">Monitors + Interface + Pads</h3>
            <span className="text-2xl font-black text-rose-400">$649</span>
          </div>
          <button className="px-5 py-3 bg-rose-500 hover:bg-rose-400 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={16} /> Buy Suite
          </button>
        </div>
      </div>

    </div>
  );
}
