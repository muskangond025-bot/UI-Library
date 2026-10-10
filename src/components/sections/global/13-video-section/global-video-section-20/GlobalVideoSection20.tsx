"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Clock, Eye } from 'lucide-react';

export function GlobalVideoSection20() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Video Suite
            </div>
            <h2 className="text-4xl font-black text-white">Omnichannel Master Video Hub</h2>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl max-w-5xl mx-auto h-[480px] relative">
          <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop" alt="Master Video Hub" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-slate-950 ml-1" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 flex justify-between items-center text-xs font-mono text-cyan-400">
            <div className="flex items-center gap-4">
              <span className="font-bold text-white">FLAGSHIP PRODUCT MASTER REEL</span>
              <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3.5 h-3.5" /> 08:45</span>
            </div>
            <span className="flex items-center gap-1 text-cyan-400 font-bold"><Eye className="w-3.5 h-3.5" /> 245K VIEWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}