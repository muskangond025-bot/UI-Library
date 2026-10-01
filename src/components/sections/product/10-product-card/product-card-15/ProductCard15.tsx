import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, ShoppingBag, Sparkles } from 'lucide-react';

export default function ProductCard15({ data }: { data?: any }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      {/* Pulsating Aura Backdrop */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute w-[450px] h-[300px] bg-rose-600/20 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="w-full max-w-sm bg-slate-900 border border-rose-500/30 rounded-3xl p-5 shadow-[0_0_40px_rgba(244,63,94,0.15)] relative">
        
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-rose-950 border border-rose-500/30 text-rose-400 text-xs font-bold rounded-full flex items-center gap-1.5">
            <Sparkles size={12} /> Cinematic Sound
          </span>

          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              isPlaying ? 'bg-rose-500 text-white shadow-lg' : 'bg-slate-800 text-slate-400'
            }`}
          >
            <Volume2 size={14} className={isPlaying ? 'animate-bounce' : ''} /> {isPlaying ? 'Playing Audio' : 'Sound Test'}
          </button>
        </div>

        <div className="relative w-full h-60 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" 
            alt="Synthwave Headphones" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="font-extrabold text-xl text-white mb-1">Aura Noise-Canceling ANC</h3>
        <p className="text-xs text-slate-400 mb-4">40mm Titanium Drivers • Ultra-Low Latency Bluetooth 5.3</p>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span className="text-2xl font-black text-rose-400">$329</span>
          <button className="px-5 py-3 bg-rose-500 hover:bg-rose-400 text-white font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
}
