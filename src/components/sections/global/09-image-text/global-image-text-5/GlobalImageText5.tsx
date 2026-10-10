"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export function GlobalImageText5() {
  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div className="space-y-6">
          <span className="text-xs uppercase tracking-widest text-pink-500 font-mono font-bold">Holographic Cyber Suite</span>
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Next-Gen Holographic Telemetry Interface
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Iridescent neon sheen borders, reactive crosshairs, and dark obsidian glass visual depth.
          </p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
            Launch Telemetry <Eye className="w-4 h-4" />
          </button>
        </motion.div>
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
          <div className="bg-zinc-950 rounded-2xl p-2 h-[400px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" alt="Holographic Cyber" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}