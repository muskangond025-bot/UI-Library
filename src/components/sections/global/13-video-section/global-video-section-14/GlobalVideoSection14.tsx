"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection14() {
  return (
    <section className="w-full py-20 px-6 bg-black text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl font-black uppercase">21:9 Widescreen Cinema Canvas</h2>
        <div className="relative rounded-2xl overflow-hidden h-[480px] border border-zinc-800">
          <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop" alt="Cinema Canvas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs font-mono">
            <span>FULL HD 21:9 CINEMATIC DISPLAY</span>
            <span>05:10 / 14:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}