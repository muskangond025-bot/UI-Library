import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function AboutHero3({ data }: { data?: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Smooth scroll-driven animation for central hero character
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.5, 1], [20, -50, -120]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.02, 1.06]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  const marqueeItems = [
    "Ride With Confidence",
    "Built For Impact",
    "Designed For Speed",
    "Winter Upgraded",
    "99.8% Impact Absorption",
    "3-Layer Safety System",
    "Aerodynamic Chrome Finish"
  ];

  return (
    <section
      ref={containerRef}
      className="w-full h-[520px] sm:h-[580px] lg:h-[620px] min-h-[460px] max-h-[680px] bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden font-sans py-3 sm:py-5 px-4 sm:px-6 lg:px-8 flex flex-col justify-between"
    >
      {/* 1. TOP BACKGROUND TYPOGRAPHY & MARQUEE TICKER */}
      <div className="w-full shrink-0 space-y-1">
        <div className="w-full text-center relative z-0 opacity-90 select-none pointer-events-none">
          <h1 className="text-[5.5vw] sm:text-[4.5vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 uppercase drop-shadow-[0_6px_20px_rgba(0,0,0,0.8)]">
            SUPER COOL
          </h1>
        </div>

        {/* 2. CONTINUOUS MARQUEE TICKER RIBBON BAR */}
        <div className="w-full py-1.5 bg-slate-950/90 border-y border-white/15 overflow-hidden relative z-10 shadow-lg">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-6 whitespace-nowrap text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase text-cyan-300"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>{item}</span>
                <span className="opacity-40">/</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* MAIN HERO CANVAS & THREE-COLUMN BALANCED LAYOUT */}
      <div className="max-w-7xl mx-auto w-full relative z-20 flex-1 min-h-0 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center h-full">
          
          {/* LEFT COLUMN: Main Title, CTA & Metric Stats */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-1 z-30">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-bold tracking-widest uppercase">
                <Sparkles className="w-3 h-3 text-cyan-400" /> PRO CHROME #03
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight leading-[1.08] text-white">
                Redefining Safety <br />
                On Every Ride
              </h2>
              
              <motion.button
                whileHover={{ scale: 1.03, x: 3 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2 rounded-full bg-white text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_6px_20px_rgba(255,255,255,0.25)] hover:bg-cyan-300 transition-colors mt-2"
              >
                <span>Explore Collection</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
              </motion.button>
            </div>

            {/* Left Compact Photo Preview Card */}
            <div className="p-3 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-white/20 shadow-xl space-y-2 max-w-sm mt-2">
              <div className="h-24 sm:h-28 rounded-xl overflow-hidden border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80"
                  alt="Helmet Tech Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-slate-950/80 border border-white/20 text-[9px] font-mono text-cyan-300 font-bold">
                  TECH V4.0
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10 text-left font-mono">
                <div>
                  <h4 className="text-base font-black text-white">99.8%</h4>
                  <span className="text-[9px] text-slate-400 leading-tight block">Impact Absorption</span>
                </div>
                <div>
                  <h4 className="text-base font-black text-cyan-400">500k+</h4>
                  <span className="text-[9px] text-slate-400 leading-tight block">Riders Protected</span>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Central 3D Chrome Hero Character */}
          <div className="lg:col-span-4 relative flex items-center justify-center h-full z-30">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-blue-600/20 to-transparent rounded-full blur-2xl pointer-events-none scale-125" />

            <motion.div
              style={{
                y: heroY,
                scale: heroScale,
                opacity: heroOpacity
              }}
              className="relative z-40 w-full max-w-[280px] sm:max-w-[320px] mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-2 border-white/30 group bg-slate-900">
                <img
                  src="/about_hero_chrome_model.jpg"
                  alt="Central Chrome Hero Subject"
                  className="w-full h-auto max-h-[300px] sm:max-h-[340px] object-cover object-center rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Status Pill */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/20 text-[10px] font-mono text-cyan-300 flex items-center justify-between shadow-lg">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    3D CHROME
                  </span>
                  <span className="font-bold text-white uppercase tracking-wider text-[9px] bg-cyan-500/20 px-1.5 py-0.5 rounded border border-cyan-400/40">PRO MODEL</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Safety Card & Descriptive Feature Text */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-1 z-30">
            {/* Top Right Safety System Card */}
            <div className="p-3 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-white/20 shadow-xl space-y-2 ml-auto w-full max-w-sm">
              <div className="h-24 sm:h-28 rounded-xl overflow-hidden border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80"
                  alt="3 Layer Safety System"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 rounded-lg bg-slate-950/85 border border-white/20 text-[10px] font-mono font-bold text-white shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>3 Layer Safety System</span>
                </div>
              </div>
            </div>

            {/* Right Side Feature Copy */}
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 space-y-1.5 text-left max-w-sm ml-auto shadow-lg mt-2">
              <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider block">PREMIUM PROTECTION</span>
              <p className="text-slate-300 text-xs leading-relaxed">
                Lightweight, impact-resistant snow helmet & goggles designed for comfort, warmth, and all-day performance on any mountain terrain.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
