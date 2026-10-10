"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function GlobalImageText10() {
  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-amber-800 text-xs font-mono font-bold uppercase">
            <Tag className="w-4 h-4" /> Vintage Archive 1994
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight">Analog Memories & Vintage Aesthetics</h2>
          <p className="font-sans text-stone-700 text-base leading-relaxed">
            Classic Polaroid frames, handwritten tape tags, and warm film grain tone scales.
          </p>
        </div>
        <motion.div whileHover={{ rotate: 0 }} className="bg-white p-5 pb-8 shadow-2xl border border-stone-300 rounded-sm -rotate-2 cursor-pointer">
          <div className="h-80 bg-stone-100 overflow-hidden mb-4 border border-stone-200">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" alt="Retro Polaroid" className="w-full h-full object-cover" />
          </div>
          <div className="font-sans flex justify-between items-center text-sm font-bold text-stone-800">
            <span>Summer Archive #04</span>
            <span className="text-amber-800 font-mono">EST. 1994</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}