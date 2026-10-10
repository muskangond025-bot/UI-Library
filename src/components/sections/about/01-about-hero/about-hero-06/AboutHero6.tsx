import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, ArrowRight, Play, Globe, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';

export function AboutHero6({ data, section }: { data?: any; section?: any }) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* 4-Card Multi-Tile Bento Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Card (Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-[2.5rem] p-8 sm:p-12 backdrop-blur-xl flex flex-col justify-between space-y-8 shadow-2xl relative overflow-hidden group hover:border-rose-500/40 transition-colors"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider">
                <LayoutGrid className="w-4 h-4 text-rose-400" /> EDITORIAL BENTO HERO #06
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
                Architecting Modular Enterprise Storefronts
              </h1>

              <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl">
                We decompose complex e-commerce architectures into modular, ultra-responsive bento grid layouts with sub-second page transitions and frosted glass visual depth.
              </p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-800 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-500/40 p-0.5 flex items-center justify-center text-rose-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">GLOBAL ENTERPRISE READY</h4>
                  <span className="text-xs text-slate-400 font-mono mt-1 inline-block">100% SLA Uptime Guarantee</span>
                </div>
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-[0_0_30px_rgba(244,63,94,0.4)] flex items-center gap-2">
                <span>Explore Bento Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Media Video Reel Card (Span 4) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-[2.5rem] overflow-hidden min-h-[320px] relative group flex flex-col justify-end p-6 hover:border-rose-500/40 transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Bento Media Showcase"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="relative z-10 space-y-3">
              <button
                onClick={() => setPlaying(!playing)}
                className="w-14 h-14 rounded-full bg-rose-500 text-slate-950 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              >
                <Play className="w-6 h-6 fill-current ml-1" />
              </button>
              <div>
                <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded border border-slate-800 text-rose-400 text-[10px] font-mono font-bold uppercase inline-block">
                  BRAND STORY REEL
                </span>
                <h4 className="text-base font-bold text-white mt-1">Watch 2-Min Culture Story</h4>
              </div>
            </div>
          </motion.div>

          {/* Live Progress Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 font-bold uppercase">GLOBAL GMV PROCESSED</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-white font-mono">$4.2 Billion</div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-rose-500 to-pink-400 h-full w-[88%]" />
            </div>
          </motion.div>

          {/* Team & Distribution Card (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex items-center justify-between flex-wrap gap-4 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-mono">420+ Team Members</h4>
                <p className="text-xs text-slate-400 font-mono">San Francisco • London • Tokyo • Oslo</p>
              </div>
            </div>
            <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              100% REMOTE FIRST
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
