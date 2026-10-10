"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection8() {
  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-rose-400">Split-Tone Cinema</span>
          <h2 className="text-4xl font-extrabold uppercase">High Contrast Video Stage</h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Dynamic split-canvas frame designed to focus viewers directly on video action triggers.
          </p>
        </div>
        <div className="h-[420px] rounded-3xl overflow-hidden shadow-2xl relative border border-slate-700">
          <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop" alt="Split Tone Video" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-rose-500 text-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}