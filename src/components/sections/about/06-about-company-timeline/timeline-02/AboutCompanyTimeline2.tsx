import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flag, Rocket, Trophy, Globe } from 'lucide-react';

export function AboutCompanyTimeline2({ data }: { data?: any }) {
  const milestones = [
    { year: '2020', title: 'Company Foundation', desc: 'Started with a visionary team of 3 engineers aiming to redefine modern web component architecture.', icon: Rocket },
    { year: '2022', title: 'Global Series A & Expansion', desc: 'Scaled operations across 12 countries and crossed 100,000 active developer deployments.', icon: Globe },
    { year: '2024', title: 'Flagship UI Design System', desc: 'Launched enterprise component libraries featuring native micro-interactions and multi-morphism themes.', icon: Trophy },
    { year: '2026', title: 'AI-Native Automation', desc: 'Integrated autonomous design engines and real-time design tokens for global enterprise teams.', icon: Flag }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#eef2f7] text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-black tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> COMPACT HORIZONTAL STEPPER #02
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Company Journey & Key Milestones</h2>
          <p className="opacity-80 text-base sm:text-lg">Tracing our history from founding vision to global industry leadership.</p>
        </div>

        {/* HORIZONTAL: Best for Low Data Volume (Left to Right Fixed Steps) */}
        <div className="relative pt-8">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-indigo-500/30 -translate-y-1/2 rounded-full z-0" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} className="flex flex-col items-center space-y-6">
                  <div className={`p-6 rounded-3xl space-y-3 w-full flex-1 flex flex-col justify-between bg-[#eef2f7] shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff] border border-white/60 text-slate-800`}>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs">{m.year}</span>
                      <span className="text-xs font-mono font-bold opacity-60">STEP 0{i+1}</span>
                    </div>
                    <h3 className="text-xl font-bold">{m.title}</h3>
                    <p className="opacity-80 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg border-4 border-slate-900 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
