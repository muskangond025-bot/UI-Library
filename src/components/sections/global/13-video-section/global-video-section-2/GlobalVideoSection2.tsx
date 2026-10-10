"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, Sliders } from 'lucide-react';

export function GlobalVideoSection2() {
  return (
    <section className="w-full py-24 px-6 bg-stone-50 text-stone-900 font-serif border-y border-stone-200">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">Editorial Cinema</span>
            <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4">Haute Couture 2026 Lookbook Film</h2>
          </div>
          <p className="font-sans text-stone-600 text-sm max-w-md">
            Directed by Antoine Laurent. An immersive 21:9 cinematic exploration of raw textures and sculptural tailoring.
          </p>
        </div>

        {/* 21:9 Widescreen Video Player */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] border border-stone-300 group">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" alt="Editorial Video" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 text-stone-900 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 fill-stone-900 ml-1" />
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 font-sans flex justify-between items-center text-white bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/20">
            <span className="text-xs font-mono tracking-widest uppercase">CHAPTER 02 / RUNWAY DIRECTORS CUT</span>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span>04:20 / 12:00</span>
              <Volume2 className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}