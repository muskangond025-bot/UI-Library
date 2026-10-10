import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Play, Pause, ArrowRight } from 'lucide-react';

export function AboutHero12({ data, section }: { data?: any; section?: any }) {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-[#1C120C] text-orange-100 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="px-5 py-2 rounded-full bg-orange-950 border border-orange-500/40 text-orange-300 text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-lg">
            <Compass className="w-4 h-4 text-orange-400" /> ORGANIC FLUID WAVE #12
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Asymmetric Organic Sunset Shell
          </h1>
          <p className="text-orange-200/80 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Harmonizing technology and human intuition through organic curved UI shell containers and warm sunset orange gradient glows.
          </p>
        </div>

        {/* Audio Story Player Banner Container */}
        <div className="p-8 sm:p-14 rounded-[3rem] bg-orange-950/40 border border-orange-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setPlaying(!playing)}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            >
              {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
            </button>
            <div>
              <h4 className="text-2xl font-bold text-white">Brand Founder Audio Vision</h4>
              <p className="text-xs text-orange-300 font-mono mt-1">3 Min Story • Narrated by Sarah Chen</p>
            </div>
          </div>

          <button className="px-8 py-4 rounded-2xl bg-orange-500 text-white font-extrabold text-xs uppercase tracking-widest hover:bg-orange-400 transition-all flex items-center gap-2 shadow-lg">
            <span>Read Full Story</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}