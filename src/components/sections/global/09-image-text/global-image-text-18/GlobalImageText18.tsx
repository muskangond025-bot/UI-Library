"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

export function GlobalImageText18() {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs">
            <Layers className="w-4 h-4" /> ELEVATED CARD STACK
          </div>
          <h2 className="text-4xl font-extrabold text-white">Elevated Card Stack Deck</h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Multi-layered cards offset with elevation drop shadows and floating indicator badges.
          </p>
          <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-bold flex items-center gap-2 hover:bg-indigo-500 transition-colors">
            View Stack <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl shadow-2xl h-[420px]">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" alt="Elevated Stack" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}