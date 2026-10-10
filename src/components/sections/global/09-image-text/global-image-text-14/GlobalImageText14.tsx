"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalImageText14() {
  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono text-amber-400 uppercase">CINEMATIC FRAMEWORK</span>
          <h2 className="text-4xl font-black uppercase tracking-wide">Motion Video Storyboard</h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Wide aspect letterbox presentation with overlay video controls and playhead indicators.
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden h-[400px] border border-zinc-800">
          <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop" alt="Cinematic Motion" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Play className="w-6 h-6 fill-white ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}