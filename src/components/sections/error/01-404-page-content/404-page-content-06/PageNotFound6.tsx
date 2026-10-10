import React, { useState } from 'react';
import { Compass, Home, PhoneCall, ShieldAlert, Key } from 'lucide-react';

export const PageNotFound6: React.FC = () => {
  return (
    <section className="min-h-[85vh] py-20 px-4 md:px-8 bg-gradient-to-b from-stone-900 via-neutral-900 to-black text-amber-100 flex items-center justify-center relative">
      <div className="max-w-3xl mx-auto bg-stone-900 border-2 border-amber-500/40 rounded-3xl p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-center relative overflow-hidden">
        {/* BRASS ACCENT STRIP */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600" />

        <span className="inline-block text-xs font-mono uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 bg-amber-900/40 text-amber-300 border border-amber-500/40">
          DRIBBLE SKEUOMORPHIC BRASS
        </span>

        {/* BRASS COMPASS DIAL */}
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-b from-amber-700 via-amber-900 to-stone-950 border-4 border-amber-400 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8)] flex items-center justify-center mb-6 relative">
          <Compass className="w-16 h-16 text-amber-300 animate-spin-slow" />
          <span className="absolute text-xs font-bold text-amber-400 top-1">N</span>
          <span className="absolute text-xs font-bold text-amber-400 bottom-1">S</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-serif text-amber-200 mb-2">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif text-amber-100 mb-4">
          Uncharted Luxury Route
        </h2>
        <p className="text-sm md:text-base max-w-md mx-auto text-amber-200/70 mb-10 leading-relaxed font-serif">
          The private suite or destination you are seeking has been moved or requires special concierge clearance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-bold text-sm rounded-2xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Escort Back to Lobby</span>
          </a>
          <a
            href="tel:+18005550199"
            className="w-full sm:w-auto px-8 py-4 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-500/30 font-semibold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Concierge Direct Line</span>
          </a>
        </div>
      </div>
    </section>
  );
};
