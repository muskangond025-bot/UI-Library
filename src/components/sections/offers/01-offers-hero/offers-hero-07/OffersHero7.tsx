import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function OffersHero7({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full py-16 px-6 bg-stone-950 text-stone-100 rounded-3xl border border-stone-800 overflow-hidden shadow-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTAL COLLECTION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            THE ARCHIVE <br/><span className="text-amber-400">50% OFF EDIT</span>
          </h1>
          <p className="text-stone-400 text-sm leading-relaxed">
            Step through our curated seasonal portal. Discover luxury attire and footwear with limited-run pricing.
          </p>
          <div className="pt-2 flex items-center gap-4">
            <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
              <span>ENTER PORTAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-t-full border-4 border-amber-500/30 overflow-hidden shadow-2xl group cursor-pointer">
            <motion.img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80"
              alt="Portal Edit"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-stone-900/80 backdrop-blur-md border border-stone-700 text-center">
              <div className="text-xs text-amber-400 font-bold uppercase tracking-widest">SEASONAL PASS</div>
              <div className="text-lg font-extrabold text-white">CODE: PORTAL50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero7;
