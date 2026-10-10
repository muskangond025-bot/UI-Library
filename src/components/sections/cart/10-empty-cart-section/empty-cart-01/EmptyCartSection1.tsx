import React from 'react';
import { ShoppingBag, ArrowRight, Sparkles, Compass } from 'lucide-react';

export const EmptyCartSection1: React.FC = () => {
  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-slate-950 text-white flex items-center justify-center relative overflow-hidden">
      {/* 3D SPATIAL PARTICLES */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px] opacity-25 animate-pulse pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none animate-spin-slow" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
          DRIBBLE 3D SPATIAL CART
        </span>

        {/* 3D FLOATING BAG BADGE */}
        <div className="relative my-6 inline-block">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-indigo-600/40 via-purple-600/30 to-pink-500/20 border border-indigo-400/50 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_60px_rgba(99,102,241,0.35)] relative">
            <ShoppingBag className="w-16 h-16 md:w-20 md:h-20 text-indigo-300 animate-bounce" />
            <span className="absolute -top-2 -right-2 text-xs font-mono font-bold bg-indigo-600 text-white px-3 py-1 rounded-full border border-indigo-400">0 ITEMS</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
          YOUR SHOPPING CART IS EMPTY
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto text-indigo-200/80 mb-10 leading-relaxed">
          Your cart feels light as air. Fill it with trending items & exclusive drops.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-2xl transition-all shadow-lg shadow-indigo-600/40 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4" />
            <span>Explore New Arrivals</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
