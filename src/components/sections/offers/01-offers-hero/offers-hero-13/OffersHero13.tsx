import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';

export function OffersHero13({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-16 px-6 bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>FEATURED PRODUCT REVEAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            SIGNATURE DROP <br/><span className="text-emerald-400">FLAT 50% OFF</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Direct discount allocation on luxury timepieces and leather accessories. Hover over product frame to trigger detail crop expansion.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
              <span>SHOP PRODUCT REVEAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-700 group shadow-2xl cursor-pointer">
            <motion.img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80"
              alt="Featured Reveal"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 flex justify-between items-center">
              <div>
                <div className="text-xs text-emerald-400 font-bold uppercase">LUXURY CHRONO</div>
                <div className="text-sm font-bold text-white">WAS ₹14,999 → NOW ₹7,499</div>
              </div>
              <span className="px-3 py-1 bg-emerald-500 text-slate-950 text-xs font-bold rounded-lg">50% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero13;
