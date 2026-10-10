"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function GlobalImageText1() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" /> GLASSMORPHIC SHOWCASE
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Crafted with Precision & Liquid Glass Aesthetics
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Experience engineered luxury with dynamic frosted backdrops, subtle glow accents, and responsive layout scaling.
          </p>
          <div className="space-y-3 pt-2">
            {['Ultra-responsive fluid glass container', 'Hardware accelerated blur & glow', 'Curated aesthetic precision'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-300 font-medium">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <button className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all flex items-center gap-2">
              Explore Innovation <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/60 p-3 backdrop-blur-xl">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Glassmorphic Feature" className="w-full h-[450px] object-cover rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}