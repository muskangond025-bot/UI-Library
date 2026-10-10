"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Volume2 } from 'lucide-react';

export function GlobalVideoSection4() {
  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Claymorphic Soft Cinema
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">Tactile Video Console</h2>
        </div>

        <div className="p-8 rounded-3xl bg-purple-100 border-2 border-purple-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] max-w-4xl mx-auto">
          <div className="h-[420px] rounded-2xl overflow-hidden border-2 border-white shadow-md relative bg-slate-900">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop" alt="Soft Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white text-purple-600 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-purple-600 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl flex justify-between items-center text-xs font-bold text-slate-800">
              <span>Beauty Routine Tutorial Video</span>
              <Volume2 className="w-4 h-4 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}