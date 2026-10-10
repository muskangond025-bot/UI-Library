"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export function GlobalImageText13() {
  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase">
            <Compass className="w-4 h-4" /> Radial Orbital Lens
          </div>
          <h2 className="text-4xl font-extrabold text-white">Central Orbital Spotlight</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Featuring radial circular frames surrounded by floating attribute nodes.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-indigo-500/30 p-2 bg-slate-800 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop" alt="Radial Orbital" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}