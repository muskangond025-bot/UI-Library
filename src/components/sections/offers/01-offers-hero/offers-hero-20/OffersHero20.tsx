import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function OffersHero20({ data, section }: { data?: any; section?: any }) {
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btnBox = e.currentTarget.querySelector('button')?.getBoundingClientRect();
    if (!btnBox) return;

    const btnCenterX = btnBox.left + btnBox.width / 2;
    const btnCenterY = btnBox.top + btnBox.height / 2;
    const dist = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY);

    if (dist < 120) {
      setBtnPos({ x: (e.clientX - btnCenterX) * 0.3, y: (e.clientY - btnCenterY) * 0.3 });
    } else {
      setBtnPos({ x: 0, y: 0 });
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 px-8 bg-slate-950 text-white rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl select-none"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Award className="w-4 h-4" />
            <span>AWARD-WINNING CAMPAIGN HERO</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> GUARANTEED BEST PRICE
            </span>
            <span>//</span>
            <span>LIMITED STOCK</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-none">
              THE ULTIMATE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500">
                50% OFF OFFER
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-light leading-relaxed">
              Synthesizing kinetic typography, glass depth layers, and magnetic interaction into our premier promotional hero.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.button
                animate={{ x: btnPos.x, y: btnPos.y }}
                transition={{ type: 'spring', stiffness: 220, damping: 15 }}
                className="px-9 py-4.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-amber-500/25 flex items-center gap-3 cursor-pointer"
              >
                <span>CLAIM FLAGSHIP OFFER</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <div className="px-5 py-3.5 bg-slate-900 border border-slate-700 rounded-2xl text-xs font-mono text-amber-300">
                CODE: <strong className="text-white text-sm font-bold">FLAGSHIP50</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs p-6 rounded-3xl bg-slate-900/80 backdrop-blur-md border border-slate-700 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-400 font-bold uppercase">PROMO METRICS</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white">99.8%</div>
                <div className="text-xs text-slate-400 font-medium">Customer Satisfaction</div>
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between text-xs font-mono text-slate-400">
                <span>REDEEMED: 1,420</span>
                <span>REMAINING: 80</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero20;
