import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Terminal, Shield, Cpu, Activity, ArrowRight, Play } from 'lucide-react';

export function AboutHero8({ data, section }: { data?: any; section?: any }) {
  const [activeTab, setActiveTab] = useState('stack');
  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-purple-100 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Holographic Top Telemetry Banner */}
        <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 backdrop-blur-2xl flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-purple-300 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
            <span className="font-bold uppercase tracking-widest">CYBER HUD ONLINE #08</span>
          </div>
          <div className="flex gap-6">
            <span>UPTIME: 99.99%</span>
            <span>LATENCY: 0.2MS</span>
            <span>REGIONS: 64 NODES</span>
          </div>
        </div>

        {/* Hero Title & Command Dashboard */}
        <div className="p-8 sm:p-14 rounded-[2.5rem] bg-purple-950/30 border-2 border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.25)] backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Iridescent Holographic Cyber Infrastructure
            </h1>
            <p className="text-purple-200/80 text-base sm:text-lg leading-relaxed">
              Engineered for high-tech enterprise platforms with real-time particle feedback, laser scanline animation loops, and holographic HUD states.
            </p>

            <div className="flex gap-3">
              {['stack', 'security', 'architecture'].map(t => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                    activeTab === t
                      ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                      : 'bg-purple-900/40 text-purple-300 hover:bg-purple-900/60'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-black/80 border border-purple-500/40 text-xs font-mono text-purple-200 shadow-inner">
              {activeTab === 'stack' && '> SYSTEM: React 19 + TypeScript + TailWind CSS + Framer Motion 12'}
              {activeTab === 'security' && '> STATUS: End-to-End Encrypted Quantum Ledger Active'}
              {activeTab === 'architecture' && '> CLUSTER: 64 Regional Edge Processing Nodes Online'}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button className="px-8 py-4 rounded-2xl bg-purple-600 text-white font-extrabold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center gap-2">
                <span>Deploy Cyber Node</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-black/90 border border-purple-500/40 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between text-xs font-mono text-purple-400">
              <span className="flex items-center gap-2"><Cpu className="w-4 h-4" /> CORE TELEMETRY</span>
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div className="text-5xl font-black text-white font-mono">50K+ RPS</div>
            <p className="text-xs text-purple-300 font-mono leading-relaxed">Real-time API requests processed per second across our global edge computing network.</p>
          </div>
        </div>
      </div>
    </section>
  );
}