"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Play } from 'lucide-react';

export function GlobalVideoSection7() {
  return (
    <section className="w-full py-20 px-6 bg-zinc-950 text-amber-100 font-serif border-y border-amber-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-amber-600/40 bg-amber-950/30 text-amber-400 text-xs font-mono uppercase mb-3">
            <Award className="w-4 h-4" /> Royal Theater
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-200">Embossed Gold Theater Showcase</h2>
        </div>

        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-800/40 rounded-3xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="h-[440px] rounded-2xl overflow-hidden border border-amber-700/40 relative">
            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" alt="Royal Cinema" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-amber-500 bg-amber-950/90 flex items-center justify-center text-amber-300 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-amber-300 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/80 backdrop-blur-md p-4 rounded-xl border border-amber-700/40 flex justify-between items-center text-xs font-mono text-amber-400">
              <span>ROYAL HERITAGE DOCUMENTARY</span>
              <span>08:45 / 15:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}