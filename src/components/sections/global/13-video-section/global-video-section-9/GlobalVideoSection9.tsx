"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';

export function GlobalVideoSection9() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-sky-100 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Sub-Zero Ice Cinema
          </div>
          <h2 className="text-4xl font-extrabold text-white">Chilled Video Player Showcase</h2>
        </div>

        <div className="bg-sky-950/30 border border-sky-500/30 backdrop-blur-xl p-4 rounded-3xl shadow-[0_0_30px_rgba(56,189,248,0.1)] max-w-4xl mx-auto h-[440px] relative">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Sub Zero Video" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
              <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 bg-sky-950/80 backdrop-blur-md p-3 rounded-xl border border-sky-500/30 flex justify-between items-center text-xs font-mono text-sky-300">
            <span>CHILLED DOCUMENTARY STREAM</span>
            <span>07:15 / 12:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}