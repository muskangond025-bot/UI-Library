import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function OffersHero11({ data, section }: { data?: any; section?: any }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 px-8 bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl select-none"
    >
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-80"
        style={{
          background: 'radial-gradient(600px circle at ' + pos.x + 'px ' + pos.y + 'px, rgba(236,72,153,0.18), transparent 80%)'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SPOTLIGHT DEALS</span>
        </div>

        <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tight uppercase leading-tight">
          ILLUMINATE YOUR <span className="text-pink-500">SAVINGS // 50% OFF</span>
        </h1>

        <p className="text-slate-400 text-base max-w-xl mx-auto font-light">
          Move your cursor over the spotlight canvas to uncover hidden campaign vouchers and promotional offers.
        </p>

        <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
          <button className="px-8 py-4 bg-pink-500 hover:bg-pink-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-pink-500/25 flex items-center gap-2">
            <span>UNLOCK SPOTLIGHT OFFER</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="px-5 py-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-mono text-pink-300">
            CODE: <strong className="text-white">SPOTLIGHT50</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero11;
