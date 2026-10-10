"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Play, Radio } from 'lucide-react';

export function GlobalVideoSection3() {
  return (
    <section className="w-full py-20 px-6 bg-yellow-50 text-slate-950 font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between border-b-4 border-black pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-lime-400 flex items-center justify-center font-black rounded">
              <Zap className="w-5 h-5 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">LIVE STREAM MONITOR</h2>
          </div>
          <div className="flex items-center gap-2 bg-black text-lime-400 px-3 py-1 font-black text-xs uppercase rounded">
            <Radio className="w-4 h-4 animate-pulse text-red-500 fill-red-500" /> LIVE 14.2K VIEWERS
          </div>
        </div>

        <div className="border-4 border-black bg-black rounded-2xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative h-[480px]">
          <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop" alt="Cyberpunk Video Stream" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-lime-400 text-black border-4 border-black rounded-full flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:translate-x-1 hover:translate-y-1 transition-transform">
              <Play className="w-10 h-10 fill-black ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-lime-400 border-2 border-black p-3 font-black text-xs uppercase flex justify-between items-center rounded">
            <span>SYS_STREAM // TOKYO_STAGE_01</span>
            <span>00:45:12 / LIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}