"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Play } from 'lucide-react';

export function GlobalVideoSection12() {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">[SYS_VIDEO_MONITOR]</span>
        </div>
        <h2 className="text-3xl font-bold uppercase text-white tracking-wider">TECHNICAL VIDEO MONITOR SPEC</h2>

        <div className="border border-slate-700 p-6 rounded bg-slate-900 h-[420px] relative">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" alt="Blueprint Video" className="w-full h-full object-cover opacity-70 rounded" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 border-2 border-white bg-slate-950/80 rounded-full flex items-center justify-center text-white">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs text-slate-400 bg-slate-950/90 p-3 rounded border border-slate-800">
            <span>FPS: 60.00 // COLOR: DCI-P3</span>
            <span>04:10 / 12:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}