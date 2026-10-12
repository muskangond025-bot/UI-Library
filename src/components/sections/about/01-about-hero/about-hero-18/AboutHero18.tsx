import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, ArrowRight, Layers, CheckCircle2, Compass } from 'lucide-react';

export function AboutHero18({ data, section }: { data?: any; section?: any }) {
  const [wireframeMode, setWireframeMode] = useState(false);

  return (
    <section className="w-full h-[520px] sm:h-[580px] lg:h-[620px] min-h-[460px] max-h-[680px] py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-neutral-100 overflow-hidden relative font-sans flex flex-col justify-between">
      
      {/* 1. FULL-SCREEN 3D ARCHITECTURAL MEDIA BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={wireframeMode
            ? "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=2000&q=80"
            : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          }
          alt="Architectural 3D Masterplan"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-125 transition-all duration-700"
        />
        {/* Architectural Hairline Blueprint Gridlines Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8815_1px,transparent_1px),linear-gradient(to_bottom,#00ff8815_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        
        {/* Dark Vignette Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/40 pointer-events-none" />
      </div>

      {/* 2. HERO CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between relative z-10 gap-3 sm:gap-4">
        
        {/* Top Header Badge & Mode Switcher */}
        <div className="flex items-center justify-between flex-wrap gap-3 shrink-0">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-emerald-500/40 backdrop-blur-xl text-emerald-400 text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <Maximize2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            ARCHITECTURAL SPATIAL 3D • DESIGN #18
          </motion.span>

          {/* Blueprint Mode Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setWireframeMode(!wireframeMode)}
            className={`px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 border backdrop-blur-md ${
              wireframeMode
                ? 'bg-emerald-500/30 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'bg-neutral-900/80 border-neutral-700 text-neutral-300 hover:bg-neutral-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>{wireframeMode ? 'Mode: Blueprint' : 'Mode: Photorealistic'}</span>
          </motion.button>
        </div>

        {/* Central Hero Headline & CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center flex-1 min-h-0">
          <div className="lg:col-span-8 flex flex-col justify-center space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-[1.12]"
            >
              Pioneering Architectural Spatial Design Systems
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-xl font-sans line-clamp-3"
            >
              Transforming complex urban masterplans into real-time interactive 3D spatial environments with precision vector line-art overlays and sub-millimeter BIM accuracy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 flex-wrap pt-1"
            >
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950 font-extrabold text-[11px] sm:text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:scale-105 transition-all flex items-center gap-2">
                <span>Explore 3D Masterplan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button className="px-4 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700 text-neutral-200 font-bold text-[11px] sm:text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center gap-1.5 backdrop-blur-md">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>View CAD Specs</span>
              </button>
            </motion.div>
          </div>

          {/* Floating Live Metrics Card Deck */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/85 border border-emerald-500/35 backdrop-blur-2xl shadow-xl space-y-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 font-bold uppercase">
                <span>BIM ACCURACY SPEC</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">0.001mm</div>
              <div className="text-[11px] sm:text-xs text-neutral-400 font-mono leading-relaxed">
                Vector precision tolerance maintained across 1,400+ enterprise spatial deployments.
              </div>
              <div className="pt-2 border-t border-neutral-800 flex justify-between text-[10px] font-mono text-emerald-400/80">
                <span>STATUS: CERTIFIED</span>
                <span>ISO 19650-2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle indicator line */}
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 border-t border-neutral-800/80 pt-2 shrink-0">
          <span>SPATIAL BIM ENGINE V4</span>
          <span>100% REAL-TIME HARDWARE ACCELERATED</span>
        </div>
      </div>
    </section>
  );
}
