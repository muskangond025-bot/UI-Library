import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flag, Rocket, Trophy, Globe } from 'lucide-react';

export function AboutCompanyTimeline12({ data }: { data?: any }) {
  const milestones = [
    { year: '2020', title: 'Company Foundation', desc: 'Started with a visionary team of 3 engineers aiming to redefine modern web component architecture.', icon: Rocket },
    { year: '2022', title: 'Global Series A & Expansion', desc: 'Scaled operations across 12 countries and crossed 100,000 active developer deployments.', icon: Globe },
    { year: '2024', title: 'Flagship UI Design System', desc: 'Launched enterprise component libraries featuring native micro-interactions and multi-morphism themes.', icon: Trophy },
    { year: '2026', title: 'AI-Native Automation', desc: 'Integrated autonomous design engines and real-time design tokens for global enterprise teams.', icon: Flag }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-emerald-400 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-black tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> SCI-FI HUD REAL-TIME TELEMETRY FEED #12
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Company Journey & Key Milestones</h2>
          <p className="opacity-80 text-base sm:text-lg">Tracing our history from founding vision to global industry leadership.</p>
        </div>

        {/* ACTIVITY FEED: Best for SaaS & Social Real-Time Event Logs */}
        <div className="max-w-3xl mx-auto space-y-4">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} className={`p-6 rounded-2xl flex items-start gap-4 hover:translate-x-1.5 transition-transform bg-slate-900/90 border border-emerald-500/30 text-slate-200 shadow-lg`}>
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-lg">{m.title}</h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-semibold">{m.year} • Live</span>
                  </div>
                  <p className="opacity-80 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
