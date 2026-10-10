"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalImageText2() {
  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative order-2 lg:order-1">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[480px]">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" alt="Editorial Fashion" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 z-0 w-full h-full border-2 border-stone-900 rounded-2xl pointer-events-none hidden sm:block" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Volume 26 / Editorial</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 leading-tight">
            Timeless Silhouette & Modern Form
          </h2>
          <p className="font-sans text-stone-600 text-base leading-relaxed">
            An exploration of raw textures, sculptural tailoring, and sustainable luxury craftsmanship designed for contemporary lifestyle.
          </p>
          <div className="pt-4 font-sans">
            <a href="#" className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-stone-900 border-b-2 border-stone-900 pb-1 hover:text-amber-800 hover:border-amber-800 transition-colors">
              View Lookbook <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}