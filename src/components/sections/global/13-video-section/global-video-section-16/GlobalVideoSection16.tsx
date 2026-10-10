"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection16() {
  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-bold uppercase">Matrix Encrypted Video Terminal</h2>
        </div>

        <div className="border border-emerald-800 bg-emerald-950/20 p-6 rounded hover:border-emerald-400 cursor-pointer h-[440px] relative">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Matrix Video" className="w-full h-full object-cover rounded opacity-70" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-16 h-16 border border-emerald-400 bg-emerald-950/90 rounded flex items-center justify-center text-emerald-400">
              <Play className="w-6 h-6 fill-emerald-400" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs text-emerald-500 bg-black/80 p-3 rounded border border-emerald-900">
            <span>FEED_ID // 0x4910</span>
            <span>STATUS: LIVE STREAM OK</span>
          </div>
        </div>
      </div>
    </section>
  );
}