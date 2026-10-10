"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

export function GlobalImageText3() {
  return (
    <section className="w-full py-20 px-6 bg-lime-400 text-black font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div whileHover={{ x: -4, y: -4 }} className="border-4 border-black bg-white p-8 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <div className="inline-flex items-center gap-2 bg-black text-lime-400 text-xs font-black px-3 py-1 uppercase rounded">
            <Zap className="w-4 h-4 fill-lime-400" /> RAW TECH 2026
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase leading-none text-black">
            HIGH VOLTAGE HARDWARE
          </h2>
          <p className="font-medium text-black/80">
            Unapologetic design, heavy borders, high-contrast typography, and uncompromising performance parameters.
          </p>
          <button className="w-full py-4 bg-black text-lime-400 font-black uppercase text-sm rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 transition-transform flex items-center justify-center gap-2">
            CLAIM YOUR DROP <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>
        <div className="border-4 border-black rounded-2xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] h-[440px] bg-black">
          <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop" alt="Neo Brutalist" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}