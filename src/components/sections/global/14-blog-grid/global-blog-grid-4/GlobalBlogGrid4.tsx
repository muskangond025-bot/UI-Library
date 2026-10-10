"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Flame } from 'lucide-react';

export function GlobalBlogGrid4() {
  return (
    <section className="w-full py-24 px-6 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-8 bg-rose-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">High-Tech Bento Matrix #4</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-rose-950/80 to-neutral-900 rounded-3xl p-8 border border-rose-500/30 flex flex-col justify-between min-h-[420px] cursor-pointer group">
            <div>
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-mono font-bold">TOP FEATURE</span>
              <h3 className="text-2xl sm:text-4xl font-black text-white group-hover:text-rose-400 transition-colors mt-6 mb-4 leading-snug">Quantum Neural Shading & Realtime Graphics Pipelines</h3>
              <p className="text-neutral-400 text-sm line-clamp-3 leading-relaxed">How GPU neural radiance fields are replacing polygon rasterization in modern VFX production.</p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-white/10 text-xs text-neutral-400">
              <span>Dr. Alexis Morgan • 8 min read</span>
              <ArrowUpRight className="w-5 h-5 text-rose-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900 rounded-3xl p-6 border border-white/10 flex flex-col justify-between min-h-[420px] cursor-pointer group">
            <div className="w-full h-44 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" alt="Sole" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold">HARDWARE</span>
              <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mt-2">Parametric Sole Engineering</h4>
            </div>
            <span className="text-xs text-neutral-400 pt-4 border-t border-white/10">Read Article →</span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900 rounded-3xl p-6 border border-white/10 flex flex-col justify-between min-h-[420px] cursor-pointer group">
            <div className="w-full h-44 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" alt="Watch" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold">LUXURY</span>
              <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mt-2">Titanium Skeleton Watches</h4>
            </div>
            <span className="text-xs text-neutral-400 pt-4 border-t border-white/10">Read Article →</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}