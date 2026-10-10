"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Disc } from 'lucide-react';

export function GlobalVideoSection5() {
  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-pink-500 font-mono font-bold">Holographic HUD Stream</span>
            <h2 className="text-4xl font-extrabold text-white mt-1">Futuristic Telemetry Video Monitor</h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Disc className="w-4 h-4 animate-spin text-cyan-400" /> REC 4K 60FPS
          </div>
        </div>

        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_40px_rgba(236,72,153,0.3)]">
          <div className="bg-zinc-950 rounded-2xl p-4 h-[480px] relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" alt="Holographic Video" className="w-full h-full object-cover rounded-xl opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.8)] cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/20 flex justify-between items-center text-xs font-mono text-cyan-300">
              <span>TELEMETRY TIME: 00:04:21 / 12:00:00</span>
              <span className="text-pink-400">STATUS: ENCRYPTED VIDEO FEED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}