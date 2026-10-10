import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowUpRight, ShieldCheck, CheckCircle2, Award, Zap, Compass, Star } from 'lucide-react';

export function AboutHero3({ data }: { data?: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Smooth scroll-driven animation for central hero character
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Central Hero Subject: Always bright & visible, glides UP smoothly on scroll (60px to -260px)
  const heroY = useTransform(scrollYProgress, [0, 0.5, 1], [40, -140, -280]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.06, 1.12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 3]);

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
      className="w-full min-h-[900px] bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950 text-white relative overflow-hidden font-sans pt-10 pb-20"
    >
      {/* 1. TOP GIANT BACKGROUND TYPOGRAPHY HEADER */}
      <div className="w-full text-center relative z-0 opacity-95 select-none pointer-events-none px-4">
        <h1 className="text-[13vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          SUPER COOL
        </h1>
      </div>

      {/* 2. CONTINUOUS MARQUEE TICKER RIBBON BAR */}
      <div className="w-full py-2.5 bg-slate-950/90 border-y border-white/15 overflow-hidden relative z-10 shadow-xl my-4">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-8 whitespace-nowrap text-xs font-mono font-bold tracking-wider uppercase text-cyan-300"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{item}</span>
              <span className="opacity-40">/</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* TOP BADGE IDENTIFIER */}
      <div className="text-center relative z-20 my-4">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.25)]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" /> SUPER COOL 3D CHROME HERO #03 • ANIMATION: SCROLL-DRIVEN CENTRAL HERO DOWN-TO-UP GLIDE
        </span>
      </div>

      {/* MAIN HERO CANVAS & THREE-COLUMN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative min-h-[600px]">
          
          {/* LEFT COLUMN: Main Title, CTA, Floating Photo & Metric Stats */}
          <div className="lg:col-span-4 space-y-8 z-30 pb-6">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-white">
                Redefining Safety <br />
                On Every Ride
              </h2>
              
              <motion.button
                whileHover={{ scale: 1.04, x: 4 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 rounded-full bg-white text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:bg-cyan-300 transition-colors"
              >
                <span>Explore Collection</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </motion.button>
            </div>

            {/* Left Floating Photo Preview Card */}
            <div className="p-4 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-2xl space-y-3 max-w-sm">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80"
                  alt="Helmet Tech Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 border border-white/20 text-[10px] font-mono text-cyan-300 font-bold">
                  TECH V4.0
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 text-left font-mono">
                <div>
                  <h4 className="text-xl font-black text-white">99.8%</h4>
                  <span className="text-[10px] text-slate-400 leading-tight block">Impact Absorption Rate</span>
                </div>
                <div>
                  <h4 className="text-xl font-black text-cyan-400">500,000+</h4>
                  <span className="text-[10px] text-slate-400 leading-tight block">Riders Protected</span>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Central 3D Chrome Hero Character (SCROLL-DRIVEN GLIDE DOWN TO UP) */}
          <div className="lg:col-span-4 relative flex items-end justify-center h-full min-h-[520px] lg:min-h-[620px] z-30 overflow-visible">
            {/* Ambient Background Aura Glow behind Hero Character */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/40 via-blue-600/30 to-transparent rounded-full blur-3xl pointer-events-none scale-150" />

            {/* SCROLL-DRIVEN CENTRAL HERO CHARACTER MOTION (OVERLAPS TOP HEADER & TICKER BAR) */}
            <motion.div
              style={{
                y: heroY,
                scale: heroScale,
                opacity: heroOpacity,
                rotate: heroRotate
              }}
              className="relative z-40 w-full max-w-lg mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.95)] border-2 border-white/30 group bg-slate-900">
                <img
                  src="/about_hero_chrome_model.jpg"
                  alt="Central Chrome Hero Subject"
                  className="w-full h-auto object-cover object-center rounded-3xl transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle Inner Lighting Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Status Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/20 text-xs font-mono text-cyan-300 flex items-center justify-between shadow-xl">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    SCROLL-DRIVEN DOWN-TO-UP GLIDE
                  </span>
                  <span className="font-bold text-white uppercase tracking-wider text-[10px] bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-400/40">PRO MODEL</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Floating Safety Card & Descriptive Feature Text */}
          <div className="lg:col-span-4 space-y-6 z-30 pb-6 flex flex-col justify-between">
            {/* Top Right Safety System Card */}
            <div className="p-4 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-2xl space-y-3 ml-auto w-full max-w-sm">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80"
                  alt="3 Layer Safety System"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-slate-950/85 border border-white/20 text-xs font-mono font-bold text-white shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>3 Layer Safety System</span>
                </div>
              </div>
            </div>

            {/* Right Side Feature Copy */}
            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 space-y-3 text-left max-w-sm ml-auto shadow-xl">
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider block">PREMIUM PROTECTION</span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Lightweight, impact-resistant snow helmet & goggles designed for comfort, warmth, and all-day performance on any mountain terrain.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
