import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Star, CheckCircle, TrendingUp, Users, ShieldCheck, Zap } from 'lucide-react';

export function AboutHero5({ data, section }: { data?: any; section?: any }) {
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0914] text-white overflow-hidden relative font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-[35rem] h-[35rem] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[35rem] h-[35rem] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Header Pill */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-5 py-2 rounded-full bg-indigo-900/60 border border-indigo-400/30 shadow-[0_0_20px_rgba(99,102,241,0.25)] backdrop-blur-xl flex items-center gap-2.5 text-xs font-mono font-extrabold uppercase tracking-widest text-indigo-300"
          >
            <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
            NEXT-GEN BRAND PLATFORM • 2026 EDITION
          </motion.div>
        </div>

        {/* Hero Title & CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
              Build High-Impact Digital Experiences That Scale
            </h1>

            <p className="text-indigo-200/90 text-base sm:text-xl leading-relaxed max-w-xl">
              Empowering over 140,000 global design & engineering teams to create, iterate, and deploy modern e-commerce web apps in real-time.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(99,102,241,0.4)] flex items-center gap-2 transition-all"
              >
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-200 font-bold text-xs uppercase tracking-widest hover:bg-indigo-900/60 transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current text-indigo-400" />
                <span>Watch 2-Min Demo</span>
              </motion.button>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-6 border-t border-indigo-900/50 flex items-center gap-6 flex-wrap">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                ].map((src, idx) => (
                  <img key={idx} src={src} alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-indigo-950 object-cover" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs font-mono font-bold text-white ml-1">4.9/5</span>
                </div>
                <div className="text-xs text-indigo-300/80 font-mono mt-0.5">Trusted by 10,000+ world-class teams</div>
              </div>
            </div>
          </div>

          {/* Right Visual SaaS Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative rounded-[2.5rem] bg-indigo-950/40 border-2 border-indigo-500/30 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl space-y-6"
          >
            {/* Dashboard Controls Header */}
            <div className="flex items-center justify-between border-b border-indigo-800/40 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex gap-2">
                {['analytics', 'revenue'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-mono font-bold uppercase transition-all ${
                      activeTab === tab
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-900/40 text-indigo-300 hover:bg-indigo-900/80'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-indigo-300 uppercase">TOTAL MONTHLY REVENUE</div>
                  <div className="text-3xl font-black text-white font-mono mt-0.5">$184,920.00</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +28.4%
                </span>
              </div>

              {/* Simulated Graph Wave */}
              <div className="h-36 w-full bg-indigo-900/30 rounded-2xl border border-indigo-800/40 p-4 flex items-end justify-between gap-2">
                {[40, 65, 45, 80, 55, 90, 75, 100, 85, 95].map((val, idx) => (
                  <div key={idx} className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-md transition-all duration-500" style={{ height: `${val}%` }} />
                ))}
              </div>
            </div>

            {/* Floating Live Badge */}
            <div className="p-4 rounded-2xl bg-indigo-900/60 border border-indigo-400/40 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono text-indigo-200">ISO-27001 Certified & SOC-2 Compliant</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">ACTIVE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
