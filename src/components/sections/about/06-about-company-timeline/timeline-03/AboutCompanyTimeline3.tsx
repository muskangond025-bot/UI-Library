import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flag, Rocket, Trophy, Globe } from 'lucide-react';

export function AboutCompanyTimeline3({ data }: { data?: any }) {
  const milestones = [
    { year: '2020', title: 'Company Foundation', desc: 'Started with a visionary team of 3 engineers aiming to redefine modern web component architecture.', icon: Rocket },
    { year: '2022', title: 'Global Series A & Expansion', desc: 'Scaled operations across 12 countries and crossed 100,000 active developer deployments.', icon: Globe },
    { year: '2024', title: 'Flagship UI Design System', desc: 'Launched enterprise component libraries featuring native micro-interactions and multi-morphism themes.', icon: Trophy },
    { year: '2026', title: 'AI-Native Automation', desc: 'Integrated autonomous design engines and real-time design tokens for global enterprise teams.', icon: Flag }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-cyan-400 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-black tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> DESKTOP DASHBOARD GANTT CHART #03
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Company Journey & Key Milestones</h2>
          <p className="opacity-80 text-base sm:text-lg">Tracing our history from founding vision to global industry leadership.</p>
        </div>

        {/* GANTT CHART: Best for Desktop Dashboard Multi-Project Schedules */}
        <div className={`p-8 rounded-3xl space-y-8 overflow-x-auto bg-slate-900/90 border border-cyan-500/40 shadow-2xl text-slate-200`}>
          <div className="flex items-center justify-between min-w-[700px] border-b border-slate-700/50 pb-4 text-xs font-mono font-bold opacity-60">
            <span>PROJECT PHASE / MILESTONE</span>
            <div className="grid grid-cols-4 gap-12 text-center w-1/2">
              <span>Q1 2024</span>
              <span>Q2 2024</span>
              <span>Q3 2024</span>
              <span>Q4 2024</span>
            </div>
          </div>
          <div className="space-y-6 min-w-[700px]">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-center justify-between gap-6">
                <div className="w-1/2 space-y-1">
                  <h4 className="font-bold text-base">{m.title}</h4>
                  <p className="opacity-70 text-xs">{m.desc}</p>
                </div>
                <div className="w-1/2 bg-slate-800/50 h-8 rounded-xl p-1 relative flex items-center">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${(i + 1) * 23}%` }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="h-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-end px-3 text-[10px] font-bold text-white shadow-md">
                    {m.year}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
